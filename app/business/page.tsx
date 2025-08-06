import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import { CreditCard, Building } from "lucide-react"

export default function BusinessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold mb-4">Simplify your business finances</h1>
              <p className="text-xl mb-8">Get the products and services you need to do business all in one place.</p>
              <Link href="/open-account">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">SOLUTIONS FOR YOUR BUSINESS</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2" />
                    All business cards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Earn unlimited rewards with every card. Plus, enjoy the added perks and tools you need to get
                    business done.
                  </p>
                  <Link href="/business/cards" className="text-blue-600 hover:underline">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="mr-2" />
                    Business banking overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Explore tailored checking, savings, lending options and other services for any stage of business.
                  </p>
                  <Link href="/business/banking" className="text-blue-600 hover:underline">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Find a Business Card Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">FIND A BUSINESS CARD</h2>
            {/* Add card comparison tool or featured cards here */}
          </div>
        </section>
      </main>
    </div>
  )
}
