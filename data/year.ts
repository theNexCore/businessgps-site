/**
 * The BusinessGPS year.
 *
 * Four quarters of thirteen weeks each.
 *
 * The fiscal-year dates are deliberately NOT surfaced to visitors: someone
 * arriving mid-November would read them as a window they had missed.
 * Leadership-turnover context lives on /chapters/leadership only.
 *
 * Single source of truth for the YearWheel on /in-practice. Same rules as
 * data/meeting.ts: this describes structure, not calendar dates.
 */

export type Quarter = {
  number: number;
  label: string;
  weeks: string;
  /** Brand token used for the arc. Quarters alternate navy and blue. */
  hex: string;
};

export type YearMarker = {
  kind: "social" | "giveback" | "annual";
  label: string;
  /** Position around the ring, 0-1, measured clockwise from the year start. */
  at: number;
  hex: string;
};

export const WEEKS_IN_YEAR = 52;
export const WEEKS_IN_QUARTER = 13;

export const quarters: Quarter[] = [
  { number: 1, label: "Q1", weeks: "13 weeks", hex: "#001749" },
  { number: 2, label: "Q2", weeks: "13 weeks", hex: "#005FFE" },
  { number: 3, label: "Q3", weeks: "13 weeks", hex: "#001749" },
  { number: 4, label: "Q4", weeks: "13 weeks", hex: "#005FFE" },
];

/**
 * One social and one giveback per quarter, placed inside their quarter; the
 * annual growth event near year-end.
 */
export const markers: YearMarker[] = [
  { kind: "social", label: "Social", at: 0.09, hex: "#01A6C2" },
  { kind: "giveback", label: "Giveback", at: 0.18, hex: "#FF0000" },
  { kind: "social", label: "Social", at: 0.34, hex: "#01A6C2" },
  { kind: "giveback", label: "Giveback", at: 0.43, hex: "#FF0000" },
  { kind: "social", label: "Social", at: 0.59, hex: "#01A6C2" },
  { kind: "giveback", label: "Giveback", at: 0.68, hex: "#FF0000" },
  { kind: "social", label: "Social", at: 0.84, hex: "#01A6C2" },
  { kind: "annual", label: "Annual growth event", at: 0.92, hex: "#FF0000" },
  { kind: "giveback", label: "Giveback", at: 0.96, hex: "#FF0000" },
];

export const legend = [
  { kind: "social" as const, label: "Quarterly social", detail: "No agenda.", hex: "#01A6C2" },
  {
    kind: "giveback" as const,
    label: "Quarterly giveback",
    detail: "The chapter votes where it goes.",
    hex: "#FF0000",
  },
  {
    kind: "annual" as const,
    label: "Annual growth event",
    detail: "All chapters come together.",
    hex: "#FF0000",
  },
];
