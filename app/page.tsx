"use client"

import { useState } from "react"
import Image from "next/image"
import { Sparkles, PiggyBank, Car, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Link from "next/link"
import { useLoadingTransition } from "@/components/loading-transition"
import LoadingOverlay from "@/components/loading-overlay"

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { handleTransition } = useLoadingTransition()

  const handleNavigation = async (path: string) => {
    setIsLoading(true)
    await handleTransition(path)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section with centered logo */}
        <section className="bg-blue-600 text-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Welcome to Ched Credit Union</h1>

              <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1501-LIp0lqxVWTA3fJEs8UmUKsbHH66y9A.png"
                  alt="Ched Credit Union Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
                />
              </div>

              <Link href="/account-options">
                <Button variant="default" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Built-in benefits section */}
        <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-center mb-12 flex items-center justify-center gap-2 text-xl font-semibold">
            <Sparkles className="h-6 w-6" />
            Built-in benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-none">
              <CardContent className="space-y-4">
                <div className="w-32 h-20 relative mx-auto">
                  <CreditCard className="w-20 h-20 mx-auto text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-center">Explore card offers</h3>
                <p className="text-center text-gray-600">
                  See if you're eligible for credit card offers with our pre-approval tool.
                </p>
                <div className="text-center">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => handleNavigation("/credit-cards")}
                  >
                    See if you're pre-approved →
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none">
              <CardContent className="space-y-4">
                <div className="w-32 h-20 relative mx-auto">
                  <PiggyBank className="w-20 h-20 mx-auto text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-center">Bank with confidence</h3>
                <p className="text-center text-gray-600">
                  Enjoy no fees or minimums for checking and savings accounts.
                </p>
                <div className="text-center">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => handleNavigation("/banking")}
                  >
                    Explore banking →
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none">
              <CardContent className="space-y-4">
                <div className="w-32 h-20 relative mx-auto">
                  <Car className="w-20 h-20 mx-auto text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-center">Find a car you love</h3>
                <p className="text-center text-gray-600">
                  Shop cars and pre-qualify for financing with Auto Navigator.
                </p>
                <div className="text-center">
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => handleNavigation("/auto")}
                  >
                    Start shopping →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Find the right card section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">FIND THE RIGHT CARD</h2>
                <h3 className="text-4xl font-bold">More built-in benefits</h3>
                <p className="text-lg text-gray-600">
                  Narrow your search based on what you're looking for—like rewards, low intro APR or credit growing
                  cards.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleNavigation("/credit-cards")}
                >
                  Compare credit cards
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-40 transform rotate-12 transition-transform hover:rotate-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl shadow-xl">
                      <div className="absolute top-4 left-4">
                        <CreditCard className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute bottom-4 left-4 text-white text-lg font-bold">**** **** **** 1234</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">SIMPLIFY YOUR BUSINESS FINANCES</h2>
                <h3 className="text-4xl font-bold">Only the best for your business</h3>
                <p className="text-lg text-gray-600">
                  Earn unlimited rewards—travel or cash—with every card. Explore banking options that can help move your
                  business forward.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleNavigation("/business")}
                >
                  Explore business solutions
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] mix-blend-overlay opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/10 text-[200px] font-bold">$</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-900/50"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-white text-xl font-bold">Business Banking</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-white text-xl font-bold">Credit Cards</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-white text-xl font-bold">Loans</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-white text-xl font-bold">Investments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Auto refinance section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Car className="w-48 h-48 text-white opacity-20" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">AUTO REFINANCE</h2>
                <h3 className="text-4xl font-bold">Same car, lower payment</h3>
                <p className="text-lg text-gray-600">
                  Preview how much you could save without impacting your credit score.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleNavigation("/auto")}
                >
                  Check eligibility
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {isLoading && <LoadingOverlay message="Loading..." />}
    </div>
  )
}
