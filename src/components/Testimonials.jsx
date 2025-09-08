

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah Chen", role: "CFO • TechCorp Solutions", rating: 5, text: "Treemas has revolutionized our financial operations. The integrated approach saves us hours every week and provides incredible insights into our business performance." },
    { name: "Michael Rodriguez", role: "Finance Director • Global Manufacturing Inc.", rating: 5, text: "The procurement module alone has streamlined our entire supply chain process. We've reduced procurement costs by 15% and improved vendor relationships significantly." },
    { name: "Priya Sharma", role: "Operations Manager • Retail Dynamics", rating: 5, text: "The budgeting and forecasting tools are exceptional. We can now predict cash flow with 95% accuracy and make informed decisions about business investments." },
    { name: "James Thompson", role: "CEO • StartupBoost", rating: 5, text: "As a growing startup, we needed a solution that could scale with us. Treemas has been perfect – comprehensive yet easy to use, with excellent customer support." },
    { name: "Lisa Wang", role: "Accounting Manager • Professional Services Ltd.", rating: 5, text: "The automation features have eliminated manual errors and reduced our month-end closing time from 5 days to just 2. The ROI has been incredible." },
    { name: "David Kumar", role: "Financial Controller • Healthcare Plus", rating: 5, text: "Compliance reporting is now effortless. The system automatically generates all required reports and ensures we're always audit-ready." }
  ];

  return (
    <section className="py-20 bg-gray-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6     text-4xl font-bold text-gray-800 dark:text-white">Trusted by Businesses Worldwide</h2>
        <p className="text-center text-gray-600 mb-12   text-gray-600 dark:text-gray-300">See how companies across industries have transformed their financial operations with our comprehensive platform.</p>
        
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