"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { transactions } from "@/utils/transactions"
import { thomasTransactions } from "@/utils/thomasTransactions"
import { Input } from "@/components/ui/input"
import { Search, ArrowLeft } from "lucide-react"
import { getCurrentUser } from "@/utils/userAccounts"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [userTransactions, setUserTransactions] = useState(transactions)

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser && currentUser.name === "Thomas") {
      setUserTransactions(thomasTransactions)
    } else {
      setUserTransactions(transactions)
    }
  }, [])

  const filteredTransactions = userTransactions.filter(
    (transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.transactionNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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

        <Card>
          <CardHeader className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Transaction History</CardTitle>
              <p className="text-lg font-semibold mt-2">Available Balance: $22,000,000</p>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Transaction Number</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.time}</TableCell>
                      <TableCell>{transaction.transactionNumber}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell
                        className={`text-right ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}
                      >
                        {transaction.type === "credit" ? "+" : "-"}${transaction.amount.toLocaleString()}
                      </TableCell>
                      <TableCell className={transaction.status === "pending" ? "text-yellow-600" : "text-green-600"}>
                        {transaction.status}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
