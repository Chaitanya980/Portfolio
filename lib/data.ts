import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import factchecker from "@/public/factchecker.png";
import f1 from "@/public/f1.png";
import dock from "@/public/dock.png";
import uni from "@/public/uni.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Development Intern",
    location: "Cognifront Software Pvt. Ltd ",
    description: [
      "Developed reusable UI components using JavaScript and React, improving development efficiency and ensuring consistent design across web applications.",
      "Optimized backend queries with PHP and MySQL, reducing API response times by 30% and enhancing application performance.",
      "Refactored database schema to streamline data retrieval, cutting query latency by 20% and improving scalability.",
      "Implemented responsive design enhancements using CSS and Tailwind CSS, increasing mobile user engagement by 15%.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023 - Mar 2023",
  },
  {
    title: "Data Science & Business Analytics Intern",
    location: "The Sparks Foundation",
    description: [
      "Built and deployed predictive machine learning models using Scikit-learn and TensorFlow, achieving a 20% improvement in model accuracy for business forecasting.",
      "Automated data cleaning and preprocessing pipelines with Python and Pandas, reducing manual effort by 25% and improving dataset quality.",
      "Designed and published interactive dashboards using Tableau and Power BI, enabling stakeholders to make data-driven decisions 30% faster.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2022 - Jan 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Fact Checker for Multilingual News",
    description:
      "Developing an AI-powered tool to combat misinformation by scrapping, translating and fact-checking news articles in English and Spanish",
    tags: ["Python", "MarianMT", "Streamlit", "JSON", "ChromaDB"],
    imageUrl: f1,
    githubUrl:"https://github.com/Chaitanya980",
  },
  {
    title: "UniSurvey",
    description:
      "A deployed survey application that enables feedback collection and analytics for campus use. Features a responsive UI, secure backend, and CI/CD pipeline with Docker for scalable deployment..",
    tags: ["MySQL (AWS RDS)", "Angular", "Spring Boot", "Tailwind", "CI/CD"],
    imageUrl: uni,
    githubUrl:"https://github.com/Chaitanya980/UniSurvey",
  },
  {
    title: "Zero-Downtime NGINX Architecture on AWS ",
    description:
      "A fault-tolerant web server setup designed to ensure continuous availability of NGINX services. ",
    tags: [""],
    imageUrl: uni,
    githubUrl:"https://github.com/Chaitanya980/Zero-Downtime-NGINX-Architecture-on-AWS-with-Keepalived",
  },
  {
    title: "DockPilot",
    description:
      "Generates production-ready Dockerfiles using AI, streamlining container setup with customizable prompts, secure builds, and automated deployment support.",
    tags: ["Python", "Ollama", "LLaMA 3", "Docker", "GitHub Actions"],
    imageUrl: dock,
    githubUrl:"https://github.com/Chaitanya980/DockPilot",
  },
  {
    title: "F1 Grand Prix Winner Prediction",
    description:
      "Built high-accuracy Gradient Boosting model with Scikit-learn and FastF1 to predict Formula 1 winners",
    tags: ["MySQL (AWS RDS)", "Angular", "Spring Boot", "Tailwind", "CI/CD"],
    imageUrl: uni,
    githubUrl:"https://github.com/Chaitanya980/F1-Grand-Prix-Winner-Prediction-System",
  },
  {
    title: "Loopify",
    description:
      "Loopify is a modern music web application built with React, Tailwind CSS, Redux, and RapidAPI, offering a seamless experience for music lovers. It features song searching, lyric exploration, and popular music discovery.",
    tags: ["MySQL (AWS RDS)", "Angular", "Spring Boot", "Tailwind", "CI/CD"],
    imageUrl: uni,
    githubUrl:"https://github.com/Chaitanya980/Loopify",
  },
] as const;
export const educationData = [
  {
    title: "Master's in Computer Science",
    institution: "George Mason University",
    location: "Fairfax, VA",
    grade: "3.8/4.0 GPA",
    date: "2024 - 2025 (Pursuing)",
  },
  {
    title: "Bachelor in Computer Engineering",
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    grade: "3.5/4.0 GPA",
    date: "2020 - 2024",
  },
  // {
  //   title: "Silver Oak Universal School ",
  //   location: "Nashik, India",
  //   grade: "3.8/4.0 GPA",
  //   date: "2018",
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;