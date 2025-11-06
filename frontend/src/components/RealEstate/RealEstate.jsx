import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  X,
  MapPin,
  DollarSign,
  Home,
  Sparkles,
} from "lucide-react";

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

// DreamHome Component
const DreamHome = () => {
  const dreamHomeData = {
    tagline: "FIND YOUR PERFECT HOME",
    title: "Your Dream Home Awaits",
    subtitle: "Premium Properties for Modern Living",
    description:
      "Discover exceptional residential and commercial properties that combine luxury, comfort, and strategic location. Our curated selection ensures you find the perfect space for your lifestyle and investment goals.",
    buttonText: "Explore Properties",
    mainImageUrl:
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761553177/realestate2_qgbylc.avif",
    overlayImageUrl:
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761553176/realestate6_ifx8kk.avif",
  };

  return (
    <div className="bg-blue-300 font-montserrat py-10 md:py-20 px-5">
      <div className="text-center mb-8 md:mb-16">
        <p className="text-base md:text-lg text-gray-700 mb-2 tracking-wide text-left md:text-center">
          {dreamHomeData.tagline}
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-left md:text-center">
          {dreamHomeData.title}
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row flex-wrap items-center justify-between gap-6 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full max-w-[400px] min-w-[220px] mx-auto"
        >
          <div className="border-[8px] md:border-[10px] border-amber-500 shadow-xl">
            <img
              src={dreamHomeData.mainImageUrl}
              alt="Main Building"
              className="w-full h-auto block"
            />
          </div>
          {dreamHomeData.overlayImageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 right-0 md:block hidden md:bottom-[-40px] md:right-[-40px] border-[8px] md:border-[10px] border-amber-500 bg-white shadow-xl"
            >
              <img
                src={dreamHomeData.overlayImageUrl}
                alt="Overlay Building"
                className="w-[200px] md:w-[250px] h-auto block"
              />
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[220px] max-w-[500px] text-left"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-5 leading-tight">
            {dreamHomeData.subtitle}
          </h3>
          <p className="text-sm md:text-base text-gray-800 mb-6 md:mb-8">
            {dreamHomeData.description}
          </p>
          <a href="/GetFrenchieForm" className="inline-block mb-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-white font-bold text-sm md:text-base px-5 md:px-7 py-3 md:py-3.5 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all"
            >
              {dreamHomeData.buttonText}
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

// HandpickedProjects Component
const HandpickedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const sectionData = {
    title: "Handpicked Projects",
    description:
      "Carefully selected premium properties that offer exceptional value, strategic locations, and modern amenities. Each project is thoroughly vetted to ensure quality and investment potential.",
  };

  const projects = [
    {
      id: 1,
      name: "Luxury Villa Complex",
      plotArea: "Prayagraj, Uttar Pradesh",
      price: "₹1.2 Cr - ₹2.5 Cr",
      imageUrl:
        "https://res.cloudinary.com/dwudu5pep/image/upload/v1761553176/realestate7_so8fdd.avif",
      description:
        "Premium luxury villas with modern amenities, landscaped gardens, and 24/7 security. Perfect for families seeking comfort and elegance.",
      highlights: [
        "Gated Community",
        "Swimming Pool",
        "Gym & Clubhouse",
        "Kids Play Area",
        "24/7 Security",
      ],
    },
    {
      id: 2,
      name: "Commercial Plaza",
      plotArea: "City Center, Prayagraj",
      price: "₹75L - ₹1.5 Cr",
      imageUrl:
        "https://res.cloudinary.com/dwudu5pep/image/upload/v1761553176/realestate8_ztuat3.avif",
      description:
        "Strategic commercial spaces in the heart of the city, ideal for offices, retail stores, and business establishments.",
      highlights: [
        "Prime Location",
        "High Footfall Area",
        "Parking Available",
        "Modern Infrastructure",
        "Investment Opportunity",
      ],
    },
    {
      id: 3,
      name: "Residential Apartments",
      plotArea: "Civil Lines, Prayagraj",
      price: "₹45L - ₹85L",
      imageUrl:
        "https://res.cloudinary.com/dwudu5pep/image/upload/v1761553176/realestate9_f6mlmt.avif",
      description:
        "Modern residential apartments with contemporary design, excellent connectivity, and all essential amenities nearby.",
      highlights: [
        "2-3 BHK Options",
        "Modular Kitchen",
        "Balcony Views",
        "Elevator Access",
        "Near Schools & Hospitals",
      ],
    },
    {
      id: 4,
      name: "Farmhouse Plots",
      plotArea: "Outskirts, Prayagraj",
      price: "₹25L - ₹60L",
      imageUrl:
        "https://res.cloudinary.com/dwudu5pep/image/upload/v1761553176/realestate4_tdrr8b.avif",
      description:
        "Spacious farmhouse plots perfect for weekend getaways or agricultural activities, surrounded by natural beauty.",
      highlights: [
        "Large Plot Sizes",
        "Natural Environment",
        "Investment Potential",
        "Road Connectivity",
        "Clear Title",
      ],
    },
  ];

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const projectsToShow = projects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < projects.length;

  return (
    <section className="bg-white py-10 md:py-20 px-5 font-montserrat relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 md:gap-10 mb-10 md:mb-16"
        >
          <div className="flex-shrink-0">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-900 to-purple-700 bg-clip-text text-transparent"
            >
              {sectionData.title}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-3 text-lg md:text-xl text-indigo-900 font-light"
            >
              <span className="font-medium tracking-wider">EXPLORE</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="text-yellow-600 w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[650px]"
          >
            {sectionData.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsToShow.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative cursor-pointer group border border-gray-100"
              onClick={() => setSelectedProject(project)}
            >
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15 + 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="absolute top-3 md:top-4 left-3 md:left-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-full z-10 shadow-lg flex items-center gap-1"
              >
                <Sparkles className="w-2 h-2 md:w-3 md:h-3" />
                Featured
              </motion.span>

              <div className="relative overflow-hidden">
                <motion.img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <motion.div
                className="p-4 md:p-6"
                whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-lg md:text-xl font-bold text-indigo-900 mb-2 md:mb-3 group-hover:text-purple-700 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.name}
                </motion.h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-indigo-500" />
                  <p className="text-xs md:text-sm font-medium">
                    {project.plotArea}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" />
                  <p className="text-sm md:text-lg text-yellow-600 font-bold">
                    {project.price}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-8 md:mt-12"
          >
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-900 to-purple-800 hover:from-indigo-800 hover:to-purple-700 text-white font-semibold py-3 md:py-4 px-8 md:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">Load More Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 md:top-6 right-4 md:right-6 text-gray-400 hover:text-red-500 transition-colors bg-gray-100 hover:bg-red-50 rounded-full p-2"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={20} />
                </motion.button>

                <div className="relative overflow-hidden rounded-xl mb-4 md:mb-6">
                  <motion.img
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    src={selectedProject.imageUrl}
                    alt={selectedProject.name}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-3xl font-bold text-indigo-900 mb-3 md:mb-4"
                >
                  {selectedProject.name}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 mb-2 md:mb-3"
                >
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-indigo-500" />
                  <p className="text-gray-600 font-medium text-sm md:text-base">
                    {selectedProject.plotArea}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 mb-4 md:mb-6"
                >
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
                  <p className="text-xl md:text-2xl text-yellow-600 font-bold">
                    {selectedProject.price}
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base"
                >
                  {selectedProject.description}
                </motion.p>

                {selectedProject.highlights &&
                  selectedProject.highlights.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 md:p-6"
                    >
                      <h4 className="text-indigo-800 font-bold mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2 md:space-y-3">
                        {selectedProject.highlights.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + idx * 0.1 }}
                            className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
                          >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Main RealEstate Component
function RealEstate() {
  const staticData = {
    banner: {
      title: "PREMIUM REAL ESTATE",
      imageUrl:
        "https://res.cloudinary.com/dwudu5pep/image/upload/v1761553177/realestate1_cgiui5.avif",
    },
    text: {
      title: "REAL ESTATE",
      subtitle: "EXPLORE",
      description:
        "Discover exceptional real estate opportunities with Dhammanjali India Private Limited. We specialize in premium residential and commercial properties that combine modern amenities with strategic locations, ensuring excellent investment potential and lifestyle enhancement.",
    },
    cards: {
      buying: {
        title: "Premium Homes for Sale",
        imageUrl:
          "https://res.cloudinary.com/dwudu5pep/image/upload/v1761553177/realestate2_qgbylc.avif",
      },
      renting: {
        title: "Luxury Rental Properties",
        imageUrl:
          "https://res.cloudinary.com/dwudu5pep/image/upload/v1761553176/realestate3_vphsrn.avif",
      },
      plots: {
        title: "Investment Land Plots",
        imageUrl:
          "https://res.cloudinary.com/dwudu5pep/image/upload/v1761553176/realestate4_tdrr8b.avif",
      },
    },
  };

  return (
    <div className="font-montserrat bg-white m-0 p-0 pt-16 md:pt-20">
      {/* Banner */}
      <div
        className="bg-cover bg-center h-60 md:h-80 relative flex items-center justify-center"
        style={{ backgroundImage: `url(${staticData.banner.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-white text-2xl md:text-3xl lg:text-[2.9em] font-bold tracking-wide bg-black/70 px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg text-center">
          {staticData.banner.title}
        </h1>
      </div>

      {/* Text Content */}
      <div className="mx-4 md:mx-10 lg:mx-20 my-5">
        <AnnouncementsTitle
          title={staticData.text.title}
          subtitle={
            <span className="font-rymaneco font-normal text-xl md:text-[2rem]">
              {staticData.text.subtitle}
            </span>
          }
          description={staticData.text.description}
          arrowWidth={230}
          arrowHeight={80}
          arrowColor="#FFA500"
        />
      </div>

      {/* Card Grid */}
      <div className="flex flex-wrap gap-6 md:gap-8 justify-evenly max-w-7xl mx-auto my-10 md:my-16 px-2">
        {Object.entries(staticData.cards).map(([key, card]) => (
          <div
            key={key}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl p-4 md:p-6 w-full sm:w-72 text-center transition-shadow duration-300 cursor-pointer group"
          >
            <div className="overflow-hidden rounded-lg mb-4 md:mb-6">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-lg md:text-xl font-bold text-gray-800">
              {card.title}
            </p>
          </div>
        ))}
      </div>

      {/* Components */}
      <DreamHome />
      <HandpickedProjects />
    </div>
  );
}

export default RealEstate;
