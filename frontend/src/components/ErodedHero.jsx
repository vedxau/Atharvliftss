import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES, BRAND } from "../data/site";
import { ArrowUpRight, Zap, ShieldCheck, Flame } from "lucide-react";
import { Link } from "react-router-dom";

export default function ErodedHero() {
  const { scrollY } = useScroll();
  const erosionScale = useTransform(scrollY, [0, 400], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#121212]">
      {/* SVG Displacement Filter Definition */}
      <svg className="hidden">
        <defs>
          <filter id="erosionFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="25"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#CCFF00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#00D2FF]/30 text-xs font-mono tracking-wider text-[#00D2FF]">
              <Flame className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>BESPOKE PHYSIQUE ATELIER</span>
            </div>

            <h1 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-white">
              CRAFT YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00D2FF] to-[#CCFF00]">
                ULTIMATE FRAME
              </span>
            </h1>

            <p className="text-lg text-[#8B8D98] max-w-xl leading-relaxed">
              Biomechanical hyper-precision training, customized metabolic architecture, and elite 1-on-1 direct coaching by <strong className="text-white">Coach Atharv</strong>. No templated programs. Pure sculpted physique transformation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#00D2FF] text-black font-bold text-base hover:bg-[#00D2FF]/90 transition-all shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:scale-105"
              >
                EXPLORE PROGRAMMES
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20Atharv,%20I'm%20ready%20to%20transform%20my%20physique.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#1A1A1A] text-white font-semibold text-base border border-white/10 hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all"
              >
                DIRECT WHATSAPP
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
              <div>
                <span className="block font-bebas text-3xl text-white">120+</span>
                <span className="text-xs text-[#8B8D98] uppercase tracking-wider">Clients Sculpted</span>
              </div>
              <div>
                <span className="block font-bebas text-3xl text-[#00D2FF]">94%</span>
                <span className="text-xs text-[#8B8D98] uppercase tracking-wider">Retention</span>
              </div>
              <div>
                <span className="block font-bebas text-3xl text-[#CCFF00]">100%</span>
                <span className="text-xs text-[#8B8D98] uppercase tracking-wider">Customized</span>
              </div>
            </div>
          </motion.div>

          {/* Eroded Gritty Photo Sculpture Display */}
          <motion.div
            style={{ opacity }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#1A1A1A] shadow-2xl group">
              {/* Overlay Gritty Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10 pointer-events-none" />
              
              {/* Grayscale Physique Photo with Filter Effect */}
              <img
                src={IMAGES.hero}
                alt="Coach Atharv Physique"
                className="w-full h-full object-cover graded transition-transform duration-700 group-hover:scale-105"
                style={{
                  filter: "grayscale(100%) contrast(120%) brightness(90%)",
                }}
              />

              {/* Dynamic Sculpted Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-[#121212]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[#00D2FF] font-semibold">FOUNDER & COACH</span>
                  <span className="font-bebas text-xl text-white">ATHARV @ATHARVLIFTSS</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00D2FF]/20 border border-[#00D2FF]/40 flex items-center justify-center text-[#00D2FF]">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
