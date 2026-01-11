import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`
        relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
        ${theme === 'dark' ? 'bg-slate-700 ring-offset-slate-900 shadow-inner' : 'bg-orange-100 ring-offset-white shadow-inner'}
      `}
            aria-label="Toggle Theme"
        >
            <span className="sr-only">Use setting</span>
            <span
                className={`
          ${theme === 'dark' ? 'translate-x-7 bg-slate-800 border-slate-600' : 'translate-x-1 bg-white border-orange-200'}
          inline-block h-6 w-6 transform rounded-full border shadow transition-transform duration-300 flex items-center justify-center
        `}
            >
                {theme === 'dark' ? (
                    <i className="fa-solid fa-moon text-orange-400 text-[10px]"></i>
                ) : (
                    <i className="fa-solid fa-sun text-yellow-500 text-[10px]"></i>
                )}
            </span>
        </button>
    );
};

export default ThemeToggle;
