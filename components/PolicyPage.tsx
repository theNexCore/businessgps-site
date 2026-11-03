import Link from "next/link";
import type { ReactNode } from "react";
import { BrandArc } from "./BrandGeometry";
import { AccentStrip, Band, Container, Eyebrow } from "./ui";

/** Shared shell for /privacy and /anti-spam, so the two stay in step. */

export const policyEffectiveDate = "November 2, 2026";

export function PolicyPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">Policies</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="prose-body mt-7 max-w-2xl text-lg text-white/85">
            Effective {policyEffectiveDate}
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      <Band tone="white" width="narrow">
        <div className="space-y-12">{children}</div>
      </Band>
    </>
  );
}

export function PolicySection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-extrabold tracking-tight text-navy">{heading}</h2>
      <div className="prose-body mt-4 space-y-4 text-navy/80">{children}</div>
    </section>
  );
}

export function PolicyList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

const linkClass = "font-semibold text-blue underline underline-offset-4";

export function PolicyEmail() {
  return (
    <a href="mailto:join@ourbizgps.com" className={linkClass}>
      join@ourbizgps.com
    </a>
  );
}

export function PolicyLink({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={linkClass}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  );
}
