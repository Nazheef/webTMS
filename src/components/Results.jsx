

import React from 'react';

const Results = ({t}) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6      text-4xl font-bold text-gray-800 dark:text-white">{t.results}</h2>
        <p className="text-center text-gray-600 mb-12     text-gray-600 dark:text-gray-300">{t.ourclients}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "98%", label: t.ClientSatisfaction },
            { value: "45%", label: t.TimeSavings },
            { value: "25%", label: t.CostReduction },
            { value: "99.9%", label: t.SystemUptime }
          ].map((result, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200       dark:bg-cyan-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="text-3xl font-bold text-yellow-500       dark:text-3xl font-bold dark:text-green-500 ">{result.value}</div>
              <div className="text-gray-600    text-gray-600 dark:text-gray-300 ">{result.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
