import React from "react";
import { IoDocumentsSharp } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Banner8 = () => {
  const navigate = useNavigate();

  return (
    <div className="py-6 sm:py-12 px-4 bg-gray-100 flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Card 1 */}
      <div className="w-full md:w-1/3 p-5 bg-white rounded-xl shadow-md border border-dotted min-h-[320px] sm:min-h-[350px]">
        <div className="flex flex-col items-center text-center">
          <IoDocumentsSharp size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 mt-4">Online Documentation</h3>
          <p className="text-base text-gray-600 mt-2">Well organized and up to date</p>
          <button
            onClick={() => navigate("/contact")}
            className="mt-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-md font-medium text-base hover:bg-blue-200"
          >
            Enquire Now →
          </button>
          <ul className="mt-4 text-sm text-gray-500 space-y-1">
            <li>Changelog →</li>
            <li>Download →</li>
            <li>Video Tutorial →</li>
          </ul>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full md:w-1/3 p-5 bg-white rounded-xl shadow-md border border-dotted min-h-[320px] sm:min-h-[350px]">
        <div className="flex flex-col items-center text-center">
          <MdSupportAgent size={40} />
          <h3 className="text-2xl font-semibold text-gray-900 mt-4">Dedicated Support</h3>
          <p className="text-base text-gray-600 mt-2">Need support? Submit a ticket.</p>
          <button
            onClick={() => navigate("/contact")}
            className="mt-4 px-4 py-2 bg-purple-100 text-purple-600 rounded-md font-medium text-base hover:bg-purple-200"
          >
            Get Support →
          </button>
          <p className="mt-3 text-sm text-gray-500">Support Time: Monday - Friday</p>
          <p className="text-sm text-gray-500">Response Time: Max 24 hours</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full md:w-1/3 p-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl shadow-md min-h-[320px] sm:min-h-[350px]">
        <div className="flex flex-col items-center text-center">
          <LiaUniversitySolid size={40} />
          <h3 className="text-2xl font-semibold mt-4">Universities Updates</h3>
          <p className="text-base mt-2">Give us the details and we’ll get it done faster.</p>
          <button
            onClick={() => navigate("/register")}
            className="mt-4 px-4 py-2 bg-white text-purple-600 rounded-md font-medium text-base hover:opacity-80"
          >
            Register Now →
          </button>
          <ul className="mt-4 text-sm space-y-1">
            <li className="flex items-center gap-2">✅ Response Time: 2 Hours</li>
            <li className="flex items-center gap-2">✅ 14-day money-back guarantee</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner8;
