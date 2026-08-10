import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.shortName} — ${site.role}`,
  description: site.description,
  openGraph: {
    title: `${site.shortName} — ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.shortName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${site.shortName} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

// Runs before paint so the correct theme is applied without a flash.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
