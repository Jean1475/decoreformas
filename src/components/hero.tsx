"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

/* Bloom pixel mark rendered inline as SVG — Punch Red, large decorative */
function BloomMark({
  color,
  size,
  opacity = 1,
}: {
  color: string;
  size: number;
  opacity?: number;
}) {
  const cell = Math.round(size / 9);
  const gap = Math.max(1, Math.round(cell * 0.18));
  const r = Math.max(1, Math.round(cell * 0.22));
  const u = cell + gap;
  const rects: Array<{ x: number; y: number; w: number; h: number }> = [
    { x: 1, y: 0, w: 2, h: 1 },
    { x: 6, y: 0, w: 2, h: 1 },
    { x: 0, y: 1, w: 4, h: 2 },
    { x: 5, y: 1, w: 4, h: 2 },
    { x: 1, y: 3, w: 2, h: 1 },
    { x: 6, y: 3, w: 2, h: 1 },
    { x: 1, y: 5, w: 2, h: 1 },
    { x: 6, y: 5, w: 2, h: 1 },
    { x: 0, y: 6, w: 4, h: 2 },
    { x: 5, y: 6, w: 4, h: 2 },
    { x: 1, y: 8, w: 2, h: 1 },
    { x: 6, y: 8, w: 2, h: 1 },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${9 * u} ${9 * u}`}
      fill={color}
      opacity={opacity}
      aria-hidden="true"
    >
      {rects.map((rect, i) => (
        <rect
          key={i}
          x={rect.x * u}
          y={rect.y * u}
          width={rect.w * u - gap}
          height={rect.h * u - gap}
          rx={r}
          ry={r}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    animate: {
      transition: { staggerChildren: reduce ? 0 : 0.11 },
    },
  };

  const item = {
    initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 32 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: EASE_EXPO },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-dvh flex items-center overflow-hidden pt-[72px] pattern-navy"
    >
      {/* Large decorative bloom — bottom right, Punch Red, very subtle */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 pointer-events-none"
        style={{ opacity: 0.12 }}
      >
        <BloomMark color="#E63946" size={520} />
      </div>

      {/* Top-left smaller bloom */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 pointer-events-none"
        style={{ opacity: 0.07 }}
      >
        <BloomMark color="#A8DADC" size={320} />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-40">
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          {/* Kicker — Space Mono */}
          <motion.p
            variants={item}
            className="text-mono"
            style={{
              color: "#A8DADC",
              marginBottom: "1.75rem",
              display: "block",
            }}
          >
            Reformas integrales · Madrid
          </motion.p>

          {/* Headline */}
          <motion.h1 variants={item} className="text-display" style={{ color: "#ffffff" }}>
            Cercanos en el trato,
            <br />
            <span style={{ color: "#A8DADC" }}>impecables</span>
            <br />
            en la obra.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="text-body prose-width mt-8"
            style={{ color: "rgba(241,250,238,0.78)", lineHeight: 1.72 }}
          >
            Tu casa, como la imaginas. Presupuesto cerrado desde el primer día,
            seguimiento semanal en el móvil y un único interlocutor de principio
            a fin. Sin sustos. Sin letra pequeña.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 mt-12"
          >
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2.5 px-8 py-4"
              style={{
                background: "#E63946",
                color: "#ffffff",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 600,
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Pide presupuesto
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path
                  d="M2.5 7.5h10m0 0L8.5 3.5m4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="#proyectos"
              className="inline-flex items-center gap-2 px-8 py-4"
              style={{
                border: "1.5px solid rgba(168,218,220,0.40)",
                color: "#F1FAEE",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                borderRadius: "6px",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,218,220,0.80)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,218,220,0.40)";
                e.currentTarget.style.color = "#F1FAEE";
              }}
            >
              Ver proyectos
            </Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            variants={item}
            className="mt-20 flex items-center gap-3"
            style={{ color: "rgba(168,218,220,0.45)" }}
          >
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
              <rect
                x="1"
                y="1"
                width="14"
                height="22"
                rx="7"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <motion.rect
                x="6.5"
                y="5"
                width="3"
                height="5"
                rx="1.5"
                fill="currentColor"
                animate={reduce ? {} : { y: [0, 6, 0] }}
                transition={{
                  duration: 1.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "0.6875rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Desplaza para ver
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
