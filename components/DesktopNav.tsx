"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./nav-links";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={pathname === link.href ? "page" : undefined}
          className={`text-sm font-semibold tracking-tight transition-colors hover:text-blue ${
            pathname === link.href ? "text-blue" : "text-navy"
          }`}
        >
          {link.label}
        </Link>
      ))}
      <Link
        href="/join"
        className="rounded-full bg-redink px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#b30000]"
      >
        Apply
      </Link>
    </nav>
  );
}
