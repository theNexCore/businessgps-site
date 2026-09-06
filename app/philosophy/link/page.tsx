import type { Metadata } from "next";
import { BrandArc, TealArc } from "@/components/BrandGeometry";
import { CTAPanel } from "@/components/CTAPanel";
import { AccentStrip, Band, Container, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "L.I.N.K.",
  description:
    "Listen. Invest. Nurture. Kindle. The four practices taught in BusinessGPS rooms since 2017 — how The Focus10 gets worked.",
  alternates: { canonical: "/philosophy/link" },
};

const practices = [
  {
    letter: "L",
    word: "Listen.",
    surface: "bg-blue",
    body: "Growth starts with attention. You cannot invest in a person you haven't heard.",
  },
  {
    letter: "I",
    word: "Invest.",
    surface: "bg-tealink",
    body: "Time, experience, honest feedback — given before anything is asked in return.",
  },
  {
    letter: "N",
    word: "Nurture.",
    surface: "bg-red",
    body: "Relationships are maintained on purpose. Consistency, not intensity.",
  },
  {
    letter: "K",
    word: "Kindle.",
    surface: "bg-navy",
    body: "Light something for someone else — the introduction, the push, the spark that starts what they couldn't start alone.",
  },
];

export default function LinkPage() {
  return (
    <>
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">The practices</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            L.I.N.K.
          </h1>
          <p className="prose-body mt-7 max-w-2xl text-lg text-white/85">
            Taught in BusinessGPS rooms since 2017. The oldest idea in the company, and still the most
            important.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      {/* The four squares, large */}
      <Band tone="white">
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {practices.map((practice) => (
            <li
              key={practice.word}
              className={`flex aspect-square flex-col justify-between rounded-2xl p-6 sm:p-8 ${practice.surface}`}
            >
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">
                {practice.letter}
              </span>
              <p className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {practice.word}
              </p>
            </li>
          ))}
        </ul>
      </Band>

      {/* One section per practice */}
      <Band tone="wash" top={false} className="pt-16 sm:pt-24">
        <ol className="space-y-px overflow-hidden rounded-2xl border border-faint bg-faint">
          {practices.map((practice) => (
            <li key={practice.word} className="bg-white px-6 py-10 sm:px-10 sm:py-12">
              <div className="grid gap-5 sm:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] sm:gap-12">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                    {practice.word}
                  </h2>
                  <TealArc className="mt-4 w-28" />
                </div>
                <p className="prose-body text-lg text-navy/80">{practice.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Band>

      <Band tone="white">
        <SectionHeading className="max-w-3xl">How the framework gets worked.</SectionHeading>
        <p className="prose-body mt-7 max-w-3xl text-lg text-navy/80">
          L.I.N.K. is how the Focus10 gets worked. The framework names where to grow; these four
          practices are how a room grows together.
        </p>
      </Band>

      <Band tone="white" top={false} bottom={false}>
        <CTAPanel
          heading="See it in the room."
          body="The practices only mean something in practice. Here is what a week, a quarter, and a year actually look like."
          primary={{ href: "/in-practice", label: "In Practice" }}
          secondary={{ href: "/join", label: "Apply to be a member" }}
        />
      </Band>
      <div className="h-16 bg-white sm:h-24" />
    </>
  );
}
