const obras = [
  { nombre: "Cocina abierta", zona: "Leganés", año: "2025" },
  { nombre: "Baño · microcemento", zona: "Getafe", año: "2025" },
  { nombre: "Reforma integral 110 m²", zona: "Alcorcón", año: "2024" },
  { nombre: "Salón y comedor", zona: "Móstoles", año: "2024" },
  { nombre: "Dormitorio + vestidor", zona: "Fuenlabrada", año: "2024" },
  { nombre: "Cocina office", zona: "Madrid centro", año: "2025" },
  { nombre: "Reforma baño", zona: "Parla", año: "2024" },
  { nombre: "Piso completo", zona: "Pinto", año: "2025" },
];

const items = [...obras, ...obras];

function Pill({ nombre, zona, año }: { nombre: string; zona: string; año: string }) {
  return (
    <div
      className="flex-none flex items-center gap-3 px-4 py-2 rounded-full"
      style={{
        background: "rgba(168,218,220,0.07)",
        border: "1px solid rgba(168,218,220,0.15)",
      }}
    >
      {/* Miniaturas antes/después */}
      <div
        className="flex-none rounded-full overflow-hidden"
        style={{ width: 64, height: 40, display: "flex", gap: 1, background: "rgba(168,218,220,0.15)" }}
        aria-hidden="true"
      >
        <div
          style={{
            flex: 1,
            background: "repeating-linear-gradient(135deg, rgba(168,218,220,0.08) 0 5px, rgba(168,218,220,0.16) 5px 6px)",
          }}
        />
        <div
          style={{
            flex: 1,
            background: "repeating-linear-gradient(135deg, rgba(230,57,70,0.18) 0 5px, rgba(230,57,70,0.30) 5px 6px)",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span
          style={{
            fontFamily: "var(--font-hanken), sans-serif",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#F1FAEE",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
          }}
        >
          {nombre}
        </span>
        <span
          style={{
            fontFamily: "var(--font-hanken), sans-serif",
            fontSize: "0.625rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase" as const,
            color: "rgba(168,218,220,0.60)",
            whiteSpace: "nowrap",
          }}
        >
          {zona} ·{" "}
          <span style={{ color: "#E63946" }}>{año}</span>
        </span>
      </div>
    </div>
  );
}

export default function StripMarquee() {
  return (
    <div
      aria-label="Obras recientes"
      className="relative overflow-hidden py-4"
      style={{
        background: "#1D3557",
        borderTop: "1px solid rgba(168,218,220,0.10)",
        borderBottom: "1px solid rgba(168,218,220,0.10)",
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10"
        style={{ background: "linear-gradient(to right, #1D3557, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-20 pointer-events-none z-10"
        style={{ background: "linear-gradient(to left, #1D3557, transparent)" }}
        aria-hidden="true"
      />

      <div
        className="animate-strip flex gap-3"
        style={{
          width: "max-content",
          animation: "strip-scroll 55s linear infinite",
        }}
      >
        {items.map((o, i) => (
          <Pill key={i} {...o} />
        ))}
      </div>
    </div>
  );
}
