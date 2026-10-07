import type { Metadata } from "next";
import { BrandArc } from "@/components/BrandGeometry";
import { GuestForm } from "@/components/GuestForm";
import { AccentStrip, Band, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Register as a guest",
  description:
    "Visit a BusinessGPS chapter meeting as a guest. Visiting is free — pick a meeting and the chapter will be expecting you.",
  alternates: { canonical: "/visit" },
};

export default function VisitPage() {
  return (
    <>
      <section className="on-navy relative overflow-hidden bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)]">
        <BrandArc position="top-right" tone="white" size={560} />
        <Container className="relative z-10 py-16 sm:py-24">
          <Eyebrow tone="light">Guests</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Register as a guest.
          </h1>
          <p className="prose-body mt-7 max-w-2xl text-lg text-white/85">
            Visiting is free. Pick a meeting, tell us who&rsquo;s coming, and the chapter will be
            expecting you.
          </p>
          <AccentStrip tone="light" className="mt-10 max-w-[180px]" />
        </Container>
      </section>

      <Band tone="white" width="narrow">
        <GuestForm />
      </Band>
    </>
  );
}
