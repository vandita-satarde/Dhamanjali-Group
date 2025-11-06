import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// AnnouncementsTitle Component
const AnnouncementsTitle = ({
  title = "ANNOUNCEMENTS",
  subtitle = "LATEST",
  description = "DHAMMANJALI GROUP, At, our gallery captures the essence of our journey—showcasing our commitment to quality, community engagement, and innovation. Each image reflects our dedication to excellence and the meaningful connections we've built within the communities we serve. Explore our visual story and witness the milestones that define our brand.",
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

// Static data for Food component
const heroData = {
  title: "FOOD & BEVERAGES",
  imageUrl:
    "https://res.cloudinary.com/dwudu5pep/image/upload/v1761549676/almirall-office-cafeteria-barcelona-2_ejtznb.jpg",
};

const specialitiesData = {
  title: "Food & Beverages",
  subtitle: "Specialities",
  description:
    "Established in 2020 and headquartered in Prayagraj, Uttar Pradesh, Dhammanjali India Private Limited is a private, non-government company engaged in the food and beverages industry. The company focuses on creating lasting value not only through its products but also through meaningful contributions to the communities it serves.",
};

const foodItems = [
  {
    id: 1,
    heading: "Classic Butter Croissant",
    subheading:
      "Light, flaky, and baked golden every morning.",
    imageUrl:
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761639604/croissant_yxwzvv.jpg",
  },
  {
    id: 2,
    heading: "Masala chai",
    subheading:
      "Authentic, soul-warming chai brewed with fresh spices and love. From classic masala to unique blends — every sip tells a story.",
    imageUrl:
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761652699/masalaChai_ox1xyj.jpg",
  },
  {
    id: 3,
    heading: "Burger",
    subheading:
      "Serving juicy, handcrafted burgers made with fresh ingredients and bold flavors. Perfectly grilled, stacked with your favorite toppings, and always delicious.",
    imageUrl:
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761653204/k2ffns5rmyzpr4ghhjn4_cke2nj.jpg",
  },
  {
    id: 4,
    heading: "Cheese Grilled Sandwich",
    subheading:
      "Crispy golden bread stuffed with gooey melted cheese and veggies. A perfect quick bite for any time of the day.",
    imageUrl:
      "https://res.cloudinary.com/dwudu5pep/image/upload/v1761653300/s5lnaiyydeplpitwkzti_ft5mnc.jpg",
  },
];

const testimonialsData = [
  {
    id: 1,
    text: "The quality of food products from Dhammanjali is exceptional. Fresh ingredients and great taste every time!",
    author: "Priya Sharma",
  },
  {
    id: 2,
    text: "I've been ordering from them for months now. Their dairy products are always fresh and delivered on time.",
    author: "Rajesh Kumar",
  },
  {
    id: 3,
    text: "Outstanding service and premium quality rice. Highly recommended for all your food needs.",
    author: "Anita Singh",
  },
  {
    id: 4,
    text: "Their organic vegetables are the best in the market. Fresh, healthy, and reasonably priced.",
    author: "Suresh Gupta",
  },
];

// Main Food Component
function Food() {
  const scrollRef = useRef(null);
  const [filter, setFilter] = useState("");

  // Auto-scroll logic for testimonials
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let scrollAmount = 0;
    let direction = 1;
    let frameId;
    const speed = 0.7;

    function animate() {
      if (!container) return;
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 1
      ) {
        direction = -1;
      } else if (container.scrollLeft <= 0) {
        direction = 1;
      }
      scrollAmount = direction * speed;
      container.scrollLeft += scrollAmount;
      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Filtered food items
  const filteredSpecialities = foodItems.filter((item) =>
    item.heading?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-white font-montserrat text-gray-900 text-lg pt-16 md:pt-20">
      {/* Hero Section */}
      <section
        className="relative w-full h-80 max-h-80 overflow-hidden flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroData.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-[2.9em] font-bold tracking-wide bg-black/70 px-8 py-2 rounded-lg shadow-lg text-center">
          {heroData.title}
        </h1>
      </section>

      {/* Specialities Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="m-10">
          <AnnouncementsTitle
            title={specialitiesData.title}
            subtitle={
              <span className="font-rymaneco font-normal text-[2rem] md:text-[2rem]">
                {specialitiesData.subtitle}
              </span>
            }
            description={specialitiesData.description}
            arrowWidth={180}
            arrowHeight={16}
            arrowColor="#FFA500"
          />
        </div>

        {filteredSpecialities.length === 0 ? (
          <p className="text-center text-gray-500">
            No food items uploaded yet.
          </p>
        ) : (
          <div className="flex flex-col gap-32">
            {filteredSpecialities.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row ${
                  idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                } items-center gap-8`}
              >
                <motion.div className="flex-1 text-center lg:text-left">
                  <h3 className="mb-4 text-3xl md:text-4xl font-bold text-orange-600">
                    {item.heading}
                  </h3>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                    {item.subheading}
                  </p>
                </motion.div>
                <motion.img
                  src={item.imageUrl}
                  alt={item.heading}
                  className="flex-1 w-full md:w-[500px] h-[300px] md:h-[350px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Testimonials Section */}
      <section className="w-full overflow-x-auto py-16 bg-gradient-to-b from-orange-50 to-white">
        <h2 className="text-3xl md:text-4xl pt-2 font-bold text-center text-orange-600 mb-10">
          What Our Customers Say
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-6 px-6 md:px-12 min-w-[700px] overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="inline-block min-w-[280px] max-w-[400px] bg-white rounded-2xl shadow-lg p-6 text-left flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
              <p className="text-gray-800 text-base font-medium leading-relaxed mb-4 min-h-[90px]">
                {t.text}
              </p>
              <div className="font-semibold text-gray-900 text-lg">
                — {t.author}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Food;
