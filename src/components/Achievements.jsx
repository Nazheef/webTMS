
import React from 'react';

const Achievements = () => {
  const achievements = [
    { number: "500+", label: "Successful Implementations", icon: "📈" },
    { number: "15+", label: "Industries Served", icon: "🌍" },
    { number: "50+", label: "Expert Team Members", icon: "👥" },
    { number: "24/7", label: "Customer Support", icon: "📞" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16     text-4xl font-bold text-gray-800 dark:text-white">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8      ">
          {achievements.map((ach, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200               dark:bg-cyan-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="text-4xl mb-4">{ach.icon}</div>
              <div className="text-3xl font-bold text-yellow-500    dark:text-3xl font-bold dark:text-green-500 ">{ach.number}</div>
              <div className="text-gray-600     text-gray-600 dark:text-gray-300">{ach.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;




