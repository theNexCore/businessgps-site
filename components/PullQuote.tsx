import { TealArc } from "./BrandGeometry";

/**
 * The apple quote. Shared by the home referrals section and /philosophy, so
 * the wording and the attribution can never drift between them.
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
          &ldquo;You can always count the number of seeds in an apple, but you can never count the
          number of apples in a seed.&rdquo;
        </p>
      </blockquote>
      <TealArc className="mt-6" />
      <figcaption
        className={
          "mt-5 text-sm font-bold uppercase tracking-[0.16em] " +
          (light ? "text-white/70" : "text-navy/70")
        }
      >
        Darnell Self
      </figcaption>
      <p className={"prose-body mt-4 text-sm " + (light ? "text-white/70" : "text-navy/70")}>
        The referral is the seed. The orchard is why you&rsquo;re here.
      </p>
    </figure>
  );
}
