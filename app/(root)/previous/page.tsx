"use client"

import CallList from "@/components/CallList"
import DashboardLayout from "@/components/layout/DashboardLayout"
import { Clock } from "lucide-react"

const PreviousPage = () => {
  return (
    <DashboardLayout>
      <section className="flex size-full flex-col gap-10 text-white">
        {/* Header Section */}
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-blue-1 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold lg:text-4xl text-white">Previous Calls</h1>
            </div>
          </div>
          <p className="text-sky-1 text-sm lg:text-base ml-15">Review your completed meetings and recordings</p>
        </div>

        {/* Call List */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <CallList type="ended" />
        </div>
      </section>
    </DashboardLayout>
  )
}

export default PreviousPage
