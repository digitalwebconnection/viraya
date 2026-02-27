import { motion } from "framer-motion";
// import image from "../../assets/founders.jpeg"
import { useState } from "react";
import PersonalServiceForm from "../../Component/HomeMain/PersonalServiceForm";
import founder from "../../assets/iloveimg/founder.png"

const FounderSection = () => {
     const [open, setOpen] = useState(false);
  return (
    <section className="relative bg-white overflow-hidden py-12">

      {/* Soft Background Tint */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1F2A36]/5 -skew-x-12 translate-x-32 z-0" />

      <div className="max-w-7xl mx-auto px-0 relative z-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <span
              className="px-4 py-2 bg-[#C7A25A]/10 text-[#C7A25A] text-xs tracking-[0.3em] uppercase rounded-full font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Founder’s Voyage
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl leading-tight text-[#1F2A36] mb-3"
            style={{ fontFamily: "Playfair Display" }}
          >
            A Professional Perspective
            <br />
            <span className="text-[#C7A25A] font-normal">
              Makes the Difference.
            </span>
          </motion.h2>

          {/* Founder Name */}
          <p
            className="text-xl text-[#1F2A36] font-semibold mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Param Doshi — Founder, Viraya Realty
          </p>

          {/* Body Content */}
          <div
            className="border-l-4 border-[#C7A25A] pl-6 text-[#1F2A36]/80 leading-relaxed space-y-3"
            style={{ fontFamily: "Lora" }}
          >
            <p>
              Hailing from Mumbai with 3 generations and over 110 years of the
              “Dr Doshi” veterinary lineage, Param brings heritage and
              discipline into business.
            </p>

            <p>
              A former jeweller in Mumbai for over 10 years and a certified GG
              from GIA, he gained global exposure in diamond marketing before
              moving to Ahmedabad in 2014.
            </p>

            <p>
              As Asst Director at True Value Group until 2019, focusing on
              Westgate projects and commercial leasing, he recognized the need
              for premium advisory-led residential and commercial solutions.
            </p>

            <p>
              With a vision to build a service-first, ethical, and unbiased
              advisory model, Param founded Viraya Realty — redefining real
              estate brokerage through professionalism and structure.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex gap-16 mt-6">
            <div>
              <p
                className="text-3xl text-[#1F2A36]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                110+
              </p>
              <p
                className="text-xs tracking-[0.2em] uppercase text-[#1F2A36]/60"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Years Family Legacy
              </p>
            </div>

            <div>
              <p
                className="text-3xl text-[#1F2A36]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                20+
              </p>
              <p
                className="text-xs tracking-[0.2em] uppercase text-[#1F2A36]/60"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Years Business Experience
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-8 mt-12 items-center">
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

          
          </div>
        </div>

        {/* RIGHT IMAGE PANEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-180"
        >
          <div className="relative bg-white  overflow-hidden ">

            <img
              src={founder}
              alt="Param Doshi"
              className="w-full h-full object-cover  bg-cover"
            />

            {/* Floating Badge */}
            <div className="absolute top-8 right-8 bg-white shadow-lg px-6 py-4 rounded-xl border border-[#1F2A36]/10">
              <p
                className="text-xs uppercase text-[#1F2A36]/60 tracking-[0.2em]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Global Exposure
              </p>
              <p
                className="text-lg text-[#1F2A36] font-semibold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Multi-Sector Experience
              </p>
            </div>

            {/* Bottom Gold Tag */}
            <div className="absolute bottom-6 left-6 bg-[#C7A25A] text-white px-6 py-3 rounded-lg">
              <p
                className="text-sm font-semibold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Founder — Viraya Realty
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fonts */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@400;600;700&display=swap');
      `}} />
    </section>
  );
};

export default FounderSection;
