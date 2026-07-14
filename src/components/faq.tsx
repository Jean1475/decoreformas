"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

function FaqRow({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-panel-${index}`;

  return (
    <div style={{ borderBottom: "1px solid rgba(29,53,87,0.10)" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-center justify-between gap-6 text-left"
        style={{ padding: "1.5rem 0", background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          className="text-title"
          style={{ color: "#1D3557" }}
        >
          {item.pregunta}
        </span>
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: "1.5px solid rgba(29,53,87,0.22)",
            color: "#1D3557",
            transform: open ? "rotate(45deg)" : "none",
            transition: "transform 0.25s ease",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        id={id}
        style={{
          maxHeight: open ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          className="text-body"
          style={{ color: "#6b7889", paddingBottom: "1.5rem", maxWidth: "65ch" }}
        >
          {item.respuesta}
        </p>
      </div>
    </div>
  );
}

export default function Faq({
  items,
  titulo = "Preguntas frecuentes",
  descripcion,
  id = "faq",
}: {
  items: FaqItem[];
  titulo?: string;
  descripcion?: string;
  id?: string;
}) {
  const reduce = useReducedMotion();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })),
  };

  return (
    <section
      id={id}
      className="py-16 lg:py-24"
      style={{ background: "#ffffff", borderTop: "1px solid rgba(29,53,87,0.08)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10"
        >
          <h2 className="text-headline" style={{ color: "#1D3557" }}>
            {titulo}
          </h2>
          {descripcion && (
            <p className="text-body mt-4 prose-width" style={{ color: "#6b7889" }}>
              {descripcion}
            </p>
          )}
        </motion.div>

        <div className="max-w-3xl" style={{ borderTop: "1px solid rgba(29,53,87,0.10)" }}>
          {items.map((item, i) => (
            <FaqRow key={item.pregunta} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
