"use client"

import { useState, useEffect, useRef } from "react"
import HomeHero from "../components/Home-Hero.js"
import HomeAbout from "../components/Home-About.js"
import HomeSolaris from "../components/Home-Solaris.js"
import HomeCta from "../components/Home-Cta.js"
import HeroLife from "../components/Hero-Life.js"
export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      document.documentElement.style.setProperty('--scroll-percent', scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <HomeHero />
      <HomeSolaris />
        <HeroLife />
      <HomeAbout />
    
      <HomeCta />
    </div>
  );

}
