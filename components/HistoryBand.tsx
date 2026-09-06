import { PhotoTile } from "./PhotoTile";
import { AccentStrip } from "./ui";
import { photoPlacements } from "@/data/photos";

const beats = [
  {
    year: "2017",
    text: "BusinessGPS launches its first chapter out of the NexCore building in St. Louis and grows to multiple chapters.",
  },
  {
    year: "Since",
    text: "The ideas — Listen, Invest, Nurture, Kindle — are taught in its rooms from the start.",
  },
  {
    year: "2026",
    text: "BusinessGPS relaunches: same beliefs, finally built the way they were meant to fit together.",
  },
];

export function HistoryBand() {
  return (
    <div className="rounded-panel border border-faint bg-wash px-6 py-12 sm:px-12 sm:py-14">
      <AccentStrip className="max-w-[140px]" />
      <ol className="mt-9 grid gap-9 md:grid-cols-3 md:gap-10">
        {beats.map((beat) => (
          <li key={beat.year}>
            <p className="text-3xl font-extrabold tracking-tighter text-navy sm:text-4xl">{beat.year}</p>
            <p className="prose-body mt-3 text-navy/75">{beat.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-11 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {photoPlacements.historyBand.map((photo) => (
          <PhotoTile key={photo.file} photo={photo} className="aspect-[3/2]" />
        ))}
      </div>
    </div>
  );
}
