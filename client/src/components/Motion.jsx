// motion.js
import { motion } from 'framer-motion';

// Stagger container
export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren: staggerChildren || 0.1,
            delayChildren: delayChildren || 0,
        },
    },
});

// Text variant
export const textVariant = (delay) => ({
    hidden: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay: delay || 0,
        },
    },
});

// Fade in
export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: type || 'tween',
            delay: delay || 0,
            duration: duration || 1,
            ease: 'easeOut',
        },
    },
});

// Zoom in
export const zoomIn = (delay, duration) => ({
    hidden: {
        scale: 0.9,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'tween',
            delay: delay || 0,
            duration: duration || 0.5,
            ease: 'easeOut',
        },
    },
});

// Slide in
export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
            type: type || 'tween',
            delay: delay || 0,
            duration: duration || 0.5,
            ease: 'easeOut',
        },
    },
});

// Rotate variants
export const rotateVariant = (delay, duration) => ({
    hidden: {
        rotate: 0,
    },
    show: {
        rotate: 360,
        transition: {
            delay: delay || 0,
            duration: duration || 10,
            repeat: Infinity,
            ease: 'linear',
        },
    },
});

// Bounce variants
export const bounceVariant = (delay) => ({
    hidden: {
        y: 0,
    },
    show: {
        y: [0, -15, 0],
        transition: {
            delay: delay || 0,
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
        },
    },
});

// Card hover variants
export const cardHover = {
    hover: {
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

// Button hover variants
export const buttonHover = {
    hover: {
        scale: 1.05,
        boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)',
        transition: {
            duration: 0.2,
        },
    },
    tap: {
        scale: 0.95,
    },
};

// Background image parallax
export const parallaxVariant = {
    hidden: {
        scale: 1.2,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: 'easeOut',
        },
    },
};

// Stagger children with different directions
export const staggerChildren = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Child variants for stagger
export const childVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

// Export all variants
export default {
    staggerContainer,
    textVariant,
    fadeIn,
    zoomIn,
    slideIn,
    rotateVariant,
    bounceVariant,
    cardHover,
    buttonHover,
    parallaxVariant,
    staggerChildren,
    childVariant,
};