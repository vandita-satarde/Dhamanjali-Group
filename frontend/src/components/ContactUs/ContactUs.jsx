import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    occupation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 md:pt-20 lg:pt-24">
      {/* Hero Section */}
      <div className="relative w-full h-[120px] md:h-[150px] lg:h-[180px] bg-gray-800 overflow-hidden">
        <img
          src="#hero-image"
          alt="Contact Us Hero"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
            CONTACT US
          </h1>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="bg-gradient-to-br from-gray-50 to-orange-50 flex items-center justify-center px-4 py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 border border-orange-100">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Get In <span className="text-orange-600">Touch</span> Now
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto">
                Connect With Us Today — Let's Build Something Great Together!
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 text-base text-gray-700 placeholder-gray-400 shadow-sm hover:shadow-md"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 text-base text-gray-700 placeholder-gray-400 shadow-sm hover:shadow-md"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 text-base text-gray-700 placeholder-gray-400 shadow-sm hover:shadow-md"
                />
              </div>

              {/* Address and Occupation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 text-base text-gray-700 placeholder-gray-400 shadow-sm hover:shadow-md"
                />
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="Occupation"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 text-base text-gray-700 placeholder-gray-400 shadow-sm hover:shadow-md"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300 text-lg shadow-lg"
                >
                  SUBMIT MESSAGE
                </button>
              </div>
            </form>

            {/* Additional Contact Info */}
            <div className="mt-8 pt-6 border-t border-orange-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 text-base">
                    Email Us
                  </h4>
                  <p className="text-gray-600 text-sm">
                    info@dhamanjaligroup.com
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 text-base">
                    Call Us
                  </h4>
                  <p className="text-gray-600 text-sm">+91 12345 67890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
