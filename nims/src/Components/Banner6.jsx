import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { assets } from "../assets/Assets";

const Banner6 = () => {
  const slides = [
    assets.Image1,
    assets.Image2,
    assets.Image3,
    assets.Image4,
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center px-4 sm:px-6 py-8 gap-4 bg-white">
      {/* Left: Carousel */}
      <div className="w-full md:w-1/2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px] object-contain rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left px-2 sm:px-6">
        <h2 className="text-sm sm:text-base font-semibold text-blue-700 uppercase mb-1 tracking-wide">
          Course Showcase
        </h2>
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-2">
          Manage your courses in an authentic way.
        </h1>
        <p className="text-sm sm:text-base md:text-[16px] text-gray-600 mb-2">
          Built-in universities, courses, etc., to get you started. Register and get your Client ID and Password to access NIMS from anywhere.
        </p>
        <p className="text-xs sm:text-sm text-gray-500">
          Before using, get a complete demo to understand the software and the process to access your panel.
        </p>
      </div>
    </div>
  );
};

export default Banner6;
