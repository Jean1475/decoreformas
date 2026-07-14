"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

interface ServicioLike {
  intro: string;
  incluye: string[];
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7l3 3 6-6" stroke="#E63946" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicioIntro({ servicio }: { servicio: ServicioLike }) {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 lg:py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16">
          <motion.div
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2 className="text-headline" style={{ color: "#1D3557" }}>
              Cómo lo hacemos
            </h2>
            <p className="text-body mt-5 prose-width" style={{ color: "#42526a" }}>
              {servicio.intro}
            </p>

            <div className="mt-10">
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2.5"
                style={{
                  fontFamily: "var(--font-hanken), sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "#E63946",
                  textDecoration: "none",
                }}
              >
                Pide un presupuesto sin compromiso
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M2.5 7.5h10m0 0L8.5 3.5m4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 0.1 }}
            style={{ background: "#F1FAEE", borderRadius: 8, padding: "2rem" }}
          >
            <p className="text-eyebrow mb-5" style={{ color: "#457B9D" }}>
              Qué incluye
            </p>
            <ul className="flex flex-col gap-3.5">
              {servicio.incluye.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ flexShrink: 0, marginTop: 3 }}>
                    <CheckIcon />
                  </span>
                  <span className="text-small" style={{ color: "#1D3557" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
