import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Removed external Swiper imports and replaced them with a custom implementation

const features = [
  {
    title: "Lightweight Chassis",
    desc: "Our advanced aluminum-carbon fiber hybrid frame reduces weight by 20% compared to traditional SUVs while maintaining structural integrity and safety standards.",
    status: "In Progress",
    img: "/offeringIMG/Chasis.jpg",
  },
  {
    title: "Extended Battery Life",
    desc: "Graphene-enhanced batteries deliver 500+ miles per charge with ultra-fast charging capabilities. Our thermal management system ensures optimal performance in all conditions.",
    status: "Prototype",
    img: "/offeringIMG/Battery.jpg",
  },
  {
    title: "AI-Driven Features",
    desc: "Smart climate control adapts to occupancy and weather conditions. Autonomous parking and lane-keeping assist make every drive effortless and safe.",
    status: "Research Phase",
    img: "/offeringIMG/AiDriver.jpg",
  },
];

const SUV = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? features.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === features.length - 1 ? 0 : prevIndex + 1));
  };

  const feature = features[activeIndex];

  return (
    <section id="suv" className="relative py-12 lg:py-20 px-4 flex justify-center">
      
      {/* Container: Removed fixed height, added responsive min-height */}
      <div className="relative w-full max-w-6xl 
                      min-h-[600px] lg:min-h-[70vh] 
                      rounded-2xl overflow-hidden shadow-2xl"> 
        
        {/* Background blurred image */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={feature.img}
              src={feature.img}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }} // Reduced duration for faster visual feedback
              style={{ filter: "blur(6px) brightness(0.7)" }}
            />
          </AnimatePresence>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 text-white h-full flex flex-col justify-center px-4 py-8 lg:px-16 lg:py-12">
          
          {/* Heading */}
          <div className="flex flex-col items-center mb-8 lg:mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-2 lg:mb-4">
              Electric <span className="text-blue-500">SUV Development</span>
            </h2>
            <p className="text-base lg:text-xl max-w-2xl">
              Combining power, efficiency, and intelligent design
            </p>
          </div>

          {/* Custom Slider Content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex} 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Content Layout: Vertical stacking on mobile (flex-col) 
                  and horizontal stacking on large screens (lg:flex-row) */}
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                
                {/* Text content - full width on mobile, 1/2 on desktop */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"> 
                  <h3 className="text-xl lg:text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm lg:text-lg mb-4 lg:mb-6">{feature.desc}</p>
                  <div className="flex justify-center lg:justify-start items-center gap-3">
                    <span className="text-sm lg:text-base">Status:</span>
                    <span className={`px-4 py-1 rounded-full text-xs lg:text-base font-medium border
                      ${feature.status === 'In Progress' ? 'border-white-500 text-white-500 bg-white-500/10' :
                        feature.status === 'Prototype' ? 'border-white-500 text-white-500 bg-white-500/10' :
                        'border-white-500 text-white-500 bg-white-500/10' // Defaulting Research Phase to red/red-500/10
                      }`
                    }>
                      {feature.status}
                    </span>
                  </div>
                </div>

                {/* Image card - full width on mobile, 1/2 on desktop */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="h-48 sm:h-64 w-full rounded-xl overflow-hidden shadow-lg relative border border-gray-700">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-8 mt-6 lg:mt-8">
            <button
              onClick={goToPrev}
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition"
            >
              <span className="text-white text-xl">‹</span>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {features.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                    index === activeIndex ? 'bg-blue-500 scale-125' : 'bg-gray-400 opacity-50'
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></div>
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition"
            >
              <span className="text-white text-xl">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SUV;