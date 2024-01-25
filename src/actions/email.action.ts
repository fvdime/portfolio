"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/libs/utils";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

  const sender = formData.get("sender");
  const message = formData.get("message");

  // console.log(sender, message)

  if (!validateString(sender, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "fadime.dogrulj@gmail.com",
      subject: "Message from contact form",
      reply_to: sender,
      react: React.createElement(EmailTemplate, {
        message: message,
        sender: sender,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};