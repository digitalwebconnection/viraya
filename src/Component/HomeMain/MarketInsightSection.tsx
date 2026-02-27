import { motion } from "framer-motion";
import { TrendingUp, Building, BarChart3, MapPin } from "lucide-react";
import PersonalServiceForm from "../../Component/HomeMain/PersonalServiceForm";
import { useState } from "react";
const MarketInsightSection = () => {
     const [open, setOpen] = useState(false);
  const insights = [
    {
      label: "Market Appreciation",
      title: "Fastest in Gujarat",
      desc: "West Ahmedabad stands as one of the fastest appreciating micro-markets in the region.",
      icon: <TrendingUp size={24} />,
    },
    {
      label: "Corporate Demand",
      title: "Absorption Rates",
      desc: "Consistently strong commercial absorption rates driven by blue-chip corporate interest.",
      icon: <Building size={24} />,
    },
    {
      label: "Leasing Dynamics",
      title: "Corporate Growth",
      desc: "Exponentially growing corporate leasing demand across key business districts.",
      icon: <BarChart3 size={24} />,
    },
    {
      label: "Urban Connectivity",
      title: "Expansion Corridors",
      desc: "Strategic infrastructure-led expansion corridors creating new investment frontiers.",
      icon: <MapPin size={24} />,
    },
  ];

  return (
    <section className="bg-white py-12 md:py-18 overflow-hidden">
      {/* Background Architectural Grid Effect */}
    
      {/* Moving Ambient Light */}
      <motion.div 
        animate={{ 
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-0 left-0 w-200 h-200 bg-[#C7A25A]/10 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#C7A25A] font-montserrat font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">
              Market Intelligence
            </span>
            <h2 className="text-5xl md:text-7xl text-[#1F2A36] font-playfair leading-[1.1]">
              West Ahmedabad <br />
              <span className="font-light text-[#C7A25A]">Growth Snapshot.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="border-l border-[#C7A25A]/90 pl-10"
          >
            <p className="text-[#1F2A36]/90 text-xl font-lora leading-relaxed italic">
              "Viraya Realty positions clients ahead of growth curves, not after them."
            </p>
          </motion.div>
        </div>

        {/* Intelligence Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ y: -15 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-black/50 p-10 rounded-[2.5rem] transition-all duration-500 overflow-hidden"
            >
              {/* Hover Background Shift */}
              <div className="absolute inset-0 bg-[#1F2A36] opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-full group-hover:translate-y-0" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#C7A25A]/10 rounded-2xl flex items-center justify-center text-[#C7A25A] mb-8 group-hover:bg-white group-hover:text-[#C7A25A] transition-all duration-500">
                  {insight.icon}
                </div>
                
                <p className="text-[10px] font-montserrat font-bold tracking-[0.3em] uppercase text-[#C7A25A] mb-2 group-hover:text-white transition-colors">
                  {insight.label}
                </p>
                
                <h3 className="text-2xl text-black font-playfair mb-6 group-hover:text-[#C7A25A] transition-colors">
                  {insight.title}
                </h3>
                
                <p className="text-[#1F2A36] text-sm leading-relaxed font-lora group-hover:text-[#C7A25A]/90 transition-colors">
                  {insight.desc}
                </p>
              </div>

              {/* Decorative Corner Arrow */}
              <div className="absolute top-8 right-8 text-white/10 group-hover:text-[#C7A25A]/90 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Visualization Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-2 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10"
        >
          <div className="flex items-center gap-8">
            
          </div>
           <button
                        onClick={() => setOpen(true)}
                        className="bg-[#b68d5c] flex hover:bg-white hover:text-black text-black px-12 py-4 font-semibold tracking-wide transition-all duration-300 shadow-xl rounded-full active:scale-95 font-['Inter']"
                    >
                       Request Data Portfolio <TrendingUp size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
         
                    </button>
                    <PersonalServiceForm
                        isOpen={open}
                        onClose={() => setOpen(false)}
                    />
        
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@400;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-lora { font-family: 'Lora', serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}} />
    </section>
  );
};

export default MarketInsightSection;