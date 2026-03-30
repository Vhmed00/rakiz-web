import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rakiz — Digital Growth for SMEs | ركيز للنمو الرقمي",
  description:
    "Rakiz turns business chaos into digital systems. Automation, dashboards, SEO, and measurable growth for SMEs in Oman.",
  keywords: ["digital agency", "SME", "Oman", "automation", "SEO", "dashboard", "ركيز"],
  openGraph: {
    title: "Rakiz — Digital Growth for SMEs",
    description: "Your technical partner for automation, bespoke dashboards, and measurable growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
          Inter              — primary sans-serif
          IBM Plex Mono      — monospace / code blocks
          IBM Plex Sans Arabic — Arabic language mode
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@300;400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
