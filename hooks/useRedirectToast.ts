"use client"
import React from "react"
import { useRouter, usePathname } from "next/navigation"
import { toast } from "sonner"
import { Loader2, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"

interface RedirectOptions {
  message?: string
  type?: "loading" | "success" | "error" | "info"
  duration?: number
  showIcon?: boolean
}

export const useRedirectToast = () => {
  const router = useRouter()
  const pathname = usePathname()

  const redirectWithToast = (href: string, options: RedirectOptions = {}) => {
    const { message = "Redirecting...", type = "loading", duration = 2000, showIcon = true } = options

    // Show loading toast
    const toastId = toast.loading(
      React.createElement(
        "div",
        { className: "flex items-center space-x-3" },
        showIcon && React.createElement(Loader2, { className: "w-4 h-4 animate-spin text-blue-1" }),
        React.createElement("span", { className: "text-white font-medium" }, message)
      ),
      {
        duration: duration,
        style: {
          background: "rgba(28, 31, 46, 0.95)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(14, 120, 249, 0.3)", // blue-1 border
          color: "white",
        },
      },
    )

    // Simulate loading delay for better UX
    setTimeout(() => {
      // Dismiss loading toast
      toast.dismiss(toastId)

      // Navigate
      router.push(href)

      // Show success toast after navigation
      setTimeout(() => {
        const routeName = getRouteDisplayName(href)
        toast.success(
          React.createElement(
            "div",
            { className: "flex items-center space-x-3" },
            React.createElement(CheckCircle, { className: "w-4 h-4 text-green-400" }),
            React.createElement(
              "span",
              { className: "text-white font-medium" },
              `Redirected to ${routeName}`
            )
          ),
          {
            duration: 2000,
            style: {
              background: "rgba(28, 31, 46, 0.95)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              color: "white",
            },
          },
        )
      }, 100)
    }, 800)
  }

  const showToast = (
    message: string,
    type: "success" | "error" | "info" | "warning" = "info",
    options: Partial<RedirectOptions> = {},
  ) => {
    const { duration = 3000, showIcon = true } = options

    const icons = {
      success: React.createElement(CheckCircle, { className: "w-4 h-4 text-green-400" }),
      error: React.createElement(AlertCircle, { className: "w-4 h-4 text-red-400" }),
      info: React.createElement(ArrowRight, { className: "w-4 h-4 text-blue-1" }),
      warning: React.createElement(AlertCircle, { className: "w-4 h-4 text-yellow-400" }),
    }

    const colors = {
      success: "rgba(34, 197, 94, 0.3)",
      error: "rgba(239, 68, 68, 0.3)",
      info: "rgba(14, 120, 249, 0.3)", // blue-1
      warning: "rgba(245, 158, 11, 0.3)",
    }

    const toastFn = {
      success: toast.success,
      error: toast.error,
      info: toast.info,
      warning: toast.warning,
    }

    toastFn[type](
      React.createElement(
        "div",
        { className: "flex items-center space-x-3" },
        showIcon && icons[type],
        React.createElement("span", { className: "text-white font-medium" }, message)
      ),
      {
        duration,
        style: {
          background: "rgba(28, 31, 46, 0.95)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${colors[type]}`,
          color: "white",
        },
      },
    )
  }

  return { redirectWithToast, showToast }
}

// Helper function to get display names for routes
const getRouteDisplayName = (href: string): string => {
  const routeNames: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/personal-room": "Personal Room",
    "/upcoming": "Upcoming Meetings",
    "/previous": "Previous Meetings",
    "/recordings": "Recordings",
    "/settings": "Settings",
    "/help": "Help Center",
    "/sign-in": "Sign In",
    "/sign-up": "Sign Up",
    "/": "Home",
  }

  // Handle dynamic routes
  if (href.includes("/meeting/")) {
    return "Meeting Room"
  }

  return routeNames[href] || "Page"
}
