
import React from 'react';
import ngobrol from '../assets/image/orangngobrol.png';

const Hero = () => {
  return (
    <section id="hero"className="relative py-24 px-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed     text-gray-600 dark:text-gray-300">
              Transform your business with our all-in-one financial management platform.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-italic leading-tight text-xl font-bold text-gray-800 dark:text-white">
              Streamline Your
              <span className="text-yellow-500 font-style-italic"> Financial</span> Operations
            </h1>
            <p className="text-gray-600 mt-6        text-gray-600 dark:text-gray-300">
              Integrate accounting, procurement, disbursement, and budgeting in one powerful solution.
            </p>
           
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src={ngobrol} alt="Team Working" className=" " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

