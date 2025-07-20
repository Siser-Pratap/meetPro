"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Tab {
  id: string
  label: string
  badge?: string | number
  disabled?: boolean
}

interface TabNavigationProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
  className?: string
  variant?: "default" | "pills" | "underline"
}

const TabNavigation = ({ tabs, activeTab, onTabChange, className = "", variant = "default" }: TabNavigationProps) => {
  const getTabStyles = (tab: Tab, isActive: boolean) => {
    const baseStyles = "transition-all duration-300 font-medium"

    switch (variant) {
      case "pills":
        return `${baseStyles} px-4 py-2 rounded-lg ${
          isActive
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
            : "text-slate-400 hover:text-white hover:bg-slate-800/50"
        } ${tab.disabled ? "opacity-50 cursor-not-allowed" : ""}`

      case "underline":
        return `${baseStyles} px-4 py-3 border-b-2 ${
          isActive
            ? "border-blue-400 text-blue-400"
            : "border-transparent text-slate-400 hover:text-white hover:border-slate-600"
        } ${tab.disabled ? "opacity-50 cursor-not-allowed" : ""}`

      default:
        return `${baseStyles} px-4 py-2 ${
          isActive ? "text-blue-400 bg-blue-600/10" : "text-slate-400 hover:text-white hover:bg-slate-800/50"
        } ${tab.disabled ? "opacity-50 cursor-not-allowed" : ""}`
    }
  }

  return (
    <div className={`flex items-center ${variant === "underline" ? "border-b border-slate-800" : ""} ${className}`}>
      <div className={`flex ${variant === "pills" ? "space-x-2" : "space-x-1"}`}>
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onTabChange(tab.id)}
            className={getTabStyles(tab, activeTab === tab.id)}
          >
            <span>{tab.label}</span>
            {tab.badge && (
              <Badge
                className={`ml-2 text-xs ${
                  activeTab === tab.id
                    ? "bg-white/20 text-white border-white/30"
                    : "bg-slate-700 text-slate-300 border-slate-600"
                }`}
              >
                {tab.badge}
              </Badge>
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default TabNavigation
