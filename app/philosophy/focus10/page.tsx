import type { Metadata } from "next";
import Link from "next/link";
import { BrandArc, TealArc } from "@/components/BrandGeometry";
import { CTAPanel } from "@/components/CTAPanel";
import { Focus10Diagram } from "@/components/Focus10Diagram";
import { GrowthCycle } from "@/components/GrowthCycle";
import { AccentStrip, Band, Container, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Focus10",
  description:
    "The Focus10 is the blueprint for intentional growth. Nine elements plus you — Core, Expression and Influence, defined.",
  alternates: { canonical: "/philosophy/focus10" },
};

/**
 * Layer copy is taken straight off the supplied Focus10 artwork.
 */
const layers = [
  { name: "Core", body: "The foundation. Protection, presence, well-being." },
  { name: "Expression", body: "Purpose, voice, consistency." },
  { name: "Influence", body: "Processes, associations, tracking." },
];

/**
 * The nine elements, grouped by category. Each category is coloured to match
 * its layer in the Focus10 diagram: Core teal, Expression red, Influence blue.
 */
const categories = [
  {
    name: "Core",
    accent: "bg-tealink",
    rule: "border-tealink",
    intro:
      "Core is a category. It sits intentionally at the bottom. It holds Protection, Presence, and Well-being.",
    elements: [
      {
        name: "Protection.",
        body: "Protecting what matters. Your business, your finances, your family, your relationships. The truth is, it's all of them.",
      },
      {
        name: "Presence.",
        body: "Where you show up and where you're showing up. Physically and literally. And what you do while you're there. This means you as a person, and your activities, your business, and more.",
      },
      {
        name: "Well-being.",
        body: "The most diverse of the ten. Physical, mental, and spiritual health for you as a person, and everything that goes into it. But also the health of your business, and the health of your relationships.",
      },
    ],
    closer: null as string | null,
    quote: null as { text: string; who: string } | null,
  },
  {
    name: "Expression",
    accent: "bg-redink",
    rule: "border-redink",
    intro:
      "Expression — the way, the how, and the why behind everything you do and say. From the way your brand looks to the way you communicate, and how.",
    elements: [
      {
        name: "Purpose.",
        body: "Your why. Why you do everything you do, and why you choose not to do certain things. All of it is driven by your purpose.",
      },
      {
        name: "Voice.",
        body: "How and what you say. Your brand identity, your communication style. It's the things you say, the things you don't, and everything in between.",
      },
      {
        name: "Consistency.",
        body: "How you do what you do. How you do anything is how you do everything. The Focus10 lets you see what's becoming consistent and what needs to be, by putting attention on it. That's how good habits get built, and bad ones get broken.",
      },
    ],
    closer:
      "Expression is how you make people feel, as both a person and a business — your clients, and the people around you.",
    quote: null as { text: string; who: string } | null,
  },
  {
    name: "Influence",
    accent: "bg-blue",
    rule: "border-blue",
    intro:
      "Influence — what drives your choices, your decisions, your successes, and your failures.",
    quote: { text: "Leadership is influence — nothing more, nothing less.", who: "John Maxwell" },
    elements: [
      {
        name: "Processes.",
        body: "The things you do day in and day out, and how you do them. Your sales philosophy, your automation, the way you keep your calendar. Good processes lead to good results. Bad processes lead to bad results. No processes lead to no results. A critically important element.",
      },
      {
        name: "Associations.",
        body: "These are the people and the things that shift, shape, and drive you. Who you associate with, what you read, what you listen to, where you spend your time. Every one of them is a choice, and every one of them is shaping you whether you're paying attention or not.",
        inner: {
          text: "You are the average of the five people you spend the most time with.",
          who: "Jim Rohn",
        },
      },
      {
        name: "Tracking.",
        body: "You need to track what matters. For some people that's journaling. For others it's reviewing sales projections, or how many calls you made, how many people you connected with. It's a critical part of assessing and evolving, and it will be a direct influence on your growth.",
      },
    ],
    closer: null as string | null,
  },
];

export default function Focus10Page() {
  return (
    <>
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">The framework</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Focus10.
          </h1>
          <p className="prose-body mt-7 max-w-2xl text-lg text-white/85">
            The Focus10 is a working system for intentional growth. It stands on its own. What
            BusinessGPS does is put people around you to make it stick.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      <Band tone="wash">
        <p className="mb-10 max-w-3xl text-balance text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
          The Focus10 is the blueprint for intentional growth.
        </p>
        <div className="flex justify-center">
          {/* The artwork is dark-field; the ring frames it rather than letting
              it float as a black square on the light panel. */}
          <div className="w-full max-w-[780px] overflow-hidden rounded-2xl ring-1 ring-navy/10">
            <Focus10Diagram />
          </div>
        </div>
      </Band>

      <Band tone="white">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Eyebrow>Reading it</Eyebrow>
            <SectionHeading>You are the center.</SectionHeading>
            <p className="prose-body mt-6 max-w-md text-navy/75">
              Everything in The Focus10 works outward from one person. The layers around the center
              are where growth happens.
            </p>
            <p className="prose-body mt-5 max-w-md text-navy/75">
              Everything circles around you because all nine elements plus you &mdash; the ten
              &mdash; work together. None is more important than another. Except you.
            </p>
          </div>

          <ol className="space-y-8">
            <li className="border-l-4 border-navy pl-6">
              <p className="text-xl font-extrabold tracking-tight text-navy">You</p>
              <p className="prose-body mt-2 text-navy/75">The center of the framework.</p>
            </li>
            {layers.map((layer) => (
              <li key={layer.name} className="border-l-4 border-faint pl-6">
                <p className="text-xl font-extrabold tracking-tight text-navy">{layer.name}</p>
                <p className="prose-body mt-2 text-navy/75">{layer.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Band>

      {/* Assess → Evolve → Grow → back to Assess. */}
      <Band tone="wash">
        <Eyebrow>The cycle</Eyebrow>
        <SectionHeading className="max-w-2xl">Assess. Evolve. Grow.</SectionHeading>
        <TealArc className="mt-5 w-40" />
        <div className="mt-12">
          <GrowthCycle />
        </div>
      </Band>

      {/* The ten, defined. */}
      <Band tone="white">
        <Eyebrow>The ten, defined</Eyebrow>
        <SectionHeading className="max-w-3xl">Nine elements, and you.</SectionHeading>
        <p className="prose-body mt-7 max-w-3xl text-lg text-navy/80">
          Every one of these will read differently to you &mdash; based on where you are, where
          you&rsquo;ve been, and where you want to go.
        </p>

        <div className="mt-12 space-y-8">
          {categories.map((category) => (
            <section
              key={category.name}
              className="overflow-hidden rounded-2xl border border-faint bg-white"
            >
              <h3
                className={`px-7 py-4 text-xl font-extrabold uppercase tracking-[0.16em] text-white sm:px-9 ${category.accent}`}
              >
                {category.name}
              </h3>

              <div className="px-7 py-8 sm:px-9 sm:py-10">
                <p className="prose-body max-w-3xl text-lg text-navy/80">{category.intro}</p>

                {category.quote ? (
                  <figure className={`mt-7 max-w-2xl border-l-4 pl-6 ${category.rule}`}>
                    <blockquote>
                      <p className="text-balance text-xl font-extrabold leading-snug tracking-tight text-navy">
                        &ldquo;{category.quote.text}&rdquo;
                      </p>
                    </blockquote>
                    <figcaption className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-navy/60">
                      {category.quote.who}
                    </figcaption>
                  </figure>
                ) : null}

                <dl className="mt-9 space-y-8">
                  {category.elements.map((element) => (
                    <div key={element.name}>
                      <dt className="text-xl font-extrabold tracking-tight text-navy">
                        {element.name}
                      </dt>
                      {/* The pull-quote lives inside the <dd>: a <dl> may only
                          hold dt/dd pairs (optionally wrapped in a div). */}
                      <dd className="prose-body mt-2 max-w-3xl text-navy/75">
                        {element.body}
                        {"inner" in element && element.inner ? (
                        <figure className={`mt-5 max-w-2xl border-l-4 pl-6 ${category.rule}`}>
                          <blockquote>
                            <p className="text-balance text-lg font-extrabold leading-snug tracking-tight text-navy">
                              &ldquo;{element.inner.text}&rdquo;
                            </p>
                          </blockquote>
                          <figcaption className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-navy/60">
                            {element.inner.who}
                          </figcaption>
                        </figure>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>

                {category.closer ? (
                  <p className="prose-body mt-9 max-w-3xl text-lg font-semibold text-navy">
                    {category.closer}
                  </p>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <p className="prose-body mt-10 max-w-3xl text-lg text-navy/80">
          That&rsquo;s nine elements. You at the center is the tenth. No fourth category.
        </p>
      </Band>

      <Band tone="wash">
        <p className="max-w-4xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
          The Focus10 is the framework.{" "}
          <span className="text-blue">BusinessGPS is the environment.</span>{" "}
          <span className="text-tealink">L.I.N.K. is what connects it all.</span>
        </p>
        <p className="prose-body mt-8 max-w-3xl text-lg text-navy/80">
          <Link href="/philosophy/link" className="font-semibold text-blue underline underline-offset-4">
            L.I.N.K. makes the whole thing work within the BusinessGPS framework.
          </Link>
        </p>
      </Band>

      <Band tone="white" top={false} bottom={false}>
        <CTAPanel
          heading="The framework only works in a room."
          body="Apply to be a member, or visit a chapter first. Visiting is free. Always."
          primary={{ href: "/join", label: "Apply to be a member" }}
          secondary={{ href: "/philosophy/link", label: "See L.I.N.K." }}
        />
      </Band>
      <div className="h-16 bg-white sm:h-24" />
    </>
  );
}
