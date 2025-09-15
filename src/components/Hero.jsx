import React from 'react';
import ngobrol from '../assets/image/orangngobrol.png';

const Hero = ({ t }) => {
  // daftar kata yang akan diberi warna kuning (bisa tambah lagi kalau perlu)
  const highlightWords = ["financial", "keuangan"];

  return (
    <section id="hero" className="relative py-24 px-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed dark:text-gray-300">
              {t.heroSubtitle}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-gray-800 dark:text-white">
              {t.heroTitle.split(' ').map((word, i) =>
                highlightWords.includes(word.toLowerCase()) ? (
                  <span key={i} className="text-yellow-500 italic">{word} </span>
                ) : (
                  `${word} `
                )
              )}
            </h1>
            <p className="text-gray-600 mt-6 dark:text-gray-300">
              {t.heroSubtitle}
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src={ngobrol} alt="Team Working" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
  