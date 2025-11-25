// src/components/Pages/Offerings/ServicesPage.jsx

import React from 'react';
import Hero from './Hero';
import Temp from './Temp';
import SUV from './SUV';
import RenDev from './RenDev.jsx';
import FooterCTA from './FooterCTA';
import { colors } from './color.js';

const ServicesPage = () => {
  return (
    <div className={`relative pt-20 min-h-screen overflow-hidden ${colors.background}`}>
      
      {/* 🔹 Full Page Background Video (Responsive by nature) */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="/offeringIMG/bh3.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Dark Overlay for readability (Responsive by nature) */}
      <div className="fixed inset-0 bg-black/70 z-0 "></div>

      {/* 🔹 Page Content (Takes full available width) */}
      <div className="relative z-10">
        <Hero />
          <div id="suv"> <SUV /></div>
        
          <div id="temp">   <Temp /></div>
        
          <div id="rendev">      <RenDev /></div>
        <FooterCTA />
      </div>
    </div>
  );
};

export default ServicesPage;
