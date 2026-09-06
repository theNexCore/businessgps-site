import type { Metadata } from "next";
import { JoinForm } from "@/components/JoinForm";
import { SquareNote } from "@/components/SquareNote";
import { AccentStrip, Container, Eyebrow, NavyPanel, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Apply to join",
  description:
    "Membership is $59.95 a month, month to month, and every application is reviewed by chapter leadership. Visiting first is welcome — and free.",
  alternates: { canonical: "/join" },
};

export default function JoinPage() {
  return (
    <>
      <Container className="pt-5 sm:pt-8">
        <NavyPanel className="px-6 py-14 sm:px-12 sm:py-20">
          <Eyebrow tone="light">Membership</Eyebrow>
          <SectionHeading as="h1" tone="light">
            Apply to join.
          </SectionHeading>
          <p className="prose-body mt-6 max-w-2xl text-white/80">
            Membership is $59.95 a month, month to month, and every application is reviewed by chapter
            leadership. Visiting first is welcome &mdash; and free.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </NavyPanel>
      </Container>

      <Section>
        <Container width="narrow">
          <JoinForm />

          <div className="mt-14 rounded-2xl border border-faint bg-wash p-7 sm:p-9">
            <h2 className="text-xl font-extrabold tracking-tight text-navy">How payment works</h2>
            <div className="mt-4">
              <SquareNote />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
