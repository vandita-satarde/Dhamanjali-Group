import React, { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoimage from "../../assets/images/logoimage.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);
  const businessDropdownRef = useRef(null);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setBusinessMenuOpen(false);
  };

  const toggleBusinessMenu = (e) => {
    e.stopPropagation();
    setBusinessMenuOpen(!businessMenuOpen);
  };

  // Close dropdown on outside click
  useEffect(() => {
    if (!businessMenuOpen) return;
    function handleClickOutside(event) {
      if (
        businessDropdownRef.current &&
        !businessDropdownRef.current.contains(event.target)
      ) {
        setBusinessMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [businessMenuOpen]);

  return (
    <nav className="w-full bg-gradient-to-r from-white via-yellow-50 to-orange-50 shadow-lg backdrop-blur-md fixed top-0 left-0 z-50 max-h-full animate-fadeInDown">
      <div className="max-w-9xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo + Hamburger */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" onClick={scrollToTop}>
            <div className="flex flex-col text-[10px] font-light gap-0.5 text-orange-500 hover:scale-105 transition-transform duration-500 ease-in-out">
              <img
                src={logoimage}
                alt="Logo"
                className="h-12 w-auto drop-shadow-lg transition-all duration-500 hover:rotate-3"
              />
              <span className="tracking-widest animate-pulse">
                Dhammanjali Group
              </span>
            </div>
          </Link>

          <div
            onClick={toggleMenu}
            className="md:hidden cursor-pointer flex flex-col gap-1.5 ml-4"
          >
            <span
              className={`w-7 h-1 bg-gray-800 rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2 bg-amber-500" : ""
              }`}
            />
            <span
              className={`w-7 h-1 bg-gray-800 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-7 h-1 bg-gray-800 rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2 bg-amber-500" : ""
              }`}
            />
          </div>
        </div>

        {/* Animated Navigation Menu */}
        <div
          className={`md:flex flex-col md:flex-row items-left md:gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent backdrop-blur-lg rounded-b-xl md:rounded-none transition-all duration-500 ease-in-out origin-top ${
            menuOpen
              ? "flex scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 md:scale-y-100 md:opacity-100 md:flex hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-5 text-gray-800 font-semibold md:items-center items-start py-8 md:py-0 px-4 md:px-24 animate-fadeIn transition-all duration-500">
            {["HOME", "ABOUT"].map((item, i) => (
              <li key={i} className="relative group w-full md:w-auto">
                <Link
                  to={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  onClick={() => {
                    toggleMenu();
                    scrollToTop();
                  }}
                  className="block w-full text-left md:text-left py-2 md:py-0 hover:text-amber-600 transition-all duration-300 hover:scale-105"
                >
                  {item}
                  <span className="block h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </li>
            ))}

            {/* BUSINESS Dropdown */}
            <li
              className="relative group cursor-pointer w-full md:w-auto"
              ref={businessDropdownRef}
            >
              <div
                onClick={toggleBusinessMenu}
                className="flex items-center gap-1.5 py-2 md:py-0 md:top-1 w-full text-left md:text-left hover:text-amber-600 transition-transform duration-300 hover:scale-105"
              >
                BUSINESS <span className="text-sm md:py-1">▼</span>
              </div>
              <ul
                className={`absolute md:top-8 left-10 mt-2 bg-white border border-gray-200 rounded-lg shadow-2xl p-2 space-y-2 z-40 w-44 transform transition-all duration-300 origin-top ${
                  businessMenuOpen
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0 pointer-events-none"
                }`}
              >
                {[
                  "Retail",
                  "Food",
                  "Health",
                  "Real estate",
                  "Agriculture",
                  "Hospitality",
                ].map((b, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/${b.toLowerCase().replace(/\s+/g, "")}`}
                      onClick={() => {
                        toggleMenu();
                        setBusinessMenuOpen(false);
                        scrollToTop();
                      }}
                      className="block px-4 py-2 text-sm rounded hover:bg-amber-50 transition-all hover:scale-105 hover:translate-x-1"
                    >
                      {b}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {["GALLERY", "TESTIMONIALS"].map((item, i) => (
              <li key={i} className="relative group w-full md:w-auto">
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => {
                    toggleMenu();
                    scrollToTop();
                  }}
                  className="block w-full text-left md:text-left py-2 md:py-0 hover:text-amber-600 transition-all duration-300 hover:scale-105"
                >
                  {item}
                  <span className="block h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4 md:mb-0 px-4 md:px-0 animate-fadeInRight">
            <div className="px-5 block w-full text-center md:text-left py-2 md:py-0 font-semibold hover:text-amber-600 transition-all duration-300 hover:scale-105">
              <a href="/" onClick={scrollToTop}>
                DHAMMANJALI GROUP
              </a>
              <span className="block h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </div>
            <Link
              to="/GetFrenchieForm"
              onClick={() => {
                toggleMenu();
                scrollToTop();
              }}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold text-sm hover:brightness-110 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <FaUser className="animate-bounce duration-1000" />
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
