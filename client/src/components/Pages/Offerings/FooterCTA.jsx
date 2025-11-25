import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from '../../Motion';

const FooterCTA = () => {
  return (
    <div className="relative">
      {/* Footer CTA Section */}
      <motion.footer
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-32 px-6 relative overflow-hidden z-10 rounded-t-3xl border-t border-cyan-400/20"
        style={{
          // Cyan to black gradient with transparency
          background: "linear-gradient(135deg, rgba(28, 252, 252, 0.7) 0%, rgba(0,0,0,0.3) 100%)",
          backdropFilter: "blur(2px)",           // strong blur for glass effect
          WebkitBackdropFilter: "blur(25px)",
        }}
      >
        <div className="container mx-auto relative text-center">
          {/* Heading */}
          <motion.h2
            variants={textVariant(0.1)}
            className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg"
          >
            Driving the <span className="text-cyan-400">Future</span> of Mobility
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={textVariant(0.2)}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-200/80"
          >
            From autonomous driving to smart energy systems, we are building 
            solutions that make transportation safer, greener, and more connected.  
            Partner with us to turn innovation into impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={textVariant(0.3)}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            {/* Transparent Primary Button */}
            <motion.a
              whileHover={{
                scale: 1.05,
                borderColor: "#00ffff",
                boxShadow: "0 0 20px rgba(0,255,255,0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-xl font-bold text-lg 
                         text-white border border-white/30 
                         bg-transparent transition-all duration-300"
              href="/contact"
            >
              Get in Touch
            </motion.a>

            {/* Transparent Secondary Button */}
            <motion.a
              whileHover={{
                scale: 1.05,
                borderColor: "#00ffff",
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.84)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-xl font-bold text-lg 
                         text-white border border-white/30 
                         bg-transparent transition-all duration-300"
              href="/about"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}

export default FooterCTA;
