import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ched Credit Union",
  description: "Your trusted financial partner",
  generator: "v0.dev",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1502-6x4VEb4brO9Gf9GBfv5hRCp9zz3Wga.png",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1502-6x4VEb4brO9Gf9GBfv5hRCp9zz3Wga.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1502-6x4VEb4brO9Gf9GBfv5hRCp9zz3Wga.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1502-6x4VEb4brO9Gf9GBfv5hRCp9zz3Wga.png"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
