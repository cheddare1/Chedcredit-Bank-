"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TrendingUp, Home, Leaf, BarChart3, DollarSign, MapPin, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"

const investments = [
  {
    id: 1,
    name: "Global Finance Natural Resources",
    type: "Gold & Diamond Investment",
    value: 2500000,
    icon: TrendingUp,
    color: "from-yellow-400 to-yellow-600",
    details: {
      assets: "10 Gold Bars + Diamond Portfolio",
      location: "Secure Vault Facility",
      description:
        "Premium precious metals investment portfolio featuring 10 certified gold bars and a diversified collection of investment-grade diamonds.",
      features: [
        "10 Certified Gold Bars (1 oz each)",
        "Diversified Diamond Collection",
        "Secure Vault Storage",
        "Quarterly Performance Reviews",
        "Insurance Coverage Included",
      ],
      performance: "+15.2% Annual Return",
      risk: "Medium Risk",
    },
  },
  {
    id: 2,
    name: "Personal Home",
    type: "Rental Property",
    value: 1842744,
    icon: Home,
    color: "from-blue-400 to-blue-600",
    details: {
      assets: "Prime Residential Property",
      location: "Accra, Ghana",
      description:
        "Premium rental property located in the heart of Accra's business district, generating consistent monthly rental income.",
      features: [
        "Prime City Center Location",
        "$2,500 Monthly Rental Income",
        "3 Bedroom, 2 Bathroom",
        "Modern Amenities",
        "Professional Property Management",
      ],
      performance: "8% Annual Appreciation",
      risk: "Low Risk",
    },
  },
  {
    id: 3,
    name: "Cocoa Farm",
    type: "Agricultural Investment",
    value: 1600000,
    icon: Leaf,
    color: "from-green-400 to-green-600",
    details: {
      assets: "50-Acre Cocoa Plantation",
      location: "Kumasi, Ghana",
      description:
        "Sustainable cocoa farming operation in Ghana's premier cocoa-growing region, focusing on organic farming practices and direct export partnerships.",
      features: [
        "50-Acre Organic Plantation",
        "25 Tons Annual Harvest",
        "Direct Export Partnerships",
        "Sustainable Farming Practices",
        "Local Community Employment",
      ],
      performance: "12% Annual Growth",
      risk: "Medium Risk",
    },
  },
]

export default function InvestmentsPage() {
  const [selectedInvestment, setSelectedInvestment] = useState<(typeof investments)[0] | null>(null)

  const totalValue = investments.reduce((sum, inv) => sum + inv.value, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <DashboardHeader />
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Investment Portfolio</h1>
          <p className="text-gray-600">Manage and monitor your investment portfolio</p>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Total Investment</p>
                  <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Active Investments</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <BarChart3 className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Annual Return</p>
                  <p className="text-2xl font-bold text-green-600">+12.5%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Risk Profile</p>
                  <p className="text-2xl font-bold text-orange-600">Diversified</p>
                </div>
                <Users className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Investment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((investment) => {
            const IconComponent = investment.icon
            return (
              <Card
                key={investment.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${investment.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {investment.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{investment.type}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Investment Value</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors bg-transparent"
                          onClick={() => setSelectedInvestment(investment)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg bg-gradient-to-r ${investment.color} flex items-center justify-center`}
                            >
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            {investment.name}
                          </DialogTitle>
                          <DialogDescription>{investment.details.description}</DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6 mt-6">
                          {/* Investment Overview */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-gray-500" />
                                <span className="text-sm font-medium">Location</span>
                              </div>
                              <p className="text-sm text-gray-600">{investment.details.location}</p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <BarChart3 className="h-4 w-4 text-gray-500" />
                                <span className="text-sm font-medium">Performance</span>
                              </div>
                              <p className="text-sm text-green-600 font-semibold">{investment.details.performance}</p>
                            </div>
                          </div>

                          {/* Key Features */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {investment.details.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                  <span className="text-sm text-gray-600">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Risk Assessment */}
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-900">Risk Assessment</span>
                              <Badge variant={investment.details.risk.includes("Low") ? "default" : "secondary"}>
                                {investment.details.risk}
                              </Badge>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3 pt-4">
                            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Generate Report</Button>
                            <Button variant="outline" className="flex-1 bg-transparent">
                              Contact Advisor
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
