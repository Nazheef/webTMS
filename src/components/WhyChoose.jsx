
import React from 'react';

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl  text-center text-gray-800 mb-16           text-4xl font-bold text-gray-800 dark:text-white"  >
          Why Choose <span className="text-yellow-500">Treemas Solusi Utama</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Quick Setup", time: "5 minutes", steps: ["Create your account", "Add company information", "Set user permissions", "Import existing data"] },
            { title: "Configure Modules", time: "15 minutes", steps: ["Configure chart of accounts", "Set up approval workflows", "Define budget categories", "Connect bank accounts"] },
            { title: "Monitor & Analyze", time: "Ongoing", steps: ["View financial dashboards", "Generate custom reports", "Track key metrics", "Set up automated alerts"] },
            { title: "Scale & Grow", time: "As needed", steps: ["Add new modules", "Integrate with other systems", "Access advanced analytics", "Get premium support"] }
          ].map((step, i) => (
            <div key={i} className="bg-gold p-6 rounded-lg shadow-sm border border-gray-200              dark:bg-cyan-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="flex items-center mb-4             ">
                <div className="w-8 h-8 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center text-sm font-bold                ">{i + 1}</div>
                <h3 className="ml-3 font-bold text-gray-800               font-bold text-gray-800 dark:text-white">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4    text-gray-600 dark:text-gray-300">{step.time}</p>
              <ul className="space-y-2 text-xs">
                {step.steps.map((s, j) => (
                  <li key={j} className="flex items-center     text-gray-800 dark:text-white">
                    <svg className="w-3 h-3 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;