"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactButton from "./contact";
import Navbar from "./navbar";

const menu = {
  open: {
    width: "400px",
    height: "600px",
    top: "-4px",
    right: "-4px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed right-4 top-4 z-[999]">
      <motion.div
        className="w-[400px] lg:w-[600] h-[600px] bg-black dark:bg-white relative rounded-3xl"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Navbar />}</AnimatePresence>
      </motion.div>
      <ContactButton
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
