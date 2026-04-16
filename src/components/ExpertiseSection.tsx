"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

interface CardData {
  id: string;
  number: string;
  title: string;
  tag: string;
  headline: string;
  description: string;
  btnText: string;
  image: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

const expertiseCards: CardData[] = [
  {
    id: "social-strategy",
    number: "01",
    title: "Social strategy",
    tag: "Expertise",
    headline: "Slimme strategie. Sterke start.",
    description: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    btnText: "Meer over social strategie",
    image: "/card-woman-red.png", // Or the chessboard image if you eventually add it
    bgColor: "#F3EDE4", // Using the light cream background from screenshot 1
    textColor: "var(--text-dark)",
    borderColor: "var(--accent-orange)"
  },
  {
    id: "content-creation",
    number: "02",
    title: "Content creation",
    tag: "Expertise",
    headline: "Content die opvalt en raakt.",
    description: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    btnText: "Meer over content creatie",
    image: "/data-man-phone.png",
    bgColor: "#Fcbdf4", // Pink
    textColor: "var(--text-dark)",
    borderColor: "var(--white)"
  },
  {
    id: "activation",
    number: "03",
    title: "Activation",
    tag: "Expertise",
    headline: "Zichtbaar waar en wanneer het telt.",
    description: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    btnText: "Meer over activatie",
    image: "/card-woman-green.png",
    bgColor: "#2dd4a0", // Green
    textColor: "var(--text-dark)",
    borderColor: "var(--white)"
  },
  {
    id: "data",
    number: "04",
    title: "Data",
    tag: "Expertise",
    headline: "Inzichten die impact maken.",
    description: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    btnText: "Meer over data",
    image: "/card-coffee-blue.png",
    bgColor: "#0088ff", // Blue
    textColor: "var(--text-dark)",
    borderColor: "var(--white)"
  }
];

function StackingCard({ card, i, progress, range, targetScale }: { card: CardData, i: number, progress: MotionValue<number>, range: number[], targetScale: number }) {
  const containerRef = useRef(null);
  
  // Calculate specific scale for this card when the next cards scroll over it
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div 
      ref={containerRef} 
      className="stacking-card-container"
      style={{
        top: `calc(5vh + ${i * 20}px)` // Stagger the 'sticky' top edge so they stack beautifully
      }}
    >
      <motion.div 
        className="stacking-card-content"
        style={{ 
          scale,
          backgroundColor: card.bgColor,
          color: card.textColor
        }}
      >
        <div className="card-top-row">
          <span className="card-tag" style={{ color: card.textColor, background: card.bgColor === '#F3EDE4' ? '#e6dfd5' : 'var(--white)' }}>
            {card.tag}
          </span>
          <span className="card-number" style={{ opacity: 0.15 }}>{card.number}</span>
        </div>

        <div className="card-bottom-row">
          <div className="card-info-col">
            <h2 className="card-huge-title">{card.title}</h2>
            <div className="card-info-content-group">
              <h3 className="card-headline">{card.headline}</h3>
              <p className="card-description">{card.description}</p>
              
              <button className="card-action-btn" style={{ 
                background: card.bgColor === '#F3EDE4' ? 'var(--accent-orange)' : 'var(--white)',
                color: card.bgColor === '#F3EDE4' ? 'var(--white)' : 'var(--text-dark)'
              }}>
                {card.btnText}
                <span className="card-arrow-icon" style={{
                  background: card.bgColor === '#F3EDE4' ? 'var(--white)' : 'var(--text-dark)',
                  color: card.bgColor === '#F3EDE4' ? 'var(--accent-orange)' : 'var(--white)'
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="card-image-col">
            <div className="card-image-border" style={{ borderColor: card.borderColor }}>
              <div className="card-img-wrapper">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default function ExpertiseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section className="expertise-stacking-section" id="expertises" ref={containerRef}>
      <div className="stacking-cards-wrapper">
        {expertiseCards.map((card, i) => {
          // Logic for shrinking: as overall scroll progress increases past specific breakpoints based on index, scale it down slightly
          const targetScale = 1 - ((expertiseCards.length - i) * 0.05); // e.g card 1 scales to 0.85
          // range calculation so exactly when NEXT card hits its sticky point, this card starts scaling
          const range = [(i / expertiseCards.length), 1];

          return (
            <StackingCard 
              key={card.id} 
              card={card} 
              i={i} 
              progress={scrollYProgress} 
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
