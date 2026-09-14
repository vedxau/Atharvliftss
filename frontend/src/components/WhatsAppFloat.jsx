import React from "react";
import { BRAND } from "../data/site";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20Atharv,%20I'm%20interested%20in%20physique%20coaching!`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] text-black font-semibold shadow-2xl hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-black text-[#25D366]" />
      <span className="hidden sm:inline text-sm font-bold tracking-wide">
        Chat with Atharv
      </span>
    </a>
  );
}
