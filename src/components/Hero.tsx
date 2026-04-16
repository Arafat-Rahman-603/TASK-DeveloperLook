"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-gradient" />

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Let&apos;s Get Hyped!
      </motion.h1>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <button className="btn-primary">
          Mail ons direct
          <span className="btn-squircle-icon">
            <svg
              className="arrow-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
        </button>

        <button className="btn-primary">
          Get Results
          <span className="btn-squircle-icon">
            <svg
              className="arrow-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
            </svg>
          </span>
        </button>
      </motion.div>
    </section>
  );
}
