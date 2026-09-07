/**
 * Member voices for the home page.
 *
 * `live: false` renders the placeholder treatment instead of the quote, so a
 * card can ship before its quote comes back. To publish one: paste the quote
 * and flip `live` to true.
 */

export type Quote = {
  name: string;
  business: string;
  quote: string;
  live: boolean;
};

export const quotes: Quote[] = [
  {
    name: "Lewis Marty",
    business: "Simploy",
    quote: "",
    live: false,
  },
  {
    name: "Bernadette Corbeil",
    business: "Artemis Construction",
    quote: "",
    live: false,
  },
  {
    name: "Will Schatz",
    business: "Professional golfer and instructor",
    quote:
      "I was part of the original BusinessGPS. I really valued the connections and the workshops with the other members — collaborating with different kinds of businesses and realising we all faced similar challenges.",
    live: true,
  },

  // ---- Reserves. Uncomment to bring into rotation. ----
  // {
  //   name: "Taylor Miller",
  //   business: "TBD",
  //   quote: "",
  //   live: false,
  // },
  // {
  //   name: "TBD",
  //   business: "TBD",
  //   quote: "",
  //   live: false,
  // },
];
