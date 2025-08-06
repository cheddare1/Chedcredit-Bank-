import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Ched Credit Union
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Credit Cards
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Banking
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Auto
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Business
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Commercial
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              Open Account
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
