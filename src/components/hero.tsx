"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

type FormState = "idle" | "sending" | "success" | "error";

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="#A8DADC" aria-hidden="true">
      <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.44.59 3.425L7 8.91l-3.09 1.59L4.5 7.075 2 4.635l3.455-.545L7 1z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7l3 3 6-6" stroke="#A8DADC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const inputBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(168,218,220,0.25)",
  borderRadius: "6px",
  padding: "0.625rem 0.75rem",
  color: "#F1FAEE",
  fontFamily: "var(--font-hanken), sans-serif",
  fontSize: "0.875rem",
  outline: "none",
  width: "100%",
  transition: "border-color 0.16s",
};

export default function Hero() {
  const reduce = useReducedMotion();
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<{ nombre?: string; telefono?: string; tipo?: string }>({});

  const stagger = {
    animate: { transition: { staggerChildren: reduce ? 0 : 0.09 } },
  };

  const fadeUp = {
    initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: EASE_EXPO },
    },
  };

  function validateField(name: string, value: string) {
    if (name === "nombre" && !value.trim()) return "Escribe tu nombre";
    if (name === "telefono") {
      if (!value.trim()) return "Escribe tu teléfono";
      if (!/^[+\d\s\-()]{7,}$/.test(value)) return "Teléfono no válido";
    }
    if (name === "tipo" && !value) return "Elige el tipo de reforma";
    return undefined;
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    const msg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: msg }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nombre = fd.get("nombre") as string;
    const telefono = fd.get("telefono") as string;
    const tipo = fd.get("tipo") as string;

    const newErrors = {
      nombre: validateField("nombre", nombre),
      telefono: validateField("telefono", telefono),
      tipo: validateField("tipo", tipo),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setFormState("sending");
    try {
      /* Aquí conectar con el endpoint real (Formspree, API, etc.) */
      await new Promise((res) => setTimeout(res, 1200));
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  const isBusy = formState === "sending";

  return (
    <section
      id="inicio"
      aria-label="Hero"
      className="pattern-navy"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100vh",
        minHeight: 600,
        position: "relative",
      }}
    >
      {/* ── IZQUIERDA — contenido ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: 72,
        }}
      >
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          style={{
            width: "100%",
            maxWidth: 620,
            padding: "2rem 3.5rem 2.5rem",
          }}
        >
          {/* Kicker */}
          <motion.p
            variants={fadeUp}
            className="text-mono"
            style={{ color: "#A8DADC", marginBottom: "1.5rem", fontSize: "0.75rem" }}
          >
            Reformas integrales · Leganés · Getafe · Alcorcón · Móstoles
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.03,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              textWrap: "balance" as never,
              margin: 0,
            }}
          >
            Reformamos tu hogar
            <br />
            <span style={{ color: "#A8DADC" }}>sin sorpresas.</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="text-body"
            style={{
              color: "rgba(241,250,238,0.75)",
              lineHeight: 1.7,
              marginTop: "1.375rem",
              fontSize: "1.0625rem",
              maxWidth: "52ch",
            }}
          >
            Presupuesto cerrado desde el primer día, un único interlocutor de principio
            a fin y seguimiento semanal en el móvil.{" "}
            <span style={{ color: "#F1FAEE", fontWeight: 500 }}>
              Sin sustos. Sin letra pequeña.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginTop: "2.25rem" }}
          >
            <a
              href="https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.9rem 1.625rem",
                background: "#25D366",
                color: "#ffffff",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "opacity 0.18s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.11 4.91A9.82 9.82 0 0 0 12.05 2C6.58 2 2.13 6.45 2.13 11.92c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.92 9.92 0 0 0 4.79 1.22h.01c5.47 0 9.92-4.45 9.92-9.92 0-2.65-1.03-5.14-2.86-7.01zM12.05 20.18h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.25 8.25 0 0 1-1.27-4.4c0-4.55 3.71-8.26 8.27-8.26 2.21 0 4.28.86 5.84 2.42a8.21 8.21 0 0 1 2.42 5.84c.01 4.56-3.7 8.26-8.25 8.26zm4.53-6.18c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13s-.64.81-.79.97c-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.51.12-.11.25-.29.38-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.15 0-.31-.02-.48-.02s-.44.06-.67.31c-.23.25-.88.86-.88 2.09s.9 2.43 1.03 2.59c.13.17 1.78 2.72 4.32 3.81.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.29z" />
              </svg>
              Presupuesto gratis por WhatsApp
            </a>

            <a
              href="tel:+34600000000"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.9rem 1.5rem",
                border: "1.5px solid rgba(168,218,220,0.32)",
                color: "#F1FAEE",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                borderRadius: "6px",
                textDecoration: "none",
                transition: "border-color 0.18s, color 0.18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,218,220,0.72)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,218,220,0.32)";
                e.currentTarget.style.color = "#F1FAEE";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a1 1 0 0 0-1.02.24l-1.57 1.97a15.05 15.05 0 0 1-6.92-6.92l1.97-1.57c.27-.27.35-.67.24-1.02A11.5 11.5 0 0 1 8.62 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.62c0-.55-.45-1-1-1z" />
              </svg>
              600 00 00 00
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            style={{
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(168,218,220,0.14)",
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem",
            }}
          >
            {[
              { type: "check", text: "Presupuesto cerrado desde el primer día" },
              { type: "check", text: "25 años de oficio · +800 obras entregadas" },
              { type: "stars", text: "4.9 en Google · 127 reseñas", href: "https://g.co/kgs/decoreformas" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                {row.type === "stars" ? (
                  <span style={{ display: "flex", gap: "1px" }} aria-label="4.9 de 5 estrellas">
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  </span>
                ) : (
                  <span style={{ flexShrink: 0, display: "flex" }}><CheckIcon /></span>
                )}
                {row.href ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mono"
                    style={{
                      color: "rgba(241,250,238,0.58)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                      textDecorationColor: "rgba(168,218,220,0.30)",
                    }}
                  >
                    {row.text}
                  </a>
                ) : (
                  <span
                    className="text-mono"
                    style={{ color: "rgba(241,250,238,0.58)", fontSize: "0.7rem", letterSpacing: "0.12em" }}
                  >
                    {row.text}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── DERECHA — imagen full + formulario ── */}
      <motion.div
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1, transition: { duration: 1.1, delay: 0.15, ease: EASE_EXPO } }}
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {/* Imagen: espacio reformado real — salón Madrid 2024 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85&auto=format&fit=crop"
          alt="Salón reformado, suelo de madera clara y cocina integrada en tonos neutros"
          style={{
            position: "absolute",
            top: 72,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "calc(100% - 72px)",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />

        {/* Degradado: foto visible arriba, oscuro en zona del formulario */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 72,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, rgba(8,22,34,0.04) 0%, rgba(8,22,34,0.15) 30%, rgba(8,22,34,0.70) 58%, rgba(8,22,34,0.96) 80%, #081622 100%)",
          }}
        />

        {/* Formulario */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "2rem 2.5rem",
          }}
        >
          {formState === "success" ? (
            /* Estado de éxito */
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EXPO } }}
              style={{ textAlign: "center", padding: "1rem 0" }}
              role="status"
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "rgba(168,218,220,0.15)",
                  border: "1.5px solid rgba(168,218,220,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12l5 5L20 7" stroke="#A8DADC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#F1FAEE",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                }}
              >
                Recibido.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-hanken), sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(241,250,238,0.65)",
                  lineHeight: 1.55,
                }}
              >
                Te llamamos en menos de 24 horas. Si prefieres, escríbenos por{" "}
                <a
                  href="https://wa.me/34600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#A8DADC", textDecoration: "underline", textUnderlineOffset: "2px" }}
                >
                  WhatsApp
                </a>
                .
              </p>
            </motion.div>
          ) : (
            <>
              <p
                className="text-mono"
                style={{ color: "#A8DADC", marginBottom: "0.5rem", fontSize: "0.6rem" }}
              >
                Solicitar presupuesto
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
                  fontWeight: 700,
                  color: "#F1FAEE",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                  marginBottom: "1.125rem",
                }}
              >
                Te llamamos gratis.{" "}
                <span style={{ color: "#A8DADC", fontWeight: 400 }}>Sin compromiso.</span>
              </h2>

              <form
                onSubmit={handleSubmit}
                noValidate
                style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                {/* Fila nombre + teléfono */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      autoComplete="given-name"
                      required
                      aria-label="Tu nombre"
                      aria-invalid={!!errors.nombre}
                      aria-describedby={errors.nombre ? "err-nombre" : undefined}
                      disabled={isBusy}
                      style={{
                        ...inputBase,
                        borderColor: errors.nombre ? "rgba(230,57,70,0.7)" : "rgba(168,218,220,0.25)",
                        opacity: isBusy ? 0.55 : 1,
                      }}
                      onFocus={(e) => {
                        if (!errors.nombre) e.currentTarget.style.borderColor = "rgba(168,218,220,0.65)";
                      }}
                      onBlur={(e) => {
                        handleBlur(e);
                      }}
                    />
                    {errors.nombre && (
                      <span id="err-nombre" role="alert" style={{ fontSize: "0.6875rem", color: "#E63946", fontFamily: "var(--font-hanken), sans-serif" }}>
                        {errors.nombre}
                      </span>
                    )}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="Teléfono"
                      autoComplete="tel"
                      required
                      aria-label="Teléfono de contacto"
                      aria-invalid={!!errors.telefono}
                      aria-describedby={errors.telefono ? "err-telefono" : undefined}
                      disabled={isBusy}
                      style={{
                        ...inputBase,
                        borderColor: errors.telefono ? "rgba(230,57,70,0.7)" : "rgba(168,218,220,0.25)",
                        opacity: isBusy ? 0.55 : 1,
                      }}
                      onFocus={(e) => {
                        if (!errors.telefono) e.currentTarget.style.borderColor = "rgba(168,218,220,0.65)";
                      }}
                      onBlur={(e) => {
                        handleBlur(e);
                      }}
                    />
                    {errors.telefono && (
                      <span id="err-telefono" role="alert" style={{ fontSize: "0.6875rem", color: "#E63946", fontFamily: "var(--font-hanken), sans-serif" }}>
                        {errors.telefono}
                      </span>
                    )}
                  </div>
                </div>

                {/* Tipo de reforma */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <div style={{ position: "relative" }}>
                    <select
                      name="tipo"
                      defaultValue=""
                      aria-label="Tipo de reforma"
                      aria-invalid={!!errors.tipo}
                      aria-describedby={errors.tipo ? "err-tipo" : undefined}
                      disabled={isBusy}
                      style={{
                        background: "rgba(8,22,34,0.90)",
                        border: `1px solid ${errors.tipo ? "rgba(230,57,70,0.7)" : "rgba(168,218,220,0.25)"}`,
                        borderRadius: "6px",
                        padding: "0.625rem 2.25rem 0.625rem 0.75rem",
                        color: "#F1FAEE",
                        fontFamily: "var(--font-hanken), sans-serif",
                        fontSize: "0.875rem",
                        outline: "none",
                        width: "100%",
                        appearance: "none",
                        cursor: isBusy ? "not-allowed" : "pointer",
                        transition: "border-color 0.16s",
                        opacity: isBusy ? 0.55 : 1,
                      }}
                      onFocus={(e) => {
                        if (!errors.tipo) e.currentTarget.style.borderColor = "rgba(168,218,220,0.65)";
                      }}
                      onBlur={(e) => {
                        handleBlur(e);
                      }}
                    >
                      <option value="" disabled>¿Qué quieres reformar?</option>
                      <option value="cocina">Cocina</option>
                      <option value="bano">Baño</option>
                      <option value="integral">Piso completo</option>
                      <option value="local">Local comercial</option>
                      <option value="otro">Otro</option>
                    </select>
                    <svg
                      width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                      style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
                    >
                      <path d="M3 5l4 4 4-4" stroke="rgba(168,218,220,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {errors.tipo && (
                    <span id="err-tipo" role="alert" style={{ fontSize: "0.6875rem", color: "#E63946", fontFamily: "var(--font-hanken), sans-serif" }}>
                      {errors.tipo}
                    </span>
                  )}
                </div>

                {/* Error global de red */}
                {formState === "error" && (
                  <p
                    role="alert"
                    style={{
                      fontSize: "0.75rem",
                      color: "#E63946",
                      fontFamily: "var(--font-hanken), sans-serif",
                      background: "rgba(230,57,70,0.10)",
                      border: "1px solid rgba(230,57,70,0.25)",
                      borderRadius: "6px",
                      padding: "0.5rem 0.75rem",
                    }}
                  >
                    No se pudo enviar. Inténtalo de nuevo o llámanos al{" "}
                    <a href="tel:+34600000000" style={{ color: "#E63946", fontWeight: 600 }}>600 00 00 00</a>.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isBusy}
                  style={{
                    background: isBusy ? "#155961" : "#1D6A72",
                    color: "#F1FAEE",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    border: "none",
                    borderRadius: "6px",
                    padding: "0.75rem 1rem",
                    cursor: isBusy ? "not-allowed" : "pointer",
                    width: "100%",
                    transition: "background 0.16s, opacity 0.16s",
                    opacity: isBusy ? 0.8 : 1,
                    marginTop: "0.125rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => { if (!isBusy) e.currentTarget.style.background = "#155961"; }}
                  onMouseLeave={(e) => { if (!isBusy) e.currentTarget.style.background = "#1D6A72"; }}
                >
                  {isBusy ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                        style={{ animation: "spin 0.8s linear infinite" }}>
                        <circle cx="12" cy="12" r="10" stroke="rgba(241,250,238,0.3)" strokeWidth="2.5" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="#F1FAEE" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    "Quiero mi presupuesto gratis"
                  )}
                </button>

                <p
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: "0.5rem",
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: "rgba(241,250,238,0.35)",
                    textAlign: "center",
                  }}
                >
                  Sin spam · respuesta en menos de 24 h
                </p>
              </form>
            </>
          )}
        </div>
      </motion.div>

      {/* Animación del spinner */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { @keyframes spin { to { transform: none; } } }
      `}</style>
    </section>
  );
}
