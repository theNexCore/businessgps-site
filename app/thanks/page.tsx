import type { Metadata } from "next";
import { SQUARE_LINK, SquareNote } from "@/components/SquareNote";
import { Button, Container, Eyebrow, NavyPanel, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Application received",
  description: "Your BusinessGPS application has been received. Here's what happens next.",
  robots: { index: false, follow: true },
};

export default function ThanksPage() {
  return (
    <Section>
      <Container width="narrow">
        <NavyPanel className="px-6 py-14 sm:px-12 sm:py-16">
          <Eyebrow tone="light">Thank you</Eyebrow>
          <SectionHeading as="h1" tone="light">
            Application received.
          </SectionHeading>
          <div className="mt-7">
            <SquareNote tone="light" />
          </div>
          <Button href={SQUARE_LINK} variant="red" external className="mt-9">
            Complete your membership &mdash; $59.95/month
          </Button>
        </NavyPanel>

        <p className="prose-body mt-10 text-navy/70">
          Questions in the meantime? Email{" "}
          <a href="mailto:join@ourbizgps.com" className="font-semibold text-blue underline underline-offset-4">
            join@ourbizgps.com
          </a>
          .
        </p>
      </Container>
    </Section>
  );
}
