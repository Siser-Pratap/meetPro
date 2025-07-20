"use client"

import type { ReactNode } from "react"
import Navbar from "../navigation/Navbar"
import Sidebar from "../navigation/Sidebar"
import MobileBottomNav from "../navigation/MobileBottomNav"
import Breadcrumb from "../navigation/BreadCrumb"

interface DashboardLayoutProps {
  children: ReactNode
  showBreadcrumb?: boolean
  breadcrumbItems?: Array<{ label: string; href?: string }>
}

const DashboardLayout = ({ children, showBreadcrumb = true, breadcrumbItems }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top Navigation */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-0 md:ml-64 pt-16 min-h-screen">
        <div className="p-6">
          {/* Breadcrumb */}
          {showBreadcrumb && (
            <div className="mb-6">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          )}

          {/* Page Content */}
          <div className="pb-20 md:pb-6">{children}</div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  )
}

export default DashboardLayout
