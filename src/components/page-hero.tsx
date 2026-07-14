"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function PageHero({
  eyebrow,
  titulo,
  descripcion,
}: {
  eyebrow: string;
  titulo: string;
  descripcion: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative pattern-navy"
      style={{ paddingTop: 152, paddingBottom: 80 }}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="text-eyebrow mb-4" style={{ color: "#A8DADC" }}>
            {eyebrow}
          </p>
          <h1
            className="text-display"
            style={{ color: "#ffffff", maxWidth: "18ch" }}
          >
            {titulo}
          </h1>
          <p
            className="text-body mt-5 prose-width"
            style={{ color: "rgba(241,250,238,0.78)" }}
          >
            {descripcion}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginTop: "2rem" }}>
            <a
              href="https://wa.me/34660565324?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.9rem 1.625rem",
                background: "#E63946",
                color: "#ffffff",
                fontFamily: "var(--font-hanken), sans-serif",
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
              Pide presupuesto gratis
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
                fontSize: "0.9375rem",
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
              660 56 53 24
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
