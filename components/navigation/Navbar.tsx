"use client"

import { useState, useEffect } from "react"
import { useUser, UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Video } from "lucide-react"
import { useRedirectToast } from "@/hooks/useRedirectToast"

interface NavbarProps {
  showUserMenu?: boolean
}

const Navbar = ({ showUserMenu = true }: NavbarProps) => {
  const { user, isLoaded } = useUser()
  const pathname = usePathname()
  
  const [isScrolled, setIsScrolled] = useState(false)
  const { redirectWithToast } = useRedirectToast()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string, name: string) => {
    if (pathname !== href) {
      redirectWithToast(href, {
        message: `Navigating to ${name}...`,
        type: "loading",
      })
    }
  }

  

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-1/95 backdrop-blur-md border-b border-dark-3/50 shadow-lg"
          : "bg-dark-1/80 backdrop-blur-sm border-b border-dark-3/30"
      }`}
    >
      <div className="max-w-7xl pb-1 mx-2">
        <div className="flex items-center justify-between h-16">
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

          

          
          <div className="flex items-center  group space-x-4">
            {isLoaded && user ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center  hover:bg-dark-3/50 transition-all duration-300 focus-ring"
                    >
                      <UserButton
                        appearance={{
                          elements: {
                            avatarBox: "w-8 h-8",
                          },
                        }}
                      />
                      <span className="hidden sm:block p-2 text-sky-1 text-sm font-medium">
                        {user.firstName || user.username}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center">
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

            
          </div>
        </div>

       
      </div>
    </nav>
  )
}

export default Navbar
