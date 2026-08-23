import { NextRequest, NextResponse } from "next/server";

// Server-side only: el navegador nunca llama a esto directo (evita CORS).
// Un solo webhook generico para todos los rubros — el body ya viene con
// "rubro" adentro, y el workflow de n8n resuelve la config (investigacion,
// calculo, etc.) segun ese campo.
const N8N_WEBHOOK_URL = "https://ferrarioasociados-n8n.site/webhook/diagnostico";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    const res = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    const data = await res.json().catch(() => null);
    if (!res.ok || !data) {
      return NextResponse.json(
        { ok: false, error: "El workflow de n8n respondió con error" },
        { status: 502 }
      );
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo contactar el workflow de n8n" },
      { status: 502 }
    );
  }
}
