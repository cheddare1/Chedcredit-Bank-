"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import { PiggyBank, TrendingUp, ShieldCheck, Zap } from "lucide-react"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export default function BankingPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Savings Accounts That Work for You</h1>
              <p className="text-xl mb-8">
                Earn more with our high-yield savings options and reach your financial goals faster.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Open an Account
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Savings Accounts?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PiggyBank className="mr-2" />
                    High APY
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Earn a competitive Annual Percentage Yield on your savings.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2" />
                    No Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Enjoy fee-free savings with no monthly maintenance fees.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShieldCheck className="mr-2" />
                    FDIC Insured
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your deposits are insured up to $250,000 per account holder.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-2" />
                    Easy Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage your account easily with our mobile and online banking tools.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Account Types Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Savings Account Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>360 Performance Savings™</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>High-yield savings account</li>
                    <li>No minimum balance required</li>
                    <li>No fees to open or maintain</li>
                    <li>FDIC insured</li>
                  </ul>
                  <Button className="mt-4">Learn More</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Kids Savings Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Designed for savers under 18</li>
                    <li>No minimum balance required</li>
                    <li>No fees</li>
                    <li>Parental controls available</li>
                  </ul>
                  <Button className="mt-4">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
            <p className="text-xl mb-8">Open an account in minutes and start growing your savings today.</p>
            <Link href="/open-account">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Open a Savings Account
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
