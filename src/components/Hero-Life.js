import React, { useState, useEffect, useRef } from 'react';
import { Users, TrendingUp, Heart } from 'lucide-react';
import '../components_css/Hero-Life.css';

const HeroLife = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
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

  const cards = [
    {
      id: 1,
      icon: Users,
      title: 'A Culture of Collaboration',
      description: 'At Solaris, collaboration fuels innovation. Cross-functional teams work together to tackle complex energy challenges, transforming bold ideas into real-world impact. Our open, inclusive culture invites every voice to the table—because the best solutions are built together.'
    },
    {
      id: 2,
      icon: TrendingUp,
      title: 'Opportunities for Growth',
      description: 'Growth at Solaris isn\'t just encouraged — it\'s built into our culture. Through specialized training programs, leadership development, and hands-on experience with next-gen technologies, we empower our people to expand their skills, take ownership, and lead innovation in the renewable energy space.'
    },
    {
      id: 3,
      icon: Heart,
      title: 'Work-Life Balance and Well-Being',
      description: 'We believe people thrive when they feel supported — both personally and professionally. Our flexible policies, wellness programs, and recreational initiatives create a balanced environment where individuals feel valued, energized, and motivated to grow. Because a healthier team builds a stronger future.'
    }
  ];

  return (
    <section className="hero-life" ref={sectionRef}>
      {/* Background Image */}
      <div className="hero-life-bg-image"></div>

      {/* Dark Overlay */}
      <div className="hero-life-overlay"></div>

      {/* Content */}
      <div className="hero-life-content">
        {/* Header */}
        <div className={`hero-life-header ${isVisible ? 'hero-life-animate-fade-in-down' : ''}`}>
          <p className="hero-life-subtitle">LIFE AT SOLARIS</p>
          <h2 className="hero-life-title">Empowering People. Driving Purpose.</h2>
        </div>

        {/* Cards Container */}
        <div className={`hero-life-cards ${isVisible ? 'hero-life-animate-cards' : ''}`}>
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <React.Fragment key={card.id}>
                <div className={`hero-life-card ${isVisible ? `hero-life-animate-fade-in-up` : ''}`}
                     style={isVisible ? { animationDelay: `${index * 0.15}s` } : {}}>
                  <div className="hero-life-card-icon">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="hero-life-card-title">{card.title}</h3>
                  <p className="hero-life-card-description">{card.description}</p>
                </div>
                {index < cards.length - 1 && <div className="hero-life-divider"></div>}
              </React.Fragment>
            );
          })}
        </div>

        {/* Button */}
        <div className={`hero-life-button-container ${isVisible ? 'hero-life-animate-fade-in-up' : ''}`}
             style={isVisible ? { animationDelay: '0.45s' } : {}}>
          <button className="hero-life-button">
            <span>Contact us to know more</span>
            <span className="hero-life-button-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroLife;