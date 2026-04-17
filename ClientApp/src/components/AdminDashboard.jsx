
import React, { useState, useEffect } from 'react';
import { fetchAllSubmissions } from '../services/api';

const AdminDashboard = ({ onExit }) => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('feedback'); // 'feedback' or 'proposals'

    useEffect(() => {
        const loadJava = async () => {
            try {
                const data = await fetchAllSubmissions();
                setSubmissions(data);
            } catch (error) {
                console.error("Error loading submissions", error);
            } finally {
                setLoading(false);
            }
        };
        loadJava();
    }, []);

    const filteredSubmissions = submissions.filter(item => {
        if (activeTab === 'feedback') {
            return item.submissionType === 'Feedback' || item.submissionType === 'Requirement';
        }
        return item.submissionType === 'Proposal';
    });

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen /*bg-slate-50*/ dark:bg-slate-950 p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h1 className="text-3xl font-bold font-outfit /*text-slate-900*/ dark:text-white">Admin Dashboard</h1>
                        <p className="/*text-slate-500*/ dark:text-slate-400">Review user feedback and new application proposals</p>
                    </div>
                    <button
                        onClick={onExit}
                        className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300"
                    >
                        <i className="fa-solid fa-arrow-left mr-2"></i> Back to Home
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('feedback')}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${activeTab === 'feedback'
                            ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/20'
                            : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-200 dark:hover:border-slate-800'
                            }`}
                    >
                        <i className="fa-solid fa-comments"></i>
                        Feedbacks & Requests
                    </button>
                    <button
                        onClick={() => setActiveTab('proposals')}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${activeTab === 'proposals'
                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                            : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-200 dark:hover:border-slate-800'
                            }`}
                    >
                        <i className="fa-solid fa-lightbulb"></i>
                        New App Proposals
                    </button>
                </div>

                {/* Content */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <i className="fa-solid fa-circle-notch fa-spin text-4xl text-slate-300 dark:text-slate-700"></i>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {filteredSubmissions.length === 0 ? (
                            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800">
                                <i className="fa-regular fa-folder-open text-4xl text-slate-300 dark:text-slate-700 mb-4"></i>
                                <p className="text-slate-500 dark:text-slate-400">No submissions found in this category</p>
                            </div>
                        ) : (
                            filteredSubmissions.map(item => (
                                <div key={item.id} className="submission-card dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all shadow-sm">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${item.submissionType === 'Proposal' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                                                    item.submissionType === 'FeatureRequest' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                                    }`}>
                                                    {item.submissionType === 'Proposal' ? 'Idea Proposal' : item.submissionType}
                                                </span>
                                                <span className="text-slate-400 text-xs flex items-center gap-1">
                                                    <i className="fa-regular fa-clock"></i>
                                                    {formatDate(item.createdAt)}
                                                </span>
                                            </div>

                                            {item.title ? (
                                                <h3 className="text-lg font-bold /*text-slate-900*/ dark:text-white mb-2">{item.title}</h3>
                                            ) : (
                                                <h3 className="text-lg font-bold /*text-slate-900*/ dark:text-white mb-2">
                                                    {item.application?.name ? `Feedback for ${item.application.name}` : 'General Feedback'}
                                                </h3>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.priority === 'High' ? 'bg-red-50 text-red-600 border border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30' :
                                                item.priority === 'Medium' ? 'bg-orange-50 text-orange-600 border border-orange-100 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-900/30' :
                                                    'bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                                                }`}>
                                                {item.priority} Priority
                                            </span>
                                            {item.application && activeTab === 'feedback' && (
                                                <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                                    <i className={`fa-solid ${item.application.icon} text-orange-600`}></i>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 text-sm text-slate-600 dark:text-slate-300 sm:text-base leading-relaxed mb-4 whitespace-pre-wrap">
                                        {item.description}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <div>
                                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">submitted by</label>
                                            <p className="text-sm font-medium text-slate-700 dark:text-slate-200 tracking-wider font-mono bg-slate-100 dark:bg-slate-800 inline-block px-2 py-0.5 rounded text-xs">{item.submittedBy}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
