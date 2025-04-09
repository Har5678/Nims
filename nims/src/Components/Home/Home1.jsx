import React from "react";
import "./Home1.css";

const Home1 = () => {
  // Array of button labels
  const buttons = [
    "BA", "MA", "BBA", "MBA",
    "B.COM", "BLIB", "MLIB", "MCA"
  ];

  const buttons2 = ["BSC","BCA","PCA","PGDCA","MSC","F-TEL","MCOM","BOSSE","MLIB"]

  return (
    <div className="hidden md:block relative w-screen flex flex-col items-center justify-center overflow-hidden bg-gray-100 h-[330px] py-10">
      {/* Moving Button Wrapper */}
      <div className="bg-moving">
        {/* Duplicate buttons to create seamless loop */}
        {buttons.concat(buttons).map((label, index) => (
          <button key={index} className="scrolling-button ml-10">
            {label}
          </button>
        ))}
        
        
      </div>
      {/* Moving Button Wrapper */}
      <div className="bg-moving">
        {/* Duplicate buttons to create seamless loop */}
        {buttons2.concat(buttons2).map((label, index) => (
          <button key={index} className="scrolling-button ml-10 mt-10">
            {label}
          </button>
        ))}z
        
        
      </div>
      {/* Moving Button Wrapper */}
      <div className="bg-moving">
        {/* Duplicate buttons to create seamless loop */}
        {buttons.concat(buttons).map((label, index) => (
          <button key={index} className="scrolling-button ml-10 mt-10">
            {label}
          </button>
        ))}
        
      </div>
      
    </div>
  );
};

export default Home1;
