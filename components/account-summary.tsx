"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Building, User, CreditCard } from "lucide-react"

export function AccountSummary() {
  const [showBalance, setShowBalance] = useState(true)

  const accounts = [
    {
      name: "Business Savings",
      number: "****9043",
      balance: 22000000,
      type: "savings",
      icon: Building,
    },
    {
      name: "Personal Savings",
      number: "****7822",
      balance: 5942744,
      type: "savings",
      icon: User,
    },
  ]

  const formatBalance = (amount: number) => {
    return showBalance ? `$${amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}` : "••••••"
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {accounts.map((account, index) => (
        <Card key={index} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <account.icon className="h-4 w-4 mr-2 text-gray-600" />
              {account.name}
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setShowBalance(!showBalance)} className="h-8 w-8 p-0">
              {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{formatBalance(account.balance)}</div>
            <p className="text-xs text-gray-500 mt-1">Account {account.number}</p>
            <div className="mt-4">
              <Button size="sm" variant="outline" className="w-full bg-transparent">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Total Balance Card */}
      <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <CreditCard className="h-4 w-4 mr-2" />
            Total Balance
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowBalance(!showBalance)}
            className="h-8 w-8 p-0 text-white hover:bg-white/20"
          >
            {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatBalance(27942744)}</div>
          <p className="text-xs text-green-100 mt-1">Combined accounts</p>
        </CardContent>
      </Card>
    </div>
  )
}
