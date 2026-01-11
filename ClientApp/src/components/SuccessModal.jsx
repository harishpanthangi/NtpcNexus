import React from 'react';

const SuccessModal = ({ onClose, title = "Success!", message = "Your submission has been received." }) => {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="themed-modal rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-slate-200 dark:border-slate-800 text-center transform scale-100 animate-in zoom-in-95 duration-200 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-red-500"></div>

                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-green-50 dark:ring-green-900/10">
                    <i className="fa-solid fa-check text-4xl text-green-500"></i>
                </div>

                <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white mb-2">{title}</h3>
                <p className="dark:text-slate-400 mb-8 leading-relaxed text-sm">
                    {message}
                </p>

                <button
                    onClick={onClose}
                    className="modal-button w-full py-3.5 px-6 font-bold rounded-xl transition-all transform hover:scale-[1.02] shadow-lg"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;
