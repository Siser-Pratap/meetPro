"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Zap, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
    
  const stats = [
    { number: "10M+", label: "Active Users", icon: Users },
    { number: "99.9%", label: "Uptime", icon: Zap },
    { number: "150+", label: "Countries", icon: Globe },
    { number: "24/7", label: "Support", icon: Shield },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden pb-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-8 pt-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Badge className="bg-blue-600/10 text-blue-400 border-blue-600/20 px-4 py-2 text-sm font-medium hover:bg-blue-600/20 transition-colors">
            🚀 AI-powered features incoming
            </Badge>
        </motion.div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
            >
              Meet. Connect.
            </motion.span>
            <br />
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Collaborate.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of video conferencing with our secure, feature-rich platform designed for modern teams and seamless collaboration.
          </motion.p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <Link href="/sign-up">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-blue-500/25 group rounded-full"
            >
              Start Free Meeting
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-20 border-t border-slate-800/50 mt-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 bg-slate-800/50 rounded-2xl flex items-center justify-center group-hover:bg-slate-700/50 transition-colors duration-300 shadow-inner">
                  <stat.icon className="w-7 h-7 text-blue-400" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{stat.number}</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
