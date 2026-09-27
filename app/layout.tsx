import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type React from "react";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import DelayedObservability from "@/components/delayed-observability";

const themeScript = `(()=>{try{const saved=localStorage.getItem('portfolio-theme-preference');const dark=saved?saved==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',dark);document.documentElement.style.colorScheme=dark?'dark':'light'}catch{}})();`;
const socialDescription =
  "Mohamed Eddahby builds full-stack web apps and digital products with React, Next.js, and TypeScript. Explore projects.";

export const metadata: Metadata = {
  title: {
    default: "Mohamed Eddahby | Full-Stack Developer",
    template: "%s | Mohamed Eddahby",
  },
  description:
    "Mohamed Eddahby builds thoughtful web applications and practical digital products as a full-stack developer specializing in React, Next.js, and TypeScript.",
  metadataBase: new URL("https://eddahby.tech"),
  applicationName: "Mohamed Eddahby Portfolio",
  authors: [{ name: "Mohamed Eddahby", url: "https://eddahby.tech" }],
  creator: "Mohamed Eddahby",
  publisher: "Mohamed Eddahby",
  category: "technology",
  keywords: [
    "Mohamed Eddahby",
    "full-stack developer Morocco",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "web application development",
    "software portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mohamed Eddahby | Full-Stack Developer",
    description: socialDescription,
    siteName: "Mohamed Eddahby Portfolio",
    locale: "en_US",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Eddahby | Full-Stack Developer",
    description: socialDescription,
    site: "@MohamedEddahby",
  },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  colorScheme: "light dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://eddahby.tech/#website",
      name: "Mohamed Eddahby Portfolio",
      url: "https://eddahby.tech",
      description:
        "Mohamed Eddahby builds thoughtful web applications and practical digital products as a full-stack developer specializing in React, Next.js, and TypeScript.",
      publisher: { "@id": "https://eddahby.tech/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://eddahby.tech/#person",
      name: "Mohamed Eddahby",
      url: "https://eddahby.tech",
      jobTitle: "Full-Stack Developer",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Script
          id="theme-preference"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <Navbar />
        {children}
        <DelayedObservability />
        <Footer />
      </body>
    </html>
  );
}
