"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/libs/data";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

type AboutProps = {
  Title: string;
  Description: string;
  SecondPart: string;
  SkillsTitle: string;
};

const About = ({
  Title,
  Description,
  SecondPart,
  SkillsTitle,
}: AboutProps) => {
  return (
    <motion.section
      className="my-16 max-w-screen-md mx-auto text-start leading-16 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h1 className="text-center uppercase font-bold text-2xl mb-4">{Title}</h1>
      <p className="mb-2 px-16 lg:px-0">{Description}</p>

      <p className="px-16 pt-4 lg:px-0">{SecondPart}</p>
      <div className="mt-24">
        <h1 className="text-center uppercase font-bold text-2xl mb-4">
          {SkillsTitle}
        </h1>
        <ul className="flex flex-wrap justify-center px-4 py-2 text-sm gap-2">
          {skillsData.map((skill, index) => (
            <motion.li
              // bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500
              className="px-4 py-2"
              // dark:bg-white/10 dark:text-white/80
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default About;
