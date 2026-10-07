/**
 * BusinessGPS chapters.
 *
 * This array drives the /chapters grid AND the chapter select on /join.
 * To add a chapter: add one object below. Nothing else needs to change.
 */

export type ChapterStatus = "meeting" | "launching" | "coming";

export type Chapter = {
  /** Stable slug. Used as the ?chapter= value that preselects the join form. */
  id: string;
  name: string;
  status: ChapterStatus;
  day: string;
  time: string;
  /** Optional extra line shown under "Meets", e.g. a start date. */
  note?: string;
  locationName: string;
  address: string;
  leaderName: string;
  leaderRole: string;
  email: string;
};

export const statusLabels: Record<ChapterStatus, string> = {
  meeting: "Now meeting",
  launching: "Launching",
  coming: "Coming soon",
};

export const chapters: Chapter[] = [
  {
    id: "nexcore-south-county",
    name: "NexCore South County",
    status: "launching",
    day: "Thursdays",
    time: "9:30 AM",
    locationName: "NexCore South County",
    address: "11820 Tesson Ferry Rd, Ste 1120, Saint Louis, MO 63128",
    leaderName: "TBD",
    leaderRole: "Chapter leader",
    email: "chapter1@ourbizgps.com",
  },
  {
    id: "chapter-2",
    name: "NexCore Tuesday Morning",
    status: "launching",
    day: "Tuesdays",
    time: "9:30 AM",
    note: "Starts Tuesday, October 13",
    locationName: "NexCore South County",
    address: "11820 Tesson Ferry Rd, Ste 1120, Saint Louis, MO 63128",
    leaderName: "TBD",
    leaderRole: "Chapter leader",
    email: "chapter2@ourbizgps.com",
  },
  {
    id: "chapter-3",
    name: "NexCore Friday Lunch",
    status: "launching",
    day: "Fridays",
    time: "11:30 AM – 12:40 PM",
    note: "Starts Friday, October 23. Lunch available.",
    locationName: "NexCore South County",
    address: "11820 Tesson Ferry Rd, Ste 1120, Saint Louis, MO 63128",
    leaderName: "TBD",
    leaderRole: "Chapter leader",
    email: "chapter3@ourbizgps.com",
  },
  {
    id: "chapter-4",
    name: "TBD",
    status: "coming",
    day: "TBD",
    time: "TBD",
    locationName: "TBD",
    address: "TBD",
    leaderName: "TBD",
    leaderRole: "TBD",
    email: "chapter4@ourbizgps.com",
  },
  {
    id: "chapter-5",
    name: "TBD",
    status: "coming",
    day: "TBD",
    time: "TBD",
    locationName: "TBD",
    address: "TBD",
    leaderName: "TBD",
    leaderRole: "TBD",
    email: "chapter5@ourbizgps.com",
  },
];

/**
 * Label used in the /join chapter select, and the value the form posts, so the
 * application email is readable rather than a slug.
 */
export function chapterSelectLabel(chapter: Chapter): string {
  const name = chapter.name === "TBD" ? `Chapter ${chapter.id.split("-").pop()} (to be named)` : chapter.name;
  const when = chapter.day === "TBD" ? "day and time TBD" : `${chapter.day}, ${chapter.time}`;
  return `${name} — ${when}`;
}

export const START_YOUR_OWN = "I'm interested in starting my own chapter";
