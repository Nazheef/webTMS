

import React from 'react';
import img from '../assets/image/roket.png';
import astronot from '../assets/image/astronot.png';

const CoreValues = () => {
  return (
    <section className="py-20 bg-gray-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
       
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2 text-center md:text-left md:pr-8">
            <h2 className="text-8xl font-bold text-gray-800 text-8xl font-bold text-gray-800 dark:text-white">Core</h2>
            <h2 className="text-8xl font-bold text-gray-800 text-8xl font-bold text-gray-800 dark:text-white">Values</h2>
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
            At Treemas Solusi Utama, we believe that financial systems shouldn’t slow down your business. Instead, they should{' '}
            <strong className="text-yellow-500">empower</strong> it. With over 20 years of experience as a trusted IT consultant for the banking industry, we bring enterprise-grade{' '}
            <strong className="text-yellow-500">security and reliability</strong> to every business we serve.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto      text-gray-600 dark:text-gray-300">
            Our integrated platform simplifies accounting, procurement, disbursement, and budgeting into one seamless experience. Whether you're managing journals, generating monthly reports, or planning ahead, our solution helps you{' '}
            <strong className="text-yellow-500">work smarter</strong>, not harder. By automating your financial operations, we give you back your most valuable asset:{' '}
            <strong className="text-yellow-500">Time</strong>. So you can focus on scaling your business, serving your clients, or simply taking that well-earned break.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto               text-gray-600 dark:text-gray-300">
            Join the hundreds of companies who have transformed their financial management with Treemas and start building a more efficient future, today.
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

