import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen bg-hero-pattern">
        {/* Title "GALLERY" */}
        <div className="absolute w-full py-10 flex justify-center text-orange-600 font-bold text-3xl font-mono">
           GALLERY
        </div>

        
        <h1 className="flex absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-bold text-zinc-900 text-[10vw] leading-none tracking-widest items-center">
         
         <motion.span
            className="text-[10vw] leading-none mr-5"
            animate={{
              scale: [1, 1.9, 1], // Heart grows and shrinks
            }}
            transition={{
              duration: 1.9, // Time for one pulsation
              repeat: Infinity, // Repeat indefinitely
              repeatType: 'loop', // Keep pulsating
              ease: 'easeInOut', // Smooth scaling
            }}
          >
            ❤️
          </motion.span>

          FLOATING iMAGE GALLERY

          {/* Pulsating Heart Emoji */}
          <motion.span
            className="text-[10vw] leading-none"
            animate={{
              scale: [1, 1.9, 1], // Heart grows and shrinks
            }}
            transition={{
              duration: 1.9, // Time for one pulsation
              repeat: Infinity, // Repeat indefinitely
              repeatType: 'loop', // Keep pulsating
              ease: 'easeInOut', // Smooth scaling
            }}
          >
            ❤️
          </motion.span>
        </h1>
      </div>
    </>
  );
};

export default Background;

