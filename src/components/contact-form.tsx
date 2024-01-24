"use client";

import { sendEmail } from "@/actions/email.action";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

type ContactProps = {
  Title: string;
  Description: string;
  Email: string;
  TextArea: string;
  ButtonLabel: string;
  Thanks: string;
};

const ContactForm = ({
  Title,
  Description,
  Email,
  TextArea,
  ButtonLabel,
  Thanks,
}: ContactProps) => {

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");

    // Reset the form after successful submission
    event.target.reset();
  };
  
  return (
    <div
      id="contact"
      className="max-w-screen-sm mx-auto px-16 lg:px-0 py-16 scroll-mt-24"
    >
      <span className="w-full flex flex-col md:flex-row justify-evenly items-center my-4 gap-4 md:gap-1">
        <pre>
          {/* ✦ . ⁺  . ✦ . ⁺ . ✦ */}
          ˚｡⋆°.˚.𐀔˚.★⋆.˚✭*.
        </pre>
        <h1 className="text-center uppercase font-bold text-2xl">{Title}</h1>
        <pre>˚✦.˚.❀˚.★⋆♱.˚*;༊</pre>
      </span>
      <p className="text-gray-700 dark:text-white/90 text-sm text-center">
        {Description}
      </p>
      <form
        className="mt-4 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="py-2 px-4 rounded-lg dark:bg-white/10 border border-zinc-300 dark:border-white/20 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-sm text-sm dark:text-white"
          name="sender"
          type="email"
          required
          maxLength={500}
          placeholder={Email}
        />
        <textarea
          className="h-48 my-2 rounded-lg border border-zinc-300 p-4 dark:bg-white/10 dark:border-white/20 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-sm text-sm dark:text-white"
          name="message"
          placeholder={TextArea}
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2.5 rounded-full outline-none hover:bg-gray-950 transition duration-300 shadow hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm ark:bg-blue-600 ark:hover:bg-blue-700 ark:focus:ring-blue-800 mt-4"
        >
          {ButtonLabel}
        </button>
      </form>

      <div className="mt-16 w-full h-full flex flex-col  md:flex-row justify-between items-center px-16 lg:px-0 gap-4">
        <Image
          src="/3.jpg"
          width={256}
          height={256}
          alt="img"
          className="h-auto w-auto object-cover"
        />
        <span className="text-center md:text-end font-bold text-3xl">
          {Thanks}
        </span>
      </div>
    </div>
  );
};

export default ContactForm;
