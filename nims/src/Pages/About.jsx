import React from "react";
import { assets } from "../assets/Assets";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center">
            About NIMS
          </h1>
          <p className="text-sm sm:text-base text-gray-600 text-center mt-2">
            National Institute of Management & Sciences (Since 2012)
          </p>
        </div>

        {/* Image */}
        <div className="mb-8">
          <img
            src={assets.NimsLogo}
            alt="About NIMS"
            className="w-full h-auto max-h-[400px] rounded-lg shadow-md object-contain mx-auto"
          />
        </div>

        {/* About Text Content */}
        <div className="space-y-5 text-justify text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          <p>
            Established in 2012, <strong>NIMS</strong> (National Institute of Management & Sciences) is a leading institution dedicated to Human Resource Development in the fields of Information, Electronics, and Communications Technology. With a strong focus on industry-oriented education and skill development, NIMS offers undergraduate and postgraduate programs designed to equip students with cutting-edge knowledge and practical expertise.
          </p>
          <p>
            Through a blend of formal and non-formal education, state-of-the-art infrastructure, and expert faculty, the institute prepares students for successful careers in IT, electronics, digital marketing, and emerging technologies. With hands-on training, industry collaborations, and dedicated placement support, NIMS ensures that graduates are job-ready and equipped to meet the evolving demands of the tech industry.
          </p>
          <p>
            To emerge as the leader in the field of education and to excel in its area of operations, a team comprising of dedicated Eminent Academicians, Senior Executives, and Industrialists are engaged to assist the dissemination of knowledge and provide a learning edge to our students.
          </p>
          <p>
            <strong>NIMS</strong> has acquired a distinct place of honor among the different industries owing to its innovative and objective approach to its studies. The institute is appreciated and recognized for its quality, updated syllabi, and scientific methodology of instruction.
          </p>
          <p>
            These courses, provided with varied electives to choose from, equip the students to formulate various strategies and manage their business with efficiency in different technical areas. The curriculum also helps students stay updated with the latest industry developments.
          </p>
          <p>
            NIMS further enhances its offerings through a wide range of projects including R&D, consultancy, turnkey solutions in office automation, software development, and website development.
          </p>
          <p>
            <strong>NIMS</strong> is actively working toward its vision of becoming an Institute of National Importance by evolving its pedagogy and embracing innovation at all levels.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
