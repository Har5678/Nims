import React from "react";

const Banner4 = () => {
  return (
    <div
      className="relative w-full h-[350px] md:h-[500px] lg:h-[500px] flex items-center justify-center p-4 md:p-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, rgba(255, 255, 255, 0.15), rgba(251, 199, 226, 0.15), rgba(220, 217, 254, 0.15))",
      }}
    >
      {/* Background 15+ (Faded & Centered) */}
      <div className="gradient-text absolute flex items-center justify-center text-black opacity-10 text-[180px] sm:text-[200px] md:text-[300px] lg:text-[350px] font-bold w-[90%] h-full">
        15+
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center mx-auto px-4">
        {/* Heading */}
        <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
          World-Class <br /> Stunning <br /> Software
        </h2>

        {/* Paragraph */}
        <p className="text-sm md:text-lg lg:text-xl font-medium text-gray-800 max-w-2xl md:max-w-3xl mx-auto mb-4">
          Built-in universities, courses, etc., masters to get you started. Register and get a Client ID and Password for use. You can access your NIMS from anywhere.
        </p>

        {/* Subtext */}
        <p className="text-xs md:text-base lg:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          Before using, get a complete demo for using the software and the process to access your panel.
        </p>
      </div>
    </div>
  );
};

export default Banner4;
