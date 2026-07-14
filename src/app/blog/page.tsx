import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog de reformas | Decoreformas",
  description:
    "Guías prácticas sobre reformas: permisos, instalaciones, materiales y plazos, escritas por el equipo de Decoreformas.",
  alternates: { canonical: "/blog" },
};

function formatFecha(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Blog"
          titulo="Guías de reforma"
          descripcion="Notas prácticas sobre permisos, instalaciones, materiales y plazos, escritas a partir de obras reales."
        />

        <section className="py-16 lg:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div style={{ borderTop: "1px solid rgba(29,53,87,0.10)" }}>
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                  style={{
                    padding: "2rem 0",
                    borderBottom: "1px solid rgba(29,53,87,0.10)",
                    textDecoration: "none",
                  }}
                >
                  <p className="text-label" style={{ color: "#457B9D" }}>
                    {formatFecha(post.fecha)}
                  </p>
                  <h2
                    className="text-title mt-2 transition-colors"
                    style={{ color: "#1D3557" }}
                  >
                    {post.titulo}
                  </h2>
                  <p className="text-body mt-2 prose-width" style={{ color: "#6b7889" }}>
                    {post.resumen}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 mt-4 transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      fontFamily: "var(--font-hanken), sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#E63946",
                    }}
                  >
                    Leer artículo
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8m0 0-3.5-3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
