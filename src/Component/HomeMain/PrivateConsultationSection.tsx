import { motion, type Variants, type Transition } from 'framer-motion';
import { ChevronRight, ShieldCheck, Gem, Building2, Map, Users } from 'lucide-react';
import PersonalServiceForm from "../../Component/HomeMain/PersonalServiceForm";
import { useState } from 'react';
import image from "../../assets/iloveimg/10.png";

const VirayaSection = () => {
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };
  const transition: Transition = { duration: 0.8, ease: "easeOut" };
   const [open, setOpen] = useState(false);
  const services = [
    { title: "Grade A+ Commercial", icon: <Building2 className="w-5 h-5" /> },
    { title: "Exclusive Residences", icon: <Gem className="w-5 h-5" /> },
    { title: "Co-Working Strategy", icon: <Users className="w-5 h-5" /> },
    { title: "Strategic Land", icon: <Map className="w-5 h-5" /> },
  ];

  return (
    <div className="py-10 bg-[#ffffff] font-['Lora'] text-[#1F2A36] selection:bg-[#C7A25A] selection:text-white">
      
      {/* Main Hero Section */}
      <section className="relative flex flex-col lg:flex-row min-h-screen overflow-hidden">
        
        {/* Left Side: Consultation Hook */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={transition}
          >
            <span className="text-[#C7A25A] font-['Montserrat'] tracking-[0.3em] uppercase text-sm mb-4 block">
              Private Consultation
            </span>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl mb-8 leading-tight">
              With <span className=" text-[#C7A25A]">Param Doshi</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-md opacity-80 mb-12">
              Make a decision that will still feel right years later. 
              No pressure. No obligation. Only structured guidance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 border-l-2 border-[#C7A25A]/20 hover:border-[#C7A25A] transition-colors"
                >
                  <span className="text-[#C7A25A]">{service.icon}</span>
                  <span className="font-['Montserrat'] font-medium text-sm tracking-wide uppercase">{service.title}</span>
                </motion.div>
              ))}
            </div>

            
 <button
                        onClick={() => setOpen(true)}
                        className="bg-[#b68d5c] flex hover:bg-white hover:text-black text-black px-12 py-4 font-semibold tracking-wide transition-all duration-300 shadow-xl rounded-full active:scale-95 font-['Inter']"
                    >
                       Schedule Consultation
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <PersonalServiceForm
                        isOpen={open}
                        onClose={() => setOpen(false)}
                    />
              
    
          </motion.div>
        </div>

        {/* Right Side: Visual & Manifesto */}
        <div className="w-full lg:w-1/2 relative min-h-125 bg-[#1F2A36]">
          {/* Replace this div with your actual Image component */}
          <div className="absolute inset-0  transition-all duration-1000">
            <img 
              src={image} 
              alt="Luxury Real Estate" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Manifesto Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute bottom-10 left-10 right-10 lg:-left-20 lg:right-20 bg-white/90 backdrop-blur-md p-8 md:p-12 shadow-2xl"
          >
            <h2 className="font-['Playfair_Display'] text-3xl mb-6">The Viraya Manifesto</h2>
            <div className="space-y-6 text-sm md:text-base opacity-90 italic">
              <p>"We personally cherry-pick projects that have the capacity to become Grade A quality... where ethics are never compromised for gain."</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#C7A25A]/30">
                <ShieldCheck className="text-[#C7A25A]" />
                <span className=" font-bold text-xs tracking-tighter">
                  RERA no AG/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/AA00789/190329R2
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#1F2A36] py-12 px-8 text-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[#C7A25A]">
           <div className="text-center">
              <h3 className="font-['Montserrat'] text-3xl font-light mb-1">Grade A+</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-70 text-white">Asset Standard</p>
           </div>
           <div className="h-px w-12 bg-[#C7A25A]/30 hidden md:block"></div>
           <div className="text-center">
              <h3 className="font-['Montserrat'] text-3xl font-light mb-1">Transparent</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-70 text-white">Communication</p>
           </div>
           <div className="h-px w-12 bg-[#C7A25A]/30 hidden md:block"></div>
           <div className="text-center">
              <h3 className="font-['Montserrat'] text-3xl font-light mb-1">Ethical</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-70 text-white">Advocacy</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default VirayaSection;