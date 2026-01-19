
import React from 'react';

const Hero = () => {
    const scrollToInnovation = () => {
        const section = document.getElementById('innovation-lab');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToAllApps = () => {
        const section = document.getElementById('app-container');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-20 px-4">
            {/* Background Animated Blobs */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
            </div>

            <div className="text-center max-w-4xl mx-auto space-y-6">
                <h1 className="text-5xl md:text-7xl font-extrabold font-outfit tracking-tight leading-tight">
                    Shape the Future of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400">
                        NTPC Digital Ecosystem
                    </span>
                </h1>
                <p className="text-lg md:text-xl /*text-slate-500*/ dark:text-slate-400 max-w-2xl mx-auto font-light">
                    Your insights drive our innovation. Your ideas power smarter operations, better experiences, and a more sustainable tomorrow.
                    Share a feature, fix a friction, or spark something bold.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-8">
                    <button onClick={scrollToAllApps} className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600">
                        <i className="fa-solid fa-magnifying-glass"></i> Help Improve Existing Applications
                    </button>
                    <button onClick={scrollToInnovation} className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 glow-orange flex items-center gap-2">
                        <i className="fa-solid fa-plus-circle"></i> Got an Idea? Let's build it together
                    </button>
                </div>
            </div>

            {/* New Cards Section */}
            {/*<section className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-20 mb-10">*/}
            {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">*/}
            {/*        <div className="card glass-panel p-8 rounded-2xl hover:bg-white transition-colors duration-300 border border-white/50 dark:border-slate-800 shadow-sm hover:shadow-xl dark:bg-slate-900">*/}
            {/*            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">*/}
            {/*                <i className="fa-solid fa-chart-line text-blue-600 dark:text-blue-400 text-xl"></i>*/}
            {/*            </div>*/}
            {/*            <h3 className="text-xl font-bold font-outfit mb-3">Real impact</h3>*/}
            {/*            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">*/}
            {/*                Ideas move through review, prototyping, and pilot. You’ll see status updates and outcomes.*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*        <div className="card glass-panel p-8 rounded-2xl hover:bg-white transition-colors duration-300 border border-white/50 dark:border-slate-800 shadow-sm hover:shadow-xl dark:bg-slate-900">*/}
            {/*            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">*/}
            {/*                <i className="fa-solid fa-users text-purple-600 dark:text-purple-400 text-xl"></i>*/}
            {/*            </div>*/}
            {/*            <h3 className="text-xl font-bold font-outfit mb-3">Human-centered</h3>*/}
            {/*            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">*/}
            {/*                We prioritize usability, accessibility, and workflows that save time at scale.*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*        <div className="card glass-panel p-8 rounded-2xl hover:bg-white transition-colors duration-300 border border-white/50 dark:border-slate-800 shadow-sm hover:shadow-xl dark:bg-slate-900">*/}
            {/*            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">*/}
            {/*                <i className="fa-solid fa-leaf text-green-600 dark:text-green-400 text-xl"></i>*/}
            {/*            </div>*/}
            {/*            <h3 className="text-xl font-bold font-outfit mb-3">Sustainable by design</h3>*/}
            {/*            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">*/}
            {/*                Digital improvements that drive efficiency, reliability, and lower emissions.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <div className="mt-16 animate-bounce text-slate-400 pb-10">
                <i className="fa-solid fa-chevron-down text-2xl"></i>
            </div>
        </div>
    );
};

export default Hero;
