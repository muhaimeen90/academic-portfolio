import type { Metadata } from "next";
import "./globals.css";
import { lmroman } from "./fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/content/profile";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — Academic Homepage`,
    template: `%s — ${profile.name}`,
  },
  description: `Academic homepage of ${profile.name}, final-year B.S. Software Engineering student at the Institute of Information Technology, University of Dhaka. Research interests in human–computer interaction, educational technology, and software systems.`,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "profile",
    title: `${profile.name} — Academic Homepage`,
    description: `Research interests, publications, projects, and CV of ${profile.name}, University of Dhaka.`,
    url: SITE_URL,
    siteName: `${profile.name} — Academic Homepage`,
  },
};

/**
 * Applies the stored theme before first paint so a dark-mode reader never sees
 * a white flash.
 */
const noFlashTheme = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'dark' || (!t && matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lmroman.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashTheme }} />
      </head>
      <body className="font-serif">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
