"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function LogoutPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setShowConfirmation(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleLogout = (saveCredentials: boolean) => {
    setIsLoading(true)
    setTimeout(() => {
      // Clear authentication state
      localStorage.removeItem("auth_token")
      localStorage.removeItem("2fa_verified")

      // If user chose to save credentials, you can implement that logic here
      if (saveCredentials) {
        // Save credentials logic
      }

      setIsLoading(false)
      router.push("/logout-confirmation")
    }, 2000)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Logout Confirmation</CardTitle>
        </CardHeader>
        <CardContent>
          {showConfirmation ? (
            <div className="space-y-4">
              <p>Would you like to save your credentials?</p>
              <div className="flex justify-between">
                <Button onClick={() => handleLogout(true)}>Yes</Button>
                <Button onClick={() => handleLogout(false)} variant="outline">
                  No
                </Button>
              </div>
            </div>
          ) : (
            <p>Preparing to log you out...</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
