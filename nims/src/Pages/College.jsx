import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { assets } from "../assets/Assets";
import { Link, useNavigate } from "react-router-dom";

const College = () => {
  const navigate = useNavigate();

  const colleges = [
    { name: "Forte Institute of Technology", image: assets.Fit },
    { name: "Translam Institute Of Technology and Management", image: assets.Translam },
    { name: "ABSS Institute Of Technology", image: assets.Abss },
    { name: "Shanti College of Education", image: assets.Shanti },
    { name: "Rainbow College of Education", image: assets.Rainbow },
    { name: "Universal College of Higher Education", image: assets.Universal },
    { name: "Global College of Higher Education", image: assets.Global },
    { name: "Meerut Institute of Higher Education", image: assets.Meerut },
    { name: "Delhi College of Higher Education", image: assets.Delhi },
    { name: "NCR College Meerut", image: assets.Ncr },
    { name: "Mahendra Institute of Technology", image: assets.Mahindra },
    { name: "Bharat Institute of Technology", image: assets.Bit },
    { name: "Panchwati Institute of Engineering and Technology", image: assets.Panchwati },
  ];

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm sm:text-base mb-4">
          <Link to="/" className="hover:underline">Home</Link> &gt; <span className="text-gray-700">All Colleges</span>
        </div>

        {/* Title & Badge */}
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900">All Colleges</h1>
          <span className="text-xs sm:text-sm md:text-base border border-gray-300 px-3 py-1 rounded-full text-gray-900 font-semibold">
            🎓 13 Colleges
          </span>
        </div>

        {/* Description */}
        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-700">
          Explore top-rated colleges with a proven record of academic excellence.
        </p>
      </div>

      {/* College Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {colleges.map((college, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 flex flex-col items-center text-center hover:shadow-md transition"
            >
              {/* Image */}
              {college.image ? (
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-24 sm:h-32 lg:h-40 object-contain rounded-lg"
                />
              ) : (
                <div className="w-full h-24 sm:h-32 lg:h-40 flex items-center justify-center bg-gray-100 rounded-lg">
                  <span className="text-gray-500 text-xs">No Image Available</span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-xs sm:text-sm md:text-base font-semibold mt-3 text-gray-800 px-1">
                {college.name}
              </h3>

              {/* Apply Button */}
              <div className="mt-auto">
                <button
                  onClick={() => navigate("/register")}
                  className="mt-3 px-4 py-1 sm:px-6 sm:py-2 text-xs sm:text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default College;
