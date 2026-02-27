import { motion } from "framer-motion";
import { CheckCircle2} from "lucide-react";
import Pre from "../../assets/iloveimg/5.png"

const PreLeasedInvestmentSection = () => {
  return (
    <section className="bg-[#ffffff]  py-5 px-6 relative overflow-hidden">

    

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE – CINEMATIC VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <img
            src={Pre}
            alt="Pre Leased Investment"
            className="w-full h-150 object-cover scale-105 hover:scale-110 transition-transform duration-2000"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#1F2A36]/95 via-[#1F2A36]/40 to-transparent" />

          {/* Floating ROI Badge */}
          <div className="absolute top-2 right-10 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-xs tracking-[0.3em] uppercase font-montserrat">
            Structured Income
          </div>

          {/* Bottom Text */}
          <div className="absolute bottom-16 left-16 right-16 text-white">
            <h3 className="text-4xl font-playfair font-bold leading-tight">
              Predictable Cash Flow.
              <span className="text-[#C7A25A]"> Institutional Discipline.</span>
            </h3>
          </div>
        </motion.div>

        {/* RIGHT SIDE – ANALYTICAL STRUCTURE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Header */}
          <div className="border-l-4 border-[#C7A25A] pl-8 mb-6">
            <h2 className="text-5xl font-playfair text-[#1F2A36] leading-tight">
              Pre-Leased <br />
              Investment Assets
            </h2>

            <p className="text-[#1F2A36]/70 font-lora text-lg mt-6 leading-relaxed">
              For clients seeking predictable and structured income, pre-leased assets
              offer compelling opportunities. Stability is not assumed — it is carefully
              evaluated through disciplined contractual and financial frameworks.
            </p>
          </div>

          {/* Evaluation Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">

            {[
              "Lease lock-in structure & safeguards",
              "Tenant financial credibility",
              "Escalation clauses & rental growth",
              "ROI alignment with expectations"
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-[#C7A25A]/20 transition-all duration-500"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-[#C7A25A] mt-1" />
                  <span className="text-[#1F2A36] text-sm font-montserrat uppercase tracking-wide">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}

          </div>

          {/* Closing Paragraph */}
          <p className="text-[#1F2A36]/70 font-lora text-lg leading-relaxed mb-6">
            A well-structured pre-leased investment should provide clarity,
            protection, and predictable cash flow — transforming rental income
            into a dependable long-term asset rather than a speculative decision.
          </p>

          

        </motion.div>

      </div>

      {/* Fonts */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;600&family=Montserrat:wght@400;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-lora { font-family: 'Lora', serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}} />
    </section>
  );
};

export default PreLeasedInvestmentSection;
