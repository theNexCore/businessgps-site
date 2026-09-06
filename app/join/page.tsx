import type { Metadata } from "next";
import { BrandArc } from "@/components/BrandGeometry";
import { JoinForm } from "@/components/JoinForm";
import { SquareNote } from "@/components/SquareNote";
import { AccentStrip, Band, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Apply to be a member",
  description:
    "Membership is $59.95 a month, month to month, and every application is reviewed by chapter leadership. Visiting first is welcome — and free.",
  alternates: { canonical: "/join" },
};

export default function JoinPage() {
  return (
    <>
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">Membership</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Apply to be a member.
          </h1>
          <p className="prose-body mt-7 max-w-2xl text-lg text-white/85">
            Membership is $59.95 a month, month to month, and every application is reviewed by chapter
            leadership. Visiting first is welcome &mdash; and free.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      <Band tone="white" width="narrow">
        <JoinForm />

        <div className="mt-14 rounded-2xl border border-faint bg-wash p-7 sm:p-9">
          <h2 className="text-xl font-extrabold tracking-tight text-navy">How payment works</h2>
          <div className="mt-4">
            <SquareNote />
          </div>
        </div>
      </Band>
    </>
  );
}
