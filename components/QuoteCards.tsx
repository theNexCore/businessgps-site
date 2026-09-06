import { quotes, type Quote } from "@/data/quotes";

function Card({ quote }: { quote: Quote }) {
  return (
    <li className="flex flex-col rounded-2xl border border-faint bg-wash p-7 sm:p-8">
      {quote.live ? (
        <blockquote className="prose-body flex-1 text-navy">
          <p>&ldquo;{quote.quote}&rdquo;</p>
        </blockquote>
      ) : (
        <p className="prose-body flex-1 italic text-navy/60">
          Quote coming &mdash; {quote.name} has been asked.
        </p>
      )}
      <div className="mt-7 border-t border-faint pt-5">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-navy">{quote.name}</p>
        <p className="text-sm text-navy/65">{quote.business}</p>
      </div>
    </li>
  );
}

export function QuoteCards() {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {quotes.map((quote) => (
        <Card key={quote.name} quote={quote} />
      ))}
    </ul>
  );
}
