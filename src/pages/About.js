import React from 'react';
import aboutHeroImg from '../images/About/about_03.png'
import OurTeam from '../components/OurTeam'

export default function AboutPage() {
  const stats = [
    { value: 9, suffix: ' Million', label: 'Metric Tons of CO2 Emissions Avoided' },
    { value: 900, suffix: ' GWh', label: 'Clean Energy Generated per Year' },
    { value: 43, suffix: ' Million', label: 'Trees worth of carbon Absorption' },
    { value: 570, suffix: ' Million', label: 'Litres of water saved' },
    { value: 2.4, suffix: ' Million', label: 'Metric tons of Fossil Fuel Avoided' }
  ];

   const expertiseAreas = [
    {
      id: 1,
      title: 'Ground Mounted Solar',
      description: 'Large-scale installations built on open land for maximum energy generation.',
      link: '/ground-mounted-solar',
      icon: 'bi-brightness-high-fill',
      bgImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80'
    },
    {
      id: 2,
      title: 'Rooftop Solar',
      description: 'Efficient solar solutions installed on commercial and residential rooftops.',
      link: '/rooftop-solar',
      icon: 'bi-building',
      bgImage: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80'
    },
    {
      id: 3,
      title: 'Carport Solar',
      description: 'Innovative dual-purpose structures providing vehicle shade and clean energy.',
      link: '/carport-solar',
      icon: 'bi-car-front-fill',
      bgImage: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80'
    },
    {
      id: 4,
      title: 'Floating Solar',
      description: 'Advanced photovoltaic systems installed on water bodies for efficiency.',
      link: '/floating-solar',
      icon: 'bi-water',
      
      bgImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80'
    },
    {
      id: 5,
      title: 'EPC Services',
      description: 'Comprehensive Engineering, Procurement, and Construction services.',
      link: '/epc-services',
      icon: 'bi-gear-fill',
      
      bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80'
    }
  ];

  const handleLearnMore = (link, title) => {
    console.log(`Navigating to: ${link} for ${title}`);
  };

  return (
    <>
      <style>{`
        .about-hero-wrapper {
          position: relative;
          width: 100%;
          min-height: 700px;
          overflow: hidden;
        }

        .about-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .about-bg-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-overlay-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0.0) 100%
          );
        }

        .about-content-container {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          min-height: 500px;
          padding: 60px 0;
          margin-top:70px
        }

        .about-text-column {
          width: 55%;
          padding-left: 80px;
          padding-right: 40px;
        }

        .about-heading {
          font-size: 56px;
          font-weight: 700;
          color: #1C2A4A;
          text-transform: uppercase;
          margin-bottom: 12px;
          letter-spacing: 2px;
        }

        .about-underline {
          width: 64px;
          height: 4px;
          background-color: #F4CE1B;
          margin-bottom: 32px;
        }

        .about-description {
          color: #2A2A2A;
          font-size: 18px;
          line-height: 1.8;
          max-width: 600px;
        }

        .solar-blockquote {
          border-left: 4px solid #F4CE1B;
          padding-left: 24px;
          font-style: italic;
          color: #4A5568;
          font-size: 20px;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .solar-description-text {
          color: #5A5A5A;
          line-height: 1.8;
          margin-top: 32px;
          text-align: justify;
        }

        .about-mission-section {
          background-color: #FFFFFF;
          padding: 80px 80px;
        }

        .about-mission-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .about-mission-heading {
          font-size: 42px;
          font-weight: 700;
          color: #1C2A4A;
          margin-bottom: 16px;
          text-align: center;
        }

        .about-mission-underline {
          width: 64px;
          height: 4px;
          background-color: #F4CE1B;
          margin: 0 auto 48px auto;
        }

        .about-mission-text {
          color: #5A5A5A;
          font-size: 18px;
          line-height: 1.9;
          text-align: justify;
          margin-bottom: 32px;
        }

        .about-mission-text:last-child {
          margin-bottom: 0;
        }

        .about-core-principles {
          background-color: #F8F9FA;
          padding: 24px 32px;
          border-left: 4px solid #F4CE1B;
          margin-top: 40px;
        }

        .about-principles-title {
          font-size: 22px;
          font-weight: 700;
          color: #1C2A4A;
          margin-bottom: 16px;
        }

        .about-principles-list {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }

        .about-principle-item {
          font-size: 18px;
          color: #5A5A5A;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .about-principle-item:before {
          content: "✓";
          color: #F4CE1B;
          font-size: 24px;
          font-weight: 700;
        }

        .about-stats-bar {
          background-color: #F4CE1B;
          padding: 64px 80px;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 40px;
          max-width: 1600px;
          margin: 0 auto;
        }

        .about-stat-item {
          text-align: center;
          position: relative;
        }

        .about-stat-divider {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 80px;
          background-color: rgba(28, 42, 74, 0.2);
        }

        .about-stat-item:first-child .about-stat-divider {
          display: none;
        }

        .about-stat-number {
          font-size: 56px;
          font-weight: 700;
          color: #1C2A4A;
          margin-bottom: 8px;
          line-height: 1;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 4px;
        }

        .about-stat-suffix {
          font-size: 24px;
          font-weight: 600;
        }

        .about-stat-label {
          font-size: 16px;
          font-weight: 600;
          color: #1C2A4A;
          line-height: 1.4;
          padding: 0 8px;
        }

        @media (max-width: 1280px) {
          .about-stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
          }

          .about-mission-section {
            padding: 60px 60px;
          }
        }

        @media (max-width: 1024px) {
          .about-text-column {
            width: 100%;
            padding-left: 60px;
            padding-right: 60px;
          }

          .about-heading {
            font-size: 48px;
          }

          .solar-blockquote {
            font-size: 18px;
            color:black;
          }

          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 48px;
          }

          .about-stats-bar {
            padding: 48px 40px;
          }

          .about-mission-section {
            padding: 60px 40px;
          }

          .about-mission-heading {
            font-size: 36px;
          }

          .about-principles-list {
            flex-direction: column;
            gap: 16px;
          }

           .solar-description-text {
          color: black;
        }
           .about-overlay-gradient {
          width:100%;
            background: linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.2) 100%);
            
          }
        }

        @media (max-width: 768px) {
          .about-hero-wrapper {
            min-height: 600px;
          }

          .about-content-container {
            min-height: 600px;
            margin-top:0px;
          }

          .about-text-column {
            padding-left: 32px;
            padding-right: 32px;
          }

          .about-heading {
            font-size: 40px;
          }

          .about-description {
            font-size: 16px;
          }

          .solar-blockquote {
            font-size: 16px;
            padding-left: 16px;
          }

          .about-stat-number {
            font-size: 40px;
          }

          .about-stat-suffix {
            font-size: 18px;
          }

          .about-stat-label {
            font-size: 13px;
          }

                     
          .about-stats-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-mission-section {
            padding: 48px 24px;
          }

          .about-mission-heading {
            font-size: 32px;
          }

          .about-mission-text {
            font-size: 16px;
          }

          .about-principles-title {
            font-size: 20px;
          }

          .about-principle-item {
            font-size: 16px;
          }
        }


          .solar-expertise-section {
          padding: 80px 0;
          background: linear-gradient(180deg, #0F1419 0%, #1C2A4A 100%);
        }

        .solar-expertise-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .solar-expertise-header {
          margin-bottom: 16px;
          text-align: center;
        }

        .solar-expertise-title {
          font-size: 42px;
          font-weight: 700;
          color: white;
          // font-family: "Times New Roman", Times, serif;

        }
      
        .solar-expertise-subtitle {
          font-size: 16px;
          color: #6B7280;
          margin-bottom: 50px;
          // font-family: "Times New Roman", Times, serif;

        }

        .solar-expertise-title-underline {
          width: 80px; 
          height: 5px;   
          margin-left: auto;
          margin-right: auto;
          // margin-top: 10px;  
          background: linear-gradient(to right, 
            rgba(255, 193, 7, 0.2) 0%,   
            #ffc107 20%,                
            #ffc107 80%,                 
            rgba(255, 193, 7, 0.2) 100%  
          );  
          border-radius: 5px; 
        }
        .expertise-grid-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }

        .expertise-grid-row:last-child {
          margin-bottom: 0;
          grid-template-columns: repeat(2, 1fr);
        }

        .expertise-card {
          position: relative;
          padding: 40px;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Background Image */
        .expertise-card-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: transform 0.6s ease;
          z-index: 1;
        }

        .expertise-card:hover .expertise-card-bg {
          transform: scale(1.1);
        }

        /* Dark Overlay */
        .expertise-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(28, 42, 74, 0.85) 0%, rgba(28, 42, 74, 0.9) 100%);
          transition: background 0.4s ease;
          z-index: 2;
        }

        .expertise-card:hover .expertise-card-overlay {
          background: linear-gradient(135deg, rgba(28, 42, 74, 0.75) 0%, rgba(28, 42, 74, 0.85) 100%);
        }

        /* Hover glow effect */
        .expertise-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(244, 206, 27, 0.15) 0%, rgba(244, 206, 27, 0) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 3;
        }

        .expertise-card:hover::after {
          opacity: 1;
        }

        .expertise-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .expertise-icon {
          width: 60px;
          height: 60px;
          background-color: #1C2A4A;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          font-size: 28px;
          transition: all 0.4s ease;
          position: relative;
          z-index: 10;
          color: #FFFFFF;
        }

        .expertise-card:hover .expertise-icon {
          background-color: #F4CE1B;
          transform: scale(1.1) rotate(5deg);
        }

        .expertise-content {
          position: relative;
          z-index: 10;
        }

        .expertise-card-title {
          font-size: 28px;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 16px;
          line-height: 1.3;
          position: relative;
          z-index: 10;
        }

        .expertise-card-description {
          font-size: 15px;
          color: #E5E7EB;
          line-height: 1.6;
          margin-bottom: 24px;
          opacity: 0.95;
          position: relative;
          z-index: 10;
        }

        .expertise-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 600;
          color: #4A9FFF;
          text-decoration: none;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(-10px);
          position: relative;
          z-index: 10;
        }

        .expertise-card:hover .expertise-card-link {
          opacity: 1;
          transform: translateX(0);
        }

        .expertise-card-link:hover {
          color: #F4CE1B;
          transform: translateX(5px);
        }

        .expertise-card-link::after {
          content: '→';
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .expertise-card-link:hover::after {
          transform: translateX(4px);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .expertise-grid-row {
            grid-template-columns: repeat(2, 1fr);
          }

          .expertise-grid-row:last-child {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .solar-expertise-section {
            padding: 60px 0;
          }

          .solar-expertise-container {
            padding: 0 20px;
          }

          .solar-expertise-title {
            font-size: 32px;
          }

          .expertise-grid-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .expertise-grid-row:last-child {
            grid-template-columns: 1fr;
          }

          .expertise-card {
            padding: 40px 30px;
            min-height: 180px;
          }

          .expertise-card-title {
            font-size: 24px;
          }

          .expertise-card-description {
            font-size: 14px;
          }

          .expertise-icon {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }
        }

        @media (max-width: 576px) {
          .solar-expertise-title {
            font-size: 28px;
          }

          .expertise-card {
            padding: 30px 24px;
          }

          .expertise-card-title {
            font-size: 22px;
          }
        }
      `}</style>

      <div className="about-hero-wrapper">
        {/* Background Image - Absolute */}
        <div className="about-bg-image">
          <img 
            src={aboutHeroImg}
            alt="About Hero Image"
          />
          <div className="about-overlay-gradient"></div>
        </div>
        
        {/* Content - Relative, vertically centered on left */}
        <div className="about-content-container">
          <div className="about-text-column">
            <h1 className="about-heading">ABOUT</h1>
            <div className="about-underline"></div>
            
            <div className="about-description">
              <blockquote className="solar-blockquote">
                "The sun is a daily reminder that we too can rise again from the darkness, 
                that we too can shine our own light."
              </blockquote>
              
              <p className="solar-description-text">
                At Solaris, we believe in harnessing the power of the sun to create a sustainable 
                future for generations to come. Our commitment to solar innovation drives us to 
                deliver cutting-edge electronic solutions that transform how the world thinks about
                energy. From residential installations to large-scale commercial projects, Solaris 
                illuminates the path toward a cleaner, brighter tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-mission-section">
        <div className="about-mission-container">
          <h2 className="about-mission-heading">Our Mission</h2>
          <div className="about-mission-underline"></div>
          
          <p className="about-mission-text">
            At Solaris, we believe that the future of energy is clean, sustainable, and driven by innovation. 
            As a leading EPC contracting company with a strong global presence, Solaris specializes in delivering 
            end-to-end renewable energy solutions across diverse industries.
          </p>
          
          <p className="about-mission-text">
            With over a decade of expertise, we have successfully designed and executed large-scale ground-mounted, 
            rooftop, and floating solar projects, along with customized industrial energy solutions under CAPEX and 
            OPEX models. Our work reflects a deep commitment to efficiency, reliability, and environmental responsibility.
          </p>
          
          <div className="about-core-principles">
            <h3 className="about-principles-title">Our Core Principles</h3>
            <div className="about-principles-list">
              <div className="about-principle-item">Innovation</div>
              <div className="about-principle-item">Transparency</div>
              <div className="about-principle-item">Sustainability</div>
            </div>
          </div>
          
          <p className="about-mission-text" style={{ marginTop: '32px' }}>
            From concept to commissioning, we ensure each solution meets the highest global standards for quality, 
            safety, and performance.
          </p>
          
          <p className="about-mission-text">
            At Solaris, we don't just build energy systems — we empower progress. Our mission is to help businesses 
            transition to clean energy, reduce their carbon footprint, and contribute to a greener planet for 
            generations to come.
          </p>
        </div>
      </div>
      
      <section className="solar-expertise-section">
        <div className="solar-expertise-container">
          <div className="solar-expertise-header">
            <h2 className="solar-expertise-title">Projects We're Provide </h2>
            <div className="solar-expertise-title-underline"></div>
            <p className="solar-expertise-subtitle">Licensed & Insured Solar Solutions</p>
          </div>

          {/* First Row - 3 Cards */}
          <div className="expertise-grid-row">
            {expertiseAreas.slice(0, 3).map((area) => (
              <div key={area.id} className="expertise-card">
                {/* Background Image */}
                <div 
                  className="expertise-card-bg"
                  style={{ backgroundImage: `url(${area.bgImage})` }}
                ></div>
                {/* Dark Overlay */}
                <div className="expertise-card-overlay"></div>

                <div>
                  <div className="expertise-icon">
                    <i className={area.icon}></i>
                  </div>
                  <div className="expertise-content">
                    <h3 className="expertise-card-title">{area.title}</h3>
                    <p className="expertise-card-description">{area.description}</p>
                  </div>
                </div>
                <a 
                  href={area.link}
                  className="expertise-card-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLearnMore(area.link, area.title);
                  }}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Cards */}
          <div className="expertise-grid-row">
            {expertiseAreas.slice(3, 5).map((area) => (
              <div key={area.id} className="expertise-card">
                {/* Background Image */}
                <div 
                  className="expertise-card-bg"
                  style={{ backgroundImage: `url(${area.bgImage})` }}
                ></div>
                {/* Dark Overlay */}
                <div className="expertise-card-overlay"></div>

                <div>
                  <div className="expertise-icon">
                    <i className={area.icon}></i>
                  </div>
                  <div className="expertise-content">
                    <h3 className="expertise-card-title">{area.title}</h3>
                    <p className="expertise-card-description">{area.description}</p>
                  </div>
                </div>
                <a 
                  href={area.link}
                  className="expertise-card-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLearnMore(area.link, area.title);
                  }}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <div className="about-stats-bar">
        <div className="about-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="about-stat-item">
              <div className="about-stat-divider"></div>
              <div className="about-stat-number">
                {stat.value}
                <span className="about-stat-suffix">{stat.suffix}</span>
              </div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <OurTeam/>
    </>
  );
}