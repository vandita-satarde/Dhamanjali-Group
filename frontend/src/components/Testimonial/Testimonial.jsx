import React, { useState } from "react";
import testimonial1 from "../../assets/images/amogh.png";
import testimonial2 from "../../assets/images/girl-2.jpg";
import testimonial3 from "../../assets/images/nitesh.png";
import testimonial4 from "../../assets/images/girl-1.jpg";

// Testimonial Card Component
const TestimonialCard = ({
  profileImage,
  name,
  role,
  quote,
  mainImage,
  reverse,
  tighter,
}) => {
  return (
    <div
      className={`testimonial-section ${reverse ? "reverse" : ""} ${
        tighter ? "tighter-gap" : ""
      }`}
    >
      <div className="testimonial-image-area">
        <img src={mainImage} alt={name} className="testimonial-image" />
      </div>
      <div className="testimonial-card-area">
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src={profileImage} alt={name} className="avatar" />
            <div className="testimonial-header-text">
              <div className="name">{name}</div>
              <div className="role">{role}</div>
            </div>
          </div>
          <div className="quote">"{quote}"</div>
        </div>
      </div>
    </div>
  );
};

function Testimonial() {
  // Sample testimonial data - you can replace this with API data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Business Owner",
      description:
        "Dhamanjali Group has been instrumental in growing my business. Their expertise and dedication are unmatched.",
      image: testimonial1,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Marketing Director",
      description:
        "The team at Dhamanjali Group provided exceptional service and delivered results beyond our expectations.",
      image: testimonial2,
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "CEO",
      description:
        "Working with Dhamanjali Group was a game-changer for our company. Highly recommended!",
      image: testimonial3,
    },
    {
      id: 4,
      name: "Sneha Gupta",
      role: "Project Manager",
      description:
        "Professional, reliable, and results-driven. Dhamanjali Group exceeded all our expectations.",
      image: testimonial4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 2 testimonials at a time
  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 2
  );

  const handleNext = () => {
    if (currentIndex + 2 < testimonials.length) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  return (
    <div className="testimonial-page-container">
      <div className="testimonials-header pt-20 font-montserrat">
        <div className="testimonials-title text-orange-400">TESTIMONIALS</div>
        <div className="testimonials-subheading">
          WHAT OUR CLIENTS SAY
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
            <path
              d="M8 16h16m0 0l-6-6m6 6l-6 6"
              stroke="#a78bfa"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="testimonial-container">
        {displayedTestimonials.map((t, index) => (
          <TestimonialCard
            key={t.id}
            profileImage={t.image || "/default-avatar.jpg"}
            name={t.name}
            role={t.role}
            quote={t.description}
            mainImage={t.image || "/default-image.jpg"}
            reverse={index % 2 === 1}
            tighter={false}
          />
        ))}
      </div>

      <div className="testimonial-nav">
        <button
          onClick={handlePrev}
          className="testimonial-nav-btn"
          disabled={currentIndex === 0}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="testimonial-nav-btn right"
          disabled={currentIndex + 2 >= testimonials.length}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        /* Testimonial Page Container */
        .testimonial-page-container {
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #e0e7ff 100%);
          min-height: 100vh;
        }

        /* Testimonials Header */
        .testimonials-header {
          width: 100%;
          text-align: center;
          margin-bottom: 3rem;
          margin-top: 2rem;
        }

        .testimonials-title {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(to right, #4016f9, #4a15fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          text-shadow: 1 5px 15px rgba(0, 0, 0, 0.4);
        }

        .testimonials-subheading {
          font-size: 1.1rem;
          font-weight: 600;
          color: #4b5563;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        /* Testimonial Container */
        .testimonial-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
          margin-bottom: 2rem;
        }

        /* Testimonial Section Layout */
        .testimonial-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
          transition: background 0.3s;
          flex-wrap: wrap;
          background: #fff;
          border-radius: 2rem;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          max-width: 900px;
          width: 100%;
        }

        .testimonial-section.tighter-gap {
          gap: 1.2rem;
        }

        .testimonial-section.reverse {
          flex-direction: column-reverse;
        }

        .testimonial-image-area {
          max-width: 300px;
          width: 100%;
        }

        .testimonial-card-area {
          max-width: 500px;
          width: 100%;
        }

        .testimonial-card {
          max-width: 100%;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        /* Image Area */
        .testimonial-image-area {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        .testimonial-image {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 4px solid #fff;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .testimonial-image:hover {
          transform: scale(1.04);
          box-shadow: 0 16px 48px rgba(56, 189, 248, 0.18);
        }

        /* Card Area */
        .testimonial-card-area {
          flex: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          min-width: 0;
        }

        /* Testimonial Card */
        .testimonial-card {
          background: transparent;
          border-radius: 1.5rem;
          padding: 1rem;
          width: 100%;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #a78bfa;
        }

        .testimonial-header-text .name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1e293b;
        }

        .testimonial-header-text .role {
          font-size: 1rem;
          color: #64748b;
        }

        .quote {
          font-size: 1.3rem;
          color: #23223a;
          font-style: italic;
          margin-top: 0.5rem;
          line-height: 1.6;
        }

        /* Navigation Buttons */
        .testimonial-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .testimonial-nav-btn {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 2px solid #a78bfa;
          background: #fff;
          color: #a78bfa;
          font-size: 1.2rem;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .testimonial-nav-btn.right {
          background: #a78bfa;
          color: #fff;
          border: none;
        }

        .testimonial-nav-btn:hover:not(:disabled) {
          background: #8b5cf6;
          color: #fff;
          transform: scale(1.08);
        }

        .testimonial-nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Responsive Design */
        @media (min-width: 900px) {
          .testimonial-section {
            flex-direction: row;
            justify-content: center;
            gap: 3rem;
          }
          .testimonial-section.reverse {
            flex-direction: row-reverse;
          }
        }

        @media (max-width: 900px) {
          .testimonial-section {
            flex-direction: column !important;
            gap: 2rem;
            align-items: stretch;
          }
          .testimonial-image-area,
          .testimonial-card-area {
            max-width: 100%;
          }
          .testimonial-image {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 600px) {
          .testimonials-title {
            font-size: 2rem;
          }
          .testimonial-section {
            padding: 1.5rem;
          }
          .testimonial-image {
            width: 120px;
            height: 120px;
          }
          .quote {
            font-size: 1.1rem;
          }
        }

        .testimonial-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .testimonial-modal-content {
          background: white;
          border-radius: 24px;
          width: 60vw;
          min-width: 320px;
          max-width: 480px;
          height: 75vh;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          position: relative;
          animation: modalSlideIn 0.3s;
        }

        .testimonial-modal-header {
          background: linear-gradient(90deg, #7c3aed 0%, #f472b6 100%);
          padding: 22px 24px 16px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          border-radius: 24px 24px 0 0;
        }

        .testimonial-modal-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #fff;
        }

        .testimonial-modal-body {
          padding: 24px;
          text-align: center;
          overflow-y: auto;
          flex: 1 1 auto;
          min-height: 0;
          max-height: calc(75vh - 110px);
        }

        @media (max-width: 600px) {
          .testimonial-modal-content {
            width: 98vw;
            max-width: 98vw;
            height: 90vh;
            max-height: 98vh;
            border-radius: 16px;
          }
          .testimonial-modal-body {
            padding: 16px;
            max-height: calc(90vh - 90px);
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Testimonial;
