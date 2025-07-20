"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Video,
  Home,
  User,
  Calendar,
  Clock,
  PlayCircle,
  Plus,
  ChevronLeft,
  ChevronRight,
  Settings,
  HelpCircle,
} from "lucide-react"
import { useRedirectToast } from "@/hooks/useRedirectToast"

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className = "" }: SidebarProps) => {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { redirectWithToast, showToast } = useRedirectToast()

  const navigationItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
      badge: null,
    },
    {
      name: "Personal Room",
      href: "/personal-room",
      icon: User,
      badge: null,
    },
    {
      name: "Upcoming",
      href: "/upcoming",
      icon: Calendar,
      badge: "2",
    },
    {
      name: "Previous",
      href: "/previous",
      icon: Clock,
      badge: null,
    },
    {
      name: "Recordings",
      href: "/recordings",
      icon: PlayCircle,
      badge: "5",
    },
  ]

  const bottomItems = [
    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
    },
    {
      name: "Help",
      href: "/help",
      icon: HelpCircle,
    },
  ]

  const isActive = (href: string) => pathname === href

  const handleNavigation = (href: string, name: string) => {
    if (pathname !== href) {
      redirectWithToast(href, {
        message: `Opening ${name}...`,
        type: "loading",
      })
    }
  }

  const handleNewMeeting = () => {
    showToast("Creating new meeting...", "info")
    // Add your new meeting logic here
    setTimeout(() => {
      redirectWithToast("/meeting/new", {
        message: "Joining meeting room...",
        type: "loading",
      })
    }, 1000)
  }

  return (
    <div
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-dark-1/80 backdrop-blur-md border-r border-dark-3/50 transition-all duration-300 z-40 ${
        isCollapsed ? "w-16" : "w-64"
      } ${className}`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-dark-3/50">
          <div className="flex-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-1 to-blue-1/80 rounded-lg flex-center">
                  <Video className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-white">Navigation</span>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsCollapsed(!isCollapsed)
                showToast(isCollapsed ? "Sidebar expanded" : "Sidebar collapsed", "info", { duration: 1500 })
              }}
              className="p-2 text-sky-1 hover:text-white hover:bg-dark-3/50 transition-all duration-300 focus-ring"
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Quick Action */}
        <div className="p-4 border-b border-dark-3/50">
          <Button
            onClick={handleNewMeeting}
            className={`w-full bg-blue-1 hover:bg-blue-1/90 transition-all duration-300 transform hover:scale-105 focus-ring ${
              isCollapsed ? "px-0" : "px-4"
            }`}
          >
            <Plus className="w-4 h-4" />
            {!isCollapsed && <span className="ml-2">New Meeting</span>}
          </Button>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => handleNavigation(item.href, item.name)}
                className={`w-full justify-start transition-all duration-300 focus-ring ${isCollapsed ? "px-3" : "px-4"} ${
                  isActive(item.href)
                    ? "text-blue-1 bg-blue-1/10 border-r-2 border-blue-1"
                    : "text-sky-1 hover:text-white hover:bg-dark-3/50"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="ml-3 flex-1 text-left">{item.name}</span>
                    {item.badge && (
                      <Badge className="ml-2 bg-blue-1/20 text-blue-1 border-blue-1/30 text-xs">{item.badge}</Badge>
                    )}
                  </>
                )}
              </Button>
            )
          })}
        </div>

        {/* Bottom Navigation */}
        <div className="p-4 border-t border-dark-3/50 space-y-2">
          {bottomItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => handleNavigation(item.href, item.name)}
                className={`w-full justify-start transition-all duration-300 focus-ring ${
                  isCollapsed ? "px-3" : "px-4"
                } text-sky-1 hover:text-white hover:bg-dark-3/50`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="ml-3 text-left">{item.name}</span>}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
