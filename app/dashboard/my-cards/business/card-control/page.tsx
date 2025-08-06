"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, X, ChevronDown, ChevronUp } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function BusinessCardControlPage() {
  const router = useRouter()
  const [isCardOn, setIsCardOn] = useState(true)
  const [isInfoExpanded, setIsInfoExpanded] = useState(false)

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      {/* Header with status bar */}
      <div className="bg-transparent px-4 py-3 flex justify-between items-center">
        <div className="text-black text-sm">12:04</div>
        <div className="flex items-center space-x-1">
          <div className="text-black text-sm">LTE</div>
          <div className="bg-yellow-400 text-black text-xs rounded-md px-1">74</div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="flex items-center px-4 py-2">
        <button onClick={handleBack} className="text-black">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex-1 mx-2">
          <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
            <span className="text-gray-500">Need help?</span>
          </div>
        </div>
        <div className="relative">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </div>
        </div>
        <button className="ml-4 text-black">Sign off</button>
      </div>

      {/* Main content */}
      <div className="bg-white rounded-t-xl mt-4 flex-1 px-6 py-4">
        {/* Handle at top */}
        <div className="flex justify-center -mt-2 mb-4">
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Turn card on or off</h2>
          <button onClick={handleBack} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Toggle section */}
        <div className="py-4 flex justify-between items-center">
          <div className="text-lg font-medium">
            Card is <span className={isCardOn ? "text-green-600" : "text-red-600"}>{isCardOn ? "on" : "off"}</span>
          </div>
          <Switch
            checked={isCardOn}
            onCheckedChange={setIsCardOn}
            className={`${isCardOn ? "bg-green-600" : "bg-gray-200"}`}
          />
        </div>

        {/* Collapsible info section */}
        <div className="py-2">
          <button
            className="w-full bg-gray-100 rounded-lg px-4 py-3 flex justify-between items-center"
            onClick={() => setIsInfoExpanded(!isInfoExpanded)}
          >
            <span className="font-medium text-gray-800">What happens when your card is off?</span>
            {isInfoExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {isInfoExpanded && (
            <div className="mt-2 px-4 py-3 text-gray-700">
              <p>
                When your card is turned off, all new transactions will be declined. Recurring payments and previously
                authorized transactions may still be processed.
              </p>
            </div>
          )}
        </div>

        {/* Info text */}
        <div className="py-4 text-gray-700">
          <p>
            Turning off your card is not a replacement for reporting your card lost or stolen. Call us immediately if
            you believe that unauthorized transactions have been made. You can also tap on Learn more in the Manage tab
            for additional help.
          </p>
        </div>

        {/* Card details */}
        <div className="py-4 mt-4 bg-gray-50 rounded-lg px-4">
          <div className="text-sm text-gray-500">
            <p>Business Savings Card</p>
            <p>Card ending in 9043</p>
          </div>
        </div>
      </div>
    </div>
  )
}
