"use client";

import Link from "next/link";
import Image from "next/image";

const navegacion = [
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Cómo trabajamos" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
];

const servicios = [
  { href: "/reformas/reforma-integral", label: "Reforma integral" },
  { href: "/banos/mamparas-de-ducha", label: "Baños" },
  { href: "/cocina/encimera-de-cocina", label: "Cocina" },
  { href: "/parquet/tarima-flotante", label: "Parquet" },
  { href: "/servicios/fontaneros", label: "Servicios del hogar" },
  { href: "/climatizacion/aire-acondicionado", label: "Climatización" },
  { href: "/interiorismo", label: "Interiorismo" },
];

const zonas = [
  { href: "/zonas/leganes", label: "Leganés" },
  { href: "/zonas/getafe", label: "Getafe" },
  { href: "/zonas/alcorcon", label: "Alcorcón" },
  { href: "/zonas/mostoles", label: "Móstoles" },
  { href: "/zonas/pozuelo-de-alarcon", label: "Pozuelo de Alarcón" },
  { href: "/zonas/alcobendas", label: "Alcobendas y La Moraleja" },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-hanken), sans-serif",
  fontSize: "0.9375rem",
  fontWeight: 500,
  color: "rgba(241,250,238,0.62)",
  textDecoration: "none",
  transition: "color 0.2s ease",
};

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={linkStyle}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(241,250,238,0.62)")}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "#16283F",
        boxShadow: "0 1px 0 rgba(168,218,220,0.10) inset",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-x-8 gap-y-14">
          {/* Marca + descripción */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              style={{ textDecoration: "none" }}
              aria-label="Decoreformas — inicio"
            >
              <Image
                src="/decoreformas-house-hammer-white.svg"
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
              />
              <span
                style={{
                  fontFamily: "var(--font-hanken), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  letterSpacing: "-0.025em",
                  color: "#ffffff",
                }}
              >
                decoreformas
              </span>
            </Link>
            <p
              className="text-body mt-5"
              style={{ color: "rgba(241,250,238,0.55)", maxWidth: "32ch" }}
            >
              Reformas integrales y decoración de interiores en el sur de Madrid.
              Del proyecto a la entrega, sin sorpresas.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://wa.me/34660565324"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(168,218,220,0.20)",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(230,57,70,0.9)";
                  e.currentTarget.style.borderColor = "rgba(230,57,70,0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(168,218,220,0.20)";
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/decoreformas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(168,218,220,0.20)",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(230,57,70,0.9)";
                  e.currentTarget.style.borderColor = "rgba(230,57,70,0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(168,218,220,0.20)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.4" cy="6.6" r="0.6" fill="#ffffff" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-label mb-5" style={{ color: "rgba(168,218,220,0.55)" }}>
              Navegación
            </p>
            <ul className="flex flex-col gap-3.5">
              {navegacion.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <p className="text-label mb-5" style={{ color: "rgba(168,218,220,0.55)" }}>
              Servicios
            </p>
            <ul className="flex flex-col gap-3.5">
              {servicios.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto + zonas */}
          <div>
            <p className="text-label mb-5" style={{ color: "rgba(168,218,220,0.55)" }}>
              Contacto
            </p>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href="https://wa.me/34660565324"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(241,250,238,0.62)")}
                >
                  +34 660 56 53 24
                </a>
              </li>
              <li>
                <a
                  href="mailto:decorpinto@hotmail.com"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(241,250,238,0.62)")}
                >
                  decorpinto@hotmail.com
                </a>
              </li>
              <li className="text-body" style={{ color: "rgba(241,250,238,0.45)", fontSize: "0.9375rem" }}>
                Lunes a viernes, 9 h a 18 h
              </li>
            </ul>

            <p className="text-label mt-7 mb-3" style={{ color: "rgba(168,218,220,0.55)" }}>
              Zonas de trabajo
            </p>
            <ul className="flex flex-wrap gap-x-2 gap-y-1">
              {zonas.map((z, i) => (
                <li key={z.href} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <FooterLink href={z.href}>{z.label}</FooterLink>
                  {i < zonas.length - 1 && (
                    <span aria-hidden="true" style={{ color: "rgba(241,250,238,0.30)" }}>·</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Franja inferior */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(168,218,220,0.14)" }}
        >
          <p className="text-label" style={{ color: "rgba(241,250,238,0.35)" }}>
            &copy; {new Date().getFullYear()} Decoreformas. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacidad"
              className="text-label"
              style={{ color: "rgba(241,250,238,0.35)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(241,250,238,0.70)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(241,250,238,0.35)")}
            >
              Política de privacidad
            </Link>
            <Link
              href="/cookies"
              className="text-label"
              style={{ color: "rgba(241,250,238,0.35)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(241,250,238,0.70)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(241,250,238,0.35)")}
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
