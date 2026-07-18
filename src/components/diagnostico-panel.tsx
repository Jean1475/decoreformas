"use client";

import { useEffect, useRef, useState } from "react";
import { zonas } from "@/lib/zonas";

type Fase =
  | "tipo"
  | "detalle"
  | "zona"
  | "situacion"
  | "urgencia"
  | "fotos"
  | "contacto"
  | "cargando"
  | "resultado"
  | "error";

const PASOS_CON_PROGRESO: Fase[] = ["tipo", "detalle", "zona", "situacion", "urgencia", "fotos", "contacto"];

const PREGUNTAS_LIBRES: Record<"tipo" | "detalle" | "situacion" | "urgencia", { texto: string; placeholder: string }> = {
  tipo: {
    texto: "¿Qué quieres reformar?",
    placeholder: "Cocina, baño, piso completo, local comercial...",
  },
  detalle: {
    texto: "Cuéntanos más: metros, si es reforma completa o solo estética, habitaciones si aplica...",
    placeholder: "Ej: unos 8 m², quiero cambiar instalaciones y alicatado completo",
  },
  situacion: {
    texto: "¿Cuál es tu situación?",
    placeholder: "Acabo de comprar el piso, llevo tiempo viviendo aquí, es una vivienda heredada...",
  },
  urgencia: {
    texto: "¿Para cuándo te gustaría empezar?",
    placeholder: "Lo antes posible, en 1-3 meses, aún estoy explorando...",
  },
};

function ToolIcon({ d }: { d: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="rgba(241,250,238,0.55)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="#081622" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIconSmall() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7l3 3 6-6" stroke="#081622" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const inputBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.22)",
  borderRadius: "10px",
  padding: "0.7rem 0.85rem",
  color: "#F1FAEE",
  fontFamily: "var(--font-hanken), sans-serif",
  fontSize: "0.875rem",
  outline: "none",
  width: "100%",
  transition: "border-color 0.16s",
};

const textareaStyle: React.CSSProperties = {
  ...inputBase,
  resize: "none",
  lineHeight: 1.55,
};

const btnPrimary: React.CSSProperties = {
  background: "#E63946",
  color: "#F1FAEE",
  fontFamily: "var(--font-hanken), sans-serif",
  fontSize: "0.875rem",
  fontWeight: 600,
  letterSpacing: "-0.01em",
  border: "none",
  borderRadius: "10px",
  padding: "0.75rem 1rem",
  cursor: "pointer",
  width: "100%",
  transition: "background 0.16s, opacity 0.16s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
};

const cardOption: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "0.75rem 0.875rem",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.16)",
  background: "rgba(255,255,255,0.05)",
  cursor: "pointer",
  textAlign: "left",
  width: "100%",
  transition: "border-color 0.16s, background 0.16s",
  fontFamily: "var(--font-hanken), sans-serif",
};

function h2Style(): React.CSSProperties {
  return {
    fontFamily: "var(--font-hanken), sans-serif",
    fontSize: "clamp(1.05rem, 1.7vw, 1.375rem)",
    fontWeight: 700,
    color: "#F1FAEE",
    letterSpacing: "-0.02em",
    lineHeight: 1.25,
    marginBottom: "0.875rem",
    padding: "0 0.25rem",
  };
}

export default function DiagnosticoPanel({ reduce }: { reduce: boolean | null }) {
  const [fase, setFase] = useState<Fase>("tipo");
  const [visible, setVisible] = useState(true);
  const [dots, setDots] = useState(".");

  const [tipoTexto, setTipoTexto] = useState("");
  const [detalleTexto, setDetalleTexto] = useState("");
  const [zona, setZona] = useState("");
  const [sugerenciasAbiertas, setSugerenciasAbiertas] = useState(false);
  const [situacionTexto, setSituacionTexto] = useState("");
  const [urgenciaTexto, setUrgenciaTexto] = useState("");
  const [respuestaActual, setRespuestaActual] = useState("");
  const [fotos, setFotos] = useState<{ url: string; nombre: string }[]>([]);
  const [subiendoFoto, setSubiendoFoto] = useState(false);
  const [fotoError, setFotoError] = useState("");

  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const canalContacto = "whatsapp";
  const [rgpd, setRgpd] = useState(false);

  const [diagnostico, setDiagnostico] = useState("");
  const [rangoTexto, setRangoTexto] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (fase !== "cargando") return;
    const id = setInterval(() => setDots((d) => (d.length >= 3 ? "." : d + ".")), 400);
    return () => clearInterval(id);
  }, [fase]);

  useEffect(() => {
    if (fase === "tipo" || fase === "detalle" || fase === "situacion" || fase === "urgencia") {
      textareaRef.current?.focus();
    }
  }, [fase]);

  function transicionar(fn: () => void) {
    if (reduce) {
      fn();
      return;
    }
    setVisible(false);
    setTimeout(() => {
      fn();
      setVisible(true);
    }, 220);
  }

  function irA(f: Fase) {
    transicionar(() => setFase(f));
  }

  function enviarPreguntaLibre(campo: "tipo" | "detalle" | "situacion" | "urgencia", siguienteFase: Fase) {
    if (!respuestaActual.trim()) return;
    const valor = respuestaActual.trim();
    if (campo === "tipo") setTipoTexto(valor);
    if (campo === "detalle") setDetalleTexto(valor);
    if (campo === "situacion") setSituacionTexto(valor);
    if (campo === "urgencia") setUrgenciaTexto(valor);
    setRespuestaActual("");
    irA(siguienteFase);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>, campo: "tipo" | "detalle" | "situacion" | "urgencia", siguienteFase: Fase) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      enviarPreguntaLibre(campo, siguienteFase);
    }
  }

  async function subirFoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (fotos.length >= 3) {
      setFotoError("Máximo 3 fotos.");
      return;
    }
    setFotoError("");
    setSubiendoFoto(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error subiendo la imagen");
      setFotos((prev) => [...prev, { url: data.url, nombre: file.name }]);
    } catch (err) {
      setFotoError(err instanceof Error ? err.message : "No se pudo subir la foto.");
    } finally {
      setSubiendoFoto(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  function quitarFoto(idx: number) {
    setFotos((prev) => prev.filter((_, i) => i !== idx));
  }

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!nombre.trim() || !contacto.trim() || !rgpd) return;
    setErrorMsg("");
    irA("cargando");
    try {
      const res = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipoTexto,
          detalleTexto,
          zona,
          situacionTexto,
          urgenciaTexto,
          fotos: fotos.map((f) => f.url),
          nombre,
          contacto,
          canalContacto,
          rgpd,
        }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      transicionar(() => {
        setDiagnostico(data.diagnostico);
        setRangoTexto(data.rango_texto || "");
        setFase("resultado");
      });
    } catch {
      setErrorMsg("No se pudo generar el diagnóstico. Llámanos al 660 56 53 24.");
      transicionar(() => setFase("error"));
    }
  }

  function compartirResultado() {
    const texto = `Mi reforma en ${zona}: ${rangoTexto} (orientativo, Decoreformas)`;
    if (navigator.share) {
      navigator.share({ title: "Mi diagnóstico Decoreformas", text: texto }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(texto).catch(() => {});
    }
  }

  const pasoActualIdx = PASOS_CON_PROGRESO.indexOf(fase);
  const mostrarProgreso = pasoActualIdx !== -1;
  const totalPasos = PASOS_CON_PROGRESO.length;

  const camposLibres: Partial<Record<Fase, { campo: "tipo" | "detalle" | "situacion" | "urgencia"; siguienteFase: Fase }>> = {
    tipo: { campo: "tipo", siguienteFase: "detalle" },
    detalle: { campo: "detalle", siguienteFase: "zona" },
    situacion: { campo: "situacion", siguienteFase: "urgencia" },
    urgencia: { campo: "urgencia", siguienteFase: "fotos" },
  };
  const promptActivo = camposLibres[fase];

  return (
    <div
      className="liquid-glass"
      style={{ position: "relative", borderRadius: "20px", padding: "1.25rem 1.25rem 1rem" }}
    >
      {mostrarProgreso && (
        <div style={{ padding: "0 0.25rem", marginBottom: "0.875rem" }}>
          <div style={{ display: "flex", gap: 5, marginBottom: 8 }}>
            {PASOS_CON_PROGRESO.map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 3,
                  borderRadius: 999,
                  background: i <= pasoActualIdx ? "#A8DADC" : "rgba(168,218,220,0.16)",
                  transition: reduce ? "none" : "background 0.35s ease",
                }}
              />
            ))}
          </div>
          <div style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.6875rem", color: "rgba(241,250,238,0.45)", letterSpacing: "0.04em" }}>
            Paso {pasoActualIdx + 1} de {totalPasos}
          </div>
        </div>
      )}

      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.22s ease, transform 0.22s ease",
        }}
      >
        {promptActivo && (
          <div>
            <h2 style={h2Style()}>{PREGUNTAS_LIBRES[promptActivo.campo].texto}</h2>
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
                transition: "border-color 0.16s, background 0.16s",
              }}
            >
              <textarea
                ref={textareaRef}
                rows={2}
                placeholder={PREGUNTAS_LIBRES[promptActivo.campo].placeholder}
                value={respuestaActual}
                onChange={(e) => setRespuestaActual(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, promptActivo.campo, promptActivo.siguienteFase)}
                style={{ ...textareaStyle, background: "transparent", border: "none", borderRadius: 0, padding: "0.9rem 1rem 0.5rem" }}
              />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 0.625rem 0.625rem 0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "7px", border: "1px solid rgba(241,250,238,0.16)" }}>
                    <ToolIcon d="M12 5v14M5 12h14" />
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "7px" }}>
                    <ToolIcon d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "7px" }}>
                    <ToolIcon d="M8 13h8M8 17h5M8 3v4H4M14 3l6 6v12H4V3h10z" />
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => enviarPreguntaLibre(promptActivo.campo, promptActivo.siguienteFase)}
                  disabled={!respuestaActual.trim()}
                  aria-label="Siguiente"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: respuestaActual.trim() ? "#A8DADC" : "rgba(168,218,220,0.22)",
                    border: "none",
                    cursor: respuestaActual.trim() ? "pointer" : "not-allowed",
                    transition: "background 0.16s",
                    flexShrink: 0,
                  }}
                >
                  <SendIcon />
                </button>
              </div>
            </div>
            <span style={{ display: "block", fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.6875rem", color: "rgba(241,250,238,0.35)", marginTop: "0.5rem", padding: "0 0.25rem" }}>
              Enter para continuar
            </span>
          </div>
        )}

        {fase === "zona" && (
          <div>
            <h2 style={h2Style()}>¿Dónde está la vivienda?</h2>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                aria-label="Zona"
                placeholder="Escribe tu municipio o barrio..."
                autoComplete="off"
                value={zona}
                onChange={(e) => { setZona(e.target.value); setSugerenciasAbiertas(true); }}
                onFocus={() => setSugerenciasAbiertas(true)}
                onBlur={() => setTimeout(() => setSugerenciasAbiertas(false), 120)}
                style={inputBase}
              />
              {sugerenciasAbiertas && (() => {
                const filtradas = zonas.filter((z) =>
                  z.nombre.toLowerCase().includes(zona.trim().toLowerCase())
                );
                if (!zona.trim() || filtradas.length > 0) {
                  return (
                    <div
                      role="listbox"
                      style={{
                        position: "absolute",
                        top: "calc(100% + 6px)",
                        left: 0,
                        right: 0,
                        background: "rgba(8,22,34,0.92)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "12px",
                        overflow: "auto",
                        maxHeight: "9.5rem",
                        zIndex: 10,
                        boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
                      }}
                    >
                      {(zona.trim() ? filtradas : zonas).map((z) => (
                        <button
                          key={z.slug}
                          type="button"
                          onMouseDown={(e) => { e.preventDefault(); setZona(z.nombre); setSugerenciasAbiertas(false); }}
                          style={{
                            display: "block",
                            width: "100%",
                            textAlign: "left",
                            padding: "0.625rem 0.85rem",
                            background: "transparent",
                            border: "none",
                            borderBottom: "1px solid rgba(255,255,255,0.08)",
                            color: "#F1FAEE",
                            fontFamily: "var(--font-hanken), sans-serif",
                            fontSize: "0.8125rem",
                            fontWeight: 500,
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(168,218,220,0.12)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                        >
                          {z.nombre}
                        </button>
                      ))}
                    </div>
                  );
                }
                return null;
              })()}
            </div>
            <span style={{ display: "block", fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.6875rem", color: "rgba(241,250,238,0.35)", marginTop: "0.5rem", padding: "0 0.25rem" }}>
              Si no ves tu zona en la lista, escríbela igualmente.
            </span>
            <button
              type="button"
              onClick={() => irA("situacion")}
              disabled={!zona.trim()}
              style={{ ...btnPrimary, marginTop: "0.75rem", opacity: zona.trim() ? 1 : 0.4, cursor: zona.trim() ? "pointer" : "not-allowed" }}
            >
              Siguiente →
            </button>
          </div>
        )}

        {fase === "fotos" && (
          <div>
            <h2 style={h2Style()}>Sube 1-3 fotos del espacio (opcional)</h2>
            <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.75rem", color: "rgba(241,250,238,0.5)", padding: "0 0.25rem", marginBottom: "0.75rem" }}>
              Nos ayuda a ajustar mejor el presupuesto en la visita. No es obligatorio.
            </p>

            {fotos.length > 0 && (
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                {fotos.map((f, i) => (
                  <div
                    key={f.url}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      background: "rgba(168,218,220,0.14)",
                      border: "1px solid rgba(168,218,220,0.3)",
                      borderRadius: "8px",
                      padding: "0.375rem 0.5rem",
                      fontSize: "0.75rem",
                      color: "#F1FAEE",
                      fontFamily: "var(--font-hanken), sans-serif",
                    }}
                  >
                    <span style={{ maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.nombre}</span>
                    <button
                      type="button"
                      onClick={() => quitarFoto(i)}
                      aria-label={`Quitar ${f.nombre}`}
                      style={{ background: "none", border: "none", color: "rgba(241,250,238,0.6)", cursor: "pointer", fontSize: "0.875rem", lineHeight: 1, padding: 0 }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {fotoError && (
              <p style={{ color: "#E63946", fontSize: "0.75rem", fontFamily: "var(--font-hanken), sans-serif", marginBottom: "0.5rem" }}>{fotoError}</p>
            )}

            <input ref={fileInputRef} type="file" accept="image/*" onChange={subirFoto} style={{ display: "none" }} id="foto-input" />
            <label
              htmlFor="foto-input"
              style={{
                ...cardOption,
                justifyContent: "center",
                gap: "0.5rem",
                cursor: subiendoFoto || fotos.length >= 3 ? "not-allowed" : "pointer",
                opacity: subiendoFoto || fotos.length >= 3 ? 0.5 : 1,
                marginBottom: "0.75rem",
              }}
            >
              <ToolIcon d="M12 5v14M5 12h14" />
              <span style={{ color: "#F1FAEE", fontSize: "0.8125rem", fontWeight: 600 }}>
                {subiendoFoto ? "Subiendo..." : fotos.length >= 3 ? "Máximo 3 fotos" : "Añadir foto"}
              </span>
            </label>

            <div style={{ display: "flex", gap: "0.625rem" }}>
              <button type="button" onClick={() => irA("contacto")} style={{ ...btnPrimary, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.22)" }}>
                Omitir
              </button>
              <button type="button" onClick={() => irA("contacto")} style={btnPrimary}>
                Siguiente →
              </button>
            </div>
          </div>
        )}

        {fase === "contacto" && (
          <form onSubmit={enviar} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            <h2 style={{ ...h2Style(), marginBottom: "0.125rem" }}>¿Dónde te mandamos el diagnóstico?</h2>
            <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.75rem", color: "rgba(241,250,238,0.45)", padding: "0 0.25rem", marginBottom: "0.25rem" }}>
              Sin spam. Solo tu análisis y, si quieres, te llamamos.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              <input
                type="text"
                placeholder="Tu nombre"
                autoComplete="given-name"
                required
                aria-label="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                style={inputBase}
              />
              <input
                type="tel"
                placeholder="Teléfono o email"
                autoComplete="tel"
                required
                aria-label="Teléfono o email de contacto"
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
                style={inputBase}
              />
            </div>

            <label style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", cursor: "pointer", marginTop: "0.25rem" }}>
              <span
                onClick={() => setRgpd((v) => !v)}
                role="checkbox"
                aria-checked={rgpd}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); setRgpd((v) => !v); } }}
                style={{
                  flexShrink: 0,
                  width: 18,
                  height: 18,
                  borderRadius: 5,
                  border: `1.5px solid ${rgpd ? "#A8DADC" : "rgba(255,255,255,0.35)"}`,
                  background: rgpd ? "#A8DADC" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "0.0625rem",
                }}
              >
                {rgpd && <CheckIconSmall />}
              </span>
              <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.6875rem", color: "rgba(241,250,238,0.6)", lineHeight: 1.4 }}>
                Acepto la política de privacidad y el tratamiento de mis datos para recibir este diagnóstico y ser contactado por Decoreformas.
              </span>
            </label>

            <button
              type="submit"
              disabled={!nombre.trim() || !contacto.trim() || !rgpd}
              style={{
                ...btnPrimary,
                marginTop: "0.25rem",
                opacity: nombre.trim() && contacto.trim() && rgpd ? 1 : 0.5,
                cursor: nombre.trim() && contacto.trim() && rgpd ? "pointer" : "not-allowed",
              }}
            >
              Ver mi diagnóstico →
            </button>
          </form>
        )}

        {fase === "cargando" && (
          <div style={{ padding: "0.25rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 0.75rem 0.375rem 0.5rem",
                background: "rgba(168,218,220,0.10)",
                border: "1px solid rgba(168,218,220,0.22)",
                borderRadius: 999,
                marginBottom: "0.75rem",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#A8DADC", animation: reduce ? "none" : "heroPulse 1.1s ease-in-out infinite" }}
              />
              <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.02em", color: "rgba(241,250,238,0.8)" }}>
                Consultando criterios de reforma{dots}
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "1.0625rem", fontWeight: 700, color: "#F1FAEE", letterSpacing: "-0.015em", margin: 0 }}>
              Analizando tu proyecto{dots}
            </p>
          </div>
        )}

        {fase === "resultado" && (
          <div>
            <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.6875rem", letterSpacing: "0.14em", color: "rgba(168,218,220,0.75)", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Tu diagnóstico
            </p>

            {rangoTexto && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  background: "rgba(168,218,220,0.15)",
                  border: "1.5px solid rgba(168,218,220,0.4)",
                  borderRadius: "12px",
                  marginBottom: "0.625rem",
                }}
              >
                <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "1.0625rem", fontWeight: 700, color: "#F1FAEE", letterSpacing: "-0.01em" }}>
                  {rangoTexto}
                </span>
                <button
                  type="button"
                  onClick={compartirResultado}
                  aria-label="Compartir diagnóstico"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M18 8a3 3 0 1 0-2.83-4H15a3 3 0 0 0 .05 3.11L8.91 10.7a3 3 0 1 0 0 2.6l6.14 3.59A3 3 0 1 0 15 15l-.02.14-6.13-3.58a3 3 0 0 0 0-1.12l6.13-3.58c.29.14.61.14.02.14z" fill="rgba(241,250,238,0.75)" />
                  </svg>
                </button>
              </div>
            )}

            <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.9375rem", lineHeight: 1.6, color: "rgba(241,250,238,0.85)", marginBottom: "0.75rem" }}>
              {diagnostico}
            </p>

            <p style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.6875rem", lineHeight: 1.5, color: "rgba(241,250,238,0.4)", marginBottom: "1rem" }}>
              Esto es una orientación inicial, no un presupuesto cerrado. El precio final se confirma tras una visita gratuita a tu proyecto.
            </p>

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.14)",
                paddingTop: "0.875rem",
                marginBottom: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: "#F1FAEE" }}>
                En menos de 24h te llamamos.
              </span>
              <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: "0.75rem", color: "rgba(241,250,238,0.55)" }}>
                25 años de oficio en Madrid Sur, con equipo propio, sin subcontratas.
              </span>
            </div>

            <a
              href="https://wa.me/34660565324?text=Hola%2C%20acabo%20de%20hacer%20el%20diagn%C3%B3stico%20y%20me%20gustar%C3%ADa%20hablar."
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...btnPrimary, textDecoration: "none" }}
            >
              Hablar por WhatsApp →
            </a>
          </div>
        )}

        {fase === "error" && (
          <div>
            <p
              role="alert"
              style={{
                fontSize: "0.8125rem",
                color: "#E63946",
                fontFamily: "var(--font-hanken), sans-serif",
                background: "rgba(230,57,70,0.10)",
                border: "1px solid rgba(230,57,70,0.25)",
                borderRadius: "6px",
                padding: "0.625rem 0.875rem",
                marginBottom: "0.875rem",
              }}
            >
              {errorMsg}
            </p>
            <a href="tel:+34660565324" style={{ ...btnPrimary, textDecoration: "none" }}>
              Llamar ahora →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
