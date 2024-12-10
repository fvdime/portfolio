"use client";

import { motion } from "framer-motion";

export default function ContactButton({
  isActive,
  toggleMenu,
}: {
  isActive: boolean;
  toggleMenu: any;
}) {
  return (
    <div className="absolute top-0 right-0 w-[100px] h-[40px] cursor-pointer overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="relative w-full h-full flex items-center justify-center group text-white dark:text-black"
          onClick={() => toggleMenu()}
        >
          <PerspectiveText label="Contact" />
        </div>
        <div
          className="relative w-full h-full rounded-3xl bg-white dark:bg-black flex items-center justify-center group"
          onClick={() => toggleMenu()}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({
  label,
}: {
  label: string;
}) {
  return (
    <div className="overflow-hidden flex flex-col justify-center items-center w-full h-full perspective group-hover:rotate-x-90 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]">
      {/* Top Text */}
      <p
        className={`absolute inset-0 flex items-center justify-center transition-transform ease-in-out duration-1000 group-hover:-translate-y-full translate-y-0 m-0`}
      >
        {label}
      </p>
      {/* Bottom Text */}
      <p
        className={`absolute inset-0 transition-transform ease-in-out duration-1000 flex items-center justify-center translate-y-full group-hover:translate-y-0`}
      >
        {label}
      </p>
    </div>
  );
}
