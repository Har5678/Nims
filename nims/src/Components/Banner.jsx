import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { assets } from "../assets/Assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    const headings = [
        "Quality Education & Training",
        "Best Educational Consultancy",
        "Top Career Opportunities"
    ];
    const [currentHeading, setCurrentHeading] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeading((prev) => (prev + 1) % headings.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-auto py-12 px-4 sm:px-10 lg:px-20">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl gap-8">

                {/* Left Side */}
                <div className="flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left -mt-10 sm:mt-0">
                    {/* Rating & Scholarship Button */}
                    <div className="flex flex-col md:flex-row justify-between items-center w-full ">
                        <div className="flex flex-col items-center sm:items-start">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={20}
                                        className="sm:size-6"
                                        fill="currentColor"
                                        stroke="none"
                                    />
                                ))}
                            </div>
                            <h2 className="text-sm sm:text-base font-bold text-gray-800 mt-1 sm:mt-2">
                                10,000+ TRUSTED STUDENTS
                            </h2>
                        </div>

                        <div
                            onClick={() => navigate("/")}
                            className="mt-2 sm:mt-0 px-6 py-2 sm:px-8 sm:py-3 text-white text-sm sm:text-xl font-semibold animated-bg rounded-lg cursor-pointer bg-[#7B4C94]"
                        >
                            Scholarship
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-800 leading-[1.1] mt-4">
                        Welcome To <br /> National Institute Of Modern Science
                    </h2>

                    {/* Carousel Heading */}
                    <div className="w-full flex justify-center lg:justify-start mt-4">
                        <div className="bg-[#BEA2D2] w-full max-w-2xl rounded-full px-4 py-2 sm:py-3">
                            <h2
                                key={currentHeading}
                                className="text-white text-sm sm:text-xl md:text-2xl font-bold transition-all duration-700 ease-in-out uppercase text-center"
                            >
                                {headings[currentHeading]}
                            </h2>
                        </div>
                    </div>

                    {/* Paragraph */}
                    <p className="text-base sm:text-lg text-gray-600 mt-2 sm:mt-4 leading-relaxed">
                        The most <span className="underline font-bold underline-offset-4 decoration-2">powerful</span> and <span className="underline font-bold underline-offset-4 decoration-2">easiest</span> platform to find out your best source of education.
                    </p>
                </div>

                {/* Right Side Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={assets.NimsLogo}
                        alt="NIMS Logo"
                        className="w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-md h-auto mix-blend-multiply"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
