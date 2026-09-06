# BusinessGPS — ourbizgps.com

The production website for **BusinessGPS**, a weekly business growth community relaunching in
St. Louis.

Static-first Next.js: no database, no auth, no CMS. Everything a non-technical editor needs to
change lives in one of four data files.

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

## Sitemap

```
/                      Home
/what-it-is            What It Is          — the stranger's page
/philosophy            Philosophy          — the pillars
/philosophy/focus10    The Focus10         — the framework
/philosophy/link       L.I.N.K.            — the four practices
/in-practice           In Practice         — the meeting, the quarter, the year
/chapters              Chapters            — find / apply / launch
/chapters/leadership   Chapter Leadership  — the eight seats
/history               History
/join                  Apply (+ /thanks)
```

`/how-it-works` → `/in-practice` and `/focus10` → `/philosophy/focus10` are permanent redirects
(`next.config.ts`).

**Wording:** the verb is always **Apply** / **Apply to be a member**. "Join" survives only as the
`/join` route path, never as UI copy.

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
quote: paste it into `quote` and set `live: true`. Cards show name and business only.

### The meeting wheel — `data/meeting.ts`

The five blocks, their durations, colours and arc weights. Single source of truth for the wheel on
`/` and `/in-practice`, and for the expanded block descriptions.

`weight` controls the size of each arc. It is **not** a duration — `duration` is a display string.
The wheel shows durations only; it must never display a clock time.

### The year wheel — `data/year.ts`

Four quarters of thirteen weeks, the socials and givebacks inside them, the annual growth event
near year-end, and leadership turnover on the year boundary. The fiscal year opens the week of
November 1 and closes October 31.

`markers[].at` is a position around the ring from 0 to 1, measured clockwise from the year
boundary — structure, not calendar dates.

### Chapter photos — `data/photos.ts`

Seventeen archive photos live in `public/photos/` as `bgps-photo-01.jpg` … `bgps-photo-17.jpg`
(01–09 candid meeting shots, 10–17 group and event shots). **These are the only image filenames
that may appear anywhere in the code.**

The file has two parts:

- `photos` / `candid` / `groups` — the library.
- `photoSets` — which photos appear where.

**To feature a different image, change one value in `photoSets`.** No component needs editing:

```ts
export const photoSets = {
  homeRequirements: candid[4],     // Home, beside "This room asks something of you."
  homeHistory: [...],              // Home, the history-band strip
  showUpEarly: candid[0],          // /in-practice, "Show up early."
  guestPanel: candid[3],           // /in-practice, guest expectations
  chapters: [...],                 // /chapters, two-up strip
  history: [...],                  // /history, the narrative gallery
};
```

Photos always render under a soft navy overlay with a light desaturation
(`components/PhotoTile.tsx` and the `.photo-archive` utility) so the archive-era image quality
reads as intentional rather than as poor design. Never full-bleed sharp-focus hero images.

`photosAvailable` can be set to `false` to fall back to marked placeholders.

---

## Brand

### The lockup

| Path | What it is |
| --- | --- |
| `public/brand/lockup.svg` | Horizontal lockup (compass + wordmark) |
| `public/brand/mark.svg` | Square lockup |
| `public/brand/lockup.png`, `mark.png` | Raster fallbacks |
| `public/brand/focus10.png` | The Focus10 outline |

**The lockup is always full-colour, on white or light backgrounds, and is never inverted.** There
is deliberately no white/inverted variant in `lib/brand.ts` — removing that code path is what keeps
the rule from quietly regressing. A dark section that needs branding uses typography instead: the
`<BizGPS />` component (see the footer).

The lockup is *inlined* rather than used as an `<img>`: Illustrator emits a `<style>` block of
generic class names that would be document-global once inlined (and whose CSS text would land in
the page's text content), so `lib/brand.ts` flattens those rules onto the elements as presentation
attributes and namespaces the gradient ids.

Every lockup on the site renders through `components/Lockup.tsx` or the header. Change it once, it
changes everywhere.

### Wordmark rules

- **BusinessGPS** — one word, camel case. Never "Business GPS", never all caps in prose.
- Styled as a wordmark: "Business" navy (white on dark), "GPS" **red italic**, Sora bold.

### Brand geometry — `components/BrandGeometry.tsx`

The logo's shapes reused as structural page elements, not decoration:

- `<BrandArc />` — compass ring fragments bleeding off a section corner.
- `<BrandArrow />` — the red arrow rising left to right, as a divider motif.
- `<CompassPoint />` — the four-point star, as list bullets and section markers.
- `<TealArc />` — a thin teal underline arc under key headings.

Every page gets at least one; no page gets more than three. Size is a separate prop on these
components rather than something passed through `className`, because two competing Tailwind
`h-`/`w-` utilities resolve by stylesheet order, not class order.

### Colour

Brand colours are Tailwind theme tokens in `app/globals.css`:
`navy #001749`, `blue #005FFE`, `red #FF0000`, `teal #01A6C2`, `wash #F4F7FB`, `faint #DEE6F2`.

Two extra "ink" tokens exist because the pure brand red and teal fail AA against white text:
`redink #DF0000` (5.08:1 on white) and `tealink #018197` (4.58:1). **Ink tokens carry white text
and small coloured text; the pure brand colours stay for graphics** — arcs, squares, the arrow, the
accent strip, the wordmark.

Headings, UI and numerals are **Sora**. Long-form body paragraphs use the `.prose-body` utility
(Georgia-first system serif).

### Open Graph

`app/opengraph-image.tsx` generates the navy OG card at build time and applies to every route.

---

## Forms and payment

- The application form posts to Formspree: `https://formspree.io/f/maeydybz`
  (`components/JoinForm.tsx`). It validates client-side, then redirects to `/thanks`.
- The chapter dropdown posts the readable label, not the slug, so the notification email reads
  "NexCore South County — Thursdays, 9:30 AM".
- The form reads `?chapter=` from `window.location` rather than `useSearchParams`, which would put
  the whole form behind a Suspense boundary and ship a collapsing fallback in the static HTML.
- `/thanks` links to Square: `https://square.link/u/OWBELtgt` (opens in a new tab). Square handles
  the first payment; members are invoiced monthly after that.
- Price is **$59.95** everywhere. The only place `$59` appears alone is the large price graphic,
  where the `95` is set raised and red by design.

---

## Deploying to Vercel

The project is deployed under the **NexCore** Vercel team as `businessgps-site`.

```bash
npx vercel deploy --prod --scope nex-core1
```

Pushes do not deploy automatically yet: Vercel's GitHub App is scoped to selected repositories and
this repo has not been added. To enable it — **github.com/settings/installations → Vercel →
Configure → add `businessgps-site`** — then run `npx vercel git connect --scope nex-core1`.

### DNS last

**Do not point `ourbizgps.com` at the deployment until the site has been reviewed on the Vercel
preview URL and signed off.** Deploy first, review on the `*.vercel.app` URL, and only then add the
custom domain in Vercel and cut the DNS over. The site contains no hardcoded environment
assumptions, so the cutover is the final step and nothing needs rebuilding for it.

---

## Project layout

```
app/                    the ten routes above, plus /thanks
  layout.tsx            Sora font, metadata, header + footer, skip link
  opengraph-image.tsx   build-time OG card
  robots.ts sitemap.ts
components/
  Header / HeaderShell / UtilityBar   two-tier sticky header, centred lockup
  MeetingWheel, YearWheel             hand-built inline SVG, no chart library
  SelfSelect, PullQuote               shared blocks used on more than one page
  BrandGeometry                       arcs, arrow, compass points
  …
data/                   chapters, quotes, meeting, year, photos
lib/brand.ts            inlines the lockup SVG
```

`<Band>` in `components/ui.tsx` is the full-bleed section wrapper — background colour runs edge to
edge with the content in the standard container. Use its `top`/`bottom` props rather than a `pt-0`
override in `className`: a responsive `sm:pt-24` lives later in the stylesheet than a base `pt-0`,
so the override silently loses above the breakpoint.
