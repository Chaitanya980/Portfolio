"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & {
  githubUrl?: string;
  alt?: string;
};

export default function Project({
  title,
  description,
  tags,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      {githubUrl ? (
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
          <section className="bg-gray-100 max-w-[30rem] border border-black/5 rounded-lg overflow-hidden sm:h-[15rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 cursor-pointer">
            <div className="pt-4 pb-7 px-5 sm:pt-6 flex flex-col h-full">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                {description}
              </p>
            </div>
          </section>
        </Link>
      ) : (
        <section className="bg-gray-100 max-w-[30rem] border border-black/5 rounded-lg overflow-hidden sm:h-[15rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pt-6 flex flex-col h-full">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
          </div>
        </section>
      )}
    </motion.div>
  );
}