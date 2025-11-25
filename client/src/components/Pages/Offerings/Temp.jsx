// File: Temp.jsx
import React, { useEffect, useState } from 'react';
import './Temp.css';
import { motion } from "framer-motion";
import { textVariant } from '../../Motion';

const cardData = [
  { img: '/tempIMG/EV1.jpg', title: 'AI-powered OS', description: 'Enhances vehicle intelligence using AI & smart systems.' },
  { img: '/tempIMG/V2V.jpg', title: 'V2V Network', description: 'Enables real-time communication between vehicles for better safety.' },
  { img: '/tempIMG/predictive.jpg', title: 'Predictive Maintenance', description: 'Detect issues before they happen using smart diagnostics.' },
  { img: '/tempIMG/geofen.jpg', title: 'Geo-Fencing', description: 'Virtual boundaries that trigger alerts or actions automatically.' },
  { img: '/tempIMG/EV5.jpg', title: 'Self-Healing Systems', description: 'Fixes minor faults without driver intervention.' },
  { img: '/tempIMG/smartnev.jpg', title: 'Smart Navigation', description: 'Optimized routing with AI-powered real-time data.' },
  { img: '/tempIMG/EnergyEffi.jpg', title: 'Energy Efficiency', description: 'Monitors energy use and maximizes battery performance.' },
  { img: '/tempIMG/Driver.jpg', title: 'Driver Monitoring', description: 'Tracks driver behavior to improve safety and alerts.' }
];

const Temp = () => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Infinite rotation unless paused
  useEffect(() => {
    let frameId;
    const animate = () => {
      if (!isPaused) {
        setRotation((prev) => prev + 0.25);
      }
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  return (
    <section
      className="min-h-screen py-20 text-center text-white bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: "url('/tempIMG/BckEffect.jpg')" }}
    >
      {/* Heading */}
      <div className="container mx-auto mt-24">
        <div className="flex flex-col items-center mb-24">
          <motion.h2
            variants={textVariant(0.1)}
            className="text-5xl md:text-6xl font-extrabold text-center mb-6"
          >
            <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-700 bg-clip-text text-transparent">
              Operating System
            </span>
          </motion.h2>

          <motion.p
            variants={textVariant(0.2)}
            className="text-xl text-center max-w-3xl bg-gradient-to-r from-gray-300 via-gray-400 to-gray-700 bg-clip-text text-transparent"
          >
            Driven by Passion, Designed to Disrupt
          </motion.p>
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel-wrapper mx-auto">
        <div
          className="carousel"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {cardData.map((item, i) => {
            const angle = (360 / cardData.length) * i;
            return (
              <div
                key={i}
                className="carousel-item-wrapper"
                style={{ transform: `rotateY(${angle}deg) translateZ(400px)` }}
                onMouseEnter={() => setIsPaused(true)}  // pause on hover
                onMouseLeave={() => setIsPaused(false)} // resume on leave
              >
                <img
                  src={item.img}
                  alt={`carousel-item-${i}`}
                  className="carousel-item cursor-pointer"
                />
                <div className="overlay">
                  <h3 className="overlay-title">{item.title}</h3>
                  <p className="overlay-text">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Temp;
