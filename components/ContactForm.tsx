"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export default function ContactForm({ subject = "", vehicle = "" }: { subject?: string; vehicle?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
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
        <h3 className="font-display mt-4 text-2xl font-semibold text-ink-900">Vielen Dank für Ihre Anfrage!</h3>
        <p className="mt-2 text-slate-500">Wir melden uns in der Regel innerhalb von 2 Stunden während unserer Öffnungszeiten bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="vehicle" value={vehicle} />
      <label className="text-xs text-slate-500">
        Vorname *
        <input required name="firstName" autoComplete="given-name" className="input mt-1" placeholder="Max" />
      </label>
      <label className="text-xs text-slate-500">
        Nachname *
        <input required name="lastName" autoComplete="family-name" className="input mt-1" placeholder="Mustermann" />
      </label>
      <label className="text-xs text-slate-500">
        E-Mail *
        <input required type="email" name="email" autoComplete="email" className="input mt-1" placeholder="max@beispiel.de" />
      </label>
      <label className="text-xs text-slate-500">
        Telefon
        <input type="tel" name="phone" autoComplete="tel" className="input mt-1" placeholder="+49 …" />
      </label>
      <label className="text-xs text-slate-500 sm:col-span-2">
        Anliegen *
        <select required name="subject" defaultValue={subject} className="input mt-1">
          <option value="" disabled>Bitte wählen</option>
          <option>Probefahrt vereinbaren</option>
          <option>Fahrzeuganfrage</option>
          <option>Finanzierungsanfrage</option>
          <option>Inzahlungnahme / Ankauf</option>
          <option>Werkstatttermin</option>
          <option>Sonstiges</option>
        </select>
      </label>
      <label className="text-xs text-slate-500 sm:col-span-2">
        Wunschtermin
        <input type="datetime-local" name="date" className="input mt-1" />
      </label>
      <label className="text-xs text-slate-500 sm:col-span-2">
        Nachricht
        <textarea name="message" rows={4} className="input mt-1 resize-none" placeholder="Wie können wir Ihnen helfen?" />
      </label>
      <label className="flex items-start gap-3 text-xs leading-relaxed text-slate-500 sm:col-span-2">
        <input required type="checkbox" name="privacy" className="mt-0.5 h-4 w-4 accent-accent-500" />
        <span>Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *</span>
      </label>
      {state === "error" && <p className="text-sm text-red-600 sm:col-span-2">Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.</p>}
      <button disabled={state === "sending"} className="btn btn-primary sm:col-span-2 disabled:opacity-60">
        {state === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Anfrage senden
      </button>
    </form>
  );
}
