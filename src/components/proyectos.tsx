"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import Image from "next/image";
import GaleriaModal from "./galeria-modal";

const EASE = [0.16, 1, 0.3, 1] as const;

const proyectos = [
  {
    nombre: "Vivienda con cocina en U y aseo en madera",
    ubicacion: "Vivienda",
    tipo: "Reforma integral",
    src: "/obras/proyectos/cocina-en-u-isla-1.webp",
    alt: "Cocina blanca en U con isla central, frigorífico americano y horno integrados en columna",
    tall: true,
    descripcion:
      "Reforma integral de vivienda: cocina en U con isla, muebles blancos sin tirador y electrodomésticos integrados en columna; baño en gris con ducha a nivel de suelo; y aseo con doble lavabo sobre encimera de madera.",
    grupos: [
      {
        titulo: "Cocina",
        fotos: [
          { src: "/obras/proyectos/cocina-en-u-isla-1.webp", alt: "Cocina blanca en U con isla central, frigorífico americano y horno integrados en columna" },
          { src: "/obras/proyectos/cocina-en-u-isla-2.webp", alt: "Detalle de la cocina en U con encimera y fregadero" },
          { src: "/obras/proyectos/reforma3-entrada-2.webp", alt: "Cocina en U con isla, encimera de porcelánico y electrodomésticos integrados" },
        ],
      },
      {
        titulo: "Baño principal",
        fotos: [
          { src: "/obras/proyectos/reforma3-bano-gris-1.webp", alt: "Baño en tonos grises con plato de ducha a nivel de suelo y mampara de cristal" },
          { src: "/obras/proyectos/reforma3-bano-gris-2.webp", alt: "Detalle de la ducha con alcachofa e hidromasaje en el baño gris" },
          { src: "/obras/proyectos/reforma3-bano-gris-3.webp", alt: "Inodoro suspendido y mecanismo de descarga en el baño reformado" },
          { src: "/obras/proyectos/reforma3-bano-gris-4.webp", alt: "Vista general del baño en gris con ducha, inodoro y toallero" },
        ],
      },
      {
        titulo: "Aseo",
        fotos: [
          { src: "/obras/proyectos/reforma3-aseo-madera-1.webp", alt: "Aseo con doble lavabo sobre encimera de madera y grifería cromada" },
          { src: "/obras/proyectos/reforma3-bano-gris-5.webp", alt: "Ducha de cristal y toallero del aseo reformado" },
          { src: "/obras/proyectos/reforma3-bano-gris-6.webp", alt: "Vista de la ducha e inodoro del aseo reformado" },
        ],
      },
      {
        titulo: "Entrada y pasillo",
        fotos: [
          { src: "/obras/proyectos/reforma3-entrada-1.webp", alt: "Entrada de la vivienda con puerta corredera y armarios empotrados" },
          { src: "/obras/proyectos/reforma3-entrada-3.webp", alt: "Detalle del cuadro eléctrico y portero automático en la entrada" },
        ],
      },
    ],
  },
  {
    nombre: "Salón de vivienda con mobiliario de época",
    ubicacion: "Vivienda",
    tipo: "Reforma integral",
    src: "/obras/proyectos/salon-lujo-1.webp",
    alt: "Salón de vivienda reformado con suelo de parquet claro, iluminación de carril técnica y mobiliario de época",
    tall: true,
    descripcion:
      "Reforma integral de un salón amplio: suelo de parquet claro en toda la planta, iluminación técnica de carril y estanterías a medida integradas en pared. Un espacio neutro pensado para que el mobiliario del cliente sea el protagonista.",
    grupos: [
      {
        fotos: [
          { src: "/obras/proyectos/salon-lujo-1.webp", alt: "Salón de vivienda reformado con suelo de parquet claro, iluminación de carril técnica y mobiliario de época" },
          { src: "/obras/proyectos/proyecto1-pasillo-1.webp", alt: "Pasillo de la vivienda reformada con suelo de madera y obra de arte enmarcada" },
          { src: "/obras/proyectos/salon-lujo-5.webp", alt: "Estanterías a medida con iluminación integrada en el salón reformado" },
          { src: "/obras/proyectos/salon-lujo-2.webp", alt: "Estanterías a medida con iluminación integrada junto a un cuadro embalado" },
          { src: "/obras/proyectos/salon-lujo-3.webp", alt: "Salón con sofás en lino, mesas de época y cuadros enmarcados" },
          { src: "/obras/proyectos/salon-lujo-4.webp", alt: "Detalle del salón con lámparas de época y mueble aparador" },
        ],
      },
    ],
  },
  {
    nombre: "Baño con mueble de madera y mampara",
    ubicacion: "Vivienda",
    tipo: "Baño",
    src: "/obras/proyectos/bano-madera-1.webp",
    alt: "Baño reformado con mueble de lavabo en madera, mampara de ducha de cristal y suelo porcelánico efecto madera",
    tall: false,
    descripcion:
      "Reforma completa de baño: mampara de ducha de cristal templado, mueble suspendido de madera con lavabo integrado, espejo con luz LED y suelo porcelánico efecto madera. Un baño cálido y funcional en poco espacio.",
    grupos: [
      {
        fotos: [
          { src: "/obras/proyectos/bano-madera-1.webp", alt: "Baño reformado con mueble de lavabo en madera, mampara de ducha de cristal y suelo porcelánico efecto madera" },
          { src: "/obras/proyectos/bano-madera-2.webp", alt: "Mueble de lavabo en madera con espejo iluminado en el baño reformado" },
          { src: "/obras/proyectos/bano-madera-3.webp", alt: "Puerta de madera maciza junto al mueble de lavabo del baño reformado" },
        ],
      },
    ],
  },
  {
    nombre: "Aseo con papel pintado decorativo",
    ubicacion: "Vivienda",
    tipo: "Baño",
    src: "/obras/proyectos/aseo-papel-1.webp",
    alt: "Aseo reformado con papel pintado decorativo de ramas, mueble de lavabo gris y aplique doble de pared",
    tall: false,
    descripcion:
      "Reforma de aseo con un punto decorativo diferente: papel pintado de ramas en toda la estancia, mueble de lavabo en gris y aplique doble de pared en acabado cromado. La prueba de que un aseo pequeño también puede tener personalidad.",
    grupos: [
      {
        fotos: [
          { src: "/obras/proyectos/aseo-papel-1.webp", alt: "Aseo reformado con papel pintado decorativo de ramas, mueble de lavabo gris y aplique doble de pared" },
          { src: "/obras/proyectos/aseo-papel-2.webp", alt: "Detalle del papel pintado decorativo junto al aplique de pared del aseo" },
          { src: "/obras/proyectos/aseo-papel-3.webp", alt: "Mueble de lavabo gris bajo el papel pintado decorativo del aseo" },
          { src: "/obras/proyectos/aseo-papel-4.webp", alt: "Vista del aseo reformado con inodoro y papel pintado de ramas" },
          { src: "/obras/proyectos/aseo-papel-5.webp", alt: "Rincón del aseo con papel pintado decorativo y aplique de pared" },
        ],
      },
    ],
  },
  {
    nombre: "Baño en mármol travertino",
    ubicacion: "Vivienda",
    tipo: "Baño",
    src: "/obras/proyectos/bano-marmol-3.webp",
    alt: "Baño revestido en mármol travertino con ducha a ras de suelo y hueco de estantería integrado",
    tall: false,
    descripcion:
      "Reforma de baño revestido de principio a fin en mármol travertino: ducha a ras de suelo con canalización oculta, hueco de estantería integrado en la pared y ventana con carpintería a juego. Un acabado continuo, sin cortes visibles entre suelo y pared.",
    grupos: [
      {
        fotos: [
          { src: "/obras/proyectos/bano-marmol-3.webp", alt: "Baño revestido en mármol travertino con ducha a ras de suelo y hueco de estantería integrado" },
          { src: "/obras/proyectos/bano-marmol-1.webp", alt: "Ventana de la ducha con carpintería a juego en el baño de mármol travertino" },
          { src: "/obras/proyectos/bano-marmol-2.webp", alt: "Canalización de la ducha a ras de suelo en el baño de mármol travertino" },
          { src: "/obras/proyectos/bano-marmol-4.webp", alt: "Hueco de estantería integrado en la pared de mármol travertino del baño" },
        ],
      },
    ],
  },
  {
    nombre: "Vivienda con suelo laminado nuevo",
    ubicacion: "Vivienda",
    tipo: "Reforma integral",
    src: "/obras/proyectos/reforma-laminado-1.webp",
    alt: "Pasillo de vivienda reformado con suelo laminado nuevo y puertas correderas blancas",
    tall: false,
    descripcion:
      "Renovación de suelos y distribución en una vivienda: suelo laminado nuevo en pasillo y salón, puertas correderas y radiadores sustituidos. Fotografiada durante los últimos días de obra, con la entrega de electrodomésticos en curso.",
    grupos: [
      {
        fotos: [
          { src: "/obras/proyectos/reforma-laminado-1.webp", alt: "Pasillo de vivienda reformado con suelo laminado nuevo y puertas correderas blancas" },
          { src: "/obras/proyectos/reforma-laminado-2.webp", alt: "Salón con suelo laminado nuevo y radiador junto a la pared" },
          { src: "/obras/proyectos/reforma-laminado-3.webp", alt: "Salón con ventanas abiertas y suelo laminado recién instalado" },
          { src: "/obras/proyectos/reforma-laminado-4.webp", alt: "Habitación con ventana de aluminio nueva y suelo porcelánico efecto madera" },
        ],
      },
    ],
  },
  {
    nombre: "Cocina blanca minimalista",
    ubicacion: "Vivienda",
    tipo: "Cocina",
    src: "/obras/proyectos/cocina-minimal-7.webp",
    alt: "Cocina blanca minimalista con encimera continua, mueble alto y remate en madera clara",
    tall: false,
    descripcion:
      "Reforma de cocina en estilo minimalista: muebles blancos sin tirador, encimera continua y remate en madera clara a modo de zócalo decorativo. Un diseño limpio, sin elementos superfluos.",
    grupos: [
      {
        fotos: [
          { src: "/obras/proyectos/cocina-minimal-7.webp", alt: "Cocina blanca minimalista con encimera continua, mueble alto y remate en madera clara" },
          { src: "/obras/proyectos/cocina-minimal-1.webp", alt: "Detalle del remate en madera clara junto al zócalo de la cocina" },
          { src: "/obras/proyectos/cocina-minimal-2.webp", alt: "Puerta corredera de la cocina hacia el resto de la vivienda" },
          { src: "/obras/proyectos/cocina-minimal-3.webp", alt: "Ventana con radiador integrado en la cocina blanca minimalista" },
          { src: "/obras/proyectos/cocina-minimal-4.webp", alt: "Mueble alto de cocina con tiradores metálicos y remate en madera" },
          { src: "/obras/proyectos/cocina-minimal-5.webp", alt: "Ventana de la cocina con persiana y radiador junto al remate de madera" },
          { src: "/obras/proyectos/cocina-minimal-6.webp", alt: "Encimera continua de la cocina con ventana y vistas al exterior" },
        ],
      },
    ],
  },
];

function GaleriaIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M7 3h11a2 2 0 0 1 2 2v11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProyectoCard({
  nombre,
  tipo,
  src,
  alt,
  grupos,
  onOpen,
}: {
  nombre: string;
  tipo: string;
  ubicacion: string;
  src: string;
  alt: string;
  grupos: { titulo?: string; fotos: { src: string; alt: string }[] }[];
  onOpen: () => void;
}) {
  const numFotos = grupos.reduce((total, grupo) => total + grupo.fotos.length, 0);
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ver galería del proyecto: ${nombre} (${numFotos} fotos)`}
      className="relative overflow-hidden w-full h-full text-left group cursor-pointer"
      style={{
        aspectRatio: "4/3",
        height: "100%",
        boxShadow:
          "4px 4px 0 -1px rgba(29,53,87,0.10), 8px 8px 0 -2px rgba(29,53,87,0.06)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

      {/* Badge contador de fotos */}
      <div
        className="absolute top-4 right-4 flex items-center gap-1.5 transition-transform duration-300 ease-out group-hover:scale-105"
        style={{
          padding: "0.375rem 0.6875rem",
          borderRadius: 999,
          background: "rgba(29,53,87,0.55)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          border: "1px solid rgba(241,250,238,0.22)",
        }}
      >
        <span style={{ color: "#A8DADC", display: "flex" }}>
          <GaleriaIcon />
        </span>
        <span
          style={{
            fontFamily: "var(--font-hanken), sans-serif",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#F1FAEE",
            letterSpacing: "-0.01em",
          }}
        >
          {numFotos} fotos
        </span>
      </div>

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
          {tipo}
        </p>
        <p
          className="mt-1.5"
          style={{
            fontFamily: "var(--font-hanken), sans-serif",
            fontWeight: 600,
            fontSize: "1.125rem",
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
          }}
        >
          {nombre}
        </p>
      </div>
    </button>
  );
}

const VISIBLES_INICIAL = 3;

export default function Proyectos() {
  const reduce = useReducedMotion();
  const [proyectoActivo, setProyectoActivo] = useState<number | null>(null);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const proyectosVisibles = mostrarTodos
    ? proyectos
    : proyectos.slice(0, VISIBLES_INICIAL);

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
            +100 proyectos entregados
          </p>
        </motion.div>

        {/* Grid uniforme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proyectosVisibles.map((proyecto, i) => (
            <motion.div
              key={proyecto.nombre}
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: reduce ? 0 : (i % VISIBLES_INICIAL) * 0.07,
              }}
            >
              <ProyectoCard {...proyecto} onOpen={() => setProyectoActivo(i)} />
            </motion.div>
          ))}
        </div>

        {proyectos.length > VISIBLES_INICIAL && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setMostrarTodos((v) => !v)}
              className="inline-flex items-center gap-2 transition-colors"
              style={{
                fontFamily: "var(--font-hanken), sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#1D3557",
                padding: "0.75rem 1.5rem",
                borderRadius: 999,
                border: "1.5px solid rgba(29,53,87,0.18)",
              }}
            >
              {mostrarTodos
                ? "Ver menos proyectos"
                : `Ver los ${proyectos.length - VISIBLES_INICIAL} proyectos restantes`}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{
                  transform: mostrarTodos ? "rotate(180deg)" : "none",
                  transition: "transform 0.25s",
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {proyectoActivo !== null && (
          <GaleriaModal
            proyecto={proyectos[proyectoActivo]}
            onClose={() => setProyectoActivo(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
