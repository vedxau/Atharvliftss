import React from "react";
import { Link } from "react-router-dom";
import { BRAND } from "../data/site";
import { Dumbbell, Instagram, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 text-[#8B8D98] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF]">
                <Dumbbell className="w-5 h-5 transform -rotate-45" />
              </div>
              <span className="font-bebas text-2xl tracking-wider text-white">
                ATHARV<span className="text-[#00D2FF]">LIFTS</span>
                <span className="text-[#00D2FF] text-lg uppercase font-sans font-black">s</span>
              </span>
            </Link>
            <p className="text-sm max-w-md text-[#8B8D98] leading-relaxed">
              Bespoke physique atelier & premium online coaching. Science-based hyper-customized hypertrophy programming, biomechanical form audits, and metabolic precision.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com/Atharvliftss"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:text-[#00D2FF] hover:border-[#00D2FF] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:text-[#CCFF00] hover:border-[#CCFF00] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:text-[#00D2FF] hover:border-[#00D2FF] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#00D2FF] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#00D2FF] transition-colors">About Atharv</Link></li>
              <li><Link to="/programs" className="hover:text-[#00D2FF] transition-colors">Programs</Link></li>
              <li><Link to="/nutrition" className="hover:text-[#00D2FF] transition-colors">Nutrition Strategy</Link></li>
              <li><Link to="/pricing" className="hover:text-[#00D2FF] transition-colors">Coaching & Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-[#00D2FF] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider text-white mb-4">Direct Atelier</h4>
            <div className="space-y-3 text-sm">
              <p>
                <span className="block text-xs uppercase text-white/40 tracking-wider">Coach</span>
                <span className="text-white font-semibold">{BRAND.coach}</span>
              </p>
              <p>
                <span className="block text-xs uppercase text-white/40 tracking-wider">WhatsApp</span>
                <a href={`https://wa.me/${BRAND.whatsapp}`} className="text-[#CCFF00] font-mono hover:underline">{BRAND.whatsappFormatted}</a>
              </p>
              <p>
                <span className="block text-xs uppercase text-white/40 tracking-wider">Inquiry Email</span>
                <a href={`mailto:${BRAND.email}`} className="text-white hover:text-[#00D2FF] transition-colors">{BRAND.email}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Crafted with Precision in India</p>
        </div>
      </div>
    </footer>
  );
}
