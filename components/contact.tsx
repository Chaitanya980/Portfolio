"use client";

import React, { useState, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [pending, setPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    const formData = new FormData(event.currentTarget);

    try {
      const result = await sendEmail(formData);
      if (result.error) {
        toast.error(result.error);
        return;
      }

      if (result.data) {
        toast.success("Email sent successfully!");
        formRef.current?.reset();
      } else {
        toast.error("Unexpected server response. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,80rem)] text-center mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      {/* 💬 CTA Message */}
      <p className="text-lg text-gray-700 dark:text-white/80 mb-6">
        I’d love to hear from you — whether you have a question, opportunity, or just want to say hi!
      </p>

      {/* Grid Layout for Contact and Blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Details and Form Column */}
        <div>
          {/* 📞 Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-sm sm:text-base">
            <div className="flex flex-col items-center justify-center bg-gray-800 text-white py-4 px-6 rounded-xl shadow">
              <FaPhone className="mb-1 text-xl text-teal-400" />
              +1 (571) 603-9977
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-800 text-white py-4 px-6 rounded-xl shadow">
              <FaEnvelope className="mb-1 text-xl text-teal-400" />
              <a className="underline" href="mailto:chaitanyac598@gmail.com">
                chaitanyac598@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-800 text-white py-4 px-6 rounded-xl shadow">
              <FaMapMarkerAlt className="mb-1 text-xl text-teal-400" />
              Fairfax, VA
            </div>
          </div>

          {/* 📝 Form Section */}
          <form
            ref={formRef}
            className="flex flex-col gap-4 dark:text-black bg-white/10 dark:bg-white/5 p-6 rounded-xl backdrop-blur-sm shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <FaUser className="absolute left-3 top-4 text-gray-500" />
              <input
                className="w-full h-14 pl-10 pr-4 rounded-lg border dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="senderName"
                type="text"
                required
                maxLength={100}
                placeholder="Your name"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-500" />
              <input
                className="w-full h-14 pl-10 pr-4 rounded-lg border dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />
            </div>

            <div className="relative">
              <textarea
                className="w-full h-40 pt-3 px-4 rounded-lg border dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
              />
              <FaPaperPlane className="absolute right-3 bottom-3 text-gray-400" />
            </div>

            <SubmitBtn pending={pending} />
          </form>
        </div>

        {/* Blogs Column */}
        <div
          className="bg-cover bg-center p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center h-full mt-6 md:mt-0"
          style={{
            backgroundImage: "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fbackground.html&psig=AOvVaw2ibqr5WgQsZCktAId8z5gP&ust=1754528920920000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCPC30N3_9I4DFQAAAAAdAAAAABAE')", // Placeholder image
          }}
        >
          <div className="bg-black bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-4 text-white">Blogs</h2>
            <p className="text-lg text-gray-200 mb-6">
              I share insights on my tech journey, coding tips, and personal milestones to inspire and inform.
            </p>
            <Link href="https://chaitanya-chaudhari.medium.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
              Visit My Blogsite
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}