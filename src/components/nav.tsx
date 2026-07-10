"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#nosotros", label: "Nosotros" },
];

const TEL_DISPLAY = "660 56 53 24";
const TEL_HREF = "tel:+34660565324";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ink = scrolled ? "#1D3557" : "#ffffff";
  const inkSoft = scrolled ? "#42526a" : "rgba(255,255,255,0.78)";
  const borderColor = scrolled ? "rgba(29,53,87,0.10)" : "rgba(255,255,255,0.12)";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      aria-label="Navegación principal"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(29,53,87,0.0)",
        backdropFilter: scrolled ? "blur(12px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px) saturate(180%)" : "none",
        borderBottom: `1px solid ${borderColor}`,
        transition: "background 0.35s ease, border-color 0.35s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between gap-6 relative">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          style={{ textDecoration: "none" }}
          aria-label="DecorReformas — inicio"
        >
          <Image
            src="/decoreformas-bloom-navy.svg"
            alt=""
            width={26}
            height={26}
            aria-hidden="true"
            style={{
              filter: scrolled ? "none" : "brightness(0) invert(1)",
              transition: "filter 0.35s ease",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontWeight: 700,
              fontSize: "1.0625rem",
              letterSpacing: "-0.025em",
              color: ink,
              transition: "color 0.35s ease",
            }}
          >
            decoreformas
          </span>
        </Link>

        {/* Links desktop */}
        <div
          className="hidden md:flex items-center gap-6"
          style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center gap-1"
              style={{
                fontFamily: "var(--font-hanken), sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: inkSoft,
                textDecoration: "none",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = ink)}
              onMouseLeave={(e) => (e.currentTarget.style.color = inkSoft)}
            >
              {l.label}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flexShrink: 0, marginTop: 1 }}
              >
                <polyline points="2,3.5 5,6.5 8,3.5" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Right: phone + CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={TEL_HREF}
            aria-label={`Llamar al ${TEL_DISPLAY}`}
            className="flex items-center gap-1.5"
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: inkSoft,
              textDecoration: "none",
              transition: "color 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? "#E63946" : "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = inkSoft)}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a1 1 0 0 0-1.02.24l-1.57 1.97a15.05 15.05 0 0 1-6.92-6.92l1.97-1.57c.27-.27.35-.67.24-1.02A11.5 11.5 0 0 1 8.62 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.62c0-.55-.45-1-1-1z" />
            </svg>
            {TEL_DISPLAY}
          </a>

          <span aria-hidden="true" style={{ display: "block", width: 1, height: 18, background: borderColor, transition: "background 0.35s ease" }} />

          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-4 py-2"
            style={{
              background: "#E63946",
              color: "#ffffff",
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 600,
              borderRadius: "6px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#c8313d")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#E63946")}
          >
            Pide presupuesto
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 shrink-0"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                borderRadius: 1,
                background: ink,
                transformOrigin: "center",
                transition: "transform 0.3s ease, opacity 0.3s ease, background 0.35s ease",
                transform:
                  i === 0 && mobileOpen
                    ? "rotate(45deg) translateY(6.5px)"
                    : i === 2 && mobileOpen
                    ? "rotate(-45deg) translateY(-6.5px)"
                    : "none",
                opacity: i === 1 && mobileOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu — clip-path instead of max-height to avoid layout thrash */}
      <div
        id="mobile-menu"
        className="md:hidden"
        style={{
          background: "#ffffff",
          borderBottom: mobileOpen ? "1px solid rgba(29,53,87,0.10)" : "none",
          clipPath: mobileOpen ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          transition: "clip-path 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="px-6 pt-3 pb-6 flex flex-col gap-0">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-hanken), sans-serif",
                color: "#42526a",
                fontWeight: 500,
                fontSize: "1rem",
                textDecoration: "none",
                borderBottom: "1px solid rgba(29,53,87,0.07)",
                display: "block",
                padding: "14px 0",
              }}
            >
              {l.label}
            </Link>
          ))}

          <a
            href={TEL_HREF}
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#1D3557",
              textDecoration: "none",
              borderBottom: "1px solid rgba(29,53,87,0.07)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 0",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a1 1 0 0 0-1.02.24l-1.57 1.97a15.05 15.05 0 0 1-6.92-6.92l1.97-1.57c.27-.27.35-.67.24-1.02A11.5 11.5 0 0 1 8.62 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.62c0-.55-.45-1-1-1z" />
            </svg>
            {TEL_DISPLAY}
          </a>

          <Link
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: 16,
              background: "#E63946",
              color: "#ffffff",
              fontFamily: "var(--font-hanken), sans-serif",
              fontWeight: 600,
              fontSize: "0.9375rem",
              borderRadius: "6px",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
              padding: "14px 0",
            }}
          >
            Pide presupuesto
          </Link>
        </div>
      </div>
    </nav>
  );
}
