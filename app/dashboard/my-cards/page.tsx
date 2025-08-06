"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export default function MyCardsPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleViewDetails = (accountId: string) => {
    // Navigate to the card details page with the account ID
    window.location.href = `/dashboard/my-cards/${accountId}`
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-16 w-16 animate-spin text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">Loading Your Accounts</h2>
          <p className="text-gray-500 mt-2">Please wait while we retrieve your information...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Savings Accounts</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Business Savings - 9043</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">$22,000,000</p>
            <Button
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => handleViewDetails("business")}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Personal Savings - 7822</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">$5,942,744</p>
            <Button
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => handleViewDetails("personal")}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <Link href="/dashboard">
          <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </main>
  )
}
