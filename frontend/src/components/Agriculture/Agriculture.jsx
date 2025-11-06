import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaHotel,
  FaSpa,
  FaLeaf,
  FaSeedling,
  FaTractor,
} from "react-icons/fa";
import { motion } from "framer-motion";
import StoryImage1 from "../../assets/images/boy-1.jpg";
import StoryImage2 from "../../assets/images/girl-2.jpg";
import StoryImage3 from "../../assets/images/boy-2.jpg";

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

// Optimized Stories of Hope component
const StoriesOfHope = React.memo(({ storyImg, name, role, quote }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true, margin: "-50px" }}
    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100 mb-8"
  >
    <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
      <div className="relative w-full lg:w-auto">
        <img
          src={storyImg}
          alt={name}
          className="w-full lg:w-80 h-48 md:h-64 object-cover rounded-2xl shadow-lg"
          loading="lazy"
        />
      </div>
      <div className="flex-1 text-center lg:text-left space-y-4">
        <div className="relative">
          <FaLeaf className="text-green-400 text-xl md:text-2xl mb-4 mx-auto lg:mx-0" />
          <blockquote className="text-base md:text-lg lg:text-xl italic text-gray-700 leading-relaxed">
            "{quote}"
          </blockquote>
        </div>
        <div className="pt-4 border-t border-green-200">
          <p className="font-bold text-lg md:text-xl text-green-700">{name}</p>
          <p className="text-green-600 font-medium text-sm md:text-base">
            {role}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
));

// Static data for Agriculture component
const staticData = {
  hero: {
    title: "SMART AGRICULTURE",
    mainImage:
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761553959/agricultureLand_wzblos.avif",
  },
  details: {
    title: "AGRICULTURE",
    subtitle: "INNOVATION",
    description:
      "At Dhammanjali India Private Limited, we are committed to revolutionizing agriculture through innovative farming techniques, sustainable practices, and cutting-edge technology. Our focus lies in empowering farmers with modern solutions that enhance productivity while preserving the environment.",
    amenities: [
      {
        id: 1,
        title: "Organic Farming",
        desc: "Promoting sustainable and chemical-free farming practices that ensure healthy crops and preserve soil fertility for future generations.",
        icon: "FaLeaf",
      },
      {
        id: 2,
        title: "Smart Irrigation",
        desc: "Advanced water management systems that optimize water usage, reduce waste, and ensure efficient crop irrigation.",
        icon: "FaSpa",
      },
      {
        id: 3,
        title: "Crop Monitoring",
        desc: "Modern technology solutions for real-time crop health monitoring, pest detection, and yield optimization.",
        icon: "FaTractor",
      },
    ],
  },
  features: {
    feature1Title: "Sustainable Practices",
    feature1Description:
      "Implementing eco-friendly farming methods that protect the environment while maximizing crop yield and quality.",
    feature2Title: "Modern Equipment",
    feature2Description:
      "Providing farmers with access to state-of-the-art agricultural machinery and tools for efficient farming operations.",
    feature3Title: "Expert Guidance",
    feature3Description:
      "Offering professional consultation and training to help farmers adopt modern agricultural techniques and best practices.",
  },
  stories: [
    {
      id: 1,
      storyImg: StoryImage1,
      name: "Ramesh Kumar",
      role: "Organic Farmer",
      quote:
        "Thanks to Dhammanjali's sustainable farming techniques, I've increased my crop yield by 40% while maintaining soil health. The organic methods have transformed my farm into a thriving ecosystem.",
    },
    {
      id: 2,
      storyImg: StoryImage2,
      name: "Priya Sharma",
      role: "Smart Farm Owner",
      quote:
        "The smart irrigation system provided by Dhammanjali has reduced my water consumption by 60% while improving crop quality. It's a game-changer for modern farming.",
    },
    {
      id: 3,
      storyImg: StoryImage3,
      name: "Vikram Singh",
      role: "Progressive Farmer",
      quote:
        "With Dhammanjali's guidance and modern equipment, I've transformed my traditional farm into a profitable and sustainable agricultural enterprise.",
    },
  ],
};

const Agriculture = () => {
  const { hero, details, features, stories } = staticData;

  const amenities = useMemo(() => {
    const iconMap = {
      FaLeaf: <FaLeaf size={28} color="#FB923C" />,
      FaSpa: <FaSpa size={28} color="#FB923C" />,
      FaTractor: <FaTractor size={28} color="#FB923C" />,
    };
    return details.amenities.map((amenity) => ({
      ...amenity,
      icon: iconMap[amenity.icon] || <FaLeaf size={28} color="#FB923C" />,
    }));
  }, [details]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-x-hidden pt-16 md:pt-20 font-montserrat relative">
      {/* Simplified Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-200/10 to-emerald-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-br from-yellow-200/10 to-orange-300/10 rounded-full blur-3xl" />
      </div>

      {/* Optimized Hero Section */}
      <section
        className="relative w-full h-60 md:h-80 max-h-80 overflow-hidden flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.mainImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-2xl md:text-3xl lg:text-[2.9em] font-bold tracking-wide bg-black/70 px-4 md:px-8 py-2 md:py-3 rounded-lg shadow-lg text-center">
          {hero.title}
        </h1>
      </section>

      {/* Optimized Agriculture Details Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 py-10 md:py-20 lg:py-28 z-10 relative"
      >
        <div className="mx-4 md:mx-10 lg:mx-20 my-5">
          <AnnouncementsTitle
            title={details.title}
            subtitle={
              <span className="font-rymaneco font-normal text-xl md:text-[2rem]">
                {details.subtitle}
              </span>
            }
            description={details.description}
            arrowWidth={250}
            arrowHeight={100}
            arrowColor="#FFA500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-18 lg:h-17 border-amber-300 border-2 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  {amenity.icon}
                </div>
                <h3 className="text-lg md:text-xl text-center font-bold text-gray-800 mb-3 md:mb-4">
                  {amenity.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {amenity.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Optimized Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 md:px-6 pt-0 pb-10 md:pb-20 lg:pb-28 z-10 relative"
      >
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4">
            <FaTractor className="text-green-600" />
            Smart Technology
          </div>
          <h2 className="text-[22px] md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent pb-2 md:pb-6">
            Smart Farming Features
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-4 md:mb-6" />
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto lg:leading-relaxed px-4">
            Empowering farmers with cutting-edge technology and sustainable
            solutions for a greener tomorrow.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: features.feature1Title,
              desc: features.feature1Description,
              icon: FaSeedling,
              gradient: "from-green-400 to-emerald-500",
            },
            {
              title: features.feature2Title,
              desc: features.feature2Description,
              icon: FaLeaf,
              gradient: "from-emerald-400 to-teal-500",
            },
            {
              title: features.feature3Title,
              desc: features.feature3Description,
              icon: FaTractor,
              gradient: "from-teal-400 to-cyan-500",
            },
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg mx-auto`}
                >
                  <IconComponent className="text-white text-xl md:text-2xl" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl text-center font-bold text-gray-800 mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Optimized Stories Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-0 pb-10 md:pb-20 lg:pb-28">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4">
            <FaLeaf className="text-orange-600" />
            Success Stories
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent mb-4 md:mb-6">
            Stories of Farmers
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-green-400 to-orange-400 rounded-full mx-auto mb-4 md:mb-6" />
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Real stories from farmers who transformed their lives through
            sustainable agriculture.
          </p>
        </div>
        <div className="space-y-6 md:space-y-8">
          {stories.map((story) => (
            <StoriesOfHope
              key={story.id}
              storyImg={story.storyImg}
              name={story.name}
              role={story.role}
              quote={story.quote}
            />
          ))}
        </div>
      </section>

      {/* Optimized CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-4 md:px-6 pt-0 pb-10 md:pb-20 lg:pb-28"
      >
        <div className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative flex flex-col lg:flex-row items-center justify-between p-6 md:p-8 lg:p-12 gap-6 md:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4">
                <FaSeedling className="text-green-200" />
                Join the Movement
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Join Our Sustainable
                <br />
                <span className="text-yellow-300">Farming Community</span>
              </h3>
              <p className="text-green-100 text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Connect with like-minded farmers, access cutting-edge resources,
                and be part of the agricultural revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/GetFrenchieForm"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-600 font-bold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-yellow-50"
                >
                  <span>Join Now</span>
                  <span>→</span>
                </Link>
                <Link to="/about">
                  <button className="w-full sm:w-auto bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/30 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2909/2909769.png"
                alt="Community"
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Optimized Back to Top Button */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-50 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
        aria-label="Back to top"
      >
        <svg
          width="20"
          height="20"
          md:width="24"
          md:height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button> */}
    </div>
  );
};

export default Agriculture;
