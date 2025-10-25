import React from 'react';
import "../components_css/Home-Cta.css"
import HeroCta1 from "../images/Home/HeroCta3.png"

const HomeCta = () => {
  const features = [
    {
      icon: '🌊',
      title: 'Clean Water Initiative',
      description: '5000+ Water Systems Installed Across Regions'
    },
    {
      icon: '♻️',
      title: 'Reduce, Reuse, Recycle',
      description: '100,000+ Tons of Waste Recycled Annually'
    },
    {
      icon: '🌍',
      title: 'Global Sustainability',
      description: 'Carbon Neutral Operations by 2030'
    }
  ];

  return (
    <section className="home-cta-section">
      {/* Background image with overlay */}
      <div className="home-cta-background"></div>
      
      {/* Gradient overlay for readability */}
      <div className="home-cta-overlay"></div>

      {/* Decorative gradient squares */}
      <div className="home-cta-decoration home-cta-decoration-1"></div>
      <div className="home-cta-decoration home-cta-decoration-2"></div>
      <div className="home-cta-decoration home-cta-decoration-3"></div>
      <div className="home-cta-decoration home-cta-decoration-4"></div>

      {/* Content container */}
      <div className="home-cta-container">
        {/* Main heading */}
        <div className="home-cta-header">
          <h1 className="home-cta-heading">
            Building a<br />Sustainable<br />Tomorrow
          </h1>
        </div>

        {/* Decorative image/divider section */}
        <div className="home-cta-divider">
          <img src={HeroCta1} alt="Sustainability" className="home-cta-divider-image" />
        </div>

        {/* Main content area */}
        <div className="home-cta-content">
          {/* Left text section */}
          <div className="home-cta-text">
            <p className="home-cta-description">
              We are committed to building a better future through sustainable practices, environmental stewardship, and responsible corporate initiatives that create lasting positive impact for communities and the planet.
            </p>
            <button className="home-cta-button">
              Discover Our Impact
              <svg className="home-cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* Features section */}
          <div className="home-cta-features">
            {features.map((feature, index) => (
              <div key={index} className="home-cta-feature">
                <div className="home-cta-feature-icon">{feature.icon}</div>
                <h3 className="home-cta-feature-title">{feature.title}</h3>
                <p className="home-cta-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCta;