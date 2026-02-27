import { useState } from "react";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";

const advisoryPoints = [
  {
    badge: "Layout Practicality",
    title: "Functional Living Precision",
    description:
      "Every residence is evaluated for intelligent space planning and long-term usability beyond visual appeal.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    badge: "Community Ecosystem",
    title: "Holistic Environment Review",
    description:
      "Assessment includes neighbourhood profile, social ecosystem strength, and infrastructure growth impact.",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
  },
  {
    badge: "Resale Liquidity",
    title: "Future Value Positioning",
    description:
      "Builder credibility, construction quality, legal clarity, and long-term resale strength are deeply analyzed.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },  
];

const LuxuryAdvisorySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#C7A25A] ">Why Choose Us</h1>
        {/* HEADER */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-[#C7A25A]" />
            <Crown className="text-[#C7A25A]" size={26} />
            <h2
              className="text-5xl md:text-6xl text-[#1F2A36]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Luxury Residential Advisory
            </h2>
            <Crown className="text-[#C7A25A]" size={26} />
            <div className="h-px w-20 bg-[#C7A25A]" />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {advisoryPoints.map((item, index) => (
            <div
              key={index}
              className="relative h-105 perspective"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                animate={{
                  rotateY: hoveredIndex === index ? 180 : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-full h-full preserve-3d"
              >
                {/* FRONT SIDE (IMAGE) */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl backface-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* BACK SIDE (CONTENT) */}
                <div className="absolute inset-0 bg-white rounded-3xl p-10 border border-[#C7A25A] shadow-xl flex flex-col justify-center items-center text-center backface-hidden rotate-y-180">
                  <span className="text-xs px-4 py-1 rounded-full border border-[#C7A25A] text-[#C7A25A] font-medium mb-4">
                    {item.badge}
                  </span>

                  <h3
                    className="text-2xl mb-4 text-[#1F2A36]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-[#1F2A36]"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* REQUIRED STYLES */}
      <style >{`
        .perspective {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default LuxuryAdvisorySection;