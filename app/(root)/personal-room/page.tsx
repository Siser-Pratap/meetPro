"use client"

import { useUser } from "@clerk/nextjs"
import { useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useState } from "react"
import { useGetCallById } from "@/hooks/useGetCallById"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Play, Users, Hash, LinkIcon, Lightbulb } from "lucide-react"
import { useRedirectToast } from "@/hooks/useRedirectToast"
import DashboardLayout from "@/components/layout/DashboardLayout"

const Table = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "topic":
        return Users
      case "meeting id":
        return Hash
      case "invite link":
        return LinkIcon
      default:
        return Lightbulb
    }
  }

  const Icon = getIcon(title)
  const isLink = title.toLowerCase() === "invite link"

  const handleCopy = async () => {
    if (isLink) {
      await navigator.clipboard.writeText(description)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  return (
    <Card className="group bg-dark-2/80 border-dark-3/50 backdrop-blur-sm hover:bg-dark-2/90 hover:border-blue-1/30 transition-all duration-300 transform hover:scale-[1.01] animate-fade-in-up">
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-4 xl:flex-row xl:items-center">
          <div className="flex items-center gap-3 xl:min-w-48">
            <div className="w-10 h-10 bg-blue-1 rounded-lg flex items-center justify-center group-hover:bg-blue-1/90 transition-all duration-300">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-base font-medium text-sky-1 lg:text-xl group-hover:text-white transition-colors duration-300">
              {title}:
            </h1>
          </div>

          <div className="flex-1 flex items-center justify-between gap-4">
            <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl text-white group-hover:text-sky-1 transition-colors duration-300">
              {description}
            </h1>

            {isLink && (
              <Button
                size="sm"
                variant="ghost"
                onClick={handleCopy}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-dark-3/50 text-xs px-3 py-1 h-8 text-sky-1"
              >
                {isCopied ? (
                  <>
                    <div className="w-3 h-3 border border-blue-1 rounded-full mr-1 flex items-center justify-center">
                      <div className="w-1 h-1 bg-blue-1 rounded-full"></div>
                    </div>
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const PersonalRoom = () => {
  
  const { user } = useUser()
  const client = useStreamVideoClient()
  const [isStarting, setIsStarting] = useState(false)
  const [isCopying, setIsCopying] = useState(false)
  const { redirectWithToast, showToast } = useRedirectToast()

  const meetingId = user?.id
  const { call } = useGetCallById(meetingId!)

  const startRoom = async () => {
    if (!client || !user) return

    setIsStarting(true)
    try {
      const newCall = client.call("default", meetingId!)
      if (!call) {
        await newCall.getOrCreate({
          data: {
            starts_at: new Date().toISOString(),
          },
        })
      }

      // Use the new redirect with toast system
      redirectWithToast(`/meeting/${meetingId}?personal=true`, {
        message: "Joining your personal meeting room...",
        type: "loading",
      })
    } catch (error) {
      console.error("Error starting room:", error)
      showToast("Failed to start meeting. Please try again.", "error")
    } finally {
      setIsStarting(false)
    }
  }

  const handleCopyInvitation = async () => {
    setIsCopying(true)
    try {
      await navigator.clipboard.writeText(meetingLink)
      showToast("Meeting invitation link copied to clipboard!", "success")
    } catch (error) {
      showToast("Failed to copy link. Please try again.", "error")
    } finally {
      setIsCopying(false)
    }
  }

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-dark-1 p-6 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, ${getComputedStyle(document.documentElement).getPropertyValue("--blue-1") || "#0E78F9"} 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${getComputedStyle(document.documentElement).getPropertyValue("--blue-1") || "#0E78F9"} 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <section className="relative z-10 flex size-full flex-col gap-10 text-white max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-blue-1 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold lg:text-4xl text-white">Personal Meeting Room</h1>
              </div>
            </div>
            <p className="text-sky-1 text-sm lg:text-base ml-15">Your dedicated space for instant meetings</p>
          </div>

          {/* Meeting Details Cards */}
          <div className="flex w-full flex-col gap-6 xl:max-w-[900px]">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Table title="Topic" description={`${user?.username}'s Meeting Room`} />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Table title="Meeting ID" description={meetingId!} />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Table title="Invite Link" description={meetingLink} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              className="bg-blue-1 hover:bg-blue-1/90 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
              onClick={startRoom}
              disabled={isStarting}
            >
              <div className="flex items-center justify-center">
                {isStarting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Starting Meeting...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Start Meeting
                  </>
                )}
              </div>
            </Button>

            <Button
              variant="outline"
              className="border-2 border-dark-3 hover:border-blue-1/50 bg-dark-3/50 hover:bg-dark-3/70 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl text-white"
              onClick={handleCopyInvitation}
              disabled={isCopying}
            >
              <div className="flex items-center justify-center">
                {isCopying ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Copying...
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Copy Invitation
                  </>
                )}
              </div>
            </Button>
          </div>

          {/* Quick Tips Card */}
          <Card
            className="bg-dark-2/80 border-dark-3/50 backdrop-blur-sm hover:bg-dark-2/90 hover:border-blue-1/30 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-1 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quick Tips</h3>
                  <ul className="text-sky-1 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-1 rounded-full"></div>
                      Your personal room is always available - no scheduling needed
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-1 rounded-full"></div>
                      Share the invite link with participants to join instantly
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-1 rounded-full"></div>
                      Your meeting ID remains the same for easy access
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Card className="bg-dark-2/80 border-dark-3/50 backdrop-blur-sm hover:bg-dark-2/90 hover:border-blue-1/30 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="w-8 h-8 bg-blue-1 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <p className="text-xs text-sky-1">Unlimited</p>
                <p className="text-sm font-semibold text-white">Participants</p>
              </CardContent>
            </Card>

            <Card className="bg-dark-2/80 border-dark-3/50 backdrop-blur-sm hover:bg-dark-2/90 hover:border-blue-1/30 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="w-8 h-8 bg-blue-1 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <p className="text-xs text-sky-1">HD Quality</p>
                <p className="text-sm font-semibold text-white">Video & Audio</p>
              </CardContent>
            </Card>

            <Card className="bg-dark-2/80 border-dark-3/50 backdrop-blur-sm hover:bg-dark-2/90 hover:border-blue-1/30 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="w-8 h-8 bg-blue-1 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <LinkIcon className="w-4 h-4 text-white" />
                </div>
                <p className="text-xs text-sky-1">Instant</p>
                <p className="text-sm font-semibold text-white">Access</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

export default PersonalRoom
