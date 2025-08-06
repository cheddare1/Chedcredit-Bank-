import { Loader2 } from "lucide-react"

export default function DashboardLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
    </div>
  )
}
