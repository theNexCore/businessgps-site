import { Button, NavyPanel, SectionHeading } from "./ui";

type CTAPanelProps = {
  heading: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  note?: string;
};

export function CTAPanel({ heading, body, primary, secondary, note }: CTAPanelProps) {
  return (
    <NavyPanel className="px-6 py-14 text-center sm:px-12 sm:py-20">
      <SectionHeading tone="light" className="mx-auto max-w-2xl">
        {heading}
      </SectionHeading>
      <p className="prose-body mx-auto mt-5 max-w-2xl text-white/75">{body}</p>
      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <Button href={primary.href} variant="red">
          {primary.label}
        </Button>
        {secondary ? (
          <Button href={secondary.href} variant="ghost">
            {secondary.label}
          </Button>
        ) : null}
      </div>
      {note ? <p className="mt-6 text-sm font-semibold text-white/60">{note}</p> : null}
    </NavyPanel>
  );
}
