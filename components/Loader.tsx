"use client"

import { Video, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

const Loader = () => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        switch (prev) {
          case "Initializing...":
            return "Loading components..."
          case "Loading components...":
            return "Setting up workspace..."
          case "Setting up workspace...":
            return "Almost ready..."
          default:
            return "Initializing..."
        }
      })
    }, 800)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center animate-pulse shadow-2xl shadow-blue-500/25">
            <Video className="w-10 h-10 text-white" />
          </div>

          {/* Rotating Ring */}
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-blue-400 rounded-2xl animate-spin"></div>

          {/* Outer Glow */}
          <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl animate-ping opacity-20"></div>
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            MeetPro
          </h1>
          <p className="text-slate-400 text-lg">Professional Video Conferencing</p>
        </div>

        {/* Loading Animation */}
        <div className="flex items-center space-x-3 text-slate-300">
          <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
          <span className="text-lg font-medium">{loadingText}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Status Message */}
        <div className="text-center text-slate-500 text-sm max-w-sm">
          <p>Preparing your workspace for the best video conferencing experience...</p>
        </div>
      </div>
    </div>
  )
}

export default Loader
