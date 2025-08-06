"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/dashboard-header"
import DashboardLoading from "./loading"
import type React from "react" // Added import for React
import { getCurrentUser } from "@/utils/userAccounts"
import { storage } from "@/utils/storage"

const AUTO_LOGOUT_TIME = 30 * 60 * 1000 // 30 minutes in milliseconds

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const token = storage.get("auth_token")
      const twoFAVerified = storage.get("2fa_verified")
      const currentUser = getCurrentUser()

      if (!token || !twoFAVerified || !currentUser) {
        // Clear any potentially invalid auth data
        storage.remove("auth_token")
        storage.remove("2fa_verified")
        storage.remove("current_user_id")
        router.push("/login")
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsLoading(false)
      }
    }

    checkAuth()

    // Set up auto-logout timer
    const logoutTimer = setTimeout(() => {
      storage.remove("auth_token")
      storage.remove("2fa_verified")
      storage.remove("current_user_id")
      router.push("/login")
    }, AUTO_LOGOUT_TIME)

    // Clear the timer when the component unmounts
    return () => clearTimeout(logoutTimer)
  }, [router])

  if (isLoading) {
    return <DashboardLoading />
  }

  return (
    <>
      <DashboardHeader />
      {children}
    </>
  )
}
