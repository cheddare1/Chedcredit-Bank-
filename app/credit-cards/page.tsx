"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import { CreditCard, Gift, Plane, Loader2 } from "lucide-react"
import Link from "next/link"

export default function CreditCardsPage() {
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
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Find Your Perfect Credit Card</h1>
              <p className="text-xl mb-8">
                Explore our range of credit cards and find the one that fits your lifestyle.
              </p>
              <Link href="/open-account">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Compare Cards
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Card Types Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Credit Card Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2" />
                    Cash Back Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Earn cash back on every purchase you make.</p>
                  <Button className="mt-4" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plane className="mr-2" />
                    Travel Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Earn miles and travel perks with every swipe.</p>
                  <Button className="mt-4" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gift className="mr-2" />
                    Low Interest
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Enjoy low interest rates and balance transfers.</p>
                  <Button className="mt-4" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl mb-8">Find out if you're pre-approved with no impact to your credit score.</p>
            <Link href="/open-account">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Get Pre-Approved
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
