
function GreenSolarHero() {
  return (
    <div className="hero-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .hero-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
          padding: 60px 80px;
        //   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .left-section {
          position: relative;
          z-index: 1;
        }

        .tag-container {
          position: relative;
          margin-bottom: 30px;
        }

        .background-text {
          position: absolute;
          top: -40px;
          left: -10px;
          font-size: 120px;
          font-weight: 900;
          color: rgba(76, 175, 80, 0.08);
          letter-spacing: 8px;
          z-index: 0;
          white-space: nowrap;
          user-select: none;
          pointer-events: none;
        }

        .tag {
          position: relative;
          display: inline-block;
          background: #4CAF50;
          color: white;
          padding: 8px 20px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          z-index: 1;
        }

        .tag-text {
          display: inline;
        }

        .tag-text:first-child {
          margin-right: 8px;
        }

        .tag-text:last-child {
          color: rgba(255, 255, 255, 0.9);
        }

        .main-title {
          font-size: 56px;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .description {
          font-size: 18px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .stats-container {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 40px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: #e8f5e9;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 800;
          color: #4CAF50;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 15px;
          color: #666;
          font-weight: 500;
        }

        .cta-container {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .learn-more-btn {
          background: #4CAF50;
          color: white;
          border: none;
          padding: 18px 40px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .learn-more-btn:hover {
          background: #45a049;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        .call-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .phone-icon {
          width: 50px;
          height: 50px;
          background: #4CAF50;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
        }

        .call-content {
          display: flex;
          flex-direction: column;
        }

        .call-label {
          font-size: 14px;
          color: #666;
          margin-bottom: 4px;
        }

        .phone-number {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .right-section {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .hero-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .experience-badge {
          position: absolute;
          bottom: 60px;
          left: 40px;
          background: white;
          padding: 24px 32px;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .experience-number {
          font-size: 42px;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1;
          margin-bottom: 4px;
        }

        .experience-label {
          font-size: 15px;
          color: #666;
          font-weight: 500;
        }

        .green-accent-left {
          position: absolute;
          width: 6px;
          height: 280px;
          background: #4CAF50;
          top: 50%;
          right: -30px;
          transform: translateY(-50%);
          border-radius: 3px;
        }

        .green-accent-right {
          position: absolute;
          width: 6px;
          height: 180px;
          background: #4CAF50;
          top: 20%;
          right: -60px;
          transform: translateY(-50%);
          border-radius: 3px;
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .background-text {
            font-size: 80px;
          }

          .main-title {
            font-size: 42px;
          }

          .hero-container {
            padding: 40px;
          }
        }

        @media (max-width: 768px) {
          .stats-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }

          .cta-container {
            flex-direction: column;
            align-items: flex-start;
          }

          .background-text {
            font-size: 60px;
            top: -30px;
          }

          .main-title {
            font-size: 32px;
          }
        }
      `}</style>

      <div className="hero-content">
        <div className="left-section">
          <div className="tag-container">
            <div className="background-text">ABOUT US</div>
            <div className="tag">
              <span className="tag-text">ABOUT</span>
              <span className="tag-text">GREEN SOLAR</span>
            </div>
          </div>

          <h1 className="main-title">
            Invest In Solar Energy<br />
            With Green Solar
          </h1>

          <p className="description">
            Green Solar offers sustainable energy solutions, harnessing the power
            of the sun for eco-friendly homes and businesses. Join us for cleaner,
            greener energy. Empowering today for a brighter tomorrow!
          </p>

          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-icon">🌱</div>
              <div className="stat-content">
                <div className="stat-number">325+</div>
                <div className="stat-label">Solar Panel Installed</div>
              </div>
            </div>
          </div>

          <div className="cta-container">
            <button className="learn-more-btn">Learn More</button>
            <div className="call-section">
              <div className="phone-icon">📞</div>
              <div className="call-content">
                <div className="call-label">Call Us</div>
                <div className="phone-number">+91 8777576308</div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="green-accent-left"></div>
          <div className="green-accent-right"></div>
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop"
              alt="Solar energy professionals"
              className="hero-image"
            />
            <div className="experience-badge">
              <div className="experience-number">7+</div>
              <div className="experience-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreenSolarHero;