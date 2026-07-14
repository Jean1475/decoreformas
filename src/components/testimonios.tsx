"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const principal = {
  cita: "Hicimos la reforma integral del piso con ellos y fue la primera vez que un presupuesto de obra salió exactamente como nos dijeron. Sin sustos finales. El encargado nos llamaba cada semana, aunque no hubiera novedades importantes.",
  autor: "María G.",
  lugar: "Madrid",
  proyecto: "Reforma integral, 95 m²",
};

const secundarios = [
  {
    cita: "Reformaron nuestro local en seis semanas cuando otros nos pedían cuatro meses. Abrimos a tiempo para la temporada de verano.",
    autor: "Roberto A.",
    lugar: "Getafe",
    proyecto: "Local hostelería, 140 m²",
  },
  {
    cita: "Lo que más valoré fue tener un único interlocutor durante toda la obra. Sin llamadas de múltiples empresas preguntando por materiales que ya habíamos elegido.",
    autor: "Sofía M.",
    lugar: "Alcorcón",
    proyecto: "Cocina y baño, 48 m²",
  },
];

export default function Testimonios() {
  const reduce = useReducedMotion();

  return (
    <section
      id="testimonios"
      className="py-20 lg:py-32"
      style={{ background: "#ffffff", borderTop: "1px solid rgba(29,53,87,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cita principal */}
        <motion.blockquote
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: EASE }}
          className="mb-20"
        >
          <span
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "5rem",
              fontWeight: 800,
              lineHeight: 0.7,
              color: "#1D3557",
              opacity: 0.14,
              display: "block",
              marginBottom: "1.25rem",
              letterSpacing: "-0.03em",
            }}
          >
            &ldquo;
          </span>

          <p
            className="text-headline"
            style={{
              color: "#1D3557",
              fontFamily: "var(--font-hanken), sans-serif",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "-0.01em",
              maxWidth: "56ch",
              lineHeight: 1.35,
            }}
          >
            {principal.cita}
          </p>

          <footer className="mt-8 flex items-center gap-4">
            <div className="w-8 h-px" style={{ background: "#E63946" }} aria-hidden="true" />
            <div>
              <cite
                className="not-italic"
                style={{
                  fontFamily: "var(--font-hanken), sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#1D3557",
                  display: "block",
                }}
              >
                {principal.autor}
              </cite>
              <p
                className="text-label mt-1"
                style={{ color: "#6b7889" }}
              >
                {principal.lugar} · {principal.proyecto}
              </p>
            </div>
          </footer>
        </motion.blockquote>

        {/* Citas secundarias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {secundarios.map((t, i) => (
            <motion.blockquote
              key={t.autor}
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: EASE, delay: reduce ? 0 : i * 0.12 }}
              className="flex flex-col"
              style={{
                background: "rgba(29,53,87,0.03)",
                border: "1px solid rgba(29,53,87,0.08)",
                borderRadius: "6px",
                padding: "1.75rem",
              }}
            >
              <p
                className="text-body flex-1"
                style={{
                  color: "#42526a",
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                &ldquo;{t.cita}&rdquo;
              </p>
              <footer className="mt-6 flex items-start gap-3">
                <div
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "#F1FAEE",
                    color: "#1D3557",
                    fontFamily: "var(--font-hanken), sans-serif",
                    fontWeight: 700,
                    fontSize: "0.6875rem",
                    letterSpacing: "0.04em",
                  }}
                  aria-hidden="true"
                >
                  {t.autor.split(" ")[0][0]}
                  {t.autor.split(" ")[1]?.[0] ?? ""}
                </div>
                <div>
                  <cite
                    className="not-italic"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-hanken), sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      color: "#1D3557",
                    }}
                  >
                    {t.autor}
                  </cite>
                  <p className="text-label mt-0.5" style={{ color: "#6b7889" }}>
                    {t.lugar} · {t.proyecto}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
