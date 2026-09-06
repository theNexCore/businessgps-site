import type { Metadata } from "next";
import Link from "next/link";
import { BrandArc, CompassPoint, TealArc } from "@/components/BrandGeometry";
import { PullQuote } from "@/components/PullQuote";
import { AccentStrip, Band, Container, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "What we believe: we build people, everyone teaches and everyone learns, short bursts and big gains, presence over transactions.",
  alternates: { canonical: "/philosophy" },
};

const pillars = [
  {
    title: "We build people.",
    body: "We build people. People build relationships. Relationships build business. The founding line, on the mission page since 2017.",
  },
  {
    title: "Everyone teaches. Everyone learns.",
    body: "Everyone has something to teach. Everyone has something to learn. No instructor at the front. No audience.",
  },
  {
    title: "Short bursts, big gains.",
    body: "Thirteen weeks at a time, growth compounds. The Focus10 gives the map, L.I.N.K. gives the practices, the curriculum gives the reps.",
  },
  {
    title: "You can do anything for ninety days.",
    body: "One quarter is a commitment anyone can make — and long enough for something to actually change. Show up, do the work, reassess.",
  },
];

const cards = [
  {
    href: "/philosophy/focus10",
    eyebrow: "The framework",
    title: "The Focus10",
    body: "Ten focus areas, with you at the center.",
  },
  {
    href: "/philosophy/link",
    eyebrow: "The practices",
    title: "L.I.N.K.",
    body: "Listen. Invest. Nurture. Kindle.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
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

      <Band tone="white">
        <ol className="space-y-14">
          {pillars.map((pillar, index) => (
            <li key={pillar.title} className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <CompassPoint tone="teal" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-navy/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
                  {pillar.title}
                </h2>
              </div>
              <p className="prose-body text-navy/80 lg:pt-9">{pillar.body}</p>
            </li>
          ))}
        </ol>
      </Band>

      <Band tone="wash">
        <Eyebrow>Presence over transactions</Eyebrow>
        <div className="mt-6 max-w-4xl">
          <PullQuote />
        </div>
      </Band>

      <Band tone="white">
        <SectionHeading className="max-w-2xl">The framework and the practices.</SectionHeading>
        <TealArc className="mt-5 w-40" />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                className="group block h-full rounded-2xl border border-faint bg-wash p-9 transition-colors hover:border-blue/40 hover:bg-white"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">{card.eyebrow}</p>
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
