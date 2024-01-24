"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ExperienceProps = {
  Title: string
  ExpTitle: string
  ExpDesc: string
  ExpCompany: string
  Duration: string
  Location: string
  EducationTitle: string
  SchoolName: string
  SchoolDesc: string
  SchoolLocation: string
  SchoolDuration: string
}

const Experience = ({ Title, ExpTitle, ExpDesc, ExpCompany, Duration, Location, EducationTitle, SchoolName, SchoolDesc, SchoolLocation, SchoolDuration }: ExperienceProps) => {

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
    className='max-w-screen-sm mx-auto px-16 lg:px-0 my-16 scroll-mt-24'>
      <h1 className="text-center uppercase font-bold text-2xl mb-8">{Title}</h1>     
      <ol className="relative border-s border-gray-700 dark:border-gray-200">
        {/* EDUCATION */}
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:border-white dark:bg-gray-200"></div>
          <time className="text-sm font-normal leading-none text-gray-600 dark:text-gray-300">{SchoolDuration}</time>
          <h3 className="text-md font-semibold text-gray-900 my-2 dark:text-white">{SchoolName} - {SchoolLocation}</h3>
          <p className="mb-8 text-base font-normal text-gray-600 dark:text-gray-300">{SchoolDesc}</p>
        </li>
        {/* EXPERIENCE */}
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:border-white dark:bg-gray-200"></div>
          <time className="text-sm font-normal leading-none text-gray-600 dark:text-gray-300">{Duration}</time>
          <h3 className="text-md font-semibold text-gray-900 my-2 dark:text-white">{ExpCompany} - {ExpTitle}</h3>
          <p className="mb-8 text-base font-normal text-gray-600 dark:text-gray-300">{ExpDesc}</p>
        </li>
      </ol>
    </motion.div>
  )
}

export default Experience