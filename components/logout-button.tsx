"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    // Clear all authentication data
    localStorage.removeItem("auth_token")
    localStorage.removeItem("2fa_verified")
    localStorage.removeItem("current_user_id")
    router.push("/")
  }

  return (
    <Button onClick={handleLogout} variant="outline" className="bg-white text-green-600 hover:bg-green-50">
      Logout
    </Button>
  )
}
