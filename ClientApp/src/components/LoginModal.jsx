
import React, { useState } from 'react';

const LoginModal = ({ onClose, onLogin }) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login delay
        setTimeout(() => {
            onLogin({ userId });
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm dark:bg-slate-950/80">
            <div className="relative w-full max-w-md glass-panel rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 bg-white dark:bg-slate-900">
                {/* Header Decor */}
                <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
                >
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>

                <div className="p-8">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-lg mx-auto mb-4">
                            <i className="fa-solid fa-user-lock text-3xl text-orange-600"></i>
                        </div>
                        <h2 className="text-3xl font-bold font-outfit">Employee Login</h2>
                        <p className="text-slate-500 text-sm mt-2 dark:text-slate-400">
                            Access your secure dashboard
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 dark:text-slate-300">User ID</label>
                            <div className="relative">
                                <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"></i>
                                <input
                                    type="text"
                                    required
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-400 shadow-sm dark:bg-slate-950/50 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-600"
                                    placeholder="Enter your Employee ID"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 dark:text-slate-300">Password</label>
                            <div className="relative">
                                <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"></i>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-400 shadow-sm dark:bg-slate-950/50 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-600"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-orange-900/20 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-lg"
                        >
                            {loading ? (
                                <i className="fa-solid fa-circle-notch fa-spin"></i>
                            ) : (
                                <>
                                    <i className="fa-solid fa-right-to-bracket"></i> Login
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
