"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { RiMediumFill } from "react-icons/ri";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

// Small helper to render gradient-highlighted words inline
function Highlight({
  children,
  gradient,
}: {
  children: React.ReactNode;
  gradient:
    | "backend"
    | "cloud"
    | "ml"
    | "net"
    | "dist";
}) {
  const map: Record<string, string> = {
    backend: "from-amber-400 via-orange-400 to-red-500",
    cloud: "from-sky-400 via-cyan-400 to-indigo-500",
    ml: "from-fuchsia-400 via-pink-400 to-rose-500",
    net: "from-emerald-400 via-teal-400 to-cyan-500",
    dist: "from-blue-400 via-indigo-400 to-violet-500",
  };
  return (
    <span className={`bg-gradient-to-r ${map[gradient]} bg-clip-text text-transparent font-semibold`}>
      {children}
    </span>
  );
}

export default function Intro() {
  const titles = ["Software Developer", "Cloud‑Native Developer", "AI Explorer"];
  const titleColors = ["text-teal-400", "text-sky-400", "text-fuchsia-400"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);

  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {/* Optional Profile Image */}
            {/* <Image
              src="/images/profile.jpg"
              alt="Chaitanya Chaudhari"
              width={160}
              height={160}
              quality={95}
              priority
              className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover border-[0.5rem] border-white shadow-xl"
            /> */}
          </motion.div>
        </div>
      </div>

      <div className="mb-10 mt-4 px-4">
        <motion.h1
          className="mb-2 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello 👋
        </motion.h1>

        <motion.h1
          className="mb-3 text-5xl font-bold !leading-[1.2] sm:text-6xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          I am Chaitanya Chaudhari
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.h2
            key={titles[currentTitleIndex]}
            className={`mb-4 text-2xl font-semibold !leading-[1.5] sm:text-3xl ${
              titleColors[currentTitleIndex]
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {titles[currentTitleIndex]}
          </motion.h2>
        </AnimatePresence>

        <motion.p
          className="text-lg font-medium !leading-[1.7] sm:text-xl text-gray-800 dark:text-white/80"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          My work spans{" "}
          <Highlight gradient="backend">backend</Highlight>,{" "}
          <Highlight gradient="cloud">cloud architecture</Highlight>,{" "}
          <Highlight gradient="ml">machine learning</Highlight>,{" "}
          <Highlight gradient="net">networking</Highlight>, and{" "}
          <Highlight gradient="dist">distributed systems</Highlight> — all
          geared toward secure, scalable software. Currently pursuing my
          Master’s in Computer Science at <span className="font-semibold">George Mason University</span>.
        </motion.p>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black dark:bg-white/10"
          href="/images/ChaitanyaChaudhari_Resume.pdf"
          download="ChaitanyaChaudhari_Resume.pdf"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/chaudhari-chaitanya"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Chaitanya980"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://medium.com/@chaitanya-chaudhari"
          target="_blank"
        >
          <RiMediumFill />
        </a>
      </motion.div>
    </section>
  );
}
