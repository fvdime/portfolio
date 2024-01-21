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

const About = () => {
  return (
    <motion.section
      className="my-16 max-w-screen-sm mx-auto text-start leading-16 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h1 className="text-center uppercase font-bold text-2xl mb-4">About me</h1>
      <p className="mb-2 px-16 lg:px-0">
        After graduating with a degree in{" "}
        <span className="font-semibold">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p className="px-16 lg:px-0">
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I am also
        learning how to play the guitar.
      </p>

      <div className="mt-16 w-full h-full flex flex-row justify-between items-center px-16 lg:px-0 gap-4">
        <Image
        src="/3.jpg"
        width={256}
        height={256}
        alt="img"
        />
        <span className="text-end font-bold text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div className="px-16 lg:px-0 mt-16">
      <h1 className="text-center uppercase font-bold text-2xl mb-4">my skills</h1>
        <ul className="flex flex-wrap justify-center px-4 py-2 text-sm gap-2">
          {skillsData.map((skill, index) => (
          <motion.li
          // bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500
            className=" border text-whie rounded-3xl px-5 py-2 "
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
  )
}

export default About