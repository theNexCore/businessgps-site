import { TealArc } from "./BrandGeometry";

/**
 * The apple pull-quote. Shared by the home referrals section and /philosophy.
 * Deliberately unattributed.
 */
export function PullQuote({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <figure className={"border-l-4 border-teal pl-7 sm:pl-10 " + (light ? "on-navy" : "")}>
      <blockquote>
        <p
          className={
            "text-balance text-2xl font-extrabold leading-[1.2] tracking-tight sm:text-3xl md:text-4xl " +
            (light ? "text-white" : "text-navy")
          }
        >
          You can count the number of seeds in an apple, but you can never count the number of
          apples in a seed.
        </p>
      </blockquote>
      <TealArc className="mt-6" />
      <figcaption className={"mt-5 text-sm font-semibold " + (light ? "text-white/70" : "text-navy/70")}>
        The referral is the seed. The orchard is why you&rsquo;re here.
      </figcaption>
    </figure>
  );
}
