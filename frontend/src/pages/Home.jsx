import React from "react";
import ErodedHero from "../components/ErodedHero";
import InquiryForm from "../components/InquiryForm";
import InstagramGrid from "../components/InstagramGrid";
import { PROGRAMS, TESTIMONIALS, STATS, IMAGES, BRAND } from "../data/site";
import { ArrowUpRight, CheckCircle, Flame, Star, Award, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Signature Eroded Hero Section */}
      <ErodedHero />

      {/* Marquee Banner */}
      <div className="bg-[#1A1A1A] border-y border-white/10 py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 font-bebas text-2xl tracking-widest text-[#00D2FF]">
          <span>★ HYPERTROPHY ARCHITECTURE</span>
          <span>★ BIOMECHANICAL AUDITS</span>
          <span>★ METABOLIC PRECISION</span>
          <span>★ STAGE CONDITIONING</span>
          <span>★ DIRECT 1-ON-1 COACHING</span>
          <span>★ ATHARVLIFTSs ATELIER</span>
          <span>★ HYPERTROPHY ARCHITECTURE</span>
          <span>★ BIOMECHANICAL AUDITS</span>
          <span>★ METABOLIC PRECISION</span>
          <span>★ STAGE CONDITIONING</span>
        </div>
      </div>

      {/* Programs Preview Section */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#00D2FF] font-mono text-xs uppercase tracking-widest block">
              ENGINEERED PROGRAMMING
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-tight">
              SCULPTURE <span className="text-[#00D2FF]">PROGRAMMES</span>
            </h2>
            <p className="text-[#8B8D98] text-base">
              Each programme is tailor-built for your specific muscle insertion mechanics, bone structure, and lifestyle metabolic requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className={`bg-[#1A1A1A] border rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${
                  prog.popular ? "border-[#00D2FF] shadow-[0_0_30px_rgba(0,210,255,0.15)]" : "border-white/10"
                }`}
              >
                {prog.popular && (
                  <div className="absolute top-4 right-4 bg-[#00D2FF] text-black text-xs font-bold px-3 py-1 rounded-full font-mono uppercase">
                    MOST POPULAR
                  </div>
                )}
                <div>
                  <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-[#121212]">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover graded"
                    />
                  </div>
                  <h3 className="font-bebas text-3xl text-white tracking-wide mb-1">{prog.title}</h3>
                  <p className="text-xs text-[#00D2FF] font-mono uppercase tracking-wider mb-4">{prog.subtitle}</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-bebas text-4xl text-white">{prog.price}</span>
                    <span className="text-xs text-[#8B8D98]">{prog.period}</span>
                  </div>
                  <p className="text-sm text-[#8B8D98] mb-6 leading-relaxed">{prog.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {prog.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/pricing"
                  className={`w-full py-3 rounded-lg font-bold text-sm uppercase text-center transition-all flex items-center justify-center gap-1 ${
                    prog.popular
                      ? "bg-[#00D2FF] text-black hover:bg-[#00D2FF]/90 shadow-[0_0_20px_rgba(0,210,255,0.3)]"
                      : "bg-[#121212] text-white border border-white/10 hover:border-[#00D2FF] hover:text-[#00D2FF]"
                  }`}
                >
                  SELECT PROGRAMME
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Client Quotes */}
      <section className="py-24 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest block mb-2">
              REAL CLIENT EXPERIENCES
            </span>
            <h2 className="font-bebas text-5xl text-white tracking-wide">TESTIMONIALS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, i) => (
              <div
                key={i}
                className="bg-[#121212] border border-white/10 p-8 rounded-2xl space-y-4 relative"
              >
                <div className="flex items-center gap-1 text-[#CCFF00]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#CCFF00]" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 italic leading-relaxed">"{item.quote}"</p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-bebas text-xl text-white">{item.client}</h4>
                    <span className="text-xs text-[#8B8D98] block">{item.role}</span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#00D2FF]/10 text-[#00D2FF] border border-[#00D2FF]/20">
                    {item.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>

      {/* Instagram Grid */}
      <InstagramGrid />
    </div>
  );
}
