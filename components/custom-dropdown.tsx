"use client"

import { useState } from "react"
import { ChevronDown, User, Settings, Shield, DollarSign, Building, HelpCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { getCurrentUser } from "@/utils/userAccounts"

export default function CustomDropdown() {
  const currentUser = getCurrentUser()
  const [isOpen, setIsOpen] = useState(false)

  if (!currentUser) return null

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-2 hover:bg-gray-100">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
          <span className="font-medium text-gray-700">{currentUser.name}</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 p-2" align="end">
        <DropdownMenuLabel className="px-3 py-2">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
            <p className="text-xs text-gray-500">Ched Credit Union Member</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/dashboard/my-cards" className="flex items-center px-3 py-2 text-sm">
            <User className="h-4 w-4 mr-3 text-gray-500" />
            My Cards & Accounts
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/account-settings" className="flex items-center px-3 py-2 text-sm">
            <Settings className="h-4 w-4 mr-3 text-gray-500" />
            Account Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/security-checkout" className="flex items-center px-3 py-2 text-sm">
            <Shield className="h-4 w-4 mr-3 text-gray-500" />
            Security Center
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/currency-exchange" className="flex items-center px-3 py-2 text-sm">
            <DollarSign className="h-4 w-4 mr-3 text-gray-500" />
            Currency Exchange
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/business" className="flex items-center px-3 py-2 text-sm">
            <Building className="h-4 w-4 mr-3 text-gray-500" />
            Business Services
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/support" className="flex items-center px-3 py-2 text-sm">
            <HelpCircle className="h-4 w-4 mr-3 text-gray-500" />
            Customer Support
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/logout" className="flex items-center px-3 py-2 text-sm text-red-600 hover:text-red-700">
            <LogOut className="h-4 w-4 mr-3" />
            Sign Out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
