

import React from 'react';

const CTA = ({t}) => {
  return (
    <section className="py-20 bg-gray-50             bg-gray-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6                text-4xl font-bold text-gray-800 dark:text-white">{t.readytoget} <span className="text-yellow-500">{t.startedready}</span></h2>
          <p className="text-gray-600 mb-8               text-gray-600 dark:text-gray-300">
           {t.ctaDesc}
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8          dark:bg-cyan-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 7.867c0-.247.07-.473.433-.649zM11 12.849v-1.698c.567.327 1.03.622 1.03 1.148 0 .526-.463.82-.986 1.148v1.698c.523-.328.986-.623.986-1.148 0-.526-.463-.82-.986-1.148zm-2.533-1.698c-.523.328-.986.623-.986 1.148 0 .526.463.82.986 1.148v1.698c-.523-.328-.986-.623-.986-1.148 0-.526.463-.82.986-1.148V11.151z"/></svg>
              <p className="text-gray-700  text-gray-600 dark:text-white"><strong>{t.CustomPricing}</strong></p>
            </div>
            <p className="text-gray-600 text-sm     text-gray-600 dark:text-gray-300">
              {t.Weoffertailored}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title:  t.scheduleDemo, desc: t.Bookapersonalized, action: t.ScheduleNow },
              { title: t.ChatwithSales, desc: t.Getimmediate, action: t.StartChat },
              { title: t.GetPricing, desc: t.Receivea, action: t.RequestQuote }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center         dark:bg-cyan-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                <div className="text-2xl mb-4">📅</div>
                <h3 className="font-bold text-gray-800 mb-2            font-bold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4        text-gray-600 dark:text-gray-300">{ item.desc}</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

