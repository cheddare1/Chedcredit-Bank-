"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Bell, TrendingUp, Loader2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getCurrentUser } from "@/utils/userAccounts"
import { AccountSummary } from "@/components/account-summary"
import { RecentTransactions } from "@/components/recent-transactions"
import { QuickActions } from "@/components/quick-actions"

export default function DashboardPage() {
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const user = getCurrentUser()
      setCurrentUser(user)
      setIsPageLoading(false)
    }

    loadData()
  }, [])

  if (isPageLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {currentUser?.name || "Michael"}!</h1>
          <p className="text-gray-600">Here's what's happening with your accounts today.</p>
        </div>

        {/* Account Summary */}
        <AccountSummary />

        {/* Quick Actions */}
        <QuickActions />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <RecentTransactions />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Upcoming Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Farm Insurance</p>
                      <p className="text-sm text-gray-500">Due in 5 days</p>
                    </div>
                  </div>
                  <div className="font-semibold">$850.50</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Personal Home Payment</p>
                      <p className="text-sm text-gray-500">Due May 15</p>
                    </div>
                  </div>
                  <div className="font-semibold">$2,000.00</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="font-medium">Farm Debt Payment</p>
                      <p className="text-sm text-gray-500">Due Aug 1</p>
                    </div>
                  </div>
                  <div className="font-semibold">$24,000.00</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Account Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Monthly Growth</span>
                  <span className="font-semibold text-green-600">+3.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Investments</span>
                  <span className="font-semibold">$5,942,744</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Active Cards</span>
                  <span className="font-semibold">2</span>
                </div>
                <Link href="/investments">
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    View Investment Portfolio
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-orange-600" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">Payment Processed</p>
                  <p className="text-xs text-blue-600">Farm debt payment of $26,000 completed</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800">Account Update</p>
                  <p className="text-xs text-green-600">Monthly statement is now available</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg">
                  <p className="text-sm font-medium text-amber-800">Reminder</p>
                  <p className="text-xs text-amber-600">Farm insurance payment due soon</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
