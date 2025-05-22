"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";

export default function PortfolioHighlight() {
  const { theme } = useTheme();

  return (
    <section className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover My Portfolio</h1>
        <p className="text-lg md:text-xl mb-6">I build robust backend systems, leverage AI/ML for insights, and craft cloud-native solutions</p>
        <a href="https://github.com/Chaitanya980" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300">
          GitHub
        </a>
      </div>
    </section>
  );
}