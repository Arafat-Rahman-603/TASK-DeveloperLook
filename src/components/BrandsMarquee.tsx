"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const brands = [
  "Frontopper",
  "Seesing Flex",
  "Graafschap College",
  "Fides",
  "8RHK",
  "Loco",
  "Roasta",
  "Bullit",
  "NextLevel",
  "Sparkwise",
];

// Specific rotation angles mirroring the reference image's alternating "messy" look
const scatterAngles = [-2, -5, 0, 6, -3, 4, -4, 2, 5, -1];

export default function BrandsMarquee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isScattered, setIsScattered] = useState(false);

  return (
    <section className="brands-section" id="brands">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className="brands-title">
          These brands
          <br />
          got hyped.
        </h2>
      </motion.div>

      {/* Clicking the wrapper pauses the marquee and triggers the scattered rotation */}
      <div 
        className="brands-marquee-wrapper" 
        onClick={() => setIsScattered(!isScattered)}
        style={{ cursor: "pointer", touchAction: "manipulation" }}
        title="Click to toggle scatter!"
      >
        <div 
          className="brands-marquee"
          style={{ animationPlayState: isScattered ? 'paused' : undefined }}
        >
          {[...brands, ...brands].map((brand, i) => {
            const angle = scatterAngles[i % scatterAngles.length];
            return (
              <motion.div
                className={`brand-card ${isScattered ? 'is-scattered' : ''}`}
                key={i}
                animate={{ 
                  rotate: isScattered ? angle : 0,
                  y: isScattered ? (i % 2 === 0 ? -12 : 12) : 0, // Adds slight vertical stagger too for extra messiness
                  scale: isScattered ? 1.05 : 1
                }}
                whileHover={{ 
                  y: isScattered ? (i % 2 === 0 ? -18 : 6) : -8, 
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                  scale: isScattered ? 1.1 : 1.05,
                  rotate: isScattered ? angle : 0 // Preserve rotation on hover
                }}
                transition={{ 
                  duration: 0.5, 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                <span className="brand-name">{brand}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
