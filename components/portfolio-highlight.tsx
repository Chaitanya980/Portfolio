"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function PortfolioHighlight() {
  const { theme } = useTheme();

  const stats = [
    { label: "Lines of Code", value: 160000  },
    { label: "Projects", value: 17 },
    { label: "Cups of Coffee", value: 288 },
  ];

  return (
    <section
      className="relative w-full h-[500px] flex flex-col justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Stats strip */}
      <div className="relative z-10 mx-auto w-full max-w-5xl -mt-16 mb-8 px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/10 px-6 py-6 text-center backdrop-blur-md shadow-md"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-yellow-400">
                <CountUp end={s.value} duration={2} separator="," />
              </div>
              <div className="mt-2 text-sm uppercase tracking-wide text-gray-200">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-4 mt-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover My Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-6">
          I build robust backend systems, leverage AI/ML for insights, and craft
          cloud-native solutions
        </p>
        <a
          href="https://github.com/Chaitanya980"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
