import Link from "next/link";

/** The four working practices, taught in BusinessGPS rooms since 2017. */
const verbs = [
  { word: "Listen.", className: "bg-blue" },
  { word: "Invest.", className: "bg-tealink" },
  { word: "Nurture.", className: "bg-red" },
  { word: "Kindle.", className: "bg-navy" },
];

export function FourSquares({ withLink = true }: { withLink?: boolean }) {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {verbs.map((verb) => (
          <li
            key={verb.word}
            className={`flex aspect-square items-end rounded-2xl p-6 sm:p-7 ${verb.className}`}
          >
            <p className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{verb.word}</p>
          </li>
        ))}
      </ul>
      <p className="prose-body mt-7 max-w-2xl text-navy/75">
        Four practices, taught and practiced in BusinessGPS rooms since 2017. They&rsquo;re the working
        muscles of The Focus10.
        {withLink ? (
          <>
            {" "}
            <Link href="/focus10" className="font-semibold text-blue underline underline-offset-4">
              See The Focus10
            </Link>
            .
          </>
        ) : null}
      </p>
    </div>
  );
}
