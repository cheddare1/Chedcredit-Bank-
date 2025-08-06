"use client"

import { useLoadingTransition } from "@/components/loading-transition"

export default function BankingMenu() {
  const { handleTransition } = useLoadingTransition()

  const menuItems = [
    { title: "Checking Accounts", path: "/banking/checking" },
    { title: "Savings Accounts", path: "/banking/savings" },
    { title: "CDs", path: "/banking/cds" },
    { title: "Money Market", path: "/banking/money-market" },
  ]

  return (
    <div className="p-4">
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
  )
}
