"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Eye, EyeOff, Settings, Shield, Sliders, Copy, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CardControlModal from "@/components/card-control-modal"
import CardReplacementModal from "@/components/card-replacement-modal"

const accountDetails = {
  business: {
    accountType: "Business Savings",
    accountNumber: "****9043",
    balance: "$22,000,000",
    cardImage: "/images/credit-card.png",
    routingNumber: "021000021",
  },
  personal: {
    accountType: "Personal Savings",
    accountNumber: "****7822",
    balance: "$5,942,744",
    cardImage: "/images/personal-card.png",
    routingNumber: "021000021",
  },
}

export default function CardDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [showBalance, setShowBalance] = useState(true)
  const [copied, setCopied] = useState(false)

  const accountId = params.id as string
  const account = accountDetails[accountId as keyof typeof accountDetails]

  if (!account) {
    return <div>Account not found</div>
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.back()} className="hover:bg-white/50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{account.accountType}</h1>
              <p className="text-gray-600">Account {account.accountNumber}</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Active
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card Display */}
          <div className="lg:col-span-1">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <Image
                      src={account.cardImage || "/placeholder.svg"}
                      alt={`${account.accountType} Card`}
                      width={280}
                      height={180}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Available Balance</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {showBalance ? account.balance : "••••••••"}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowBalance(!showBalance)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Account Number</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-sm">{account.accountNumber}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(account.accountNumber)}
                          className="h-6 w-6 p-0"
                        >
                          {copied ? <CheckCircle className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Routing Number</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-sm">{account.routingNumber}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(account.routingNumber)}
                          className="h-6 w-6 p-0"
                        >
                          {copied ? <CheckCircle className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card Management */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Settings className="h-5 w-5 mr-2 text-blue-600" />
                  Card Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href={`/dashboard/my-cards/${accountId}/manage-limits`}>
                    <Button
                      variant="outline"
                      className="w-full h-16 flex flex-col items-center justify-center space-y-2 hover:bg-blue-50 hover:border-blue-300 transition-all bg-transparent"
                    >
                      <Sliders className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium">Manage Limits</span>
                    </Button>
                  </Link>

                  <div className="w-full">
                    <CardControlModal
                      cardType={accountId as "business" | "personal"}
                      accountNumber={account.accountNumber}
                    />
                  </div>

                  <div className="w-full">
                    <CardReplacementModal
                      cardType={accountId as "business" | "personal"}
                      accountNumber={account.accountNumber}
                    />
                  </div>

                  <Button
                    variant="outline"
                    className="w-full h-16 flex flex-col items-center justify-center space-y-2 hover:bg-green-50 hover:border-green-300 transition-all bg-transparent"
                  >
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Security Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">Online Purchase</p>
                        <p className="text-sm text-gray-500">Amazon.com - Today</p>
                      </div>
                    </div>
                    <span className="font-semibold text-red-600">-$89.99</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">ATM Withdrawal</p>
                        <p className="text-sm text-gray-500">Main St ATM - Yesterday</p>
                      </div>
                    </div>
                    <span className="font-semibold text-red-600">-$200.00</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">Direct Deposit</p>
                        <p className="text-sm text-gray-500">Payroll - 2 days ago</p>
                      </div>
                    </div>
                    <span className="font-semibold text-green-600">+$3,250.00</span>
                  </div>
                </div>

                <Link href="/transactions">
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    View All Transactions
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
