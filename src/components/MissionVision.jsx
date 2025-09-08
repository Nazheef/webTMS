
import React from 'react'
// import astronot from '../assets/image/astronot.jpg';
import emas from '../assets/image/emas.png';


const MissionVision = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800     text-5xl font-bold text-gray-800 dark:text-white">More Time for <span className="text-yellow-500">Growth</span>. Less Time on Finances</h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto    text-gray-600 dark:text-gray-300">
            Join hundreds of businesses that have streamlined their financial processes with our comprehensive platform. Start your journey today!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-md font-medium transition">
              Start Free Trial →
            </button>
            <button className="border border-gray-300 hover:border-yellow-500 text-gray-700 px-8 py-3  rounded-md font-medium transition      text-gray-600 dark:text-gray-300  ">
              Schedule Demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 text-5xl font-bold text-gray-800 dark:text-white">20+ Years of Partnership<br />Smarter Finance. Stronger Growth. Worry Free.</h2>
            <hr className="border-yellow-500 my-8 w-1/3" />
            <p className="text-gray-600 mb-6    text-gray-600 dark:text-gray-300">
              Behind every successful business is a system you can trust.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="text-gray-600 text-sm      text-gray-600 dark:text-gray-300">
                Over two decades ago, we began our journey as an IT consulting firm with a simple mission: to help businesses manage their finances without the hassle. Since then, leading banks and enterprises have trusted us to deliver solutions that are not only efficient but also secure and proven.
              </p>
              <p className="text-gray-600 text-sm      text-gray-600 dark:text-gray-300">
                Today, our all-in-one finance platform empowers you to handle journals, budgeting, and monthly reports with just a few clicks. The result? Less time on spreadsheets, more time to grow your business — or simply enjoy a well-deserved break. Because to us, technology isn't just about features. It's about giving you peace of mind, confidence, and the freedom to focus on what matters most.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={emas} alt="Money Machine" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;


