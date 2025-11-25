import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from '../../Motion';

const Banner = () => {
    return (
        <motion.section
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="relative min-h-screen text-white flex items-center justify-start"
        >
            <div className="fixed inset-0 -z-40 overflow-hidden">
                <video
                    className="w-full h-full object-cover opacity-1"
                    src="/images/Home/Hero1.mp4"
                    autoPlay
                    loop
                    muted
                ></video>
            </div>
            <div className=" h-[106vh] absolute inset-0" style={{ backgroundColor: "var(--background)", backdropFilter: "blur(2px)", opacity: "0.1" }}></div>
            <div className="relative z-10 text-left ml-36">
                <div className="flex flex-col justify-start items-start text-white mb-6">
                    <motion.p
                        className="text-2xl lg:text-3xl font-bold text-pink-300 lg:leading-10 mb-3 tracking-widest"
                        style={{ color: "var(--primary-text-color)" }}
                        variants={textVariant(0.1)}
                    >
                        Electric is the future, we
                    </motion.p>
                    <motion.h1
                        className="text-3xl lg:text-5xl font-bold lg:tracking-wider lg:leading-snug"
                        variants={textVariant(0.2)}
                        style={{ color: "var(--primary-text-color)" }}>
                        <span className="text-customBlue" style={{ fontFamily: 'Azonix' }}>Hartalkar Innovations</span>
                    </motion.h1>
                    <motion.p
                        variants={textVariant(0.3)}
                        className="text-xl lg:text-2xl text-gray-400 lg:leading-2 mb-3 tracking-wide">
                        writing its blueprint
                    </motion.p>
                </div>
            </div>
        </motion.section>
    );
};

export default Banner;