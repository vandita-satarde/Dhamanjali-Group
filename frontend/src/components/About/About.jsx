import React, { useState } from "react";
import { motion } from "framer-motion";
import BusinessCards from "./BusinessCards";
import Excellence from "../../assets/images/Excellence-2.png";

// Framer Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function About() {
  const [valueCreationData, setValueCreationData] = useState({
    title: "OUR VALUE-CREATION APPROACH",
    description:
      "At DHAMMANJALI GROUP, we believe in creating lasting value not just through our products but through meaningful contributions to the communities we serve. Our approach focuses on empowering communities and enriching lives by delivering high-quality products, fostering sustainable practices, and supporting social initiatives that positively impact the society. Our approach is centered around integrity, accountability, and a strong sense of responsibility towards our customers, partners, communities. We achieve this by aligning our goals with our six core values, which guide our actions and decisions every day.",
    image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761454378/bannerAboutUs_vnftgd.jpg",
    stats: "1,000 +",
    statsDescription:
      "Happy customers served annually\nTrusted by families across the region.",
    commitmentTitle: "CUSTOMER COMMITMENT",
    commitmentText:
      "We prioritize our customers' needs and work tirelessly to exceed their expectations at every step. Our commitment is rooted in delivering not just products and services, but meaningful experiences that add value to their lives.",
  });

  // Values Section Data
  const [selectedIndex, setSelectedIndex] = useState(1);
  const description =
    "We aim to conduct our businesses ethically and in a manner that is respectful to all individuals, communities, and the environment. Our commitment goes beyond compliance—we believe in doing the right thing, even when no one is watching. We achieve this by aligning our goals with our six core values, which serve as the group of every decision, interaction, and initiative we undertake.";

  const values = [
    { title: "Excellence", image: Excellence },
    { title: "Customer Value", image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761454750/ns27nvpzvpbzrined1in_n6cst4.jpg" },
    { title: "Owner Mindset", image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761454749/dlcc3ac6sdr83rpopctg_lt1mto.jpg" },
  ];

  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };

  // Rearrange values array to put selected item in center
  const getArrangedValues = () => {
    const arranged = [...values];
    if (selectedIndex !== 1) {
      const selectedItem = arranged[selectedIndex];
      const centerItem = arranged[1];
      arranged[1] = selectedItem;
      arranged[selectedIndex] = centerItem;
    }
    return arranged;
  };

  const arrangedValues = getArrangedValues();

  // Animated AnnouncementsTitle component
  const AnnouncementsTitle = ({
    title,
    subtitle,
    description,
    arrowWidth,
    arrowHeight,
    arrowColor,
  }) => (
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.div>
      <motion.div
        className="flex justify-center my-6"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <svg
          width={arrowWidth}
          height={arrowHeight}
          viewBox={`0 0 ${arrowWidth} ${arrowHeight}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 sm:w-40 md:w-48"
        >
          <motion.line
            x1="0"
            y1={arrowHeight / 2}
            x2={arrowWidth - 20}
            y2={arrowHeight / 2}
            stroke={arrowColor}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.polygon
            points={`${arrowWidth - 20},${arrowHeight / 2 - 4} ${arrowWidth},${
              arrowHeight / 2
            } ${arrowWidth - 20},${arrowHeight / 2 + 4}`}
            fill={arrowColor}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
            viewport={{ once: true }}
          />
        </svg>
      </motion.div>
      <motion.p
        className="text-base sm:text-lg text-black max-w-4xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
  return (
    <div className="w-[100%] min-h-screen bg-gray-50 mt-10 lg:mt-10">
      {/* Hero Section with padding to account for fixed navbar */}
      <section className="pt-20 md:pt-24 pb-16 md:pb-20 bg-white ">
        <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Growth Through
              <br />
              <span className="text-orange-500">Service</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mb-8 md:mb-12">
              Dhammanjali India Private Limited
            </h2>

            {/* Content Description */}
            <div className="max-w-full mx-auto mb-8 md:mb-12">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify sm:text-center px-2 sm:px-4">
                DHAMMANJALI INDIA PRIVATE LIMITED is a leading shopping mart
                dedicated to offering a wide variety of high-quality products.
                From home appliances and gift items to kids products, utensils,
                stationery, and more, we ensure our customers have access to
                everything they need in one convenient place. We strive to
                provide an exceptional shopping experience with competitive
                prices, making us your trusted partner for all your shopping
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BusinessCards />

      {/* Aspirations and Desired Section */}
      <section className="w-full px-4 py-12 md:py-20 font-montserrat bg-white">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="text-4xl md:text-5xl font-bold text-orange-600">
            ASPIRATIONS AND
          </div>
          <div className="text-3xl md:text-4xl font-light text-gray-700">
            DESIRED
          </div>
          <div className="flex justify-center mt-4">
            <svg
              className="w-24 h-6 md:w-32 md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 24"
              fill="none"
              stroke="#F8D982"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="90" y2="12" />
              <polyline points="82 6 90 12 82 18" />
            </svg>
          </div>
        </div>

        {/* Vision Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {/* Vision English */}
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-extrabold text-orange-600 mb-3">
              Vision:
            </h3>
            <hr className="mb-4 border-orange-200" />
            <p className="text-gray-800 leading-relaxed">
              Our company aims to establish a balance between faith and economy
              by practically implementing our products, projects, and services
              across the nation and globally—consistently reaching new heights
              of development, and contributing to making India a "Prosperous
              India" once again. We will continue progressing through modern
              activities while upholding our ancient Sanatan traditions,
              cultural, historical, and religious heritage.
            </p>
          </div>
          {/* Vision Hindi */}
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-extrabold text-orange-600 mb-3">
              दृष्टिकोण:
            </h3>
            <hr className="mb-4 border-orange-200" />
            <p className="text-gray-800 leading-relaxed">
              धम्मांजलि ग्रुप ऑफ कंपनीज का उद्देश्य आस्था और अर्थव्यवस्था का
              समन्वय स्थापित कर देश-दुनिया में अपनी प्रोडक्ट्स, प्रोजेक्ट्स और
              सर्विसेज को व्यावहारिक रूप से स्थापित करते हुए निरंतर विकास की नई
              ऊँचाइयों को प्राप्त कर भारत को पुनः 'समृद्ध भारत' बनाना है। हम
              अपनी आदिसनातनी ऐतिहासिक, सांस्कृतिक, धार्मिक विरासत के साथ आधुनिक
              गतिविधियों के माध्यम से लगातार प्रगति की ओर अग्रसर रहेंगे।
            </p>
          </div>
        </div>

        {/* Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission English */}
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-extrabold text-orange-600 mb-3">
              Mission:
            </h3>
            <hr className="mb-4 border-orange-200" />
            <p className="text-gray-800 leading-relaxed">
              By aligning faith with economic growth and moving forward while
              preserving our heritage, we are committed to making India a strong
              and prosperous nation on the global stage. We will constantly
              strive to create value for our customers, employees, and society,
              and will always work to maintain their trust.
            </p>
          </div>
          {/* Mission Hindi */}
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-extrabold text-orange-600 mb-3">
              मिशन:
            </h3>
            <hr className="mb-4 border-orange-200" />
            <p className="text-gray-800 leading-relaxed">
              आस्था और अर्थव्यवस्था का समन्वय स्थापित कर, विरासत के साथ विकास की
              ओर बढ़ते हुए, हम भारत को विश्व स्तर पर एक मजबूत और समृद्ध राष्ट्र
              बनाने के लिए प्रतिबद्ध हैं। हम अपने ग्राहकों, कर्मचारियों और समाज
              के लिए मूल्य बनाने के लिए निरंतर प्रयासरत रहेंगे और उनके विश्वास
              को बनाए रखने के लिए हमेशा काम करेंगे।
            </p>
          </div>
        </div>
      </section>

      {/* Value Creation Section */}
      <section className="w-full px-4 py-12 md:py-20 bg-gray-50 lg:mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left - Title and Arrow */}
            <div className="order-1 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                OUR VALUE-CREATION APPROACH
              </h2>
              <div className="flex items-center">
                <svg
                  className="ml-1"
                  width="120"
                  height="16"
                  viewBox="0 0 120 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="-100"
                    y1="8"
                    x2="104"
                    y2="8"
                    stroke="#FFD600"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <polygon points="104,2 120,8 104,14" fill="#FFD600" />
                </svg>
              </div>
            </div>

            {/* Right - Description */}
            <div className="order-2 lg:order-2">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                At DHAMMANJALI GROUP, we believe in creating sustainable
                value through innovative approaches and community-focused
                initiatives. Our commitment to excellence drives us to deliver
                exceptional results that benefit all stakeholders and
                communities we serve.
              </p>
            </div>
          </div>

          {/* Bottom Section - Responsive Layout */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 sm:gap-10 md:gap-12 lg:gap-15 mt-12 lg:mt-16">
            {/* Left - Image with Stats Box */}
            <div className="relative w-full lg:flex-1 lg:max-w-md mx-auto lg:mx-0">
              <div className="border-4 sm:border-6 border-orange-400 p-1 bg-orange-400">
                <img
                  src={valueCreationData.image}
                  alt="Customer Experience"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-50 max-sm:h-[200px] object-cover block"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"; // Fallback cafe image
                  }}
                />
              </div>
              {/* Stats Box - Responsive positioning */}
              <div className="stats-responsive z-10 static sm:absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-4 lg:-bottom-10 lg:-right-4 w-full sm:w-48 md:w-56 lg:w-64 mt-5 sm:mt-0 ml-0 mr-0 bg-white border-4 sm:border-[6px] lg:border-[10px] border-orange-400 py-4 sm:py-6 px-4 sm:px-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-1 sm:mb-2">
                  {valueCreationData.stats}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                  {valueCreationData.statsDescription
                    .split("\n")
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index <
                          valueCreationData.statsDescription.split("\n")
                            .length -
                            1 && <br />}
                      </React.Fragment>
                    ))}
                </p>
              </div>
            </div>

            {/* Right - Customer Commitment Text */}
            <div className="w-full lg:flex-1 lg:max-w-2xl mt-12 sm:mt-16 lg:mt-0 ml-0 lg:ml-8 px-4 lg:px-0">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6 uppercase tracking-wide text-center lg:text-center lg:mt-15">
                {valueCreationData.commitmentTitle}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center lg:text-left">
                {valueCreationData.commitmentText
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index <
                        valueCreationData.commitmentText.split("\n").length -
                          1 && <br />}
                    </React.Fragment>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Behaviour Section */}
      <section className="bg-[#4a90a4] pt-16 pb-16 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <AnnouncementsTitle
            title="Our Values"
            description={description}
            arrowWidth={200}
            arrowHeight={12}
            arrowColor="#FFA500"
          />
        </div>

        <div className="values-container mt-12">
          {arrangedValues.map((value, i) => (
            <motion.div
              key={i}
              className={`${
                i === 1 ? "sm:-translate-y-6 md:-translate-y-10" : ""
              } card-enhanced flex flex-col items-center text-center cursor-pointer`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              onClick={() =>
                handleCardClick(
                  values.findIndex((v) => v.title === value.title)
                )
              }
            >
              <motion.div
                className={`image-wrapper-enhanced rounded-full overflow-hidden shadow-xl ${
                  i === 1
                    ? "highlight-image w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
                    : "w-44 h-44 sm:w-48 sm:h-48 lg:w-52 lg:h-52"
                }`}
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {value.image && value.image !== "#" ? (
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 text-sm">
                          No Image
                        </div>
                      `;
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 text-sm font-medium">
                    <img
                      src="#"
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </motion.div>
              <motion.h3
                className={`mt-4 font-semibold text-black ${
                  i === 1
                    ? "text-xl sm:text-2xl md:text-3xl"
                    : "text-lg sm:text-xl md:text-2xl"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 + 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {value.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
