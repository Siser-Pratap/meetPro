import { Video } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-12 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">MeetPro</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <div className="inline-block px-6 py-2 bg-slate-900/50 hover:bg-slate-900 rounded-full border border-slate-800 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm">
                <p className="text-slate-400 font-medium text-sm flex items-center gap-2">
                    Designed & Built by 
                    <a 
                        href="https://portfolio-siser-pratap.vercel.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-white hover:text-blue-400 transition-colors"
                    >
                        Siser Pratap
                    </a>
                    <span className="text-slate-600">&</span>
                    <a 
                        href="https://www.utkarsh-choudhary.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-white hover:text-blue-400 transition-colors"
                    >
                        Utkarsh Choudhary
                    </a>
                </p>
            </div>
            <p className="text-slate-500 text-sm mt-4">
                © {new Date().getFullYear()} MeetPro. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
