import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  /** "narrow" is the reading width used by /join and /thanks. */
  width?: "default" | "narrow";
}) {
  const max = width === "narrow" ? "max-w-3xl" : "max-w-6xl";
  return <div className={`mx-auto w-full ${max} px-5 sm:px-8 ${className}`}>{children}</div>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  /** red = primary action. ghost = secondary on navy. outline = secondary on light. */
  variant?: "red" | "ghost" | "outline";
  external?: boolean;
  className?: string;
};

const buttonBase =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-bold tracking-tight transition-colors";

const buttonVariants = {
  red: "bg-redink text-white hover:bg-[#b30000]",
  ghost: "border-2 border-white/40 text-white hover:border-white hover:bg-white/10",
  outline: "border-2 border-navy/25 text-navy hover:border-navy hover:bg-navy/5",
} as const;

export function Button({ href, children, variant = "red", external = false, className = "" }: ButtonProps) {
  const classes = `${buttonBase} ${buttonVariants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/**
 * The four-colour accent strip: blue / teal / red / navy.
 *
 * On a navy surface the fourth band would disappear, so `tone="light"` lifts it
 * to a paler navy and keeps the strip reading as four bands.
 */
export function AccentStrip({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className={`flex h-1.5 w-full overflow-hidden rounded-full ${className}`} aria-hidden="true">
      <span className="flex-1 bg-blue" />
      <span className="flex-1 bg-teal" />
      <span className="flex-1 bg-red" />
      <span className={`flex-1 ${tone === "light" ? "bg-[#4d7ac0]" : "bg-navy"}`} />
    </div>
  );
}

/** Small uppercase eyebrow above a section heading. */
export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] ${
        tone === "light" ? "text-teal" : "text-blue"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  tone = "dark",
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={`text-balance text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl ${
        tone === "light" ? "text-white" : "text-navy"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Rounded navy panel — the core surface of the design language. */
export function NavyPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`on-navy relative overflow-hidden rounded-panel bg-navy bg-[radial-gradient(120%_120%_at_15%_0%,#052a6e_0%,#001749_58%)] ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Vertical rhythm for a page section.
 *
 * `top`/`bottom` props rather than a `pt-0` override in className: a responsive
 * `sm:py-24` lives later in the stylesheet than a base `pt-0`, so the override
 * silently loses above the sm breakpoint.
 */
export function Section({
  children,
  className = "",
  id,
  top = true,
  bottom = true,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  top?: boolean;
  bottom?: boolean;
}) {
  const paddingTop = top ? "pt-16 sm:pt-24" : "pt-0";
  const paddingBottom = bottom ? "pb-16 sm:pb-24" : "pb-0";
  return (
    <section id={id} className={`${paddingTop} ${paddingBottom} ${className}`}>
      {children}
    </section>
  );
}

/**
 * A full-bleed section: the background colour runs edge to edge and the
 * content sits in the standard container. This replaces v1's floating rounded
 * colour boxes for major sections.
 */
export function Band({
  children,
  tone = "white",
  className = "",
  id,
  top = true,
  bottom = true,
  width = "default",
}: {
  children: ReactNode;
  tone?: "white" | "wash" | "navy";
  className?: string;
  id?: string;
  top?: boolean;
  bottom?: boolean;
  width?: "default" | "narrow";
}) {
  const tones = {
    white: "bg-white",
    wash: "bg-wash",
    navy: "on-navy bg-navy text-white",
  } as const;

  const paddingTop = top ? "pt-16 sm:pt-24" : "pt-0";
  const paddingBottom = bottom ? "pb-16 sm:pb-24" : "pb-0";

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${tones[tone]} ${paddingTop} ${paddingBottom} ${className}`}
    >
      <Container width={width} className="relative z-10">
        {children}
      </Container>
    </section>
  );
}
