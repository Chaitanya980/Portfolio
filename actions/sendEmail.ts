"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const senderName = formData.get("senderName");
  const message = formData.get("message");

  // Server-side validation
  if (!validateString(senderName, 100)) {
    return {
      error: "Invalid sender name",
    };
  }
  if (!validateString(senderEmail, 500)) {
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
      to: "chaitanyac598@gmail.com",
      subject: `Message from ${senderName} via Contact Form`,
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderName: senderName as string,
        senderEmail: senderEmail as string,
        message: message as string,
      }),
    });
    console.log("Email sent successfully:", data); // Debug success
  } catch (error: unknown) {
    console.error("Email send error:", error); // Debug error
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};