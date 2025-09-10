"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number] & {
  githubUrl?: string;
  liveUrl?: string;
  alt?: string;
};

export default function Project({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  // Scroll reveal
  const revealRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: revealRef, offset: ["0 1", "1.33 1"] });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  // Parallax tilt
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5); // centered
  const my = useMotionValue(0.5); // centered
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 18 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0..1
    const y = (e.clientY - rect.top) / rect.height;  // 0..1
    mx.set(x);
    my.set(y);
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  function handleMouseLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  const hasActions = Boolean(githubUrl || liveUrl);

  return (
    <motion.div
      ref={revealRef}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group relative mb-3 sm:mb-8 last:mb-0"
    >
      {/* Glow border wrapper */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" as any }}
        className="rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/20 to-amber-400/25
                   transition-shadow duration-300 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.35)]"
      >
        {/* Card */}
        <section
          className="relative rounded-2xl overflow-hidden bg-gray-100/95 dark:bg-white/10 border border-black/5
                     sm:h-[15rem] max-w-[30rem] cursor-default backdrop-blur
                     transition-colors duration-300 hover:bg-gray-200/95 dark:hover:bg-white/20
                     focus-within:ring-2 focus-within:ring-indigo-500"
          tabIndex={0}
          aria-label={title}
        >
          {/* Spotlight underlay (keep below) */}
          <div
            className="card-spotlight absolute inset-0 z-0 opacity-0
                       group-hover:opacity-100 transition-opacity duration-300"
          />

          {/* Actions (Code / Live) – top-most */}
          {hasActions && (
            <div
              className="absolute right-3 top-3 z-20 flex items-center gap-2
                         opacity-0 -translate-y-1 transition-all duration-300
                         group-hover:opacity-100 group-hover:translate-y-0
                         group-focus-within:opacity-100 group-focus-within:translate-y-0"
            >
              {githubUrl && (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15
                             bg-white/10 px-3 py-1.5 text-xs font-medium text-gray-900 hover:bg-white/20
                             dark:text-gray-100 backdrop-blur-md
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <FiGithub className="text-base" />
                  <span>Code</span>
                </Link>
              )}
              {liveUrl && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium
                             bg-red-600/90 text-white hover:bg-red-600
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  <FiExternalLink className="text-base" />
                  <span>Live</span>
                </Link>
              )}
            </div>
          )}

          {/* Content (above spotlight, below action bar) */}
          <div
            className="relative z-10 pt-4 pb-7 px-5 sm:pt-6 flex flex-col h-full"
            style={{ transform: "translateZ(24px)" }}
          >
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>

            {tags.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-white/10 px-2 py-1 text-xs text-gray-600 dark:text-gray-300
                               transition-transform duration-200 hover:-translate-y-0.5"
                    style={{ transform: "translateZ(24px)" }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
