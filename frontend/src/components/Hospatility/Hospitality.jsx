import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUtensils, FaSpa, FaUsers, FaSwimmer } from "react-icons/fa";

// AnnouncementsTitle Component
const AnnouncementsTitle = ({
  title = "ANNOUNCEMENTS",
  subtitle = "LATEST",
  description = "DHAMMANJALI FOUNDATION, At, our gallery captures the essence of our journey—showcasing our commitment to quality, community engagement, and innovation. Each image reflects our dedication to excellence and the meaningful connections we've built within the communities we serve. Explore our visual story and witness the milestones that define our brand.",
  className = "",
}) => (
  <div
    className={`w-full flex flex-col md:flex-row justify-between gap-6 px-2 md:px-0 mb-8 ${className}`}
  >
    {/* Title and arrow */}
    <div className="flex flex-col w-full md:w-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight">
        {title}
      </h2>
      <div className="flex items-center mt-1">
        {subtitle && (
          <span className="text-lg font-semibold text-gray-500 tracking-widest uppercase mr-2">
            {subtitle}
          </span>
        )}
        <svg
          className="ml-10 md:ml-24 hidden md:inline"
          width="250"
          height="25"
          viewBox="0 0 200 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 10H114M114 10L106 2M114 10L106 18"
            stroke="#FFA500"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>

    {/* Description aligned to title */}
    {description && (
      <div
        className="md:pt-1 pt-2 max-w-3xl text-gray-700 text-base leading-relaxed text-left"
        style={{ wordBreak: "break-word", letterSpacing: "0.01em" }}
      >
        {description}
      </div>
    )}
  </div>
);

// Static data for Hospitality component
const staticHospitalityData = {
  hero: {
    backgroundImage:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "LUXURY HOSPITALITY",
    description:
      "Experience unparalleled comfort and elegance at our premium hospitality destinations",
  },
  services: {
    restaurant: {
      title: "Fine Dining Restaurant",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: [
        "World-class culinary experiences with international and local cuisine",
        "Expert chefs crafting artisanal dishes with premium ingredients",
        "Elegant dining atmosphere with personalized service",
        "Extensive wine collection and signature cocktails",
        "Private dining rooms for special occasions",
      ],
    },
    spa: {
      title: "Wellness & Spa",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: [
        "Rejuvenating spa treatments and therapeutic massages",
        "State-of-the-art wellness facilities and equipment",
        "Skilled therapists providing personalized wellness programs",
        "Peaceful environment designed for ultimate relaxation",
        "Premium organic products and aromatherapy treatments",
      ],
    },
    conference: {
      title: "Conference & Events",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: [
        "Modern conference halls with advanced AV technology",
        "Flexible event spaces for meetings, conferences, and celebrations",
        "Professional event planning and coordination services",
        "High-speed internet and video conferencing facilities",
        "Catering services tailored to your event requirements",
      ],
    },
    swimmingpool: {
      title: "Recreation & Pool",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: [
        "Olympic-sized swimming pool with crystal-clear water",
        "Poolside bar and lounge area for relaxation",
        "Children's pool area with safety features",
        "Pool deck with comfortable seating and umbrellas",
        "Professional lifeguards and pool maintenance",
      ],
    },
  },
  gallery: {
    "Deluxe Rooms": [
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761559487/deluxeImage1_ytaua1.avif",
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761559486/deluxeImage2_okn4tl.avif",
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761559486/deluxeImage3_bcsdrj.avif",
    ],
    "Suite Rooms": [
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761559448/suiteRoom1_emmss7.avif",
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761559448/suiteRoom3_grbhjv.avif",
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761559448/suiteRoom2_oyown5.avif",
    ],
    Presidential: [
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761559465/presedential1_olxion.avif",
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761559465/presedential3_a12jyd.avif",
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761559465/presedential2_yybcp5.avif",
    ],
  },
};

const iconMap = {
  restaurant: <FaUtensils size={20} />,
  spa: <FaSpa size={20} />,
  conference: <FaUsers size={20} />,
  swimmingpool: <FaSwimmer size={20} />,
};

const ServicesTabs = ({ services }) => {
  const serviceKeys = Object.keys(services || {});
  const [active, setActive] = useState(serviceKeys[0]);

  if (!services || serviceKeys.length === 0) return null;

  return (
    <section className="max-w-8xl mx-auto px-4 py-8 md:py-14">
      <div className="max-w-7xl mx-auto">
        <AnnouncementsTitle
          title={services[active]?.title || "Our Services"}
          subtitle="Explore Our Services"
          description="At Dhammanjali Hospitality, we invite you to explore a carefully curated selection of exceptional services tailored to elevate every moment of your stay. Whether you're here for a peaceful retreat, a business event, or a family vacation, our offerings are designed to blend luxury with comfort seamlessly. Indulge in gourmet culinary experiences, unwind with our world-class spa treatments, or host memorable events in our state-of-the-art conference spaces."
          arrowWidth={230}
          arrowHeight={80}
          arrowColor="#FFA500"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8 md:mt-12">
        {serviceKeys.map((key) => (
          <button
            key={key}
            className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 text-sm md:text-base ${
              active === key
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700 border border-gray-200"
            }`}
            onClick={() => setActive(key)}
          >
            {iconMap[key]}
            <span className="font-semibold">
              {services[key]?.title ||
                key
                  .replace(/([a-z])([A-Z])/g, "$1 $2")
                  .replace(/^\w/, (c) => c.toUpperCase())}
            </span>
          </button>
        ))}
      </div>

      {services[active]?.image && (
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-6 md:gap-8 animate-slide-up lg:ml-30 lg:-mr-30">
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={services[active].image}
              alt={active}
              className="w-full h-64 md:h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <ul className="w-full md:w-1/2 space-y-3 md:space-y-4 text-gray-700 text-base md:text-lg">
            {(services[active].features || []).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <span className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

const GallerySection = ({ gallery }) => {
  const tabs = Object.keys(gallery || {});
  const [activeTab, setActiveTab] = useState(tabs[0]);

  if (!gallery || tabs.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-white px-4 max-w-full mx-auto lg:mb-2">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center mb-4 md:mb-6 animate-fade-in">
        Explore Our Hotel Gallery
      </h2>
      <div className="flex justify-center gap-2 md:gap-3 mb-8 md:mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 md:px-5 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 text-xs md:text-sm ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:max-w-7xl justify-center mx-auto">
        {(gallery[activeTab] || []).map((roomImg, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl overflow-hidden shadow-lg animate-scale-up flex flex-col"
          >
            <div className="relative group">
              <img
                src={roomImg}
                alt={`${activeTab} room ${index + 1}`}
                className="w-full h-48 md:h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                <p className="text-white font-semibold text-sm md:text-base">
                  View Details
                </p>
              </div>
            </div>
            <div className="p-4 md:p-5 flex-1 flex flex-col justify-between">
              <p className="font-semibold text-gray-800 mb-3 text-sm md:text-base">
                Elegant {activeTab} Room with Modern Amenities
              </p>
              <Link to="/GetFrenchieForm">
                <button className="bg-orange-500 text-white px-4 md:px-5 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 text-sm md:text-base w-full md:w-auto">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Hospitality = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 overflow-x-hidden pt-16 md:pt-20 font-montserrat">
      <section className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] flex items-center justify-center overflow-hidden">
        <img
          src={staticHospitalityData.hero?.backgroundImage}
          alt="Hospitality Hero"
          className="absolute inset-0 w-full h-full object-cover scale-110 transform transition-transform duration-1000 hover:scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide text-white drop-shadow-2xl mb-3 md:mb-4 animate-fade-in">
            {staticHospitalityData.hero?.title}
          </h1>
          <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-white font-medium max-w-3xl animate-slide-up px-4">
            {staticHospitalityData.hero?.description}
          </p>
          <Link to="/GetFrenchieForm">
            <button className="mt-4 md:mt-6 bg-orange-500 px-6 md:px-8 py-2 md:py-3 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 animate-pulse-slow text-sm md:text-base">
              Book Your Stay
            </button>
          </Link>
        </div>
      </section>

      <ServicesTabs services={staticHospitalityData.services} />
      <GallerySection gallery={staticHospitalityData.gallery} />
    </div>
  );
};

export default Hospitality;
