import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Wallet, ShieldAlert, Globe, Eye, Scale,
  BarChart3, TrendingUp, Briefcase, Gavel, FileText,
  Key, Handshake, HeartHandshake
} from "lucide-react";

const steps = [
  { title: "Requirement Analysis", icon: <Search size={20} />, desc: "Deep-dive into your specific needs, lifestyle aspirations, and long-term objective alignment." },
  { title: "Financial Comfort Mapping", icon: <Wallet size={20} />, desc: "Structured financial modeling to ensure the investment fits your liquid capital and cash flow." },
  { title: "Risk Assessment", icon: <ShieldAlert size={20} />, desc: "Identifying potential market, legal, and developer-specific risks before capital commitment." },
  { title: "Micro-Market Study", icon: <Globe size={20} />, desc: "Granular data analysis of the specific neighborhood, infrastructure growth, and demand trends." },
  { title: "Developer Due Diligence", icon: <Eye size={20} />, desc: "Exhaustive track-record audit including past delivery quality, financial health, and litigation history." },
  { title: "Comparative Evaluation", icon: <Scale size={20} />, desc: "Data-driven comparison between top-tier options to identify the highest value proposition." },
  { title: "Yield Calculation", icon: <BarChart3 size={20} />, desc: "Realistic ROI projections, rental yield analysis, and tax implication modeling." },
];

const steps1 = [
  { title: "Exit Projection", icon: <TrendingUp size={20} />, desc: "Planning the liquidation strategy and expected capital appreciation timelines." },
  { title: "Negotiation Structuring", icon: <Briefcase size={20} />, desc: "Strategic price positioning and payment plan optimization to maximize buyer advantage." },
  { title: "Legal Coordination", icon: <Gavel size={20} />, desc: "Facilitating seamless communication with legal experts for title verification and contract safety." },
  { title: "Documentation Oversight", icon: <FileText size={20} />, desc: "Rigorous verification of RERA filings, allotment letters, and sale agreements." },
  { title: "Possession Follow-Up", icon: <Key size={20} />, desc: "Regular site visits and construction milestone tracking to ensure timely delivery." },
  { title: "Handover Support", icon: <Handshake size={20} />, desc: "Technical inspection of the property during possession and snag-list management." },
  { title: "Post-Investment Relationship", icon: <HeartHandshake size={20} />, desc: "Ongoing portfolio management and assistance with leasing or resale whenever required." },
];

const VirayaAdvisoryProtocolSplit = () => {
  const [activeMain, setActiveMain] = useState(0);
  const [activeFinal, setActiveFinal] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMain(prev => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFinal(prev => (prev + 1) % steps1.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#ffffff] py-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#fcfaf7] -skew-x-12 translate-x-1/2 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C7A25A] font-bold mb-4 font-montserrat">
            The Viraya Standard
          </p>
          <h2 className="text-5xl md:text-7xl text-[#1F2A36] font-playfair leading-tight">
            The 14-Step <span className=" text-[#C7A25A]">Protocol.</span>
          </h2>
        </motion.div>

        {/* ---------------- SECTION 01: PRE-INVESTMENT ---------------- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-5">
          {/* MENU */}
          <div className="space-y-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveMain(index)}
                className={`group cursor-pointer flex items-center justify-between px-8 py-5 rounded-2xl border transition-all duration-500 ${
                  activeMain === index
                    ? "border-[#C7A25A] bg-white shadow-xl shadow-[#C7A25A]/5 translate-x-4"
                    : "border-[#1F2A36]/5 bg-transparent hover:border-[#C7A25A]/30"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-[11px] font-bold font-montserrat tracking-widest ${
                    activeMain === index ? "text-[#C7A25A]" : "text-[#1F2A36]/30"
                  }`}>
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className={`text-lg transition-colors duration-300 font-montserrat font-medium ${
                    activeMain === index ? "text-[#1F2A36]" : "text-[#1F2A36]/60 group-hover:text-[#1F2A36]"
                  }`}>
                    {step.title}
                  </span>
                </div>
                <div className={`${activeMain === index ? "text-[#C7A25A]" : "text-[#1F2A36]/20 group-hover:text-[#C7A25A]/50"}`}>
                  {step.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* DETAIL DISPLAY */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMain}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="bg-[#1F2A36] rounded-4xl h-100 p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                  <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-[#C7A25A]"
                  />
                </div>
                
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#C7A25A] font-bold mb-8 block font-montserrat">
                  Phase 01: Identification
                </span>
                <h3 className="text-4xl md:text-5xl mb-8 font-playfair italic leading-tight">
                  {steps[activeMain].title}
                </h3>
                <p className="text-white/70 leading-relaxed text-xl font-lora font-light">
                  {steps[activeMain].desc}
                </p>
                <div className="mt-12 flex items-center gap-4 text-[#C7A25A]/60">
                   <div className="h-px w-12 bg-[#C7A25A]/30" />
                   <span className="text-[10px] uppercase tracking-widest font-montserrat">Advisory Module</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ---------------- SECTION 02: EXECUTION ---------------- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* DETAIL DISPLAY (Reversed Layout) */}
          <div className="relative order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFinal}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="bg-[#1F2A36] rounded-4xl h-100 p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                  <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 5.5, ease: "linear" }}
                    className="h-full bg-[#C7A25A]"
                  />
                </div>

                <span className="text-[10px] uppercase tracking-[0.4em] text-[#C7A25A] font-bold mb-8 block font-montserrat">
                  Phase 02: Execution & Legacy
                </span>
                <h3 className="text-4xl md:text-5xl mb-8 font-playfair italic leading-tight">
                  {steps1[activeFinal].title}
                </h3>
                <p className="text-white/70 leading-relaxed text-xl font-lora font-light">
                  {steps1[activeFinal].desc}
                </p>
                <div className="mt-12 flex items-center gap-4 text-[#C7A25A]/60">
                   <div className="h-px w-12 bg-[#C7A25A]/30" />
                   <span className="text-[10px] uppercase tracking-widest font-montserrat">Succession Layer</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MENU */}
          <div className="space-y-3 order-1 lg:order-2">
            {steps1.map((step, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveFinal(index)}
                className={`group cursor-pointer flex items-center justify-between px-8 py-5 rounded-2xl border transition-all duration-500 ${
                  activeFinal === index
                    ? "border-[#C7A25A] bg-white shadow-xl shadow-[#C7A25A]/5 -translate-x-4"
                    : "border-[#1F2A36]/5 bg-transparent hover:border-[#C7A25A]/30"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-[11px] font-bold font-montserrat tracking-widest ${
                    activeFinal === index ? "text-[#C7A25A]" : "text-[#1F2A36]/30"
                  }`}>
                    {(index + 8).toString().padStart(2, "0")}
                  </span>
                  <span className={`text-lg font-montserrat font-medium transition-colors duration-300 ${
                    activeFinal === index ? "text-[#1F2A36]" : "text-[#1F2A36]/60 group-hover:text-[#1F2A36]"
                  }`}>
                    {step.title}
                  </span>
                </div>
                <div className={`${activeFinal === index ? "text-[#C7A25A]" : "text-[#1F2A36]/20 group-hover:text-[#C7A25A]/50"}`}>
                  {step.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@400;500;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-lora { font-family: 'Lora', serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}} />
    </section>
  );
};

export default VirayaAdvisoryProtocolSplit;