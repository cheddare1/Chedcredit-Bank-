"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, AlertTriangle, Package, Clock } from "lucide-react"

interface CardReplacementModalProps {
  cardType: "business" | "personal"
  accountNumber: string
}

export function CardReplacementModal({ cardType, accountNumber }: CardReplacementModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [reason, setReason] = useState("")
  const [details, setDetails] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full bg-transparent">
          <CreditCard className="h-4 w-4 mr-2" />
          Replace Card
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Package className="h-5 w-5 mr-2" />
            Replace Card
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-800">Important</p>
                <p className="text-sm text-yellow-700">
                  Your current card will be deactivated once the replacement is issued.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-base font-medium">Reason for replacement</Label>
            <RadioGroup value={reason} onValueChange={setReason} className="mt-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lost" id="lost" />
                <Label htmlFor="lost">Lost card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="stolen" id="stolen" />
                <Label htmlFor="stolen">Stolen card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="damaged" id="damaged" />
                <Label htmlFor="damaged">Damaged card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compromised" id="compromised" />
                <Label htmlFor="compromised">Security compromise</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="details" className="text-base font-medium">
              Additional details (optional)
            </Label>
            <Textarea
              id="details"
              placeholder="Please provide any additional information..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="mt-2"
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-800">Delivery Timeline</p>
                <p className="text-sm text-blue-700">Your replacement card will arrive in 5-7 business days.</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button className="flex-1" onClick={handleSubmit} disabled={!reason || isSubmitting}>
              {isSubmitting ? "Processing..." : "Request Replacement"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CardReplacementModal
