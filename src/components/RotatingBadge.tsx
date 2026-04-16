"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function RotatingBadge() {
  const text = "GET RESULTS • GET HYPED • GET NOTICED • ";
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        // Hide badge when footer CTA section starts appearing
        setVisible(footerTop > window.innerHeight * 0.6);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="rotating-badge"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.6,
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <div className="rotating-badge-inner">
        <div className="badge-circle">
          <div className="badge-text">
            <svg viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text
                fontSize="8.5"
                fontWeight="700"
                fill="#1a1a1a"
                letterSpacing="2"
              >
                <textPath href="#circlePath">{text}</textPath>
              </text>
            </svg>
          </div>
          <span className="badge-center">GH</span>
        </div>
      </div>
    </motion.div>
  );
}
