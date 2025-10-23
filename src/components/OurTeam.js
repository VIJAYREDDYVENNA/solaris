import React, { useState, useCallback, useEffect } from 'react';

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const teamMembers = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'CEO & FOUNDER',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
      bio: 'Visionary leader with 15 years of experience in tech innovation.'
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      role: 'CHIEF TECHNOLOGY OFFICER',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      bio: 'Technology expert passionate about building scalable solutions.'
    },
    {
      id: '3',
      name: 'James Wilson',
      role: 'PRODUCT MANAGER',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
      bio: 'Product strategy expert with a passion for user-driven solutions.'
    },
    {
      id: '4',
      name: 'Emily Thompson',
      role: 'HEAD OF DESIGN',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
      bio: 'Creative designer crafting beautiful and intuitive experiences.'
    },
    {
      id: '5',
      name: 'David Park',
      role: 'ENGINEERING LEAD',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
      bio: 'Engineering expert building robust and efficient systems.'
    },
    {
      id: '6',
      name: 'Lisa Martinez',
      role: 'MARKETING DIRECTOR',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop',
      bio: 'Strategic marketer driving growth and brand awareness.'
    }
  ];

  const paginate = useCallback((newDirection) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + newDirection + teamMembers.length) % teamMembers.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, teamMembers.length]);

  const goToSlide = (index) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const calculatePosition = (index) => {
    const diff = (index - currentIndex + teamMembers.length) % teamMembers.length;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right-1';
    if (diff === 2) return 'right-2';
    if (diff === teamMembers.length - 1) return 'left-1';
    if (diff === teamMembers.length - 2) return 'left-2';
    return 'hidden';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  return (
    <>
      <style>{`
        .team-carousel-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px 20px 10px;
        //   background: linear-gradient(135deg, #0f2027 0%, #203a43 25%, #2c5364 50%, #1a2a6c 75%, #0f0c29 100%);
          background: #1C2A4A;
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
          overflow: hidden;
          position: relative;
          color:black !important;

        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .team-carousel-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 30%, rgba(41, 128, 185, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(142, 68, 173, 0.15) 0%, transparent 50%);
          pointer-events: none;
        }

        .team-title {
          font-size: 3rem;
          font-weight: 900;
        //   text-transform: uppercase;
          letter-spacing: -0.02em;
          margin-bottom: 30px;
          color: white;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
          font-family:"Times New Roman"
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          height: 480px;
          perspective: 1000px;
          margin: 0 auto;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(255, 255, 255, 1);
          color: #667eea;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 100;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .nav-button:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-50%) scale(1.15);
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25);
          border-color: #667eea;
        }

        .nav-button:active {
          transform: translateY(-50%) scale(0.95);
        }

        .nav-button.prev {
          left: 10px;
        }

        .nav-button.next {
          right: 10px;
        }

        .nav-icon {
          width: 24px;
          height: 24px;
          fill: #667eea;
        }

        .cards-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .team-card {
          position: absolute;
          width: 280px;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          left: 50%;
          top: 50%;
          margin-left: -140px;
          margin-top: -190px;
        }

        .team-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .team-card.center {
          transform: translateX(0) scale(1.1);
          z-index: 10;
          opacity: 1;
          filter: grayscale(0%);
        }

        .team-card.right-1 {
          transform: translateX(196px) scale(0.9);
          z-index: 5;
          opacity: 0.8;
          filter: grayscale(100%);
        }

        .team-card.right-2 {
          transform: translateX(392px) scale(0.81);
          z-index: 1;
          opacity: 0.56;
          filter: grayscale(100%);
        }

        .team-card.left-1 {
          transform: translateX(-196px) scale(0.9);
          z-index: 5;
          opacity: 0.8;
          filter: grayscale(100%);
        }

        .team-card.left-2 {
          transform: translateX(-392px) scale(0.81);
          z-index: 1;
          opacity: 0.56;
          filter: grayscale(100%);
        }

        .team-card.hidden {
          opacity: 0;
          z-index: 0;
          pointer-events: none;
        }

        .member-info {
          text-align: center;
          margin-top: 60px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .member-name {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
          position: relative;
          display: inline-block;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .member-name::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 3px;
          background: white;
          box-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
        }

        .member-role {
          font-size: 1.25rem;
          font-weight: 500;
          color: white;
          opacity: 0.95;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .member-bio {
          font-size: 1rem;
          color: white;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        }

        .dots-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 10px;
          position: relative;
          z-index: 1;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }

        .dot.active {
          background: white;
          transform: scale(1.25);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
        }

        .dot:hover:not(.active) {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 1024px) {
          .team-card.right-2,
          .team-card.left-2 {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .team-title {
            font-size: 3rem;
            margin-bottom: 40px;
          }
          
          .carousel-wrapper {
            height: 400px;
          }

          .team-card {
            width: 220px;
            height: 300px;
            margin-left: -110px;
            margin-top: -150px;
          }

          .team-card.right-1 {
            transform: translateX(140px) scale(0.85);
          }

          .team-card.left-1 {
            transform: translateX(-140px) scale(0.85);
          }

          .member-name {
            font-size: 2rem;
          }

          .member-role {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="team-carousel-container">
        {/* Title */}
        <h2 className="team-title">The Minds Behind Solaris</h2>
        
        {/* Carousel */}
        <div className="carousel-wrapper">
          {/* Navigation Buttons */}
          <button 
            className="nav-button prev" 
            onClick={() => paginate(-1)}
            aria-label="Previous"
          >
            <svg className="nav-icon" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <button 
            className="nav-button next" 
            onClick={() => paginate(1)}
            aria-label="Next"
          >
            <svg className="nav-icon" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>

          {/* Cards */}
          <div className="cards-container">
            {teamMembers.map((member, index) => {
              const position = calculatePosition(index);
              if (position === 'hidden') return null;

              return (
                <div
                  key={member.id}
                  className={`team-card ${position}`}
                  onClick={() => goToSlide(index)}
                >
                  <img src={member.image} alt={member.name} />
                </div>
              );
            })}
          </div>
        </div>
<div className="dots-container">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Member Info */}
        <div className="member-info">
          <h3 className="member-name">{teamMembers[currentIndex].name}</h3>
          <p className="member-role">{teamMembers[currentIndex].role}</p>
          <p className="member-bio">{teamMembers[currentIndex].bio}</p>
        </div>

        {/* Dots */}
        {/* <div className="dots-container">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default TeamCarousel;