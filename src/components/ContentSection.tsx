"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    image: "/card-woman-red.png", // Or the orange coffee image
    title: "Van nul naar vol, binnen 3 weken",
    tag: "Bullit",
    color: "orange",
  },
  {
    image: "/card-coffee-blue.png",
    title: "Zacht in smaak, sterk in beeld",
    tag: "Roasta",
    color: "blue",
  },
  {
    image: "/card-woman-green.png",
    title: "Content die écht smaakt (en raakt)",
    tag: "Loco",
    color: "green",
  },
];

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 60 + i * 20,
    rotate: -3,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

function ContentCardItem({ card, index, isInView }: { card: any, index: number, isInView: boolean }) {
  return (
    <motion.div
      className={`content-card ${card.color}-card`} // Added color class for targeting
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -8, scale: 1.02, rotate: 2 }}
      transition={{ duration: 0.3 }}
      style={{ width: "100%" }}
    >
      <div className={`content-card-border ${card.color}-border`} />
      <Image
        src={card.image}
        alt={card.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: "cover" }}
      />
      <div className={`content-card-overlay ${card.color}-overlay`}>
        <div className="content-card-info">
          <h4>{card.title}</h4>
          <span className="tag">{card.tag}</span>
        </div>
        <div className="content-card-arrow">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function ContentSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInfoInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="content-section" id="work" ref={sectionRef}>
      <div className="content-grid-3cols">

        {/* Column 1: Text + Orange Card */}
        <div className="content-col content-col-1">
          <motion.div
            className="content-info-left"
            initial={{ opacity: 0, y: 40 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="content-title">
              Content
              <br />
              dat scoort.
            </h2>
            <p className="content-description" style={{ fontWeight: 500 }}>
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
              doelgroep. Met creatieve content die werkt en het verschil maakt.
            </p>
            <button className="btn-primary">
              Bekijk al ons werk
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

          <ContentCardItem card={cards[0]} index={0} isInView={isInfoInView} />
        </div>

        {/* Column 2: Blue Card */}
        <div className="content-col content-col-2">
          <ContentCardItem card={cards[1]} index={1} isInView={isInfoInView} />
        </div>

        {/* Column 3: Green Card */}
        <div className="content-col content-col-3">
          <ContentCardItem card={cards[2]} index={2} isInView={isInfoInView} />
        </div>

      </div>
    </section>
  );
}
