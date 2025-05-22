"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import {
  FaCode,
  FaCloud,
  FaBrain,
  FaUserFriends,
} from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const skillCategories = [
    {
      icon: <FaCode />,
      title: "Technical Skills",
      description: "Languages, frameworks, and databases I use to build robust systems.",
      color: "bg-gradient-to-r from-cyan-700 to-blue-700",
      skills: [
        "React.js & Redux",
        "Next.js & TypeScript",
        "Node.js & Express.js",
        "MongoDB & MySQL",
        "JWT Authentication & REST APIs",
      ],
    },
    {
      icon: <FaCloud />,
      title: "DevOps & Cloud",
      description: "Tools and platforms I use to deploy, scale, and automate systems.",
      color: "bg-gradient-to-r from-indigo-600 to-purple-700",
      skills: [
        "AWS (EC2, RDS, S3)",
        "Docker & Kubernetes",
        "CI/CD (GitHub Actions, Jenkins)",
        "Terraform & Rancher",
        "Vercel & Netlify",
      ],
    },
    {
      icon: <FaUserFriends />,
      title: "Soft Skills & Tools",
      description: "Collaboration and productivity strengths I bring to technical teams.",
      color: "bg-gradient-to-r from-green-600 to-emerald-700",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Agile & Scrum",
        "Git & Linux CLI",
        "JIRA & Notion",
      ],
    },
    {
      icon: <FaBrain />,
      title: "AI/ML Skills",
      description: "Technologies and models I use to create intelligent applications.",
      color: "bg-gradient-to-r from-pink-600 to-red-600",
      skills: [
        "Natural Language Processing",
        "LLMs (LLaMA 3, OpenAI API)",
        "Predictive Modeling",
        "LangChain & Chroma",
        "Streamlit & MarianMT",
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Skills</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={`p-6 rounded-xl shadow-lg text-white ${cat.color} hover:scale-[1.02] transition-transform duration-300`}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
              {cat.icon} {cat.title}
            </h3>
            <p className="text-sm text-white/80 mb-4 italic">{cat.description}</p>
            <ul className="space-y-2 list-disc list-inside text-white/90 text-[0.95rem]">
              {cat.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
