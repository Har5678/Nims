import React, { useState } from 'react';
import { FaUniversity, FaBookOpen, FaUserGraduate, FaUser } from "react-icons/fa";
import { assets } from '../assets/Assets';

const Banner3 = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabData = [
    {
      id: 1,
      label: "Multiple Universities.",
      icon: <FaUniversity size={20} />,
      image: assets.B31
    },
    {
      id: 2,
      label: "Different Courses.",
      icon: <FaBookOpen size={20} />,
      image: assets.B32,
    },
    {
      id: 3,
      label: "Manager Sub Centre.",
      icon: <FaUserGraduate size={20} />,
      image: assets.B33,
    },
    {
      id: 4,
      label: "Manage Student",
      icon: <FaUser size={20} />,
      image: assets.B34,
    },
  ];

  return (
    <div className="w-full text-white py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center -mt-15 sm:-mt-0">
      
      {/* Title Section */}
      <div className="text-center mb-6 bg-[#BEA2D2] px-6 py-2 rounded-full shadow-md">
        <h1 className="text-lg md:text-2xl font-bold uppercase">
          You Can Customize Everything
        </h1>
      </div>

      <div className="text-center mb-2">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
          Take your Education System to The <span className='text-blue-600'>Next Level!</span>
        </h2>
      </div>

      <div className="text-center mb-10">
        <h3 className="text-base sm:text-xl text-gray-700">
          An all-in-one Software with powerful features.
        </h3>
      </div>

      {/* Grid Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-10">
        
        {/* Tabs Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6 text-center">
          <div className="bg-[#BEA2D2] rounded-full px-4 py-2 shadow-sm">
            <h2 className="text-xl font-bold text-white">All in One for Education</h2>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug">
            Software Ready, <br /> Manage Everything.
          </h3>

          <div className="flex flex-col gap-4 mt-4 w-full max-w-md">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-lg text-base sm:text-lg font-medium transition-all text-left
                ${activeTab === tab.id
                  ? "bg-blue-100 text-blue-600 shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={tabData.find((tab) => tab.id === activeTab)?.image}
            alt="Tab Content"
            className="w-full max-w-md h-auto rounded-xl shadow-lg transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner3;
