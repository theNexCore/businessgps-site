import Link from "next/link";
import { BizGPS } from "./Lockup";
import { SocialIcons } from "./SocialIcons";
import { contact, navLinks } from "./nav-links";
import { AccentStrip, Container } from "./ui";

/**
 * The footer sits on navy, so the name is set as type rather than as the
 * lockup artwork — the lockup is never inverted. See lib/brand.ts.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-navy bg-navy text-white">
      <AccentStrip tone="light" className="rounded-none" />
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
          <div>
            <Link href="/" className="inline-flex rounded-md" aria-label="BusinessGPS, home">
              <BizGPS tone="light" className="text-3xl" />
            </Link>
            <p className="mt-5 text-sm font-semibold text-white/85">BusinessGPS, a NexCore company</p>
            <p className="text-sm text-white/60">Powered by NexCore</p>

            <div className="mt-7 space-y-2">
              <a
                href={contact.phoneHref}
                className="block text-sm font-bold tracking-tight text-white transition-opacity hover:opacity-80"
              >
                {contact.phone}
              </a>
              <a
                href={contact.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-xs text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {contact.address}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-teal">Explore</h2>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/join"
                    className="text-sm font-bold text-white underline-offset-4 transition-colors hover:underline"
                  >
                    Apply to be a member
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-teal">Follow</h2>
              <p className="mt-4 text-sm font-bold text-white">@Ourbizgps</p>
              <SocialIcons className="mt-4 text-white" />
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-teal">Contact</h2>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="mailto:join@ourbizgps.com"
                    className="text-sm text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    join@ourbizgps.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:launch@ourbizgps.com"
                    className="text-sm text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    launch@ourbizgps.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60">
          &copy; {year} BusinessGPS. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
