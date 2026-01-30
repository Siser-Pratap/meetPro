"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="z-50 flex items-center justify-between p-6 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50 sticky top-0">
      <Link href="/" className="flex items-center space-x-3 group">
        <motion.div 
          className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Video className="w-6 h-6 text-white" />
        </motion.div>
        <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:to-white transition-all duration-300">
          MeetPro
        </span>
      </Link>
      
      <div className="flex items-center space-x-4">
        <Link href="/sign-in">
          <Button
            variant="ghost"
            className="hover:bg-slate-800/50 transition-all duration-300 text-slate-300 hover:text-white"
          >
            Sign In
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            Get Started Free
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
