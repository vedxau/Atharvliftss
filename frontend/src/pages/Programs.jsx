import React from "react";
import { PROGRAMS, IMAGES } from "../data/site";
import { CheckCircle, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Programs() {
  return (
    <div className="pt-28 pb-20 bg-[#121212] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-[#00D2FF] font-mono text-xs uppercase tracking-widest block">
            CUSTOM SCULPTING ARCHITECTURE
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl text-white tracking-tight uppercase">
            COACHING <span className="text-[#00D2FF]">PROGRAMMES</span>
          </h1>
          <p className="text-lg text-[#8B8D98] leading-relaxed">
            Choose the tier of engagement that matches your athletic goals. Every programme features direct technique audits and metabolic guidance from Atharv.
          </p>
        </div>

        <div className="space-y-16">
          {PROGRAMS.map((prog, index) => (
            <div
              key={prog.id}
              className={`bg-[#1A1A1A] border rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                prog.popular ? "border-[#00D2FF] shadow-[0_0_40px_rgba(0,210,255,0.15)]" : "border-white/10"
              }`}
            >
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#121212] border border-white/10">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover graded"
                  />
                </div>
              </div>

              <div className={`lg:col-span-7 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {prog.popular && (
                  <span className="inline-block bg-[#00D2FF] text-black text-xs font-bold px-3 py-1 rounded-full font-mono uppercase">
                    RECOMMENDED TIER
                  </span>
                )}
                <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">{prog.title}</h2>
                <p className="text-xs text-[#00D2FF] font-mono uppercase tracking-widest">{prog.subtitle}</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-bebas text-5xl text-white">{prog.price}</span>
                  <span className="text-sm text-[#8B8D98]">{prog.period}</span>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">{prog.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {prog.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-200">
                      <CheckCircle className="w-4 h-4 text-[#CCFF00] shrink-0 mt-1" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#00D2FF] text-black font-bold text-sm hover:bg-[#00D2FF]/90 transition-all shadow-[0_0_20px_rgba(0,210,255,0.3)]"
                  >
                    ENROLL IN THIS PROGRAMME
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
