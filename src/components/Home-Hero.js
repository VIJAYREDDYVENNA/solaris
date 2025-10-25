import { useState, useEffect, useRef } from 'react';
import "../components_css/Home-Hero.css"
import Video1 from "../Videos/HomeVideo4.mp4"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const heroRef = useRef(null);
  const shapeRef = useRef(null);
  const nextSectionRef = useRef(null);
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

      tl.fromTo(shapeRef.current,
        {
          scale: 0.3,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          duration: 1,
        }
      )
      .to(scrollIndicatorRef.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        0
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
     

      <div className="Home-Hero-app">
        <section className="Home-Hero-hero-section" ref={heroRef}>
          <video className="Home-Hero-hero-video" autoPlay muted loop playsInline>
            <source src={Video1} type="video/mp4" />
          </video>

          <div className="Home-Hero-hero-overlay"></div>

          <div className="Home-Hero-hero-content">
            <div className="Home-Hero-tagline-container">
              {taglines.map((tagline, index) => (
                <p
                  key={index}
                  className={`Home-Hero-tagline ${index === currentTagline ? 'Home-Hero-active' : ''}`}
                >
                  {tagline}
                </p>
              ))}
            </div>
            <button className="Home-Hero-explore-button">
              Explore
              <span className="Home-Hero-button-arrow">→</span>
            </button>
          </div>

          <div className="Home-Hero-scroll-indicator" ref={scrollIndicatorRef}>
            {/* <div className="Home-Hero-scroll-arrow"></div> */}
          </div>

          <div className="Home-Hero-white-shape" ref={shapeRef}></div>
        </section>

        {/* <section className="Home-Hero-content-section" ref={nextSectionRef}>
          <div className="Home-Hero-container">
            <h2>Our Solutions</h2>
            <p className="Home-Hero-section-description">
              We deliver cutting-edge solar technology and renewable energy solutions
              that power communities while protecting our planet.
            </p>
            <button className="Home-Hero-cta-button">Explore Our Services</button>
          </div>
        </section>

        <section className="Home-Hero-features-section">
          <div className="Home-Hero-container">
            <h2>Why Choose Solaris</h2>
            <div className="Home-Hero-features-grid">
              <div className="Home-Hero-feature">
                <h3>100% Clean</h3>
                <p>Zero emissions, pure renewable energy</p>
              </div>
              <div className="Home-Hero-feature">
                <h3>Cost Effective</h3>
                <p>Save money while saving the planet</p>
              </div>
              <div className="Home-Hero-feature">
                <h3>Reliable</h3>
                <p>Consistent energy supply, day and night</p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default App;