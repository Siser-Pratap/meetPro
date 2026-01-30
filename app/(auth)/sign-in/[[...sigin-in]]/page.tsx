"use client";

import { SignIn } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

export default function SiginInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-slate-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Video className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">MeetPro</h1>
        </div>

        <SignIn 
          forceRedirectUrl="/dashboard"
          appearance={{
            layout: {
              logoPlacement: 'none',
              socialButtonsVariant: 'iconButton',
            },
            elements: {
              card: "bg-slate-900 border border-slate-800 shadow-xl",
              headerTitle: "text-white",
              headerSubtitle: "text-slate-400",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
              socialButtonsBlockButton: "bg-slate-800 border-slate-700 text-white hover:bg-slate-700",
              formFieldLabel: "text-slate-300",
              formFieldInput: "bg-slate-800 border-slate-700 text-white",
              footerActionLink: "text-blue-400 hover:text-blue-300",
              identityPreviewText: "text-slate-300",
              identityPreviewEditButton: "text-blue-400 hover:text-blue-300",
            }
          }}
        />
      </motion.div>
    </main>
  );
}
