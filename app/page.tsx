"use client"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Video,
  Users,
  Calendar,
  Shield,
  Monitor,
  Clock,
  ArrowRight,

  Star,
  CheckCircle,
  Zap,
  Globe,
  
} from "lucide-react"
import Link from "next/link"

const HomePage = () => {
  

  const features = [
    {
      icon: Video,
      title: "HD Video Conferencing",
      description: "Crystal clear video quality with adaptive streaming technology for seamless meetings",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      icon: Users,
      title: "Unlimited Participants",
      description: "Host meetings with unlimited participants without compromising on quality",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      icon: Monitor,
      title: "Screen Sharing",
      description: "Share your screen with advanced controls, annotations, and multi-screen support",
      color: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Intelligent scheduling with calendar integration and automated reminders",
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption with advanced security protocols and compliance",
      color: "bg-red-500/10 text-red-400 border-red-500/20",
    },
    {
      icon: Clock,
      title: "Meeting Recording",
      description: "Record meetings with cloud storage, transcription, and easy sharing options",
      color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
  ]

  const stats = [
    { number: "10M+", label: "Active Users", icon: Users },
    { number: "99.9%", label: "Uptime", icon: Zap },
    { number: "150+", label: "Countries", icon: Globe },
    { number: "24/7", label: "Support", icon: Shield },
  ]

  const benefits = [
    "No time limits on meetings",
    "HD video and crystal clear audio",
    "Advanced screen sharing",
    "Meeting recording and playback",
    "Mobile and desktop apps",
    "Enterprise-grade security",
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <nav className="relative z-50 flex items-center justify-between p-6 backdrop-blur-sm bg-slate-950/80 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
            <Video className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            MeetPro
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/sign-in">
            <Button
              variant="ghost"
              className="hover:bg-slate-800 transition-all duration-300 text-slate-300 hover:text-white"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Get Started Free
            </Button>
          </Link>
        </div>
      </nav>

      
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
          <Badge className="bg-blue-600/10 text-blue-400 border-blue-600/20 px-4 py-2 text-sm font-medium">
            🚀 AI-powered features incoming
          </Badge>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Meet. Connect.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Collaborate.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Experience the future of video conferencing with our secure, feature-rich platform designed for modern
              teams and seamless collaboration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-blue-500/25 group"
              >
                Start Free Meeting
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center group-hover:bg-slate-700/50 transition-colors duration-300">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-600/10 text-purple-400 border-purple-600/20 px-4 py-2 text-sm font-medium mb-6">
              ✨ Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything you need for
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                professional meetings
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Discover the tools that make remote collaboration seamless, secure, and productive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 rounded-xl ${feature.color} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white/50 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-green-600/10 text-green-400 border-green-600/20 px-4 py-2 text-sm font-medium mb-6">
                🎯 Why Choose MeetPro
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Built for teams that
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  demand excellence
                </span>
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Join thousands of companies who trust MeetPro for their most important conversations and collaborative
                work sessions.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link href="/sign-up">
                <Button className="bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-green-500/25">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>

            <div className="relative">
              <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 p-1 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-slate-300 font-semibold">4.9/5 Rating</span>
                </div>
                <blockquote className="text-lg text-slate-300 mb-6 italic">
                  &quot;MeetPro has transformed how our distributed team collaborates. The video quality is exceptional, and
                  the features are exactly what we needed for productive meetings.&quot;
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Johnson</div>
                    <div className="text-slate-400 text-sm">CTO, TechCorp</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to revolutionize
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              your meetings?
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Join millions of professionals who trust MeetPro for seamless video conferencing and team collaboration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-800 py-12 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MeetPro</span>
            </div>
            
          </div>
          <div className="border-t hover:cursor-pointer border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <button className="p-3 bg-blue-600 hover:bg-purple-600 text-black rounded-full font-bold italic
            ">
            <a href="https://portfolio-siser-pratap.vercel.app">
              <p>Siser Pratap</p>
            </a>
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
