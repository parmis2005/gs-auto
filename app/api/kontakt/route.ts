import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage" }, { status: 400 });
  }
  const email = String(body.email ?? "");
  if (!email.includes("@")) {
    return NextResponse.json({ ok: false, error: "E-Mail-Adresse fehlt" }, { status: 422 });
  }
  // Demo: Anfrage wird serverseitig protokolliert. Hier später E-Mail-Versand / CRM-Anbindung ergänzen.
  console.log("[Kontaktanfrage]", new Date().toISOString(), JSON.stringify(body));
  await new Promise((r) => setTimeout(r, 600));
  return NextResponse.json({ ok: true });
}
