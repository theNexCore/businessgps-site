"use client";

import { useEffect, useRef } from "react";

/**
 * The Sender.net embed. The script itself is loaded once, in the root layout.
 *
 * Sender only scans for placeholders once, on page load, so a form that arrives
 * by client-side navigation has to be asked for. It also numbers instances by
 * their order in the DOM: rendering the home page's form alongside the footer's
 * without a reset would put a second form in the footer and none on the page.
 * Hence the destroy-then-render below.
 *
 * The fields, button text, thank-you message and destination group all live in
 * the form itself, in Sender. Only its appearance is set here: Sender draws the
 * form in a same-origin iframe, so the site's stylesheet can't reach it and the
 * brand styles are written into that iframe instead.
 */

const SENDER_FORM_ID = "aAD0pO";
const STYLE_ID = "businessgps-sender-styles";

declare global {
  interface Window {
    senderFormsLoaded?: boolean;
    senderForms?: { render: () => void; destroy: () => void };
  }
}

type Tone = "navy" | "light";

function formStyles(tone: Tone) {
  const text = tone === "navy" ? "#ffffff" : "#001749";
  const border = tone === "navy" ? "#ffffff" : "#dee6f2";

  return `
    html, body {
      height: auto !important;
      background: transparent !important;
      overflow: hidden !important;
    }
    body {
      color: ${text} !important;
      font-family: ui-sans-serif, system-ui, sans-serif !important;
    }
    body *:not(input, select, button) {
      color: inherit !important;
    }
    .sender-subs-embeded-form, .sender-form {
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      border: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
    }
    .sender-form-input {
      box-sizing: border-box;
      width: 100% !important;
      margin: 0 0 12px !important;
      padding: 12px 16px !important;
      border: 2px solid ${border} !important;
      border-radius: 12px !important;
      background: #ffffff !important;
      color: #001749 !important;
      font-size: 16px !important;
    }
    .sender-form-input:focus {
      border-color: #01a6c2 !important;
      outline: none !important;
    }
    .sender-form-button {
      padding: 12px 28px !important;
      border: 0 !important;
      border-radius: 9999px !important;
      background: #df0000 !important;
      color: #ffffff !important;
      font-size: 16px !important;
      font-weight: 700 !important;
      cursor: pointer;
    }
    .sender-form-button:hover {
      background: #b30000 !important;
    }
    .sender-form-button:focus-visible {
      outline: 2px solid #ffffff !important;
      outline-offset: -5px;
    }
  `;
}

function applyBrand(iframe: HTMLIFrameElement, tone: Tone) {
  const doc = iframe.contentDocument;
  if (!doc?.body || doc.getElementById(STYLE_ID)) return;

  const style = doc.createElement("style");
  style.id = STYLE_ID;
  style.textContent = formStyles(tone);
  doc.head.appendChild(style);

  // Follow the form's height, which changes on validation errors and when the
  // thank-you message replaces the fields.
  new ResizeObserver(() => {
    iframe.style.height = `${doc.body.offsetHeight}px`;
  }).observe(doc.body);
}

function renderForms() {
  const fields = document.querySelectorAll(".sender-form-field");
  if (Array.from(fields).every((field) => field.querySelector("iframe"))) return;

  window.senderForms?.destroy();
  fields.forEach((field) => field.replaceChildren());
  window.senderForms?.render();
}

export function SenderForm({ tone }: { tone: Tone }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = ref.current;
    if (!field) return;

    const observer = new MutationObserver(() => {
      const iframe = field.querySelector("iframe");
      if (iframe) applyBrand(iframe, tone);
    });
    observer.observe(field, { childList: true, subtree: true });

    // Before this flag is set, Sender's own first scan will find the placeholder.
    if (window.senderFormsLoaded) renderForms();

    return () => observer.disconnect();
  }, [tone]);

  return (
    <div
      ref={ref}
      className="sender-form-field text-left [&>div]:!block [&_iframe]:!w-full"
      data-sender-form-id={SENDER_FORM_ID}
    />
  );
}
