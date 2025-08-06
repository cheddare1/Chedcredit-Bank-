"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, CreditCard, Save, Loader2 } from "lucide-react"
import Link from "next/link"

export default function BusinessManageLimitsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [limits, setLimits] = useState({
    dailyPurchase: 5000,
    monthlySpending: 50000,
    dailyATM: 1000,
    onlinePurchase: 10000,
  })

  const maxLimits = {
    dailyPurchase: 25000,
    monthlySpending: 100000,
    dailyATM: 2500,
    onlinePurchase: 50000,
  }

  const handleSave = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  const handleLimitChange = (key: keyof typeof limits, value: string) => {
    const numValue = Number.parseInt(value) || 0
    const maxValue = maxLimits[key]
    setLimits((prev) => ({
      ...prev,
      [key]: Math.min(numValue, maxValue),
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/my-cards/business">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Manage Limits</h1>
                <p className="text-gray-600">Business Card ••••9043</p>
              </div>
            </div>
            <Button
              onClick={handleSave}
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card Preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-sm opacity-80 mb-1">Business Card</p>
                      <p className="text-xs opacity-60">Routing: 021000021</p>
                    </div>
                    <CreditCard className="h-8 w-8 opacity-80" />
                  </div>
                  <div className="space-y-4">
                    <div className="text-xl font-mono tracking-wider">•••• •••• •••• 9043</div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="opacity-60">VALID THRU</p>
                        <p className="font-mono">12/26</p>
                      </div>
                      <div className="text-right">
                        <p className="opacity-60">CARDHOLDER</p>
                        <p className="font-medium">THOMAS BUSINESS</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Manage Limits */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="text-xl">Spending Limits</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Daily Purchase Limit */}
                <div className="space-y-3">
                  <Label htmlFor="dailyPurchase" className="text-base font-semibold text-gray-800">
                    Daily Purchase Limit
                  </Label>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <Input
                        id="dailyPurchase"
                        type="number"
                        value={limits.dailyPurchase}
                        onChange={(e) => handleLimitChange("dailyPurchase", e.target.value)}
                        className="text-lg font-medium h-12 border-2 focus:border-blue-500"
                        min="0"
                        max={maxLimits.dailyPurchase}
                      />
                    </div>
                    <div className="text-sm text-gray-600 min-w-0 flex-shrink-0">
                      Max: ${maxLimits.dailyPurchase.toLocaleString()}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(limits.dailyPurchase / maxLimits.dailyPurchase) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Monthly Spending Limit */}
                <div className="space-y-3">
                  <Label htmlFor="monthlySpending" className="text-base font-semibold text-gray-800">
                    Monthly Spending Limit
                  </Label>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <Input
                        id="monthlySpending"
                        type="number"
                        value={limits.monthlySpending}
                        onChange={(e) => handleLimitChange("monthlySpending", e.target.value)}
                        className="text-lg font-medium h-12 border-2 focus:border-blue-500"
                        min="0"
                        max={maxLimits.monthlySpending}
                      />
                    </div>
                    <div className="text-sm text-gray-600 min-w-0 flex-shrink-0">
                      Max: ${maxLimits.monthlySpending.toLocaleString()}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(limits.monthlySpending / maxLimits.monthlySpending) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Daily ATM Withdrawal */}
                <div className="space-y-3">
                  <Label htmlFor="dailyATM" className="text-base font-semibold text-gray-800">
                    Daily ATM Withdrawal
                  </Label>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <Input
                        id="dailyATM"
                        type="number"
                        value={limits.dailyATM}
                        onChange={(e) => handleLimitChange("dailyATM", e.target.value)}
                        className="text-lg font-medium h-12 border-2 focus:border-blue-500"
                        min="0"
                        max={maxLimits.dailyATM}
                      />
                    </div>
                    <div className="text-sm text-gray-600 min-w-0 flex-shrink-0">
                      Max: ${maxLimits.dailyATM.toLocaleString()}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(limits.dailyATM / maxLimits.dailyATM) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Online Purchase Limit */}
                <div className="space-y-3">
                  <Label htmlFor="onlinePurchase" className="text-base font-semibold text-gray-800">
                    Online Purchase Limit
                  </Label>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <Input
                        id="onlinePurchase"
                        type="number"
                        value={limits.onlinePurchase}
                        onChange={(e) => handleLimitChange("onlinePurchase", e.target.value)}
                        className="text-lg font-medium h-12 border-2 focus:border-blue-500"
                        min="0"
                        max={maxLimits.onlinePurchase}
                      />
                    </div>
                    <div className="text-sm text-gray-600 min-w-0 flex-shrink-0">
                      Max: ${maxLimits.onlinePurchase.toLocaleString()}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(limits.onlinePurchase / maxLimits.onlinePurchase) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
