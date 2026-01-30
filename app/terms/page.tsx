"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 font-sans">
      <Navbar />
      
      <main className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-4 py-1.5 text-sm font-medium rounded-full">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Terms of Service
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
                These Terms of Service (&quot;Terms&quot;) govern your use of the MeetPro website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>

              <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

              <h3 className="flex items-center gap-3 text-2xl font-semibold text-white">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 text-sm font-bold">1</span>
                Acceptance of Terms
              </h3>
              <p>
                By accessing or using our services, you confirm that you can form a binding contract with MeetPro, that you accept these Terms and that you agree to comply with them.
              </p>

              <h3 className="flex items-center gap-3 text-2xl font-semibold text-white mt-12">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 text-sm font-bold">2</span>
                Changes to Terms
              </h3>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the date at the top of these Terms and by posting a notice on our website. Your continued use of the Services after any modification constitutes your acceptance of the new Terms.
              </p>

              <h3 className="flex items-center gap-3 text-2xl font-semibold text-white mt-12">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 text-sm font-bold">3</span>
                User Accounts
              </h3>
              <p>
                When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>

              <h3 className="flex items-center gap-3 text-2xl font-semibold text-white mt-12">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 text-sm font-bold">4</span>
                Intellectual Property
              </h3>
              <p>
                The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of MeetPro and its licensors.
              </p>
              
              <h3 className="flex items-center gap-3 text-2xl font-semibold text-white mt-12">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/10 text-red-400 text-sm font-bold">5</span>
                Limitation of Liability
              </h3>
              <p>
                In no event shall MeetPro, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
