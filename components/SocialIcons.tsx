import { socials } from "./nav-links";

/** Brand glyphs for the five @Ourbizgps accounts. */
const paths: Record<string, string> = {
  YouTube:
    "M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.8C19.3 5 12 5 12 5s-7.3 0-8.9.5a2.5 2.5 0 0 0-1.7 1.8C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.7 1.8C4.7 19 12 19 12 19s7.3 0 8.9-.5a2.5 2.5 0 0 0 1.7-1.8C23 15.2 23 12 23 12ZM9.8 15.1V8.9l6 3.1-6 3.1Z",
  X: "M17.5 3h3.2l-7 8 8.3 10h-6.5l-5-6.1-5.8 6.1H1.5l7.5-8.6L1.5 3H8l4.6 5.6L17.5 3Zm-1.1 16h1.8L7.7 4.9H5.7l10.7 14.1Z",
  LinkedIn:
    "M6.9 20.5H3.3V9h3.6v11.5ZM5.1 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm15.6 13.1h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.5V9H13v1.6h.1a3.8 3.8 0 0 1 3.4-1.9c3.7 0 4.3 2.4 4.3 5.5v6.3Z",
  Facebook:
    "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z",
  Instagram:
    "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9a3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.8-.1Zm0 3.8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 9.9a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8Zm7.6-10.1a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z",
};

export function SocialIcons({
  className = "",
  iconClassName = "h-4 w-4",
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <ul className={`flex items-center gap-3.5 ${className}`}>
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`BusinessGPS on ${social.label}`}
            className="block text-current opacity-75 transition-opacity hover:opacity-100"
          >
            <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true" fill="currentColor">
              <path d={paths[social.label]} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
