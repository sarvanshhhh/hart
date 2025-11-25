import React from "react";

const KnowUs = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 py-30">
      
      {/* Heading */}
      <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
        Know Us
      </h1>

      {/* Rotating Circle */}
      <div className="relative mb-10">
        <div className="w-32 h-32 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Tagline */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-300 text-center">
        “ Architects of the future, One innovation at a time. ”
      </h2>

      {/* Description */}
      <p className="max-w-3xl text-lg text-white-300 leading-relaxed text-center mb-10" style="color:white">
        Hartalkar Innovations Pvt. Ltd. is a forward-thinking hardware R&D company tackling
        real-world challenges with bold innovation. We design advanced solutions across
        automotive, research and development, and sustainable mobility. From electric SUVs
        to military-grade prototypes, we blend deep engineering expertise with visionary
        thinking. Our focus lies in creating cutting-edge, eco-efficient, and
        high-performance technologies that shape the future of mobility.
      </p>

      {/* Final Statement */}
      <p className="text-xl font-bold text-teal-400 text-center">
        Fueled by volts, forged for strength, designed for future.
      </p>
    </section>
  );
};

export default KnowUs;
