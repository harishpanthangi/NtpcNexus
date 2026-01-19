
import React, { useState, useMemo, useEffect } from 'react';
import { CATEGORIES } from './constants';
import { fetchApplications } from './services/api';
import Hero from './components/Hero';
import FeedbackModal from './components/FeedbackModal';
import ProposalModal from './components/ProposalModal';
import LoginModal from './components/LoginModal';
import ThemeToggle from './components/ThemeToggle';

import SuccessModal from './components/SuccessModal';
import SubmissionShowcase from './components/SubmissionShowcase';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Success Modal State
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successModalContent, setSuccessModalContent] = useState({
    title: "",
    message: ""
  });


  const [apps, setApps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadApps = async () => {
      setIsLoading(true);
      const data = await fetchApplications();
      setApps(data);
      setIsLoading(false);
    };
    loadApps();
  }, []);

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, apps]);

  const handleSubmit = (data) => {
    setSubmissions([data, ...submissions]);
    setSelectedApp(null);
    setSuccessModalContent({
      title: "Feedback Submitted!",
      message: "Thank you for your valuable feedback. Our team will review it shortly."
    });
    setShowSuccessModal(true);
  };

  const handleProposalSubmit = (data) => {
    setSubmissions([data, ...submissions]);
    setShowProposalModal(false);
    setSuccessModalContent({
      title: "Proposal Received!",
      message: "Your innovative idea has been submitted to our Innovation Lab for feasibility review."
    });
    setShowSuccessModal(true);
  };

  const handleLogin = (credentials) => {
    console.log("Logged in with:", credentials);
    setShowLoginModal(false);
    // You might want to set some auth state here
    setSuccessModalContent({
      title: "Welcome Back!",
      message: "You have successfully logged in to NTPC Nexus."
    });
    setShowSuccessModal(true);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-panel border-b border-gray-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}ntpc-logo.png`} alt="NTPC Logo" className="h-10 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="https://ccitapps.ntpc.co.in/ccitapps" className="text-sm font-medium hover:text-orange-600 transition-colors dark:text-slate-300 dark:hover:text-orange-400" target="_blank">Existing Apps</a>
          <button
            onClick={() => scrollToSection('submissions-showcase')}
            className="text-sm font-medium hover:text-orange-600 transition-colors dark:text-slate-300 dark:hover:text-orange-400">
            Ideas suggested
          </button>
          {/*<button onClick={() => scrollToSection('innovation-lab')} className="text-sm font-medium hover:text-orange-600 transition-colors dark:text-slate-300 dark:hover:text-orange-400">Suggest New App</button>*/}
          <div className="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
          <ThemeToggle />
          <button
            onClick={() => setShowLoginModal(true)}
            className="px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-slate-800 transition-all dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
            Employee Login
          </button>
        </div>
      </nav>

      <Hero />

      {/* Explorer Section */}
      <section className="/*max-w-7xl*/ mx-auto px-6 mt-12" id="app-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold font-outfit mb-2">Application Explorer</h2>
            <p className="text-slate-500 dark:text-slate-400">Search through our digital ecosystem of {apps.length} applications</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
              <input
                type="text"
                placeholder="Search apps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl w-full sm:w-64 focus:ring-2 focus:ring-orange-500 outline-none transition-all shadow-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-4 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${selectedCategory === 'All'
              ? 'bg-orange-600 text-white shadow-lg glow-orange'
              : 'bg-white text-slate-500 hover:text-slate-900 border border-gray-200 hover:border-gray-300 shadow-sm dark:bg-slate-900 dark:text-slate-400 dark:hover:text-white dark:border-slate-700'
              }`}
          >
            All Systems
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${selectedCategory === cat
                ? 'bg-orange-600 text-white shadow-lg glow-orange'
                : 'bg-white text-slate-500 hover:text-slate-900 border border-gray-200 hover:border-gray-300 shadow-sm dark:bg-slate-900 dark:text-slate-400 dark:hover:text-white dark:border-slate-700'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* App Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <i className="fa-solid fa-circle-notch fa-spin text-4xl text-orange-500"></i>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredApps.map(app => (
              <div
                key={app.id}
                onClick={() => setSelectedApp(app)}
                className="group relative glass-panel rounded-3xl p-6 border border-gray-200 dark:border-slate-800 hover:border-orange-200 transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-white dark:bg-slate-900 hover:shadow-xl hover:shadow-orange-900/5"
              >
                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 dark:bg-slate-800 dark:border-slate-700 flex items-center justify-center group-hover:bg-orange-50 dark:group-hover:bg-slate-700 transition-colors shadow-sm">
                      <i className={`fa-solid ${app.icon} text-2xl text-orange-500 group-hover:scale-110 transition-transform`}></i>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 px-2 py-0.5 rounded">
                        {app.platform}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-outfit mb-2 group-hover:text-orange-600 transition-colors dark:group-hover:text-orange-400">
                    {app.name}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2 font-light leading-relaxed mb-6 dark:text-slate-400">
                    {app.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <i className="fa-solid fa-users"></i>
                      <span>{(app.usageCount || 100).toLocaleString()}+ Users</span>
                    </div>
                    <div className="text-orange-500 text-sm font-bold opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-2">
                      Submit Feedback <i className="fa-solid fa-arrow-right text-xs"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && filteredApps.length === 0 && (
          <div className="text-center py-20 bg-white/50 rounded-3xl border border-dashed border-slate-300">
            <i className="fa-solid fa-magnifying-glass text-4xl text-slate-400 mb-4"></i>
            <h3 className="text-xl font-medium text-slate-500">No applications found matching your search</h3>
          </div>
        )}
      </section>

      {/* Suggest Section */}
      <section id="innovation-lab" className="max-w-7xl mx-auto px-6 mt-32 mb-20">
        <div className="glass-panel rounded-[2rem] p-10 md:p-16 border border-gray-200 dark:border-slate-800 relative overflow-hidden bg-white dark:bg-slate-900">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/10 to-transparent -z-10"></div>
          <div className="max-w-2xl">
            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Innovation Lab</span>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">Got an idea for a <br />new application?</h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed font-light dark:text-slate-400">
              We're constantly looking to automate workflows and improve employee productivity.
              Submit a high-level proposal and our team will review the feasibility.
            </p>
            <button
              onClick={() => setShowProposalModal(true)}
              className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-2xl hover:scale-105 flex items-center gap-3 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
              Submit Your Idea <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>

          <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2">
            <div className="grid grid-cols-2 gap-4 animate-float">
              <div className="w-24 h-24 bg-white/80 rounded-3xl border border-slate-200 rotate-12 flex items-center justify-center shadow-lg">
                <i className="fa-solid fa-lightbulb text-3xl text-yellow-400"></i>
              </div>
              <div className="w-24 h-24 bg-white/80 rounded-3xl border border-slate-200 -rotate-12 flex items-center justify-center translate-y-8 shadow-lg">
                <i className="fa-solid fa-code text-3xl text-blue-400"></i>
              </div>
              <div className="w-24 h-24 bg-white/80 rounded-3xl border border-slate-200 -rotate-12 flex items-center justify-center shadow-lg">
                <i className="fa-solid fa-rocket text-3xl text-orange-400"></i>
              </div>
              <div className="w-24 h-24 bg-white/80 rounded-3xl border border-slate-200 rotate-12 flex items-center justify-center translate-y-8 shadow-lg">
                <i className="fa-solid fa-brain text-3xl text-purple-400"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubmissionShowcase />

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}ntpc-logo.png`} alt="NTPC Logo" className="h-8 w-auto /*grayscale opacity-50*/ hover:grayscale-0 hover:opacity-100 transition-all" />
            <span className="text-sm font-bold tracking-widest text-slate-500 dark:text-slate-400">© 2026 NTPC LIMITED. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-6 text-slate-500 text-sm font-medium dark:text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">IT Standards</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Contact Support</a>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal
          title={successModalContent.title}
          message={successModalContent.message}
          onClose={() => setShowSuccessModal(false)}
        />
      )}

      {/* Modal */}

      {/* Modal */}
      {selectedApp && (
        <FeedbackModal
          app={selectedApp}
          onClose={() => setSelectedApp(null)}
          onSubmit={handleSubmit}
        />
      )}

      {/* Proposal Modal */}
      {showProposalModal && (
        <ProposalModal
          onClose={() => setShowProposalModal(false)}
          onSubmit={handleProposalSubmit}
        />
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
};

export default App;
