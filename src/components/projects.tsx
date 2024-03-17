import { projectsData } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectsProps = {
  Title: string;
};

const Projects = ({ Title }: ProjectsProps) => {
  return (
    <section
      id="projects"
      className="max-w-screen-sm mx-auto px-4 lg:px-0 scroll-mt-24"
    >
      <h1 className="text-center uppercase font-bold text-2xl mb-8">{Title}</h1>

      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col justify-between md:items-center border border-zinc-300 rounded-lg shadow-md hover:shadow-lg shadow-zinc-200 dark:shadow-white/5 dark:border-white/10 p-4"
          >
            <div className="group relative m-0 flex h-80 w-full rounded-xl shadow-xl ring-gray-900/5">
              <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-90 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                <Image
                  height={256}
                  width={512}
                  src={project.source}
                  alt="project image"
                  className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <Link
                  href={project.live}
                  target="_blank"
                  className="text-sm font-medium text-gray-200 shadow-xl text-center bg-indigo-900 py-2 px-8 rounded-full outline-none hover:bg-indigo-950 flex flex-row items-center gap-2"
                >
                  See Live <p className="-rotate-45">➺</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col h-full w-full p-4">
              <Link
                href={project.github}
                target="_blank"
                className="text-xl font-semibold hover:underline"
              >
                {project.title}
              </Link>
              <p className="my-2 leading-relaxed text-gray-700 dark:text-white/90 text-sm">
                {project.description}
              </p>
              <ul className="flex flex-wrap my-2 md:my-4 gap-1 md:gap-2">
                {project.tags.map((tag, index) => (
                  <li
                    className="text-[0.7rem] font-medium uppercase tracking-wider text-gray-700 dark:text-white/90"
                    key={index}
                  >
                    ✧{tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
