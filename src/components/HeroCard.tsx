"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface CardData {
  type: "stat" | "image";
  stat?: string;
  label?: string;
  sublabel?: string;
  bg?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlayText?: string;
  initialRotation: number;
  hoverRotation: number;
}

const cards: CardData[] = [
  {
    type: "stat",
    stat: "10M+",
    label: "Organische views",
    sublabel: "Groei door slimme content",
    bg: "var(--accent-blue)",
    initialRotation: -8,
    hoverRotation: -18,
  },
  {
    type: "image",
    imageSrc: "/data-man-phone.png",
    imageAlt: "Content creation",
    initialRotation: 4,
    hoverRotation: 10,
  },
  {
    type: "stat",
    stat: "30+",
    label: "Merken geholpen",
    sublabel: "Van start-up tot multinational",
    bg: "var(--accent-green)",
    initialRotation: -3,
    hoverRotation: -8,
  },
  {
    type: "image",
    imageSrc: "/card-woman-green.png",
    imageAlt: "Content",
    overlayText: "Content dat scoort.",
    initialRotation: 7,
    hoverRotation: 16,
  },
];

function TiltCard({
  card,
  index,
  isGroupHovered,
  hoveredIndex,
  onMouseEnter,
  onMouseLeave,
}: {
  card: CardData;
  index: number;
  isGroupHovered: boolean;
  hoveredIndex: number | null;
  onMouseEnter: (i: number) => void;
  onMouseLeave: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = hoveredIndex === index;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), {
    stiffness: 260,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 260,
    damping: 28,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onMouseLeave();
  };

  const targetRotation = isGroupHovered
    ? isHovered
      ? 0
      : card.hoverRotation
    : card.initialRotation;

  const targetScale = isHovered ? 1.08 : isGroupHovered ? 0.94 : 1;
  const targetTranslateX =
    isGroupHovered && !isHovered
      ? index < (hoveredIndex ?? 2)
        ? -30
        : 30
      : 0;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotate: targetRotation,
        scale: targetScale,
        x: targetTranslateX,
        zIndex: isHovered ? 20 : 0,
      }}
      transition={{
        rotate: { type: "spring", stiffness: 220, damping: 22 },
        scale: { type: "spring", stiffness: 280, damping: 24 },
        x: { type: "spring", stiffness: 200, damping: 22 },
      }}
      initial={{ rotate: card.initialRotation, opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        cursor: "pointer",
        position: "relative",
        flexShrink: 0,
        width: "280px",
        height: "400px",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        boxShadow: isHovered
          ? "0 40px 80px rgba(0,0,0,0.3)"
          : "0 12px 35px rgba(0,0,0,0.08)",
      }}
    >
      {card.type === "stat" ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "32px",
            backgroundColor: card.bg,
            color: "var(--white)",
            border: "5px solid var(--white)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <span
            style={{
              fontSize: "4.5rem",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-2.5px",
            }}
          >
            {card.stat}
          </span>
          <div
            style={{
              borderTop: "3px solid rgba(255,255,255,0.3)",
              paddingTop: "16px",
            }}
          >
            <p
              style={{
                fontWeight: 800,
                fontSize: "1.2rem",
                lineHeight: 1.2,
                marginBottom: "6px",
              }}
            >
              {card.label}
            </p>
            <p
              style={{
                fontSize: "1rem",
                opacity: 0.9,
                lineHeight: 1.3,
                fontWeight: 500,
              }}
            >
              {card.sublabel}
            </p>
          </div>
        </div>
      ) : (
        <div style={{ position: "relative", width: "100%", height: "100%", border: "5px solid var(--white)", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
          <motion.div
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            {card.imageSrc && (
              <Image
                src={card.imageSrc}
                alt={card.imageAlt || ""}
                fill
                sizes="280px"
                style={{ objectFit: "cover", display: "block" }}
              />
            )}
          </motion.div>
          {card.overlayText && (
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0.85 }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "32px 24px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
              }}
            >
              <p
                style={{
                  color: "var(--white)",
                  fontWeight: 900,
                  fontSize: "1.2rem",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.2,
                }}
              >
                {card.overlayText}
              </p>
            </motion.div>
          )}
        </div>
      )}

      {/* Shine effect */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]: number[]) =>
              `radial-gradient(circle at ${(x + 0.5) * 100}% ${
                (y + 0.5) * 100
              }%, rgba(255,255,255,0.2) 0%, transparent 65%)`
          ),
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          borderRadius: "var(--radius-xl)",
        }}
      />
    </motion.div>
  );
}

export default function HeroCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px 140px",
        perspective: "1600px",
        position: "relative",
        zIndex: 5,
        marginTop: "-20px",
      }}
    >
      <div
        className="hero-cards-container"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="hero-card-wrapper"
          >
            <TiltCard
              card={card}
              index={i}
              isGroupHovered={hoveredIndex !== null}
              hoveredIndex={hoveredIndex}
              onMouseEnter={setHoveredIndex}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}