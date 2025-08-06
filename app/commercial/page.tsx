"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import { Building, DollarSign, BarChart, Globe } from "lucide-react"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export default function CommercialPage() {
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
              <h1 className="text-4xl font-bold mb-4">Commercial Banking Solutions</h1>
              <p className="text-xl mb-8">
                Empowering businesses with innovative financial solutions and expert guidance.
              </p>
              <Link href="/open-account">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Contact a Relationship Manager
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Commercial Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="mr-2" />
                    Commercial Banking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Comprehensive banking solutions tailored for businesses of all sizes.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="mr-2" />
                    Commercial Lending
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Flexible financing options to support your business growth and operations.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="mr-2" />
                    Treasury Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Optimize your cash flow with our advanced treasury solutions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2" />
                    Global Banking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>International banking services to support your global business needs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Healthcare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Specialized solutions for hospitals, clinics, and healthcare providers.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Supporting innovation with tailored financial services for tech companies.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Manufacturing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Comprehensive banking solutions for manufacturing and industrial sectors.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Your Business to the Next Level?</h2>
            <p className="text-xl mb-8">Our team of experts is here to help you achieve your business goals.</p>
            <Link href="/open-account">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
