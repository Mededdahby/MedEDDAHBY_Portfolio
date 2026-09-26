import type { Metadata } from "next";
import type React from "react";
import {
  Bricolage_Grotesque,
  Cinzel_Decorative,
  Fraunces,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roman",
});

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
      <body
        className={`${bricolage.variable} ${fraunces.variable} ${cinzelDecorative.variable} min-h-screen antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
           <Analytics />
           <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
