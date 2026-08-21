import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getServicio } from "@/lib/servicios-data";
import { zonas } from "@/lib/zonas";

const servicio = getServicio("reforma-local-comercial")!;

export const metadata: Metadata = {
  title: "Reforma de Locales Comerciales en Madrid | Decoreformas",
  description:
    "Reforma y acondicionamiento de locales comerciales, oficinas y hostelería en toda la Comunidad de Madrid. Obra por fases para reducir el cierre del negocio y presupuesto cerrado.",
  alternates: { canonical: "/reformas/reforma-local-comercial" },
  openGraph: {
    title: "Reforma de Locales Comerciales en Madrid | Decoreformas",
    description:
      "Reforma y acondicionamiento de locales comerciales, oficinas y hostelería en toda la Comunidad de Madrid. Obra por fases y presupuesto cerrado.",
    url: "/reformas/reforma-local-comercial",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function ReformaLocalPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Reforma comercial"
          titulo="Reforma de locales comerciales en Madrid"
          descripcion={servicio.resumen}
        />
        <ServicioIntro servicio={servicio} url="/reformas/reforma-local-comercial" />

        {/* Tipos de local: cada actividad tiene exigencias técnicas distintas */}
        <section className="py-16 lg:py-24" style={{ background: "#F1FAEE" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-headline" style={{ color: "#1D3557" }}>
              Cada actividad exige una obra distinta
            </h2>
            <p className="text-body mt-5 prose-width" style={{ color: "#42526a" }}>
              Un local vacío no se acondiciona igual según lo que vaya a albergar. La
              actividad determina las instalaciones obligatorias, el tipo de permiso y,
              en buena medida, el plazo y el presupuesto. Esto es lo que cambia en cada
              caso.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-12">
              <div>
                <h3 className="text-title" style={{ color: "#1D3557" }}>
                  Hostelería: bares, restaurantes y cafeterías
                </h3>
                <p className="text-small mt-3" style={{ color: "#6b7889" }}>
                  Es el uso más exigente. Salida de humos hasta cubierta, ventilación
                  dimensionada para el aforo, insonorización frente a vecinos, aseos
                  adaptados y protección contra incendios. Requiere licencia de actividad
                  y es donde más proyectos se retrasan por dejar los permisos para el
                  final.
                </p>
              </div>
              <div>
                <h3 className="text-title" style={{ color: "#1D3557" }}>
                  Retail: tiendas y comercio a pie de calle
                </h3>
                <p className="text-small mt-3" style={{ color: "#6b7889" }}>
                  Aquí el peso se lo llevan el escaparate, la iluminación técnica y la
                  distribución del recorrido de compra. Suele ser la obra más rápida, y
                  en muchos casos se resuelve con declaración responsable en lugar de
                  licencia.
                </p>
              </div>
              <div>
                <h3 className="text-title" style={{ color: "#1D3557" }}>
                  Oficinas y espacios de trabajo
                </h3>
                <p className="text-small mt-3" style={{ color: "#6b7889" }}>
                  Mamparas y distribución flexible, falso techo registrable, climatización
                  por zonas y cableado de datos. Obra limpia y predecible: normalmente
                  entre 4 y 8 semanas, con poca sorpresa una vez abierto el falso techo.
                </p>
              </div>
              <div>
                <h3 className="text-title" style={{ color: "#1D3557" }}>
                  Clínicas, centros de estética y consultas
                </h3>
                <p className="text-small mt-3" style={{ color: "#6b7889" }}>
                  Exigen acabados sanitarios, fontanería repartida por cada gabinete y
                  requisitos de accesibilidad estrictos. Suelen tener normativa sectorial
                  propia además de la municipal, así que conviene validar el proyecto
                  antes de tocar nada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso y licencias: la duda real que frena la contratación */}
        <section className="py-16 lg:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-headline" style={{ color: "#1D3557" }}>
              Cómo organizamos la obra para que el negocio cierre lo menos posible
            </h2>
            <p className="text-body mt-5 prose-width" style={{ color: "#42526a" }}>
              El coste de una reforma comercial no es solo el presupuesto: es también cada
              semana que el local no factura. Por eso el orden de las fases importa tanto
              como la obra misma.
            </p>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-12" style={{ listStyle: "none", padding: 0 }}>
              {[
                {
                  n: "01",
                  t: "Visita y comprobación de viabilidad",
                  d: "Vemos el local, medimos y comprobamos lo que puede bloquear la apertura: acometidas existentes, posibilidad real de salida de humos, accesibilidad y estado de la instalación eléctrica.",
                },
                {
                  n: "02",
                  t: "Permisos en marcha desde el primer día",
                  d: "La tramitación es casi siempre más lenta que la obra, así que arranca antes de picar la primera pared. Coordinamos la documentación técnica con quien tramite la licencia.",
                },
                {
                  n: "03",
                  t: "Presupuesto cerrado y calendario por fases",
                  d: "Una sola cifra y un calendario con fechas por fase. Si el local puede seguir abierto en parte, se sectoriza la obra y se define qué zona se ocupa en cada momento.",
                },
                {
                  n: "04",
                  t: "Ejecución con un único interlocutor",
                  d: "Albañilería, fontanería, electricidad, climatización y rótulo se coordinan internamente. Tú tratas con una persona, no con cinco gremios que se echan la culpa entre sí.",
                },
                {
                  n: "05",
                  t: "Certificados y entrega",
                  d: "Al terminar entregamos los boletines y certificados de las instalaciones, que son los que hacen falta para completar la licencia y poder abrir.",
                },
                {
                  n: "06",
                  t: "Posventa",
                  d: "Garantía documentada de la obra y servicio posventa. En un local que factura a diario, poder llamar y que alguien responda es parte del trabajo.",
                },
              ].map((paso) => (
                <li key={paso.n}>
                  <p
                    className="text-label"
                    style={{ color: "#E63946", marginBottom: "0.5rem", fontWeight: 700 }}
                  >
                    {paso.n}
                  </p>
                  <h3 className="text-title" style={{ color: "#1D3557" }}>
                    {paso.t}
                  </h3>
                  <p className="text-small mt-3" style={{ color: "#6b7889" }}>
                    {paso.d}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-14 pt-12" style={{ borderTop: "1px solid rgba(29,53,87,0.10)" }}>
              <h2 className="text-headline" style={{ color: "#1D3557" }}>
                Qué determina el precio de la reforma de un local
              </h2>
              <p className="text-body mt-5 prose-width" style={{ color: "#42526a" }}>
                La diferencia de coste entre dos locales del mismo tamaño puede ser del
                doble, y casi nunca está en los acabados: está en el punto de partida. Un
                local que ya tuvo la misma actividad conserva acometidas, desagües y
                extracción aprovechables. Un local diáfano que nunca tuvo uso comercial, o
                que cambia de actividad, obliga a crear esas instalaciones desde cero, y
                ahí es donde se va el presupuesto.
              </p>
              <p className="text-body mt-4 prose-width" style={{ color: "#42526a" }}>
                Los otros factores que más pesan son la potencia eléctrica contratada (si
                hay que ampliarla, entra tramitación con la compañía), la necesidad de
                salida de humos, la insonorización cuando hay viviendas encima y el estado
                de la fachada y el escaparate. Todo eso lo comprobamos en la visita antes
                de dar una cifra, precisamente para que el presupuesto cerrado lo sea de
                verdad y no crezca a mitad de obra.
              </p>
            </div>
          </div>
        </section>

        <Faq
          items={servicio.faq}
          titulo="Preguntas frecuentes sobre reforma de locales comerciales"
        />

        {/* Enlazado a zonas: refuerza el SEO local del cluster que ya posiciona */}
        <section className="py-16" style={{ background: "#F1FAEE" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-title" style={{ color: "#1D3557" }}>
              Reformamos locales en toda la Comunidad de Madrid
            </h2>
            <p className="text-small mt-3 prose-width" style={{ color: "#6b7889" }}>
              Trabajamos en Madrid capital y en el resto de la comunidad. Estas son
              algunas de las zonas donde reformamos locales, oficinas y hostelería con
              más frecuencia:
            </p>
            <ul className="flex flex-wrap gap-2 mt-6">
              {zonas.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/zonas/${z.slug}`}
                    style={{
                      display: "inline-block",
                      padding: "0.4375rem 0.8125rem",
                      borderRadius: 6,
                      background: "#ffffff",
                      border: "1px solid rgba(29,53,87,0.12)",
                      fontFamily: "var(--font-hanken), sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#1D3557",
                      textDecoration: "none",
                    }}
                  >
                    Locales en {z.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
