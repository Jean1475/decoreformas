import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import Contacto from "@/components/contacto";
import { blogPosts, getBlogPost } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.titulo} | Decoreformas`,
    description: post.resumen,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function formatFecha(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={formatFecha(post.fecha)}
          titulo={post.titulo}
          descripcion={post.resumen}
        />

        <article className="py-16 lg:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {post.contenido.map((bloque, i) => (
              <div key={i} className="mb-8">
                {bloque.heading && (
                  <h2
                    className="text-title mb-3"
                    style={{ color: "#1D3557" }}
                  >
                    {bloque.heading}
                  </h2>
                )}
                {bloque.parrafos.map((p, j) => (
                  <p
                    key={j}
                    className="text-body mt-3"
                    style={{ color: "#42526a" }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </article>

        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
