"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import DiagnosticoPanel from "./diagnostico-panel";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7l3 3 6-6" stroke="#A8DADC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  const stagger = {
    animate: { transition: { staggerChildren: reduce ? 0 : 0.09 } },
  };

  const fadeUp = {
    initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: EASE_EXPO },
    },
  };

  return (
    <section
      id="inicio"
      aria-label="Hero"
      className="pattern-navy"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100vh",
        minHeight: 600,
        position: "relative",
      }}
    >
      {/* LEFT — contenido */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: 72,
        }}
      >
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          style={{ width: "100%", maxWidth: 620, padding: "2rem 3.5rem 2.5rem" }}
        >
          {/* Location strip — texto plano, sin eyebrow */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "rgba(168,218,220,0.70)",
              marginBottom: "1.5rem",
              letterSpacing: "0.04em",
            }}
          >
            Leganés · Getafe · Alcorcón · Móstoles
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "clamp(2.4rem, 3.7vw, 4.65rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              color: "#ffffff",
              textWrap: "balance" as never,
              margin: 0,
            }}
          >
            Reformamos tu hogar{" "}
            <br />
            <span style={{ color: "#A8DADC" }}>sin sorpresas.</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              color: "rgba(241,250,238,0.75)",
              lineHeight: 1.7,
              marginTop: "1.375rem",
              fontSize: "1.1875rem",
              maxWidth: "52ch",
              fontWeight: 400,
            }}
          >
            Presupuesto cerrado desde el primer día, un único interlocutor de principio
            a fin y seguimiento semanal en el móvil.{" "}
            <span style={{ color: "#F1FAEE", fontWeight: 500 }}>
              Sin sustos. Sin letra pequeña.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginTop: "2.25rem" }}
          >
            <a
              href="https://wa.me/34660565324?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.9rem 1.625rem",
                background: "#A8DADC",
                border: "1.5px solid #A8DADC",
                color: "#081622",
                fontFamily: "var(--font-hanken), sans-serif",
                fontSize: "1rem",
                fontWeight: 700,
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "background 0.18s, border-color 0.18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#c3e6e8";
                e.currentTarget.style.borderColor = "#c3e6e8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#A8DADC";
                e.currentTarget.style.borderColor = "#A8DADC";
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                <path d="M19.11 4.91A9.82 9.82 0 0 0 12.05 2C6.58 2 2.13 6.45 2.13 11.92c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.92 9.92 0 0 0 4.79 1.22h.01c5.47 0 9.92-4.45 9.92-9.92 0-2.65-1.03-5.14-2.86-7.01zM12.05 20.18h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.25 8.25 0 0 1-1.27-4.4c0-4.55 3.71-8.26 8.27-8.26 2.21 0 4.28.86 5.84 2.42a8.21 8.21 0 0 1 2.42 5.84c.01 4.56-3.7 8.26-8.25 8.26zm4.53-6.18c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13s-.64.81-.79.97c-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.51.12-.11.25-.29.38-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.15 0-.31-.02-.48-.02s-.44.06-.67.31c-.23.25-.88.86-.88 2.09s.9 2.43 1.03 2.59c.13.17 1.78 2.72 4.32 3.81.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.29z" />
              </svg>
              Presupuesto gratis por WhatsApp
            </a>

            <a
              href="tel:+34660565324"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.9rem 1.5rem",
                border: "1.5px solid rgba(168,218,220,0.32)",
                color: "#F1FAEE",
                fontFamily: "var(--font-hanken), sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                borderRadius: "6px",
                textDecoration: "none",
                transition: "border-color 0.18s, color 0.18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,218,220,0.72)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,218,220,0.32)";
                e.currentTarget.style.color = "#F1FAEE";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a1 1 0 0 0-1.02.24l-1.57 1.97a15.05 15.05 0 0 1-6.92-6.92l1.97-1.57c.27-.27.35-.67.24-1.02A11.5 11.5 0 0 1 8.62 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.62c0-.55-.45-1-1-1z" />
              </svg>
              660 56 53 24
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            style={{
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(168,218,220,0.14)",
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem",
            }}
          >
            {[
              "Presupuesto cerrado desde el primer día",
              "25 años de oficio, más de 100 obras entregadas",
            ].map((text, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <span style={{ flexShrink: 0, display: "flex" }}><CheckIcon /></span>
                <span
                  style={{
                    fontFamily: "var(--font-hanken), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "rgba(241,250,238,0.62)",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT — imagen + diagnóstico IA */}
      <motion.div
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1, transition: { duration: 1.1, delay: 0.15, ease: EASE_EXPO } }}
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Image
            src="/obras/reforma-salon-iluminacion-tecnica.webp"
            alt="Salón reformado con suelo de parquet claro e iluminación técnica de carril integrada en el techo"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div id="presupuesto-express" style={{ position: "relative", zIndex: 1, padding: "0 2.5rem 2.5rem", scrollMarginTop: 96 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 0.75rem 0.375rem 0.5rem",
              background: "rgba(168,218,220,0.14)",
              border: "1px solid rgba(168,218,220,0.35)",
              borderRadius: 999,
              marginBottom: "0.75rem",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="#A8DADC" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="12" r="4" fill="#A8DADC" />
            </svg>
            <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.01em", color: "#F1FAEE" }}>
              Presupuesto exprés con IA · 2 min
            </span>
          </div>
          <DiagnosticoPanel reduce={reduce} />
        </div>
      </motion.div>
    </section>
  );
}
