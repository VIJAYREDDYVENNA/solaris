import { useState, useEffect,useRef } from 'react';
import "../components_css/Home-Hero.css"
import Video1 from "../Videos/HomeVideo1.mp4"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef(null)
  const shapeRef = useRef(null)
  const contentRef = useRef(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const rotatingTexts = [
    "Clean energy, built for the future",
    "Sustainable power for tomorrow",
    "Renewable solutions today",
    "Green energy revolution",
  ]

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // GSAP ScrollTrigger animation
  useEffect(() => {
    const hero = heroRef.current
    const shape = shapeRef.current
    const content = contentRef.current

    if (!hero || !shape || !content) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    })

    tl.fromTo(
      shape,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 25,
        duration: 1,
        ease: "power2.inOut",
      },
    )

    // Fade out hero content as shape expands
    tl.to(
      content,
      {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      0,
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={heroRef} className="hero-section">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={Video1} type="video/mp4" />
      </video>

      <svg ref={shapeRef} className="expanding-shape" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="white"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.1,87.2C-23,86.8,-37.9,82.9,-51.3,75.3C-64.7,67.7,-76.6,56.4,-83.8,42.4C-91,28.4,-93.5,11.7,-91.6,-4.2C-89.7,-20.1,-83.4,-35.2,-74.3,-48.5C-65.2,-61.8,-53.3,-73.3,-39.1,-80.4C-24.9,-87.5,-8.3,-90.2,5.7,-88.9C19.7,-87.6,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>

      <div ref={contentRef} className="hero-content">
        <h1 className="hero-title">{rotatingTexts[currentTextIndex]}</h1>

        <div className="hero-buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  )
}
