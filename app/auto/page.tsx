import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import { Car, DollarSign, Percent } from "lucide-react"
import Link from "next/link"

export default function AutoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Auto Financing Made Easy</h1>
              <p className="text-xl mb-8">Get pre-qualified for auto financing without impacting your credit score.</p>
              <Link href="/open-account">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Pre-Qualified
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Auto Financing?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Car className="mr-2" />
                    Easy Application
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Apply online in minutes and get a decision quickly.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="mr-2" />
                    Competitive Rates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Enjoy low interest rates and flexible terms.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Percent className="mr-2" />
                    No Impact on Credit Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Get pre-qualified without affecting your credit score.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Finance Your Dream Car?</h2>
            <p className="text-xl mb-8">Start your journey to car ownership today.</p>
            <Link href="/open-account">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Apply Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
