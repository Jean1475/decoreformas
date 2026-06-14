"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#nosotros", label: "Nosotros" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "#ffffff" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(29,53,87,0.10)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          style={{ textDecoration: "none" }}
          aria-label="Decoreformas — inicio"
        >
          <Image
            src="/decoreformas-bloom-navy.svg"
            alt=""
            width={28}
            height={28}
            aria-hidden="true"
            style={{
              filter: scrolled
                ? "none"
                : "brightness(0) invert(1)",
              transition: "filter 0.3s",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 600,
              fontSize: "1.0625rem",
              letterSpacing: "-0.025em",
              color: scrolled ? "#1D3557" : "#ffffff",
              transition: "color 0.3s",
            }}
          >
            decoreformas
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-hanken), sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: scrolled ? "#42526a" : "rgba(255,255,255,0.82)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled ? "#1D3557" : "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled ? "#42526a" : "rgba(255,255,255,0.82)")
              }
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#contacto"
          className="hidden md:inline-flex items-center px-5 py-2.5"
          style={{
            background: "#E63946",
            color: "#ffffff",
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "0.875rem",
            fontWeight: 600,
            borderRadius: "6px",
            textDecoration: "none",
            letterSpacing: "-0.01em",
            transition: "opacity 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Pide presupuesto
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-6 mx-auto"
              style={{
                background: scrolled ? "#1D3557" : "#ffffff",
                transformOrigin: "center",
                transition: "transform 0.3s, opacity 0.3s, background 0.3s",
                transform:
                  i === 0 && mobileOpen
                    ? "rotate(45deg) translateY(5px)"
                    : i === 2 && mobileOpen
                    ? "rotate(-45deg) translateY(-5px)"
                    : "none",
                opacity: i === 1 && mobileOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: mobileOpen ? "400px" : "0",
          background: "#ffffff",
          transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
          borderBottom: mobileOpen ? "1px solid rgba(29,53,87,0.10)" : "none",
        }}
      >
        <div className="px-6 pt-2 pb-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="py-3.5"
              style={{
                fontFamily: "var(--font-hanken), sans-serif",
                color: "#42526a",
                fontWeight: 500,
                fontSize: "1rem",
                textDecoration: "none",
                borderBottom: "1px solid rgba(29,53,87,0.07)",
                display: "block",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-4 py-3.5 text-center"
            style={{
              background: "#E63946",
              color: "#ffffff",
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 600,
              fontSize: "0.9375rem",
              borderRadius: "6px",
              textDecoration: "none",
              display: "block",
            }}
          >
            Pide presupuesto
          </Link>
        </div>
      </div>
    </nav>
  );
}
