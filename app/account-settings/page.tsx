"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"

export default function AccountSettingsPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-16 w-16 animate-spin text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">Loading Account Information</h2>
          <p className="text-gray-500 mt-2">Please wait while we retrieve your account details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/dashboard">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-gray-600">Account Number:</div>
                  <div className="font-semibold">031000503</div>

                  <div className="text-gray-600">Routing Number:</div>
                  <div className="font-semibold">121000248</div>

                  <div className="text-gray-600">Name:</div>
                  <div className="font-semibold">Michael Clayton Jnr</div>

                  <div className="text-gray-600">Date of Birth:</div>
                  <div className="font-semibold">15/8/1959</div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">This information is read-only and cannot be edited.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
