"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "./navigation-link";
import LanguageSwitchButton from "./language-switch-button";

type NavbarProps = {
  HomeLink: string;
  AboutLink: string;
  ProjectsLink: string;
  ExperienceLink: string;
  ContactLink: string;
};

const Navbar = ({
  HomeLink,
  AboutLink,
  ProjectsLink,
  ExperienceLink,
  ContactLink,
}: NavbarProps) => {
  return (
    <header className="z-50 relative">
      <motion.div
        className="fixed left-0 right-0 top-2 flex w-f justify-center border-gray-300/70 bg-gradient-to-b from-zinc-200 px-0 md:px-4 py-2 backdrop-blur-2xl dark:from-inherit lg:max-w-screen-lg lg:mx-auto rounded-full border bg-white/30 dark:bg-zinc-950/50 dark:border-gray-300/40 mx-4 lg:p-2 shadow-lg shadow-black/[0.03]"
        initial={{ y: -100, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
      >
        {/* lg:dark:bg-zinc-800/30 dark:border-zinc-400 */}
        <nav className="w-full max-w-screen-md mx-auto -translate-x-1 py-1 px-2 lg:px-0">
          <ul className="w-full flex flex-row justify-between items-center text-sm">
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="hidden md:flex w-full items-center justify-center hover:text-gray-800 transition dark:hover:text-gray-300"
                href={"#home"}
              >
                {HomeLink}
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={"#about"}
                className="flex w-full items-center justify-center hover:text-gray-800 transition dark:hover:text-gray-300"
              >
                {AboutLink}
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={"#projects"}
                className="flex w-full items-center justify-center hover:text-gray-800 transition dark:hover:text-gray-300"
              >
                {ProjectsLink}
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={"#experience"}
                className="flex w-full items-center justify-center hover:text-gray-800 transition dark:hover:text-gray-300"
              >
                {ExperienceLink}
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={"#contact"}
                className="flex w-full items-center justify-center hover:text-gray-800 transition dark:hover:text-gray-300"
              >
                {ContactLink}
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <LanguageSwitchButton
                enHref={"/"}
                deHref={"/"}
                esHref={"/"}
                jaHref={"/"}
              />
            </motion.li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
