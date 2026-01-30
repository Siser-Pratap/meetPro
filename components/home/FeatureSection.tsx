"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Users, Monitor, Calendar, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

const FeatureSection = () => {
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
  ];

  return (
    <section className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-600/10 text-purple-400 border-purple-600/20 px-4 py-2 text-sm font-medium">
            ✨ Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need for
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-2">
              professional meetings
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Discover the tools that make remote collaboration seamless, secure, and productive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <Card className="h-full bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group">
                <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl ${feature.color} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                    {feature.description}
                    </p>
                </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
