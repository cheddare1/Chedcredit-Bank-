"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import LoadingOverlay from "@/components/loading-overlay"

export default function AccountOptionsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingAction, setLoadingAction] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200) // 1.2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  const handleAction = (action: string, path: string) => {
    setLoadingAction(action)
    setTimeout(() => {
      setLoadingAction(null)
      router.push(path)
    }, 1500) // 1.5 seconds loading time
  }

  if (isLoading) {
    return <LoadingOverlay message="Loading options..." />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Account Options</CardTitle>
            <CardDescription className="text-center">Choose an option to proceed with your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" size="lg" onClick={() => handleAction("Signing In", "/login")}>
              Sign In
            </Button>
            <Button
              className="w-full"
              size="lg"
              variant="outline"
              onClick={() => handleAction("Creating Account", "/open-account")}
            >
              Create an Account
            </Button>
          </CardContent>
        </Card>
      </main>
      {loadingAction && <LoadingOverlay message={loadingAction} />}
    </div>
  )
}
