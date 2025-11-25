import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    title: "Electric SUV",
    subtitle: "Future of Mobility",
    desc: "Our electric SUV is designed with cutting-edge technology to redefine sustainable mobility.",
    img: "/images/Aim/mob3.png",
  },
  {
    id: 2,
    title: "Operating System",
    subtitle: "HartOs",
    desc: "We are building a hybrid kernel based EV operating system for next-generation cars.",
    img: "/images/Aim/OS1.jpg",
  },
  {
    id: 3,
    title: "Research & Development",
    subtitle: "Innovation Hub",
    desc: "Innovating across EV hardware, BMS, and AI-driven systems for smarter transportation.",
    img: "/images/Aim/ReDev.jpg",
  },
];

export default function FullScreenSlider() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % SLIDES.length);
  };

  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="relative h-[75vh] w-full overflow-hidden text-white">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={SLIDES[index].id}
          custom={dir}
          initial={{ x: dir === 1 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: dir === 1 ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img
            src={SLIDES[index].img}
            alt={SLIDES[index].title}
            className="w-full h-full object-cover"
          />
         {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-between px-6 py-8">
            {/* Top-left block (title + subtitle) */}
            <div className="text-left">
              <h2 className="text-1xl md:text-4xl font-bold">
                {SLIDES[index].title}
              </h2>
              <h3 className="text-2xl md:text-4xl italic text-customBlue mt-2">
                {SLIDES[index].subtitle}
              </h3>
            </div>

            {/* Bottom-center block (description only) */}
            <div className="flex flex-col items-center text-center mb-6">
              <p className="max-w-3xl text-lg text-gray-200">
                {SLIDES[index].desc}
              </p>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>

      {/* Controls - bottom right corner */}
      <div className="absolute bottom-6 right-6 flex space-x-3">
        <button
          onClick={prev}
          className="bg-black/20 hover:bg-white/40 p-3 rectangle-full text-xl transition-colors duration-500"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="bg-black/20 hover:bg-white/40 p-3 rectangle-full text-xl transition-colors duration-500"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
