
import { motion } from "framer-motion";
import {
  Building2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const CommercialAdvisorySection = () => {
const solutions = [
  {
    id: "01",
    title: "Office & Corporate Spaces",
    subtitle: "COMMERCIAL – Office & Corporate",
    icon: <Building2 size={24} />,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    description:
      "Built for productivity. Positioned for prestige. Grade-A office spaces designed for enterprises, corporates, and growing businesses seeking long-term value and strategic locations.",
    details: [
      "Prime CBD & business district locations",
      "Institutional-grade tenants",
      "Long-term lease stability",
      "Strong rental yield potential",
      "Capital appreciation in growth corridors"
    ]
  },
  {
    id: "02",
    title: "Retail & High-Street Assets",
    subtitle: "COMMERCIAL – Retail & High-Street",
    icon: <Building2 size={24} />,
    image:
      "https://www.shutterstock.com/image-photo/ahmedabad-gujarat-india-january-05-600nw-2660167411.jpg",
    description:
      "Powered by footfall. Driven by consumption. Retail investments backed by brand strength, location analytics, and evolving consumer demand.",
    details: [
      "High-visibility frontage",
      "Footfall & catchment analytics",
      "Strong brand tenancy mix",
      "Revenue-sharing lease models",
      "Demand-led micro-market selection"
    ]
  },
  {
    id: "03",
    title: "Industrial & Warehouse Assets",
    subtitle: "COMMERCIAL – Industrial & Warehousing",
    icon: <Building2 size={24} />,
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQHntQIvWYnFJw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713179557269?e=2147483647&v=beta&t=z8lan2oD2nWaBdJBsExieVwJsLLAcpUEGvkZD2E7oOM",
    description:
      "Built for scale. Structured for logistics growth. Strategic industrial and warehousing assets aligned with supply chain expansion and e-commerce growth.",
    details: [
      "Strategic highway connectivity",
      "Logistics & last-mile advantage",
      "Long-term corporate leases",
      "High-demand industrial corridors",
      "Stable yield-driven asset class"
    ]
  }
];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C7A25A] font-montserrat font-bold tracking-[0.4em] uppercase text-[10px] mb-4">
              Commercial & Investment Advisory
            </p>

            <h2 className="text-5xl md:text-7xl font-bold text-[#1F2A36] leading-tight font-playfair uppercase">
              Our <br />
              Solutions<span className="text-[#C7A25A]">.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-[#C7A25A] pl-8"
          >
            <p className="text-[#1F2A36]/70 text-lg font-lora italic leading-relaxed">
              A commercial asset must deliver consistent performance — not just visual appeal.
              Investments should perform with predictability and resilience.
            </p>
          </motion.div>
        </div>

        {/* EXPANDING FLEX CARDS */}
        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-150">

          {solutions.map((item, index) => (
            <motion.div
              key={index}
              className="relative group rounded-[2.5rem] overflow-hidden cursor-pointer bg-[#1F2A36] shadow-2xl flex-1 transition-all duration-700 ease-in-out hover:flex-2"
            >

              {/* Background Image */}
              <div
                className="absolute  inset-0 bg-cover bg-center  transition-transform duration-1200 ease-out group-hover:scale-110 opacity-40 group-hover:opacity-30"
                style={{ backgroundImage: `url(${item.image} )` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1F2A36] via-[#1F2A36]/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-between">

                {/* Top Row */}
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-[#C7A25A] rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:bg-white group-hover:text-[#1F2A36]">
                    {item.icon}
                  </div>

                  <span className="text-white/10 font-montserrat font-bold text-5xl">
                    {item.id}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="transition-all duration-700 group-hover:-translate-y-6">
                  <p className="text-[#C7A25A] text-[10px] uppercase tracking-[0.5em] font-montserrat font-bold mb-3">
                    {item.subtitle}
                  </p>

                  <h3 className="text-4xl font-bold text-white uppercase tracking-tight font-playfair mb-6 transition-colors duration-500 group-hover:text-[#C7A25A]">
                    {item.title}
                  </h3>

                  {/* Hidden Content */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-125 group-hover:opacity-100 transition-all duration-700 overflow-hidden">

                    <p className="text-white/70 font-lora text-lg leading-relaxed mb-8">
                      {item.description}
                    </p>

                    <div className="space-y-3 mb-10">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-3">
                          <CheckCircle2 size={14} className="text-[#C7A25A]" />
                          <span className="text-white/60 text-xs font-montserrat uppercase tracking-wider">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button className="flex items-center gap-3 text-white text-[10px] font-montserrat font-bold uppercase tracking-[0.3em] hover:text-[#C7A25A] transition-colors group/btn">
                      Request Analysis
                      <ArrowUpRight
                        size={16}
                        className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                      />
                    </button>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* FONTS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;600&family=Montserrat:wght@400;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-lora { font-family: 'Lora', serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}} />
    </section>
  );
};

export default CommercialAdvisorySection;
