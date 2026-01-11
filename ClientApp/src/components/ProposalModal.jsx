import React, { useState } from 'react';
import { refineRequirement } from '../geminiService';

const ProposalModal = ({ onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [justification, setJustification] = useState('');
    const [description, setDescription] = useState('');
    const [beneficiaries, setBeneficiaries] = useState('');
    const [references, setReferences] = useState('');
    const [department, setDepartment] = useState('IT');
    const [isRefining, setIsRefining] = useState(false);

    const handleRefine = async (field, setValue, value) => {
        if (!value) return;
        setIsRefining(true);
        const refined = await refineRequirement(value);
        setValue(refined);
        setIsRefining(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title,
            justification,
            beneficiaries,
            description,
            references,
            department,
            type: 'Proposal',
            timestamp: new Date(),
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm dark:bg-slate-950/80">
            <div className="relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto custom-scrollbar bg-white dark:bg-slate-900">
                {/* Header Decor */}
                <div className="h-2 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500"></div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
                >
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>

                <div className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-purple-100 dark:from-slate-800 dark:to-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-lg">
                            <i className="fa-solid fa-lightbulb text-3xl text-orange-600"></i>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold font-outfit">Suggest New Application</h2>
                            <p className="text-slate-500 text-sm dark:text-slate-400">
                                Submit your innovative idea to improve NTPC workflows
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title & Department */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 dark:text-slate-300">Application Title</label>
                                <input
                                    type="text"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g., Smart Plant Monitoring System"
                                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-400 shadow-sm dark:bg-slate-950/50 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 dark:text-slate-300">Priority</label>
                                <select
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-slate-900 outline-none focus:ring-2 focus:ring-orange-500 shadow-sm dark:bg-slate-950/50 dark:border-slate-700 dark:text-white"
                                >
                                    <option value="HIGH">High - Urgent pain point</option>
                                    <option value="MD">Medium - Valuable improvement</option>
                                    <option value="LOW">Low - Nice to have</option>
                                </select>
                            </div>
                        </div>

                        {/* Business Justification */}
                        <div>
                            <label className="block text-sm font-medium mb-2 dark:text-slate-300">
                                Business Justification
                                <span className="text-slate-400 text-xs ml-2 font-normal">(Why do we need this app?)</span>
                            </label>
                            <div className="relative">
                                <textarea
                                    required
                                    value={justification}
                                    onChange={(e) => setJustification(e.target.value)}
                                    className="w-full h-32 bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-400 shadow-sm dark:bg-slate-950/50 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-600"
                                    placeholder="Explain the business value, ROI, or efficiency gains..."
                                ></textarea>
                                <button
                                    type="button"
                                    onClick={() => handleRefine('justification', setJustification, justification)}
                                    disabled={isRefining || !justification}
                                    className="absolute bottom-4 right-4 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-[10px] font-semibold rounded-lg border border-slate-300 flex items-center gap-2 transition-all disabled:opacity-50 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-600 dark:text-slate-300"
                                >
                                    <i className="fa-solid fa-wand-magic-sparkles text-purple-600"></i> AI Refine
                                </button>
                            </div>
                        </div>

                        {/* Who Benefits */}
                        <div>
                            <label className="block text-sm font-medium mb-2 dark:text-slate-300">
                                Who benefits and how?
                            </label>
                            <textarea
                                required
                                value={beneficiaries}
                                onChange={(e) => setBeneficiaries(e.target.value)}
                                className="w-full h-24 bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-400 shadow-sm dark:bg-slate-950/50 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-600"
                                placeholder="Describe the target audience and expected benefits..."
                            ></textarea>
                        </div>

                        {/* Application Description */}
                        <div>
                            <label className="block text-sm font-medium mb-2 dark:text-slate-300">
                                Application Description & Key Features
                                <span className="text-slate-400 text-xs ml-2 font-normal">(What should it do?)</span>
                            </label>
                            <div className="relative">
                                <textarea
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full h-32 bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-400 shadow-sm dark:bg-slate-950/50 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-600"
                                    placeholder="List the key features and functionality..."
                                ></textarea>
                                <button
                                    type="button"
                                    onClick={() => handleRefine('description', setDescription, description)}
                                    disabled={isRefining || !description}
                                    className="absolute bottom-4 right-4 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-[10px] font-semibold rounded-lg border border-slate-300 flex items-center gap-2 transition-all disabled:opacity-50 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-600 dark:text-slate-300"
                                >
                                    <i className="fa-solid fa-wand-magic-sparkles text-blue-600"></i> AI Refine
                                </button>
                            </div>
                        </div>

                        {/* References */}
                        <div>
                            <label className="block text-sm font-medium mb-2 dark:text-slate-300">
                                Optional links or references
                            </label>
                            <input
                                type="url"
                                value={references}
                                onChange={(e) => setReferences(e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-400 shadow-sm dark:bg-slate-950/50 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-600"
                                placeholder="https://..."
                            />
                        </div>

                        <div className="pt-4 border-t border-slate-200">
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-orange-900/20 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-lg"
                            >
                                <i className="fa-solid fa-paper-plane"></i> Submit Proposal
                            </button>
                            <p className="text-center text-slate-500 text-xs mt-4">
                                By submitting, you agree to the innovation lab terms of service.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProposalModal;
