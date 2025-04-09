import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { assets } from '../assets/Assets';
import axios from "axios";
import { backenUrl } from '../App';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Collected Data:', formData);

    try {
      const response = await axios.post(backenUrl+"/api/email/enquiry", { formData });

      if (response.data.success) {
        console.log(response.data.message);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }

    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-100 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="bg-purple-200 text-purple-800 px-4 py-1 rounded-full text-sm sm:text-xl font-semibold">
            CONTACT US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-6 sm:mt-8 leading-tight">
            Nims Contact <br />
            <span className="text-gray-700">can join with us.</span>
          </h2>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '🎧', title: 'Contact Phone Number', content: ['+91 7088777747', '+91 8533027077'] },
            { icon: '✉️', title: 'Our Email Address', content: ['nims23178@gmail.com'] },
            { icon: '📍', title: 'Our Location', content: ['N-24, Vishnu Aawas, Opp. IIMT University, Ganga Nagar, Meerut'] },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center transition-all hover:shadow-2xl">
              <div className="text-blue-500 text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              {item.content.map((text, idx) => (
                <p key={idx} className="text-gray-600 mt-2">{text}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={assets.Contact1}
              alt="Contact Us"
              className="w-full max-w-sm sm:max-w-md mix-blend-multiply rounded-xl"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full lg:w-[500px]">
            <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
              EDUCATION FOR EVERYONE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
              Feel Free to Contact
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name *"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone No *"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email *"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
                required
              />
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Message"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-all"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
