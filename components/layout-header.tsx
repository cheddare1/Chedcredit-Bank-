"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import NotificationDropdown from "./notification-dropdown"

const navItems = [
  { title: "Credit Cards", href: "/credit-cards" },
  { title: "Banking", href: "/banking" },
  { title: "Auto", href: "/auto" },
  { title: "Business", href: "/business" },
  { title: "Commercial", href: "/commercial" },
]

export default function LayoutHeader() {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [activeButton, setActiveButton] = useState("")

  useEffect(() => {
    setActiveButton(pathname)
  }, [pathname])

  const handleNavigation = (href: string) => {
    setIsLoading(true)
    setActiveButton(href)
    setTimeout(() => {
      setIsLoading(false)
      router.push(href)
    }, 1500)
  }

  return (
    <header className="bg-white shadow-md relative">
      <div className="absolute top-2 left-4">
        <NotificationDropdown />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1502-NRzqzQg2ulOZcVFq1GEb6oeVkhBGZK.png"
                alt="Ched Credit Union"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 48px, 56px"
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={activeButton === item.href ? "default" : "ghost"}
                className={`${
                  activeButton === item.href ? "bg-blue-600 text-white" : "text-blue-600"
                } hover:bg-blue-100 hover:text-blue-800`}
                onClick={() => handleNavigation(item.href)}
                disabled={isLoading}
              >
                {item.title}
              </Button>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => handleNavigation("/login")} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => handleNavigation("/open-account")}
              disabled={isLoading}
            >
              Open Account
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
