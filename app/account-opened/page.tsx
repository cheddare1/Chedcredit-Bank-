import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Header from "@/components/header"

export default function AccountOpenedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">Account Opened Successfully!</CardTitle>
            <CardDescription className="text-center">
              Thank you for choosing Ched Credit Union. Your account has been created.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center mb-4">
              Your account number is: <strong>1234567890</strong>
            </p>
            <p className="text-center">
              Please check your email for further instructions on how to access your new account.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/dashboard">
              <Button>Go to Dashboard</Button>
            </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
