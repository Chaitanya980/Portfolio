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
  { name: "Home", hash: "#home" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
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
    title: "Cloud Infrastructure Automation",
    description:
      " This project demonstrates a CI/CD pipeline using Terraform to provision AWS infrastructure and GitHub Actions to deploy a Dockerized Node.js app on EC2.",
    tags: ["Terraform", "Docker", "Node", "CI/CD", "GitHub Actions"],
    imageUrl: factchecker,                    
    githubUrl: "https://github.com/Chaitanya980/terraform",
    liveUrl: "",                               
  },
  {
    title: "Product Recommendation Engine ",
    description:
      "A Python-based product recommendation engine leveraging collaborative filtering and cosine similarity for personalized e-commerce suggestions.",
    tags: ["Python", "TF-IDF Vectorizatio", "Scikit-learn"],
    imageUrl: factchecker,                    
    githubUrl: "https://github.com/Chaitanya980/Product-Recommendation-Engine",
    liveUrl: "",                               
  },
  {
    title: "Fact Checker for Multilingual News",
    description:
      "Developing an AI-powered tool to combat misinformation by scrapping, translating and fact-checking news articles in English and Spanish",
    tags: ["Python", "MarianMT", "Streamlit", "JSON", "ChromaDB"],
    imageUrl: factchecker,                    
    githubUrl: "https://github.com/Chaitanya980/AI-Fact-Check-For-Multilingual-News",
    liveUrl: "",                               
  },
  {
    title: "UniSurvey",
    description:
      "A deployed survey application that enables feedback collection and analytics for campus use. Features a responsive UI, secure backend, and CI/CD pipeline with Docker for scalable deployment..",
    tags: ["MySQL (AWS RDS)", "Angular", "Spring Boot", "Tailwind", "CI/CD"],
    imageUrl: uni,
    githubUrl: "https://github.com/Chaitanya980/UniSurvey",
    liveUrl: "",                               
  },
  {
    title: "Zero-Downtime NGINX Architecture on AWS",
    description:
      "A fault-tolerant web server setup designed to ensure continuous availability of NGINX services.",
    tags: ["AWS", "NGINX", "Keepalived", "HAProxy"],
    imageUrl: rmtdevImg,                       // pick any banner you prefer
    githubUrl:
      "https://github.com/Chaitanya980/Zero-Downtime-NGINX-Architecture-on-AWS-with-Keepalived",
    liveUrl: "",                               // infra project usually has no live demo
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive multi-page portfolio and interactive highlights. Built using Next.js, React, and Tailwind CSS, and deployed on Vercel for fast, reliable performance across devices.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    imageUrl: dock,
    githubUrl: "",
    liveUrl: "",                               // add if you host a demo
  },
  {
    title: "DockPilot",
    description:
      "Generates production-ready Dockerfiles using AI, streamlining container setup with customizable prompts, secure builds, and automated deployment support.",
    tags: ["Python", "Ollama", "LLaMA 3", "Docker", "GitHub Actions"],
    imageUrl: dock,
    githubUrl: "https://github.com/Chaitanya980/DockPilot",
    liveUrl: "",                               // add if you host a demo
  },
  {
    title: "F1 Grand Prix Winner Prediction",
    description:
      "Built high-accuracy Gradient Boosting model with Scikit-learn and FastF1 to predict Formula 1 winners",
    tags: ["Python", "Scikit-learn", "FastF1", "Pandas"],
    imageUrl: f1,                              // was uni
    githubUrl:
      "https://github.com/Chaitanya980/F1-Grand-Prix-Winner-Prediction-System",
    liveUrl: "",                               // add if you have a Streamlit app etc.
  },
  {
    title: "Loopify",
    description:
      "Loopify is a modern music web application built with React, Tailwind CSS, Redux, and RapidAPI, offering a seamless experience for music lovers.",
    tags: ["React", "Redux", "Tailwind", "RapidAPI"],
    imageUrl: wordanalyticsImg,                // or keep `uni` if you prefer
    githubUrl: "https://github.com/Chaitanya980/Loopify",
    liveUrl: "",                               // e.g., "https://loopify.vercel.app"
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
