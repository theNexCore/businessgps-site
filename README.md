# BusinessGPS — ourbizgps.com

The production website for **BusinessGPS**, a weekly business growth community relaunching in
St. Louis.

Static-first Next.js: no database, no auth, no CMS. Everything a non-technical editor needs to
change lives in one of three data files.

---

## Run it locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build; every route is statically generated
npm run start        # serve the production build
npm run lint         # eslint
```

Node 20+ is required (built and tested on Node 24).

---

## Editing content

### Chapters — `data/chapters.ts`

One exported array drives **both** the `/chapters` grid and the chapter dropdown on `/join`.

**To add a chapter, add one object to the array. Nothing else needs to change.**

```ts
{
  id: "nexcore-west-county",       // slug; also the ?chapter= value that preselects the join form
  name: "NexCore West County",
  status: "meeting",               // "meeting" | "launching" | "coming"
  day: "Tuesdays",
  time: "7:30 AM",
  locationName: "NexCore West County",
  address: "123 Example Rd, Saint Louis, MO 63000",
  leaderName: "Jane Doe",
  leaderRole: "Chapter leader",
  email: "westcounty@ourbizgps.com",
}
```

Status badges: `meeting` → teal "Now meeting", `launching` → red "Launching",
`coming` → blue outline "Coming soon". Any field left as the string `"TBD"` renders in a muted
placeholder style automatically.

### Member quotes — `data/quotes.ts`

```ts
{ name: "Lewis Marty", business: "Simploy", quote: "", live: false }
```

While `live: false`, the card shows *"Quote coming — Lewis Marty has been asked."* To publish a
quote: paste it into `quote` and set `live: true`. Reserve entries are commented out at the bottom
of the file — uncomment to bring one into rotation.

### The meeting wheel — `data/meeting.ts`

The five blocks, their durations, colours and arc weights. Single source of truth for the wheel on
both `/` and `/how-it-works`, and for the expanded block descriptions.

`weight` controls the size of each arc. It is **not** a duration — `duration` is a display string.
The wheel shows durations only; it must never display a clock time.

### Chapter photos — `data/photos.ts`

Twenty-one archive photos (2017-2019) live in `public/photos/`. The file has two
parts:

- `photos` — the library. Each entry is a filename plus its alt text.
- `photoPlacements` — which photo appears where on the site.

**To feature a different image, change one value in `photoPlacements`.** No
component needs editing:

```ts
export const photoPlacements = {
  homeAsks: photos.groupPortrait,        // Home, beside "This room asks something of you."
  historyBand: [ /* four-across strip */ ],
  showUpEarly: photos.archive05,         // How It Works, "Show up early."
  guestPanel: photos.twoInConversation,  // How It Works, guest expectations
  chaptersStrip: [ /* four-across strip */ ],
};
```

The source photos are 2:1 panoramas. Feature tiles use `aspect-[2/1]` so nothing
is cropped away; the four-across strips use `aspect-[3/2]` for a tidier grid.

Photos always render under a soft navy overlay with a light desaturation
(`components/PhotoTile.tsx` and the `.photo-archive` utility) so the archive-era
image quality reads as intentional rather than as poor design.

`photosAvailable` at the top of the file can be set to `false` to fall back to
marked placeholders if the folder is ever emptied.

---

## Brand assets

| Path | What it is |
| --- | --- |
| `public/brand/lockup.svg` | Horizontal lockup (compass + wordmark) |
| `public/brand/mark.svg` | Square lockup |
| `public/brand/lockup.png`, `mark.png` | Raster fallbacks |
| `public/brand/focus10.png` | The Focus10 outline |

The lockups are **inlined** rather than used as `<img>` (see `lib/brand.ts`). The supplied artwork
is dark-on-light; on navy panels only the flat navy fills are repainted white, so the red italic
"GPS" and the compass keep their brand colours. A blanket `brightness(0) invert(1)` filter would
flatten those away.

Every lockup on the site renders through `components/Lockup.tsx`. Change it once, it changes
everywhere.

The Focus10 image is isolated in `components/Focus10Diagram.tsx` — when the SVG redraw arrives,
swap it there and no page needs editing.

### Wordmark rules

- **BusinessGPS** — one word, camel case. Never "Business GPS", never all caps in prose.
- Styled as a wordmark: "Business" navy (white on dark), "GPS" **red italic**, Sora bold.
- For an inline mention inside a paragraph, use the `<BizGPS />` helper — not a rebuilt lockup.

### Open Graph

`app/opengraph-image.tsx` generates the navy OG card at build time and applies to every route. To
use a committed static card instead, drop it at `public/brand/og.png`, point `openGraph.images` in
`app/layout.tsx` at it, and delete that file.

---

## Forms and payment

- The application form posts to Formspree: `https://formspree.io/f/maeydybz`
  (`components/JoinForm.tsx`). It validates client-side, then redirects to `/thanks`.
- The chapter dropdown posts the readable label, not the slug, so the notification email reads
  "NexCore South County — Thursdays, 9:30 AM".
- `/thanks` links to Square: `https://square.link/u/OWBELtgt` (opens in a new tab). Square handles
  the first payment; members are invoiced monthly after that.
- Price is **$59.95** everywhere. The only place `$59` appears alone is the large price graphic,
  where the `95` is set raised and red by design.

---

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **New Project → Import** the repo. Framework preset is detected as Next.js; no
   environment variables and no build-setting changes are needed.
3. Deploy. Every route is prerendered as static content.

### DNS last

**Do not point `ourbizgps.com` at the deployment until the site has been reviewed on the Vercel
preview URL and signed off.** Deploy first, review on the `*.vercel.app` URL, and only then add the
custom domain in Vercel and cut the DNS over. The site contains no hardcoded environment
assumptions, so the cutover is the final step and nothing needs rebuilding for it.

---

## Project layout

```
app/                    routes: / /how-it-works /focus10 /chapters /join /thanks
  layout.tsx            Sora font, metadata, header + footer, skip link
  opengraph-image.tsx   build-time OG card
  robots.ts sitemap.ts
components/             Header, Footer, MeetingWheel, PriceBlock, ChapterCard, …
data/                   chapters, quotes, meeting, photos
lib/brand.ts            inlines + recolours the lockup SVGs
```

Brand colours are Tailwind theme tokens defined in `app/globals.css`:
`navy #001749`, `blue #005FFE`, `red #FF0000`, `teal #01A6C2`, `wash #F4F7FB`, `faint #DEE6F2`.
Use `bg-navy`, `text-red`, `border-faint`, and so on.

Headings, UI and numerals are **Sora**. Long-form body paragraphs use the `.prose-body` utility
(Georgia-first system serif).
