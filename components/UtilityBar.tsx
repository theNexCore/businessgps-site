import { SocialIcons } from "./SocialIcons";
import { contact } from "./nav-links";
import { Container } from "./ui";

/** Slim navy bar above the main header: how to reach and find BusinessGPS. */
export function UtilityBar() {
  return (
    <div className="on-navy bg-navy text-white">
      <Container>
        <div className="flex h-10 items-center justify-between gap-6 text-xs">
          <div className="flex items-center gap-6">
            <a
              href={contact.phoneHref}
              className="flex items-center gap-2 font-semibold tracking-tight text-white/85 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true" fill="currentColor">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z" />
              </svg>
              <span>{contact.phone}</span>
            </a>
            <a
              href={contact.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-white/75 transition-colors hover:text-white md:flex"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden="true" fill="currentColor">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
              <span>{contact.address}</span>
            </a>
          </div>
          <SocialIcons iconClassName="h-3.5 w-3.5" />
        </div>
      </Container>
    </div>
  );
}
