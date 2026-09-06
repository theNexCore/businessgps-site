import type { Metadata } from "next";
import { CTAPanel } from "@/components/CTAPanel";
import { Focus10Diagram } from "@/components/Focus10Diagram";
import { FourSquares } from "@/components/FourSquares";
import { AccentStrip, Container, Eyebrow, NavyPanel, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Focus10",
  description:
    "The framework at the centre of BusinessGPS. You are the centre of it — the rings around you are where growth happens.",
  alternates: { canonical: "/focus10" },
};

/**
 * Layer copy is taken straight off the supplied Focus10 artwork — nothing here
 * is invented. What each one means is taught in the room, not published here.
 */
const layers = [
  { name: "Core", body: "The foundation. Protection, presence, well-being." },
  { name: "Expression", body: "Purpose, voice, consistency." },
  { name: "Influence", body: "Processes, associations, tracking." },
];

export default function Focus10Page() {
  return (
    <>
      <Container className="pt-5 sm:pt-8">
        <NavyPanel className="px-6 py-14 sm:px-12 sm:py-20">
          <Eyebrow tone="light">The framework</Eyebrow>
          <SectionHeading as="h1" tone="light">
            The Focus10.
          </SectionHeading>
          <p className="prose-body mt-6 max-w-2xl text-lg text-white/80">
            The framework at the center of BusinessGPS. You are the center of it &mdash; the rings
            around you are where growth happens.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </NavyPanel>
      </Container>

      <Section>
        <Container>
          <div className="rounded-panel border border-faint bg-wash px-5 py-10 sm:px-12 sm:py-14">
            <div className="flex justify-center">
              {/* The artwork is dark-field; the ring frames it rather than
                  letting it float as a black square on the light panel. */}
              <div className="w-full max-w-[780px] overflow-hidden rounded-2xl ring-1 ring-navy/10">
                <Focus10Diagram />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section top={false}>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <Eyebrow>Reading it</Eyebrow>
              <SectionHeading>You are the center.</SectionHeading>
              <p className="prose-body mt-6 max-w-md text-navy/75">
                Everything in The Focus10 works outward from one person. The layers around the center
                are where growth happens.
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
        </Container>
      </Section>

      <Section className="bg-wash">
        <Container>
          <Eyebrow>The working practices</Eyebrow>
          <SectionHeading className="mb-10 max-w-2xl">Four verbs, done on purpose.</SectionHeading>
          <FourSquares withLink={false} />
          <p className="prose-body mt-10 max-w-2xl text-navy/75">
            The ideas inside The Focus10 have been taught in BusinessGPS rooms since 2017. The
            framework is how they finally fit together.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="max-w-3xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
            The Focus10 is the framework.{" "}
            <span className="text-blue">BusinessGPS is the environment.</span>
          </p>
        </Container>
      </Section>

      <Section top={false}>
        <Container>
          <CTAPanel
            heading="The framework only works in a room."
            body="Apply to join a chapter, or visit one first. Visiting is free. Always."
            primary={{ href: "/join", label: "Apply to join" }}
            secondary={{ href: "/chapters", label: "Find a chapter" }}
          />
        </Container>
      </Section>
    </>
  );
}
