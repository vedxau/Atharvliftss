import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BRAND, NAV_LINKS } from "../data/site";
import { Dumbbell, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF] group-hover:scale-105 transition-transform">
            <Dumbbell className="w-5 h-5 transform -rotate-45" />
          </div>
          <span className="font-bebas text-2xl tracking-wider text-white">
            ATHARV<span className="text-[#00D2FF]">LIFTS</span>
            <span className="text-[#00D2FF] text-lg uppercase font-sans font-black tracking-normal">s</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wider font-semibold transition-colors relative py-1 ${
                  isActive
                    ? "text-[#00D2FF]"
                    : "text-[#8B8D98] hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00D2FF] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20Atharv,%20I'm%20interested%20in%20coaching!`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-[#00D2FF] text-black font-semibold text-sm hover:bg-[#00D2FF]/90 transition-all shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_25px_rgba(0,210,255,0.5)]"
          >
            Apply Now
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00D2FF]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121212] border-b border-white/10 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-lg font-bebas tracking-wide py-2 ${
                location.pathname === link.path ? "text-[#00D2FF]" : "text-[#8B8D98] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20Atharv,%20I'm%20interested%20in%20coaching!`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center flex items-center justify-center gap-2 py-3 rounded-md bg-[#00D2FF] text-black font-semibold text-sm"
          >
            Apply Now
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
