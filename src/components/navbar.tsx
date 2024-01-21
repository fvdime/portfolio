"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Link } from './navigation-link'

const Navbar = () => {
  return (
    <header className="z-50 relative">
      <motion.div className='fixed left-0 right-0 top- top-2 flex w-f justify-center border-gray-300/70 bg-gradient-to-b from-zinc-200 px-4 py-2 backdrop-blur-2xl dark:from-inherit lg:max-w-screen-lg lg:mx-auto rounded-full border bg-white/30 mx-4 lg:p-2 shadow-lg shadow-black/[0.03]'
      initial={{ y: -100, x: 0, opacity: 0 }}
      animate={{ y: 0, x: 0, opacity: 1 }}
      >
        {/* lg:dark:bg-zinc-800/30 dark:border-zinc-400 */}
        <nav className='w-full max-w-screen-md mx-auto -translate-x-1 px-4 lg:px-0'>
          <ul className='w-full flex flex-row justify-between items-center text-sm'>
            <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            >
              <Link className='flex w-full items-center justify-center hover:text-gray-950 transition' href={"#home"}>Home</Link>
            </motion.li>
            <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            >
              <Link href={"#home"} className='flex w-full items-center justify-center hover:text-gray-950 transition'>About</Link>
            </motion.li>
            <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            >
              <Link href={"#home"} className='flex w-full items-center justify-center hover:text-gray-950 transition'>Projects</Link>
            </motion.li>
            <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            >
              <Link href={"#home"} className='flex w-full items-center justify-center hover:text-gray-950 transition'>Experience</Link>
            </motion.li>
            <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            >
              <Link href={"#home"} className='flex w-full items-center justify-center hover:text-gray-950 transition'>Contact</Link>
            </motion.li>
          </ul>
        </nav>
      </motion.div>
    </header>
  )
}

export default Navbar