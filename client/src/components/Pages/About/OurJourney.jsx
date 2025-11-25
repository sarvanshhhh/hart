import React from "react";
import './Journey.css';
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from '../../Motion';

const gradientTextStyle = {
    background: 'linear-gradient(90deg, #00eaff 0%, #0047ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
};

const timelineData = [
    {
        date: "2021",
        title: "Our Humble Beginnings",
        text: "The journey started with brainstorming ideas to tackle inefficiencies in electric SUVs, such as limited battery range and heavyweight designs. The focus was on integrating sustainability with advanced technology.",
        imgSrc: "images/About/Beginning.jpg",
    },
    {
        date: "2021-2022",
        title: "Research and Market Analysis",
        text: "Extensive research was conducted on EV technology, market demand, and competition. Surveys helped identify key pain points, guiding the business strategy and product design.",
        imgSrc: "images/About/market-research.jpg",
        inverted: true,
    },
    {
        date: "2022-2024",
        title: "Product Development and Designing",
        text: "Work began on the chassis and essential components, focusing on lightweight materials and efficiency. Smart features like AI diagnostics, geo-fencing, and voice commands were incorporated.",
        imgSrc: "images/About/Development.jpg",
    },
    {
        date: "May 28, 2024",
        title: "Company Formation",
        text: "The company was officially established to streamline operations and secure investments. Business expansion strategies and revenue streams were also planned.",
        imgSrc: "images/About/Formation.jpg",
        inverted: true,
    },
    {
        date: "2025",
        title: "Market Launch",
        text: "The first product launch is set for 2025, marking its entry into the market. The focus will be on sales through online platforms, showrooms, and fleet distribution.",
        imgSrc: "images/About/Launch.jpg",
    },
];

const Timeline = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={staggerContainer}
            className="container relative z-50"
        >
            {/* Heading */}
            <motion.div
                variants={textVariant(0.2)}
                className="text-center"
            >
                <motion.h2
                    variants={textVariant(0.3)}
                    className="text-4xl font-bold mb-2"
                >
                    Our <span style={gradientTextStyle}>Journey</span>
                </motion.h2>
                <h3 className="section-subheading text-muted">
                    Where our Ideas Ignite
                </h3>
            </motion.div>

            <ul className="timeline">
                {timelineData.map((item, index) => (
                    <motion.li
                        key={index}
                        className={item.inverted ? "timeline-inverted" : ""}
                        initial={{ opacity: 0, x: item.inverted ? 100 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ type: 'spring', stiffness: 50, damping: 20, duration: 0.8 }}
                    >
                        {/* 🔹 Added Glow Effect Here */}
                        <div
                            className="timeline-image bg-cover bg-center rounded-full relative overflow-hidden flex items-center justify-center"
                            style={{
                                backgroundImage: `url(${item.imgSrc})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '180px',
                                height: '180px',
                                boxShadow: '0 0 25px rgba(0, 234, 255, 0.6)',
                                border: '3px solid #00eaff',
                            }}
                        >
                            {/* 🔹 Overlay for subtle tint */}
                            <div className="absolute inset-0 bg-black/30 rounded-full"></div>
                        </div>

                        <div className="timeline-panel ml-[30rem] lg:m-0 pl-30 lg:p-0">
                            <div className="timeline-heading">
                                <h4>{item.date}</h4>
                                <h4 className="subheading">{item.title}</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">{item.text}</p>
                            </div>
                        </div>
                    </motion.li>
                ))}

                {/* Final glowing disk (already had effect) */}
                <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                    className="timeline-inverted"
                >
                    <div
                        className="timeline-image bg-cover bg-center rounded-full relative overflow-hidden flex items-center justify-center"
                        style={{
                            backgroundImage: `url('images/About/bepart.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '180px',
                            height: '180px',
                            boxShadow: '0 0 25px rgba(0, 234, 255, 0.6)',
                            border: '3px solid #00eaff',
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50 rounded-full"></div>
                        <h4
                            className="relative text-white font-bold text-center leading-snug"
                            style={{
                                textShadow: '0 0 8px rgba(0,0,0,0.8)',
                                fontSize: '1.1rem',
                                zIndex: 10,
                            }}
                        >
                            Be Part
                            <br /> Of Our
                            <br /> Story!
                        </h4>
                    </div>
                </motion.li>
            </ul>
        </motion.div>
    );
};

export default Timeline;
