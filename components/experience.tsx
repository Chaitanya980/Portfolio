"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline
        lineColor={theme === "light" ? "#d1d5db" : "#4b5563"}
      >
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light" ? "#1f2937" : "rgba(255, 255, 255, 0.05)",
              color: theme === "light" ? "#fff" : "rgba(255, 255, 255, 0.9)",
              borderRadius: "1rem",
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "1.4rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #4b5563"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
              color: theme === "light" ? "#000" : "#fff",
            }}
            position={index % 2 === 0 ? "left" : "right"}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.015 }}
            >
              <h3 className="text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-teal-400 font-medium mt-1">
                {item.location}
              </p>

              

              <ul className="mt-4 list-disc pl-5 text-gray-300 dark:text-white/80 text-sm space-y-2">
                {item.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
