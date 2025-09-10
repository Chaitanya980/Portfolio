"use client";

import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  codeUrl?: string;
  liveUrl?: string;
  className?: string;
  children?: React.ReactNode; // optional thumbnail/img
};

export default function ProjectCard({
  title,
  description,
  codeUrl,
  liveUrl,
  className,
  children,
}: Props) {
  const hasAnyAction = codeUrl || liveUrl;

  return (
    <article
      className={clsx(
        "group relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md backdrop-blur-sm transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-0.5 dark:bg-gray-900/40 dark:border-black/30",
        "focus-within:ring-2 focus-within:ring-indigo-500",
        className
      )}
      tabIndex={0}
      aria-label={title}
    >
      {/* Optional visual/thumbnail area */}
      {children && (
        <div className="mb-4 overflow-hidden rounded-xl relative">
          <div className="aspect-[16/9]">{children}</div>

          {/* Gradient veil on hover for better contrast */}
          {hasAnyAction && (
            <div
              className={clsx(
                "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
                "group-hover:opacity-100 group-focus-within:opacity-100",
                "bg-gradient-to-t from-black/60 via-black/30 to-transparent"
              )}
            />
          )}
        </div>
      )}

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-300 leading-relaxed">{description}</p>

      {/* Hover / focus actions */}
      {hasAnyAction && (
        <div
          className={clsx(
            "pointer-events-none absolute right-3 top-3 flex items-center gap-2",
            "opacity-0 translate-y-[-4px] transition-all duration-300",
            "group-hover:opacity-100 group-hover:translate-y-0",
            "group-focus-within:opacity-100 group-focus-within:translate-y-0"
          )}
          aria-hidden="true"
        >
          {codeUrl && (
            <Link
              href={codeUrl}
              target="_blank"
              className={clsx(
                "pointer-events-auto inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium",
                "bg-white/10 backdrop-blur-md border border-white/15",
                "hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                "text-gray-100"
              )}
            >
              <FiGithub className="text-base" aria-hidden />
              <span>Code</span>
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className={clsx(
                "pointer-events-auto inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium",
                "bg-red-600/90 hover:bg-red-600 text-white",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              )}
            >
              <FiExternalLink className="text-base" aria-hidden />
              <span>Live</span>
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
