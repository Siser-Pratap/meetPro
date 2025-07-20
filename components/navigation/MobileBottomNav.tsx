"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Home, User, Calendar, Clock, PlayCircle } from "lucide-react"

const MobileBottomNav = () => {
  const pathname = usePathname()

  const navigationItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
      badge: null,
    },
    {
      name: "Personal",
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

  const isActive = (href: string) => pathname === href

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden nav-glass border-t border-slate-800/50">
      <div className="flex-between py-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)

          return (
            <Link key={item.name} href={item.href} className="flex-1">
              <div
                className={`mobile-nav-item transition-all duration-300 ${
                  active ? "mobile-nav-active" : "mobile-nav-inactive"
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${active ? "scale-110" : ""} transition-transform duration-300`} />
                  {item.badge && <Badge className="notification-badge">{item.badge}</Badge>}
                </div>
                <span className={`text-xs mt-1 font-medium ${active ? "mobile-nav-active" : "mobile-nav-inactive"}`}>
                  {item.name}
                </span>
                {active && <div className="w-1 h-1 bg-blue-400 rounded-full mt-1 animate-scale-in"></div>}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default MobileBottomNav
