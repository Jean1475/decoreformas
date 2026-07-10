"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const servicios = [
  {
    title: "Reformas Integrales",
    description:
      "Gestionamos el proyecto completo, de la demolición al acabado final. Fontanería, electricidad, carpintería: un único interlocutor desde el primer día, sin subcontratas que escapen a tu control.",
    detail: "Viviendas · Locales · Obra nueva",
  },
  {
    title: "Decoración de Interiores",
    description:
      "Diseño de espacios desde la distribución de planta hasta la selección de materiales, mobiliario y textiles. El resultado que imaginas, trasladado a planos y luego a tu espacio.",
    detail: "Residencial · Corporativo",
  },
  {
    title: "Cocinas y Baños",
    description:
      "Los dos cuartos que más impactan en el valor y el uso diario de una vivienda. Trabajamos con fabricantes de garantía, tiempos ajustados y un acabado que aguanta.",
    detail: "Cocinas · Baños · Lavanderías",
  },
  {
    title: "Espacios Comerciales",
    description:
      "Locales, oficinas, hostelería. Cada semana cerrado tiene un coste, y eso se refleja en la planificación: fases de obra que minimizan la interrupción de tu negocio.",
    detail: "Hostelería · Retail · Oficinas",
  },
];

export default function Servicios() {
  const reduce = useReducedMotion();

  return (
    <section
      id="servicios"
      className="py-20 lg:py-28"
      style={{ background: "#ffffff", borderTop: "1px solid rgba(29,53,87,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <h2 className="text-headline" style={{ color: "#1D3557" }}>
            Lo que hacemos
          </h2>
          <p className="text-body mt-4 prose-width" style={{ color: "#6b7889" }}>
            Cuatro áreas de trabajo. Todas con el mismo estándar: presupuesto
            cerrado, plazo comprometido y un equipo que no cambia a mitad de la
            obra.
          </p>
        </motion.div>

        {/* Service rows — sin números 01/02 decorativos */}
        <div style={{ borderTop: "1px solid rgba(29,53,87,0.10)" }}>
          {servicios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: EASE, delay: reduce ? 0 : i * 0.08 }}
              className="group"
              style={{ borderBottom: "1px solid rgba(29,53,87,0.10)" }}
            >
              <div className="flex items-start gap-8 py-10 lg:py-12">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-5">
                    <h3 className="text-title shrink-0" style={{ color: "#1D3557" }}>
                      {s.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-hanken), sans-serif",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        color: "#457B9D",
                        letterSpacing: "0.01em",
                        marginTop: "0.125rem",
                      }}
                    >
                      {s.detail}
                    </span>
                  </div>
                  <p className="text-body mt-3 prose-width" style={{ color: "#6b7889" }}>
                    {s.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-1.5"
                  style={{ color: "#1D3557" }}
                  aria-hidden="true"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M4.5 11h13m0 0-5.5-5.5m5.5 5.5-5.5 5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
