import React, { useState, useEffect, useRef } from 'react';

const HomeSesolaSubscriptionPlan = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="Home-Sesola-container" ref={sectionRef}>
      <div className={`Home-Sesola-content ${isVisible ? 'Home-Sesola-animated' : ''}`}>
        <div className="Home-Sesola-image-section">
          <img 
            src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=800&fit=crop" 
            alt="Person using laptop at home" 
            className="Home-Sesola-image"
          />
        </div>
        
         <div className="Home-Sesola-text-section">
          <p className="Home-Sesola-label">OUR SERVICES</p>
          <h1 className="Home-Sesola-title">What We Do</h1>
          <p className="Home-Sesola-description">
            Solaris Energy provides comprehensive solar and renewable energy solutions — from designing efficient systems to ensuring sustainable power management for homes and businesses.
          </p>
          
          <div className="Home-Sesola-features">
            <div className="Home-Sesola-feature">
              <svg className="Home-Sesola-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <span>Custom Solar System Design for Homes and Businesses</span>
            </div>
            
            <div className="Home-Sesola-feature">
              <svg className="Home-Sesola-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <span>Installation of Solar Panels and Renewable Energy Systems</span>
            </div>
            
            <div className="Home-Sesola-feature">
              <svg className="Home-Sesola-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <span>Maintenance & Monitoring for Maximum Efficiency</span>
            </div>
          </div>
          
          <button className="Home-Sesola-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

const styles = `
  .Home-Sesola-container {
    font-family: Roobert, sans-serif;
    background-color: #faf9f7;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    overflow: hidden;
  }

  .Home-Sesola-content {
    max-width: 1280px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
  }

  .Home-Sesola-image-section {
    position: relative;
    opacity: 0;
    transform: translateY(100px);
    transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .Home-Sesola-animated .Home-Sesola-image-section {
    opacity: 1;
    transform: translateY(0);
  }

  .Home-Sesola-image {
    width: 100%;
    height: auto;
    border-radius: 24px;
    object-fit: cover;
    aspect-ratio: 4/5;
  }

  .Home-Sesola-text-section {
    padding-right: 40px;
    opacity: 0;
    transform: translateX(-100px) translateZ(-200px);
    transition: all 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
    position: relative;
    z-index: 1;
  }

  .Home-Sesola-animated .Home-Sesola-text-section {
    opacity: 1;
    transform: translateX(0) translateZ(0);
  }

  .Home-Sesola-label {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1.5px;
    color: #666;
    margin: 0 0 16px 0;
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  }

  .Home-Sesola-animated .Home-Sesola-label {
    opacity: 1;
    transform: translateY(0);
  }

  .Home-Sesola-title {
    font-size: 56px;
    font-weight: 400;
    line-height: 1.1;
    color: #000;
    margin: 0 0 24px 0;
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
  }

  .Home-Sesola-animated .Home-Sesola-title {
    opacity: 1;
    transform: translateY(0);
  }

  .Home-Sesola-description {
    font-size: 18px;
    line-height: 1.6;
    color: #666;
    margin: 0 0 48px 0;
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
  }

  .Home-Sesola-animated .Home-Sesola-description {
    opacity: 1;
    transform: translateY(0);
  }

  .Home-Sesola-features {
    margin-bottom: 48px;
  }

  .Home-Sesola-feature {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 24px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .Home-Sesola-feature:nth-child(1) {
    transition-delay: 0.7s;
  }

  .Home-Sesola-feature:nth-child(2) {
    transition-delay: 0.8s;
  }

  .Home-Sesola-feature:nth-child(3) {
    transition-delay: 0.9s;
  }

  .Home-Sesola-animated .Home-Sesola-feature {
    opacity: 1;
    transform: translateY(0);
  }

  .Home-Sesola-feature:last-child {
    margin-bottom: 0;
  }

  .Home-Sesola-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .Home-Sesola-feature span {
    font-size: 18px;
    line-height: 1.5;
    color: #000;
    font-weight: 400;
  }

  .Home-Sesola-button {
    font-family: Roobert, sans-serif;
    background-color: transparent;
    color: #000;
    border: 2px solid #000;
    border-radius: 50px;
    padding: 16px 40px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 1s,
                transform 1s cubic-bezier(0.4, 0, 0.2, 1) 1s,
                background-color 0.3s ease,
                color 0.3s ease;
  }

  .Home-Sesola-animated .Home-Sesola-button {
    opacity: 1;
    transform: translateY(0);
  }

  .Home-Sesola-button:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 968px) {
    .Home-Sesola-content {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .Home-Sesola-text-section {
      padding-right: 0;
    }

    .Home-Sesola-title {
      font-size: 42px;
    }
  }

  @media (max-width: 640px) {
    .Home-Sesola-title {
      font-size: 36px;
    }

    .Home-Sesola-description,
    .Home-Sesola-feature span {
      font-size: 16px;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default HomeSesolaSubscriptionPlan;