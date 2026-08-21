import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de cookies | Decoreformas",
  description:
    "Esta web no utiliza cookies de analítica, publicidad ni seguimiento. Te explicamos exactamente qué se guarda en tu navegador.",
  alternates: { canonical: "/cookies" },
  // Página de servicio: debe existir y ser accesible, pero no compite en búsqueda.
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPage
          titulo="Política de cookies"
          actualizado="21 de agosto de 2026"
          secciones={[
            {
              titulo: "Esta web no usa cookies de seguimiento",
              cuerpo: (
                <>
                  <p>
                    A día de hoy, decorreformas.com no instala cookies de analítica, de publicidad ni de
                    seguimiento de ningún tipo. No usamos Google Analytics, ni píxeles de redes sociales,
                    ni herramientas de mapas de calor.
                  </p>
                  <p>
                    Por eso no verás un banner pidiéndote permiso: no hay nada que consentir. Si en el
                    futuro incorporamos alguna herramienta de medición, actualizaremos esta página y
                    pediremos tu consentimiento antes de activarla.
                  </p>
                </>
              ),
            },
            {
              titulo: "Qué sí puede guardarse en tu navegador",
              cuerpo: (
                <>
                  <p>
                    El proveedor que aloja la web puede utilizar cookies estrictamente técnicas para
                    servir las páginas correctamente y protegerlas frente a abusos. Son necesarias para
                    que el sitio funcione y están exentas de consentimiento según la normativa vigente.
                  </p>
                  <p>
                    Tu navegador también guarda archivos de la web en caché (imágenes, tipografías,
                    hojas de estilo) para que las siguientes visitas carguen más rápido. Eso no es una
                    cookie ni permite identificarte.
                  </p>
                </>
              ),
            },
            {
              titulo: "Servicios externos que abres tú",
              cuerpo: (
                <p>
                  Si pulsas el botón de WhatsApp o el enlace a Instagram, saldrás de nuestra web y
                  pasarás a un servicio de terceros que sí aplica sus propias políticas de cookies. Esa
                  navegación ya no depende de nosotros y se rige por las condiciones de cada plataforma.
                </p>
              ),
            },
            {
              titulo: "Cómo controlar las cookies",
              cuerpo: (
                <p>
                  Puedes borrar o bloquear las cookies desde la configuración de tu navegador (Chrome,
                  Firefox, Safari o Edge tienen esta opción en su apartado de privacidad). Al no depender
                  de cookies para funcionar, bloquearlas no impedirá que uses esta web con normalidad.
                </p>
              ),
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
