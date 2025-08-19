"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  BrainCircuit,
  ServerCog,
  Boxes,
  CheckCircle2,
} from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.5, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

type PillProps = { label: string };
const Pill = ({ label }: PillProps) => (
  <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white/70 dark:bg-white/5 backdrop-blur">
    {label}
  </span>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-2">
    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
    <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
      {children}
    </span>
  </li>
);

const Deco = () => (
  <svg
    viewBox="0 0 400 300"
    className="h-40 w-auto md:h-48 lg:h-56 drop-shadow-sm"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
      <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#F43F5E" />
      </linearGradient>
    </defs>
    <rect x="20" y="30" width="180" height="110" rx="16" fill="url(#g1)" />
    <circle cx="290" cy="85" r="55" fill="url(#g2)" />
    <rect x="80" y="170" width="260" height="90" rx="18" fill="#0ea5e91a" />
    <g fill="#111827" fillOpacity="0.12">
      <circle cx="60" cy="210" r="14" />
      <circle cx="110" cy="210" r="8" />
      <rect x="140" y="200" width="50" height="8" rx="4" />
    </g>
  </svg>
);

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="relative scroll-mt-20 py-14 md:py-20"
      aria-label="What I Do"
    >
      {/* Lightened background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-gray-900 dark:to-gray-800" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={item}
          className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-gray-100 dark:text-white"
        >
          What I Do ?
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-300/90 dark:text-gray-400"
        >
          A snapshot of the areas I build in — from cloud platforms and ML to
          reliable backends and enterprise systems.
        </motion.p>

        {/* Grid of bands */}
        <div className="mt-8 space-y-8">
          {/* Cloud */}
          <motion.div
            variants={item}
            className="grid items-center gap-6 rounded-2xl border border-black/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto,1fr]">
              <Deco />
              <div>
                <div className="flex items-center gap-3">
                  <Cloud className="h-6 w-6 text-sky-400" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-100">
                    Cloud Computing
                  </h3>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "GCP",
                    "Azure",
                    "Docker",
                    "Kubernetes",
                    "Terraform",
                  ].map((t) => (
                    <Pill key={t} label={t} />
                  ))}
                </div>

                <ul className="mt-4 space-y-2">
                  <Bullet>
                    Deployed apps on VMs & serverless; wired up managed DBs and
                    queues.
                  </Bullet>
                  <Bullet>
                    Built PaaS style environments for ML/HPC workloads with IaC
                    (Terraform).
                  </Bullet>
                  <Bullet>
                    Designed pod‑to‑pod comms & network policies for secure K8s
                    clusters.
                  </Bullet>
                  <Bullet>
                    Automated blue‑green and rolling releases with GitHub
                    Actions.
                  </Bullet>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ML & AI */}
          <motion.div
            variants={item}
            className="grid items-center gap-6 rounded-2xl border border-black/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto,1fr]">
              <Deco />
              <div>
                <div className="flex items-center gap-3">
                  <BrainCircuit className="h-6 w-6 text-fuchsia-400" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-100">
                    Machine Learning & AI
                  </h3>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "PyTorch",
                    "TensorFlow",
                    "Keras",
                    "NLP",
                    "GenAI",
                    "Time‑Series",
                  ].map((t) => (
                    <Pill key={t} label={t} />
                  ))}
                </div>

                <ul className="mt-4 space-y-2">
                  <Bullet>
                    Trained and served deep‑learning models end‑to‑end (data →
                    deploy).
                  </Bullet>
                  <Bullet>
                    Built GenAI/NLP pipelines: embeddings, retrieval, and
                    transfer learning.
                  </Bullet>
                  <Bullet>
                    Forecasting & quantitative modeling for dynamic time‑series.
                  </Bullet>
                  <Bullet>
                    Packaged models into APIs and batch jobs with Docker +
                    FastAPI/Flask.
                  </Bullet>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Enterprise Systems */}
          <motion.div
            variants={item}
            className="grid items-center gap-6 rounded-2xl border border-black/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto,1fr]">
              <Deco />
              <div>
                <div className="flex items-center gap-3">
                  <ServerCog className="h-6 w-6 text-amber-400" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-100">
                    Enterprise Systems
                  </h3>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {["Linux", "Windows", "Nginx", "OpenSSL", "RabbitMQ"].map(
                    (t) => (
                      <Pill key={t} label={t} />
                    )
                  )}
                </div>

                <ul className="mt-4 space-y-2">
                  <Bullet>
                    Managed Linux/Windows fleets; hardened configs &
                    observability.
                  </Bullet>
                  <Bullet>
                    User auditing & security logging for config drift and
                    anomalous activity.
                  </Bullet>
                  <Bullet>
                    Health‑checker services via RabbitMQ to trigger critical
                    alerts.
                  </Bullet>
                  <Bullet>
                    Wrote privileged helper daemons with strict capability
                    scopes.
                  </Bullet>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={item}
            className="grid items-center gap-6 rounded-2xl border border-black/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto,1fr]">
              <Deco />
              <div>
                <div className="flex items-center gap-3">
                  <Boxes className="h-6 w-6 text-emerald-400" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-100">
                    Back‑End Development
                  </h3>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express",
                    "FastAPI",
                    "Flask",
                    "PostgreSQL",
                    "MongoDB",
                    "Redis",
                  ].map((t) => (
                    <Pill key={t} label={t} />
                  ))}
                </div>

                <ul className="mt-4 space-y-2">
                  <Bullet>
                    Designed REST APIs; real‑time data with websockets when
                    needed.
                  </Bullet>
                  <Bullet>
                    AuthN/AuthZ with JWT & OAuth2; session + token hygiene.
                  </Bullet>
                  <Bullet>
                    Unit/integration tests (Mocha/Chai); CI for quality gates.
                  </Bullet>
                  <Bullet>
                    Built and deployed microservices with structured logging &
                    tracing.
                  </Bullet>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
