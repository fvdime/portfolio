"use client";

import React, { useState } from "react";
import { Link } from "./navigation-link";

type LanguageSwitchButtonProps = {
  enHref: string;
  deHref: string;
  esHref: string;
  jaHref: string;
};

const LanguageSwitchButton = ({
  enHref,
  deHref,
  esHref,
  jaHref,
}: LanguageSwitchButtonProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-0 m-0 w-full h-full flex items-center justify-center">
      <button
        className="dark:text-white text-black focus:outline-none hover:scale-110 active:scale-105 transition-all ease-in duration-500"
        type="button"
        onClick={() => setOpenModal(!openModal)}
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M478.33,433.6l-90-218a22,22,0,0,0-40.67,0l-90,218a22,22,0,1,0,40.67,16.79L316.66,406H419.33l18.33,44.39A22,22,0,0,0,458,464a22,22,0,0,0,20.32-30.4ZM334.83,362,368,281.65,401.17,362Z" />
          <path d="M267.84,342.92a22,22,0,0,0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73,39.65-53.68,62.11-114.75,71.27-143.49H330a22,22,0,0,0,0-44H214V70a22,22,0,0,0-44,0V90H54a22,22,0,0,0,0,44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-31.41-41.68-43.08-68.65-43.17-68.87a22,22,0,0,0-40.58,17c.58,1.38,14.55,34.23,52.86,83.93.92,1.19,1.83,2.35,2.74,3.51-39.24,44.35-77.74,71.86-93.85,80.74a22,22,0,1,0,21.07,38.63c2.16-1.18,48.6-26.89,101.63-85.59,22.52,24.08,38,35.44,38.93,36.1a22,22,0,0,0,30.75-4.9Z"></path>
        </svg>
      </button>
      {openModal && (
        <div>
          <div className="z-20 absolute right-1 md:right-0 top-10 divide-y divide-zinc-100 rounded-lg w-32 bg-gray-200/60 border border-gray-300/70 backdrop-blur-md shadow-lg dark:bg-white/20 dark:border-gray-100/40">
            <ul className="p-2 text-xs font-bold">
              <li>
                <Link
                  href={enHref}
                  locale="en"
                  className="w-full flex flex-row justify-start gap-1 items-center hover:bg-white/5 p-1 rounded mb-1"
                >
                  <span className="border border-zinc-400 rounded-3xl px-1.5 py-0.5">
                    EN
                  </span>
                  <span>English</span>
                </Link>
              </li>
              <li>
                <Link
                  href={deHref}
                  locale="de"
                  className="w-full flex flex-row justify-start gap-1 items-center hover:bg-white/5 p-1 rounded mb-1"
                >
                  <span className="border border-zinc-400 rounded-3xl px-1.5 py-0.5">
                    DE
                  </span>
                  <span>Deutsch</span>
                </Link>
              </li>
              <li>
                <Link
                  href={esHref}
                  locale="es"
                  className="w-full flex flex-row justify-start gap-1 items-center hover:bg-white/5 p-1 rounded mb-1"
                >
                  <span className="border border-zinc-400 rounded-3xl px-1.5 py-0.5">
                    ES
                  </span>
                  <span>Español</span>
                </Link>
              </li>
              <li>
                <Link
                  href={jaHref}
                  locale="ja"
                  className="w-full flex flex-row justify-start gap-1 items-center hover:bg-white/5 p-1 rounded mb-1"
                >
                  <span className="border border-zinc-400 rounded-3xl px-1.5 py-0.5">
                    JA
                  </span>
                  <span>日本語</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitchButton;
