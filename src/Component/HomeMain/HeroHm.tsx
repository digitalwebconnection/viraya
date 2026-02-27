import { easeOut, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PersonalServiceForm from "../../Component/HomeMain/PersonalServiceForm";


const images = [
    "https://consterarealty.com/assets/img/blog-img/blog7.jpg",
    "https://www.sunbuildcon.com/assets/images/suryansh-skyline/banner.webp",
    "https://imagecdn.99acres.com/media1/35304/6/706086205M-1769767710488.jpg",
];

const HeroSection = () => {
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);
    // Auto Background Rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeOut },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center bg-[#1F2A36] overflow-hidden text-white">

            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={images[index]}
                        loading="lazy"
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={{ opacity: 0.45, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Dark Gradient Overlay (Fixed) */}
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent"></div>
            </div>

            {/* CONTENT */}
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="relative  z-10 px-6 md:px-8 lg:px-10 max-w-7xl w-full"
            >
                {/* Authority Badge */}
                <motion.div variants={itemVariants} className="flex items-center gap-4 mt-20">
                    <div className="h-px w-12 bg-[#b68d5c]"></div>
                    <span className="text-[#b68d5c] text-xs font-semibold tracking-[0.4em] uppercase font-['Inter']">
                        RERA Registered Specialist
                    </span>
                </motion.div>

                {/* Main Branding */}
                <motion.div variants={itemVariants} className="mb-2">
                    <h1 className="text-6xl md:text-8xl leading-tight font-['Playfair_Display']">
                        Viraya{" "}
                        <span className="text-[#b68d5c] ">
                            Realty
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl font-light tracking-[0.15em] text-gray-300 mt-4 font-['Lora']">
                        A Real Estate Investment Advisory
                    </p>
                </motion.div>

                {/* Core Philosophy */}
                <motion.div variants={itemVariants} className="max-w-2xl mt-4">
                    <h2 className="text-2xl md:text-3xl leading-snug font-medium font-['Playfair_Display']">
                        Real estate decisions are not transactions.
                        <br />
                        <span className="text-[#b68d5c]">
                            They are milestones.
                        </span>
                    </h2>

                    <p className="mt-6 text-gray-300 text-lg leading-relaxed font-light font-['Lora']">
                        We assist individuals, families and businesses in making confident
                        real estate decisions across luxury residences,
                        commercial investments and land opportunities in West Ahmedabad.
                    </p>

                    <p className="mt-6 text-[#b68d5c] font-medium italic border-l-2 border-[#b68d5c] pl-4 font-['Lora']">
                        "We do not sell property. We recommend what is right."
                    </p>
                </motion.div>

                {/* CTA Section */}
                <motion.div variants={itemVariants} className="mb-18 mt-6 z-10 flex flex-wrap gap-6">
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

                </motion.div>
            </motion.div>

            {/* Desktop Stats Bar */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-md border-t border-white/10 hidden md:block"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-3 py-8">

                    {/* Column 1 */}
                    <div className="text-center border-r border-white/10 px-4">
                        <p className="text-3xl text-[#b68d5c] font-montserrat font-bold tracking-wide">
                            ₹150Cr
                        </p>
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mt-2 font-montserrat font-medium">
                            Advisory Value
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="text-center border-r border-white/10 px-4">
                        <p className="text-3xl text-[#b68d5c] font-montserrat font-bold tracking-wide">
                            10+ Years
                        </p>
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mt-2 font-montserrat font-medium">
                            Experience
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="text-center px-4">
                        <p className="text-3xl text-[#b68d5c] font-montserrat font-bold tracking-wide">
                            Ahmedabad
                        </p>
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mt-2 font-montserrat font-medium">
                            West Specialist
                        </p>
                    </div>

                </div>
            </motion.div>


            {/* Mobile Stats */}
            <div className="md:hidden mt-16 px-6 grid grid-cols-2 gap-4 pb-10 relative z-10">
                <div className="p-4 bg-white/5 border border-white/10">
                    <p className="text-[#b68d5c] font-semibold font-['Inter']">
                        ₹XXX+ Cr
                    </p>
                    <p className="text-[8px] uppercase text-gray-400 font-['Inter']">
                        Advisory Value
                    </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10">
                    <p className="text-[#b68d5c] font-semibold font-['Inter']">
                        10+ Years
                    </p>
                    <p className="text-[8px] uppercase text-gray-400 font-['Inter']">
                        Experience
                    </p>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
