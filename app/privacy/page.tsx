"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 font-sans">
      <Navbar />
      
      <main className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 text-sm font-medium rounded-full">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-li:text-slate-300">
              <p className="lead text-xl text-slate-300">
                At MeetPro, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our video conferencing services.
              </p>

              <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

              <h3 className="flex items-center gap-3 text-2xl font-semibold text-white">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 text-sm font-bold">1</span>
                Information We Collect
              </h3>
              <p>
                We collect information that you strictly provide to us when you register an account, inclusive of your name, email address, and any other contact details. We also automatically collect certain information when you use our services, such as your IP address, browser type, and operating system.
              </p>

              <h3 className="flex items-center gap-3 text-2xl font-semibold text-white mt-12">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 text-sm font-bold">2</span>
                How We Use Your Information
              </h3>
              <p>
                We use the collected information to:
              </p>
              <ul className="space-y-2">
                <li>Provide, operate, and maintain our website and services.</li>
                <li>Improve, personalize, and expand our website and services.</li>
                <li>Understand and analyze how you use our website and services.</li>
                <li>Develop new products, services, features, and functionality.</li>
                <li>Communicate with you, either directly or through one of our partners.</li>
              </ul>

              <h3 className="flex items-center gap-3 text-2xl font-semibold text-white mt-12">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10 text-green-400 text-sm font-bold">3</span>
                Data Security
              </h3>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>

              <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-6 mt-12">
                <h4 className="text-blue-100 font-semibold mb-2 mt-0">Have questions?</h4>
                <p className="text-blue-200/80 mb-0">
                  If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@meetpro.com" className="text-blue-400 hover:text-blue-300">support@meetpro.com</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
