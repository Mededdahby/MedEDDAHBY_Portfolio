import type { Metadata } from "next";
import type React from "react";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import DelayedObservability from "@/components/delayed-observability";

const themeScript = `(()=>{try{const saved=localStorage.getItem('portfolio-theme-preference');const dark=saved?saved==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',dark);document.documentElement.style.colorScheme=dark?'dark':'light'}catch{}})();`;

export const metadata: Metadata = {
  title: {
    default: "Mohamed Eddahby | Full-Stack Developer",
    template: "%s | Mohamed Eddahby",
  },
  description:
    "Portfolio of Mohamed Eddahby featuring full-stack products, interface work, and practical software projects.",
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
    description:
      "Full-stack products, interface work, and practical software projects.",
    siteName: "Mohamed Eddahby Portfolio",
    locale: "en_US",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Eddahby | Full-Stack Developer",
    description: "Full-stack products, interface work, and practical software projects.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <Navbar />
        {children}
        <DelayedObservability />
        <Footer />
      </body>
    </html>
  );
}
