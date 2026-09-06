/**
 * The five blocks of a BusinessGPS meeting.
 *
 * Single source of truth for the meeting wheel on / and /how-it-works.
 * `weight` drives the proportional arc on the wheel — it is NOT a duration.
 * Durations are expressed only as labels. Never publish clock times.
 */

export type MeetingBlock = {
  /** Position in the room, 1-5. Rendered in the numbered chip. */
  number: number;
  name: string;
  /** Human-readable duration. Durations only — never a clock time. */
  duration: string;
  /** Arc weight on the wheel. */
  weight: number;
  /** Brand token used for the arc, chip and legend swatch. */
  color: "navy" | "blue" | "red" | "teal";
  hex: string;
  /** One line for the teaser legend. */
  short: string;
  /** Expanded description for /how-it-works. */
  detail: string;
};

export const TOTAL_MINUTES = 70;

export const meetingBlocks: MeetingBlock[] = [
  {
    number: 1,
    name: "The Welcome",
    duration: "5 min",
    weight: 5,
    color: "navy",
    hex: "#001749",
    short: "Leadership opens the room.",
    detail:
      "Leadership opens the room by name and role. Everyone knows who is here and why before anything else begins.",
  },
  {
    number: 2,
    name: "The Introductions",
    duration: "10-15 min",
    weight: 13,
    color: "blue",
    hex: "#005FFE",
    short: "Guests say hello. Members answer one shared prompt.",
    detail:
      "Guests say hello in fifteen seconds. Members answer one shared prompt, thirty seconds each, standing. The same prompt for everyone, so the room hears one conversation instead of thirty commercials.",
  },
  {
    number: 3,
    name: "The Centerpiece",
    duration: "30-40 min",
    weight: 35,
    color: "red",
    hex: "#FF0000",
    short: "The working heart of the meeting.",
    detail:
      "The working heart of the meeting: a teachable point, breakouts, or a member spotlight. This is the block the rest of the room is built to protect.",
  },
  {
    number: 4,
    name: "Takeaways & Wins",
    duration: "flexes",
    weight: 12,
    color: "teal",
    hex: "#01A6C2",
    short: "What's leaving the room with you.",
    detail:
      "What's leaving the room with you, often carried by someone else. You don't report your own insight. Someone else carries it for you. We call it Speaking for One Another.",
  },
  {
    number: 5,
    name: "The Close",
    duration: "5 min",
    weight: 5,
    color: "navy",
    hex: "#001749",
    short: "Five minutes, then the hard stop.",
    detail:
      "Five minutes, then the hard stop. The meeting ends when it says it will end, every week, without exception.",
  },
];
