import { useEffect, useRef } from "react"
import "../components_css/Home-About.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function NextSection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    if (!section || !content) return

    gsap.fromTo(
      content,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          scrub: 1.5,
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="next-section">
      <div ref={contentRef} className="next-content">
        <h2 className="next-title">Clean energy, built for the future</h2>
        <p className="next-description">
          We're pioneering sustainable energy solutions that power communities while protecting our planet. Our
          innovative approach combines cutting-edge technology with environmental responsibility.
        </p>
        <div className="next-features">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Renewable Power</h3>
            <p>100% clean energy from sustainable sources</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Impact</h3>
            <p>Reducing carbon footprint worldwide</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔋</div>
            <h3>Smart Storage</h3>
            <p>Advanced battery technology for reliability</p>
          </div>
        </div>
      </div>
    </section>
  )
}
