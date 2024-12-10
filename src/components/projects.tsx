"use client";

import { Accordion } from "merelyui";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Destructive",
    content: (
      <section className="p-4">
        <h1 className="text-xl font-medium">
          Destructive is a social media platform. It allows users to upload
          media that can be organized by hashtags. Can follow other users,
          search users by username and edit profiles.
        </h1>
        <div className="w-full grid grid-cols-3 grid-rows-2 md:grid-rows-1 md:grid-cols-6 justify-between items-center gap-4 py-4">
          <h3>✜ Next JS</h3>
          <h3>✜ Next Server Actions</h3>
          <h3>✜ Amazon S3</h3>
          <h3>✜ Prisma</h3>
          <h3>✜ Mongo DB</h3>
          <h3>✜ Tailwind CSS</h3>
        </div>
        <div className="w-full flex flex-row justify-start items-center">
          <Link
            className="hidden md:flex w-full items-center justify-center hover:text-gray-800 transition dark:hover:text-gray-300"
            href={"#home"}
          >
            Home
          </Link>
          <Link
            className="hidden md:flex w-full items-center justify-center hover:text-gray-800 transition dark:hover:text-gray-300"
            href={"#home"}
          >
            Home
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-1 py-4 h-full relative">
          <div className="w-full h-72 relative">
            <Image
              src="/destructive-one.png"
              alt="dsjk;l"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-72 relative">
            <Image
              src="/destructive-two.png"
              alt="dsjk;l"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-72 relative">
            <Image
              src="/destructive-three.png"
              alt="dsjk;l"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
        </div>
      </section>
    ),
  },
  {
    title: "Accordion Title 2",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        eligendi corrupti quo iure repellat? Quod odio aliquid, laborum modi
        tenetur repellendus esse numquam, ullam, quo minima quis dolorem dolore
        reiciendis?
      </p>
    ),
  },
];

export default function Projects() {
  return (
    <section className="max-w-screen-xl mx-auto py-4 md:p-0 min-h-screen h-full w-full">
      <Accordion data={data} />
    </section>
  );
}
