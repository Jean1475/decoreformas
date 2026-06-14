"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const tipos = [
  "Reforma integral",
  "Decoración de interiores",
  "Reforma de cocina o baño",
  "Espacio comercial",
  "Otro",
];

interface FormState {
  nombre: string;
  contacto: string;
  tipo: string;
  mensaje: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(168,218,220,0.25)",
  borderRadius: "4px",
  padding: "0.875rem 1rem",
  fontSize: "1rem",
  color: "#ffffff",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
  fontFamily: "var(--font-hanken), sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-space-mono), monospace",
  fontSize: "0.6875rem",
  fontWeight: 400,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(168,218,220,0.70)",
  marginBottom: "0.5rem",
};

export default function Contacto() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState<FormState>({
    nombre: "",
    contacto: "",
    tipo: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.contacto || !form.tipo) {
      setError("Completa los campos obligatorios para continuar.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setEnviado(true);

    /* Abre WhatsApp con los datos del formulario prellenados */
    const msg = encodeURIComponent(
      `Hola, soy ${form.nombre} (${form.contacto}).\nProyecto: ${form.tipo}${form.mensaje ? `\n${form.mensaje}` : ""}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/34600000000?text=${msg}`, "_blank", "noopener");
    }, 700);
  };

  const focusInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(168,218,220,0.70)";
    e.currentTarget.style.background = "rgba(255,255,255,0.12)";
  };
  const blurInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(168,218,220,0.25)";
    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
  };

  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-36 overflow-hidden pattern-navy"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info column */}
          <motion.div
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p
              className="text-mono mb-4"
              style={{ color: "#A8DADC", fontSize: "0.6875rem" }}
            >
              Contacto
            </p>
            <h2 className="text-headline" style={{ color: "#ffffff" }}>
              Cuéntanos tu proyecto
            </h2>
            <p
              className="text-body mt-5 prose-width"
              style={{ color: "rgba(241,250,238,0.72)", lineHeight: 1.72 }}
            >
              Te respondemos en menos de 24 horas con una valoración inicial.
              Si el proyecto encaja, coordinamos una visita gratuita al espacio.
            </p>

            <div
              className="mt-12 flex flex-col"
              style={{ borderTop: "1px solid rgba(168,218,220,0.18)" }}
            >
              {/* WhatsApp */}
              <div
                className="py-5"
                style={{ borderBottom: "1px solid rgba(168,218,220,0.12)" }}
              >
                <p
                  className="text-mono"
                  style={{ color: "rgba(168,218,220,0.55)", fontSize: "0.625rem" }}
                >
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/34XXXXXXXXX"
                  style={{
                    display: "block",
                    marginTop: "0.375rem",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A8DADC")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  +34 XXX XXX XXX
                </a>
              </div>

              {/* Email */}
              <div
                className="py-5"
                style={{ borderBottom: "1px solid rgba(168,218,220,0.12)" }}
              >
                <p
                  className="text-mono"
                  style={{ color: "rgba(168,218,220,0.55)", fontSize: "0.625rem" }}
                >
                  Email
                </p>
                <a
                  href="mailto:info@decoreformas.es"
                  style={{
                    display: "block",
                    marginTop: "0.375rem",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A8DADC")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  info@decoreformas.es
                </a>
              </div>

              {/* Hours */}
              <div className="py-5">
                <p
                  className="text-mono"
                  style={{ color: "rgba(168,218,220,0.55)", fontSize: "0.625rem" }}
                >
                  Horario
                </p>
                <p
                  style={{
                    marginTop: "0.375rem",
                    fontFamily: "var(--font-hanken), sans-serif",
                    fontSize: "1.0625rem",
                    fontWeight: 500,
                    color: "rgba(241,250,238,0.85)",
                    lineHeight: 1.4,
                  }}
                >
                  Lunes a viernes, 9 h — 18 h
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: reduce ? 0 : 0.12 }}
          >
            {enviado ? (
              <div className="h-full flex flex-col items-start justify-center gap-5 py-16">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(168,218,220,0.18)" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 11l5 5 9-9"
                      stroke="#A8DADC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-headline" style={{ color: "#ffffff" }}>
                  Mensaje recibido
                </h3>
                <p className="text-body" style={{ color: "rgba(241,250,238,0.72)" }}>
                  Te respondemos en menos de 24 horas. Si el proyecto encaja,
                  coordinamos una visita gratuita.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div>
                  <label htmlFor="nombre" style={labelStyle}>
                    Nombre *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    style={inputStyle}
                    onFocus={focusInput}
                    onBlur={blurInput}
                  />
                </div>

                <div>
                  <label htmlFor="contacto" style={labelStyle}>
                    Teléfono o email *
                  </label>
                  <input
                    id="contacto"
                    name="contacto"
                    type="text"
                    autoComplete="tel"
                    value={form.contacto}
                    onChange={handleChange}
                    placeholder="+34 600 000 000 o tu@email.com"
                    required
                    style={inputStyle}
                    onFocus={focusInput}
                    onBlur={blurInput}
                  />
                </div>

                <div>
                  <label htmlFor="tipo" style={labelStyle}>
                    Tipo de proyecto *
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    value={form.tipo}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={focusInput}
                    onBlur={blurInput}
                  >
                    <option value="" style={{ background: "#1D3557", color: "#fff" }}>
                      Selecciona una opción
                    </option>
                    {tipos.map((t) => (
                      <option key={t} value={t} style={{ background: "#1D3557", color: "#fff" }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" style={labelStyle}>
                    Cuéntanos el proyecto
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Superficie aproximada, estado actual, qué quieres cambiar…"
                    style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                    onFocus={focusInput}
                    onBlur={blurInput}
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    className="text-label"
                    style={{ color: "#A8DADC" }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex items-center justify-center gap-2.5 px-8 py-4"
                  style={{
                    background: loading ? "rgba(230,57,70,0.6)" : "#E63946",
                    color: "#ffffff",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    borderRadius: "6px",
                    border: "none",
                    cursor: loading ? "wait" : "pointer",
                    letterSpacing: "-0.01em",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) e.currentTarget.style.opacity = "0.88";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  {loading ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin"
                        aria-hidden="true"
                      />
                      Enviando…
                    </>
                  ) : (
                    <>
                      Enviar solicitud
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                        <path
                          d="M2.5 7.5h10m0 0L8.5 3.5m4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-label" style={{ color: "rgba(168,218,220,0.50)" }}>
                  Sin compromiso. Respondemos en menos de 24 horas.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer strip */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-8 mt-24 pt-8"
        style={{ borderTop: "1px solid rgba(168,218,220,0.14)" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              color: "rgba(241,250,238,0.45)",
              letterSpacing: "-0.025em",
            }}
          >
            decoreformas
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <p className="text-label" style={{ color: "rgba(241,250,238,0.30)" }}>
              &copy; {new Date().getFullYear()} Decoreformas. Todos los derechos reservados.
            </p>
            <a
              href="/privacidad"
              className="text-label"
              style={{
                color: "rgba(241,250,238,0.30)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(241,250,238,0.65)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(241,250,238,0.30)")}
            >
              Política de privacidad
            </a>
            <a
              href="/cookies"
              className="text-label"
              style={{
                color: "rgba(241,250,238,0.30)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(241,250,238,0.65)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(241,250,238,0.30)")}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
