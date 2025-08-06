import { Loader2 } from "lucide-react"

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <Loader2 className="h-16 w-16 animate-spin text-blue-600 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700">Signing In</h2>
        <p className="text-gray-500 mt-2">Please wait while we verify your credentials...</p>
      </div>
    </div>
  )
}
