import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Video1 from "../Videos/HomeVideo3.mp4"
import "../components_css/Home-Hero.css"
gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const heroRef = useRef(null);
  const shapeRef = useRef(null);
  const contentSectionRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const taglines = [
    'Powering Tomorrow with Clean Energy',
    'Sustainable Solutions for a Better Future',
    'Harnessing Nature for Global Impact',
    'Innovation Meets Sustainability'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Animate white shape expanding
      tl.fromTo(shapeRef.current,
        {
          scale: 0.3,
          opacity: 0,
        },
        {
          scale: 2,
          opacity: 1,
          ease: 'power2.out',
          duration: 1,
        }
      )
      // Fade out scroll indicator
      .to(scrollIndicatorRef.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        0
      )
      // Reveal content section from the white shape
      .to(contentSectionRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
        0.6
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-hero-app">
      <section className="home-hero-hero-section" ref={heroRef}>
        <video className="home-hero-hero-video" autoPlay muted loop playsInline>
          <source src={Video1} type="video/mp4" />
        </video>

        <div className="home-hero-hero-overlay"></div>

        <div className="home-hero-hero-content">
          <div className="home-hero-tagline-container">
            {taglines.map((tagline, index) => (
              <p
                key={index}
                className={`home-hero-tagline ${index === currentTagline ? 'home-hero-active' : ''}`}
              >
                {tagline}
              </p>
            ))}
          </div>
          <button className="home-hero-explore-button">
            Explore
            <span className="home-hero-button-arrow">→</span>
          </button>
        </div>

        <div className="home-hero-scroll-indicator" ref={scrollIndicatorRef}>
          <div className="home-hero-scroll-arrow"></div>
        </div>

        <div className="home-hero-white-shape" ref={shapeRef}></div>

        <section className="home-hero-content-section" ref={contentSectionRef}>
          <div className="home-hero-container">
            <h2>Our Solutions</h2>
            <p className="home-hero-section-description">
              We deliver cutting-edge solar technology and renewable energy solutions
              that power communities while protecting our planet.
            </p>
            <button className="home-hero-cta-button">Explore Our Services</button>
          </div>
        </section>
      </section>

      <section className="home-hero-features-section">
        <div className="home-hero-container">
          <h2>Why Choose Solaris</h2>
          <div className="home-hero-features-grid">
            <div className="home-hero-feature">
              <h3>100% Clean</h3>
              <p>Zero emissions, pure renewable energy</p>
            </div>
            <div className="home-hero-feature">
              <h3>Cost Effective</h3>
              <p>Save money while saving the planet</p>
            </div>
            <div className="home-hero-feature">
              <h3>Reliable</h3>
              <p>Consistent energy supply, day and night</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HeroSection;
