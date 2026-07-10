import Nav from "@/components/nav";
import Hero from "@/components/hero";
import BrandMarquee from "@/components/brand-marquee";
import Servicios from "@/components/servicios";
import Proyectos from "@/components/proyectos";
import ObrasSlider from "@/components/obras-slider";
import Proceso from "@/components/proceso";
import Testimonios from "@/components/testimonios";
import Nosotros from "@/components/nosotros";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BrandMarquee />
        <Proyectos />
        <Servicios />
        <ObrasSlider />
        <Proceso />
        <Testimonios />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
