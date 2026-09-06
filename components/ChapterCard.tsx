import Link from "next/link";
import { statusLabels, type Chapter } from "@/data/chapters";

const badgeStyles: Record<Chapter["status"], string> = {
  meeting: "bg-tealink text-white",
  launching: "bg-redink text-white",
  coming: "border-2 border-blue text-blue",
};

function Row({ label, value }: { label: string; value: string }) {
  const pending = value === "TBD";
  return (
    <div>
      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-navy/60">{label}</dt>
      <dd className={`mt-1 tracking-tight ${pending ? "font-semibold text-navy/60" : "font-semibold text-navy"}`}>
        {value}
      </dd>
    </div>
  );
}

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  const displayName = chapter.name === "TBD" ? "Chapter to be named" : chapter.name;

  return (
    <li className="flex flex-col rounded-2xl border border-faint bg-white p-7 shadow-[0_1px_0_rgba(0,23,73,0.04)] sm:p-8">
      <span
        className={`inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${badgeStyles[chapter.status]}`}
      >
        {statusLabels[chapter.status]}
      </span>

      <h3
        className={`mt-5 text-2xl font-extrabold tracking-tight ${
          chapter.name === "TBD" ? "text-navy/60" : "text-navy"
        }`}
      >
        {displayName}
      </h3>

      <dl className="mt-6 flex-1 space-y-4">
        <Row label="Meets" value={chapter.day === "TBD" ? "TBD" : `${chapter.day}, ${chapter.time}`} />
        <Row label="Location" value={chapter.locationName} />
        <Row label="Address" value={chapter.address} />
        <Row label={chapter.leaderRole === "TBD" ? "Chapter leader" : chapter.leaderRole} value={chapter.leaderName} />
      </dl>

      <a
        href={`mailto:${chapter.email}`}
        className="mt-6 block text-sm font-semibold text-blue underline-offset-4 hover:underline"
      >
        {chapter.email}
      </a>

      <Link
        href={`/join?chapter=${chapter.id}`}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-redink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#b30000]"
      >
        Apply to this chapter
      </Link>
    </li>
  );
}
