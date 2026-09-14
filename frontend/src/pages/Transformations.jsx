import React from "react";
import { IMAGES } from "../data/site";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Transformations Page (Unrouted as per PRD specification)
 * Ready to be turned back on once real client before/after photos are uploaded.
 */
export default function Transformations() {
  return (
    <div className="pt-28 pb-20 bg-[#121212] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs font-mono">
          <ShieldAlert className="w-4 h-4" />
          PAGE UNROUTED / PENDING REAL CLIENT MEDIA
        </div>

        <h1 className="font-bebas text-6xl text-white tracking-wide">
          TRANSFORMATIONS <span className="text-[#00D2FF]">ATELIER</span>
        </h1>

        <p className="text-gray-400 max-w-lg mx-auto text-sm">
          Real client physique comparisons will be published here upon verification.
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1A1A1A] text-white border border-white/10 hover:border-[#00D2FF] text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
