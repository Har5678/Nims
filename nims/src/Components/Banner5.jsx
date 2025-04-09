import React from "react";
import { assets } from "../assets/Assets";

const Banner5 = () => {
    const cards = [
        { id: 1, title: "Users", imageUrl: assets.Insta, desc: "Users" },
        { id: 2, title: "Sub Centre Panel", imageUrl: assets.google, desc: "Manager" },
        { id: 3, title: "Contact Us", imageUrl: assets.Contact, desc: "Dynamic Form" },
        { id: 4, title: "Animations", imageUrl: assets.Animations, desc: "Tradition" },
        { id: 5, title: "Scholarships", imageUrl: assets.scholarship, desc: "Form" },
        { id: 6, title: "Seo Friendly", imageUrl: assets.seo, desc: "Search Engine" },
        { id: 7, title: "Sub-centre User", imageUrl: assets.monkey, desc: "Control" },
        { id: 8, title: "Support", imageUrl: assets.support, desc: "Form" },
    ];

    return (
        <div className="w-full h-auto py-14 px-4 sm:px-6 md:px-10 lg:px-14 bg-gray-100">
            {/* Main Container */}
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
                {/* Section Title */}
                <h2 className="bg-[#BEA2D2] text-lg sm:text-xl md:text-2xl font-semibold text-white rounded-full px-4 py-2">
                    CORE FEATURES
                </h2>

                {/* Main Heading */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 uppercase gradient-text -mt-2 sm:-mt-0">
                    Nims Exclusive Features
                </h1>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-16 md:gap-35 mt-8">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`flex flex-col items-center text-center transition-all duration-300 
                            ${index % 2 === 0 ? "mt-4 sm:mt-8" : "-mt-8 sm:-mt-6 lg:-mt-4"}`} // wave layout
                        >
                            {/* Icon Circle */}
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-28 lg:h-28 bg-[#F5F5F5] rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src={card.imageUrl}
                                    alt={card.title}
                                    className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain"
                                />
                            </div>

                            {/* Title and Description */}
                            <div className="mt-3">
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner5;
