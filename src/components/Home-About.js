import React, { useState, useEffect } from 'react';
import About2 from "../images/Home/Home-About1.webp"
import About1 from "../images/Home/Home-About2.png"
const SolarPanelHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero-container">
      <div className="content-wrapper">
        <div className={`left-section ${isVisible ? 'fade-in' : ''}`}>
          <h1 className="main-heading">
            REDEFINING SOLAR EFFICIENCY WITH PRECISION ENGINEERED PV MODULES
          </h1>
          
          <p className="description">
            TOPCon technology redefines performance limits through advanced 
            passivation and selective contacts. This advanced architecture 
            reduces interface recombination and contact resistance, resulting in 
            higher efficiency and improved power output.
          </p>

          <div className="features-grid">
            <div className={`feature-card ${isVisible ? 'slide-up' : ''}`} style={{animationDelay: '0.2s'}}>
              <h3 className="feature-title">30 YEARS</h3>
              <p className="feature-text">
                Linear Performance Warranty
              </p>
            </div>

            <div className={`feature-card ${isVisible ? 'slide-up' : ''}`} style={{animationDelay: '0.3s'}}>
              <h3 className="feature-title">15 YEARS</h3>
              <p className="feature-text">
                Product Warranty
              </p>
            </div>

            <div className={`feature-card ${isVisible ? 'slide-up' : ''}`} style={{animationDelay: '0.4s'}}>
              <div className="feature-content">
                <h3 className="feature-title-small">100% String Level EL &</h3>
                <p className="feature-text">
                  Triple Stage PV Module EL Testing
                </p>
                <p className="feature-text-small">PID Resistant</p>
                <p className="feature-text-small">
                  Guaranteed Positive Tolerance
                </p>
              </div>
            </div>
          </div>

          <button className={`cta-button ${isVisible ? 'fade-in' : ''}`} style={{animationDelay: '0.5s'}}>
            Find Out More →
          </button>
        </div>

        <div className={`right-section ${isVisible ? 'fade-in-right' : ''}`}>
          <div className="image-container">
            <img 
              src={About1}
              alt="Solar Panel" 
              className="solar-panel-image"
            />
          </div>

          <div className="specs-container">
            <div className={`spec-badge ${isVisible ? 'pop-in' : ''}`} style={{animationDelay: '0.6s'}}>
              <div className="spec-label">N-Type</div>
              <div className="spec-value">TOPCon Cell</div>
            </div>

            <div className={`spec-badge ${isVisible ? 'pop-in' : ''}`} style={{animationDelay: '0.7s'}}>
              <div className="spec-label">Capacity Rating</div>
              <div className="spec-value">of up to 635 Wp</div>
            </div>

            <div className={`spec-badge ${isVisible ? 'pop-in' : ''}`} style={{animationDelay: '0.8s'}}>
              <div className="spec-label">Up to 23.51%</div>
              <div className="spec-value">Module Efficiency</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .hero-container {
          background-color: #e8f0e8;
          min-height: 100vh;
          padding: 60px 40px;
        //   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .left-section {
          opacity: 0;
        }

        .left-section.fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .main-heading {
          font-size: 3.2rem;
          font-weight: 700;
          color: #2d9d6d;
          line-height: 1.15;
          margin-bottom: 25px;
          letter-spacing: -0.5px;
        }

        .description {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-bottom: 40px;
        }

        .feature-card {
          background-color: #c8e6d0;
          padding: 25px 18px;
          border-radius: 6px;
          opacity: 0;
          transform: translateY(30px);
          min-height: 180px;
          display: flex;
          flex-direction: column;
        }

        .feature-card.slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a5940;
          margin-bottom: 12px;
        }

        .feature-title-small {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a5940;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .feature-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .feature-text {
          font-size: 0.95rem;
          color: #2d5f4a;
          line-height: 1.4;
        }

        .feature-text-small {
          font-size: 0.9rem;
          color: #2d5f4a;
          line-height: 1.3;
          margin-top: 4px;
        }

        .cta-button {
          background-color: #3fcc7f;
          color: #1a5940;
          font-size: 1rem;
          font-weight: 600;
          padding: 16px 35px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          display: inline-block;
        }

        .cta-button.fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .cta-button:hover {
          background-color: #35b56f;
          transform: translateX(5px);
          box-shadow: 0 4px 12px rgba(63, 204, 127, 0.3);
        }

        .right-section {
          opacity: 0;
          display: flex;
          flex-direction: row;
          gap: 20px;
          align-items: flex-start;
        }

        .right-section.fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }

        .image-container {
          width: 65%;
          flex-shrink: 0;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          animation: float 6s ease-in-out infinite;
        }

        .solar-panel-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .specs-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .spec-badge {
          background-color: #d4ead9;
          padding: 14px 18px;
          border-radius: 6px;
          opacity: 0;
          transform: scale(0.8);
        }

        .spec-badge.pop-in {
          animation: popIn 0.5s ease-out forwards;
        }

        .spec-label {
          font-size: 0.85rem;
          color: #2d5f4a;
          margin-bottom: 3px;
          font-weight: 500;
        }

        .spec-value {
          font-size: 0.95rem;
          color: #1a5940;
          font-weight: 600;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 1200px) {
          .main-heading {
            font-size: 2.8rem;
          }

          .content-wrapper {
            gap: 50px;
          }
        }

        @media (max-width: 992px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .main-heading {
            font-size: 2.5rem;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .feature-card:last-child {
            grid-column: 1 / -1;
          }

          .right-section {
            flex-direction: column;
          }

          .image-container {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 40px 20px;
          }

          .main-heading {
            font-size: 2rem;
          }

          .description {
            font-size: 0.95rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-card:last-child {
            grid-column: 1;
          }

          .feature-card {
            min-height: auto;
            padding: 20px 16px;
          }
        }

        @media (max-width: 480px) {
          .main-heading {
            font-size: 1.6rem;
          }

          .feature-title {
            font-size: 1.2rem;
          }

          .cta-button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default SolarPanelHero;