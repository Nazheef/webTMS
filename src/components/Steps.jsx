
import React from 'react';

const Steps = ({t}) => {
  return (
    <section className="py-20 bg-gray-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl  text-gray-800 text-4xl font-bold text-gray-800 dark:text-white">{t.FromPlanning} <span className="text-yellow-500">{t.toReporting}</span></h2>
            <div className="mt-8 md:mt-0 text-left text-gray-600     text-gray-600 dark:text-gray-300">
            <br /><p>{t.Ourstreamlined} <strong>{t.growingyour}</strong>.</p>
          </div>
            <div className="flex items-center mt-4">
              <span className="inline-block bg-white border border-gray-300 px-4 py-2 rounded-full text-gray-700 font-medium">{t.stepzz }</span>
            </div>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: t.quicksetup, desc: t.Registeryouraccount, time: t.minutesfive},
            { title: t.configurmodules, desc: t.Customizeaccounting, time: t.minutefifteen },
            { title:  t.monitoranalyze, desc: t.Accessrealtimedashboards, time: t.ongoing },
            { title: t.scalegrow, desc: t.Expandfunctionality , time: t.asneeded }
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200                 dark:bg-cyan-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600" >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</div>
                <h3 className="ml-3 font-bold text-gray-800 text-xl font-bold text-gray-800 dark:text-white">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4        text-gray-600 dark:text-gray-300">{step.desc}</p>
              <div className="bg-yellow-50 text-yellow-700 text-xs px-3 py-1 rounded             dark:bg--800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-white-600">{step.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
