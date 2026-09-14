import React from "react";
import { BRAND, IMAGES } from "../data/site";
import { Award, ShieldCheck, Dumbbell, Target, CheckCircle2, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="pt-28 pb-20 space-y-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-[#00D2FF] font-mono text-xs uppercase tracking-widest block">
            ABOUT ATHARV
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl text-white tracking-tight uppercase">
            THE ATELIER <span className="text-[#00D2FF]">PHILOSOPHY</span>
          </h1>
          <p className="text-lg text-[#8B8D98] leading-relaxed">
            I don't sell generic 12-week workout PDF routines. I run a bespoke physique atelier designed to sculpt proportional, high-density physiques through strict biomechanical efficiency and metabolic bio-matching.
          </p>
        </div>

        {/* Coach Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#1A1A1A] shadow-2xl">
              <img
                src={IMAGES.sideProfile}
                alt="Coach Atharv"
                className="w-full h-full object-cover graded"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-bebas text-3xl text-white block">ATHARV</span>
                <span className="text-xs font-mono text-[#00D2FF]">HEAD COACH & PHYSIQUE ARCHITECT</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-bebas text-4xl text-white tracking-wide">
              BIOMECHANICS OVER EGO LIFTING
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Most lifters spend years working hard in the gym without seeing the hypertrophy they deserve. The issue is rarely lack of effort—it is almost always <strong className="text-[#00D2FF]">flawed movement execution</strong> and mismatched leverage mechanics.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every client under my coaching undergoes a total technique audit. We align joint vectors to target muscle fiber direction, ensuring every rep directly stimulates muscle growth rather than wearing out joints.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-[#1A1A1A] p-5 rounded-xl border border-white/10 space-y-2">
                <Dumbbell className="w-6 h-6 text-[#00D2FF]" />
                <h4 className="font-bebas text-xl text-white">Biomechanical Alignment</h4>
                <p className="text-xs text-[#8B8D98]">Joint-friendly load distribution tailored to individual torso-to-limb ratios.</p>
              </div>

              <div className="bg-[#1A1A1A] p-5 rounded-xl border border-white/10 space-y-2">
                <Zap className="w-6 h-6 text-[#CCFF00]" />
                <h4 className="font-bebas text-xl text-white">Metabolic Calibration</h4>
                <p className="text-xs text-[#8B8D98]">Nutrient timing structured around training windows for maximal insulin efficiency.</p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#00D2FF] text-black font-bold text-sm hover:bg-[#00D2FF]/90 transition-all shadow-[0_0_20px_rgba(0,210,255,0.3)]"
              >
                APPLY FOR COACHING
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
