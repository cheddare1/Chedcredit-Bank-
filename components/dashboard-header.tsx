"use client"

import Image from "next/image"
import Link from "next/link"
import CustomDropdown from "./custom-dropdown"
import NotificationDropdown from "./notification-dropdown"

export default function DashboardHeader() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="w-1/4">
            <NotificationDropdown />
          </div>
          <Link href="/dashboard" className="flex items-center justify-center w-1/2">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1502-o7tNDKqvlQTBOgwnakO9CD0CMkPLU6.png"
                alt="Ched Credit Union"
                fill
                className="object-contain brightness-0 invert"
                priority
                sizes="(max-width: 640px) 48px, 64px"
              />
            </div>
            <div className="ml-2 text-xl font-bold hidden sm:block">Ched Credit Union</div>
          </Link>
          <div className="w-1/4 flex justify-end">
            <CustomDropdown />
          </div>
        </div>
      </div>
    </header>
  )
}
