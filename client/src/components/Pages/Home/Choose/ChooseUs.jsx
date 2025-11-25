import React, { useState } from "react";

const cards = [
  {
    src: "/images/style/Batt30.jpg",
    title: "Charge ahead — energy surge with optimized savings.",
    description: "Boosts efficiency by 30%, saving energy with smarter performance.",
  },
  {
    src: "/images/style/Extended.jpg",
    title: "Glide with grace — ultralight build, turbocharged motion",
    description: "Feather-light frame, lightning-fast moves, precision in every turn.",
  },
  {
    src: "/images/style/light.jpg",
    title: "Endless road awaits — range that goes beyond expectations",
    description: "Limitless journeys ahead — range that redefines boundaries.",
  },
  {
    src: "/images/style/seam.jpg",
    title: "Command intelligence— AI OS that powers every move",
    description: "Intelligence at your fingertips — AI that thinks, adapts, and evolves.",
  },
  {
    src: "/images/style/smart.jpg",
    title: "Glide through tech, effortlessly",
    description: "Technology and touch in perfect rhythm — a smooth, intuitive and elegant experience.",
  },
];

const ExpandedCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-start pl-6 md:pl-20 overflow-hidden">
      
      {/* Heading */}
      <h1 className="relative z-10 text-3xl md:text-4xl font-bold mb-6 md:mb-8 drop-shadow-lg text-left md:text-left text-white">
        <span className="text-white">Why Choose</span>{" "}
        <span className="text-teal-400">Us</span>
      </h1>

      {/* Cards */}
      <div
        className="relative z-10 flex flex-col md:flex-row justify-center md:justify-end w-full gap-4 overflow-hidden"
        style={{
          height: "auto",
          minHeight: "400px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-end ${
              activeIndex === index ? "md:flex-[4]" : "md:flex-[1]"
            } w-full md:w-auto h-[250px] md:h-[550px]`}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              backgroundImage: `url(${card.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "#000",
              border: "3px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              minWidth: "0",
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <h2 className="relative z-10 text-white text-lg md:text-xl font-bold px-4 mb-2 text-center md:text-left">
              {card.title}
            </h2>

            {activeIndex === index && (
              <p className="relative z-10 text-white text-sm px-4 mb-4 text-center md:text-left opacity-0 animate-fadeIn">
                {card.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default ExpandedCard;
