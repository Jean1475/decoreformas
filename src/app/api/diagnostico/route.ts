import { NextRequest } from "next/server";
import { Resend } from "resend";
import { readFileSync } from "fs";
import { join } from "path";
import { SITE_URL } from "@/lib/urls";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

type TipoReforma = "cocina" | "bano" | "vivienda" | "local";
type Alcance = "completa" | "estetica";
type CanalContacto = "whatsapp" | "llamada" | "email";

interface DiagnosticoPayload {
  tipoTexto: string;
  detalleTexto: string;
  zona: string;
  situacionTexto: string;
  urgenciaTexto: string;
  fotos?: string[];
  nombre: string;
  contacto: string;
  canalContacto: CanalContacto;
  rgpd: boolean;
}

interface ExtraccionEstructurada {
  tipo: TipoReforma;
  m2: number | null;
  alcance: Alcance | null;
  urgente: boolean;
}

const TIPO_LABELS: Record<TipoReforma, string> = {
  cocina: "Cocina",
  bano: "Baño",
  vivienda: "Vivienda completa",
  local: "Local comercial",
};

const CANAL_LABELS: Record<CanalContacto, string> = {
  whatsapp: "WhatsApp",
  llamada: "Llamada",
  email: "Email",
};

// ─── Extracción determinista de respaldo (sin IA) ─────────────────────────
// Se usa si no hay ANTHROPIC_API_KEY o si la llamada de clasificación falla.
function extraccionFallback(tipoTexto: string, detalleTexto: string, urgenciaTexto: string): ExtraccionEstructurada {
  const t = tipoTexto.toLowerCase();
  let tipo: TipoReforma = "vivienda";
  if (t.includes("cocina")) tipo = "cocina";
  else if (t.includes("baño") || t.includes("bano")) tipo = "bano";
  else if (t.includes("local") || t.includes("comercial") || t.includes("oficina") || t.includes("tienda")) tipo = "local";
  else if (t.includes("piso") || t.includes("vivienda") || t.includes("casa") || t.includes("integral")) tipo = "vivienda";

  const m2Match = (tipoTexto + " " + detalleTexto).match(/(\d{1,4})\s*m²|(\d{1,4})\s*m2|(\d{1,4})\s*metros/i);
  const m2 = m2Match ? Number(m2Match[1] || m2Match[2] || m2Match[3]) : null;

  const d = detalleTexto.toLowerCase();
  let alcance: Alcance | null = null;
  if (d.includes("completa") || d.includes("instalacion") || d.includes("integral")) alcance = "completa";
  else if (d.includes("estétic") || d.includes("estetic") || d.includes("solo cambiar") || d.includes("acabados")) alcance = "estetica";

  const u = urgenciaTexto.toLowerCase();
  const urgente = u.includes("antes posible") || u.includes("cuanto antes") || u.includes("ya") || u.includes("urgen");

  return { tipo, m2, alcance, urgente };
}

// ─── Rango de precio: reglas deterministas, no generado por IA ───────────
// Ancla en los precios orientativos ya públicos del sitio:
// baño desde 3.000€, cocina desde 6.000€, integral desde 35.000€ (80m²).
function calcularRango(tipo: TipoReforma, m2: number | null, alcance: Alcance | null): { min: number; max: number } {
  const alcanceMult = alcance === "estetica" ? 0.6 : 1;

  switch (tipo) {
    case "bano": {
      const base = m2 && m2 > 6 ? 4200 : 3000;
      return { min: Math.round(base * alcanceMult), max: Math.round(base * 1.7 * alcanceMult) };
    }
    case "cocina": {
      const base = m2 && m2 > 12 ? 8000 : 6000;
      return { min: Math.round(base * alcanceMult), max: Math.round(base * 1.65 * alcanceMult) };
    }
    case "vivienda": {
      const m = m2 || 80;
      const perM2Min = 380;
      const perM2Max = 520;
      return {
        min: Math.round((m * perM2Min * alcanceMult) / 500) * 500,
        max: Math.round((m * perM2Max * alcanceMult) / 500) * 500,
      };
    }
    case "local": {
      const m = m2 || 60;
      const perM2Min = 200;
      const perM2Max = 320;
      return {
        min: Math.round((m * perM2Min * alcanceMult) / 500) * 500,
        max: Math.round((m * perM2Max * alcanceMult) / 500) * 500,
      };
    }
  }
}

function formatearEuros(n: number): string {
  return n.toLocaleString("es-ES") + " €";
}

// Adjunto inline referenciado via cid: — más compatible que data URI (Outlook/Hotmail no renderiza data: en <img>).
const LOGO_CONTENT_ID = "decoreformas-logo";
const LOGO_BUFFER = readFileSync(join(process.cwd(), "public", "decoreformas-bloom-navy-email.png"));

// ─── Paleta de marca (src/app/globals.css) ─────────────────────────────
const NAVY = "#1D3557";
const RED = "#E63946";
const CERULEAN = "#457B9D";
const FROST = "#A8DADC";

function esEmailValido(valor: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim());
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const EMAIL_WRAPPER_STYLE = `background:#ffffff;padding:32px 16px;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;`;
const CARD_STYLE = `max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid rgba(29,53,87,0.10);`;
const HEADER_STYLE = `background:#ffffff;padding:22px 28px;border-bottom:1px solid rgba(29,53,87,0.08);`;
const BODY_STYLE = `padding:28px;color:${NAVY};`;
const FOOTER_STYLE = `padding:18px 28px 26px;color:rgba(29,53,87,0.45);font-size:12px;`;

function emailHeader(): string {
  return `
    <tr>
      <td style="${HEADER_STYLE}">
        <img src="cid:${LOGO_CONTENT_ID}" alt="" width="32" height="32" style="display:block;" />
      </td>
    </tr>`;
}

function emailFooter(): string {
  return `
    <tr>
      <td style="${FOOTER_STYLE}">
        Reformas integrales en Madrid Sur (Leganés, Getafe, Alcorcón, Móstoles, Pozuelo de Alarcón, Alcobendas)<br/>
        <a href="${SITE_URL}" style="color:rgba(29,53,87,0.55);">${SITE_URL.replace("https://", "")}</a>
      </td>
    </tr>`;
}

function campoFila(label: string, valor: string): string {
  return `
    <tr>
      <td style="padding:10px 0;border-top:1px solid rgba(29,53,87,0.08);font-size:13px;color:rgba(29,53,87,0.55);width:150px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-top:1px solid rgba(29,53,87,0.08);font-size:14px;color:${NAVY};vertical-align:top;">${valor}</td>
    </tr>`;
}

function construirEmailLead(params: {
  esUrgente: boolean;
  nombre: string;
  contacto: string;
  canalContacto: CanalContacto;
  tipoTexto: string;
  detalleTexto: string;
  clasificado: string;
  zona: string;
  situacionTexto: string;
  urgenciaTexto: string;
  fotos: string[] | undefined;
  rangoTexto: string;
  diagnostico: string;
  rgpd: boolean;
}): string {
  const { esUrgente, nombre, contacto, canalContacto, tipoTexto, detalleTexto, clasificado, zona, situacionTexto, urgenciaTexto, fotos, rangoTexto, diagnostico, rgpd } = params;

  const fotosHtml = fotos?.length
    ? fotos.map((f) => `<a href="${escapeHtml(f)}" style="color:${CERULEAN};">${escapeHtml(f)}</a>`).join("<br/>")
    : "Ninguna";

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="${EMAIL_WRAPPER_STYLE}"><tr><td>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="${CARD_STYLE}">
      ${emailHeader()}
      <tr><td style="${BODY_STYLE}">
        ${esUrgente ? `<div style="background:${RED};color:#ffffff;font-weight:600;font-size:13px;padding:10px 14px;border-radius:8px;margin-bottom:18px;">⚡ Cliente quiere empezar lo antes posible — priorizar contacto</div>` : ""}
        <h2 style="margin:0 0 4px;font-size:20px;color:${NAVY};">Nuevo lead: ${escapeHtml(clasificado)}</h2>
        <p style="margin:0 0 20px;font-size:14px;color:rgba(29,53,87,0.6);">${escapeHtml(zona)}</p>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:22px;">
          ${campoFila("Nombre", escapeHtml(nombre || "(no proporcionado)"))}
          ${campoFila("Contacto", escapeHtml(contacto || "(no proporcionado)"))}
          ${campoFila("Canal preferido", escapeHtml(CANAL_LABELS[canalContacto] || "(no indicado)"))}
        </table>

        <h3 style="margin:0 0 10px;font-size:14px;color:${NAVY};text-transform:uppercase;letter-spacing:0.4px;">Proyecto</h3>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:22px;">
          ${campoFila("Qué quiere reformar", escapeHtml(tipoTexto))}
          ${campoFila("Detalle", escapeHtml(detalleTexto))}
          ${campoFila("Clasificado como", escapeHtml(clasificado))}
          ${campoFila("Situación", escapeHtml(situacionTexto))}
          ${campoFila("Urgencia", escapeHtml(urgenciaTexto))}
          ${campoFila("Fotos", fotosHtml)}
        </table>

        <h3 style="margin:0 0 10px;font-size:14px;color:${NAVY};text-transform:uppercase;letter-spacing:0.4px;">Diagnóstico enviado al cliente</h3>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:22px;">
          ${campoFila("Rango mostrado", escapeHtml(rangoTexto))}
          ${campoFila("Texto", escapeHtml(diagnostico))}
        </table>

        <p style="margin:0;font-size:12px;color:rgba(29,53,87,0.45);">Consentimiento RGPD: ${rgpd ? "Aceptado" : "NO aceptado"}</p>
      </td></tr>
      ${emailFooter()}
    </table>
  </td></tr></table>`;
}

function construirEmailCliente(params: {
  nombre: string;
  zona: string;
  rangoTexto: string;
  diagnostico: string;
}): string {
  const { nombre, zona, rangoTexto, diagnostico } = params;
  const primerNombre = nombre.trim().split(/\s+/)[0] || "";

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="${EMAIL_WRAPPER_STYLE}"><tr><td>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="${CARD_STYLE}">
      ${emailHeader()}
      <tr><td style="${BODY_STYLE}">
        <h2 style="margin:0 0 4px;font-size:20px;color:${NAVY};">${primerNombre ? `Hola ${escapeHtml(primerNombre)}, aquí` : "Aquí"} tienes tu diagnóstico</h2>
        <p style="margin:0 0 20px;font-size:14px;color:rgba(29,53,87,0.6);">Proyecto en ${escapeHtml(zona)}</p>

        <div style="background:rgba(168,218,220,0.16);border-radius:12px;padding:18px 20px;margin-bottom:20px;border:1px solid ${FROST};">
          <p style="margin:0 0 4px;font-size:12px;color:rgba(29,53,87,0.55);text-transform:uppercase;letter-spacing:0.4px;">Rango orientativo</p>
          <p style="margin:0;font-size:22px;font-weight:600;color:${NAVY};">${escapeHtml(rangoTexto)}</p>
        </div>

        <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:${NAVY};white-space:pre-line;">${escapeHtml(diagnostico)}</p>

        <p style="margin:0 0 6px;font-size:13px;color:rgba(29,53,87,0.6);">Nos pondremos en contacto contigo en breve para concretar una visita gratuita y darte un presupuesto cerrado.</p>
      </td></tr>
      ${emailFooter()}
    </table>
  </td></tr></table>`;
}

async function llamarClaude(system: string, userMessage: string, maxTokens: number): Promise<string | null> {
  if (!process.env.ANTHROPIC_API_KEY) return null;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: maxTokens,
        system,
        messages: [{ role: "user", content: userMessage }],
      }),
    });
    if (!res.ok) {
      console.error("[diagnostico] Anthropic error:", await res.text());
      return null;
    }
    const data = await res.json();
    return data.content[0].text as string;
  } catch (err) {
    console.error("[diagnostico] Anthropic call error:", err);
    return null;
  }
}

function parseJsonLoose(raw: string): Record<string, unknown> | null {
  try {
    const clean = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
    return JSON.parse(clean);
  } catch {
    return null;
  }
}

const EXTRACCION_SYSTEM_PROMPT = `Extraes datos estructurados de las respuestas libres de un cliente de reformas. No inventes datos que no estén en el texto: si no se menciona, deja el campo en null.

Responde ÚNICAMENTE con JSON válido, sin markdown. Formato exacto:
{"tipo": "cocina" | "bano" | "vivienda" | "local", "m2": number | null, "alcance": "completa" | "estetica" | null, "urgente": boolean}

"tipo" es obligatorio, elige el más probable según el texto. "alcance": "completa" si menciona cambiar instalaciones/fontanería/electricidad o reforma integral; "estetica" si solo menciona acabados/pintura/cambios superficiales; null si no está claro. "urgente" es true si el cliente transmite prisa por empezar.`;

const DIAGNOSTICO_SYSTEM_PROMPT = `Eres el asistente de Decoreformas, empresa de reformas integrales en Madrid Sur (Leganés, Getafe, Alcorcón, Móstoles, Pozuelo de Alarcón, Alcobendas). Tono directo, cercano, profesional. Sin emojis. Nunca inventes cifras de precio: el rango ya viene calculado y se te da como dato fijo, tú solo escribes el texto alrededor.

Genera un diagnóstico breve (máximo 4 líneas) que:
1. Reconoce el proyecto concreto del cliente, usando sus propias palabras cuando aporten cercanía.
2. Señala el punto más importante a tener en cuenta para ESE proyecto (plazos, orden de trabajos, permisos, qué mirar antes de decidir).
3. Termina invitando a la visita gratuita para cerrar presupuesto, sin presionar.

Responde ÚNICAMENTE con JSON válido, sin markdown, sin texto extra. Formato exacto:
{"diagnostico": "texto del diagnóstico en máximo 4 líneas"}`;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as DiagnosticoPayload;
    const { tipoTexto, detalleTexto, zona, situacionTexto, urgenciaTexto, fotos, nombre, contacto, canalContacto, rgpd } = body;

    if (!tipoTexto?.trim() || !detalleTexto?.trim()) {
      return Response.json({ error: "Faltan datos del proyecto" }, { status: 400 });
    }
    if (!zona?.trim() || !situacionTexto?.trim() || !urgenciaTexto?.trim()) {
      return Response.json({ error: "Faltan datos del proyecto" }, { status: 400 });
    }
    if (!nombre?.trim() || !contacto?.trim()) {
      return Response.json({ error: "Faltan datos de contacto" }, { status: 400 });
    }
    if (!rgpd) {
      return Response.json({ error: "Falta aceptar la política de privacidad" }, { status: 400 });
    }

    // ── Paso 1: clasificar el texto libre en campos estructurados ──
    let extraido: ExtraccionEstructurada = extraccionFallback(tipoTexto, detalleTexto, urgenciaTexto);

    const extraccionRaw = await llamarClaude(
      EXTRACCION_SYSTEM_PROMPT,
      `Qué quiere reformar: ${tipoTexto}\nDetalle: ${detalleTexto}\nUrgencia: ${urgenciaTexto}`,
      200
    );
    if (extraccionRaw) {
      const parsed = parseJsonLoose(extraccionRaw);
      if (parsed && typeof parsed.tipo === "string" && parsed.tipo in TIPO_LABELS) {
        extraido = {
          tipo: parsed.tipo as TipoReforma,
          m2: typeof parsed.m2 === "number" ? parsed.m2 : extraido.m2,
          alcance: parsed.alcance === "completa" || parsed.alcance === "estetica" ? parsed.alcance : extraido.alcance,
          urgente: typeof parsed.urgente === "boolean" ? parsed.urgente : extraido.urgente,
        };
      }
    }

    // ── Paso 2: rango de precio determinista sobre los campos clasificados ──
    const rango = calcularRango(extraido.tipo, extraido.m2, extraido.alcance);
    const rangoTexto = `${formatearEuros(rango.min)} – ${formatearEuros(rango.max)}`;

    // ── Paso 3: diagnóstico en lenguaje natural, IA solo redacta el texto ──
    const userMessage = `Perfil del cliente (en sus propias palabras):
1. Qué quiere reformar: ${tipoTexto}
2. Detalle: ${detalleTexto}
3. Zona: ${zona}
4. Situación: ${situacionTexto}
5. Urgencia: ${urgenciaTexto}
6. Rango de precio ya calculado (no lo inventes, úsalo tal cual si lo mencionas): ${rangoTexto}`;

    let diagnostico = `Para tu proyecto en ${zona}, el rango habitual está entre ${rangoTexto}. El presupuesto cerrado te lo damos gratis tras una visita.`;
    const diagnosticoRaw = await llamarClaude(DIAGNOSTICO_SYSTEM_PROMPT, userMessage, 400);
    if (diagnosticoRaw) {
      const parsed = parseJsonLoose(diagnosticoRaw);
      if (parsed && typeof parsed.diagnostico === "string") diagnostico = parsed.diagnostico;
    }

    const esUrgente = extraido.urgente;
    const clasificado = `${TIPO_LABELS[extraido.tipo]}${extraido.m2 ? `, ${extraido.m2} m²` : ""}${extraido.alcance ? `, ${extraido.alcance === "completa" ? "reforma completa" : "solo estética"}` : ""}`;

    let emailEnviado = false;
    let emailClienteEnviado = false;
    if (resend) {
      try {
        const { error: resendError } = await resend.emails.send({
          from: "Decoreformas <leads@decorreformas.com>",
          to: "decorpinto@hotmail.com",
          subject: `${esUrgente ? "⚡ URGENTE — " : ""}Nuevo lead: ${TIPO_LABELS[extraido.tipo]} en ${zona} (${nombre || "sin nombre"})`,
          html: construirEmailLead({
            esUrgente,
            nombre,
            contacto,
            canalContacto,
            tipoTexto,
            detalleTexto,
            clasificado,
            zona,
            situacionTexto,
            urgenciaTexto,
            fotos,
            rangoTexto,
            diagnostico,
            rgpd,
          }),
          attachments: [
            { filename: "logo.png", content: LOGO_BUFFER, contentId: LOGO_CONTENT_ID },
          ],
        });
        if (resendError) {
          console.error("[diagnostico] Email send error:", resendError);
        } else {
          emailEnviado = true;
        }
      } catch (emailError) {
        console.error("[diagnostico] Email send error:", emailError);
      }

      if (esEmailValido(contacto)) {
        try {
          const { error: resendClienteError } = await resend.emails.send({
            from: "Decoreformas <hola@decorreformas.com>",
            to: contacto.trim(),
            subject: `Tu diagnóstico de reforma en ${zona}`,
            html: construirEmailCliente({ nombre, zona, rangoTexto, diagnostico }),
            attachments: [
              { filename: "logo.png", content: LOGO_BUFFER, contentId: LOGO_CONTENT_ID },
            ],
          });
          if (resendClienteError) {
            console.error("[diagnostico] Email cliente send error:", resendClienteError);
          } else {
            emailClienteEnviado = true;
          }
        } catch (emailError) {
          console.error("[diagnostico] Email cliente send error:", emailError);
        }
      }
    }

    return Response.json({
      diagnostico,
      rango_min: rango.min,
      rango_max: rango.max,
      rango_texto: rangoTexto,
      email_enviado: emailEnviado,
      email_cliente_enviado: emailClienteEnviado,
    });
  } catch (err) {
    console.error("[diagnostico] error:", err);
    return Response.json({ error: "Error generando el diagnóstico" }, { status: 500 });
  }
}
