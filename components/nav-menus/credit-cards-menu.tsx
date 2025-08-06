"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Wallet, Plane, GraduationCap, Building2 } from "lucide-react"
import { useLoadingTransition } from "@/components/loading-transition"

export default function CreditCardsMenu() {
  const { handleTransition } = useLoadingTransition()

  const menuItems = [
    { title: "View All Credit Cards", path: "/credit-cards" },
    { title: "Rewards Cards", path: "/credit-cards/rewards" },
    { title: "Travel Cards", path: "/credit-cards/travel" },
    { title: "Cash Back Cards", path: "/credit-cards/cash-back" },
  ]

  return (
    <Card className="absolute top-full left-0 w-full max-w-screen-xl mx-auto bg-white shadow-lg rounded-b-lg z-50">
      <CardContent className="p-6">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Types of Credit Cards</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Credit Building</p>
                  <p className="text-sm text-gray-600">Credit Level: Fair to Rebuilding</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Wallet className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Cash Back Rewards</p>
                  <p className="text-sm text-gray-600">Credit Level: Excellent to Fair</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Plane className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Travel Rewards</p>
                  <p className="text-sm text-gray-600">Credit Level: Excellent to Good</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Student Rewards</p>
                  <p className="text-sm text-gray-600">Credit Level: Fair</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Business Rewards</p>
                  <p className="text-sm text-gray-600">Credit Level: Excellent to Fair</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Find a Credit Card</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  See if You're Pre-Approved
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Compare All Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Redeem a Mail Offer
                </Link>
              </li>
            </ul>
            <h3 className="font-semibold mt-6 mb-4">Tips & Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Credit Card Benefits
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Capital One Travel
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Track Credit with CreditWise®
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Common Account Tasks</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Pay Credit Card Bill
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Activate Credit Card
                </Link>
              </li>
            </ul>
            <h3 className="font-semibold mt-6 mb-4">Quick Links</h3>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleTransition(item.path)}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
