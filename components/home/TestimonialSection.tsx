"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  const benefits = [
    "No time limits on meetings",
    "HD video and crystal clear audio",
    "Advanced screen sharing",
    "Meeting recording and playback",
    "Mobile and desktop apps",
    "Enterprise-grade security",
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-green-600/10 text-green-400 border-green-600/20 px-4 py-2 text-sm font-medium mb-6">
              🎯 Why Choose MeetPro
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Built for teams that
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent ml-2">
                demand excellence
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Join thousands of companies who trust MeetPro for their most important conversations and collaborative work sessions.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/sign-up">
              <Button className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-green-500/25 rounded-full">
                Start Your Free Trial
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl blur-2xl" />
            <Card className="relative bg-slate-800/50 border-slate-700/50 backdrop-blur-xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 p-1 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300 font-semibold">4.9/5 Rating</span>
              </div>
              <blockquote className="text-lg text-slate-300 mb-8 italic leading-relaxed">
                &quot;MeetPro has transformed how our distributed team collaborates. The video quality is exceptional, and the features are exactly what we needed for productive meetings.&quot;
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">SJ</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Sarah Johnson</div>
                  <div className="text-slate-400">CTO, TechCorp</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
