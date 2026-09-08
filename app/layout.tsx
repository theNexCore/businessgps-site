import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
      </body>
    </html>
  );
}
