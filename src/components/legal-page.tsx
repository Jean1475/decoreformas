import type { ReactNode } from "react";

export interface LegalSeccion {
  titulo: string;
  cuerpo: ReactNode;
}

/**
 * Layout compartido para las páginas legales (privacidad, cookies).
 * Texto sobre fondo claro, ancho de lectura corto: son páginas para leer,
 * no para convertir, así que no llevan CTA ni bloque de contacto.
 */
export default function LegalPage({
  titulo,
  actualizado,
  secciones,
}: {
  titulo: string;
  actualizado: string;
  secciones: LegalSeccion[];
}) {
  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-8" style={{ paddingTop: 152, paddingBottom: 96 }}>
      <h1 className="text-display" style={{ color: "#1D3557" }}>
        {titulo}
      </h1>
      <p className="text-small mt-4" style={{ color: "#6b7889" }}>
        Última actualización: {actualizado}
      </p>

      <div className="mt-12 flex flex-col gap-10">
        {secciones.map((s) => (
          <section key={s.titulo}>
            <h2 className="text-headline" style={{ color: "#1D3557" }}>
              {s.titulo}
            </h2>
            <div
              className="text-body mt-3 flex flex-col gap-4"
              style={{ color: "#42526a" }}
            >
              {s.cuerpo}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
