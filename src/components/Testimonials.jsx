

import React from 'react';

const Testimonials = ({t}) => {
  const testimonials = [
    { name: "Sarah Chen", role: t.cfo, rating: 5, text: t.revolutionized },
    { name: "Michael Rodriguez", role: t.finance, rating: 5, text: t.Procurement },
    { name: "Priya Sharma", role: t.operations  , rating: 5, text: t.budgeting },
    { name: "James Thompson", role: t.ceo, rating: 5, text: t.asagrowting },
    { name: "Lisa Wang", role: t.accounting, rating: 5, text: t.theautomation },
    { name: "David Kumar", role: t.financial, rating: 5, text: t.compliancereporting },
  ];

  return (
    <section className="py-20 bg-gray-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6     text-4xl font-bold text-gray-800 dark:text-white">{t.testimonials}</h2>
        <p className="text-center text-gray-600 mb-12   text-gray-600 dark:text-gray-300">{t.seehow}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200            dark:bg-cyan-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="flex items-center mb-4">
                <div className="text-2xl">"</div>
                <div className="ml-2 text-yellow-500">
                  {Array(t.rating).fill().map((_, i) => <span key={i}>★</span>)}
                </div>
              </div>
              <p className="text-gray-600 mb-4     text-gray-600 dark:text-gray-300">{t.text}</p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">{t.name[0]}</div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-80               font-bold text-white-80 dark:text-white">{t.name}</div>
                  <div className="text-sm text-gray-500        text-gray-600 dark:text-gray-300  ">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;