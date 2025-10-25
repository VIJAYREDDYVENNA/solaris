import React from 'react';
import '../components_css/Footer.css';
import FooterVideo from "../Videos/FooterVideo1.mp4"
const SolarisFooter = () => {
  return (
    <footer className="solaris-footer">
      {/* Background Video */}
      <video 
        className="footer-bg-video" 
        autoPlay 
        muted 
        loop
        playsInline
      >
        <source 
          src={FooterVideo}
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="footer-overlay"></div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-container">
          {/* Column 1: Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <h2>SOLARIS</h2>
              <p className="tagline">Solar Energy Solutions</p>
            </div>
            <p className="company-desc">
              Leading the future of renewable energy with innovative solar solutions for a sustainable tomorrow.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">t</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">ig</a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li><a href="#">Solar Panels</a></li>
              <li><a href="#">Inverters</a></li>
              <li><a href="#">Battery Storage</a></li>
              <li><a href="#">Monitoring Systems</a></li>
              <li><a href="#">Installation Services</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Warranty</a></li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Compliance</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2025 Solaris Energy. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <p>Powered by sustainable technology</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SolarisFooter;