"use client";

import { sendEmail } from "@/actions/email.action";
import React from "react";
import toast from "react-hot-toast";
import { Input, TextArea } from "merelyui";

const ContactForm = () => {
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
    <div className="w-full h-full flex flex-col items-center justify-center text-white dark:text-black">
      <h1 className="uppercase font-bold text-2xl">
        I would love to hear from you!
      </h1>
      <form
        className="w-full h-full flex flex-col dark:text-black mt-8"
        onSubmit={handleSubmit}
      >
        <Input
          htmlFor="email"
          underline
          transparent
          fullWidth
          name="sender"
          type="email"
          required
          maxLength={500}
          placeholder="Email"
          style="text-white dark:text-black"
        />
        <TextArea
          htmlFor="message"
          underline
          transparent
          fullWidth
          name="message"
          placeholder="Your Message"
          required
          maxLength={5000}
          style="text-white dark:text-black"
        />
        <button
          type="submit"
          className="w-full bg-zinc-100 text-black py-2.5 rounded outline-none hover:bg-zinc-200 transition duration-500 shadow focus:ring-2 scale-100 hover:scale-[0.99] active:scale-[0.99] focus:outline-none focus:ring-blue-200 font-medium text-sm dark:text-white dark:bg-zinc-950 dark:hover:bg-zinc-900 mt-4"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
