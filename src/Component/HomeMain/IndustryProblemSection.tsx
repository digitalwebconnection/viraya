import { useRef, useState } from "react";
import { motion, useScroll, useTransform} from "framer-motion";
import PersonalServiceForm from "../../Component/HomeMain/PersonalServiceForm";
import image from "../../assets/iloveimg/8.png"
const IndustryProblemSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the main image
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
   const [open, setOpen] = useState(false);
  return (
    <section 
      ref={containerRef}
      className="relative py-12 bg-[#ffffff] overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-0 relative z-10">
        
        {/* Section Label with Letter Spacing Animation */}
        <div className="flex justify-center mb-12">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="px-8 py-3 border  border-[#c7a25a] rounded-full text-[#c7a25a] text-[10px] uppercase font-bold tracking-[0.5em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Section 03 — The Industry Problem
          </motion.span>
        </div>

        {/* Heading with "Counting" Effect for 80% */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-6xl  text-[#1f2a36] leading-[1.1] mb-14"
          style={{ fontFamily: "'Playfair Display" }}
        >
          Over <span className="relative inline-block">
            <motion.span
              initial={{ color: "#1f2a36" }}
              whileInView={{ color: "#c7a25a" }}
              transition={{ delay: 0.5, duration: 1 }}
            >80%</motion.span>
            <motion.span 
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               transition={{ delay: 0.8, duration: 0.8 }}
               className="absolute bottom-2 left-0 h-0.5 bg-[#c7a25a]/30"
            />
          </span> of real estate decisions <br className="hidden md:block" /> 
          are driven by <span className="text-[#c7a25a]">urgency</span> — not suitability.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Visual Panel with Reveal Mask */}
          <div className="relative group">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-4/4 shadow-2xl"
            >
              <motion.img
                style={{ y, scale: 1.1 }}
                src={image}
                loading="lazy"
                alt="Luxury Towers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1f2a36]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-[#c7a25a] font-bold">Market Reality</p>
                  <p className="text-3xl font-serif leading-tight italic">
                    Inventory moves fast. <br />
                    Advice rarely moves deep.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative Floating Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl rounded-xl hidden xl:block border border-[#c7a25a]/10"
            >
              <div className="text-[#c7a25a] text-4xl font-serif mb-1">0%</div>
              <div className="text-[9px] uppercase tracking-widest text-[#1f2a36]/60 font-bold">Compromise Policy</div>
            </motion.div>
          </div>

          {/* Right Content Panel */}
          <div className="space-y-16">
            <div className="space-y-10">
              {[
                "Pushing inventory instead of protecting suitability",
                "Operating on volume-driven commissions",
                "Prioritizing speed over structured evaluation",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex items-center gap-8 group"
                >
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full border border-[#c7a25a]/20 flex items-center justify-center text-[#c7a25a] text-xs font-bold group-hover:border-[#c7a25a] transition-colors duration-500">
                      0{index + 1}
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="absolute inset-0 rounded-full bg-[#c7a25a]/5 scale-0 group-hover:scale-150 transition-transform duration-700" 
                    />
                  </div>
                  <p className="text-[#1f2a36]/80 text-xl font-light leading-relaxed font-serif italic border-b border-transparent group-hover:border-[#c7a25a]/20 transition-all duration-500 pb-2">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Solution Statement with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="relative bg-[#fcfaf7] p-12 overflow-hidden"
            >
              {/* Vertical accent line animation */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute left-0 top-0 w-1 bg-[#c7a25a]"
              />
              
              <h3 className="text-2xl font-serif text-[#1f2a36] mb-6 leading-snug">
                Viraya Realty was founded <br /> to <span className="text-[#c7a25a]">redefine</span> this standard.
              </h3>

              <div className="space-y-4">
                <p className="text-[#1f2a36]/70 leading-relaxed text-lg font-light">
                  Advisory should be structured. Decisions should be evaluated. 
                  Capital should be protected.
                </p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="font-bold text-[#1f2a36] text-sm uppercase tracking-widest pt-4"
                >
                  <button
                                         onClick={() => setOpen(true)}
                                         className="bg-[#b68d5c] hover:bg-white hover:text-black text-black px-12 py-4 font-semibold tracking-wide transition-all duration-300 shadow-xl rounded-full active:scale-95 font-['Inter']"
                                     >
                                         PERSONAL SERVICE
                                     </button>
                                     <PersonalServiceForm
                                         isOpen={open}
                                         onClose={() => setOpen(false)}
                                     />
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@400;700&display=swap');
      `}} />
    </section>
  );
};

export default IndustryProblemSection;