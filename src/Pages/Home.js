"use client"

import { useState, useEffect, useRef } from "react"
import HomeHero from "../components/Home-Hero.js"
import HomeAbout from "../components/Home-About.js"
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
      <HomeAbout />
    </div>
  );

}
