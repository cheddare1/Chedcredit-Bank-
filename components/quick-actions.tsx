"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, CreditCard, PiggyBank, FileText, DollarSign, Building, TrendingUp, Phone } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  const actions = [
    {
      title: "Transfer Money",
      description: "Send money to accounts",
      icon: Send,
      href: "/transfer",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "My Cards",
      description: "Manage your cards",
      icon: CreditCard,
      href: "/dashboard/my-cards",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "Savings",
      description: "View savings accounts",
      icon: PiggyBank,
      href: "/savings",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      title: "Transactions",
      description: "View transaction history",
      icon: FileText,
      href: "/transactions",
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      title: "Pay Bills",
      description: "Pay your bills online",
      icon: DollarSign,
      href: "/pay-bills",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      title: "Business",
      description: "Business banking services",
      icon: Building,
      href: "/business",
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      title: "Investments",
      description: "View investment portfolio",
      icon: TrendingUp,
      href: "/investments",
      color: "bg-teal-500 hover:bg-teal-600",
    },
    {
      title: "Support",
      description: "Get help and support",
      icon: Phone,
      href: "/support",
      color: "bg-gray-500 hover:bg-gray-600",
    },
  ]

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {actions.map((action, index) => (
            <Link key={index} href={action.href}>
              <Button
                variant="ghost"
                className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-gray-50 transition-colors"
              >
                <div className={`p-3 rounded-full text-white ${action.color} transition-colors`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">{action.title}</p>
                  <p className="text-xs text-gray-500">{action.description}</p>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
