import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from '../../Motion';

const gradientTextStyle = {
  background: 'linear-gradient(90deg, #00eaff 0%, #0047ff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
};

const Vision = () => {
  return (
    <div className="relative text-center z-50">

      {/* Blurred Background Image 
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: '150%', // extends more from bottom
         backgroundImage: "url('/images/About/WhoBG.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",   // blurred background
          zIndex: -1,
        }}
      ></div>
      */}

      <div className="relative z-10">

        {/* Who We Are Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto mt-10 px-6 py-12 text-left"
        >
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-8"
          >
            Who <span style={gradientTextStyle}>We Are</span>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg mb-6 leading-relaxed"
          >
            Hartalkar Innovations Private Limited is a forward-thinking Indian startup committed to
            revolutionizing the electric vehicle (EV) landscape through cutting-edge innovation and
            sustainable engineering. Founded in May 2024 by visionary entrepreneur Sanket Hartalkar,
            the company is headquartered in Jabalpur, Madhya Pradesh, and is rapidly gaining
            recognition for its contributions to clean and efficient mobility solutions.
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-lg mb-6 leading-relaxed"
          >
            At the heart of Hartalkar Innovations lies a strong focus on developing advanced battery
            technologies, including customized battery pack configurations (series, parallel, and
            combination), robust Battery Management Systems (BMS), and effective thermal management
            systems to ensure the safety, performance, and longevity of EV batteries.
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="text-lg mb-6 leading-relaxed"
          >
            Under the leadership of Sanket Hartalkar—an engineer, artist, writer, and G20 Indian delegate—
            Hartalkar Innovations is not only pushing technical boundaries but also fostering a strong culture
            of creativity, collaboration, and sustainable impact. With a growing team of passionate professionals,
            the startup is building a name for itself as a hub for innovation in India’s EV sector, empowering the
            next generation of electric vehicles and contributing meaningfully.
          </motion.p>
        </motion.div>

        {/* Our Vision Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          className="relative max-w-5xl mx-auto mt-16 px-6 py-12 text-left"
        >
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Our <span style={gradientTextStyle}>Vision</span>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg mb-6 leading-relaxed"
          >
            To pioneer the future of electric vehicles by integrating AI-driven solutions and
            sustainable materials, making mobility smarter, cleaner, and more efficient.
          </motion.p>

          <motion.ol
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-lg space-y-3 list-disc list-inside"
          >
            <li><b>Bold & Ambitious:</b> To reshape the future of mobility through fearless hardware innovation and sustainable engineering.</li>
            <li><b>Technical & Precision-Focused:</b> To engineer smart, efficient, and scalable hardware solutions that drive the evolution of modern transportation.</li>
            <li><b>Eco-Driven & Future-Oriented:</b> To lead the shift toward sustainable mobility by building clean, intelligent, and impact-driven technologies.</li>
            <li><b>Startup Vibe & Grit:</b> To turn bold ideas into real machines — powering the future of mobility with purpose and hustle.</li>
          </motion.ol>
        </motion.div>
      </div>
    </div>
  );
};
export default Vision;