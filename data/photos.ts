/**
 * Chapter photo manifest (2017-2019 St. Louis chapters).
 *
 * `photos` is the library. `photoPlacements` decides which photo appears where
 * on the site — that is the only place to edit when you want to feature a
 * different image. Every photo surface reads from this file.
 *
 * Files live in /public/photos/ under these exact names.
 */

/** Set to false to fall back to placeholders if /public/photos/ is ever emptied. */
export const photosAvailable = true;

export type Photo = {
  file: string;
  alt: string;
};

/**
 * Default alt for the wider archive, where the specific room isn't known well
 * enough to describe. Photos we can describe get their own alt below.
 */
const room = "BusinessGPS chapter meeting, St. Louis";

export const photos = {
  groupPortrait: {
    file: "20180627_090306.jpg",
    alt: "Members of a St. Louis BusinessGPS chapter together after a meeting",
  },
  twoInConversation: {
    file: "20180109_094454.jpg",
    alt: "Two members in conversation at a window counter before a BusinessGPS meeting",
  },
  tableOfFour: {
    file: "20171207_103334.jpg",
    alt: "Four BusinessGPS members working around a table, St. Louis",
  },
  smallGroupNotes: {
    file: "20171012_095645.jpg",
    alt: "A small group reviewing notes together at a BusinessGPS meeting",
  },

  archive01: { file: "20180125_135209.jpg", alt: room },
  archive02: { file: "20180222_100446.jpg", alt: room },
  archive03: { file: "20180301_100039.jpg", alt: room },
  archive04: { file: "20180301_100311.jpg", alt: room },
  archive05: { file: "20180405_194200.jpg", alt: room },
  archive06: { file: "20180606_085334_0_.jpg", alt: room },
  archive07: { file: "20180815_084614.jpg", alt: room },
  archive08: { file: "20181004_174855.jpg", alt: room },
  archive09: { file: "20190404_095930.jpg", alt: room },
  archive10: { file: "33364894_1239499909487113_8328986475177705472_n.jpg", alt: room },
  archive11: { file: "47323839_1476058592497909_9159096635794391040_n.jpg", alt: room },
  archive12: { file: "502527425_9061332170637142_5433100609477325690_n.jpg", alt: room },
  archive13: { file: "503103282_9066142143489478_8445853984927160452_n.jpg", alt: room },
  archive14: { file: "503262027_9062380680532291_4060750725679932216_n.jpg", alt: room },
  archive15: { file: "503486992_9066185010151858_2833845897139099485_n.jpg", alt: room },
  archive16: { file: "503527880_9074574155979610_2572796668671753306_n.jpg", alt: room },
  archive17: { file: "503890598_9074574222646270_7972391170752501110_n-EDIT.jpg", alt: room },
} satisfies Record<string, Photo>;

/**
 * Where each photo appears. Swap a value here to feature a different image —
 * no component needs editing.
 */
export const photoPlacements = {
  /** Home: beside "This room asks something of you." */
  homeAsks: photos.groupPortrait,
  /** Home: the four-across strip in the history band. */
  historyBand: [photos.archive01, photos.archive02, photos.archive03, photos.archive04],
  /** How It Works: the "Show up early." feature image. */
  showUpEarly: photos.archive05,
  /** How It Works: beside the guest expectations panel. */
  guestPanel: photos.twoInConversation,
  /** Chapters: the four-across strip under "Start one where you are." */
  chaptersStrip: [
    photos.tableOfFour,
    photos.smallGroupNotes,
    photos.archive11,
    photos.archive12,
  ],
} satisfies {
  homeAsks: Photo;
  historyBand: Photo[];
  showUpEarly: Photo;
  guestPanel: Photo;
  chaptersStrip: Photo[];
};
