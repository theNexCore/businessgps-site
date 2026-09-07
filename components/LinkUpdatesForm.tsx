"use client";

import { useState, type FormEvent } from "react";

/**
 * Email capture for people who want L.I.N.K. without a chapter near them.
 *
 * Posts to the same Formspree endpoint as the membership application, with a
 * hidden `source` field so these are distinguishable from applications at a
 * glance in the inbox.
 *
 * Single field by design: asking for a name here would cost more signups than
 * the name is worth.
 */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maeydybz";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function LinkUpdatesForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();

    if (!email) {
      setError("Please enter your email.");
      form.querySelector<HTMLElement>('[name="email"]')?.focus();
      return;
    }
    if (!emailPattern.test(email)) {
      setError("That doesn't look like an email address.");
      form.querySelector<HTMLElement>('[name="email"]')?.focus();
      return;
    }

    setError(null);
    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      setStatus("done");
      form.reset();
    } catch {
      setStatus("failed");
    }
  }

  if (status === "done") {
    return (
      <p className="mt-8 text-lg font-bold tracking-tight text-navy" role="status">
        You&rsquo;re on the list. L.I.N.K. updates will come to your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 max-w-xl">
      <input type="hidden" name="source" value="link-updates" />
      <input type="hidden" name="_subject" value="L.I.N.K. updates signup" />

      <label htmlFor="link-email" className="block text-sm font-bold tracking-tight text-navy">
        Email
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id="link-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "link-email-error" : undefined}
          className={
            "w-full rounded-xl border-2 bg-white px-4 py-3 text-base text-navy transition-colors placeholder:text-navy/60 focus:border-blue focus:outline-none " +
            (error ? "border-redink" : "border-faint")
          }
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-full bg-redink px-7 py-3 text-base font-bold text-white transition-colors hover:bg-[#b30000] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send me updates"}
        </button>
      </div>

      <div aria-live="polite">
        {error ? (
          <p id="link-email-error" className="mt-3 text-sm font-semibold text-redink">
            {error}
          </p>
        ) : null}
        {status === "failed" ? (
          <p className="mt-3 text-sm font-semibold text-redink">
            That didn&rsquo;t send. Try again, or email{" "}
            <a href="mailto:join@ourbizgps.com" className="underline">
              join@ourbizgps.com
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
