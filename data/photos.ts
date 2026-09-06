/**
 * Chapter photo library (2018-2019 St. Louis rooms).
 *
 * Files live in /public/photos/ as bgps-photo-01.jpg … bgps-photo-17.jpg.
 * 01-09 are candid meeting shots; 10-17 are group and event shots.
 * These are the only image filenames that may appear anywhere in the code.
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

function photo(index: number, alt: string): Photo {
  return { file: `bgps-photo-${String(index).padStart(2, "0")}.jpg`, alt };
}

/** 01-09: candid meeting shots. */
export const candid: Photo[] = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => photo(n, meeting));

/** 10-17: group and event shots. */
export const groups: Photo[] = [10, 11, 12, 13, 14, 15, 16, 17].map((n) => photo(n, group));

export const photos: Photo[] = [...candid, ...groups];

/**
 * Where photos appear. Kept deliberately sparse: photos are archive texture,
 * never hero photography.
 */
export const photoSets = {
  /** Home: one image beside "This room asks something of you." */
  homeRequirements: candid[4],
  /** Home: the strip in the history band. */
  homeHistory: [groups[0], candid[1], groups[3], candid[7]],
  /** /in-practice: "Show up early." and the guest panel. */
  showUpEarly: candid[0],
  guestPanel: candid[3],
  /** /chapters: a two-up strip. */
  chapters: [groups[5], candid[6]],
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
