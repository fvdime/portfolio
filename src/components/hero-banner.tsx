import React from "react";
import { Link } from "merelyui";

const HeroBanner = () => {
  return (
    <section className="h-[90vh] md:h-[95vh] w-full">
      <div className="h-full w-full">
        <div className="w-full h-full max-w-screen-lg mx-auto p-4 lg:py-2 flex items-center justify-between flex-col text-black dark:text-white">
          <section className="w-full h-full flex flex-col items-center justify-center mx-auto gap-2 my-8 md:text-6xl text-center flex-wrap text-4xl">
            <div className="w-full flex flex-row justify-center md:justify-start items-end gap-4 uppercase">
              <h1>I am Fadime</h1>
              <span className="text-xs hidden md:flex">
                and I&apos;m a<br />
              </span>
            </div>
            <h1 className="font-semibold text-5xl md:text-7xl italic uppercase">
              Full Stack Developer
            </h1>
            <div className="w-full flex flex-row justify-center md:justify-end items-end gap-4 uppercase">
              <span className="text-xs hidden md:flex">
                I&apos;d say that I enjoy developing
                <br />
                mobile and web applications.
              </span>
              <h1>©2025</h1>
            </div>
            <div className="md:w-1/2 text-xs md:text-sm text-center pt-16 flex flex-row items-center justify-between gap-8">
              <Link
                label="LinkedIn"
                href="https://www.linkedin.com/in/fadimedogrul/"
                target="_blank"
              />
              <Link
                label="GitHub"
                href="https://github.com/fvdime"
                target="_blank"
              />
              <Link
                label="Download Cv"
                href="/Fadime-Dogrul-Resume.pdf"
                download
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
