import React, { useEffect, useRef } from "react";

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

// Static data for Medical component
const staticData = {
  hero: {
    title: "MEDICAL GRADE DEVICES",
    imageUrl:
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761551821/medical-banner-with-doctor-holding-tablet_rwv2tj.jpg",
  },
  intro: {
    title: "DHAMMANJALI",
    subtitle: "MEDICAL",
    description:
      "AT DHAMMANJALI INDIA PRIVATE LIMITED, we are committed to enhancing healthcare through the development of innovative, reliable, and affordable medical devices. Our focus lies in creating solutions that address real-world clinical needs, ensuring safety, efficacy, and accessibility for diverse healthcare settings.",
  },
  tech: {
    title: "INNOVATIVE MEDICAL TECHNOLOGY",
    subtitle: "BETTER HEALTHCARE",
    description:
      "Cutting edge medical devices designed to improve patient outcomes and streamline clinical workflows",
    imageUrl:
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761552042/x2zld1rs6pvpg6nhyw5w_fdt4am.png",
  },
  devices: {
    title: "OUR MEDICAL DEVICES",
    description: "Innovative solutions for modern healthcare challenges",
    deviceName: "NEUROSENCE PRO",
    deviceDescription: "Neurological monitoring device for critical care",
    deviceFeatures: ["ECG/EMG", "Real-time analytics", "Cloud storage"],
    imageUrl:
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761552072/medical1_x3ozmf.png",
  },
  features: [
    {
      icon: "🧡",
      title: "Patient Monitoring",
      description: "Real-time vital signs tracking with AI-powered alerts",
    },
    {
      icon: "🛠️",
      title: "Surgical Precision",
      description: "Advanced tools for minimally invasive procedures",
    },
    {
      icon: "🗄️",
      title: "Data Integration",
      description: "Seamless EHR connectivity and analytics",
    },
    {
      icon: "✅",
      title: "Regulatory Compliant",
      description: "FDA-approved and CE-marked devices",
    },
  ],
  testimonials: [
    {
      name: "Dr. Ramesh Iyer",
      text: "The medical devices provided by Dhammanjali are of top-notch quality and extremely reliable in day-to-day healthcare operations. Their precision and durability make them a preferred choice in our clinic.",
    },
    {
      name: "Pooja Nair",
      text: "As a caregiver, having access to Dhammanjali's home-use diagnostic devices has made my work so much easier. They are user-friendly, accurate, and come with clear instructions. Highly recommended!",
    },
    {
      name: "Dr. Pratik Mehra",
      text: "Their commitment to innovation in medical technology is commendable. We've been using their portable ECG and BP monitors for community health programs with excellent results.",
    },
    {
      name: "Anita Sharma",
      text: "Affordable and reliable medical tools are hard to find, but Dhammanjali has truly impressed us with their range of diagnostic and surgical instruments. Great support team too!",
    },
    {
      name: "Dr. Farheen Khan",
      text: "From thermometers to pulse oximeters, every device we've sourced from Dhammanjali has been trustworthy and delivered consistent results. Their after-sales support is also prompt and helpful.",
    },
    {
      name: "Rahul Deshmukh",
      text: "We've partnered with Dhammanjali for our rural medical camps and the devices have always functioned flawlessly even in tough conditions. A real boost for field healthcare.",
    },
    {
      name: "Dr. Anjali Patil",
      text: "What I admire most is their attention to quality standards and compliance. Every device we've received comes with clear documentation and certifications. Trustworthy and safe.",
    },
    {
      name: "Karthik Srinivasan",
      text: "I was surprised by the advanced features in their diagnostic kits. Easy connectivity, long battery life, and lightweight – exactly what mobile health units need.",
    },
    {
      name: "Meera Kapoor",
      text: "Being able to monitor my mother's vitals at home with Dhammanjali's homecare kit has been life-changing. Thank you for making healthcare accessible and convenient!",
    },
    {
      name: "Dr. Suraj Chaudhary",
      text: "We rely on Dhammanjali's equipment in our day-to-day hospital operations. Their products are robust, easy to maintain, and designed with healthcare practitioners in mind.",
    },
  ],
};

function Medical() {
  const testimonialsRef = useRef(null);

  const { hero, intro, tech, devices, features, testimonials } = staticData;

  return (
    <div className="min-h-screen bg-white font-montserrat text-gray-800 pt-16 md:pt-20">
      {/* Hero Section */}
      <header
        className="relative w-full h-[320px] max-h-[320px] overflow-hidden flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-[2.9em] font-bold tracking-wide bg-black/70 px-8 py-2 rounded-lg shadow-lg text-center">
          {hero.title}
        </h1>
      </header>

      {/* Intro Section */}
      <section className="mx-4 md:mx-20 my-5 lg:my-15">
        <AnnouncementsTitle
          title={intro.title}
          subtitle={
            <span className="font-rymaneco font-normal text-[2rem] md:text-[2rem]">
              {intro.subtitle}
            </span>
          }
          description={intro.description}
          arrowWidth={230}
          arrowHeight={80}
          arrowColor="#FFA500"
        />
      </section>

      {/* Innovative Technology Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mx-auto px-4 sm:px-6 md:py-8 gap-10 max-w-6xl">
        <div className="medical-tech-img w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center">
          <img
            src={tech.imageUrl}
            alt="Medical Device"
            className="w-full lg:h-[450px] object-cover rounded-[40%_20%_40%_20%] shadow-lg"
          />
        </div>
        <div className="text-center align-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            {tech.title}
          </h3>
          <h4 className="text-2xl md:text-3xl font-light text-gray-800 mb-2">
            {tech.subtitle}
          </h4>
          <p className="text-gray-600 mb-5">{tech.description}</p>
          <div className="flex justify-center gap-4">
            <a href="/retail">
              <button className="bg-yellow-400 text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">
                EXPLORE PRODUCT
              </button>
            </a>
            <a href="/GetFrenchieForm">
              <button className="bg-yellow-400 text-gray-800 font-semibold px-6 py-2 rounded-full border border-yellow-400 hover:bg-yellow-500 transition-colors">
                REQUEST DEMO
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mx-auto px-4 sm:px-6 py-8 gap-10 max-w-6xl">
        <div className="medical-devices-img w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center md:order-last">
          <img
            src={devices.imageUrl}
            alt="Medical Device 2"
            className="w-full lg:h-[450px] object-cover rounded-[40%_20%_40%_20%] shadow-lg"
          />
        </div>
        <div className="flex-1 text-center md:order-first">
          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            {devices.title}
          </h3>
          <p className="text-gray-700 mb-4 md:text-xl">{devices.description}</p>
          <br />
          <div className="mb-6">
            <strong className="text-2xl md:text-3xl font-light text-gray-800 mb-2">
              {devices.deviceName}
            </strong>
            <span className="block text-gray-600 mb-2">
              {devices.deviceDescription}
            </span>
            <div className="flex justify-center gap-2 mb-5 flex-wrap">
              {devices.deviceFeatures.map((f, i) => (
                <span
                  key={i}
                  className="bg-orange-400 text-white text-sm px-3 py-1 rounded-full flex justify-center items-center"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex justify-center gap-8 bg-gray-100 py-10 px-6 flex-wrap">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 min-w-[220px] max-w-[260px] text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="flex gap-8 bg-gray-100 py-10 px-6 overflow-x-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400"
        style={{ flexWrap: "nowrap", scrollBehavior: "smooth" }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 min-w-[150px] lg:min-w-[340px] max-w-[280px] lg:max-w-[400px] flex-shrink-0 mx-4 text-left hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
            <p className="text-gray-800 text-base mb-5 leading-relaxed">
              {testimonial.text}
            </p>
            <div className="font-bold text-gray-800 text-lg">
              {testimonial.name}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Medical;
