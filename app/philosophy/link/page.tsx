import type { Metadata } from "next";
import Link from "next/link";
import { BrandArc, TealArc } from "@/components/BrandGeometry";
import { CTAPanel } from "@/components/CTAPanel";
import { FourSquares } from "@/components/FourSquares";
import { LinkUpdatesForm } from "@/components/LinkUpdatesForm";
import { AccentStrip, Band, Container, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "L.I.N.K.",
  description:
    "Listen. Invest. Nurture. Kindle. A lived philosophy taught in BusinessGPS rooms since 2017 — the working muscle of everything we do.",
  alternates: { canonical: "/philosophy/link" },
};

/**
 * One section per practice: the short definition it has always carried, then a
 * paragraph on what it looks like in a room.
 *
 * Draft status: the four long paragraphs are awaiting Jim's voice check.
 */
const practices = [
  {
    initial: "L",
    rest: "isten.",
    definition: "Growth starts with attention. You cannot invest in a person you haven't heard.",
    body: "In the room, this is the discipline of being fully present while someone else has the floor — no phone, no rehearsing your own answer, no waiting for your turn. It's harder than it sounds, because everything in a busy week argues against it. But every other practice depends on it: what you hear this week is what you'll know to give next week. A room that doesn't listen is just thirty people taking turns talking.",
  },
  {
    initial: "I",
    rest: "nvest.",
    definition: "Time, experience, honest feedback — given before anything is asked in return.",
    body: "Investing is what listening becomes when you act on it. It looks like staying ten minutes after the close to answer someone's question, making the introduction nobody asked you for, telling a member the hard true thing instead of the easy kind one. There's no ledger and no scoreboard — which is exactly why it works. Rooms where everyone waits to be paid first stay poor.",
  },
  {
    initial: "N",
    rest: "urture.",
    definition: "Relationships are maintained on purpose. Consistency, not intensity.",
    body: "Most business relationships die of neglect, not conflict. Nurture is the unglamorous middle: showing up next week, and the week after, remembering what someone told you a month ago and asking how it went. One grand gesture builds nothing; fifty ordinary Thursdays build something nobody can take from you. This is where the thirteen-week rhythm does its quiet work.",
  },
  {
    initial: "K",
    rest: "indle.",
    definition: "Growth in someone else, deliberately sparked.",
    body: "Kindle is the practice that points outward. You see something in another member — a capability, an idea, a next step they haven't claimed yet — and you name it, push it, put wind behind it. It's the red arrow breaking through the ring. When a whole room practices this on each other, week after week, people leave bigger than they arrived. That's the point of everything else.",
  },
];

export default function LinkPage() {
  return (
    <>
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">How the whole thing works</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            L.I.N.K.
          </h1>
          <p className="prose-body mt-7 max-w-2xl text-lg text-white/85">
            A lived philosophy taught in BusinessGPS rooms since 2017. It&rsquo;s the working muscle
            of everything we do.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      {/* The four blocks, connected and centred — same treatment as the home page. */}
      <Band tone="white">
        <FourSquares size="large" caption={false} />
      </Band>

      {/* One section per practice. */}
      <Band tone="wash" top={false} className="pt-16 sm:pt-24">
        <ol className="space-y-px overflow-hidden rounded-2xl border border-faint bg-faint">
          {practices.map((practice) => (
            <li key={practice.initial} className="bg-white px-6 py-10 sm:px-10 sm:py-12">
              <div className="grid gap-6 sm:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] sm:gap-12">
                <div>
                  <h2 className="text-3xl font-extrabold leading-none tracking-tight text-navy sm:text-4xl">
                    <span className="text-5xl text-blue sm:text-6xl">{practice.initial}</span>
                    {practice.rest}
                  </h2>
                  <TealArc className="mt-4 w-28" />
                </div>
                <div>
                  <p className="text-lg font-bold leading-snug tracking-tight text-navy">
                    {practice.definition}
                  </p>
                  <p className="prose-body mt-4 text-navy/80">{practice.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Band>

      <Band tone="white">
        <SectionHeading className="max-w-4xl">
          Why the L.I.N.K. philosophy is the most important part of BusinessGPS
        </SectionHeading>
        <p className="prose-body mt-7 max-w-3xl text-lg text-navy/80">
          L.I.N.K. is bigger than BusinessGPS. It&rsquo;s a life philosophy &mdash; a skill worth
          developing from early childhood to your last breath, and it will improve every
          relationship you have. Listen authentically. Invest the time to do it. Nurture the
          relationship. Kindle what matters from it, for them and for you. That&rsquo;s the whole
          thing. BusinessGPS is simply where it gets practiced every week.
        </p>
      </Band>

      {/* For people who want L.I.N.K. without a chapter within reach. */}
      <Band tone="wash">
        <p className="prose-body max-w-3xl text-lg text-navy/85">
          Not close to a BusinessGPS chapter? (
          <Link href="/chapters" className="font-semibold text-blue underline underline-offset-4">
            See the chapter list here
          </Link>
          .) Still want to build better relationships? Leave your email and we&rsquo;ll send you
          L.I.N.K. updates.
        </p>
        <LinkUpdatesForm />
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
