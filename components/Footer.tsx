import { LockupLink } from "./Lockup";
import { AccentStrip, Container } from "./ui";

const socials = [
  { label: "YouTube", href: "https://youtube.com/@ourbizgps" },
  { label: "X", href: "https://x.com/ourbizgps" },
  { label: "LinkedIn", href: "https://linkedin.com/company/ourbizgps" },
  { label: "Facebook", href: "https://facebook.com/ourbizgps" },
  { label: "Instagram", href: "https://instagram.com/ourbizgps" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-navy bg-navy text-white">
      <AccentStrip tone="light" className="rounded-none" />
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <LockupLink tone="light" size="lg" />
            <p className="mt-5 text-sm font-semibold text-white/80">BusinessGPS, a NexCore company</p>
            <p className="text-sm text-white/65">Powered by NexCore</p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-14">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-teal">Follow</h2>
              <p className="mt-3 text-sm font-bold text-white">@Ourbizgps</p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-teal">Contact</h2>
              <ul className="mt-3 space-y-2">
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
