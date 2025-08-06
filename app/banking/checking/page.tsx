import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import { CreditCard, Smartphone, Shield } from "lucide-react"

export default function CheckingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Open a Checking Account</h1>
              <p className="text-xl mb-8">Experience hassle-free banking with our feature-packed checking accounts.</p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Open an Account
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Checking Account?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2" />
                    No Monthly Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Enjoy fee-free checking with no minimum balance requirements.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="mr-2" />
                    Mobile Banking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage your account on-the-go with our user-friendly mobile app.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2" />
                    Fraud Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Rest easy with our advanced fraud monitoring and protection.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Banking Smarter?</h2>
            <p className="text-xl mb-8">Open your account in minutes and start enjoying the benefits.</p>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Open Your Account Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
