"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const datos = [
  { valor: "+20", desc: "años de oficio" },
  { valor: "+100", desc: "proyectos entregados" },
  { valor: "4,9 / 5", desc: "valoración de clientes" },
];

function BloomDecor() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="#457B9D"
      aria-hidden="true"
      style={{ opacity: 0.18 }}
    >
      <g>
        <rect x="44" y="0" width="44" height="22" rx="6" />
        <rect x="112" y="0" width="44" height="22" rx="6" />
        <rect x="0" y="44" width="88" height="44" rx="6" />
        <rect x="112" y="44" width="88" height="44" rx="6" />
        <rect x="44" y="89" width="44" height="22" rx="6" />
        <rect x="112" y="89" width="44" height="22" rx="6" />
        <rect x="44" y="111" width="44" height="22" rx="6" />
        <rect x="112" y="111" width="44" height="22" rx="6" />
        <rect x="0" y="112" width="88" height="44" rx="6" />
        <rect x="112" y="112" width="88" height="44" rx="6" />
        <rect x="44" y="178" width="44" height="22" rx="6" />
        <rect x="112" y="178" width="44" height="22" rx="6" />
      </g>
    </svg>
  );
}

export default function Nosotros() {
  const reduce = useReducedMotion();

  return (
    <section
      id="nosotros"
      className="py-24 lg:py-36 overflow-hidden"
      style={{ background: "#ffffff", borderTop: "1px solid rgba(29,53,87,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -top-8 -left-8 pointer-events-none">
              <BloomDecor />
            </div>
            <div
              className="absolute -bottom-6 -right-6 pointer-events-none"
              style={{ transform: "scale(0.65)", transformOrigin: "bottom right" }}
            >
              <BloomDecor />
            </div>

            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4 / 5", borderRadius: "4px" }}
            >
              <Image
                src="/obras/equipo-decoreformas-en-obra.webp"
                alt="Pintor del equipo de Decoreformas repasando la pared de una vivienda en obra"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Stat chip */}
            <div
              className="absolute -bottom-5 -right-4 px-5 py-3.5"
              style={{ background: "#1D3557", color: "#ffffff", borderRadius: "4px" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-hanken), sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                +25
              </p>
              <p
                className="text-label mt-0.5"
                style={{ color: "#A8DADC" }}
              >
                años de oficio
              </p>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE, delay: reduce ? 0 : 0.1 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-headline" style={{ color: "#1D3557" }}>
              Quiénes somos
            </h2>

            <p
              className="text-body mt-6 prose-width"
              style={{ color: "#42526a", textWrap: "pretty" } as React.CSSProperties}
            >
              Somos un equipo pequeño con base en Madrid Sur, con más de 20
              años de oficio a nuestras espaldas. Fundamos Decoreformas porque
              la reforma media tiene demasiadas fricciones: presupuestos que
              se inflan, plazos que se alargan, comunicación fragmentada.
            </p>
            <p
              className="text-body mt-4 prose-width"
              style={{ color: "#6b7889", textWrap: "pretty" } as React.CSSProperties}
            >
              Al ser un equipo reducido, todas las fases de la obra pasan por
              nosotros. La misma persona que firma el presupuesto es la que
              ejecuta y entrega. Sin intermediarios ni sorpresas en el precio
              ni en el calendario.
            </p>

            {/* Stats */}
            <div
              className="mt-12 flex flex-col gap-3"
              style={{ borderTop: "1px solid rgba(29,53,87,0.12)", paddingTop: "1.5rem" }}
            >
              {datos.map((d) => (
                <div key={d.desc} className="flex items-baseline gap-3">
                  <span
                    style={{
                      fontFamily: "var(--font-hanken), sans-serif",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "#1D3557",
                      letterSpacing: "-0.025em",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {d.valor}
                  </span>
                  <span className="text-label" style={{ color: "#6b7889" }}>
                    {d.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
