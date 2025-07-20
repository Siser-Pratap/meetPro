"use client"

import { useState, useEffect } from "react"
import { useUser, UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Video, Menu, X, Bell, Settings, HelpCircle, LogOut } from "lucide-react"
import { useRedirectToast } from "@/hooks/useRedirectToast"

interface NavbarProps {
  showUserMenu?: boolean
}

const Navbar = ({ showUserMenu = true }: NavbarProps) => {
  const { user, isLoaded } = useUser()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { redirectWithToast, showToast } = useRedirectToast()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { name: "Dashboard", href: "/dashboard", requiresAuth: true },
    { name: "Personal Room", href: "/personal-room", requiresAuth: true },
    { name: "Upcoming", href: "/upcoming", requiresAuth: true },
    { name: "Previous", href: "/previous", requiresAuth: true },
    { name: "Recordings", href: "/recordings", requiresAuth: true },
  ]

  const isActive = (href: string) => pathname === href

  const handleNavigation = (href: string, name: string) => {
    if (pathname !== href) {
      redirectWithToast(href, {
        message: `Navigating to ${name}...`,
        type: "loading",
      })
    }
  }

  const handleSignOut = () => {
    showToast("Signing out...", "info")
    // Add your sign out logic here
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-1/95 backdrop-blur-md border-b border-dark-3/50 shadow-lg"
          : "bg-dark-1/80 backdrop-blur-sm border-b border-dark-3/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-between h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => handleNavigation(user ? "/dashboard" : "/", "Home")}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-1 to-blue-1/80 rounded-xl flex-center group-hover:scale-105 transition-transform duration-300">
              <Video className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-sky-1 bg-clip-text text-transparent">
              MeetPro
            </span>
          </div>

          {/* Desktop Navigation */}
          {user && (
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => handleNavigation(item.href, item.name)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive(item.href) ? "text-blue-1 bg-blue-1/10" : "text-sky-1 hover:text-white hover:bg-dark-3/50"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-1 rounded-full animate-scale-in"></div>
                  )}
                </Button>
              ))}
            </div>
          )}

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {isLoaded && user ? (
              <>
                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="relative p-2 text-sky-1 hover:text-white hover:bg-dark-3/50 transition-all duration-300 focus-ring"
                    >
                      <Bell className="w-5 h-5" />
                      <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
                        3
                      </Badge>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-80 bg-dark-1/95 backdrop-blur-md border-dark-3/50 animate-slide-down"
                  >
                    <div className="p-4 border-b border-dark-3/50">
                      <h3 className="font-semibold text-white">Notifications</h3>
                    </div>
                    <div className="p-2">
                      <div
                        className="p-3 hover:bg-dark-3/50 rounded-lg cursor-pointer transition-colors"
                        onClick={() => showToast("Meeting reminder set!", "success")}
                      >
                        <p className="text-sm text-white font-medium">Meeting starting soon</p>
                        <p className="text-xs text-sky-1">Team standup in 5 minutes</p>
                      </div>
                      <div
                        className="p-3 hover:bg-dark-3/50 rounded-lg cursor-pointer transition-colors"
                        onClick={() => handleNavigation("/recordings", "Recordings")}
                      >
                        <p className="text-sm text-white font-medium">Recording ready</p>
                        <p className="text-xs text-sky-1">Yesterday's meeting is available</p>
                      </div>
                      <div
                        className="p-3 hover:bg-dark-3/50 rounded-lg cursor-pointer transition-colors"
                        onClick={() => showToast("Feature tour started!", "info")}
                      >
                        <p className="text-sm text-white font-medium">New feature available</p>
                        <p className="text-xs text-sky-1">Try our new screen annotation tool</p>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-2 p-2 hover:bg-dark-3/50 transition-all duration-300 focus-ring"
                    >
                      <UserButton
                        appearance={{
                          elements: {
                            avatarBox: "w-8 h-8",
                          },
                        }}
                      />
                      <span className="hidden sm:block text-sky-1 text-sm font-medium">
                        {user.firstName || user.username}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-56 bg-dark-1/95 backdrop-blur-md border-dark-3/50 animate-slide-down"
                  >
                    <div className="p-3 border-b border-dark-3/50">
                      <p className="text-sm font-medium text-white">{user.fullName}</p>
                      <p className="text-xs text-sky-1">{user.primaryEmailAddress?.emailAddress}</p>
                    </div>
                    <DropdownMenuItem
                      className="text-sky-1 hover:text-white hover:bg-dark-3/50 cursor-pointer focus-ring"
                      onClick={() => handleNavigation("/settings", "Settings")}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-sky-1 hover:text-white hover:bg-dark-3/50 cursor-pointer focus-ring"
                      onClick={() => handleNavigation("/help", "Help Center")}
                    >
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Help & Support
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-dark-3/50" />
                    <DropdownMenuItem
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10 cursor-pointer focus-ring"
                      onClick={handleSignOut}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  onClick={() => handleNavigation("/sign-in", "Sign In")}
                  className="text-sky-1 hover:text-white hover:bg-dark-3/50 transition-all duration-300 focus-ring"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => handleNavigation("/sign-up", "Sign Up")}
                  className="bg-blue-1 hover:bg-blue-1/90 transition-all duration-300 transform hover:scale-105 focus-ring"
                >
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            {user && (
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2 text-sky-1 hover:text-white hover:bg-dark-3/50 focus-ring"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {user && isMobileMenuOpen && (
          <div className="md:hidden border-t border-dark-3/50 py-4 animate-slide-up">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    handleNavigation(item.href, item.name)
                  }}
                  className={`w-full justify-start text-left transition-all duration-300 focus-ring ${
                    isActive(item.href) ? "text-blue-1 bg-blue-1/10" : "text-sky-1 hover:text-white hover:bg-dark-3/50"
                  }`}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
