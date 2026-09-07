"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { SocialIcons } from "./SocialIcons";
import { contact, navLinks, type NavItem } from "./nav-links";

/**
 * The sticky header, in two rows: the lockup centred on top, the six nav items
 * directly beneath it.
 *
 * The lockup is composed from the two real assets rather than from lockup.svg,
 * so the wordmark can carry ~2.5x its previous size while the compass stays the
 * size it already was — impossible inside a single fixed-ratio file. Both are
 * the original paths, each scaled proportionally and nothing else.
 *
 * The markup arrives as strings from the server component: the SVGs are read
 * off disk, which cannot happen across the client boundary.
 */

type Lockup = {
  compassSvg: string;
  wordmarkSvg: string;
  compassAspect: number;
  wordmarkAspect: number;
};

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

function NavRow({ pathname }: { pathname: string }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center justify-center gap-8 pb-4">
        {navLinks.map((item: NavItem) => {
          const active = isActive(pathname, item.href);
          const open = openMenu === item.href;
          const linkClass =
            "whitespace-nowrap text-[0.95rem] font-semibold tracking-tight transition-colors hover:text-blue " +
            (active ? "text-blue" : "text-navy");

          if (!item.children) {
            return (
              <li key={item.href}>
                <Link href={item.href} aria-current={active ? "page" : undefined} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            );
          }

          return (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.href)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="flex items-center gap-1.5">
                <Link href={item.href} aria-current={active ? "page" : undefined} className={linkClass}>
                  {item.label}
                </Link>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-label={item.label + " submenu"}
                  onClick={() => setOpenMenu(open ? null : item.href)}
                  className="text-navy/70 transition-colors hover:text-blue"
                >
                  <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden="true">
                    <path
                      d="M5 8.5 12 15.5 19 8.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {open ? (
                <div className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3">
                  <ul className="overflow-hidden rounded-xl border border-faint bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.href + child.label}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2.5 text-sm font-semibold tracking-tight text-navy transition-colors hover:bg-wash hover:text-blue"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}

        {/* Apply is the sixth item, but stays a button — the verb implies a bar. */}
        <li>
          <Link
            href="/join"
            className="inline-flex whitespace-nowrap rounded-full bg-redink px-6 py-2 text-[0.95rem] font-bold text-white transition-colors hover:bg-[#b30000]"
          >
            Apply
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close on navigation. Adjusting state during render rather than in an
  // effect avoids a cascading re-render.
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-faint text-navy lg:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          {open ? (
            <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="absolute inset-x-0 top-full z-50 max-h-[calc(100vh-7rem)] overflow-y-auto border-b border-faint bg-white px-5 pb-8 pt-2 shadow-lg sm:px-8 lg:hidden"
        >
          <ul className="divide-y divide-faint">
            {navLinks.map((item) => (
              <li key={item.href} className="py-1">
                <Link href={item.href} className="block py-3.5 text-lg font-extrabold tracking-tight text-navy">
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="mb-3 ml-4 space-y-1 border-l-2 border-faint pl-4">
                    {item.children.map((child) => (
                      <li key={child.href + child.label}>
                        <Link href={child.href} className="block py-2 text-base font-semibold text-navy/70">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>

          <Link
            href="/join"
            className="mt-7 flex w-full items-center justify-center rounded-full bg-redink px-6 py-4 text-base font-bold text-white"
          >
            Apply to be a member
          </Link>

          <div className="mt-8 flex flex-col gap-4 border-t border-faint pt-6">
            <a href={contact.phoneHref} className="text-sm font-bold tracking-tight text-navy">
              {contact.phone}
            </a>
            <a
              href={contact.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy/70 underline-offset-4 hover:underline"
            >
              {contact.address}
            </a>
            <SocialIcons className="text-navy" />
          </div>
        </nav>
      ) : null}
    </>
  );
}

export function HeaderShell({ lockup, utilityBar }: { lockup: Lockup; utilityBar: ReactNode }) {
  const pathname = usePathname();
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mark and wordmark are sized independently, so the wordmark can never shrink
  // relative to the mark.
  // Mobile sizes leave room for the hamburger beside the lockup; the wordmark
  // carries its full weight from sm upwards.
  const markHeight = condensed ? "h-[36px] sm:h-[52px]" : "h-[44px] sm:h-[74px]";
  const wordHeight = condensed ? "h-[21px] sm:h-[32px]" : "h-[26px] sm:h-[46px]";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(0,23,73,0.08)]">
      <div
        className={
          "overflow-hidden transition-all duration-300 " +
          (condensed ? "max-h-0 opacity-0" : "max-h-12 opacity-100")
        }
      >
        {utilityBar}
      </div>

      <div className="relative border-b border-faint">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          {/* Row one: the lockup, centred. */}
          <div
            className={
              "relative flex justify-center transition-all duration-300 " +
              (condensed ? "py-2.5" : "py-4")
            }
          >
            <Link href="/" aria-label="BusinessGPS, home" className="inline-flex rounded-md">
              <span className="flex items-center gap-3 sm:gap-4">
                <span
                  aria-hidden="true"
                  className={"block shrink-0 transition-all duration-300 " + markHeight}
                  style={{ aspectRatio: String(lockup.compassAspect) }}
                  dangerouslySetInnerHTML={{ __html: lockup.compassSvg }}
                />
                <span
                  aria-hidden="true"
                  className={"block shrink-0 transition-all duration-300 " + wordHeight}
                  style={{ aspectRatio: String(lockup.wordmarkAspect) }}
                  dangerouslySetInnerHTML={{ __html: lockup.wordmarkSvg }}
                />
              </span>
            </Link>

            <MobileMenu pathname={pathname} />
          </div>

          {/* Row two: the nav, directly below the lockup. */}
          <NavRow pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
