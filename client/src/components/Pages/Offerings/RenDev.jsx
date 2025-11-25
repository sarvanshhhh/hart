import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import autoDrive from "./RDIMG/autoDrive.jpg";
import solidBatt from "./RDIMG/solidBatt.jpg";
import V2Integrate from "./RDIMG/V2Integrate.jpg";

const projects = [
  {
    title: "Autonomous Driving",
    desc: "Developing Level 4 autonomy systems capable of handling complex urban environments without human intervention. Our sensor fusion technology combines lidar, radar, and cameras for unparalleled situational awareness.",
    status: "In Progress",
    img: autoDrive,
  },
  {
    title: "Solid-State Batteries",
    desc: "Revolutionizing energy storage with solid-state technology that offers higher density, faster charging, and improved safety over current lithium-ion solutions. Our prototypes show promising results in extreme condition testing.",
    status: "Prototype",
    img: solidBatt,
  },
  {
    title: "V2G Integration",
    desc: "Vehicle-to-grid systems transform EVs into mobile power hubs that can stabilize electrical grids and store renewable energy. Our bidirectional charging technology is setting new standards for efficiency and reliability.",
    status: "Research Phase",
    img: V2Integrate,
  },
];

const RenDev = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="relative py-20 px-4 sm:px-6 flex justify-center overflow-hidden">
      <div className="relative w-[95%] max-w-6xl h-[700px] rounded-2xl overflow-hidden border border-gray-700">
        {/* Background blurred image */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="sync">
            <motion.img
              key={projects[activeIndex].img}
              src={projects[activeIndex].img}
              alt={projects[activeIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{ filter: "blur(6px) brightness(0.7)" }}
            />
          </AnimatePresence>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 text-white h-full flex flex-col justify-center px-4 sm:px-8">
          {/* Heading */}
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Research <span className="text-blue-500">& Development</span>
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl">
              Pioneering the future of mobility technology
            </p>
          </div>

          {/* Swiper */}
          {swiperReady && (
            <Swiper
              modules={[Navigation]}
              initialSlide={0}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full"
            >
              {projects.map((project, idx) => (
                <SwiperSlide key={idx}>
                  {/* Side-by-side layout on all screens */}
                  <div className="flex flex-row items-center justify-between gap-6 sm:gap-12 flex-wrap sm:flex-nowrap">
                    {/* Text section */}
                    <div className="w-full sm:w-1/2 text-center sm:text-left">
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-base sm:text-lg mb-6">{project.desc}</p>
                      <div className="flex items-center justify-center sm:justify-start gap-3">
                        <span>Status:</span>
                        <span className="px-4 py-1.5 rounded-full text-base font-medium border border-blue-500 text-blue-500 bg-blue-500/10">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Image section */}
                    <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                      <div className="h-56 sm:h-64 w-4/5 sm:w-full rounded-xl overflow-hidden shadow-lg border border-gray-600 relative">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition"
            >
              <span className="text-white text-xl">‹</span>
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition"
            >
              <span className="text-white text-xl">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenDev;
