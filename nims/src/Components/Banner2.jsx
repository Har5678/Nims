import React from "react";
import { assets } from "../assets/Assets";

const Banner2 = () => {
  const cardData = [
    {
      id: 1,
      heading1: "Manage unlimited Universities",
      heading2: "Provide multiple \nuniversities to \nchoose best",
      image: assets.Card3,
      skills: ["Individual Instructor", "Multiple Instructors", "Single Course", "Like Udemy", "& More..."],
      background: "linear-gradient(151.71deg, #29C986 0%, #2FC8E5 100%)"
    },
    {
      id: 2,
      heading1: "Metamorphosis",
      heading2: "Education from a \nnew angle",
      image: assets.Card1,
      skills: ["Security & Access Control", "Analytics & Insights", "Community & Support", "Course Management", "& More..."],
      background: "linear-gradient(151.71deg, #FF652D 0%, #FFA426 100%)"
    },
    {
      id: 3,
      heading1: "E-learning",
      heading2: "online training \nCourses",
      image: assets.Card2,
      skills: ["User-Friendly Interface", "Interactive Learning", "Personalization & Recommendations", "& More..."],
      background: "linear-gradient(151.71deg, #30C4FF 0%, #7259FF 100%)"
    }
  ];

  return (
    <div className="w-full text-white py-12 px-4 sm:px-6 lg:px-10 flex flex-col justify-center items-center">
      
      {/* Heading */}
      <div className="text-center mb-4 bg-[#BEA2D2] rounded-full px-4 py-2">
        <h1 className="text-lg md:text-3xl font-bold text-white">Welcome to Our Platform</h1>
      </div>

      {/* Subheading */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-4xl lg:text-4xl font-bold text-gray-800">
          Why Choose NIMS?
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="w-[280px] sm:w-[300px] h-[520px] p-4 rounded-xl shadow-md flex flex-col items-center text-center transition duration-300 hover:scale-105"
            style={{ background: card.background }}
          >
            <h3 className="text-base sm:text-lg font-semibold uppercase">{card.heading1}</h3>
            <h4 className="text-xl sm:text-2xl font-semibold text-white leading-snug mt-3 whitespace-pre-line">
              {card.heading2}
            </h4>
            <img src={card.image} alt="Frontend" className="w-40 h-40 my-4 mt-8" />
            <ul className="flex flex-wrap gap-2 justify-center text-gray-200 text-sm sm:text-base">
              {card.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner2;
