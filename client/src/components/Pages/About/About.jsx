import React, { useEffect, useState } from "react";
import Vision from "./Vision";
import OurJourney from "./OurJourney";
import Team from "./Team";

const About = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollWidth(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* 🔹 Full Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover object-center -z-30"
        src="/images/Aim/about3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Full-Page Overlay (covers entire scroll area) */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-20"
        style={{
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      />

      {/* 🔹 Scroll Progress Bar */}
      <div
        className="fixed left-0 top-0 h-2 bg-gradient-to-r from-customRed to-customBlue rounded-sm transition-all ease-out z-50 opacity-60"
        style={{ width: `${scrollWidth}%` }}
      />

      {/* 🔹 Page Content (above overlay) */}
      <div className="relative z-10 pt-28 space-y-20">
        <Vision />
        <OurJourney />
        <Team />
      </div>
    </div>
  );
};

export default About;
