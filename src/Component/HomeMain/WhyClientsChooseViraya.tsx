import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, PieChart, Users, Zap, ArrowRight } from "lucide-react";

const WhyChooseViraya = () => {
  const benefits = [
    {
      title: "Curated Opportunities",
      desc: "Moving beyond an inventory-driven approach to present only what aligns with your vision.",
      icon: <CheckCircle size={22} />,
    },
    {
      title: "Developer Relationships",
      desc: "Strong, established ties with credible developers to ensure priority and quality.",
      icon: <Users size={22} />,
    },
    {
      title: "Strategic Leverage",
      desc: "Negotiation power built through deep market insight and professional positioning.",
      icon: <Zap size={22} />,
    },
    {
      title: "Investment Discipline",
      desc: "A rigorous focus on long-term value rather than short-term market sentiment.",
      icon: <PieChart size={22} />,
    },
    {
      title: "Absolute Discretion",
      desc: "Complete confidentiality and privacy throughout the entire advisory lifecycle.",
      icon: <ShieldCheck size={22} />,
    },
  ];

  return (
    <section className="relative bg-white py-12 md:py-18 overflow-hidden">
      {/* Background Parallax Element */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        className="absolute top-20 left-10 text-[18rem] font-playfair font-bold pointer-events-none select-none"
      >
        VIRAYA
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
          
          {/* LEFT CONTENT: Sticky Narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#C7A25A]" />
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#C7A25A] font-bold font-montserrat">
                  Boutique Advantage
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl text-[#1F2A36] font-playfair leading-[1.1] mb-10">
                Why Clients <br />
                <span className=" text-[#C7A25A]">Choose Viraya.</span>
              </h2>
              
              <div className="space-y-8">
                <p className="text-[#1F2A36]/80 text-xl font-lora leading-relaxed italic border-l-2 border-[#C7A25A]/90 pl-8">
                  "Viraya Realty operates on a principle of depth over volume. The objective is not to overwhelm clients with endless listings."
                </p>
                
                <p className="text-[#1F2A36]/60 text-lg font-lora leading-relaxed max-w-md">
                  Every recommendation is intentional, researched, and strategically positioned to align with your financial goals and long-term vision.
                </p>
              </div>

              <motion.button
                whileHover={{ gap: "24px" }}
                className="mt-12 flex items-center gap-4 text-[#1F2A36] font-montserrat font-bold text-xs uppercase tracking-[0.3em] group transition-all"
              >
                The Advisory Philosophy <ArrowRight size={16} className="text-[#C7A25A] group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: Interactive Benefits */}
          <div className="lg:col-span-7 space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
                whileHover={{ x: -10 }}
                className="group relative bg-[#fcfaf7] hover:bg-[#1F2A36] p-5 md:p-6 rounded-4xl border border-[#1F2A36]/5 transition-all duration-700 flex flex-col md:flex-row md:items-start gap-10"
              >
                {/* Visual Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none bg-linear-to-br from-[#C7A25A] to-transparent" />

                {/* Icon Circle */}
                <div className="w-16 h-16 shrink-0 bg-white shadow-sm rounded-2xl flex items-center justify-center text-[#C7A25A] group-hover:bg-[#C7A25A] group-hover:text-white transition-all duration-500 transform group-hover:rotate-360">
                  {benefit.icon}
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#1F2A36] group-hover:text-white font-montserrat uppercase tracking-widest mb-4 transition-colors duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-[#1F2A36]/60 group-hover:text-white/70 font-lora text-lg leading-relaxed transition-colors duration-500">
                    {benefit.desc}
                  </p>
                </div>

                {/* Number Watermark */}
                <div className="absolute right-12 bottom-2 opacity-[0.03] group-hover:opacity-70 transition-opacity duration-700 hidden md:block">
                  <span className="text-3xl font-playfair  text-[#1F2A36] group-hover:text-white">0{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement with Reveal Mask */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-2 text-center"
        >
          <div className="inline-block relative">
            <p className="text-3xl md:text-5xl text-[#1F2A36] font-playfair  leading-tight">
              Relationships are built on <br />
              <span className="text-[#C7A25A] not-italic font-medium">trust, continuity, and long-term alignment.</span>
            </p>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-px bg-[#C7A25A]/80 w-full mt-5 origin-center"
            />
          </div>
          
          <p className="mt-2 text-[#1F2A36]/50 font-lora text-xl max-w-3xl mx-auto italic">
            "True advisory does not end at closure; it evolves with the client’s journey."
          </p>
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

export default WhyChooseViraya;