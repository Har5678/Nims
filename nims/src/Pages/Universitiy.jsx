import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { assets } from "../assets/Assets";
import { Link, useNavigate } from "react-router-dom";

const University = () => {
  const navigate = useNavigate();
  const List = [
    { name: "SWAMI VIVEKANAND SUBHARTI UNIVERSITY", image: assets.svsu },
    { name: "BOARD OF OPEN SCHOOLING & SKILL EDUCATION", image: assets.Board },
    { name: "MANGALAYATAN UNIVERSITY", image: assets.mangalyatan },
    { name: "SHOBHIT DEEMED UNIVERSITY", image: assets.Shobhit },
    { name: "SURESH GYAN VIHAR UNIVERSITY", image: assets.Suresh },
    { name: "J.S UNIVERSITY", image: assets.Jas },
    { name: "SHUBHAM UNIVERSITY", image: assets.Shubham },
    { name: "KALINGA UNIVERSITY", image: assets.kalinga },
    { name: "MAHAVEER UNIVERSITY", image: assets.Mahaveer },
    { name: "SUNDER DEEP GROUP OF INSTITUTIONS", image: assets.SDGI },
    { name: "COLLEGE OF ENGINEERING ROORKEE", image: assets.Coer },
    { name: "DHAMMA DIPA INTERNATIONAL BUDDHIST UNIVERSITY", image: assets.Dbibu },
    { name: "IMS UNISON", image: assets.Ims },
  ];

  return (
    <>
      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${assets.background})` }}>
        <Navbar />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Breadcrumb */}
          <div className="text-gray-500 text-sm sm:text-base mb-4">
            <Link to="/" className="hover:underline">Home</Link> &gt; <span className="text-gray-700">All University</span>
          </div>

          {/* Title & Badge */}
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900">All University</h1>
            <span className="text-xs sm:text-sm md:text-base border border-gray-300 px-3 py-1 rounded-full text-gray-900 font-semibold">
              🎉 20+ Universities
            </span>
          </div>

          {/* Description */}
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-700">
            Universities that help beginner designers become true unicorns.
          </p>
        </div>

        {/* University List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {List.map((university, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-3 border border-gray-200 flex flex-col justify-between h-64"
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                    {university.name}
                  </h3>
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 flex items-center justify-center rounded overflow-hidden">
                    {university.image ? (
                      <img
                        src={university.image}
                        alt={university.name}
                        className="w-full h-auto object-contain"
                      />
                    ) : (
                      <span className="text-gray-500 text-xs">No Image</span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => navigate("/register")}
                  className="text-xs sm:text-sm mt-4 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default University;
