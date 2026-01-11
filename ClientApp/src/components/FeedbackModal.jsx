
import React, { useState } from 'react';
import { refineRequirement } from '../geminiService';

const FeedbackModal = ({ app, onClose, onSubmit }) => {
    const [type, setType] = useState('Feedback');
    const [content, setContent] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [isRefining, setIsRefining] = useState(false);

    const handleRefine = async () => {
        if (!content) return;
        setIsRefining(true);
        const refined = await refineRequirement(content);
        setContent(refined);
        setIsRefining(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            appId: app.id,
            appName: app.name,
            type,
            content,
            priority,
            timestamp: new Date(),
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm dark:bg-slate-950/80">
            <div className="relative w-full max-w-2xl glass-panel rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 bg-white dark:bg-slate-900">
                {/* Header Decor */}
                <div className="h-2 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500"></div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>

                <div className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-lg">
                            <i className={`fa-solid ${app.icon} text-3xl text-orange-600`}></i>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold font-outfit">{app.name}</h2>
                            <p className="text-slate-500 text-sm flex items-center gap-2 dark:text-slate-400">
                                <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-[10px] font-bold tracking-wider uppercase">
                                    {app.category}
                                </span>
                                • {app.platform} Application
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="bg-transparent dark:bg-slate-950/50 rounded-xl p-1 mb-6">
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setType('Feedback')}
                                    className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${type === 'Feedback' ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30' : 'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'}`}
                                >
                                    Improve Existing App
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setType('Requirement')}
                                    className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${type === 'Requirement' ? 'bg-slate-800 text-white shadow-lg' : 'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'}`}
                                >
                                    Request a New Feature
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 dark:text-slate-300">
                                {type === 'Feedback' ? 'Tell us your experience' : 'Describe the requirement'}
                            </label>
                            <div className="relative">
                                <textarea
                                    required
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="w-full h-40 bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 shadow-sm dark:bg-slate-950/50 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-600"
                                    placeholder={type === 'Feedback' ? "What's working? What isn't? Be specific..." : "Functional details, expected outcome, and business case..."}
                                ></textarea>
                                <button
                                    type="button"
                                    onClick={handleRefine}
                                    disabled={isRefining || !content}
                                    className="absolute bottom-4 right-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-xs font-semibold rounded-lg border border-slate-300 flex items-center gap-2 transition-all disabled:opacity-50 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-600 dark:text-slate-300"
                                >
                                    {isRefining ? (
                                        <i className="fa-solid fa-spinner animate-spin"></i>
                                    ) : (
                                        <i className="fa-solid fa-wand-magic-sparkles text-blue-500 dark:text-blue-400"></i>
                                    )}
                                    AI Refine
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 dark:text-slate-300">Priority Level</label>
                                <select
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-slate-900 outline-none shadow-sm dark:bg-slate-950/50 dark:border-slate-700 dark:text-white"
                                >
                                    <option value="Low">Low - Improvement</option>
                                    <option value="Medium">Medium - Standard</option>
                                    <option value="High">High - Critical/Urgent</option>
                                </select>
                            </div>
                            <div className="flex items-end">
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-orange-900/20 transform hover:-translate-y-0.5"
                                >
                                    Submit Feedback
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;
