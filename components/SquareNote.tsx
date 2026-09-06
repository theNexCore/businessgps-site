export const SQUARE_LINK = "https://square.link/u/OWBELtgt";

/**
 * How payment works. Mirrored on /join (under the form) and /thanks.
 */
export function SquareNote({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const body = tone === "light" ? "text-white/70" : "text-navy/70";
  const strong = tone === "light" ? "text-white" : "text-navy";

  return (
    <div className={`prose-body space-y-3 ${body}`}>
      <p>
        <span className={`font-semibold ${strong}`}>Here&rsquo;s what happens next:</span> complete your
        first payment, and chapter leadership reviews your application. If the seat can&rsquo;t be
        offered, the payment is refunded in full.
      </p>
      <p>
        The Square link handles your first payment; you&rsquo;re invoiced monthly after that. Cancel
        anytime with thirty days&rsquo; notice to BusinessGPS.
      </p>
    </div>
  );
}
