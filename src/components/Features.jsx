

import React from 'react';

const Features = () => {
  const features = [
    { title: "Advanced Analytics", desc: "Deep insights with customizable dashboards and reports", icon: "📊" },
    { title: "Team Collaboration", desc: "Multi-user access with role-based permissions", icon: "👥" },
    { title: "Enterprise Security", desc: "Bank-level security with data encryption", icon: "🔒" },
    { title: "24/7 Support", desc: "Round-the-clock technical assistance", icon: "⏰" },
    { title: "Compliance Ready", desc: "Built-in compliance for various regulations", icon: "✅" },
    { title: "Data Migration", desc: "Seamless migration from existing systems", icon: "🔄" },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800    text-3xl font-bold text-gray-800 dark:text-white">Powerful Features for Complete Financial Control</h2>
            <p className="text-gray-600 mt-4    text-gray-600 dark:text-gray-300">
              Our comprehensive platform integrates all your financial operations into one seamless experience, giving you complete visibility and control over your business finances.
            </p>
          </div>
          <div className="mt-8 md:mt-0 bg-white p-6 rounded-lg border border-gray-800  shadow-md max-w-xs         dark:bg-cyan-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
            <h3 className="font-bold text-gray-800 text-xl font-bold text-gray-800 dark:text-white ">Disbursement System</h3>
            <p className="text-sm text-gray-600    text-gray-600 dark:text-white">Secure and efficient payment processing with multi-level approval workflows.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Payment processing", "Approval workflows", "Multi-level authorization", "Audit trails", "Compliance tracking"].map((item) => (
                <li key={item} className="flex items-center      text-gray-600 dark:text-white  ">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition      dark:bg-cyan-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800        text-gray-800 dark:text-white ">{feature.title}</h3>
              <p className="text-gray-600 mt-2     text-gray-800 dark:text-white">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;



