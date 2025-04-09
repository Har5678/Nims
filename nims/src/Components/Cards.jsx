import React from "react";
import { assets } from "../assets/Assets";

const Cards = () => {
  return (
    <div className="w-full max-w-7xl rounded-2xl flex justify-center px-4 sm:px-8 lg:px-12 py-10 bg-[#2700ff80] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Card 1 */}
        <div className="p-6 shadow-xl rounded-lg flex flex-col items-center sm:items-start text-center sm:text-start gap-4 transform transition duration-300 hover:scale-105 group">
          <img src={assets.Icon1} className="w-12 h-12" alt="Quality Education Icon" />
          <h3 className="text-white text-xl font-bold">Quality Education</h3>
          <p className="text-gray-300 text-lg">
            Optimized for a smaller build size, faster dev compilation, and dozens of other improvements.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 shadow-xl rounded-lg flex flex-col items-center sm:items-start text-center sm:text-start gap-4 transform transition duration-300 hover:scale-105 group">
          <img src={assets.Icon2} className="w-12 h-12" alt="Expert Mentors Icon" />
          <h3 className="text-white text-xl font-bold">Expert Mentors</h3>
          <p className="text-gray-300 text-lg">
            Our software is fully optimized for all devices. You can access it effortlessly.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 shadow-xl rounded-lg flex flex-col items-center sm:items-start text-center sm:text-start gap-4 transform transition duration-300 hover:scale-105 group">
          <img src={assets.Icon3} className="w-12 h-12" alt="Career Growth Icon" />
          <h3 className="text-white text-xl font-bold">Career Growth</h3>
          <p className="text-gray-300 text-lg">
            We provide 24-hour support for all clients. You can invest in your future without hesitation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
