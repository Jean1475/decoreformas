"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const proyectos = [
  {
    nombre: "Reforma integral piso centro",
    ubicacion: "MADRID · 2024",
    tipo: "REFORMA INTEGRAL · 85 M²",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    alt: "Salón reformado con apertura al jardín, sofá gris claro y madera natural, Madrid 2024",
    tall: true,
  },
  {
    nombre: "Cocina abierta al salón",
    ubicacion: "BARCELONA · 2024",
    tipo: "COCINA · 32 M²",
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
    alt: "Salón abierto con suelo de microcemento y cocina integrada en azul marino, Barcelona 2024",
    tall: true,
  },
  {
    nombre: "Baño principal en blanco",
    ubicacion: "VALENCIA · 2023",
    tipo: "BAÑO · 9 M²",
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    alt: "Baño reformado con ducha de obra, azulejo blanco metro y mueble lacado gris, Valencia 2023",
    tall: false,
  },
  {
    nombre: "Vivienda unifamiliar completa",
    ubicacion: "SEVILLA · 2023",
    tipo: "OBRA INTEGRAL · 160 M²",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    alt: "Vivienda unifamiliar reformada con revestimiento de madera y fachada negra, Sevilla 2023",
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
      style={{ aspectRatio: tall ? "4/3" : "16/9" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 66vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to top, rgba(29,53,87,0.88) 0%, rgba(29,53,87,0.35) 50%, transparent 100%)",
          opacity: 0.85,
        }}
      />

      {/* Info */}
      <div className="absolute inset-x-0 bottom-0 px-5 py-5">
        <p
          className="text-mono"
          style={{ color: "#A8DADC", fontSize: "0.6875rem", letterSpacing: "0.18em" }}
        >
          {tipo} · {ubicacion}
        </p>
        <p
          className="mt-1.5"
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
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
              Una selección de obras entregadas. Cada foto la sube el cliente
              cuando quiere, sin prisa de nuestra parte.
            </p>
          </div>
          <p
            className="text-mono shrink-0"
            style={{ color: "#457B9D", fontSize: "0.6875rem" }}
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
            className="lg:col-span-1"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 0.1 }}
          >
            <ProyectoCard {...proyectos[1]} tall />
          </motion.div>

          <motion.div
            className="lg:col-span-1"
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
