import { motion, type Variants } from 'framer-motion';
import { Shield, Star, Users, Handshake, Heart, Globe } from 'lucide-react';

const VisionMissionWhite = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
        }
    };

    const values = [
        { icon: <Shield size={24} />, title: "Integrity", desc: "Highest standards of ethics in all actions." },
        { icon: <Star size={24} />, title: "Service", desc: "Exceeding expectations to delight customers." },
        { icon: <Handshake size={24} />, title: "Win-Win", desc: "Treating associates with fairness and respect." },
        { icon: <Users size={24} />, title: "Relationships", desc: "Honest communication for long-term bonds." },
        { icon: <Heart size={24} />, title: "Our People", desc: "Encouraging development and responsibility." },
        { icon: <Globe size={24} />, title: "Citizenship", desc: "Striving to give back to society and environment." },
    ];

    return (
        <div className="relative bg-white z-1 text-[#1F2A36] py-14 px-6 md:px-0 font-lora overflow-hidden">

            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-gray-50/50 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mb-8 relative"
                >
                    <div className="absolute  top-0 h-full w-0.5 bg-[#C7A25A] origin-top" />
                    <h1 className="font-playfair text-6xl md:text-8xl font-light text-[#1F2A36] mb-4 tracking-tight">
                        Our <span className=" text-[#C7A25A]">Purpose</span>
                    </h1>
                    <p className="font-montserrat ms-5 uppercase tracking-[0.5em] text-gray-400 text-xs font-bold">
                        Vision • Mission • Values
                    </p>
                </motion.div>

                {/* Vision & Mission Sections */}
                <div className="grid lg:grid-cols-2 gap-20 mb-10">
                    {[
                        { label: 'V', title: 'Vision', text: 'Viraya Realty’s vision is to become West Ahmedabad’s most trusted real estate advisory for individuals and businesses who value structure, ethics, and long-term clarity in their investment decisions. Trust, in this context, is not built through volume or visibility, but through consistency, transparency, and disciplined guidance. The aim is to set a benchmark for thoughtful advisory—where every recommendation is backed by research, integrity, and a genuine commitment to client success.' },
                        { label: 'M', title: 'Mission', text: 'The mission of Viraya Realty is to combine disciplined market analysis with deeply personalized advisory. Every client’s financial comfort, long-term objectives, and risk appetite are carefully understood before any opportunity is recommended. By aligning data-driven evaluation with human understanding, the firm ensures that each investment serves a clear purpose, provides financial comfort, and contributes to sustainable future growth.The objective is simple yet powerful: to ensure that every real estate decision is structured, suitable, and strategically positioned for the years ahead. ' }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            className="relative group p-8 rounded-2xl transition-all duration-500 hover:bg-[#1F2A36] hover:shadow-2xl"
                        >
                            <motion.span
                                className="font-montserrat text-[12rem] font-black text-gray-100 absolute -top-20 -left-4 z-0 select-none group-hover:text-white/5 transition-colors duration-500"
                            >
                                {item.label}
                            </motion.span>
                            <div className="relative z-10">
                                <h2 className="font-playfair text-[#C7A25A] text-4xl mb-6 flex items-center gap-4">
                                    {item.title}
                                    <span className="h-px w-12 bg-[#C7A25A]/30 group-hover:w-20 group-hover:bg-[#C7A25A] transition-all duration-500"></span>
                                </h2>
                                <p className="text-xl leading-relaxed font-light text-[#1F2A36] italic group-hover:text-gray-200 transition-colors duration-500">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Core Values - Midnight Blue Hover Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {values.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 rounded-2xl border border-gray-100 bg-white transition-all duration-500 hover:bg-[#1F2A36] hover:border-[#1F2A36] hover:shadow-xl overflow-hidden"
                        >
                            {/* Decorative background element for hover */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#C7A25A]/5 rounded-bl-full group-hover:bg-[#C7A25A]/60 transition-colors duration-500" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="p-3 rounded-lg bg-gray-50 text-[#C7A25A] group-hover:bg-[#C7A25A] group-hover:text-white transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-playfair text-2xl font-medium text-[#1F2A36] group-hover:text-white transition-colors duration-500">
                                        {item.title}
                                    </h4>
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Line */}
                <div className="relative mt-32 h-px w-full bg-gray-100 overflow-hidden">
                    <motion.div
                        initial={{ left: "-100%" }}
                        whileInView={{ left: "100%" }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        className="absolute top-0 h-full w-1/3 bg-linear-to-r from-transparent via-[#C7A25A]/40 to-transparent"
                    />
                </div>
            </div>
        </div>
    );
};

export default VisionMissionWhite;