"use client"

import { useState, useEffect, useRef } from "react"
import HomeHero from "../components/Home-Hero.js"
import HomeAbout from "../components/Home-About.js"
export default function Home() {
  
  return (
    <div>
      <HomeHero />
      <HomeAbout />
    </div>
  );

}
