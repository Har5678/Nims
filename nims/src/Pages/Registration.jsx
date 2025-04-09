import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import { backenUrl } from "../App";

const Registration = () => {
  
  const [formData, setFormData] = useState({
    studentName: "",
    fathersName: "",
    mothersName: "",
    gender: "",
    religion: "",
    category: "",
    mobile: "",
    email: "",
    address: "",
    dob: "",
    course: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    const response = await axios.post(backenUrl + "/api/email/registration", {formData})
    try {
      if(response.data.message){
        console.log(response.data.message)

      }else{
        console.log("Failed to send mail")
        
      }
    } catch (error) {
      console.log(error);
      console.log(response.data.message);
    }



    setFormData({studentName: "",
      fathersName: "",
      mothersName: "",
      gender: "",
      religion: "",
      category: "",
      mobile: "",
      email: "",
      address: "",
      dob: "",
      course: "", })
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center bg-gray-100 px-4 py-10">
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 w-full max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Student Registration Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Student Name" />
              <input type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Father's Name" />
              <input type="text" name="mothersName" value={formData.mothersName} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Mother's Name" />
              <div className="flex gap-4">
                {["Male", "Female", "Others"].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input type="radio" name="gender" value={option} checked={formData.gender === option} onChange={handleChange} required />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <input type="text" name="religion" value={formData.religion} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Religion" />
              <input type="text" name="category" value={formData.category} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Category" />
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Mobile Number" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Email ID" />
              <textarea name="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Address" />
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />
              <input type="text" name="course" value={formData.course} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Course" />
              <div className="text-center">
                <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Registration;
