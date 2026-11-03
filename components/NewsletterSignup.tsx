import Link from "next/link";
import { SenderForm } from "./SenderForm";
import { Band, Eyebrow, SectionHeading } from "./ui";

const headline = "Get BusinessGPS This Week";
const subtext = "Chapter meetings, launches, and member news, straight to your inbox.";

function ConsentNote({ className }: { className: string }) {
  return (
    <p className={`mt-3 text-xs ${className}`}>
      By subscribing, you agree to receive emails from BusinessGPS. Unsubscribe anytime. See our{" "}
      <Link href="/privacy" className="underline underline-offset-4">
        Privacy Policy
      </Link>
      .
    </p>
  );
}

/** The short version, for the navy footer on every page. */
export function FooterNewsletter() {
  return (
    <section
      aria-label="Newsletter"
      className="mt-12 grid gap-6 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:gap-12"
    >
      <div>
        <h2 className="text-xl font-extrabold tracking-tight text-white">{headline}</h2>
        <p className="mt-2 max-w-sm text-sm text-white/70">{subtext}</p>
      </div>
      <div>
        <SenderForm tone="navy" />
        <ConsentNote className="text-white/60" />
      </div>
    </section>
  );
}

/** The full version, closing the home page just above the footer. */
export function NewsletterBand() {
  return (
    <Band tone="wash">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Newsletter</Eyebrow>
          <SectionHeading>{headline}</SectionHeading>
          <p className="prose-body mt-6 max-w-md text-lg text-navy/80">{subtext}</p>
        </div>
        <div>
          <SenderForm tone="light" />
          <ConsentNote className="text-navy/70" />
        </div>
      </div>
    </Band>
  );
}
