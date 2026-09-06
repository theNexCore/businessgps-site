import { NavyPanel, SectionHeading } from "./ui";

const items = [
  {
    title: "Not a referral quota group.",
    body: "Referrals are tracked, never demanded. No scorecards ranking you.",
  },
  { title: "Not a classroom.", body: "No instructor at the front, no audience." },
  { title: "Not a mixer.", body: "Handing cards to strangers isn't the point." },
  { title: "Not a contract.", body: "Month to month. Nothing to sign away." },
];

function RedX() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="#FF0000" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

export function IsntBox() {
  return (
    <NavyPanel className="px-6 py-12 sm:px-12 sm:py-16">
      <SectionHeading tone="light">What this isn&rsquo;t.</SectionHeading>
      <ul className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-x-12">
        {items.map((item) => (
          <li key={item.title} className="flex gap-4">
            <RedX />
            <div>
              <p className="text-lg font-bold tracking-tight text-white">{item.title}</p>
              <p className="mt-1 text-white/70">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </NavyPanel>
  );
}
