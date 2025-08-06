"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, CreditCard, Shield, Globe, Smartphone, Wifi } from "lucide-react"

interface CardControlModalProps {
  cardType: "business" | "personal"
  accountNumber: string
}

export function CardControlModal({ cardType, accountNumber }: CardControlModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [controls, setControls] = useState({
    cardEnabled: true,
    contactlessEnabled: true,
    onlineEnabled: true,
    internationalEnabled: cardType === "business",
    atmEnabled: true,
    mobilePayEnabled: true,
  })

  const handleToggle = (key: keyof typeof controls) => {
    setControls((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full bg-transparent">
          <Settings className="h-4 w-4 mr-2" />
          Card Controls
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Card Controls
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Card Preview */}
          <Card
            className={`${cardType === "business" ? "bg-gradient-to-r from-slate-800 to-slate-900" : "bg-gradient-to-r from-blue-600 to-blue-800"} text-white`}
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm opacity-80">{cardType === "business" ? "Business" : "Personal"} Card</div>
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="text-lg font-mono mb-2">•••• •••• •••• {accountNumber.slice(-4)}</div>
              <div className="text-sm opacity-80">Exp: 12/26</div>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CreditCard className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-medium">Card Enabled</p>
                  <p className="text-sm text-gray-500">Allow all transactions</p>
                </div>
              </div>
              <Switch checked={controls.cardEnabled} onCheckedChange={() => handleToggle("cardEnabled")} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Wifi className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-medium">Contactless</p>
                  <p className="text-sm text-gray-500">Tap to pay</p>
                </div>
              </div>
              <Switch
                checked={controls.contactlessEnabled}
                onCheckedChange={() => handleToggle("contactlessEnabled")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-medium">Online Purchases</p>
                  <p className="text-sm text-gray-500">Internet transactions</p>
                </div>
              </div>
              <Switch checked={controls.onlineEnabled} onCheckedChange={() => handleToggle("onlineEnabled")} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-medium">International</p>
                  <p className="text-sm text-gray-500">Foreign transactions</p>
                </div>
              </div>
              <Switch
                checked={controls.internationalEnabled}
                onCheckedChange={() => handleToggle("internationalEnabled")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Smartphone className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-medium">Mobile Pay</p>
                  <p className="text-sm text-gray-500">Apple Pay, Google Pay</p>
                </div>
              </div>
              <Switch checked={controls.mobilePayEnabled} onCheckedChange={() => handleToggle("mobilePayEnabled")} />
            </div>
          </div>

          <Button className="w-full" onClick={() => setIsOpen(false)}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CardControlModal
