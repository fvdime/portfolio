"use client";

import React from "react";
import { Link } from "./navigation-link";

type HeroBannerProps = {
  Title: string;
  Description: string;
  ContactLabel: string;
  DownloadLabel: string;
};

const HeroBanner = ({
  Title,
  Description,
  ContactLabel,
  DownloadLabel,
}: HeroBannerProps) => {
  return (
    <section id="home" className="h-[90vh] md:h-[85vh] relative">
      <div className="w-64 h-[70vh] rounded-full bg-indigo-200 dark:bg-zinc-800 absolute z-[-1] top-1/4 left-0 translate-x-[-20%] translate-y-[-40%] blur-[96px] rotate-12 flex dark:hidden" />
      <div className="w-64 h-[70vh] rounded-full bg-indigo-200 dark:bg-zinc-800 absolute z-[-1] top-3/4 right-0 translate-x-[-20%] translate-y-[-40%] blur-[96px] rotate-12 hidden md:flex dark:hidden" />
      <div className="w-64 h-[40vh] lg:h-full rounded-full dark:bg-indigo-950 absolute z-[-1] top-1/4 right-0 md:right-4 translate-x-[-50%] translate-y-[-50%] blur-[96px] rotate-45 hidden dark:flex" />

      <div className="max-w-screen-lg mx-auto h-full flex flex-col justify-center items-center pt-16">
        <h1 className="uppercase font-bold text-2xl">{Title}</h1>
        <h1 className="mb-8 mt-4 px-8 lg:text-2xl font-medium !leading-[1.5] text-xl text-center">
          {Description}
        </h1>
        <div className="mb-8 w-full flex flex-row items-center gap-2 px-8">
          <span className="border-b w-full border-gray-400 dark:border-zinc-700" />
          <span className="text-xl">⁠✜</span>
          <span className="border-b w-full border-gray-400 dark:border-zinc-700" />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-sm font-semibold">
          <Link
            href="#contact"
            className="group w-44 text-center bg-indigo-900 text-white py-2.5 flex justify-center items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-indigo-950 active:scale-105 transition"
          >
            ✦<span className="mx-1">{ContactLabel}</span>✦
          </Link>

          <button className="group bg-white w-44 py-2.5 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10">
            <a href="/Fadime-Dogrul-Resume.pdf" download>
              ✧<span className="mx-1">{DownloadLabel}</span>✧
            </a>
          </button>
          {/* SOCIALS */}
          <div className="flex flex-row items-center justify-center gap-2">
            {/* LINKEDIN */}
            <Link
              className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/fadimedogrul/"
              target="_blank"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            {/* GITHUB */}
            <Link
              className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com/fvdime"
              target="_blank"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
