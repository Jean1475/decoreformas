import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getServicio } from "@/lib/servicios-data";

const servicio = getServicio("reforma-integral")!;

export const metadata: Metadata = {
  title: "Reformas Integrales en Madrid | Decoreformas",
  description:
    "Reforma integral de pisos y viviendas en Leganés, Getafe, Alcorcón y Móstoles. Presupuesto cerrado, un único interlocutor y seguimiento semanal de obra.",
  alternates: { canonical: "/reformas/reforma-integral" },
  openGraph: {
    title: "Reformas Integrales en Madrid | Decoreformas",
    description: "Reforma integral de pisos y viviendas en Leganés, Getafe, Alcorcón y Móstoles. Presupuesto cerrado, un único interlocutor y seguimiento semanal de obra.",
    url: "/reformas/reforma-integral",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function ReformaIntegralPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Reforma integral"
          titulo="Reformas Integrales en Madrid"
          descripcion={servicio.resumen}
          precioDesde={servicio.precioDesde}
        />
        <ServicioIntro servicio={servicio} url="/reformas/reforma-integral" />

        <section className="py-16 lg:py-24" style={{ background: "#F1FAEE" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-headline" style={{ color: "#1D3557" }}>
              ¿Cuándo hace falta una reforma integral?
            </h2>
            <p className="text-body mt-5 prose-width" style={{ color: "#42526a" }}>
              No todas las viviendas necesitan tocarlo todo. Estas son las señales más
              claras de que una reforma integral es la opción con más sentido frente a
              renovar por estancias.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-12">
              <div>
                <h3 className="text-title" style={{ color: "#1D3557" }}>
                  Pisos que no se han tocado en 30-40 años
                </h3>
                <p className="text-small mt-3" style={{ color: "#6b7889" }}>
                  La instalación eléctrica y la fontanería de esa época no cumplen la
                  normativa actual. Cambiar solo acabados sin renovar lo que hay detrás
                  de la pared es un ahorro que se paga caro a los pocos años.
                </p>
              </div>
              <div>
                <h3 className="text-title" style={{ color: "#1D3557" }}>
                  Cambios de distribución
                </h3>
                <p className="text-small mt-3" style={{ color: "#6b7889" }}>
                  Unir cocina y salón, ganar un baño o reorganizar habitaciones implica
                  mover tabiquería, instalaciones y a veces bajantes. Es trabajo que
                  conviene planificar de una vez, no estancia a estancia.
                </p>
              </div>
              <div>
                <h3 className="text-title" style={{ color: "#1D3557" }}>
                  Viviendas heredadas o recién compradas
                </h3>
                <p className="text-small mt-3" style={{ color: "#6b7889" }}>
                  Cuando no conoces el estado real de las instalaciones, empezar de cero
                  te da certeza: sabes exactamente qué hay detrás de cada pared y con
                  qué garantía.
                </p>
              </div>
              <div>
                <h3 className="text-title" style={{ color: "#1D3557" }}>
                  Locales y viviendas para alquilar o vender
                </h3>
                <p className="text-small mt-3" style={{ color: "#6b7889" }}>
                  Una reforma integral bien planificada sube el valor y el precio de
                  mercado más que la suma de reformas parciales, y da una imagen
                  homogénea al conjunto de la vivienda.
                </p>
              </div>
            </div>

            <div className="mt-14 pt-12" style={{ borderTop: "1px solid rgba(29,53,87,0.10)" }}>
              <h2 className="text-headline" style={{ color: "#1D3557" }}>
                Materiales y garantía
              </h2>
              <p className="text-body mt-5 prose-width" style={{ color: "#42526a" }}>
                Trabajamos con fabricantes de garantía en cada partida —Roca, Grohe,
                Porcelanosa, Siemens y otras marcas con las que colaboramos
                habitualmente— y seleccionamos los materiales contigo según el
                presupuesto y el uso real del espacio, no según lo que sea más fácil de
                instalar. Toda reforma integral incluye documentación de garantías al
                finalizar la obra y servicio posventa durante doce meses.
              </p>
            </div>
          </div>
        </section>

        <Faq
          items={servicio.faq}
          titulo="Preguntas frecuentes sobre reforma integral"
        />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
