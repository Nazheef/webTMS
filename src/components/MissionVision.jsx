
import React from 'react'
// import astronot from '../assets/image/astronot.jpg';
import emas from '../assets/image/emas.png';


const MissionVision = ({t}) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800     text-5xl font-bold text-gray-800 dark:text-white">{t.missionVisionTitle} <span className="text-yellow-500">{t.growth}</span>.{t.less}</h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto    text-gray-600 dark:text-gray-300">
            {t.join}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-md font-medium transition">
             {t.start}
            </button>
            <button className="border border-gray-300 hover:border-yellow-500 text-gray-700 px-8 py-3  rounded-md font-medium transition      text-gray-600 dark:text-gray-300  ">
              {t.schule}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 text-5xl font-bold text-gray-800 dark:text-white">{t.years}<br />{t.smarter}</h2>
            <hr className="border-yellow-500 my-8 w-1/3" />
            <p className="text-gray-600 mb-6    text-gray-600 dark:text-gray-300">
              {t.behid}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="text-gray-600 text-sm      text-gray-600 dark:text-gray-300">
                {t.over}
              </p>
              <p className="text-gray-600 text-sm      text-gray-600 dark:text-gray-300">
                 {t.today}
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


