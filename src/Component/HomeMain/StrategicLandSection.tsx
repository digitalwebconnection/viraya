import { motion, type Variants } from "framer-motion";
import type { BezierDefinition } from "framer-motion";

const StrategicLandAdvisory = () => {

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as BezierDefinition
      }
    })
  };

  const cards = [
    {
      title: "Infrastructure Roadmap",
      desc: "Current & proposed development surrounding the parcel",
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Zoning & Legal",
      desc: "Development permissions & regulatory compliance clarity",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Development Feasibility",
      desc: "Utilisation potential & structural viability",
      image:
        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "5–10 Year Horizon",
      desc: "Projected appreciation cycles & capital growth modeling",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="relative bg-[#1F2A36] py-14 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <div className="h-1 w-20 bg-[#C7A25A] mb-6" />

          <h2
            className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Strategic Land <br />
            <span className="text-[#C7A25A]"><span className=" font-serif">&</span>  Plot Advisory</span>
          </h2>

          <div className="space-y-8 max-w-xl">
            <p
              className="text-white/70 text-xl leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Land investments represent long-term capital allocation decisions
              that require{" "}
              <span className="text-white font-medium">
                patience, foresight, and disciplined evaluation.
              </span>
            </p>

            <p
              className="text-white/90 text-lg leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
              At Viraya Realty, land advisory is approached through structured
              research — not emotional market sentiment.
            </p>
          </div>

          <p
            className="text-[#C7A25A] text-2xl mt-10 border-l-2 border-[#C7A25A] pl-6 py-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            This is not speculation. <br />
            <span className="text-white">It is strategic positioning.</span>
          </p>
        </motion.div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                y: -15,
                boxShadow: "0 30px 60px -15px rgba(199, 162, 90, 0.3)"
              }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden h-70 group"
            >

              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#1F2A36]/75 group-hover:bg-[#1F2A36]/60 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 text-center text-white flex flex-col justify-center h-full">

                <div className="mb-6 inline-flex w-12 h-12 rounded-full border border-[#C7A25A]/60 items-center justify-center text-[#C7A25A] font-bold text-xs bg-black/30 backdrop-blur-sm group-hover:bg-[#C7A25A] group-hover:text-white transition-all duration-500">
                  0{i + 1}
                </div>

                <h3
                  className="text-[#C7A25A] font-bold text-sm mb-4 uppercase tracking-[0.2em]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {card.title}
                </h3>

                <p
                  className="text-white/90 text-sm leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {card.desc}
                </p>

                <div className="h-1 bg-[#C7A25A] w-0 group-hover:w-full mx-auto mt-8 transition-all duration-500" />
              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* Google Fonts */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;600&family=Montserrat:wght@400;700&display=swap');
        `
      }} />

    </section>
  );
};

export default StrategicLandAdvisory;