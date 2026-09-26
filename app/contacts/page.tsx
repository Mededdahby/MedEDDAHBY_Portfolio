import type { Metadata } from "next";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mohamed Eddahby about full-stack product development, web applications, and software collaboration.",
  alternates: { canonical: "/contacts" },
  openGraph: {
    title: "Contact Mohamed Eddahby",
    description: "Start a conversation about a full-stack product, web application, or software collaboration.",
    url: "/contacts",
  },
};

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-4 pb-20 pt-24 dark:bg-[#0C1014] md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <Contact />
      </div>
    </main>
  );
}
