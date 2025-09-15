// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ currentLang, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load preferensi dark mode
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const enabled = savedMode || (!localStorage.getItem('darkMode') && prefersDark);
    setIsDarkMode(enabled);

    if (enabled) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-yellow-500 text-white flex items-center justify-center rounded-lg font-bold">
              T
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
              Treemas Solusi Utama
            </h1>
          </div>

          {/* Menu */}
          <div className="flex space-x-8 lg:space-x-12 text-sm sm:text-base">
            {[
              { name: currentLang === 'en' ? 'Home' : 'Beranda', to: 'hero' },
              { name: currentLang === 'en' ? 'Features' : 'Fitur', to: 'features' },
              { name: currentLang === 'en' ? 'About' : 'Tentang', to: 'why-choose' },
              { name: currentLang === 'en' ? 'Contact' : 'Kontak', to: 'contact-form' },
            ].map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth
                duration={800}
                offset={-70}
                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          {/* Dark mode + Ganti bahasa + CTA */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            {/* Tombol ganti bahasa */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition text-sm font-medium"
            >
              {currentLang === 'en' ? 'ID' : 'EN'}
            </button>

            {/* Dark mode */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2 sm:p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* CTA */}
            <button
              onClick={() =>
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition font-medium text-sm sm:text-base"
            >
              {currentLang === 'en' ? 'Get Started' : 'Memulai'}
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-500 text-white flex items-center justify-center rounded-lg font-bold">
              T
            </div>
            <h1 className="text-lg font-bold text-gray-800 dark:text-white">Treemas</h1>
          </div>

          {/* Dark mode + Ganti bahasa + Hamburger */}
          <div className="flex items-center space-x-2">
            {/* Tombol ganti bahasa */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition text-sm font-medium"
            >
              {currentLang === 'en' ? 'ID' : 'EN'}
            </button>

            {/* Dark mode */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className="md:hidden mt-1 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-4 rounded-b-lg shadow-lg animate-fadeIn"
            role="menu"
          >
            <div className="flex flex-col space-y-5 text-gray-700 dark:text-gray-300">
              {[
                { name: currentLang === 'en' ? 'Home' : 'Beranda', to: 'hero' },
                { name: currentLang === 'en' ? 'Features' : 'Fitur', to: 'features' },
                { name: currentLang === 'en' ? 'About' : 'Tentang', to: 'why-choose' },
                { name: currentLang === 'en' ? 'Contact' : 'Kontak', to: 'contact-form' },
              ].map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={800}
                  offset={-70}
                  onClick={closeMenu}
                  className="cursor-pointer text-base hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
                  role="menuitem"
                >
                  {item.name}
                </ScrollLink>
              ))}

              <button
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  closeMenu();
                }}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 rounded-md transition"
              >
                {currentLang === 'en' ? 'Get Started' : 'Mulai'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Animasi */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
