"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Zona } from "@/lib/zonas";
import { serviciosInfo } from "@/lib/servicios-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const SITE_URL = "https://decorreformas.com";

export default function ZonaContent({ zona }: { zona: Zona }) {
  const reduce = useReducedMotion();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Reformas en ${zona.nombre}`,
    description: zona.intro,
    url: `${SITE_URL}/zonas/${zona.slug}`,
    provider: { "@id": `${SITE_URL}/#negocio` },
    areaServed: { "@type": "City", name: zona.nombre },
  };

  return (
    <section className="py-16 lg:py-24" style={{ background: "#ffffff" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16">
          <motion.div
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2 className="text-headline" style={{ color: "#1D3557" }}>
              Reformas en {zona.nombre}
            </h2>
            <p className="text-body mt-5 prose-width" style={{ color: "#42526a" }}>
              {zona.detalle}
            </p>
            <p className="text-body mt-5 prose-width" style={{ color: "#42526a" }}>
              {zona.porQueElegirnos}
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
              Servicios en {zona.nombre}
            </p>
            <ul className="flex flex-col gap-1">
              {serviciosInfo.map((s) => (
                <li key={s.slug} style={{ borderBottom: "1px solid rgba(29,53,87,0.10)" }}>
                  <Link
                    href={`/reformas/${s.slug}`}
                    className="flex items-center justify-between gap-3 group"
                    style={{
                      padding: "0.875rem 0",
                      fontFamily: "var(--font-hanken), sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "#1D3557",
                      textDecoration: "none",
                    }}
                  >
                    {s.nombreCorto}
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M3 7h8m0 0-3.5-3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
