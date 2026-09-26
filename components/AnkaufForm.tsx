"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send, Upload } from "lucide-react";

export default function AnkaufForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [files, setFiles] = useState(0);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    const fd = new FormData(e.currentTarget);
    fd.delete("photos");
    const data = { ...Object.fromEntries(fd.entries()), subject: "Ankauf-Anfrage", photos: files };
    try {
      const res = await fetch("/api/kontakt", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setState("done");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <div className="card rounded-3xl p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="font-display mt-4 text-2xl font-semibold text-ink-900">Ihre Bewertungsanfrage ist eingegangen.</h3>
        <p className="mt-2 text-slate-500">Unser Ankauf-Team meldet sich innerhalb von 24 Stunden mit einem unverbindlichen Angebot.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <h3 className="font-display text-lg font-semibold text-ink-900 sm:col-span-2">Ihr Fahrzeug</h3>
      <label className="text-xs text-slate-500">Marke *<input required name="brand" className="input mt-1" placeholder="z. B. BMW" /></label>
      <label className="text-xs text-slate-500">Modell *<input required name="model" className="input mt-1" placeholder="z. B. 320d Touring" /></label>
      <label className="text-xs text-slate-500">Erstzulassung *<input required name="ez" type="month" className="input mt-1" /></label>
      <label className="text-xs text-slate-500">Kilometerstand *<input required name="km" type="number" min={0} className="input mt-1" placeholder="z. B. 62000" /></label>
      <label className="text-xs text-slate-500">Kraftstoff<select name="fuel" className="input mt-1" defaultValue="Benzin"><option>Benzin</option><option>Diesel</option><option>Hybrid</option><option>Elektro</option></select></label>
      <label className="text-xs text-slate-500">Zustand<select name="condition" className="input mt-1" defaultValue="Gut"><option>Sehr gut</option><option>Gut</option><option>Gebrauchsspuren</option><option>Reparaturbedürftig</option></select></label>
      <label className="text-xs text-slate-500 sm:col-span-2">
        Fotos (optional)
        <span className="input mt-1 flex cursor-pointer items-center justify-center gap-2 border-dashed py-6 text-sm text-slate-500 hover:border-accent-500/60">
          <Upload className="h-4 w-4" /> {files > 0 ? `${files} Datei(en) ausgewählt` : "Bilder auswählen oder hierher ziehen"}
          <input type="file" name="photos" accept="image/*" multiple className="sr-only" onChange={(e) => setFiles(e.target.files?.length ?? 0)} />
        </span>
      </label>
      <h3 className="font-display mt-2 text-lg font-semibold text-ink-900 sm:col-span-2">Ihre Kontaktdaten</h3>
      <label className="text-xs text-slate-500">Name *<input required name="name" autoComplete="name" className="input mt-1" placeholder="Max Mustermann" /></label>
      <label className="text-xs text-slate-500">Telefon *<input required name="phone" type="tel" autoComplete="tel" className="input mt-1" placeholder="+49 …" /></label>
      <label className="text-xs text-slate-500 sm:col-span-2">E-Mail *<input required name="email" type="email" autoComplete="email" className="input mt-1" placeholder="max@beispiel.de" /></label>
      <label className="flex items-start gap-3 text-xs leading-relaxed text-slate-500 sm:col-span-2">
        <input required type="checkbox" name="privacy" className="mt-0.5 h-4 w-4 accent-accent-500" />
        <span>Ich stimme der Verarbeitung meiner Daten zur Erstellung eines Ankaufangebots zu. *</span>
      </label>
      {state === "error" && <p className="text-sm text-red-600 sm:col-span-2">Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.</p>}
      <button disabled={state === "sending"} className="btn btn-primary sm:col-span-2 disabled:opacity-60">
        {state === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Kostenlose Bewertung anfordern
      </button>
    </form>
  );
}
