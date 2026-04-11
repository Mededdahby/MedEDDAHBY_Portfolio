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
  title: "Mohamed Eddahby | Full-Stack Developer",
  description:
    "Portfolio of Mohamed Eddahby featuring full-stack products, interface work, and practical software projects.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolage.variable} ${fraunces.variable} ${cinzelDecorative.variable} min-h-screen antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
