import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { assets } from '../assets/Assets';

const Terms = () => {
  return (
    <>
      <div
        className="w-full bg-cover bg-center overflow-x-hidden"
        style={{
          backgroundImage: `url(${assets.background})`,
        }}
      >
        <Navbar />

        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="bg-purple-200 text-purple-800 px-5 py-2 rounded-full text-sm sm:text-base font-semibold">
              TERMS & CONDITIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 leading-tight">
              Privacy Policies <br />
              <span className="text-gray-700 font-medium text-xl sm:text-2xl lg:text-3xl">
                Privacy Policy for NIMS - Online Courses and University Business
              </span>
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto mt-12 space-y-10 text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
            {/* Introduction */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Introduction</h3>
              <p>
                At <strong>NIMS</strong>, we prioritize the privacy and security of your personal information. This Privacy Policy explains our approach to collecting, using, sharing, and safeguarding your data when you engage with our online courses and university business platform ("Services"). By accessing our Services, you acknowledge and agree to the policies outlined in this document.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Information We Collect</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, contact details, and other identifying information.</li>
                <li><strong>Educational & Professional Information:</strong> Courses enrolled, progress, assignments, grades, and related data.</li>
                <li><strong>Payment Information:</strong> Payment method details for course enrollment and fee processing.</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">How We Use Your Information</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Providing and managing courses and online degree programs.</li>
                <li>Communicating with you about course updates, offerings, and promotions.</li>
                <li>Processing payments and managing financial transactions.</li>
                <li>Analyzing user trends and preferences to enhance our Services.</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Information Sharing</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Partner universities and educational institutions for enrollment and degree-related purposes.</li>
                <li>Service providers assisting with payment processing, data analysis, and technical support.</li>
                <li>Legal authorities if required by law or to protect our rights and users' safety.</li>
              </ul>
            </div>

            {/* Your Choices */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Your Choices</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Access and update your personal information.</li>
                <li>Opt out of promotional communications.</li>
                <li>Withdraw consent or delete your account (subject to applicable terms).</li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Security</h3>
              <p>We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure.</p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Children's Privacy</h3>
              <p>Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>
            </div>

            {/* Changes to this Policy */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Changes to this Policy</h3>
              <p>We may update this Privacy Policy periodically. We will notify you of significant changes through email or a prominent notice on our website.</p>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Contact Us</h3>
              <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at <strong>nims23178@gmail.com</strong>.</p>
            </div>

            {/* Acknowledgment */}
            <div>
              <p className="font-semibold text-gray-900">
                By using NIMS' Services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and sharing of your information as described herein.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Terms;
