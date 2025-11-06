import React from "react";
import foundation from "../../assets/images/homeImg4.png";

const BusinessCards = () => {
  const businessData = [
    {
      id: 1,
      title: "M-Mart",
      image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761453246/m-mart_lfbgh6.jpg",
    },
    {
      id: 2,
      title: "Real estate",
      image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761453093/dholera-3_iqqrc0.jpg",
    },
    {
      id: 3,
      title: "Medical Devices",
      image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761453407/water-ionizer_lq8la6.jpg",
    },
    {
      id: 4,
      title: "Cafe Villa",
      image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761453542/320x320_square_f7e279db7f23326de892cdd1e370bbcf_jnuqrk.jpg",
    },
    {
      id: 5,
      title: "Dhammanjali Foundation",
      image: foundation,
    },
    {
      id: 6,
      title: "Charity",
      image: "https://res.cloudinary.com/dwudu5pep/image/upload/v1761454016/charity_ecf6fa.avif",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white -mt-20 lg:-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Business
            <span className="text-orange-500"> Sectors</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Discover our diverse portfolio of businesses serving various
            industries and communities
          </p>
        </div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {businessData.map((business) => (
            <div
              key={business.id}
              className="group relative overflow-hidden rounded-3xl md:rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                <img
                  src={business.image}
                  alt={business.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback for broken images
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback placeholder */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 hidden items-center justify-center"
                  style={{ display: "none" }}
                >
                  <div className="text-gray-400 text-4xl font-bold opacity-30">
                    {business.title.charAt(0)}
                  </div>
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

                {/* Title Overlay - Top Left */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg leading-tight">
                    {business.title}
                  </h3>
                </div>

                {/* Explore Button - Bottom Right */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCards;
