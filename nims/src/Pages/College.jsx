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
    { name: "Fort College Of Pharmacy", image: assets.Fip },
    { name: "Mahalaxmi Group Of Institutions", image: assets.Mahalaxmi },
    { name: "JP Group", image: assets.JP },
    { name:"MSM Meerut", image: assets.MSM},
    { name: "Divine Law College Meerut", image: assets.Divine },
    { name: "CERT College", image: assets.Cert },
    { name: "MIIT College", image: assets.Mit },
    
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
            🎓 {colleges.length} Colleges
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
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 flex flex-col items-center justify-between hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              {college.image ? (
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-32 sm:h-36 object-contain rounded-xl"
                />
              ) : (
                <div className="w-full h-32 sm:h-36 flex items-center justify-center bg-gray-100 rounded-xl">
                  <span className="text-gray-400 text-sm">No Image</span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-sm sm:text-base font-semibold mt-3 text-center text-gray-800 line-clamp-2">
                {college.name}
              </h3>

              {/* Apply Button */}
              <button
                onClick={() => navigate("/register")}
                className="mt-4 w-full py-1.5 sm:py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default College;
