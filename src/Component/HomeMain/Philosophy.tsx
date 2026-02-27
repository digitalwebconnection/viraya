
import { motion } from "framer-motion";

const PhilosophyWhite = () => {
  const impactItems = [
    "Capital Security",
    "Business Positioning",
    "Family Legacy",
    "Cash Flow Planning",
  ];

  return (
    <section className="relative z-1 bg-white py-2 overflow-hidden">
      {/* Soft Gold Ambient Glow - Interactive */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-150 h-150 bg-[#C7A25A]/5 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-3"
        >
          <span
            className="text-[10px] tracking-[0.6em] uppercase text-[#C7A25A] font-bold border-b border-[#C7A25A]/20 pb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Param’s Philosophy
          </span>
        </motion.div>

        {/* Main Quote with Reveal Animation */}
        <div className="mb-3 max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl leading-[1.2] text-[#1F2A36]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="block text-[#C7A25A] text-7xl font-serif mb-4 italic opacity-40">“</span>
            I believe the right investment <br className="hidden md:block" />
            <span className="text-[#C7A25A]">
              should still feel right 10 years later.
            </span>
          </motion.h2>
        </div>

        {/* Impact Grid with Enhanced Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                backgroundColor: "#fcfaf7",
                borderColor: "#C7A25A"
              }}
              className="group relative border border-[#1F2A36]/10 rounded-xl p-10 transition-all duration-500 cursor-default bg-white overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#C7A25A]/5"
            >
              {/* Subtle Number Reveal on Hover */}
              <div className="absolute top-4 right-6  duration-500">
                <span className="text-6xl font-serif text-[#1F2A36]">0{index + 1}</span>
              </div>

              <p
                className="text-[10px] tracking-[0.4em] text-[#C7A25A] mb-6 font-bold uppercase transition-colors duration-500"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Focus 0{index + 1}
              </p>
              
              <p
                className="text-xl text-[#1F2A36] leading-snug font-medium group-hover:text-[#C7A25A] transition-colors duration-500"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item}
              </p>

              {/* Bottom decorative line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-[#C7A25A] w-0 group-hover:w-full transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>

        {/* Philosophy Text Block - Premium Layout */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <h4 className="text-[#C7A25A] font-serif italic text-2xl">The Long-Term <br /> Perspective</h4>
            <div className="h-px w-12 bg-[#C7A25A] mt-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10 border-l border-[#C7A25A] pl-10"
            style={{ fontFamily: "'Lora', serif" }}
          >
            <p className="text-[#1F2A36]/80 leading-relaxed text-xl font-light">
              Real estate decisions are not short-term transactions; they shape 
              <span className="text-[#1F2A36] "> capital security</span>, 
              influence business positioning, and define family legacy.
            </p>

            <p className="text-[#1F2A36]/70 leading-relaxed text-lg italic">
              In an industry that rewards speed, we prioritise clarity. Every recommendation is filtered through structured evaluation and risk assessment.
            </p>

            <div className="pt-6">
              <p className="text-[#1F2A36] leading-relaxed text-2xl font-serif">
                His responsibility is not to rush a decision —
                <span className="text-[#C7A25A]  block md:inline"> it is to protect it.</span>
              </p>
              <p className="text-sm tracking-widest text-[#1F2A36]/40 uppercase font-bold mt-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                — Param Doshi, Founder
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@400;600;700&display=swap');
      `}} />
    </section>
  );
};

export default PhilosophyWhite;