"use client";

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
        <Navbar />
      
        <main>
            <HeroSection />
            <FeatureSection />
            <TestimonialSection />
            <CTASection />
        </main>

        <Footer />
    </div>
  );
};

export default HomePage;
