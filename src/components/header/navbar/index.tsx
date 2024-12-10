"use client";

import ContactForm from "@/components/contact-form";
import { motion } from "framer-motion";

export default function Navbar() {
  const slideIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.75,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
    },
  };

  return (
    <div className="flex flex-col justify-end p-8 h-full box-border">
      <div className="[perspective:120px] [perspective-origin:bottom]">
        <motion.div
          variants={slideIn}
          initial="initial"
          animate="enter"
          exit="exit"
          className="w-full h-full flex justify-center items-center"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}
