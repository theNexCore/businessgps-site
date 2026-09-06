"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { SocialIcons } from "./SocialIcons";
import { contact, navLeft, navLinks, navRight, type NavItem } from "./nav-links";

/**
 * The sticky main header. The lockup is the centrepiece: centred, full-colour,
 * with the nav split either side of it on wide screens.
 *
 * On scroll the header condenses — the utility bar hides and the lockup scales
 * down — but the lockup stays centred and stays full-colour.
 *
 * The lockup markup arrives as a string from the server component so the SVG
 * can be inlined without pulling node:fs across the client boundary.
 */

function isActive(pathname: string, item: NavItem) {
  return pathname === item.href || pathname.startsWith(item.href + "/");
}

/**
 * One half of the split nav. Each half is its own landmark with a distinct
 * label — a single <nav> cannot span both sides of the centred lockup.
 */
function NavGroup({
  items,
  align,
  pathname,
  label,
}: {
  items: NavItem[];
  align: "start" | "end";
  pathname: string;
  label: string;
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav aria-label={label}>
    <ul className={"flex items-center gap-7 " + (align === "end" ? "justify-end" : "justify-start")}>
      {items.map((item) => {
        const active = isActive(pathname, item);
        const open = openMenu === item.href;
        const linkClass =
          "whitespace-nowrap text-sm font-semibold tracking-tight transition-colors hover:text-blue " +
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
        className="flex h-11 w-11 items-center justify-center rounded-md border border-faint text-navy lg:hidden"
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
          className="absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-faint bg-white px-5 pb-8 pt-2 shadow-lg sm:px-8 lg:hidden"
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

export function HeaderShell({
  lockupSvg,
  lockupAspect,
  utilityBar,
}: {
  lockupSvg: string;
  lockupAspect: number;
  utilityBar: ReactNode;
}) {
  const pathname = usePathname();
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <div
            className={
              "grid grid-cols-[1fr_auto_1fr] items-center gap-6 transition-all duration-300 " +
              (condensed ? "py-2" : "py-4")
            }
          >
            <div className="hidden lg:block">
              <NavGroup items={navLeft} align="start" pathname={pathname} label="Primary" />
            </div>

            <div className="flex justify-start lg:justify-center">
              <Link
                href="/"
                aria-label="BusinessGPS, home"
                /* Responsive rather than a fixed width: at 336px the lockup
                   pushes the hamburger off a 390px screen. */
                className={
                  "inline-flex rounded-md transition-all duration-300 " +
                  (condensed
                    ? "w-[148px] sm:w-[196px] lg:w-[232px]"
                    : "w-[184px] sm:w-[252px] lg:w-[336px]")
                }
              >
                <span
                  aria-hidden="true"
                  className="block w-full"
                  style={{ aspectRatio: String(lockupAspect) }}
                  dangerouslySetInnerHTML={{ __html: lockupSvg }}
                />
              </Link>
            </div>

            <div className="flex items-center justify-end gap-7">
              <div className="hidden lg:block">
                <NavGroup items={navRight} align="end" pathname={pathname} label="Secondary" />
              </div>
              <Link
                href="/join"
                className="hidden whitespace-nowrap rounded-full bg-redink px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#b30000] lg:inline-flex"
              >
                Apply
              </Link>
              <MobileMenu pathname={pathname} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
