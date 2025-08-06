"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import Header from "@/components/header"

export default function ContactSupportPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200) // 1.2 seconds loading time

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
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Contact Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Ched Credit Union</h2>
            </div>
            <div>
              <p className="font-medium">Email:</p>
              <p>reply.creditunion.com</p>
            </div>
            <div>
              <p className="font-medium">Phone:</p>
              <p>(+233)20-884-3589</p>
            </div>
            <div>
              <p className="font-medium">Fax:</p>
              <p>+1 (555) 987-6543</p>
            </div>
            <div>
              <p className="font-medium">Hours of Operation:</p>
              <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
