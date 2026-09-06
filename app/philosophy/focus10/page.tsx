import type { Metadata } from "next";
import { BrandArc } from "@/components/BrandGeometry";
import { CTAPanel } from "@/components/CTAPanel";
import { Focus10Diagram } from "@/components/Focus10Diagram";
import { FourSquares } from "@/components/FourSquares";
import { AccentStrip, Band, Container, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Focus10",
  description:
    "The framework at the centre of BusinessGPS. You are the centre of it — the rings around you are where growth happens.",
  alternates: { canonical: "/philosophy/focus10" },
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
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">The framework</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Focus10.
          </h1>
          <p className="prose-body mt-7 max-w-2xl text-lg text-white/85">
            The framework at the center of BusinessGPS. You are the center of it &mdash; the rings
            around you are where growth happens.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      <Band tone="wash">
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

      {/* The blocks sit immediately before the triad, so "L.I.N.K. is what
          connects it all" lands on something the reader has just seen. Same
          shared component, so the treatment can never drift from the home page
          or /philosophy/link. */}
      <Band tone="wash">
        <Eyebrow>How the whole thing works</Eyebrow>
        <FourSquares />
      </Band>

      <Band tone="white">
        <p className="max-w-4xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
          The Focus10 is the framework.{" "}
          <span className="text-blue">BusinessGPS is the environment.</span>{" "}
          <span className="text-teal">L.I.N.K. is what connects it all.</span>
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
