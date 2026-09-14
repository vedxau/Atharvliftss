import React from "react";
import { INSTAGRAM_POSTS, BRAND } from "../data/site";
import { Instagram, Heart, ExternalLink } from "lucide-react";

export default function InstagramGrid() {
  return (
    <section className="py-20 bg-[#0E0E0E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#00D2FF] font-mono text-xs uppercase tracking-widest block mb-2">
              LATEST FROM THE ATELIER
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
              INSTAGRAM <span className="text-[#00D2FF]">{BRAND.handle}</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/Atharvliftss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-sm font-semibold text-white hover:text-[#00D2FF] transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#00D2FF]" />
            Follow @Atharvliftss
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Tile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/10"
            >
              <img
                src={post.image}
                alt="Atharv Instagram"
                className="w-full h-full object-cover graded group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2">
                <Instagram className="w-6 h-6 mb-1 text-[#00D2FF]" />
                <div className="flex items-center gap-1 text-xs font-semibold">
                  <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
