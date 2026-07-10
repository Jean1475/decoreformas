"use client";

import { useRef, useCallback, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

interface SliderCard {
  titulo: string;
  detalle: string;
  año: string;
  srcAntes: string;
  srcDespues: string;
  altAntes: string;
  altDespues: string;
}

const obras: SliderCard[] = [
  {
    titulo: "De bañera a ducha",
    detalle: "Reforma completa de baño",
    año: "2025",
    srcAntes: "/obras/reforma-bano-antes-banera.webp",
    srcDespues: "/obras/reforma-bano-despues-ducha.webp",
    altAntes:
      "Baño antiguo con bañera y azulejo color crema de los años 80, antes de la reforma",
    altDespues:
      "El mismo baño reformado: ducha con mampara de cristal, mueble suspendido de madera y suelo porcelánico efecto roble",
  },
  {
    titulo: "Ducha nueva, obra mínima",
    detalle: "Cambio de bañera por plato de ducha",
    año: "2025",
    srcAntes: "/obras/reforma-bano-2-antes-demolicion.webp",
    srcDespues: "/obras/reforma-bano-2-despues-mosaico.webp",
    altAntes:
      "Rincón del baño durante la demolición de la bañera, con el suelo levantado y la pared abierta",
    altDespues:
      "El mismo rincón terminado: plato de ducha extraplano, frente de mosaico gris y mueble de lavabo nuevo, conservando el azulejo original",
  },
];

function BeforeAfterSlider({
  card,
  index,
  reduce,
}: {
  card: SliderCard;
  index: number;
  reduce: boolean;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(50);
  const [gripHover, setGripHover] = useState(false);
  const [ariaValue, setAriaValue] = useState(50);

  const setPos = useCallback((clientX: number) => {
    if (!frameRef.current) return;
    const r = frameRef.current.getBoundingClientRect();
    const pct = Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100));
    posRef.current = pct;
    frameRef.current.style.setProperty("--pos", `${pct}%`);
    setAriaValue(Math.round(pct));
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLSpanElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      e.preventDefault();
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLSpanElement>) => {
      if (e.buttons === 0) return;
      setPos(e.clientX);
    },
    [setPos]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLSpanElement>) => {
      const cur = posRef.current;
      if (e.key === "ArrowLeft") {
        const next = Math.max(4, cur - 5);
        posRef.current = next;
        frameRef.current?.style.setProperty("--pos", `${next}%`);
        setAriaValue(Math.round(next));
        e.preventDefault();
      }
      if (e.key === "ArrowRight") {
        const next = Math.min(96, cur + 5);
        posRef.current = next;
        frameRef.current?.style.setProperty("--pos", `${next}%`);
        setAriaValue(Math.round(next));
        e.preventDefault();
      }
    },
    []
  );

  const labelBase: React.CSSProperties = {
    fontFamily: "var(--font-hanken), sans-serif",
    fontSize: "0.625rem",
    fontWeight: 600,
    letterSpacing: "0.10em",
    textTransform: "uppercase",
    padding: "5px 11px",
    borderRadius: 999,
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    pointerEvents: "none" as const,
  };

  return (
    <motion.article
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : index * 0.12 }}
    >
      {/* Frame */}
      <div
        ref={frameRef}
        className="relative overflow-hidden select-none"
        style={
          {
            aspectRatio: "4/5",
            borderRadius: 6,
            "--pos": "50%",
            isolation: "isolate",
            boxShadow: "0 1px 3px rgba(29,53,87,0.08), 0 8px 24px -8px rgba(29,53,87,0.18)",
          } as React.CSSProperties
        }
      >
        {/* ANTES */}
        <div className="absolute inset-0">
          <Image
            src={card.srcAntes}
            alt={card.altAntes}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* DESPUÉS */}
        <div
          className="absolute inset-0"
          style={{ clipPath: "inset(0 0 0 var(--pos))" }}
          aria-hidden="true"
        >
          <Image
            src={card.srcDespues}
            alt={card.altDespues}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Label ANTES */}
        <span
          className="absolute bottom-3 left-3 z-10"
          style={{ ...labelBase, background: "rgba(29,53,87,0.70)", color: "#F1FAEE" }}
        >
          Antes
        </span>

        {/* Label DESPUÉS */}
        <span
          className="absolute bottom-3 right-3 z-10"
          style={{ ...labelBase, background: "#E63946", color: "#ffffff" }}
        >
          Después
        </span>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{
            left: "var(--pos)",
            width: 2,
            background: "#ffffff",
            transform: "translateX(-1px)",
            boxShadow: "0 0 8px rgba(0,0,0,0.35)",
          }}
          aria-hidden="true"
        />

        {/* Grip */}
        <span
          role="slider"
          aria-label={`Comparar antes y después: ${card.titulo}`}
          aria-valuenow={ariaValue}
          aria-valuemin={4}
          aria-valuemax={96}
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setGripHover(true)}
          onMouseLeave={() => setGripHover(false)}
          className="absolute z-30 flex items-center justify-center rounded-full focus-visible:outline-none"
          style={{
            left: "var(--pos)",
            top: "50%",
            transform: `translate(-50%, -50%) scale(${gripHover ? 1.1 : 1})`,
            width: 44,
            height: 44,
            background: "#ffffff",
            border: `2px solid ${gripHover ? "#E63946" : "#1D3557"}`,
            cursor: "ew-resize",
            touchAction: "none",
            boxShadow: gripHover
              ? "0 2px 12px rgba(230,57,70,0.35)"
              : "0 2px 10px rgba(0,0,0,0.25)",
            color: gripHover ? "#E63946" : "#1D3557",
            transition: "border-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s",
          }}
        >
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 6l-4 6 4 6M15 6l4 6-4 6" />
          </svg>
        </span>
      </div>

      {/* Info */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "1.125rem",
              fontWeight: 600,
              color: "#1D3557",
              letterSpacing: "-0.015em",
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {card.titulo}
          </h3>
          <p
            style={{
              marginTop: 4,
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "#6b7889",
              letterSpacing: "0.03em",
            }}
          >
            {card.detalle}
          </p>
        </div>
        <span
          style={{
            flexShrink: 0,
            marginTop: 2,
            fontFamily: "var(--font-hanken), sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 500,
            color: "#457B9D",
            whiteSpace: "nowrap",
          }}
        >
          {card.año}
        </span>
      </div>
    </motion.article>
  );
}

export default function ObrasSlider() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="obras"
      aria-label="Antes y después de nuestras reformas"
      className="py-16 lg:py-24"
      style={{ background: "#ffffff", borderTop: "1px solid rgba(29,53,87,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <h2 className="text-headline" style={{ color: "#1D3557" }}>
              Antes y después
            </h2>
            <p className="text-body mt-3" style={{ color: "#42526a", maxWidth: "52ch" }}>
              Obras reales, fotografiadas por nuestro propio equipo. Desliza el
              círculo sobre cada imagen para comparar.
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
            +800 obras entregadas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {obras.map((card, i) => (
            <BeforeAfterSlider
              key={card.titulo}
              card={card}
              index={i}
              reduce={reduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
