"use client"

import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import MeetingTypeList from "@/components/MeetingTypeList"
import DashboardLayout from "@/components/layout/DashboardLayout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, Users, TrendingUp } from "lucide-react"
import { useGetCalls } from "@/hooks/useGetCalls"

const Dashboard = () => {
  const { user } = useUser()
  const { upcomingCalls, endedCalls, isLoading } = useGetCalls()
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(currentTime)

  // Get next upcoming meeting
  const nextMeeting = upcomingCalls?.[0]
  const nextMeetingTime = nextMeeting?.state?.startsAt
    ? new Date(nextMeeting.state.startsAt).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null

  const stats = [
    {
      title: "Today's Meetings",
      value: upcomingCalls?.length || 0,
      icon: Calendar,
      color: "text-blue-1",
      bgColor: "bg-blue-1/10",
    },
    {
      title: "Total Meetings",
      value: (upcomingCalls?.length || 0) + (endedCalls?.length || 0),
      icon: Users,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      title: "Completed",
      value: endedCalls?.length || 0,
      icon: TrendingUp,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
  ]

  return (
    <DashboardLayout>
      <section className="flex size-full flex-col gap-8 text-white">
        {/* Hero Section */}
        <div className="relative h-[320px] w-full rounded-[20px] bg-gradient-to-br from-blue-1/20 via-dark-2 to-purple-500/20 overflow-hidden animate-fade-in-up">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-1 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative flex h-full flex-col justify-between p-8 lg:p-11">
            {/* Upcoming Meeting Badge */}
            {nextMeetingTime && (
              <Badge className="glassmorphism max-w-fit bg-dark-2/50 border-dark-3/50 text-white backdrop-blur-md animate-fade-in-up">
                <Clock className="w-4 h-4 mr-2" />
                Next meeting at: {nextMeetingTime}
              </Badge>
            )}

            {/* Time and Date */}
            <div className="flex flex-col gap-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-5xl font-extrabold lg:text-7xl bg-gradient-to-r from-white to-sky-1 bg-clip-text text-transparent">
                {time}
              </h1>
              <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
              <p className="text-sm text-sky-1/80 mt-2">
                Welcome back, {user?.firstName || user?.username || "User"}! 👋
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {stats.map((stat, index) => (
            <Card
              key={stat.title}
              className="bg-dark-2/80 border-dark-3/50 backdrop-blur-sm hover:bg-dark-2/90 hover:border-blue-1/30 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-sky-1 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">{isLoading ? "..." : stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Meeting Actions */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-1 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
              <p className="text-sky-1 text-sm">Start or schedule your meetings</p>
            </div>
          </div>
          <MeetingTypeList />
        </div>

        {/* Recent Activity */}
        {((upcomingCalls?.length ?? 0) > 0 || (endedCalls?.length ?? 0) > 0) && (
          <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
                <p className="text-sky-1 text-sm">Your latest meetings and sessions</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Meetings */}
              {upcomingCalls?.slice(0, 2).map((meeting, index) => (
                <Card
                  key={meeting.id}
                  className="bg-dark-2/80 border-dark-3/50 backdrop-blur-sm hover:bg-dark-2/90 hover:border-blue-1/30 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-1/20 rounded-lg flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-blue-1" />
                        </div>
                        <Badge className="bg-blue-1/10 text-blue-1 border-blue-1/30">Upcoming</Badge>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
                      {meeting.state?.custom?.description || "Scheduled Meeting"}
                    </h3>
                    <p className="text-sm text-sky-1">
                      {meeting.state?.startsAt ? new Date(meeting.state.startsAt).toLocaleString() : "No date set"}
                    </p>
                  </CardContent>
                </Card>
              ))}

              {/* Recent Completed */}
              {endedCalls?.slice(0, 2).map((meeting, index) => (
                <Card
                  key={meeting.id}
                  className="bg-dark-2/80 border-dark-3/50 backdrop-blur-sm hover:bg-dark-2/90 hover:border-green-400/30 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center">
                          <Clock className="w-4 h-4 text-green-400" />
                        </div>
                        <Badge className="bg-green-400/10 text-green-400 border-green-400/30">Completed</Badge>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
                      {meeting.state?.custom?.description || "Previous Meeting"}
                    </h3>
                    <p className="text-sm text-sky-1">
                      {meeting.state?.startsAt
                        ? new Date(meeting.state.startsAt).toLocaleString()
                        : "No date available"}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </section>
    </DashboardLayout>
  )
}

export default Dashboard
