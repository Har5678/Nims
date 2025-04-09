import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/Assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { menu: "Home", link: "/" },
    { menu: "University", link: "/Universities" },
    { menu: "Colleges", link: "/colleges" },
    { menu: "About", link: "/about" },
    { menu: "Contact", link: "/contact" },
    { menu: "Terms & Conditions", link: "/terms" },
  ];

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-md py-1">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              className="h-12 sm:h-16 lg:h-25 w-auto mix-blend-multiply"
              src={assets.NimsLogo}
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.menu}
                to={item.link}
                className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm lg:text-base font-medium transition-colors"
              >
                {item.menu}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => navigate("/register")}
              className="gradient-border-button"
            >
              APPLY NOW
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg border-r transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex flex-col h-full">
          
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto h-full px-4">
            {menuItems.map((item) => (
              <Link
                key={item.menu}
                to={item.link}
                className="block text-gray-700 hover:text-blue-700 py-3 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.menu}
              </Link>
            ))}
          </div>

          {/* Apply Now Button */}
          <div className="p-6 border-t">
            <button
              className="w-full py-2 rounded-full text-lg font-medium gradient-border-button"
              onClick={() => {
                navigate("/register");
                setIsOpen(false);
              }}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
