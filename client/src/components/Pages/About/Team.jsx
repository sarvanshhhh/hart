// File: TeamCarousel.jsx
import React, { useState, useEffect } from "react";

// ... (Your 'members' array remains the same) ...
const members = [
  {
    title: "Sanket Hartalkar",
    role: "Founder",
    desc: "Founder, Director & CEO of Hartalkar Innovations Pvt. Ltd.",
    image: "/images/Team/Sanket.png",
  },
  {
    title: "Dr. Sanjeev kumar Yadav",
    role: "IT mentor (iCreate)",
    desc: "Expert in IT and technology-driven solutions.",
    image: "/images/Team/Sanjeev.png",
  },
  {
    title: "Mr. Neelesh Suryavanshi",
    role: "Finance",
    desc: "Oversees finance and company operations.",
    image: "/images/Team/Neelesh.png",
  },

  {
    title: "Miss Shreya Yadav",
    role: "Tech Head",
    desc: "Heading innovative tech projects.",
    image: "/images/Team/Shreya.jpg",
  },
  {
    title: "Miss Palak Jain",
    role: "HR Manager",
    desc: "Managing HR & team operations.",
    image: "/images/Team/Palak.png",
  },

  {
    title: "Mr. Sarvansh Tiwari",
    role: "Technology Developer",
    desc: "",
    image: "/images/Team/Sarvansh.jpg",
  },
];

// Set a breakpoint for mobile/desktop split. Tailwind's 'sm' is 640px.
const MOBILE_BREAKPOINT = 767; 

const TeamCarousel = ({ autoplay = false, interval = 4500 }) => {
  const len = members.length;
  const [active, setActive] = useState(0);
  // NEW STATE: To track if we are on a mobile device
  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {
    // Media Query Check for Mobile View
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    
    // Autoplay logic
    let t;
    if (autoplay) {
      t = setInterval(() => setActive((p) => (p + 1) % len), interval);
    }

    return () => {
      clearInterval(t);
      window.removeEventListener("resize", handleResize);
    };
  }, [autoplay, interval, len]);

  const prev = () => setActive((p) => (p - 1 + len) % len);
  const next = () => setActive((p) => (p + 1) % len);

  const getPlacement = (i) => {
    const offset = (i - active + len) % len;
    if (offset === 0) return "center";
    if (offset === 1) return "right";
    if (offset === len - 1) return "left";
    return "back";
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-nunito">
      {/* Photographic banner background with dark vignette - NO CHANGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to top,#0f1312 10%, rgba(47,60,71,0.28) 60%), url('/images/About/Team1.jpg')",
          filter: "saturate(0.8) contrast(0.9)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Header - NO CHANGE */}
      <header className="relative z-10 w-full text-center pt-20 pb-8">
        <h1 className="mx-auto text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl
            bg-gradient-to-r from-[#00b6d4] via-[#00a0f0] to-white bg-clip-text text-transparent">
          OUR TEAM
        </h1>
        <p className="mt-3 text-gray-300/80 uppercase tracking-wider text-sm">
          Meet a team of innovators who are pioneers in their field
        </p>
      </header>

      {/* Carousel area */}
      <main className="relative z-20 w-full flex flex-col items-center pb-24">
        {/* Adjusted size for mobile screen: h-[320px] instead of h-[420px] and removed max-w-6xl for mobile */}
        <div className="relative w-full max-w-md h-[400px] sm:max-w-6xl sm:h-[420px] flex items-center justify-center"> 
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ perspective: isMobile ? 0 : 1300 }} // DISABLE 3D on mobile
          >
            {members.map((m, i) => {
              const pos = getPlacement(i);
              
              // 1. Start with the default desktop style
              let style = {
                transition: "all 700ms cubic-bezier(.2,.9,.2,1)",
                transform: "translateX(0) translateZ(0) rotateY(0deg) scale(1)",
                opacity: 1,
                zIndex: 20,
                filter: "none",
              };

              // 2. Apply desktop 3D transformations if NOT mobile
              if (!isMobile) {
                if (pos === "center") {
                  style = {
                    ...style,
                    transform: "translateX(0px) translateZ(220px) rotateY(0deg) scale(1.08)",
                    zIndex: 60,
                    opacity: 1,
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6))",
                  };
                } else if (pos === "right") {
                  style = {
                    ...style,
                    transform: "translateX(220px) translateZ(40px) rotateY(-30deg) scale(0.92)",
                    zIndex: 40,
                    opacity: 0.82,
                    filter: "brightness(0.9) saturate(0.9)",
                  };
                } else if (pos === "left") {
                  style = {
                    ...style,
                    transform: "translateX(-220px) translateZ(40px) rotateY(30deg) scale(0.92)",
                    zIndex: 40,
                    opacity: 0.82,
                    filter: "brightness(0.9) saturate(0.9)",
                  };
                } else { // 'back'
                  style = {
                    ...style,
                    transform: "translateZ(-400px) scale(0.84)",
                    zIndex: 10,
                    opacity: 0,
                    filter: "blur(1px)",
                  };
                }
              }

              // 3. Apply mobile-specific overrides
              if (isMobile) {
                if (pos === "center") {
                  // Only the active card is fully visible and centered
                  style = {
                    ...style,
                    transform: "translateX(0) translateZ(0) scale(1)",
                    opacity: 1,
                    zIndex: 20,
                  };
                } else {
                  // All other cards are completely hidden on mobile
                  style = {
                    ...style,
                    transform: "translateX(0) translateZ(0) scale(0.8)",
                    opacity: 0,
                    zIndex: 1,
                    pointerEvents: 'none' // Disable interaction
                  };
                }
              }

              return (
                // Used conditional classes to fix card width on mobile
                <div
                  key={m.title}
                  className={`absolute flex items-center justify-center w-full ${isMobile ? 'max-w-xs' : 'sm:w-auto'}`}
                  style={style}
                >
                  <div
                    // Set fixed width/height for the card on mobile
                    className={`relative w-64 h-72 sm:w-72 sm:h-80 [transform-style:preserve-3d] transition-transform duration-700 group ${isMobile ? 'shadow-2xl' : ''}`}
                  >
                    {/* Front - NO CHANGE */}
                    <div
                      className="absolute inset-0 rounded-xl p-5 flex flex-col items-center justify-center text-center
                                 bg-gradient-to-br from-[#0f1720]/60 to-[#111827]/60 border border-gray-700 shadow-2xl [backface-visibility:hidden]"
                      style={{ transform: "rotateY(0deg)" }}
                    >
                      <img
                        src={m.image}
                        alt={m.title}
                        className="w-32 h-32 object-cover rounded-full border-4 border-cyan-400 shadow-md mb-4"
                      />
                      <h3 className="text-lg font-semibold text-white">{m.title}</h3>
                      <p className="text-sm text-gray-300 mt-1">{m.role}</p>
                    </div>
                    {/* Back - NO CHANGE */}
                    <div
                      className="absolute inset-0 rounded-xl p-5 flex items-center justify-center text-center
                                 bg-gradient-to-t from-black/80 to-gray-800/80 text-white [backface-visibility:hidden]"
                      style={{ transform: "rotateY(180deg)" }}
                    >
                      <p className="text-sm px-2">{m.desc}</p>
                    </div>
                    <style jsx>{`
                      .group:hover > div:first-child {
                        transform: rotateY(180deg);
                      }
                      .group:hover > div:last-child {
                        transform: rotateY(0deg);
                      }
                    `}</style>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls and dots - NO CHANGE */}
        <div className="mt-8 flex items-center gap-6 z-30">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-12 h-12 rounded-full bg-gray-800/60 border border-gray-700 flex items-center justify-center text-white hover:bg-cyan-600/90 transition"
          >
            ◀
          </button>
          <div className="flex items-center gap-2">
            {members.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === active ? "bg-cyan-400 scale-110" : "bg-gray-600/60"
                }`}
                aria-label={`Go to ${i}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="w-12 h-12 rounded-full bg-gray-800/60 border border-gray-700 flex items-center justify-center text-white hover:bg-cyan-600/90 transition"
          >
            ▶
          </button>
        </div>
      </main>
    </div>
  );
};

export default TeamCarousel;