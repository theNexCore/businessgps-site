/**
 * The shape of a chapter: eight figures, four across, two rows.
 * Order is fixed by the brief — cadence first, then the room, then the year.
 */
const stats = [
  { value: "Once", label: "a week" },
  { value: "70", label: "minutes, hard stop" },
  { value: "30", label: "members max" },
  { value: "1", label: "member per industry" },
  { value: "13", label: "-week growth cycle", tight: true },
  { value: "8", label: "leadership seats" },
  { value: "1", label: "community impacted" },
  { value: "A room", label: "transformed" },
];

export function StatCards() {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
      {stats.map((stat) => (
        <li
          key={stat.value + stat.label}
          className="rounded-2xl border border-faint bg-wash px-6 py-8 sm:px-7 sm:py-9"
        >
          <p className="text-4xl font-extrabold leading-none tracking-tighter text-navy sm:text-6xl">
            {stat.value}
            {stat.tight ? (
              <span className="text-2xl tracking-tight sm:text-3xl">{stat.label}</span>
            ) : null}
          </p>
          {stat.tight ? null : (
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-navy/60">
              {stat.label}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
