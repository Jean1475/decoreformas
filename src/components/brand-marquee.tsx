"use client";

import Image from "next/image";
import { Fragment } from "react";

type BrandVariant = "pill" | "bold" | "italic" | "spaced" | "stamp" | "plain";

interface Brand {
  name: string;
  sub?: string;
  variant: BrandVariant;
  logo?: { src: string; width: number; height: number };
}

const brands: Brand[] = [
  { name: "Porcelanosa", variant: "spaced", logo: { src: "/logos/porcelanosa_logo.svg", width: 130, height: 14 } },
  { name: "Roca", variant: "italic", logo: { src: "/logos/RocaLogo.svg.webp", width: 70, height: 34 } },
  { name: "KNAUF", variant: "bold", logo: { src: "/logos/knauf.svg", width: 84, height: 54 } },
  { name: "HANSGROHE", sub: "Est. 1901", variant: "stamp", logo: { src: "/logos/hansgrohe.svg", width: 130, height: 20 } },
  { name: "BTicino", variant: "pill", logo: { src: "/logos/bticino.svg", width: 96, height: 26 } },
  { name: "Grohe", variant: "italic", logo: { src: "/logos/grohe.svg", width: 60, height: 46 } },
  { name: "JUNG", variant: "spaced", logo: { src: "/logos/jung.svg", width: 84, height: 22 } },
  { name: "ROCKWOOL", sub: "Desde 1937", variant: "stamp" },
  { name: "Leroy Merlin Pro", variant: "plain", logo: { src: "/logos/leroy-merlin.svg", width: 44, height: 26 } },
  { name: "SCHNEIDER Electric", variant: "bold", logo: { src: "/logos/schneider-electric.svg", width: 118, height: 54 } },
  { name: "Saunier Duval", variant: "italic", logo: { src: "/logos/Saunier-duval-logo.svg", width: 90, height: 49 } },
  { name: "SIEMENS", variant: "pill", logo: { src: "/logos/siemens.svg", width: 96, height: 15 } },
];

const items = [...brands, ...brands];

const COLOR = "rgba(29,53,87,0.40)";

function BrandItem({ name, sub, variant, logo }: Brand) {
  if (logo) {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          opacity: 0.55,
          filter: "grayscale(1)",
        }}
      >
        <Image
          src={logo.src}
          alt={name}
          width={logo.width}
          height={logo.height}
          style={{ width: "auto", height: logo.height, maxWidth: logo.width }}
        />
      </span>
    );
  }

  if (variant === "pill") {
    return (
      <span style={{
        display: "inline-flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        color: COLOR,
        padding: "5px 12px",
        border: "1px solid currentColor",
        borderRadius: 999,
        fontFamily: "var(--font-hanken), sans-serif",
        fontSize: "0.6875rem",
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}>
        {name}
      </span>
    );
  }

  if (variant === "bold") {
    return (
      <span style={{
        display: "inline-flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        color: COLOR,
        padding: "5px 11px",
        border: "1px dashed currentColor",
        borderRadius: 3,
        fontFamily: "var(--font-hanken), sans-serif",
        fontSize: "0.6875rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
      }}>
        {name}
      </span>
    );
  }

  if (variant === "italic") {
    return (
      <span style={{
        display: "inline-flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        color: COLOR,
        fontFamily: "var(--font-hanken), sans-serif",
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: "1.375rem",
        letterSpacing: "-0.02em",
      }}>
        {name}
      </span>
    );
  }

  if (variant === "spaced") {
    return (
      <span style={{
        display: "inline-flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        color: COLOR,
        fontFamily: "var(--font-hanken), sans-serif",
        fontWeight: 600,
        fontSize: "0.75rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
      }}>
        {name}
      </span>
    );
  }

  if (variant === "stamp") {
    return (
      <span style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        whiteSpace: "nowrap",
        color: COLOR,
        lineHeight: 1,
        gap: 3,
      }}>
        <span style={{
          fontFamily: "var(--font-hanken), sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: "-0.015em",
        }}>
          {name}
        </span>
        {sub && (
          <span style={{
            fontFamily: "var(--font-hanken), sans-serif",
            fontSize: "0.5rem",
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            opacity: 0.55,
          }}>
            {sub}
          </span>
        )}
      </span>
    );
  }

  /* plain */
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      whiteSpace: "nowrap",
      color: COLOR,
      fontFamily: "var(--font-hanken), sans-serif",
      fontWeight: 600,
      fontSize: "0.9375rem",
      letterSpacing: "-0.01em",
    }}>
      {name}
    </span>
  );
}

export default function BrandMarquee() {
  return (
    <div
      aria-label="Marcas con las que trabajamos"
      className="relative overflow-hidden"
      style={{
        background: "#ffffff",
        paddingTop: 28,
        paddingBottom: 28,
        borderTop: "1px solid rgba(29,53,87,0.08)",
        borderBottom: "1px solid rgba(29,53,87,0.08)",
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10"
        style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-20 pointer-events-none z-10"
        style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        aria-hidden="true"
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 36,
          width: "max-content",
          animation: "brand-scroll 65s linear infinite",
        }}
      >
        {items.map((b, i) => (
          <Fragment key={i}>
            <BrandItem {...b} />
            <span
              aria-hidden="true"
              style={{
                flexShrink: 0,
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: "rgba(29,53,87,0.20)",
                display: "inline-block",
              }}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
