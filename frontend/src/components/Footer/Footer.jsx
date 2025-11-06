import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt ,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/images/logoimage.png";

const Footer = () => {
  return (
    <footer className="bg-white py-8 md:py-12 px-4 sm:px-6 border-t-2 border-amber-100 shadow-lg font-montserrat font-medium">
      {/* Footer Container */}
      <div className="max-w-[1200px] mx-auto px-2 sm:px-8 max-[600px]:max-w-full max-[600px]:px-2 max-[400px]:px-[2px]">
        {/* Main Sections with Vertical Lines */}
        <div className="flex flex-col justify-between items-stretch gap-12 md:flex-row md:items-stretch max-[600px]:flex-col max-[600px]:gap-5 max-[600px]:items-stretch">
          {/* Logo Section */}
          <div className="text-left flex-1 min-h-[200px] flex flex-col justify-start items-center p-6 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl shadow-sm max-[600px]:py-3 max-[600px]:px-2 max-[600px]:items-start max-[600px]:border-none max-[600px]:text-left lg:min-w-[280px]">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img
                src={logo}
                alt="Dhammanjali Group Logo"
                className="h-[6rem] w-[13rem] lg:ml-0 ml-15 lg:w-[20rem]  mb-3"
              />
            </div>
            <p className="text-gray-600 text-sm text-center max-w-xs leading-relaxed ">
              Building communities with trust, innovation, and excellence since
              our inception.
            </p>
          </div>

          {/* Quick Link Section */}
          <div className="text-left flex-1 min-h-[200px] flex flex-col md:border-l-2 md:border-gray-100 md:pl-10 md:relative md:before:content-[''] md:before:absolute md:before:left-[-1px] md:before:top-0 md:before:h-[60px] md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-amber-500 md:before:to-amber-600 max-[600px]:py-3 max-[600px]:border-none max-[600px]:text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-4 lg:mb-6 font-montserrat relative max-[400px]:text-base">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500 rounded-full"></div>
            </h3>
            <ul className="text-gray-600 space-y-2.5 md:space-y-3">
              <li>
                <a
                  href="/"
                  className="hover:text-amber-600 hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-amber-600 hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/mart"
                  className="hover:text-amber-600 hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Business
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-amber-600 hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="hover:text-amber-600 hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="text-left flex-1 min-h-[170px] lg:min-h-[200px] flex flex-col md:border-l-2 md:border-gray-100 md:pl-10 md:relative md:before:content-[''] md:before:absolute md:before:left-[-1px] md:before:top-0 md:before:h-[60px] md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-amber-500 md:before:to-amber-600 max-[600px]:py-3 max-[600px]:border-none max-[600px]:text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-4 lg:mb-6 font-montserrat relative max-[400px]:text-base">
              Get in Touch
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500 rounded-full"></div>
            </h3>
            <ul className="text-gray-600 space-y-3 lg:space-y-4 ">
              <li>
                <a
                  href="/joinform"
                  className="hover:text-amber-600 transition-all duration-200 flex items-center group"
                >
                  <FaEnvelope className="mr-3 text-amber-500 group-hover:scale-110 transition-transform" />
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/GetFrenchieForm"
                  className="hover:text-amber-600 transition-all duration-200 flex items-center group"
                >
                  <FaPhoneAlt  className="mr-3 text-amber-500 group-hover:scale-110 transition-transform" />
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="text-left flex-1 min-h-[200px] flex flex-col md:border-l-2 md:border-gray-100 md:pl-10 md:relative md:before:content-[''] md:before:absolute md:before:left-[-1px] md:before:top-0 md:before:h-[60px] md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-amber-500 md:before:to-amber-600 max-[600px]:py-3 max-[600px]:border-none max-[600px]:text-left -mt-15 lg:mt-0">
            <h3 className="text-xl font-bold text-gray-800 mb-6 font-montserrat relative max-[400px]:text-base">
              Stay Connected
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500 rounded-full"></div>
            </h3>
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row items-stretch rounded-lg overflow-hidden shadow-md">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 p-3 border-0 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50 text-gray-800 placeholder-gray-500"
                />
                <button className="bg-amber-600 text-white px-6 py-3 hover:bg-amber-700 transition-colors duration-200 font-semibold">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Your email is safe with us, we won't spam.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 font-montserrat">
                Follow Us
              </h4>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://twitter.com"
                  className="text-black bg-amber-400 hover:bg-amber-500 rounded-full p-3 flex items-center justify-center transform hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="Follow us on Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/dhamani_foundation_official/"
                  className="text-black bg-amber-400 hover:bg-amber-500 rounded-full p-3 flex items-center justify-center transform hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://pinterest.com"
                  className="text-black bg-amber-400 hover:bg-amber-500 rounded-full p-3 flex items-center justify-center transform hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="Follow us on Pinterest"
                >
                  <FaPinterest size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@dhammanjaliadmin5258"
                  className="text-black bg-amber-400 hover:bg-amber-500 rounded-full p-3 flex items-center justify-center transform hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="Follow us on YouTube"
                >
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Office Section */}
        <div className="w-full flex flex-col items-center mt-8 mb-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 shadow-sm border border-amber-100 max-w-2xl">
            <div className="text-center text-gray-700 font-montserrat leading-relaxed">
              <div className="flex items-center justify-center mb-3">
                <FaMapMarkerAlt className="text-amber-600 mr-2" size={20} />
                <strong className="text-lg text-gray-800">
                  Corporate Office
                </strong>
              </div>
              <div className="text-sm md:text-base space-y-1">
                <p className="font-medium text-gray-800">
                  Dhammanjali Group of Companies
                </p>
                <p>Master Mind 4, Royal Palm, Goregaon East, Mumbai- 400065</p>
                <div className="flex items-center justify-center mt-3 flex-wrap gap-2">
                  <FaPhoneAlt  className="text-amber-600" size={16} />
                  <span className="font-semibold text-gray-800">Contact:</span>
                  <div className="flex flex-wrap justify-center gap-2 text-sm">
                    <a
                      href="tel:+919721489878"
                      className="hover:text-amber-600 transition-colors"
                    >
                      +91 9721489878
                    </a>
                    <span className="text-gray-400">|</span>
                    <a
                      href="tel:+919769052291"
                      className="hover:text-amber-600 transition-colors"
                    >
                      +91 9769052291
                    </a>
                    <span className="text-gray-400 hidden md:block ">|</span>
                    <a
                      href="tel:+919833489878"
                      className="hover:text-amber-600 transition-colors"
                    >
                      +91 9833489878
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Horizontal Line */}
        <div className="mt-12 pt-6 border-t-2 border-gray-100 flex flex-col justify-between items-center text-center text-sm text-gray-600 font-medium relative md:flex-row md:text-left max-[600px]:flex-col max-[600px]:items-center max-[600px]:text-center max-[600px]:text-xs max-[600px]:py-3 max-[600px]:px-1 max-[400px]:text-xs before:content-[''] before:absolute before:top-[-1px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-[100px] before:h-[2px] before:bg-gradient-to-r before:from-amber-500 before:to-amber-600 before:rounded-sm">
          <p className="flex items-center justify-center flex-wrap gap-1">
            © Copyright 2025 Design and Developed with love
            <span className="text-amber-600 animate-pulse">🧡</span>
            by{" "}
            <a
              href="https://tars.co.in/"
              className="text-amber-600 hover:text-amber-700 font-semibold underline decoration-amber-300 hover:decoration-amber-500 transition-all duration-200"
            >
              TARS TECHNOLOGIES
            </a>
          </p>
          <div className="flex gap-4 mt-2 md:mt-0 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:mt-3 max-[600px]:items-center">
            <a
              href="/comingsoon"
              className="hover:text-amber-600 transition-colors duration-200 px-3 py-1 rounded-md hover:bg-amber-50"
            >
              PRIVACY POLICY
            </a>
            <span className="text-gray-300 max-[600px]:hidden">|</span>
            <a
              href="/comingsoon"
              className="hover:text-amber-600 transition-colors duration-200 px-3 py-1 rounded-md hover:bg-amber-50"
            >
              REPORT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
