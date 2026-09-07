export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

/**
 * Nav order, left to right: What It Is · Philosophy · In Practice · Chapters ·
 * History, then the Apply button (which is never a plain nav tab).
 */
export const navLinks: NavItem[] = [
  { href: "/what-it-is", label: "What It Is" },
  {
    href: "/philosophy",
    label: "Philosophy",
    // L.I.N.K. leads: it is the philosophy, not a sub-topic of the framework.
    children: [
      { href: "/philosophy/link", label: "L.I.N.K." },
      { href: "/philosophy/focus10", label: "The Focus10" },
    ],
  },
  { href: "/in-practice", label: "In Practice" },
  {
    href: "/chapters",
    label: "Chapters",
    children: [
      { href: "/chapters", label: "Find a Chapter" },
      { href: "/chapters/leadership", label: "Chapter Leadership" },
      { href: "/chapters#launch", label: "Launch a Chapter" },
    ],
  },
  { href: "/history", label: "History" },
];

/** The nav splits either side of the centred lockup on wide screens. */
export const navLeft = navLinks.slice(0, 3);
export const navRight = navLinks.slice(3);

export const contact = {
  phone: "314.347.1120",
  phoneHref: "tel:+13143471120",
  address: "11820 Tesson Ferry Rd, Ste 1120, Saint Louis, MO 63128",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=11820+Tesson+Ferry+Rd+Ste+1120+Saint+Louis+MO+63128",
};

export const socials = [
  { label: "YouTube", href: "https://youtube.com/@ourbizgps" },
  { label: "X", href: "https://x.com/ourbizgps" },
  { label: "LinkedIn", href: "https://linkedin.com/company/ourbizgps" },
  { label: "Facebook", href: "https://facebook.com/ourbizgps" },
  { label: "Instagram", href: "https://instagram.com/ourbizgps" },
];
