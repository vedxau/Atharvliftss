import React from "react";
import { NUTRITION_PHILOSOPHY, IMAGES, BRAND } from "../data/site";
import { Utensils, Zap, Shield, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Nutrition() {
  return (
    <div className="pt-28 pb-20 bg-[#121212] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest block">
            METABOLIC BIO-MATCHING
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl text-white tracking-tight uppercase">
            NUTRITION <span className="text-[#CCFF00]">STRATEGY</span>
          </h1>
          <p className="text-lg text-[#8B8D98] leading-relaxed">
            Per PRD architecture: Nutrition and meal photos stay in rich color, reflecting nutrient density and flexible, non-restrictive real food protocols.
          </p>
        </div>

        {/* Hero Plate Feature */}
        <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-6 p-8 lg:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] text-xs font-mono">
              <Utensils className="w-3.5 h-3.5" />
              NO STARVATION DIETS
            </div>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
              PRECISION MACROS WITHOUT STARVATION
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We structure your intake around training performance. Carbs are utilized as targeted glycogen replenishment around your heavy workout windows, while lean protein and essential lipids support tissue recovery.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#CCFF00]" />
                <span>Custom macro ratios for training vs non-training days</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#CCFF00]" />
                <span>Integration with Indian cuisines, dining out, & travel</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#CCFF00]" />
                <span>Micronutrient & digestive health supplement protocols</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#CCFF00] text-black font-bold text-sm hover:bg-[#CCFF00]/90 transition-all"
              >
                GET YOUR NUTRITION PLAN
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 h-full min-h-[350px]">
            {/* Note: Food photos stay in COLOUR as per PRD rule! */}
            <img
              src={IMAGES.plate}
              alt="Nutrient Dense Meal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NUTRITION_PHILOSOPHY.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bebas text-2xl text-white tracking-wide">{pillar.title}</h3>
                <p className="text-xs text-[#8B8D98] leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
