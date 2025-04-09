import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPinterest, FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/Assets';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 lg:gap-10">
        
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center">
            <img src={assets.NimsLogo} alt="NIMS Logo" className="h-25 w-auto mix-blend-multiply" />
          </div>
          <p className="mt-3 text-base lg:text-lg">
            We’re always in search of talented and motivated people. <br /> Don’t be shy, introduce yourself!
          </p>
          <div className="mt-4">
            <button 
              onClick={() => navigate("/contact")} 
              className="border border-purple-500 text-purple-500 px-4 py-2 rounded-full text-base hover:bg-purple-500 hover:text-white transition"
            >
              Contact With Us →
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-semibold text-lg lg:text-xl mb-2">Top Features</h3>
          <ul className="space-y-1 text-sm lg:text-base">
            <li>Career Apply</li>
            <li>Multiple Universities</li>
            <li>Technical Support</li>
            <li>SLM, I Cards, Admit Cards</li>
            <li>A/C Management</li>
            <li>Log Management System</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 text-center md:text-left space-y-2">
          <h3 className="font-semibold text-lg lg:text-xl">Get Contact</h3>
          <p className="text-sm lg:text-base">
            <strong>Phone:</strong> +91 7088777747
          </p>
          <p className="text-sm lg:text-base">
            <strong>Email:</strong> nimsmeerut@gmail.com
          </p>
          <p className="text-sm lg:text-base">
            2000+ students subscribed worldwide. Don’t be shy, introduce yourself!
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaInstagram className="cursor-pointer hover:text-pink-600" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
            <FaPinterest className="cursor-pointer hover:text-red-600" />
            <FaYoutube className="cursor-pointer hover:text-red-700" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm lg:text-base">
        Design and Developed by <strong>iBrandizer</strong> © All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
