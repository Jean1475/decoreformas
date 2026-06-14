"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const pasos = [
  {
    n: "01",
    titulo: "Consulta gratuita",
    desc: "Nos cuentas el proyecto. Visitamos el espacio y analizamos el alcance sin coste ni compromiso.",
  },
  {
    n: "02",
    titulo: "Propuesta detallada",
    desc: "Presupuesto cerrado, calendario de obra y selección de materiales. Todo por escrito antes de empezar.",
  },
  {
    n: "03",
    titulo: "Ejecución",
    desc: "Un encargado de obra dedicado y actualizaciones semanales con fotos. Sabes qué pasa en tu espacio.",
  },
  {
    n: "04",
    titulo: "Entrega",
    desc: "Revisión final contigo, documentación de garantías y servicio posventa durante doce meses.",
  },
];

export default function Proceso() {
  const reduce = useReducedMotion();

  return (
    <section
      id="proceso"
      className="relative py-24 lg:py-36 overflow-hidden pattern-navy"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16 lg:mb-20"
        >
          <p
            className="text-mono mb-4"
            style={{ color: "#A8DADC", fontSize: "0.6875rem" }}
          >
            Cómo trabajamos
          </p>
          <h2 className="text-headline" style={{ color: "#ffffff", maxWidth: "28ch" }}>
            Cuatro fases. Sin grises en el precio ni en el calendario.
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {pasos.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : i * 0.12 }}
              style={{
                paddingTop: "2rem",
                paddingBottom: "2rem",
                paddingRight: "2rem",
                borderTop: "2px solid rgba(168,218,220,0.25)",
              }}
            >
              {/* Step number */}
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "#A8DADC",
                  opacity: 0.30,
                  display: "block",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.04em",
                }}
              >
                {p.n}
              </span>

              <h3
                className="text-title"
                style={{ color: "#F1FAEE" }}
              >
                {p.titulo}
              </h3>
              <p
                className="text-small mt-3"
                style={{
                  color: "rgba(168,218,220,0.80)",
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: EASE, delay: reduce ? 0 : 0.5 }}
          className="mt-16"
        >
          <a
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
            Empezar con una consulta gratuita
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path
                d="M2.5 7.5h10m0 0L8.5 3.5m4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
