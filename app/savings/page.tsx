"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"

export default function SavingsPage() {
  const [isPageLoading, setIsPageLoading] = useState(true)
  const totalSavings = 5942744
  const goal = 10000000
  const progress = (totalSavings / goal) * 100

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isPageLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
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
            <CardTitle>Retirement Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold">${totalSavings.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Savings</p>
              </div>
              <div>
                <p className="text-sm font-medium">Progress to Goal</p>
                <Progress value={progress} className="mt-2" />
                <p className="text-sm text-muted-foreground mt-1">
                  ${totalSavings.toLocaleString()} of ${goal.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
