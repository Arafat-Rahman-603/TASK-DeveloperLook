"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="intro-section" id="intro" ref={sectionRef}>
      <div className="intro-container">
        
        {/* Top Huge Text */}
        <motion.div
          className="intro-top"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="intro-headline">
            Wij maken content die opvalt. Die<br />
            blijft hangen. Die jouw doelgroep<br />
            raakt en jouw merk in beweging<br />
            brengt. Snel, krachtig en energiek.
          </h2>
        </motion.div>

        {/* Bottom Content Grid */}
        <div className="intro-bottom-grid">
          
          {/* Left: Image */}
          <motion.div
            className="intro-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/card-woman-red.png" /* Using an existing asset as placeholder for the woman with sunglasses */
              alt="Team member"
              fill
              sizes="280px"
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* Middle: Text & Button */}
          <motion.div
            className="intro-middle-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="intro-description">
              We stoppen niet bij mooie plaatjes en<br />
              vette beelden. We maken het meetbaar.<br />
              Zo weet je precies wat werkt en wat niet.<br />
              Nooit meer content zonder strategie.<br />
              Nooit meer content zonder resultaat.
            </p>
            <button className="btn-primary">
              Leer ons kennen
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
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Right: Scroll Down Arrow */}
          <motion.div
            className="intro-scroll-arrow"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="scroll-btn">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="var(--accent-orange)" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
