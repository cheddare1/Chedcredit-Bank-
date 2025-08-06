"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Leaf, Building, ArrowRight } from "lucide-react"
import Link from "next/link"

export function RecentTransactions() {
  const transactions = [
    {
      id: "1",
      description: "Farm Debt Payment - First Installment",
      amount: -26000,
      date: "2025-02-01",
      type: "payment",
      icon: Leaf,
      status: "completed",
    },
    {
      id: "2",
      description: "Personal Home Payment",
      amount: -2000,
      date: "2025-01-15",
      type: "payment",
      icon: Home,
      status: "completed",
    },
    {
      id: "3",
      description: "Check Deposit",
      amount: 7000,
      date: "2024-08-15",
      type: "deposit",
      icon: Building,
      status: "completed",
    },
    {
      id: "4",
      description: "Personal Home Payment",
      amount: -2000,
      date: "2024-09-15",
      type: "payment",
      icon: Home,
      status: "completed",
    },
    {
      id: "5",
      description: "Personal Home Payment",
      amount: -2000,
      date: "2024-05-15",
      type: "payment",
      icon: Home,
      status: "completed",
    },
  ]

  const formatAmount = (amount: number) => {
    const formatted = Math.abs(amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
    return amount < 0 ? `-${formatted}` : `+${formatted}`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <Link href="/transactions">
          <Button variant="ghost" size="sm">
            View All
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-full ${
                    transaction.amount > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  <transaction.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{formatDate(transaction.date)}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                  {formatAmount(transaction.amount)}
                </p>
                <p className="text-xs text-gray-500 capitalize">{transaction.status}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
