import React, { useState, useEffect, useRef } from 'react';

const AboutHero = () => {
  const stats = [
    { value: 9, suffix: ' Million', label: 'Metric Tons of CO2 Emissions Avoided' },
    { value: 900, suffix: ' GWh', label: 'Clean Energy Generated per Year' },
    { value: 43, suffix: ' Million', label: 'Trees worth of carbon Absorption' },
    { value: 570, suffix: ' Million', label: 'Litres of water saved' },
    { value: 2.4, suffix: ' Million', label: 'Metric tons of Fossil Fuel Avoided' }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const intervals = stats.map((stat, index) => {
      const increment = stat.value / (duration / 16);
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = stat.value;
            return newCounts;
          });
          clearInterval(intervals[index]);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = current;
            return newCounts;
          });
        }
      }, 16);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [isVisible]);

  const formatNumber = (num, decimals = 1) => {
    return num % 1 === 0 ? num.toFixed(0) : num.toFixed(decimals);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="relative min-h-[600px] md:min-h-[700px]">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop" 
            alt="Solar panels installation" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Content Overlay - Top Left Center */}
          <div className="relative z-10 h-full flex items-center">
            <div className="w-full max-w-2xl px-8 md:px-16 py-12">
              <div className="bg-white bg-opacity-95 p-8 md:p-10 rounded-lg shadow-xl">
                <div className="mb-6">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">ABOUT</h1>
                  <div className="w-16 h-1 bg-yellow-500"></div>
                </div>
                
                <blockquote className="border-l-4 border-yellow-500 pl-6 italic text-gray-700 text-lg md:text-xl leading-relaxed">
                  "The sun is a daily reminder that we too can rise again from the darkness, 
                  that we too can shine our own light."
                </blockquote>
                
                <p className="text-gray-600 leading-relaxed mt-8">
                  At our core, we believe in harnessing the power of the sun to create a 
                  sustainable future for generations to come. Our commitment to solar innovation 
                  drives us to deliver cutting-edge electronic solutions that transform how the 
                  world thinks about energy. From residential installations to large-scale 
                  commercial projects, we illuminate the path toward a cleaner, brighter tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="bg-blue-900 py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                  {formatNumber(counts[index], stat.value % 1 !== 0 ? 1 : 0)}{stat.suffix}
                </div>
                <div className="text-xs md:text-sm text-white leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;