/**
 * Member voices, in carousel order: real quotes lead, placeholders follow.
 *
 * `live: false` renders the placeholder treatment instead of a quote, so a
 * card can ship before its words come back. To publish one: paste the quote,
 * flip `live` to true, and move it up above the remaining placeholders.
 *
 * The carousel reads straight off this array — adding a sixth voice is one
 * object and nothing else.
 */

export type Quote = {
  name: string;
  /** Business or title — the line under the name. */
  business: string;
  /** A newline starts a new paragraph, so a member's own breaks survive. */
  quote: string;
  live: boolean;
};

export const quotes: Quote[] = [
  {
    name: "Taylor Miller",
    business: "Chief Impact Officer, The South County Chamber",
    quote:
      "BusinessGPS was so much more than an educational program. It was an experience that helped me grow both personally and professionally. It made learning fun, gave me an opportunity to build genuine connections, and introduced me to people who became lifelong friends. The knowledge was valuable, but the relationships and sense of community are what made BusinessGPS truly unforgettable.",
    live: true,
  },
  {
    name: "Will Schatz",
    business: "Professional golfer and instructor",
    quote:
      "I was part of the original BusinessGPS. I really valued the connections and the workshops with the other members — collaborating with different kinds of businesses and realising we all faced similar challenges.",
    live: true,
  },
  {
    name: "Molly Call",
    business: "Mortgage Professional",
    quote:
      "BusinessGPS is a place for connections, collaborations. A coalition of common purpose, a sense of family where everyone wants to see you succeed and be your best self.",
    live: true,
  },
  {
    name: "Lewis Marty",
    business: "Simploy",
    quote:
      "BusinessGPS is an incredible networking group with a diverse array of members hailing from every corner of industry.\n" +
      "If you are passionate about improving yourself as a business leader, or, if networking is important to your business, you need to visit BusinessGPS.",
    live: true,
  },
  {
    name: "Feliz Tovar",
    business: "Financial Advisor",
    quote:
      "The meetings have been well organized to not only meet people but to grow people. What I mean by that is we weekly meet and go through excercises that enhance our lives personally and professionally. Helping us be more self aware of our strengths and weakness. Truly the best networking group that I have participated in.",
    live: true,
  },
  {
    name: "Bernadette Corbeil",
    business: "Artemis Construction",
    quote: "",
    live: false,
  },
];
