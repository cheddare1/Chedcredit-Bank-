"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"

const exchangeRates = {
  USD: 11.5, // 1 USD to GHS
  EUR: 12.5, // 1 EUR to GHS
  GBP: 14.5, // 1 GBP to GHS
}

export default function CurrencyExchangePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [amount, setAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [result, setResult] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const handleExchange = (e: React.FormEvent) => {
    e.preventDefault()
    const exchangeRate = exchangeRates[fromCurrency as keyof typeof exchangeRates]
    const convertedAmount = Number.parseFloat(amount) * exchangeRate
    setResult(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} GHS`)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
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

        <Card>
          <CardHeader>
            <CardTitle>Currency Exchange</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleExchange} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fromCurrency">From Currency</Label>
                <select
                  id="fromCurrency"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Convert to GHS
              </Button>
            </form>
            {result && (
              <div className="mt-4 p-4 bg-green-100 rounded">
                <p className="text-green-800 font-semibold">{result}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
