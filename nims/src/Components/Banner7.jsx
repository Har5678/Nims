import React from "react";
import { useNavigate } from "react-router-dom";

const Banner7 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full py-8 px-4 sm:px-6 text-white text-center flex flex-col items-center"
      style={{
        background: "linear-gradient(270deg, #9e77ff 0%, #4460ff 100%)",
      }}
    >
      {/* Heading */}
      <h2 className="text-lg sm:text-4xl md:text-6xl font-bold leading-snug sm:leading-tight -mt-4 sm:mt-0">
        Globally trusted by hundreds <br className="hidden sm:block" /> of thousands of customers.
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-xs sm:text-xl md:text-2xl flex flex-wrap justify-center gap-2">
        Work Smarter ☕ Create Better ⭐ Build Faster ⚡
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/register")}
        className="mt-6 sm:mt-10 bg-white text-black px-5 py-3 sm:px-6 sm:py-3 rounded-lg text-base sm:text-xl font-semibold hover:bg-gray-200 transition"
      >
        Enroll on Nims Now →
      </button>

      {/* Benefits Grid */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center w-full max-w-5xl">
        {[
          { icon: "🔄", text: "Free Lifetime" },
          { icon: "🎧", text: "Premium Support" },
          { icon: "⚡", text: "High Speed" },
          { icon: "💎", text: "We Provide Premium" },
          { icon: "💻", text: "Developer Friendly" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl">{item.icon}</span>
            <p className="mt-1 text-xs sm:text-base md:text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner7;
