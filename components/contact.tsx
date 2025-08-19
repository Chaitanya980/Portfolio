"use client";

import React, { useState, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";

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
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,80rem)] mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      aria-label="Contact section"
    >
      {/* Section header */}
      <div className="text-center">
        <SectionHeading>Contact Me</SectionHeading>
        <p className="mx-auto mt-2 max-w-2xl text-base sm:text-lg text-gray-700 dark:text-white/80">
          I’d love to hear from you — whether you have a question, opportunity, or just want to say hi!
        </p>
      </div>

      {/* Content grid */}
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* LEFT: Cards + Form */}
        <div className="space-y-6">
          {/* Contact cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Phone */}
            <a
              href="tel:+15716039977"
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-sm backdrop-blur-sm transition hover:shadow-md hover:bg-white/10 active:scale-[0.99] dark:border-white/10"
            >
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-sky-500 text-white">
                <FaPhone />
              </div>
              <p className="text-sm text-gray-200">+1 (571) 603-9977</p>
              <span className="mt-1 inline-block text-xs text-gray-400 group-hover:text-gray-300">
                Tap to call
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:chaitanyac598@gmail.com"
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-sm backdrop-blur-sm transition hover:shadow-md hover:bg-white/10 active:scale-[0.99] dark:border-white/10"
            >
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-500 text-white">
                <FaEnvelope />
              </div>
              <p className="truncate text-sm text-gray-200">
                chaitanyac598@gmail.com
              </p>
              <span className="mt-1 inline-block text-xs text-gray-400 group-hover:text-gray-300">
                Tap to email
              </span>
            </a>

            {/* Location */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-sm backdrop-blur-sm dark:border-white/10">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                <FaMapMarkerAlt />
              </div>
              <p className="text-sm text-gray-200">Fairfax, VA</p>
              <span className="mt-1 inline-block text-xs text-gray-400">
                United States
              </span>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm dark:border-white/10"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Name */}
              <label className="relative block">
                <span className="mb-1 block text-sm font-medium text-gray-300">
                  Your name
                </span>
                <span className="pointer-events-none absolute left-3 top-10 text-gray-500">
                  <FaUser />
                </span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/80 pl-10 pr-3 py-3 text-gray-800 outline-none ring-0 transition focus:border-transparent focus:ring-2 focus:ring-teal-400 dark:bg-white/90"
                  name="senderName"
                  type="text"
                  placeholder=""
                  maxLength={100}
                  required
                  aria-label="Your name"
                />
              </label>

              {/* Email */}
              <label className="relative block">
                <span className="mb-1 block text-sm font-medium text-gray-300">
                  Your email
                </span>
                <span className="pointer-events-none absolute left-3 top-10 text-gray-500">
                  <FaEnvelope />
                </span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/80 pl-10 pr-3 py-3 text-gray-800 outline-none ring-0 transition focus:border-transparent focus:ring-2 focus:ring-teal-400 dark:bg-white/90"
                  name="senderEmail"
                  type="email"
                  placeholder=""
                  maxLength={320}
                  required
                  aria-label="Your email"
                />
              </label>
            </div>

            {/* Message */}
            <label className="relative mt-4 block">
              <span className="mb-1 block text-sm font-medium text-gray-300">
                Your message
              </span>
              <textarea
                className="h-40 w-full resize-y rounded-xl border border-white/10 bg-white/80 px-3 py-3 text-gray-800 outline-none transition focus:border-transparent focus:ring-2 focus:ring-teal-400 dark:bg-white/90"
                name="message"
                placeholder="Tell me a bit about your project or question…"
                maxLength={5000}
                required
                aria-label="Your message"
              />
              <FaPaperPlane className="pointer-events-none absolute bottom-3 right-3 text-gray-500" />
            </label>

            <div className="mt-4">
              <SubmitBtn pending={pending} />
            </div>
          </form>
        </div>

        {/* RIGHT: Blog CTA */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-sm">
          {/* soft glow */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h2 className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-4xl font-bold text-transparent">
              Blogs
            </h2>
            <p className="mt-3 max-w-md text-gray-300">
              I share insights from real projects—cloud tips, backend patterns,
              ML experiments, and lessons learned along the way.
            </p>

            <Link
              href="https://chaitanya-chaudhari.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20 hover:ring-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Visit My Blogsite
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13 5h6a1 1 0 0 1 1 1v6h-2V8.414l-9.293 9.293-1.414-1.414L16.586 7H13V5z" />
              </svg>
            </Link>

            {/* mini list of recent topics (static placeholders; swap if you fetch) */}
            <ul className="mt-6 w-full max-w-sm space-y-2 text-left text-sm text-gray-300/90">
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                • Docker Compose for multi‑service dev
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                • Designing JWT auth cleanly with Node/Express
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                • Serving PyTorch models with FastAPI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
