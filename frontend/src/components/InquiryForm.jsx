import React, { useState } from "react";
import axios from "axios";
import { BRAND } from "../data/site";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "Hypertrophy",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";

    try {
      await axios.post(`${backendUrl}/api/inquiries`, formData, {
        headers: { "Content-Type": "application/json" },
        timeout: 8000,
      });
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: "", email: "", phone: "", goal: "Hypertrophy", message: "" });
    } catch (err) {
      console.warn("Backend API unavailable, submitting via direct fallback:", err);
      // Fallback: Open WhatsApp with prefilled message
      const waText = encodeURIComponent(
        `Hi Atharv! I'm submitting an inquiry.\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nGoal: ${formData.goal}\nMessage: ${formData.message}`
      );
      window.open(`https://wa.me/${BRAND.whatsapp}?text=${waText}`, "_blank");
      setStatus({ loading: false, success: true, error: null });
    }
  };

  return (
    <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
      <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide mb-2">
        APPLICATION & INQUIRY
      </h3>
      <p className="text-sm text-[#8B8D98] mb-6">
        Submit your details to apply for direct 1-on-1 coaching with Atharv.
      </p>

      {status.success ? (
        <div className="bg-[#00D2FF]/10 border border-[#00D2FF]/30 p-6 rounded-xl text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-[#00D2FF] mx-auto" />
          <h4 className="font-bebas text-2xl text-white tracking-wide">APPLICATION RECEIVED</h4>
          <p className="text-sm text-gray-300">
            Atharv will personally review your inquiry and reach out within 24 hours.
          </p>
          <button
            onClick={() => setStatus({ loading: false, success: false, error: null })}
            className="mt-4 px-6 py-2 rounded-md bg-[#121212] text-xs font-mono uppercase text-[#00D2FF] border border-[#00D2FF]/40 hover:bg-[#00D2FF] hover:text-black transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#8B8D98] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D2FF] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#8B8D98] mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D2FF] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#8B8D98] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="rahul@example.com"
                className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D2FF] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#8B8D98] mb-1">
                Primary Goal
              </label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D2FF] transition-colors"
              >
                <option value="Hypertrophy">Hypertrophy & Mass</option>
                <option value="Contest Prep">Contest & Stage Prep</option>
                <option value="Recomposition">Body Recomposition</option>
                <option value="General Fitness">General Strength & Fitness</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#8B8D98] mb-1">
              Your Current Physique & Training Experience
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell Atharv about your training background, current issues, or specific targets..."
              className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D2FF] transition-colors resize-none"
            />
          </div>

          {status.error && (
            <div className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{status.error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-4 rounded-lg bg-[#00D2FF] text-black font-bold text-base hover:bg-[#00D2FF]/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,210,255,0.3)] disabled:opacity-50"
          >
            {status.loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                SUBMITTING APPLICATION...
              </>
            ) : (
              <>
                SEND APPLICATION TO ATHARV
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
