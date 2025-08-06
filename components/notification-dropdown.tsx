"use client"

import { useState, useEffect, useRef } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface LoginSession {
  loginTime: string
  logoutTime: string | null
}

const notifications = {
  inbox: [
    { id: 1, message: "Farm Debt Payment: $26,000 payment completed on February 1, 2025", time: "February 1, 2025" },
    {
      id: 2,
      message: "Farm Debt Payment: Remaining $24,000 scheduled for August 1, 2025",
      time: "Upcoming in 6 months",
    },
    { id: 3, message: "Personal Home Payment: $2,000 payment completed", time: "January 2025" },
    { id: 4, message: "Personal Home Payment: Next $2,000 payment due May 2025", time: "Upcoming" },
    { id: 5, message: "Personal Home Payment: $2,000 payment completed", time: "September 2024" },
    { id: 6, message: "Personal Home Payment: $2,000 payment completed", time: "May 2024" },
    { id: 7, message: "Farm Debt Payment: Payment plan established - Total debt $50,000", time: "2023" },
    { id: 8, message: "Personal Home Payment: Automatic payment schedule activated", time: "2023" },
  ],
  security: [
    { id: 3, message: "Login from new device", time: "3 hours ago" },
    { id: 4, message: "Password changed successfully", time: "April 20, 2022" },
    { id: 5, message: "Password changed successfully", time: "May 12, 2018" },
  ],
  payment: [
    { id: 5, message: "Farm Debt Payment: $26,000.00 completed", time: "February 1, 2025" },
    { id: 6, message: "Farm Debt Outstanding: $24,000.00 due August 1, 2025", time: "Scheduled" },
  ],
}

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentSession, setCurrentSession] = useState<LoginSession | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Record login time when component mounts
    const loginTime = new Date().toLocaleString()
    setCurrentSession({ loginTime, logoutTime: null })

    // Set up cleanup for logout time
    const handleBeforeUnload = () => {
      const logoutTime = new Date().toLocaleString()
      const sessions = JSON.parse(localStorage.getItem("loginSessions") || "[]")
      sessions.push({ loginTime, logoutTime })
      localStorage.setItem("loginSessions", JSON.stringify(sessions))
    }

    // Handle clicks outside the dropdown to close it
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    // Update current time every minute
    const timeInterval = setInterval(() => {
      setCurrentSession((prev) => {
        if (prev) {
          return { ...prev, loginTime: new Date().toLocaleString() }
        }
        return prev
      })
    }, 60000)

    window.addEventListener("beforeunload", handleBeforeUnload)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      clearInterval(timeInterval)
      window.removeEventListener("beforeunload", handleBeforeUnload)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        className="relative text-white hover:text-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="h-5 w-5" />
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
      </Button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-80 sm:w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <Tabs defaultValue="security" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="inbox">Inbox</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>
            <TabsContent value="inbox" className="max-h-[400px] overflow-y-auto">
              {notifications.inbox.map((notification) => (
                <div key={notification.id} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="security" className="max-h-[400px] overflow-y-auto">
              {currentSession && (
                <div className="px-4 py-2 text-sm text-gray-700 bg-blue-50">
                  <p className="font-medium">Current Session</p>
                  <p className="text-xs text-gray-500">Login Time: {currentSession.loginTime}</p>
                  <p className="text-xs text-gray-500">Current Status: Active</p>
                </div>
              )}
              {notifications.security.map((notification) => (
                <div key={notification.id} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="payment" className="max-h-[400px] overflow-y-auto">
              {notifications.payment.map((notification) => (
                <div key={notification.id} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}
