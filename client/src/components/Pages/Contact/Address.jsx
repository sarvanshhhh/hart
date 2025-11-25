import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from '../../Motion';

const Address = () => {
    return (
        <div className='pt-20'>
            
            <div
                initial="hidden"
                animate="show"
                variants={staggerContainer}
                className='mainBox flex flex-col lg:flex-row lg:mx-auto my-5 lg:my-0 text-sm gap-9 w-[80%] lg:w-[80%]'>
  
            </div>
        </div>
    )
}

export default Address