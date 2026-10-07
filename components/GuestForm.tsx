"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { chapterSelectLabel, chapters } from "@/data/chapters";

/**
 * Guest registration for a chapter meeting.
 *
 * Posts to the same Formspree endpoint as the membership application, with a
 * hidden `source` field so guest registrations are distinguishable from
 * applications at a glance in the inbox.
 *
 * Confirms in place rather than redirecting to /thanks: that page is about
 * paying for membership, which a guest isn't doing.
 */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maeydybz";

type FieldName = "name" | "email" | "mobile" | "business" | "industry" | "meeting" | "invitedBy";

const fieldNames: FieldName[] = ["name", "email", "mobile", "business", "industry", "meeting", "invitedBy"];

type Errors = Partial<Record<FieldName, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Only chapters with a meeting on the calendar can take a guest. */
const scheduledChapters = chapters.filter((chapter) => chapter.day !== "TBD");

function validate(data: Record<FieldName, string>): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Please enter your full name.";
  if (!data.email.trim()) errors.email = "Please enter your email.";
  else if (!emailPattern.test(data.email.trim()))
    errors.email = "That doesn't look like an email address.";
  if (!data.mobile.trim()) errors.mobile = "Please enter a mobile number.";
  else if (data.mobile.replace(/\D/g, "").length < 10)
    errors.mobile = "Please enter a full ten-digit number.";
  if (!data.meeting) errors.meeting = "Please choose a meeting.";
  return errors;
}

const labelClass = "block text-sm font-bold tracking-tight text-navy";
const controlClass =
  "mt-2 w-full rounded-xl border-2 border-faint bg-white px-4 py-3 text-base text-navy transition-colors placeholder:text-navy/60 focus:border-blue focus:outline-none";

function Label({ htmlFor, children, required }: { htmlFor: string; children: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
      {required ? <span className="text-redink"> *</span> : null}
    </label>
  );
}

function FieldError({ name, message }: { name: FieldName; message?: string }) {
  if (!message) return null;
  return (
    <p id={`${name}-error`} className="mt-2 text-sm font-semibold text-redink">
      {message}
    </p>
  );
}

/** Module scope on purpose — see the same note in JoinForm. */
function Field({
  name,
  label,
  error,
  type = "text",
  required = false,
  autoComplete,
}: {
  name: FieldName;
  label: string;
  error?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${controlClass} ${error ? "border-redink" : ""}`}
      />
      <FieldError name={name} message={error} />
    </div>
  );
}

export function GuestForm() {
  const meetingRef = useRef<HTMLSelectElement>(null);

  /**
   * A chapter card links here as /visit?chapter=<id>; that preselects the
   * matching meeting. Read from `window.location` rather than
   * `useSearchParams` for the same reason as JoinForm: no Suspense fallback
   * in the static HTML.
   */
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("chapter");
    if (!requested || !meetingRef.current) return;
    const match = scheduledChapters.find((chapter) => chapter.id === requested);
    if (match) meetingRef.current.value = chapterSelectLabel(match);
  }, []);

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(
      fieldNames.map((field) => [field, String(formData.get(field) ?? "")]),
    ) as Record<FieldName, string>;

    const nextErrors = validate(data);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      setStatus("done");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl border border-faint bg-wash p-7 sm:p-9">
        <h2 className="text-2xl font-extrabold tracking-tight text-navy">You&rsquo;re registered.</h2>
        <p className="prose-body mt-4 text-navy/80">
          The chapter will be expecting you. Questions before then? Email{" "}
          <a href="mailto:join@ourbizgps.com" className="font-semibold text-blue underline underline-offset-4">
            join@ourbizgps.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <input type="hidden" name="source" value="guest-registration" />
      {/* Formspree uses _subject as the notification email's subject line. */}
      <input type="hidden" name="_subject" value="BusinessGPS guest registration" />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field name="name" label="Full name" required autoComplete="name" error={errors.name} />
        <Field name="email" label="Email" type="email" required autoComplete="email" error={errors.email} />
        <Field name="mobile" label="Mobile" type="tel" required autoComplete="tel" error={errors.mobile} />
        <Field name="business" label="Business name" autoComplete="organization" error={errors.business} />
      </div>

      <Field name="industry" label="Industry" error={errors.industry} />

      <div>
        <Label htmlFor="meeting" required>
          Which meeting are you visiting?
        </Label>
        <select
          id="meeting"
          name="meeting"
          ref={meetingRef}
          defaultValue=""
          aria-invalid={errors.meeting ? true : undefined}
          aria-describedby={errors.meeting ? "meeting-error" : undefined}
          className={`${controlClass} ${errors.meeting ? "border-redink" : ""}`}
        >
          <option value="">Choose a meeting…</option>
          {scheduledChapters.map((chapter) => (
            <option key={chapter.id} value={chapterSelectLabel(chapter)}>
              {chapterSelectLabel(chapter)}
            </option>
          ))}
        </select>
        <FieldError name="meeting" message={errors.meeting} />
      </div>

      <Field name="invitedBy" label="Who invited you?" error={errors.invitedBy} />

      <div aria-live="polite">
        {status === "failed" ? (
          <p className="rounded-xl border-2 border-redink bg-redink/5 px-4 py-3 text-sm font-semibold text-redink">
            That didn&rsquo;t send. Check your connection and try again, or email{" "}
            <a href="mailto:join@ourbizgps.com" className="underline">
              join@ourbizgps.com
            </a>
            .
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-redink px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#b30000] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Register as a guest"}
      </button>
    </form>
  );
}
