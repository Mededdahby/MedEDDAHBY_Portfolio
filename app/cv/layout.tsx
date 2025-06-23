import type React from "react"
import "../globals.css"
import "./cv-print.css"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mohamed Eddahby - CV",
  description: "Curriculum Vitae of Mohamed Eddahby, Web Developer",
}

export default function CVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
