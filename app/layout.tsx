import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ourbizgps.com"),
  title: {
    // Keep this in step with the home page h1 — it is what a shared link shows.
    default: "BusinessGPS — Come here to grow. On purpose.",
    template: "%s — BusinessGPS",
  },
  description:
    "BusinessGPS is a weekly growth community. We build people. People build relationships. Relationships build business.",
  applicationName: "BusinessGPS",
  keywords: [
    "BusinessGPS",
    "St. Louis",
    "business growth community",
    "The Focus10",
    "weekly meeting",
  ],
  authors: [{ name: "BusinessGPS" }],
  openGraph: {
    type: "website",
    siteName: "BusinessGPS",
    locale: "en_US",
    url: "https://ourbizgps.com",
    title: "BusinessGPS — Come here to grow. On purpose.",
    description:
      "A weekly growth community. We build people. People build relationships. Relationships build business.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Ourbizgps",
    creator: "@Ourbizgps",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable}>
      <body className="flex min-h-screen flex-col bg-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <Script id="sender-universal" strategy="afterInteractive">
          {`(function (s, e, n, d, er) {
            s['Sender'] = er;
            s[er] = s[er] || function () {
              (s[er].q = s[er].q || []).push(arguments)
            }, s[er].l = 1 * new Date();
            s[er].on = function(event, callback) {
              s[er].listeners = s[er].listeners || {};
              (s[er].listeners[event] = s[er].listeners[event] || []).push(callback);
            };
            var a = e.createElement(n),
                m = e.getElementsByTagName(n)[0];
            a.async = 1;
            a.src = d;
            m.parentNode.insertBefore(a, m)
          })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
          sender('70e34c7ed37497')`}
        </Script>
      </body>
    </html>
  );
}
