"use client"

import { sendEmail } from '@/actions/email.action';
import React from 'react'

const ContactForm = () => {
  return (
    <div
    id='contact'
    className='max-w-screen-sm mx-auto px-16 lg:px-0 my-16'
    >
      <span className='w-full flex flex-col md:flex-row justify-evenly items-center my-4 gap-4 md:gap-1'>
        <pre>
        ✦ . ⁺  . ✦ . ⁺ . ✦
        </pre>
        <h1 className="text-center uppercase font-bold text-2xl">let&apos;s keep in touch</h1>
        <pre>
        ✦ . ⁺  . ✦ . ⁺ . ✦
        </pre>
      </span>
      <p className="text-gray-700 dark:text-white/90 text-sm text-center">
        Please contact me through this form.
        {/* directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or  */}
      </p>
      <form
        className="mt-4 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            // toast.error(error);
            return;
          }

          // toast.success("Email sent successfully!");
        }}
      >
        <input
          className="py-2 px-4 rounded-lg dark:bg-white/10 border border-zinc-300 dark:border-white/20 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-sm text-sm dark:text-white"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-48 my-2 rounded-lg border border-zinc-300 p-4 dark:bg-white/10 dark:border-white/20 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-sm text-sm dark:text-white"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button type="submit" className="w-full bg-gray-900 text-white py-2.5 rounded-full outline-none hover:bg-gray-950 transition duration-300 shadow hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm ark:bg-blue-600 ark:hover:bg-blue-700 ark:focus:ring-blue-800 mt-4">Send</button>
      </form>
    </div>
  )
}

export default ContactForm