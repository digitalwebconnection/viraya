import { motion } from "framer-motion";
import aboutimg from "../../assets/iloveimg/2.jpg";

const AboutVirayaSection = () => {
  return (
    <section
      id="about"
      className="relative py-2 overflow-hidden text-white"
    >
      {/* SECTION BACKGROUND (Not Fixed) */}
      <div className="absolute inset-0 -z-10">
        <img
          src={aboutimg}
          alt="About Viraya Realty"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-130">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#c7a25a] font-bold">
            About Viraya Realty
          </span>

          <h2 className="text-5xl md:text-7xl leading-[1.1] my-8 font-playfair">
            A Boutique <br />
            <span className="text-[#c7a25a]">
              Investment Advisory
            </span>
          </h2>

          <p className="text-xl md:text-2xl font-light leading-relaxed mb-6">
            We are a boutique real estate investment advisory, focused on helping
            our clients invest in
            <span className="text-[#c7a25a]"> Ingenious workspaces</span>,
            <span className="text-[#c7a25a]"> Utopian homes</span>, and land parcels
            at a fair price in and around Ahmedabad.
          </p>

          <p className="text-lg text-white/70 leading-relaxed italic border-l-2 border-[#c7a25a] pl-6">
            Delivering unmatched service while building long-term relationships
            rooted in transparency and ethics.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutVirayaSection;