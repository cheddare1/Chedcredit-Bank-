"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavDropdown from "@/components/nav-dropdown"
import CreditCardsMenu from "@/components/nav-menus/credit-cards-menu"
import BankingMenu from "@/components/nav-menus/banking-menu"
import { useLoadingTransition } from "@/components/loading-transition"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { handleTransition } = useLoadingTransition()

  const handleNavigation = async (path: string) => {
    await handleTransition(path)
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-600">
              Ched Credit Union
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavDropdown
              trigger={
                <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Credit Cards
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              }
            >
              <CreditCardsMenu />
            </NavDropdown>

            <NavDropdown
              trigger={
                <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Banking
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              }
            >
              <BankingMenu />
            </NavDropdown>

            <button
              onClick={() => handleNavigation("/auto")}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Auto
            </button>
            <button
              onClick={() => handleNavigation("/business")}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Business
            </button>
            <button
              onClick={() => handleNavigation("/commercial")}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Commercial
            </button>
            <button
              onClick={() => handleNavigation("/support")}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Support
            </button>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex">
            <Button
              onClick={() => handleNavigation("/login")}
              variant="default"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => handleNavigation("/credit-cards")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Credit Cards
              </button>
              <button
                onClick={() => handleNavigation("/banking")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Banking
              </button>
              <button
                onClick={() => handleNavigation("/auto")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Auto
              </button>
              <button
                onClick={() => handleNavigation("/business")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Business
              </button>
              <button
                onClick={() => handleNavigation("/commercial")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Commercial
              </button>
              <button
                onClick={() => handleNavigation("/support")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Support
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => handleNavigation("/login")}
                  variant="default"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
