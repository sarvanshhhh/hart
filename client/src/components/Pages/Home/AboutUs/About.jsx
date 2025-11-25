import React from 'react'
import { motion } from "framer-motion";
import { MdElectricCar } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import TronDisk from '../../../../model/tron-disk';
import { Canvas } from '@react-three/fiber';
import { staggerContainer, textVariant } from '../../../Motion.jsx';

const About = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-[#008080]/40 via-black to-black text-white">
            {/* Gradient: lighter teal (40% opacity) → deep black */}

            <hr style={{ width: "90%", height: "2px", backgroundColor: "#008080", marginTop: "3%" }} />
            <hr style={{ width: "70%", height: "2px", backgroundColor: "#008080", marginTop: "3px" }} />
            <hr style={{ width: "50%", height: "2px", backgroundColor: "#008080", marginTop: "3px" }} />

            <div className="mt-[5rem] z-30 w-full px-6">
                <motion.h1
                    variants={textVariant(0.2)}
                    className="text-3xl lg:text-5xl font-extrabold mb-6 text-center"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c2c2] to-[#00e6e6] drop-shadow-lg">
                        Know Us
                    </span>
                </motion.h1>



                    {/* Sub heading */}
                <motion.h2
  variants={textVariant(0.3)}
  className="text-lg lg:text-2xl italic font-medium text-center text-gray-300 mb-8"
>
  “Architects of the future, One innovation at a time.”
</motion.h2>

                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="flex flex-col lg:flex-row justify-between items-center gap-10"
                >
                    {/* Left Content */}
                    <div className="w-[90%] lg:w-[40%] lg:ml-20 space-y-4">
                        
                        <motion.p variants={textVariant(0.3)} className="text-gray-300 leading-relaxed">
                            Hartalkar Innovations Pvt. Ltd. is a forward-thinking hardware R&D company tackling
                            real-world challenges with bold innovation. We design advanced solutions across automotive,
                            Research and Development, and sustainable mobility.
                        </motion.p>
                        <motion.p variants={textVariant(0.3)} className="text-gray-300 leading-relaxed">
                            From electric SUVs to military-grade prototypes, we blend deep engineering expertise with
                            visionary thinking. Our focus lies in creating cutting-edge, eco-efficient, and
                            high-performance technologies that shape the future of mobility.
                        </motion.p>
                        <motion.p
                            variants={textVariant(0.4)}
                            className="text-lg lg:text-xl text-gray-400 lg:leading-2 mb-3 tracking-wide font-semibold"
                        >
                            Fueled by volts, forged for strength, designed for future.
                        </motion.p>

                        {/* Buttons */}
                        <div className="flex items-center gap-3">
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 2.5 }}
                                href="/contact"
                                className="bg-gradient-to-r from-[#008080] to-black p-[1px] rounded-full"
                            >
                                <button className="text-xs px-3 md:px-8 py-3 md:py-4 bg-black rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-white flex items-center gap-1 hover:gap-3 transition-all">
                                    <span>Contact Us</span>
                                    <RiContactsFill size={16} />
                                </button>
                            </motion.a>

                            <a href="/about">
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 2.5 }}
                                    className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-black to-[#008080] px-3 md:px-8 py-3 md:py-4 text-center text-sm md:text-sm font-medium uppercase tracking-wider text-white"
                                >
                                    <span>Know Us</span>
                                    <MdElectricCar size={16} />
                                </motion.button>
                            </a>
                        </div>
                    </div>

                    {/* Right Content (3D Tron Disk) */}
                    <div className="w-[80%] lg:w-[40%] h-[25rem]">
                        <Canvas>
                            <TronDisk />
                        </Canvas>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default About;
