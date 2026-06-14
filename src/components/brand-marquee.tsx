"use client";

/* Marcas y proveedores con los que trabaja DecorReformas.
   Tratamientos tipográficos variados para dar ritmo editorial
   sin necesidad de logos reales. */

type BrandVariant = "pill" | "mono" | "italic" | "spaced" | "stamp" | "plain";

interface Brand {
  name: string;
  sub?: string;
  variant: BrandVariant;
}

const brands: Brand[] = [
  { name: "PORCELANOSA", variant: "mono" },
  { name: "Roca & Co.", variant: "italic" },
  { name: "KNAUF", variant: "spaced" },
  { name: "HANSGROHE", sub: "Est. 1901", variant: "stamp" },
  { name: "BTicino", variant: "pill" },
  { name: "Grohe", variant: "italic" },
  { name: "JUNG", variant: "spaced" },
  { name: "ROCKWOOL", sub: "Desde 1937", variant: "stamp" },
  { name: "Leroy Merlin Pro", variant: "plain" },
  { name: "SCHNEIDER Electric", variant: "mono" },
  { name: "Saunier Duval", variant: "italic" },
  { name: "SIEMENS HOME", variant: "pill" },
];

const items = [...brands, ...brands];

const COLOR = "rgba(29,53,87,0.40)";

function BrandItem({ name, sub, variant }: Brand) {
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
        fontFamily: "var(--font-space-mono), monospace",
        fontSize: "0.6875rem",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        fontWeight: 500,
      }}>
        {name}
      </span>
    );
  }

  if (variant === "mono") {
    return (
      <span style={{
        display: "inline-flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        color: COLOR,
        padding: "5px 11px",
        border: "1px dashed currentColor",
        borderRadius: 3,
        fontFamily: "var(--font-space-mono), monospace",
        fontSize: "0.6875rem",
        letterSpacing: "0.08em",
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
        fontFamily: "var(--font-space-grotesk), sans-serif",
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
        letterSpacing: "0.28em",
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
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: "-0.015em",
        }}>
          {name}
        </span>
        {sub && (
          <span style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.5rem",
            letterSpacing: "0.20em",
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
      fontFamily: "var(--font-space-grotesk), sans-serif",
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
          <>
            <BrandItem key={`brand-${i}`} {...b} />
            <span
              key={`dot-${i}`}
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
          </>
        ))}
      </div>
    </div>
  );
}
