"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Experience = () => {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  return (
    <motion.div 
    style={{
      scale: scaleProgress,
      opacity: opacityProgress,
    }}
    id='experience'
    className='max-w-screen-sm mx-auto px-16 lg:px-0 my-16'>
      <h1 className="text-center uppercase font-bold text-2xl mb-8">Experience</h1>     
      <ol className="relative border-s border-gray-700 dark:border-gray-200">                  
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:border-white dark:bg-gray-200"></div>
          <time className="text-sm font-normal leading-none text-gray-600 dark:text-gray-300">February 2022</time>
          <h3 className="text-md font-semibold text-gray-900 my-2 dark:text-white">
            Application UI code in Tailwind CSS</h3>
          <p className="mb-8 text-base font-normal text-gray-600 dark:text-gray-300">Get access to over 20+ pages including a dashboard layout, charts, board, calendar, and pre-order E-commerce & Marketing pages.</p>
        </li>
      </ol>
    </motion.div>
  )
}

export default Experience