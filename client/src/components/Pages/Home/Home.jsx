import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection'
import Aim from './Aim/Aim.jsx';
import Video from './Video';
import ChooseUs from './Choose/ChooseUs.jsx';
import About from './AboutUs/About.jsx';




export function Home() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollWidth(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        className="fixed left-0 top-0 h-2 bg-gradient-to-r from-customRed to-customBlue rounded-sm transition-all ease-out z-20 opacity-40"
        style={{ width: `${scrollWidth}%` }}
      />
      <HeroSection />
      <About />
      <Aim />
      <Video />
      <ChooseUs />
      
    </div>
  )
}

