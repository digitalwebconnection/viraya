import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring } from "framer-motion";

/* Animated Number */
const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const springValue = useSpring(0, {
    stiffness: 35,
    damping: 18,
    restDelta: 0.001,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span
      ref={ref}
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="tabular-nums font-bold"
    >
      {displayValue}
      {suffix}
    </span>
  );
};

const CredibilitySection = () => {
  const stats = [
    { label: "Years of Advisory Experience", value: 10, suffix: "+" },
    { label: "Transaction Advisory Value", value: 150, suffix: "Cr+" },
    { label: "Investment Evaluations", value: 98, suffix: "+" },
    { label: "Premium Relationships", value: 100, suffix: "+" },
    { label: "Step Advisory Process", value: 14, suffix: "" },
    { label: "RERA Compliance", value: 100, suffix: "%" },
  ];

  return (
    <section className="relative py-14 bg-white overflow-hidden">

      {/* Floating Gold Aura */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-[#c7a25a]/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-20 mb-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#c7a25a]" />
              <span
                className="text-xs font-bold tracking-[0.4em] text-[#c7a25a] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Credibility Strip
              </span>
            </div>

            <h3
              className="text-5xl md:text-7xl font-serif text-[#1f2a36] mb-10 leading-tight relative inline-block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              By The <span className="">Numbers</span>

              {/* Gold Underline Animation */}
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute left-0 -bottom-3 h-0.5 bg-[#c7a25a]"
              />
            </h3>

            <p
              className="text-[#1f2a36] text-lg leading-relaxed max-w-xl border-l-4 border-[#c7a25a] pl-4"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Experience and structure define the foundation of{" "}
              <span className="text-[#1f2a36] font-semibold">
                Viraya Realty
              </span>.
              Our firm has built its advisory practice on measurable outcomes,
              disciplined processes, and long-term relationships.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/5 pt-16"
          >
            <p
              className="text-[#1f2a36] italic text-xl leading-relaxed relative"
              style={{ fontFamily: "'Lora', serif" }}
            >
              <span className="text-4xl text-[#c7a25a] absolute -top-8 -left-6">
                “
              </span>
              Each milestone reflects a commitment to clarity, compliance,
              and carefully guided decision-making.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative p-8 border border-[#1f2a36]/20 rounded-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gold Glow on Hover */}
              <div className="absolute inset-0 bg-[#c7a25a]/5 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Animated Gold Border Sweep */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#c7a25a] transition duration-500 rounded-2xl" />

              <div className="relative z-10 flex flex-col items-center">
                <span className="text-4xl md:text-5xl text-[#1f2a36] mb-4 group-hover:text-[#c7a25a] transition-colors duration-500">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>

                <span
                  className="text-[10px] font-bold text-[#1f2a36] uppercase tracking-[0.25em] leading-tight group-hover:text-[#1f2a36] transition-colors text-center"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>

              {/* Gold Top Indicator */}
              <div className="absolute top-0 left-0 h-0.75 w-0 bg-[#c7a25a] group-hover:w-full transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>

       
      </div>

      {/* Google Fonts Import */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@400;700&display=swap');
      `}} />
    </section>
  );
};

export default CredibilitySection;
