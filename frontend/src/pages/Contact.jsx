import React from "react";
import { BRAND } from "../data/site";
import InquiryForm from "../components/InquiryForm";
import { MessageCircle, Mail, MapPin, Instagram, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-28 pb-20 bg-[#121212] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-[#00D2FF] font-mono text-xs uppercase tracking-widest block">
            DIRECT ATELIER CONTACT
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl text-white tracking-tight uppercase">
            GET IN <span className="text-[#00D2FF]">TOUCH</span>
          </h1>
          <p className="text-lg text-[#8B8D98] leading-relaxed">
            Have questions before applying? Reach out directly to Coach Atharv via WhatsApp or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Details Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#1A1A1A] border border-white/10 p-8 rounded-2xl space-y-6">
              <h3 className="font-bebas text-3xl text-white tracking-wide">DIRECT CONTACT</h3>
              
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#121212] border border-white/10 hover:border-[#CCFF00] transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-[#8B8D98] block">WhatsApp Direct</span>
                    <span className="font-mono text-white group-hover:text-[#CCFF00] font-semibold">
                      {BRAND.whatsappFormatted}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#121212] border border-white/10 hover:border-[#00D2FF] transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#00D2FF]/10 flex items-center justify-center text-[#00D2FF]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-[#8B8D98] block">Inquiry Email</span>
                    <span className="text-white group-hover:text-[#00D2FF] font-semibold">
                      {BRAND.email}
                    </span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/Atharvliftss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#121212] border border-white/10 hover:border-pink-500 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-[#8B8D98] block">Instagram</span>
                    <span className="text-white group-hover:text-pink-400 font-semibold">
                      {BRAND.handle}
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-[#8B8D98] space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00D2FF]" />
                  <span>Response Time: Within 12-24 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#CCFF00]" />
                  <span>Location: India (Global Online Coaching)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>

        </div>

      </div>
    </div>
  );
}
