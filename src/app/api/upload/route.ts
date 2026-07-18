import { NextRequest } from "next/server";
import { put } from "@vercel/blob";

const MAX_SIZE = 8 * 1024 * 1024; // 8MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

export async function POST(request: NextRequest) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json({ error: "Subida de fotos no disponible" }, { status: 503 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return Response.json({ error: "Archivo no válido" }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return Response.json({ error: "Formato de imagen no admitido" }, { status: 400 });
    }
    if (file.size > MAX_SIZE) {
      return Response.json({ error: "La imagen pesa demasiado (máx. 8MB)" }, { status: 400 });
    }

    const blob = await put(`diagnostico/${Date.now()}-${file.name}`, file, {
      access: "public",
    });

    return Response.json({ url: blob.url });
  } catch (err) {
    console.error("[upload] error:", err);
    return Response.json({ error: "Error subiendo la imagen" }, { status: 500 });
  }
}
