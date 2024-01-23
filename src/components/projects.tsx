import { projectsData } from "@/libs/data";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className='max-w-screen-sm mx-auto px-16 lg:px-0 "scroll-mt-28'
    >
      <h1 className="text-center uppercase font-bold text-2xl mb-8">
        My Projects
      </h1>

      <div className="max-w-screen-sm mx-auto h-full flex flex-col gap-4 items-center justify-center">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col lg:flex-row justify-between md:items-center border border-zinc-300 rounded-lg shadow-md hover:shadow-lg shadow-zinc-300 dark:shadow-white/10 dark:border-white/20 p-4"
          >
            <div className="flex flex-col h-full w-full lg:w-1/2 p-1 md:p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="my-2 leading-relaxed text-gray-700 dark:text-white/90 text-sm">
                {project.description}
              </p>
              <ul className="flex flex-wrap my-2 md:my-4 gap-1 md:gap-2">
                {project.tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] dark:bg-white/30 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/90"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              height={256}
              width={256}
              src={project.source}
              alt="project image"
              className="object-cover w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
