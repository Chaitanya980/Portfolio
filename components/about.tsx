"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[50rem] mx-auto px-6 py-10 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg text-center leading-8 sm:mb-40 scroll-mt-28 border border-white/10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>
        <span className="inline-flex items-center gap-2">
          About Me <span className="text-xl">💡</span>
        </span>
      </SectionHeading>

      <div className="space-y-6 text-gray-200">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          As a graduate student at{" "}
          <span className="font-semibold text-gradient">George Mason University</span>, I’m a passionate software
          developer who enjoys building{" "}
          <span className="font-semibold text-gradient">
            scalable, high-performance systems
          </span>{" "}
          that bridge intuitive frontend design with robust backend architecture.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          My experience spans{" "}
          <span className="font-semibold text-gradient">full-stack development</span> with{" "}
          <span className="font-semibold">React, Next.js, Node.js, and MongoDB</span>, along with cloud-native tools like{" "}
          <span className="font-semibold">AWS, Docker, and Kubernetes</span>. Through internships in web development and
          data analytics, I’ve developed practical skills and delivered real-world solutions—like{" "}
          <span className="font-semibold">Loopify</span>, a custom-built music streaming platform.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          What truly drives me is <span className="italic">curiosity</span>—especially in the realm of{" "}
          <span className="font-semibold text-gradient">AI and intelligent systems</span>. I’m actively exploring the
          integration of large language models into everyday tools and building AI-powered applications that solve
          real-world problems. Some projects I’m currently working on include:{" "}
          <span className="font-semibold">a multilingual fact-checking platform</span> to combat misinformation across global news using LLMs and vector databases, and{" "}
          <span className="font-semibold">a mental health journaling assistant</span> that uses NLP to detect emotional tone and suggest personalized mindfulness prompts. I enjoy diving into new technologies, optimizing backend architectures, and creating
          intuitive digital experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Beyond code, you’ll often find me immersed in{" "}
          <span className="font-semibold">video games</span>, experimenting with{" "}
          <span className="font-semibold">AI tools</span>, solving{" "}
          <span className="font-semibold">coding challenges</span>, or capturing life through the lens of my camera. I
          also write on{" "}
          <a
            href="https://medium.com/@chaitanya-chaudhari"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-400 transition"
          >
            Medium
          </a>
          , sharing my thoughts on technology, innovation, and my development journey.
        </motion.p>
      </div>
    </motion.section>
  );
}
