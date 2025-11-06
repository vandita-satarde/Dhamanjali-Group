import React from "react";
import { Link } from "react-router-dom";

const AnnouncementCards = () => {
  // Cards data
  const cardsData = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761450792/OIP_zcuvr6.jpg",
      title: "M-Mart",
      route: "/retail",
      description: "A NEW ERA OF SHOPPING MART & MALL.",
      alt: "M-Mart",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761450759/almirall-office-cafeteria-barcelona-2_mc2q0o.jpg",
      title: "CAFE VILLA",
      route: "/food",
      description: "RISHTO KI MITHAS, CAFE VILLA KE SATH.",
      alt: "Cafe Villa",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761450887/hybrid_with_glass_backsplash-v2-1280x853_vupqoi.webp",
      title: "DHAMMANJALI HIMALAYAN WATER IONIZER",
      route: "/health",
      description: "A MEDICAL GRADE DEVICE ISO 13485 CERTIFIED.",
      alt: "Water Filter",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761450888/IMG-20230704-WA0011_npuywy.jpg",
      title: "SANATAN VALLEY",
      route: "/realestate",
      description:
        "WORLD 1ST, ULTRA LUXURIOUS SANATAN VALLEY AGRO FARMHOUSE & RESORT PROJECT.",
      alt: "SANATAN VALLEY",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761450889/IMG-20230926-WA0013_zwua4j.jpg",
      title: "Agriculture Fields",
      route: "/agriculture",
      date: "15 MAR 2025",
      description:
        "Empowering farmers with cutting-edge technology and sustainable solutions for a greener tomorrow.",
      alt: "Agriculture Fields",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761450963/superior1_wgs9m8.jpg",
      title: "Hotels & Resort",
      route: "/hospitality",
      description:
        "We believe hospitality is more than service — it’s about creating warm, memorable experiences that make you feel truly welcome and at home.",
      alt: "Hotels & Resort",
    },
  ];

  // Reusable Card Component
  const AnnouncementCard = ({ card, isMobile = false }) => {
    const cardClasses = `
      snap-center flex-shrink-0 
      bg-[radial-gradient(ellipse_at_center,_#FDE6A0_0%,_#F8B938_40%,_#F89E00_100%)] 
      rounded-3xl w-72 
      ${isMobile ? "min-h-[430px]" : "min-h-[400px]"} 
      p-5 shadow-${isMobile ? "lg" : "xl"} 
      border border-yellow-300 flex flex-col justify-between 
      transition-transform 
      ${isMobile ? "hover:scale-[1.03]" : "transform hover:scale-105"}
    `;

    const imageClasses = `
      ${isMobile ? "w-40 h-40" : "w-44 h-44"} 
      rounded-full object-cover mx-auto 
      border-${isMobile ? "4" : "6"} border-yellow-400 
      shadow-${isMobile ? "md" : "lg"} 
      ${isMobile ? "mb-4" : "mb-5"}
    `;

    return (
      <div className={cardClasses}>
        <img src={card.image} alt={card.alt} className={imageClasses} />
        <div className="text-center text-gray-800 px-2">
          <h3
            className={`font-${isMobile ? "semibold" : "bold"} ${
              isMobile ? "text-base" : "text-lg"
            } uppercase text-[#2C2C54] text-center ${
              isMobile ? "justify-center" : ""
            }`}
          >
            {card.title}
          </h3>
          <p className="text-xs text-white mt-1 italic font-bold">
            {card.date}
          </p>
          <p
            className={`${
              isMobile ? "mt-2" : "mt-3"
            } text-sm leading-relaxed break-words overflow-hidden`}
          >
            {card.description}
          </p>
          <Link to={card.route || "/"} className="block text-center">
            <button
              className={`${
                isMobile ? "mt-3" : "mt-4"
              } bg-[#2C2C54] hover:bg-[#1a1a3a] text-white font-semibold py-2 ${
                isMobile ? "px-4" : "px-6"
              } rounded-full transition-colors duration-200 text-sm`}
            >
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 md:py-16 lg:-mt-20 -my-20 mb-2">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="px-4 py-10 relative bg-gradient-to-b from-[#FFF9E6] to-[#FFE8B6] rounded-3xl shadow-inner">
          {/* Desktop View */}
          <div className="hidden md:flex flex-wrap justify-center gap-6">
            {cardsData.map((card) => (
              <AnnouncementCard key={card.id} card={card} isMobile={false} />
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden relative">
            {/* Scrollable Cards */}
            <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-1 pb-4 scroll-smooth scrollbar-hide">
              {cardsData.map((card) => (
                <AnnouncementCard
                  key={`mobile-${card.id}`}
                  card={card}
                  isMobile={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementCards;
