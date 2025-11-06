import { Link } from "react-router-dom";
import AnnouncementCards from "./AnnouncementCards";
import { useEffect, useState } from "react";
import bg1 from "../../assets/images/Image-6.jpg";
import bg2 from "../../assets/images/Image-7.png";
import bg3 from "../../assets/images/mainImage-2.png";
import bg4 from "../../assets/images/mainImage-3.png";
import bg5 from "../../assets/images/Image-5.jpg";


const Homepage = () => {
  const imageUrl =
    "https://res.cloudinary.com/dwudu5pep/image/upload/v1761452862/WhatsApp_Image_2025-10-06_at_6.11.24_PM_puuxkm.jpg";

  // Corporate section state
  const [activeTab, setActiveTab] = useState("SUSTAINABILITY");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // all background images
  const heroImages = [bg1, bg2, bg3, bg4, bg5];

  // Automatically switch images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="w-full pt-20 md:pt-10 ">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[400px] md:min-h-[520px] lg:min-h-screen flex items-center overflow-hidden"
        aria-label="Homepage hero"
      >
        {/* Background image */}
        {/* <img
          src={imageUrl}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-90"
        /> */}

        {/* ✅ Background Image Carousel */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {heroImages.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Hero background ${index + 1}`}
              className={`absolute inset-0 w-full h-full lg:h-full object-cover transition-opacity duration-1000 ease-in-out ${currentImageIndex === index ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
        </div>


        {/* Left-leaning overlay for better contrast on all sizes */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"
          aria-hidden="true"
        />

        {/* Content container: centered on small screens, left-aligned on md+ */}
        <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6">
          <div className="pt-24 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32">
            <div className="max-w-3xl mx-auto md:ml-[-4rem] lg:ml-[-6rem] text-center md:text-left">
              <h1 className="text-[35px] md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-3 drop-shadow-lg">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Dhammanjali India
                </span>
                {" pvt. ltd."}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-orange-200 font-semibold mb-3">
                New Era Business Opportunities...
              </p>

              <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto md:mx-0 mb-6 lg:leading-relaxed font-semibold">
                Start Your Own Business With Us. Startup India, Empower India:
                Celebrating the Spirit of Independence, Supporting the Future of
                an Independent Workforce!
              </p>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <a href="/about" className="w-full sm:w-auto">
                  <button className=" inline-flex justify-center items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full px-5 lg:px-6 py-2 lg:py-3 shadow-lg hover:scale-105 transition-transform duration-200">
                    ABOUT US
                  </button>
                </a>

                <a href="/ourstory" className="w-full sm:w-auto"></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - DHAMMANJALI WE CARE */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-16 items-center mb-16">
            <div>
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  DHAMMANJALI
                </h2>
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                    WE CARE
                  </h3>
                  <div className="hidden md:block">
                    <svg
                      viewBox="0 0 200 60"
                      className="text-yellow-400 w-full h-15"
                    >
                      <path
                        d="M10 30 L170 30 M150 15 L170 30 L150 45"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                DHAMMANJALI GROUP, At, our gallery captures the essence of our
                journey—showcasing our commitment to quality, community
                engagement, and innovation. Each image reflects our dedication
                to excellence and the meaningful connections we've built within
                the communities we serve. Explore our visual story and witness
                the milestones that define our brand.
              </p>
            </div>
          </div>

          {/* Energy Wind Energy Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dwudu5pep/image/upload/v1761450416/DHAMMANJALI_GROUP_ez07yj.jpg"
                  alt="workflow"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                We Care
              </h2>
              <h3 className="text-2xl md:text-3xl font-light text-gray-700 mb-6">
                We Empower
              </h3>
              <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>
                  Dhammanjali Group is a dynamic and diversified organization
                  working across multiple sectors including Retail, Agriculture,
                  Food, Health, Hospitality, and Real Estate. With a strong
                  vision to contribute to India’s growth, the group focuses on
                  creating sustainable opportunities that empower individuals,
                  strengthen communities, and drive economic development.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/gallery" className="inline-block">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 lg:py-3 px-5 lg:px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* DHAMMANJALI Group Section */}
          <div className="mt-12 md:mt-16">
            <div className="bg-yellow-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="order-1 lg:order-1">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                    DHAMMANJALI GROUP
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    From nurturing the roots of Indian agriculture to redefining
                    standards in hospitality and health, Dhammanjali Group plays
                    a pivotal role in enhancing the quality of life for people.
                    Its retail and food ventures bring high-quality products
                    closer to consumers, while its real estate projects help
                    shape modern, sustainable living and business spaces. What
                    sets Dhammanjali Group apart is its deep commitment to job
                    creation and entrepreneurship. By building businesses that
                    generate employment and open doors for small-scale
                    entrepreneurs, the group not only fuels financial
                    independence but also contributes to national progress.
                  </p>
                  <Link
                    to="/agriculture"
                    className="w-full sm:w-auto inline-block"
                  >
                    <button className="w-full sm:w-auto bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                      READ MORE
                    </button>
                  </Link>
                </div>

                <div className="order-2 lg:order-2">
                  <img
                    src="https://res.cloudinary.com/dwudu5pep/image/upload/v1761450513/IMG-20210926-WA0037_s5fnnv.jpg"
                    alt="DHAMMANJALI Group"
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl md:rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="relative bg-[#a6d3f4] py-6 md:py-8 px-4 sm:px-6 md:px-10 my-4 md:my-6 flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8 font-montserrat overflow-hidden shadow-xl rounded-2xl md:rounded-3xl lg:-mt-5">
        {/* Background blur shape */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-2xl z-0" />

        {/* Left Panel */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-start z-10 order-2 md:order-1">
          {/* Title and arrow */}
          <div className="mb-4 pl-2 md:pl-4 text-center md:text-left">
            <h2 className="md:ml-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide leading-tight">
              CORPORATE
            </h2>
            <div className="md:ml-4 flex items-center justify-center md:justify-start mt-2">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#5a5a7a] tracking-widest uppercase">
                {activeTab}
              </span>
              <svg
                className="ml-4 sm:ml-8 md:ml-16 hidden sm:inline"
                width="150"
                height="20"
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

          {/* Image */}
          <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-md lg:max-h-[50em] md:right-[-8rem] md:bottom-[-2rem] md:relative aspect-square overflow-hidden -mt-10">
            <img
              src="https://res.cloudinary.com/dwudu5pep/image/upload/v1761450732/homeImg4_1_thpakm.png"
              alt="Corporate Sustainability"
              className="w-full h-full object-cover rounded-[20%_40%_20%_40%] shadow-lg"
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col justify-start py-6 md:py-20 px-2 md:px-10 md:mr-3 z-10 order-1 md:order-2">
          {/* Tabs */}
          <div className="flex gap-10 sm:gap-4 md:gap-8 lg:gap-12 border-b border-[#2C2C54]/20 mb-4 text-xs sm:text-sm md:text-base lg:text-lg overflow-x-auto">
            <button
              className={`font-semibold uppercase pb-1 border-b-2 transition-all duration-200 whitespace-nowrap ${activeTab === "SUSTAINABILITY"
                ? "border-[#2C2C54] text-[#2C2C54]"
                : "border-transparent text-[#2C2C54]/80 hover:text-[#2C2C54]"
                }`}
              onClick={() => setActiveTab("SUSTAINABILITY")}
              aria-selected={activeTab === "SUSTAINABILITY"}
              role="tab"
            >
              SUSTAINABILITY
            </button>
            <button
              className={`font-semibold uppercase pb-1 border-b-2 transition-all duration-200 whitespace-nowrap ${activeTab === "INNOVATION"
                ? "border-[#2C2C54] text-[#2C2C54]"
                : "border-transparent text-[#2C2C54]/80 hover:text-[#2C2C54]"
                }`}
              onClick={() => setActiveTab("INNOVATION")}
              aria-selected={activeTab === "INNOVATION"}
              role="tab"
            >
              INNOVATION
            </button>
            <button
              className={`font-semibold uppercase pb-1 border-b-2 transition-all duration-200 whitespace-nowrap ${activeTab === "OUR IMPACT"
                ? "border-[#2C2C54] text-[#2C2C54]"
                : "border-transparent text-[#2C2C54]/80 hover:text-[#2C2C54]"
                }`}
              onClick={() => setActiveTab("OUR IMPACT")}
              aria-selected={activeTab === "OUR IMPACT"}
              role="tab"
            >
              OUR IMPACT
            </button>
          </div>

          {/* Tab Content */}
          <div className="mb-4">
            {activeTab === "SUSTAINABILITY" && (
              <p className="text-[#23223a] lg:leading-relaxed text-justify text-sm sm:text-base">
                Our growth strategy is rooted in a blend of sharp business
                acumen and a deep sense of corporate responsibility. We believe
                that true success is measured not just by financial gains, but
                by the positive impact we create for our people and our planet.
                At the heart of our approach is a steadfast commitment to
                sustainable value-creation, ensuring that every business
                decision we make aligns with our core values of environmental
                stewardship and social responsibility. We are dedicated to
                preserving the planet for future generations, and this
                commitment shapes every aspect of our operations. From
                implementing energy-efficient technologies and reducing our
                carbon footprint, to adopting eco-friendly practices throughout
                our supply chain, we are constantly seeking innovative ways to
                minimize our environmental impact. We also invest in employee
                wellness and community development, recognizing that the
                well-being of our people is intrinsically linked to the health
                of our business and the world around us. Our journey towards
                sustainability is ongoing, and we are proud of the progress we
                have made so far. By integrating responsible practices into our
                growth strategy, we are building a greener.
              </p>
            )}
            {activeTab === "INNOVATION" && (
              <p className="text-[#23223a] lg:leading-relaxed text-justify text-sm sm:text-base">
                The Invocations of Dhammanjali Group embody the spiritual and
                moral essence that underpins its mission and values. Deeply
                rooted in the timeless teachings of Dhamma—compassion, wisdom,
                and selfless service—these invocations serve as guiding lights
                for both personal and collective growth. Each invocation is more
                than a ritual; it is a heartfelt call for inner peace, social
                harmony, and the upliftment of the community. Through these
                meaningful practices, the Group inspires individuals to
                cultivate mindfulness, empathy, and ethical conduct in their
                daily lives. The invocations remind us that true progress is
                achieved when we nurture not only our own well-being but also
                contribute to the happiness and welfare of others. By upholding
                these spiritual principles, the Dhammanjali Group fosters a
                sense of unity, purpose, and shared responsibility, encouraging
                everyone to work together for a more compassionate, harmonious,
                and enlightened society. In this way, the Invocations become a
                living force, continuously shaping the Group’s efforts to create
                lasting positive change in the world. Each invocation is more
                than a ritual; it is a heartfelt call for inner peace.
              </p>
            )}
            {activeTab === "OUR IMPACT" && (
              <p className="text-[#23223a] lg:leading-relaxed text-justify text-sm sm:text-base">
                At Dhammanjali Group, we believe in compassion-driven action
                that transforms lives and communities. Our dedicated work across
                rural and under-resourced areas has resulted in tangible,
                lasting change through focused interventions in healthcare,
                sustainable livelihoods, education, and social inclusion. By
                addressing the unique needs of each community, we empower
                individuals with access to quality medical care, skill
                development opportunities, and educational resources that open
                doors to a brighter future. We also champion social inclusion,
                ensuring that marginalized groups are given a voice and equal
                opportunities to thrive. Our approach is holistic, combining
                empathy with practical solutions to create environments where
                everyone can flourish. Through partnerships, grassroots
                engagement, and a commitment to ethical service, Dhammanjali
                Group continues to inspire hope and foster resilience. Every
                initiative we undertake is guided by our core values of
                compassion, integrity, and the unwavering belief that positive
                change is possible when we work together for the greater good.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-12 md:py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="w-full flex flex-col md:flex-row justify-between gap-6 px-2 md:px-0 mb-8">
            {/* Title and arrow */}
            <div className="flex flex-col w-full md:w-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight">
                ANNOUNCEMENTS
              </h2>
              <div className="flex items-center mt-1">
                <span className="text-lg font-semibold text-gray-500 tracking-widest uppercase mr-2">
                  LATEST
                </span>
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
            <div
              className="md:pt-1 pt-2 max-w-3xl text-gray-700 text-base leading-relaxed text-left"
              style={{ wordBreak: "break-word", letterSpacing: "0.01em" }}
            >
              DHAMMANJALI GROUP, At, our gallery captures the essence of our
              journey—showcasing our commitment to quality, community
              engagement, and innovation. Each image reflects our dedication to
              excellence and the meaningful connections we've built within the
              communities we serve. Explore our visual story and witness the
              milestones that define our brand.
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Card Section */}
      <section className="py-12 md:py-16 lg:-mt-20 -mt-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="w-full flex flex-col md:flex-row items-center justify-between rounded-[30px] pb-6 md:p-10 mb-10 shadow-md bg-[radial-gradient(ellipse_at_center,_#FDE6A0_0%,_#F8B938_40%,_#F89E00_100%)]">
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-2 md:gap-3 px-4 md:px-0 py-6 md:py-0">
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-bold text-[#2C2C54] uppercase leading-snug text-center md:text-left">
                DHAMMANJALI GROUP
              </h3>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#D97706] tracking-wide font-montserrat">
                - Your Gateway to Purposeful Retail
              </p>
              <p className="text-[#333] leading-relaxed text-justify max-w-2xl mt-1 mb-3 py-4 md:py-6 font-montserrat text-sm sm:text-base">
                Start your own retail mart and make a meaningful difference in
                your community by offering convenient access to a wide range of
                essential products, including groceries, utensils, stationery,
                kids’ items, and more. Backed by the Dhammanjali Group, our
                franchise model is designed to help aspiring entrepreneurs like
                you build a sustainable and profitable business that benefits
                both your livelihood and your local area. We provide
                comprehensive support, including training, marketing assistance,
                and operational guidance, ensuring you have everything needed
                for success. As a franchise partner, you’ll not only generate a
                stable income but also create employment opportunities and
                improve the quality of life for those around you. Our mission is
                to foster self-reliance and community development.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center mt-4 md:mt-6 md:ml-6 font-montserrat px-4 md:px-0 max-w-full lg:mt-1">
              <img
                src="https://res.cloudinary.com/dwudu5pep/image/upload/v1761450500/c7bxt9cfe0ztmiloku3s_xd2mi1.jpg"
                alt="DHAMMANJALI GROUP Announcement"
                className=" max-w-[300px] sm:max-w-[400px] md:w-[500px] lg:min-w-[600px] h-[200px] sm:h-[250px] md:h-[450px] rounded-[4px] object-cover shadow-lg font-montserrat"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <AnnouncementCards />
      {/* Key Highlights AGM Section */}
      <section
        className="my-4 md:my-5 py-12 md:py-16 bg-cover bg-center bg-no-repeat text-white text-center rounded-3xl md:rounded-[150px] mx-2 sm:mx-4 md:mx-12 relative mb-15 lg:-mt-10"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dwudu5pep/image/upload/v1761451174/20240821_181618_csmxwz.jpg)`,
        }}
      >
        <div className="absolute inset-0 rounded-3xl md:rounded-[150px] bg-black/30 z-0"></div>
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="px-4 sm:px-8 md:px-[30%] bg-cover bg-center bg-no-repeat relative">
            <div className="absolute inset-0 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl mb-1 md:mb-2 text-center text-white font-extrabold bg-blend-normal">
                Key Highlights from AGM
              </h2>
              <p className="text-white/90 mb-6 md:mb-8 text-lg sm:text-xl md:text-2xl font-bold">
                Perspective for Investors
              </p>
              <div>
                <a href="/about">
                  <button
                    className="mx-auto bottom-[-6rem] sm:bottom-[-7rem] md:bottom-[-7rem] right-[calc(50%-1.5rem)] sm:right-[calc(88%-3rem)] md:right-[calc(75%-10rem)] absolute flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-400 hover:bg-orange-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-lg hover:shadow-xl hover:-translate-y-1 animate-bounce border-4 sm:border-6 border-white/70 border-solid text-white"
                    aria-label="Scroll for more details"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="11" fill="none" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 10l4 4 4-4"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at DHAMMANJALI Section */}
      <section className="py-16 md:py-20 bg-[#4a90a4]">
        <div className=" mx-auto px-6 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 md:gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              {/* Section Title */}
              <div className="mb-4 md:mb-6 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  Life at DHAMMANJALI
                </h2>
                <h3 className="text-lg sm:text-xl md:text-2xl font-normal">
                  Why work with us
                </h3>
              </div>

              <p className="text-white text-sm md:text-base text-justify mt-4 md:mt-6 mb-6 md:mb-8 lg:leading-relaxed">
                At DHAMMANJALI INDIA PRIVATE LIMITED, we are more than just a
                growing retail leader—we are a family committed to your growth
                and success. With a focus on innovation, customer satisfaction,
                and teamwork, we offer a dynamic environment that nurtures both
                professional growth and personal development. Whether you're
                just starting your career or looking to take the next step, we
                provide diverse opportunities for learning, advancement, and
                achievement. Here, we believe in fostering a supportive culture
                where every team member is valued, encouraged, and empowered to
                make a difference. Join us to be a part of a company that's
                shaping the future of retail while creating a fulfilling and
                rewarding career journey for you.
              </p>

              <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-8 text-center md:text-left">
                <a href="/joinform" className="w-full md:w-auto">
                  <button
                    className="bg-orange-400 text-white px-5 lg:px-7 py-3 rounded-full hover:bg-orange-500 transition-all shadow-md hover:shadow-lg hover:-translate-y-1  font-semibold"
                    aria-label="Learn more about working at Dhammanjali"
                  >
                    Join Our Family
                  </button>
                </a>
              </div>
            </div>

            <div className="flex justify-center order-1 md:order-2">
              <div className="w-[250px] h-[180px] sm:w-[300px] sm:h-[200px] md:w-[400px] md:h-[280px] lg:w-[500px] lg:h-[300px] rounded-lg md:rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                <img
                  src="https://res.cloudinary.com/dwudu5pep/image/upload/v1761450990/jsypabsnssw2a9np4hxv_egxrry.png"
                  alt="Life at Dhammanjali"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // e.target.src = "/fallback-image.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
