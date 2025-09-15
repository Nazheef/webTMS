

import React from 'react';
import img from '../assets/image/roket.png';
import astronot from '../assets/image/astronot.png';

const CoreValues = ({t}) => {
  return (
    <section className="py-20 bg-gray-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
       
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2 text-center md:text-left md:pr-8">
            <h2 className="text-8xl font-bold text-gray-800 text-8xl font-bold text-gray-800 dark:text-white"> {t.coreValues1.split(' ').map((word, i) =>
                word === "Core" ? (
                  <span key={i} className="">{word}</span>
                ) : (
                  `${word} `
                )
              )}</h2>
            <h2 className="text-8xl font-bold text-gray-800 text-8xl font-bold text-gray-800 dark:text-white"> {t.coreValues2.split(' ').map((word, i) =>
                word === "Values" ? (
                  <span key={i} className="">{word}</span>
                ) : (
                  `${word} `
                )
              )}</h2>
          </div>

          <div className="md:w-1/2">
            <img
              src={astronot}
              alt="Astronaut"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="text-center space-y-8">
          
          <div className="flex justify-center">
            <img
              src={img}
              alt="Rocket Launch"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto rounded-lg "
            />
          </div>

          
          

      
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto      text-gray-600 dark:text-gray-300">
           {t.at}{' '}
            <strong className="text-yellow-500">{t.empower}</strong> {t.itwithover}{' '}
            <strong className="text-yellow-500">{t.secursecurity}</strong> {t.toevery}.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto      text-gray-600 dark:text-gray-300">
            {t.ourintegrated}{' '}
          <strong className="text-yellow-500">{t.worksmarter}</strong>{t.notharder}{' '}
            <strong className="text-yellow-500">{t.time}</strong>{t.soyoucanfocus}
          </p>

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto               text-gray-600 dark:text-gray-300">
            {t.join}
          </p>

          
          <div className="flex justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium transition-transform duration-300 transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

