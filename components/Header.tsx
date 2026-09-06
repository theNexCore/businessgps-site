import Link from "next/link";
import { DesktopNav } from "./DesktopNav";
import { LockupLink } from "./Lockup";
import { MobileNav } from "./MobileNav";
import { Container } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-faint bg-white/95 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          <LockupLink size="sm" />
          <DesktopNav />
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/join"
              className="rounded-full bg-redink px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#b30000]"
            >
              Apply
            </Link>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
