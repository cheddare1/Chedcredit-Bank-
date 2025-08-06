"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import Link from "next/link"

interface CheckingAccount {
  id: string
  name: string
  accountNumber: string
  balance: number
}

export default function CheckingAccountsPage() {
  const [accounts, setAccounts] = useState<CheckingAccount[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulating API call to fetch checking accounts
    const fetchAccounts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setAccounts([
        { id: "1", name: "Business Checking", accountNumber: "9012", balance: 5942744 },
        { id: "2", name: "Personal Checking", accountNumber: "7822", balance: 5942744 },
      ])
      setIsLoading(false)
    }

    fetchAccounts()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checking Accounts</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {accounts.map((account) => (
          <Card key={account.id}>
            <CardHeader>
              <CardTitle>
                {account.name} - {account.accountNumber}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">${account.balance.toLocaleString()}</p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">View Details</Button>
            </CardContent>
          </Card>
        ))}
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
