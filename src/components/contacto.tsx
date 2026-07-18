"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Contacto() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-36 overflow-hidden pattern-navy"
    >
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {/* Eyebrow deliberado (2 de 2 permitidos en la página) */}
          <p className="text-eyebrow mb-4" style={{ color: "#A8DADC" }}>
            Contacto
          </p>
          <h2 className="text-headline" style={{ color: "#ffffff" }}>
            Cuéntanos tu proyecto
          </h2>
          <p
            className="text-body mt-5 mx-auto prose-width"
            style={{ color: "rgba(241,250,238,0.72)", lineHeight: 1.72 }}
          >
            Te respondemos en menos de 24 horas con una valoración inicial.
            Si el proyecto encaja, coordinamos una visita gratuita al espacio.
          </p>

          <a
            href="https://wa.me/34660565324?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2.5 px-8 py-4"
            style={{
              background: "#E63946",
              color: "#ffffff",
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "6px",
              letterSpacing: "-0.01em",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Pedir presupuesto por WhatsApp
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
              <path d="M19.11 4.91A9.82 9.82 0 0 0 12.05 2C6.58 2 2.13 6.45 2.13 11.92c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.92 9.92 0 0 0 4.79 1.22h.01c5.47 0 9.92-4.45 9.92-9.92 0-2.65-1.03-5.14-2.86-7.01zM12.05 20.18h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.25 8.25 0 0 1-1.27-4.4c0-4.55 3.71-8.26 8.27-8.26 2.21 0 4.28.86 5.84 2.42a8.21 8.21 0 0 1 2.42 5.84c.01 4.56-3.7 8.26-8.25 8.26zm4.53-6.18c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13s-.64.81-.79.97c-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.51.12-.11.25-.29.38-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.15 0-.31-.02-.48-.02s-.44.06-.67.31c-.23.25-.88.86-.88 2.09s.9 2.43 1.03 2.59c.13.17 1.78 2.72 4.32 3.81.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.29z" />
            </svg>
          </a>

          <div
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left sm:text-center"
            style={{ borderTop: "1px solid rgba(168,218,220,0.18)", paddingTop: "2.5rem" }}
          >
            {/* WhatsApp */}
            <div>
              <p className="text-label" style={{ color: "rgba(168,218,220,0.55)" }}>
                WhatsApp
              </p>
              <a
                href="https://wa.me/34660565324"
                style={{
                  display: "block",
                  marginTop: "0.375rem",
                  fontFamily: "var(--font-hanken), sans-serif",
                  fontSize: "1.1875rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#A8DADC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                +34 660 56 53 24
              </a>
            </div>

            {/* Email */}
            <div>
              <p className="text-label" style={{ color: "rgba(168,218,220,0.55)" }}>
                Email
              </p>
              <a
                href="mailto:decorpinto@hotmail.com"
                style={{
                  display: "block",
                  marginTop: "0.375rem",
                  fontFamily: "var(--font-hanken), sans-serif",
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#A8DADC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                decorpinto@hotmail.com
              </a>
            </div>

            {/* Horario */}
            <div>
              <p className="text-label" style={{ color: "rgba(168,218,220,0.55)" }}>
                Horario
              </p>
              <p
                style={{
                  marginTop: "0.375rem",
                  fontFamily: "var(--font-hanken), sans-serif",
                  fontSize: "1.0625rem",
                  fontWeight: 500,
                  color: "rgba(241,250,238,0.85)",
                  lineHeight: 1.2,
                }}
              >
                Lunes a viernes, 9 h a 18 h
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
