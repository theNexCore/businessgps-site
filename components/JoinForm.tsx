"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { chapterSelectLabel, chapters, START_YOUR_OWN } from "@/data/chapters";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maeydybz";

type FieldName =
  | "name"
  | "email"
  | "mobile"
  | "business"
  | "industry"
  | "chapter"
  | "referral"
  | "why";

const fieldNames: FieldName[] = [
  "name",
  "email",
  "mobile",
  "business",
  "industry",
  "chapter",
  "referral",
  "why",
];

type Errors = Partial<Record<FieldName, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const OTHER = "Other";

/** "Why do you want in?" — check all that apply. */
const WHY_OPTIONS = [
  "Growth",
  "Learning",
  "Relationships",
  "Collaboration",
  "Networking",
  OTHER,
] as const;

function validate(data: Record<FieldName, string>, otherWithoutText: boolean): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Please enter your full name.";
  if (!data.email.trim()) errors.email = "Please enter your email.";
  else if (!emailPattern.test(data.email.trim()))
    errors.email = "That doesn't look like an email address.";
  if (!data.mobile.trim()) errors.mobile = "Please enter a mobile number.";
  else if (data.mobile.replace(/\D/g, "").length < 10)
    errors.mobile = "Please enter a full ten-digit number.";
  // Business name is optional — it still posts, it just isn't gated on.
  if (!data.industry.trim()) errors.industry = "Please enter your industry.";
  if (!data.chapter) errors.chapter = "Please choose a chapter.";
  // "Why do you want in?" is optional. The one rule: ticking Other and then
  // leaving the box empty tells us nothing, so ask for the words.
  if (otherWithoutText) errors.why = "Tell us a little more about your reason.";
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

/**
 * Defined at module scope on purpose: nesting it inside JoinForm would give
 * React a new component type on every render, remounting the inputs and
 * wiping what the applicant had typed.
 */
function Field({
  name,
  label,
  error,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
}: {
  name: FieldName;
  label: string;
  error?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
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
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${controlClass} ${error ? "border-redink" : ""}`}
      />
      <FieldError name={name} message={error} />
    </div>
  );
}

export function JoinForm() {
  const router = useRouter();
  const chapterRef = useRef<HTMLSelectElement>(null);

  /**
   * A chapter card links here as /join?chapter=<id>; that preselects the
   * matching option.
   *
   * The URL is read from `window.location` and applied straight to the DOM
   * rather than via `useSearchParams`. `useSearchParams` would force this form
   * behind a Suspense boundary, so the prerendered HTML would ship a one-line
   * fallback and then expand into the full form on hydration — a 0.22 layout
   * shift. This way the whole form is in the static HTML.
   */
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("chapter");
    if (!requested || !chapterRef.current) return;
    const match = chapters.find((chapter) => chapter.id === requested);
    if (match) chapterRef.current.value = chapterSelectLabel(match);
  }, []);

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "failed">("idle");

  /** The ticked reasons, plus the free text that "Other" asks for. */
  const [whyChoices, setWhyChoices] = useState<string[]>([]);
  const [whyOther, setWhyOther] = useState("");

  function toggleWhy(option: string) {
    setWhyChoices((current) =>
      current.includes(option)
        ? current.filter((choice) => choice !== option)
        : // Kept in WHY_OPTIONS order rather than click order, so the emailed
          // line reads the same way the form does.
          WHY_OPTIONS.filter((candidate) => candidate === option || current.includes(candidate)),
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    /**
     * The checkboxes live in React state, not in the form, so the ticked
     * reasons are folded into one readable line — "Growth, Learning, Other:
     * we're opening a second location" — and posted as a single `why` field.
     * That keeps the notification email one line per question.
     */
    const otherText = whyOther.trim();
    const why = whyChoices
      .map((choice) => (choice === OTHER && otherText ? `${OTHER}: ${otherText}` : choice))
      .join(", ");
    formData.set("why", why);

    const data = Object.fromEntries(
      fieldNames.map((field) => [field, String(formData.get(field) ?? "")]),
    ) as Record<FieldName, string>;

    const nextErrors = validate(data, whyChoices.includes(OTHER) && !otherText);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      const target =
        first === "why"
          ? form.querySelector<HTMLElement>("#why-other")
          : form.querySelector<HTMLElement>(`[name="${first}"]`);
      target?.focus();
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
      router.push("/thanks");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Formspree uses _subject as the notification email's subject line. */}
      <input type="hidden" name="_subject" value="BusinessGPS membership application" />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field name="name" label="Full name" required autoComplete="name" error={errors.name} />
        <Field name="email" label="Email" type="email" required autoComplete="email" error={errors.email} />
        <Field name="mobile" label="Mobile" type="tel" required autoComplete="tel" error={errors.mobile} />
        {/* Optional: an applicant may not have a business name to give yet. */}
        <Field
          name="business"
          label="Business name"
          autoComplete="organization"
          error={errors.business}
        />
      </div>

      <Field
        name="industry"
        label="Industry"
        required
        placeholder="One member per industry"
        error={errors.industry}
      />

      <div>
        <Label htmlFor="chapter" required>
          Chapter
        </Label>
        <select
          id="chapter"
          name="chapter"
          ref={chapterRef}
          defaultValue=""
          aria-invalid={errors.chapter ? true : undefined}
          aria-describedby={errors.chapter ? "chapter-error" : undefined}
          className={`${controlClass} ${errors.chapter ? "border-redink" : ""}`}
        >
          <option value="">Choose a chapter…</option>
          {chapters.map((chapter) => (
            <option key={chapter.id} value={chapterSelectLabel(chapter)}>
              {chapterSelectLabel(chapter)}
            </option>
          ))}
          <option value={START_YOUR_OWN}>{START_YOUR_OWN}</option>
        </select>
        <FieldError name="chapter" message={errors.chapter} />
      </div>

      <Field name="referral" label="How did you hear about us / who invited you?" error={errors.referral} />

      <fieldset>
        <legend className={labelClass}>Why do you want in?</legend>
        <p className="mt-1 text-sm text-navy/65">Check all that apply.</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {WHY_OPTIONS.map((option) => {
            const checked = whyChoices.includes(option);
            return (
              <label
                key={option}
                className={
                  "flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3 transition-colors " +
                  (checked ? "border-blue bg-blue/5" : "border-faint hover:border-navy/25")
                }
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleWhy(option)}
                  className="h-5 w-5 shrink-0 accent-[#005FFE]"
                />
                <span className="text-base font-semibold tracking-tight text-navy">{option}</span>
              </label>
            );
          })}
        </div>

        {whyChoices.includes(OTHER) ? (
          <div className="mt-4">
            <Label htmlFor="why-other">Tell us more</Label>
            <input
              id="why-other"
              type="text"
              value={whyOther}
              onChange={(event) => setWhyOther(event.target.value)}
              aria-invalid={errors.why ? true : undefined}
              aria-describedby={errors.why ? "why-error" : undefined}
              className={`${controlClass} ${errors.why ? "border-redink" : ""}`}
            />
          </div>
        ) : null}

        <FieldError name="why" message={errors.why} />
      </fieldset>

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
        {status === "sending" ? "Sending…" : "Send application"}
      </button>
    </form>
  );
}
