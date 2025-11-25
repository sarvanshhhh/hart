import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Function to scroll smoothly to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden -mt-20">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-[calc(120%+200px)] object-cover"
        src="/images/Home/CarrierVD.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-[calc(100%+80px)] bg-black/50"></div>

      {/* Content (Heading + Subtitle) */}
      <div className="relative z-10 flex flex-col items-center text-center text-white mt-36">
        <h1 className="text-6xl font-extrabold mb-3">
          <span className="text-white">Our</span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-transparent bg-clip-text">
            Services
          </span>
        </h1>
        <p className="text-xl font-medium text-gray-200 mb-20">
          Born to Build, Geared to Grow
        </p>
      </div>

      {/* Buttons (Fixed Mobile Spacing) */}
      <div className="relative z-10 flex justify-center 
                      gap-4 sm:gap-10 lg:gap-24 
                      mt-10 sm:mt-32"> {/* Reduced vertical margin for mobile */}

        {["SUV", "Operating System", "R&D"].map((label, idx) => (
          <motion.button
            key={idx}
            onClick={() =>
              scrollToSection(
                label === "SUV" ? "suv" : label === "Operating System" ? "temp" : "rendev"
              )
            }
            
            whileHover={{
              scale:1.07,
              boxShadow:
              "0 0 250px rgb(0, 0, 0),0 0 45px rgba(0, 225, 255, 0.47)"
            }}
            
            className="
                       // Mobile (Default)
                       px-2 py-2 text-sm 
                       // Desktop (lg: override)
                       lg:px-10 lg:py-4 lg:text-lg 
                       
                       rounded-2xl font-bold 
                       bg-cyan
                       text-white
                       transition-all
                       "
          >
            {label}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Hero;