"use client";
import { useEffect } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PersonalServiceFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PersonalServiceForm({
  isOpen,
  onClose,
}: PersonalServiceFormProps) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6">
          {/* Animated Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
          />

          {/* Animated Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header: Aesthetic Gradient Top */}
            <div className="relative px-8 pt-10 pb-6 bg-linear-to-b from-slate-50 to-white">
              <button
                onClick={onClose}
                className="absolute top-6 right-8 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={22} />
              </button>
            
              <h2 className="text-3xl font-serif font-bold text-slate-900">
                Personal Service Inquiry
              </h2>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto px-8 pb-6">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Section 1: Contact Details */}
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="group space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-900 ml-1">Your Identity</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-[#b68d5c]/30 focus:ring-4 focus:ring-[#b68d5c]/5 outline-none transition-all"
                      />
                    </div>
                    <div className="group space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-900 ml-1">Digital Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-[#b68d5c]/30 focus:ring-4 focus:ring-[#b68d5c]/5 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="group space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-900 ml-1">Direct Reach (WhatsApp)</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-[#b68d5c]/30 focus:ring-4 focus:ring-[#b68d5c]/5 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="h-px bg-slate-100" />

                {/* Section 2: Preferences */}
                <div className="space-y-4">
                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center">01</span>
                      What is your preferred budget?
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {["₹2 – 3 Cr", "₹3 – 4 Cr", "Above 4 Cr"].map((item) => (
                        <label key={item} className="relative flex items-center justify-center p-4 border-2 border-slate-100 rounded-2xl cursor-pointer hover:border-[#b68d5c]/20 hover:bg-slate-50 transition-all has-checked:border-[#b68d5c] has-checked:bg-[#b68d5c]/5 group">
                          <input type="radio" name="budget" className="hidden peer" />
                          <span className="text-sm font-medium text-slate-500 peer-checked:text-[#b68d5c] group-hover:text-slate-900">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Selector */}
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center">02</span>
                      When are you looking to acquire?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["Immediately", "3 Months", "6 Months"].map((item) => (
                        <label key={item} className="relative flex items-center justify-center p-4 border-2 border-slate-100 rounded-2xl cursor-pointer hover:border-[#b68d5c]/20 hover:bg-slate-50 transition-all has-checked:border-[#b68d5c] has-checked:bg-[#b68d5c]/5 group">
                          <input type="radio" name="timeline" className="hidden peer" />
                          <span className="text-sm font-medium text-slate-500 peer-checked:text-[#b68d5c] group-hover:text-slate-900">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="group w-full bg-[#b68d5c] hover:bg-slate-900 text-white py-6 rounded-2xl font-bold tracking-[0.2em] uppercase text-xs shadow-xl shadow-[#b68d5c]/20 transition-all flex items-center justify-center gap-3"
                  >
                    Submit Inquiry
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}