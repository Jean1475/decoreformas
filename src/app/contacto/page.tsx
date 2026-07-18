import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import Contacto from "@/components/contacto";

export const metadata: Metadata = {
  title: "Contacto | Decoreformas",
  description:
    "Pide tu presupuesto gratis para reformas en Leganés, Getafe, Alcorcón y Móstoles. Sin compromiso.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | Decoreformas",
    description: "Pide tu presupuesto gratis para reformas en Leganés, Getafe, Alcorcón y Móstoles. Sin compromiso.",
    url: "/contacto",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function ContactoPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Contacto"
          titulo="Hablemos de tu reforma"
          descripcion="Cuéntanos qué necesitas y te respondemos con un presupuesto cerrado, sin compromiso."
        />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
