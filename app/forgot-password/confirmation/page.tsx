import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PasswordResetConfirmationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Ched Credit Union
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Password Reset Sent</CardTitle>
            <CardDescription className="text-center">
              A password reset link has been sent to your email address.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p>Please check your email and follow the instructions to reset your password.</p>
            <p>If you don't receive the email within a few minutes, please check your spam folder.</p>
            <Link href="/login">
              <Button className="mt-4">Return to Login</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
