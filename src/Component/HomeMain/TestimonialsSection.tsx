import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Karan Bhatia",
      title: "",
      quote:
        "One of the most honest and genuine company you can deal with for your requirements. Param has been associated with us for a long time and I can vouch for his sincerity, knowledge and dealings. He has a deep understanding of the real estate market - especially luxury segment. If you are looking to buy / invest should can surely get in touch.",
    },
    {
      name: "Yash Badiyani",
      title: "",
      quote:
        "We had a really good experience with Viraya Realty and Param Bhai while looking for an apartment in Ahmedabad. Since we don’t live in the city, we had to depend completely on his suggestions and guidance. He was very patient in understanding what we were looking for and kept our budget in mind throughout. What we really appreciated was his honesty and the way he gave us practical advice instead of just trying to push options. Thanks to him, we were able to find a place that fits us perfectly. Would definitely recommend Viraya Realty and Param Bhai to anyone searching for a home in Ahmedabad.",
    },
    {
      name: "Sandeep Nair",
      title: "",
      quote:
        "I reached out to Param bhai from Viraya Realty to help me after struggling for a few weeks with non-serious buyers. He represented me in my home sale in Ahmedabad and did a great job in explaining the whole process, setting the terms and conditions with the opposite party, negotiating the sale, and also advising on the financial and legal aspects. He was also able to tap into his influential network to find mutual contacts with a new interested buyer, which brought in a lot of trust between us and the new buyer and helped in closing the deal. Thanks to Param bhai, I closed the deal with the new buyer in just 3 days. 10/10 would recommend Param bhai for his professionalism, honesty, friendliness and outstanding negotiation skills. I look forward to working with him for my next real estate deal in Ahmedabad.",
    },
  ];

  return (
    <section className="bg-[#F9F7F4] py-14 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#C7A25A] uppercase tracking-[0.4em] text-xs font-bold mb-4">
            Client Testimonials
          </p>

          <h2 className="text-[#1F2A36] text-4xl md:text-5xl font-['Playfair_Display'] mb-6">
            The Voice of <span className="italic">Trust</span>
          </h2>

          <div className="h-1 bg-[#C7A25A] mx-auto mb-6 w-20" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-[#1F2A36] p-10 rounded-2xl relative flex flex-col justify-between group shadow-2xl overflow-hidden"
              >
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5" />

                <div>
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C7A25A] text-xs">
                        ★
                      </span>
                    ))}
                  </div>

                  <p
                    className={`text-white/90 text-lg leading-relaxed font-['Lora'] italic transition-all duration-300 ${
                      isExpanded ? "" : "line-clamp-4"
                    }`}
                  >
                    “{item.quote}”
                  </p>

                  {/* Read More Button */}
                  {item.quote.length > 200 && (
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="mt-4 text-[#C7A25A] text-sm font-semibold hover:underline"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-5 pt-8 border-t border-white/10 mt-8">
                  <div className="w-14 h-14 rounded-full bg-linear-to-tr from-[#C7A25A] to-[#E5C687] flex items-center justify-center text-[#1F2A36] font-bold text-xl">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="text-white font-bold">
                      {item.name}
                    </h4>
                    <p className="text-[#C7A25A] text-xs uppercase tracking-widest mt-1">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;