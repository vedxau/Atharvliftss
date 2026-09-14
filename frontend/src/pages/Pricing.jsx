import React from "react";
import { PROGRAMS, BRAND } from "../data/site";
import InquiryForm from "../components/InquiryForm";
import { CheckCircle, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

export default function Pricing() {
  return (
    <div className="pt-28 pb-20 bg-[#121212] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#00D2FF] font-mono text-xs uppercase tracking-widest block">
            TRANSPARENT ATELIER INVESTMENTS
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl text-white tracking-tight uppercase">
            COACHING & <span className="text-[#00D2FF]">PRICING</span>
          </h1>
          <p className="text-lg text-[#8B8D98] leading-relaxed">
            Direct 1-on-1 access to Coach Atharv with zero templated compromises. Select your package below or apply directly.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className={`bg-[#1A1A1A] border rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                prog.popular ? "border-[#00D2FF] shadow-[0_0_35px_rgba(0,210,255,0.15)] bg-[#1D1D1D]" : "border-white/10"
              }`}
            >
              {prog.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00D2FF] text-black text-xs font-bold px-4 py-1 rounded-full font-mono uppercase shadow-lg">
                  MOST POPULAR ATELIER TIER
                </div>
              )}

              <div>
                <h3 className="font-bebas text-3xl text-white tracking-wide mb-1">{prog.title}</h3>
                <p className="text-xs text-[#00D2FF] font-mono uppercase tracking-wider mb-6">{prog.subtitle}</p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-bebas text-5xl text-white">{prog.price}</span>
                  <span className="text-xs text-[#8B8D98]">{prog.period}</span>
                </div>

                <p className="text-sm text-gray-300 mb-8 leading-relaxed">{prog.description}</p>

                <div className="space-y-3 mb-8">
                  {prog.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-200">
                      <CheckCircle className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20Atharv,%20I'm%20interested%20in%20enrolling%20in%20the%20${encodeURIComponent(prog.title)}%20(${prog.price}).`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-sm uppercase text-center transition-all flex items-center justify-center gap-2 ${
                  prog.popular
                    ? "bg-[#00D2FF] text-black hover:bg-[#00D2FF]/90 shadow-[0_0_20px_rgba(0,210,255,0.4)]"
                    : "bg-[#121212] text-white border border-white/10 hover:border-[#00D2FF] hover:text-[#00D2FF]"
                }`}
              >
                APPLY ON WHATSAPP
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Embedded Inquiry Form */}
        <div className="max-w-4xl mx-auto">
          <InquiryForm />
        </div>

      </div>
    </div>
  );
}
