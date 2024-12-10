import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <header className="z-50 relative">
      <div
        className="fixed left-0 right-0 top-2 flex w-f justify-center border-gray-300/70 bg-gradient-to-b from-zinc-200 px-0 md:px-4 py-2 backdrop-blur-2xl dark:from-inherit lg:max-w-screen-lg lg:mx-auto rounded-full border bg-white/30 dark:bg-zinc-950/50 dark:border-gray-300/40 mx-4 lg:p-2 shadow-lg shadow-black/[0.03]"
      >
        <nav className="w-full max-w-screen-md mx-auto -translate-x-1 py-1 px-2 lg:px-0">
          <ul className="w-full flex flex-row justify-between items-center text-sm">
            <li>
              <Link
                className="hidden md:flex w-full items-center justify-center hover:text-gray-800 transition dark:hover:text-gray-300"
                href={"#home"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#about"}
                className="flex w-full items-center justify-center hover:text-gray-800 transition dark:hover:text-gray-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"#projects"}
                className="flex w-full items-center justify-center hover:text-gray-800 transition dark:hover:text-gray-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={"#experience"}
                className="flex w-full items-center justify-center hover:text-gray-800 transition dark:hover:text-gray-300"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href={"#contact"}
                className="flex w-full items-center justify-center hover:text-gray-800 transition dark:hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
