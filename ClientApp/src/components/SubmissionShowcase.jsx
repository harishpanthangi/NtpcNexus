import React, { useEffect, useState } from 'react';
import { fetchRecentSubmissions } from '../services/api';

const SubmissionShowcase = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSubmissions = async () => {
            try {
                const data = await fetchRecentSubmissions();
                setSubmissions(data);
            } catch (error) {
                console.error("Failed to load submissions:", error);
            } finally {
                setLoading(false);
            }
        };

        loadSubmissions();
    }, []);

    if (loading || submissions.length === 0) return null;

    // Split submissions into two rows for the marquee effect
    const midPoint = Math.ceil(submissions.length / 2);
    const firstRow = submissions.slice(0, midPoint);
    const secondRow = submissions.slice(midPoint);

    // Duplicate arrays to create seamless infinite scroll loop
    const row1Items = [...firstRow, ...firstRow, ...firstRow, ...firstRow];
    const row2Items = [...secondRow, ...secondRow, ...secondRow, ...secondRow];

    const SubmissionCard = ({ item }) => (
        <div className="submission-card flex-shrink-0 w-80 p-5 mx-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-orange-600 font-bold text-sm">
                    {item.submittedBy ? item.submittedBy.substring(0, 2).toUpperCase() : 'US'}
                </div>
                <div>
                    <h4 className="font-bold /*text-slate-800*/ dark:text-gray-100 text-sm">{item.submittedBy || 'Anonymous'}</h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{item.department || 'Employee'}</span>
                </div>
                <div className="ml-auto">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${item.submissionType === 'NewAppProposal' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300' :
                        item.submissionType === 'FeatureRequest' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300' :
                            'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300'
                        }`}>
                        {item.submissionType === 'NewAppProposal' ? 'Idea' : item.submissionType === 'FeatureRequest' ? 'Feature' : 'Feedback'}
                    </span>
                </div>
            </div>
            <p className="/*text-slate-600*/ dark:text-slate-300 text-sm line-clamp-3 leading-relaxed">
                "{item.description}"
            </p>
            {item.title && (
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Proposed App</span>
                    <p className="text-sm font-bold text-orange-600 dark:text-orange-400 mt-0.5">{item.title}</p>
                </div>
            )}
        </div>
    );

    return (
        <section id="submissions-showcase" className="py-20 overflow-hidden /*bg-slate-50*/ dark:bg-[#020617] relative border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Community Voices</span>
                <h2 className="text-3xl font-bold font-outfit /*text-slate-900*/ dark:text-white">Recent Contributions</h2>
            </div>

            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 /*bg-gradient-to-r*/   from-slate-50 to-transparent dark:from-[#020617] dark:to-transparent z-10 pointer-events-none transition-colors duration-300"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 /*bg-gradient-to-l*/ from-slate-50 to-transparent dark:from-[#020617] dark:to-transparent z-10 pointer-events-none transition-colors duration-300"></div>

            {/* Row 1 - Left to Right */}
            <div className="flex mb-6 w-[200%] animate-scroll-right hover:pause">
                {row1Items.map((item, index) => (
                    <SubmissionCard key={`row1-${item.id}-${index}`} item={item} />
                ))}
            </div>

            {/* Row 2 - Right to Left */}
            <div className="flex w-[200%] animate-scroll-left hover:pause">
                {row2Items.map((item, index) => (
                    <SubmissionCard key={`row2-${item.id}-${index}`} item={item} />
                ))}
            </div>
        </section>
    );
};

export default SubmissionShowcase;
