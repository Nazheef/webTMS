

// src/App.js
import React, { useState, useEffect } from 'react';
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

  return (
    
    <div className={`font-sans min-h-screen transition-colors duration-300 dark:bg-gray-900 ${isDarkMode ? '' : 'bg-white'}`}>
      <Navbar /> {/* Tidak ada perubahan di navbar */}
      <Hero isDarkMode={isDarkMode} />
      <Features isDarkMode={isDarkMode} />
      <WhyChoose isDarkMode={isDarkMode} />
      <Steps isDarkMode={isDarkMode} />
      <MissionVision isDarkMode={isDarkMode} />
      <CoreValues isDarkMode={isDarkMode} />
      <Achievements isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
      <Results isDarkMode={isDarkMode} />
      <CTA isDarkMode={isDarkMode} />
      <ContactForm isDarkMode={isDarkMode} />

      {/* Tambahkan toggle di bawah ContactForm, sebelum Footer */}
      

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;




