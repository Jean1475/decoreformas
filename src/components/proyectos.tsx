"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const proyectos = [
  {
    nombre: "Cocina blanca con península",
    ubicacion: "Vivienda",
    tipo: "Cocina",
    src: "/obras/cocina-blanca-peninsula.webp",
    alt: "Cocina blanca reformada con península, encimera de piedra, suelo porcelánico efecto madera y electrodomésticos integrados",
    tall: true,
  },
  {
    nombre: "Dúplex con escalera flotante",
    ubicacion: "Vivienda dúplex",
    tipo: "Reforma integral",
    src: "/obras/reforma-duplex-escalera-flotante.webp",
    alt: "Salón de dúplex reformado con escalera flotante de madera y barandilla de vidrio",
    tall: true,
  },
  {
    nombre: "Reforma integral de piso clásico",
    ubicacion: "Vivienda",
    tipo: "Reforma integral",
    src: "/obras/reforma-integral-salon-clasico.webp",
    alt: "Salón reformado con tarima de roble, molduras clásicas y puertas correderas blancas abiertas hacia la sala de estar",
    tall: false,
  },
  {
    nombre: "Local comercial listo para abrir",
    ubicacion: "Obrador y tienda",
    tipo: "Espacio comercial",
    src: "/obras/reforma-local-comercial.webp",
    alt: "Local comercial reformado con mobiliario de madera, vitrina expositora e iluminación técnica",
    tall: false,
  },
];

function ProyectoCard({
  nombre,
  tipo,
  ubicacion,
  src,
  alt,
  tall,
}: {
  nombre: string;
  tipo: string;
  ubicacion: string;
  src: string;
  alt: string;
  tall?: boolean;
}) {
  return (
    <div
      className="relative overflow-hidden w-full group"
      style={{ aspectRatio: tall ? "4/3" : "16/9", height: "100%" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 66vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to top, rgba(29,53,87,0.88) 0%, rgba(29,53,87,0.35) 50%, transparent 100%)",
          opacity: 0.85,
        }}
      />

      <div className="absolute inset-x-0 bottom-0 px-5 py-5">
        <p
          style={{
            fontFamily: "var(--font-hanken), sans-serif",
            fontSize: "0.6875rem",
            fontWeight: 500,
            color: "#A8DADC",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {tipo} · {ubicacion}
        </p>
        <p
          className="mt-1.5"
          style={{
            fontFamily: "var(--font-hanken), sans-serif",
            fontWeight: 600,
            fontSize: "1.0625rem",
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          {nombre}
        </p>
      </div>
    </div>
  );
}

export default function Proyectos() {
  const reduce = useReducedMotion();

  return (
    <section
      id="proyectos"
      className="py-16 lg:py-24"
      style={{ background: "#ffffff", borderTop: "1px solid rgba(29,53,87,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <h2 className="text-headline" style={{ color: "#1D3557" }}>
              Proyectos recientes
            </h2>
            <p className="text-body mt-3" style={{ color: "#6b7889", maxWidth: "52ch" }}>
              Una selección de obras entregadas, fotografiadas tal cual
              quedaron el día de la entrega. Sin retoques ni fotos de catálogo.
            </p>
          </div>
          <p
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "#457B9D",
              flexShrink: 0,
            }}
          >
            +300 proyectos entregados
          </p>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 0 }}
          >
            <ProyectoCard {...proyectos[0]} tall />
          </motion.div>

          <motion.div
            className="lg:col-span-1 h-full"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 0.1 }}
          >
            <ProyectoCard {...proyectos[1]} tall />
          </motion.div>

          <motion.div
            className="lg:col-span-1 h-full"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 0.15 }}
          >
            <ProyectoCard {...proyectos[2]} />
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 0.2 }}
          >
            <ProyectoCard {...proyectos[3]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
