// src/App.js
import React, { useState, useEffect } from 'react';
import translations from './i18n'; // ← tambahkan

// Impor semua komponen...
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import Steps from './components/Steps';
import MissionVision from './components/MissionVision';
import CoreValues from './components/CoreValues';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Results from './components/Results';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); // default bahasa Inggris
  const t = translations[language]; // shortcut untuk terjemahan

  // Mode gelap dari localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = savedMode || (!localStorage.getItem('darkMode') && prefersDark);
    setIsDarkMode(enabled);
    if (enabled) document.documentElement.classList.add('dark');
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

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  return (
    <div className={`font-sans min-h-screen transition-colors duration-300 dark:bg-gray-900 ${isDarkMode ? '' : 'bg-white'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} toggleLanguage={toggleLanguage} currentLang={language} />

      <Hero isDarkMode={isDarkMode} t={t} />
      <Features isDarkMode={isDarkMode} t={t} />
      <WhyChoose isDarkMode={isDarkMode} t={t} />
      <Steps isDarkMode={isDarkMode} t={t} />
      <MissionVision isDarkMode={isDarkMode} t={t} />
      <CoreValues isDarkMode={isDarkMode} t={t} />
      <Achievements isDarkMode={isDarkMode} t={t} />
      <Testimonials isDarkMode={isDarkMode} t={t} />
      <Results isDarkMode={isDarkMode} t={t} />
      <CTA isDarkMode={isDarkMode} t={t} />
      <ContactForm isDarkMode={isDarkMode} t={t} />
      
      <Footer isDarkMode={isDarkMode} t={t} />
    </div>
  );
}

export default App;