"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-600/10 text-green-400 border-green-600/20 px-4 py-2 text-sm font-medium">
              Support
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Have a question or need help? We&apos;d love to hear from you. customized solutions for enterprise needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <div className="space-y-6">
                    <Card className="bg-slate-900/50 border-slate-800 p-6 flex items-start space-x-4 hover:border-blue-500/30 transition-colors">
                        <div className="bg-blue-500/10 p-3 rounded-lg">
                            <Mail className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Email Us</h3>
                            <p className="text-slate-400">Our friendly team is here to help.</p>
                            <a href="mailto:support@meetpro.com" className="text-blue-400 hover:text-blue-300 font-medium mt-1 block">support@meetpro.com</a>
                        </div>
                    </Card>

                    <Card className="bg-slate-900/50 border-slate-800 p-6 flex items-start space-x-4 hover:border-purple-500/30 transition-colors">
                        <div className="bg-purple-500/10 p-3 rounded-lg">
                            <MapPin className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Office</h3>
                            <p className="text-slate-400">Come say hello at our office HQ.</p>
                            <p className="text-slate-300 mt-1">100 Smith Street<br />Collingwood VIC 3066 AU</p>
                        </div>
                    </Card>

                    <Card className="bg-slate-900/50 border-slate-800 p-6 flex items-start space-x-4 hover:border-green-500/30 transition-colors">
                        <div className="bg-green-500/10 p-3 rounded-lg">
                            <Phone className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Phone</h3>
                            <p className="text-slate-400">Mon-Fri from 8am to 5pm.</p>
                            <a href="tel:+15550000000" className="text-green-400 hover:text-green-300 font-medium mt-1 block">+1 (555) 000-0000</a>
                        </div>
                    </Card>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Card className="bg-slate-900/80 border-slate-800 p-8">
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">First name</label>
                                <Input className="bg-slate-950 border-slate-800 focus:border-blue-500" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Last name</label>
                                <Input className="bg-slate-950 border-slate-800 focus:border-blue-500" placeholder="Doe" />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Email</label>
                            <Input className="bg-slate-950 border-slate-800 focus:border-blue-500" placeholder="john@example.com" type="email" />
                        </div>

                        <div className="space-y-2">
                             <label className="text-sm font-medium text-slate-300">Message</label>
                             <Textarea className="bg-slate-950 border-slate-800 focus:border-blue-500 min-h-[150px]" placeholder="How can we help you?" />
                        </div>

                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                            Send Message
                        </Button>
                    </form>
                </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
