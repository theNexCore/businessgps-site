import type { Metadata } from "next";
import Link from "next/link";
import { BrandArc, CompassPoint, TealArc } from "@/components/BrandGeometry";
import { PullQuote } from "@/components/PullQuote";
import { AccentStrip, Band, Container, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "What we believe. The beliefs BusinessGPS is built on — responsibility to each other, everyone teaching and learning, short bursts and big gains.",
  alternates: { canonical: "/philosophy" },
};

/**
 * Beliefs, not slogans. Each one completes the sentence "We believe…", so the
 * lead-in carries the verb and the statements finish it.
 *
 * This page holds beliefs only — anything describing how a week, a quarter or
 * a year actually runs lives on /in-practice.
 */
const beliefs = [
  "we have a responsibility to build each other.",
  "that when everyone teaches and everyone learns, transformation happens.",
  "short bursts can equal big gains.",
  "you can do anything for ninety days — one quarter is a commitment anyone can make, and long enough for something to actually change.",
  "BusinessGPS can become the driving force behind real growth — the kind that changes the shape of someone's life, not just their pipeline.",
  "that when L.I.N.K. is practiced, the relationships that come out of it don't have an equal. Nothing else holds up as long.",
  "The Focus10 covers every area of your life worth your attention.",
];

const cards = [
  {
    href: "/philosophy/link",
    eyebrow: "The practices",
    title: "L.I.N.K.",
    body: "Listen. Invest. Nurture. Kindle.",
  },
  {
    href: "/philosophy/focus10",
    eyebrow: "The framework",
    title: "The Focus10",
    body: "Ten focus areas, with you at the center.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      {/* The page statement. */}
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">Philosophy</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            What we believe.
          </h1>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      {/* The beliefs themselves — a separate section from the statement above. */}
      <Band tone="white">
        <div className="flex items-baseline gap-4">
          <CompassPoint tone="teal" size="h-4 w-4" />
          <SectionHeading>We believe&hellip;</SectionHeading>
        </div>
        <TealArc className="mt-5 w-40" />

        <ul className="mt-12 space-y-px overflow-hidden rounded-2xl border border-faint bg-faint">
          {beliefs.map((belief) => (
            <li key={belief} className="bg-white px-6 py-7 sm:px-9 sm:py-8">
              <p className="text-balance text-xl font-extrabold leading-snug tracking-tight text-navy sm:text-2xl">
                <span className="text-navy/45">We believe </span>
                {belief}
              </p>
            </li>
          ))}
        </ul>
      </Band>

      <Band tone="wash">
        <Eyebrow>Presence over transactions</Eyebrow>
        <div className="mt-6 max-w-4xl">
          <PullQuote />
        </div>
      </Band>

      <Band tone="white">
        <SectionHeading className="max-w-2xl">The framework and the practices.</SectionHeading>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                className="group block h-full rounded-2xl border border-faint bg-wash p-9 transition-colors hover:border-blue/40 hover:bg-white"
              >
                <p className="text-eyebrow font-bold uppercase tracking-[0.2em] text-blue">
                  {card.eyebrow}
                </p>
                <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-navy">{card.title}</h3>
                <p className="prose-body mt-3 text-navy/75">{card.body}</p>
                <span className="mt-6 inline-flex font-bold text-blue underline underline-offset-4">
                  Read more
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Band>
    </>
  );
}
