import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative w-10 h-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1502-o7tNDKqvlQTBOgwnakO9CD0CMkPLU6.png"
                  alt="Ched Credit Union"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="ml-2 text-lg font-bold">Ched Credit Union</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted financial partner for over 50 years. Building stronger communities through innovative banking
              solutions.
            </p>
          </div>

          {/* Banking Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Banking</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/banking/checking" className="text-gray-400 hover:text-white transition-colors">
                  Checking Accounts
                </Link>
              </li>
              <li>
                <Link href="/savings" className="text-gray-400 hover:text-white transition-colors">
                  Savings Accounts
                </Link>
              </li>
              <li>
                <Link href="/credit-cards" className="text-gray-400 hover:text-white transition-colors">
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link href="/auto" className="text-gray-400 hover:text-white transition-colors">
                  Auto Loans
                </Link>
              </li>
              <li>
                <Link href="/investments" className="text-gray-400 hover:text-white transition-colors">
                  Investments
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/business" className="text-gray-400 hover:text-white transition-colors">
                  Business Banking
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-gray-400 hover:text-white transition-colors">
                  Commercial Loans
                </Link>
              </li>
              <li>
                <Link href="/currency-exchange" className="text-gray-400 hover:text-white transition-colors">
                  Currency Exchange
                </Link>
              </li>
              <li>
                <Link href="/pay-bills" className="text-gray-400 hover:text-white transition-colors">
                  Bill Pay Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/security-checkout" className="text-gray-400 hover:text-white transition-colors">
                  Security Center
                </Link>
              </li>
              <li>
                <Link href="/account-options" className="text-gray-400 hover:text-white transition-colors">
                  Account Options
                </Link>
              </li>
              <li>
                <Link href="/open-account" className="text-gray-400 hover:text-white transition-colors">
                  Open Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative w-6 h-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1502-o7tNDKqvlQTBOgwnakO9CD0CMkPLU6.png"
                alt="Ched Credit Union"
                fill
                className="object-contain"
                sizes="24px"
              />
            </div>
            <p className="text-gray-400 text-sm">© 2025 Ched Credit Union. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
