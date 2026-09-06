const stats = [
  { value: "30", label: "Members max" },
  { value: "70", label: "Minutes, hard stop" },
  { value: "13", label: "Week growth cycle" },
  { value: "1", label: "Member per industry" },
];

export function StatCards() {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
      {stats.map((stat) => (
        <li
          key={stat.label}
          className="rounded-2xl border border-faint bg-wash px-6 py-8 sm:px-7 sm:py-10"
        >
          <p className="text-6xl font-extrabold leading-none tracking-tighter text-navy sm:text-7xl">
            {stat.value}
          </p>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-navy/60">
            {stat.label}
          </p>
        </li>
      ))}
    </ul>
  );
}
