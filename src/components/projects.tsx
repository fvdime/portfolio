"use client";

import { Accordion, Button } from "merelyui";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "MerelyUI Documentation",
    content: (
      <section className="px-2 py-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          This guide will help you understand what MerelyUI has to offer. How to
          use its components. Tips for making your user interface stand out.
          It’s written to be beginner-friendly, focusing on real-world examples
          and clear explanations. Whether you are a student or an experienced
          developer, you&apos;ll find it useful!
        </h1>
        <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-cols-6 md:grid-rows-1 justify-between items-center gap-4 my-8">
          <h3>✜ Next JS</h3>
          <h3>✜ Javascript</h3>
          <h3>✜ MerelyUI</h3>
          <h3>✜ Tailwind CSS</h3>
        </div>
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <Link
            href="https://merelyui.vercel.app/components/quickstart"
            target="_blank"
          >
            <Button>See Live</Button>
          </Link>
          <Link
            href="https://github.com/fvdime/merelyui-website"
            target="_blank"
          >
            <Button>Source Code</Button>
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-1 my-4 h-full relative">
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/doc-one.png"
              alt="merelyui-documentation"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/doc-two.png"
              alt="merelyui-documentation"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/doc-three.png"
              alt="merelyui-documentation"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
        </div>
      </section>
    ),
  },
  {
    title: "MerelyUI",
    content: (
      <section className="px-2 py-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          MerelyUI is a React UI component library. Open-source, free, and
          customizable. There are twenty-seven components that are ready to use.
          Lightweight and fast, customizable components, responsive Design and
          easy to use. Also, MerelyUI is used on this website.
        </h1>
        <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-rows-1 md:grid-cols-6 justify-between items-center gap-4 py-8">
          <h3>✜ Vite</h3>
          <h3>✜ Storybook</h3>
          <h3>✜ Typescript</h3>
          <h3>✜ Tailwind CSS</h3>
        </div>
        <div className="w-full flex flex-row justify-start items-center mb-4 gap-4">
          <Link href="https://www.npmjs.com/package/merelyui" target="_blank">
            <Button>NPM</Button>
          </Link>
          <Link href="https://github.com/fvdime/merelyui" target="_blank">
            <Button>Source Code</Button>
          </Link>
        </div>
      </section>
    ),
  },
  {
    title: "Destructive",
    content: (
      <section className="px-2 py-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          Destructive is a social media platform. Users can upload media that
          can be categorized using hashtags. Editing profiles, searching users
          by username, and following other users are all possible.
        </h1>
        <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-rows-1 md:grid-cols-6 justify-between items-center gap-4 my-8">
          <h3>✜ Next JS</h3>
          <h3>✜ Next Server Actions</h3>
          <h3>✜ Amazon S3</h3>
          <h3>✜ Prisma</h3>
          <h3>✜ Mongo DB</h3>
          <h3>✜ Tailwind CSS</h3>
        </div>
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <Link href="https://destructive-five.vercel.app/" target="_blank">
            <Button>See Live</Button>
          </Link>
          <Link href="https://github.com/fvdime/destructive" target="_blank">
            <Button>Source Code</Button>
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-1 my-4 h-full relative">
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/des-one.png"
              alt="destructive"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/des-two.png"
              alt="destructive"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/des-three.png"
              alt="destructive"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
        </div>
      </section>
    ),
  },
  {
    title: "Eloquent Studio",
    content: (
      <section className="px-2 py-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          Eloquent Studio®, your go-to destination for an eclectic mix of
          thought-provoking articles, inspiring stories, and innovative
          concepts. Here, we believe in the power of ideas to shape the world
          around us and ignite change.
        </h1>
        <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-rows-1 md:grid-cols-6 justify-between items-center gap-4 my-8">
          <h3>✜ Next JS</h3>
          <h3>✜ Typescript</h3>
          <h3>✜ Amazon S3</h3>
          <h3>✜ Prisma</h3>
          <h3>✜ PostgreSQL</h3>
          <h3>✜ Docker</h3>
        </div>
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <Link href="https://eloquent-ruddy.vercel.app/" target="_blank">
            <Button>See Live</Button>
          </Link>
          <Link href="https://github.com/fvdime/eloquent" target="_blank">
            <Button>Source Code</Button>
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-1 my-4 h-full relative">
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/el-one.png"
              alt="eloquent-studio"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/el-two.png"
              alt="eloquent-studio"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/el-three.png"
              alt="eloquent-studio"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
        </div>
      </section>
    ),
  },
  {
    title: "Rendezvous",
    content: (
      <section className="px-2 py-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          Rendezvous, our final thesis project, was developed using Next.js,
          PostgreSQL, and Prisma. It enables users to create either business or
          personal accounts. The platform is a comprehensive online appointment
          scheduling solution designed to help businesses grow, automate daily
          tasks, boost productivity, and manage schedules efficiently in one
          place.
        </h1>
        <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-rows-1 md:grid-cols-6 justify-between items-center gap-4 my-8">
          <h3>✜ Next JS</h3>
          <h3>✜ Next Server Actions</h3>
          <h3>✜ Amazon S3</h3>
          <h3>✜ Prisma</h3>
          <h3>✜ PostgreSQL</h3>
          <h3>✜ Docker</h3>
        </div>
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <Link href="https://rendezvous-mocha.vercel.app/" target="_blank">
            <Button>See Live</Button>
          </Link>
          <Link
            href="https://github.com/eloquent-studio/rendezvous"
            target="_blank"
          >
            <Button>Source Code</Button>
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-1 my-4 h-full relative">
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/rend-one.jpg"
              alt="rendezvous"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/rend-two.jpg"
              alt="rendezvous"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/rend-three.jpg"
              alt="rendezvous"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
        </div>
      </section>
    ),
  },
  {
    title: "TheFaya",
    content: (
      <section className="px-2 py-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          At TheFaya, you&apos;ll find a collection of my creative artworks,
          each piece a reflection of me. Every content on this site is crafted
          by my hands and made with -`♡´-. TheFaya—where creativity knows no
          bounds.
        </h1>
        <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-rows-1 md:grid-cols-6 justify-between items-center gap-4 my-8">
          <h3>✜ Next JS</h3>
          <h3>✜ Javascript</h3>
          <h3>✜ Amazon S3</h3>
          <h3>✜ Prisma</h3>
          <h3>✜ Mongo DB</h3>
          <h3>✜ Tailwind CSS</h3>
        </div>
        <div className="w-full flex flex-row justify-start items-center">
          <Link href="https://github.com/fvdime/art-exhibition" target="_blank">
            <Button>Source Code</Button>
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-1 my-4 h-full relative">
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/the-faya-one.png"
              alt="thefaya"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/the-faya-two.png"
              alt="thefaya"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/the-faya-three.png"
              alt="thefaya"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
        </div>
      </section>
    ),
  },
  {
    title: "MOAI",
    content: (
      <section className="px-2 py-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          MOAI, where we focus on users asking questions and receiving answers,
          tried to work in an interactive and information-sharing environment.
          We wanted to provide the best user experience.
        </h1>
        <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-rows-1 md:grid-cols-6 justify-between items-center gap-4 my-8">
          <h3>✜ Next JS</h3>
          <h3>✜ Next Server Actions</h3>
          <h3>✜ Next-Intl</h3>
          <h3>✜ Prisma</h3>
          <h3>✜ Mongo DB</h3>
          <h3>✜ Tailwind CSS</h3>
        </div>
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <Link href="https://moai-ten.vercel.app/en" target="_blank">
            <Button>See Live</Button>
          </Link>
          <Link
            href="https://github.com/mustafakemalgordesli/moai"
            target="_blank"
          >
            <Button>Source Code</Button>
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-1 my-4 h-full relative">
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/moai.png"
              alt="moai"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/moai-two.png"
              alt="moai"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
          <div className="w-full h-52 md:h-72 relative">
            <Image
              src="/moai-three.png"
              alt="moai"
              fill
              className="w-full h-full rounded absolute object-contain"
            />
          </div>
        </div>
      </section>
    ),
  },
  {
    title: "Go Backend",
    content: (
      <section className="px-2 py-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          The keen-go-backend repository is a backend project built using the Go
          programming language. For data management, it offers CRUD (Create,
          Read, Update, Delete) functionality. It uses the Gin web framework, a
          lightweight and fast HTTP framework for building APIs. It implements
          JSON Web Tokens (JWT) for secure user authentication. And it provides
          endpoints for basic CRUD operations, allowing you to create, read,
          update, and delete data.
        </h1>
        <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-rows-1 md:grid-cols-6 justify-between items-center gap-4 my-8">
          <h3>✜ Go</h3>
          <h3>✜ Gin</h3>
          <h3>✜ Mongo DB</h3>
          <h3>✜ JWT</h3>
        </div>
        <div className="w-full flex flex-row justify-start items-center mb-4 gap-4">
          <Link
            href="https://github.com/fvdime/keen-go-backend"
            target="_blank"
          >
            <Button>Source Code</Button>
          </Link>
        </div>
      </section>
    ),
  },
  {
    title: "Nest JS Backend",
    content: (
      <section className="px-2 py-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          The douzo-backend repository is a backend project developed using
          NestJS alongside tools and frameworks for efficient API development.
          The backend is implemented with NestJS. It utilizes Prisma as the
          Object-Relational Mapping (ORM) tool for database interactions. It
          implements create, read, update, and delete operations.
        </h1>
        <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-rows-1 md:grid-cols-6 justify-between items-center gap-4 my-8">
          <h3>✜ Nest Js</h3>
          <h3>✜ PostgreSQL</h3>
          <h3>✜ Docker</h3>
        </div>
        <div className="w-full flex flex-row justify-start items-center mb-4 gap-4">
          <Link href="https://github.com/fvdime/douzo-backend" target="_blank">
            <Button>Source Code</Button>
          </Link>
        </div>
      </section>
    ),
  },
];

export default function Projects() {
  return (
    <section className="max-w-screen-xl mx-auto p-4 md:p-0 min-h-screen h-full w-full">
      <Accordion data={data} />
    </section>
  );
}
