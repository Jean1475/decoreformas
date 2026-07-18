import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("encimera-de-cocina")!;

const materiales = [
  {
    nombre: "Cuarzo (tipo Silestone)",
    desc: "Superficie de cuarzo compuesto con resinas. Muy buena resistencia a manchas y arañazos, amplia gama de colores. Sensible al calor directo prolongado.",
  },
  {
    nombre: "Porcelánico sinterizado (tipo Dekton, Laminam)",
    desc: "Fabricado a alta presión y temperatura. Resiste muy bien el calor directo y los rayos UV, prácticamente inerte frente a manchas. Coste algo mayor que el cuarzo.",
  },
  {
    nombre: "Granito",
    desc: "Piedra natural de gran dureza y resistencia. Cada pieza es única por sus vetas naturales. Requiere sellado periódico para mantener su resistencia a manchas.",
  },
  {
    nombre: "Corian (superficie sólida)",
    desc: "Material acrílico sin poros, permite uniones invisibles y formas curvas. Fácil de reparar si se raya, aunque menos resistente al calor que la piedra.",
  },
  {
    nombre: "Laminado",
    desc: "La opción más económica, con gran variedad de acabados que imitan piedra o madera. Buena relación calidad-precio para cocinas de uso moderado.",
  },
];

export const metadata: Metadata = {
  title: "Encimeras de Cocina en Madrid Sur | Decoreformas",
  description:
    "Encimeras de cocina en cuarzo, porcelánico, granito, Corian y laminado en Leganés, Getafe, Alcorcón y Móstoles. Fabricación a medida.",
  alternates: { canonical: "/cocina/encimera-de-cocina" },
};

export default function EncimeraDeCocinaPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Cocina" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/cocina/encimera-de-cocina" />

        <section className="py-16 lg:py-24" style={{ background: "#F1FAEE", borderTop: "1px solid rgba(29,53,87,0.08)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-headline" style={{ color: "#1D3557" }}>
              Materiales disponibles
            </h2>
            <p className="text-body mt-4 prose-width" style={{ color: "#6b7889" }}>
              Trabajamos con distintos materiales según tu presupuesto y forma de usar la cocina.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {materiales.map((m) => (
                <div
                  key={m.nombre}
                  style={{ background: "#ffffff", borderRadius: 8, padding: "1.75rem" }}
                >
                  <h3 className="text-title" style={{ color: "#1D3557" }}>
                    {m.nombre}
                  </h3>
                  <p className="text-small mt-2" style={{ color: "#6b7889" }}>
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
