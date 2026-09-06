/**
 * Chapter photo library (2017-2019 St. Louis rooms).
 *
 * Files live in /public/photos/ as bgps-photo-01.jpg … bgps-photo-21.jpg.
 * These are the only image filenames that may appear anywhere in the code.
 *
 *   01-12   candid meeting shots
 *   13-21   group and event shots
 *
 * `photoSets` decides which photos appear where. Change a value there to
 * feature a different image — no component needs editing.
 */

/** Set to false to fall back to marked placeholders if the folder is emptied. */
export const photosAvailable = true;

export type Photo = {
  file: string;
  alt: string;
};

const meeting = "BusinessGPS chapter meeting, St. Louis";
const group = "Members of a BusinessGPS chapter, St. Louis";

/** Photos specific enough to describe get their own alt text. */
const described: Record<number, string> = {
  10: "A small group reviewing notes together at a BusinessGPS meeting",
  11: "Four BusinessGPS members working around a table, St. Louis",
  12: "Two members in conversation at a window counter before a BusinessGPS meeting",
  21: "Members of a St. Louis BusinessGPS chapter together after a meeting",
};

function photo(index: number, fallback: string): Photo {
  return {
    file: `bgps-photo-${String(index).padStart(2, "0")}.jpg`,
    alt: described[index] ?? fallback,
  };
}

/** Candid meeting shots. */
export const candid: Photo[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) =>
  photo(n, meeting),
);

/** Group and event shots. */
export const groups: Photo[] = [13, 14, 15, 16, 17, 18, 19, 20, 21].map((n) => photo(n, group));

export const photos: Photo[] = [...candid, ...groups];

/** Look a frame up by its file number, for placements that want a specific one. */
function frame(index: number): Photo {
  const file = `bgps-photo-${String(index).padStart(2, "0")}.jpg`;
  const match = photos.find((entry) => entry.file === file);
  if (!match) throw new Error(`No photo ${file} in the library`);
  return match;
}

/**
 * Where photos appear. Kept deliberately sparse: photos are archive texture,
 * never hero photography.
 */
export const photoSets = {
  /** Home: feathered behind the "not a networking group" hook. */
  hook: candid[7],
  /** Home: the group portrait beside "This room asks something of you." */
  homeRequirements: frame(21),
  /** Home: the strip in the history band. */
  homeHistory: [groups[0], candid[1], groups[3], candid[7]],
  /** /in-practice: "Show up early." and the guest panel. */
  showUpEarly: candid[0],
  guestPanel: frame(12),
  /** /chapters: a two-up strip. */
  chapters: [frame(11), frame(10)],
  /** /history: the narrative gallery, six to eight images. */
  history: [
    candid[2],
    groups[1],
    candid[5],
    groups[2],
    candid[8],
    groups[4],
    groups[6],
    groups[7],
  ],
} satisfies Record<string, Photo | Photo[]>;
