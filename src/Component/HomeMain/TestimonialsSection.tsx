"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


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
        "We had a really good experience with Viraya Realty and Param Bhai while looking for an apartment in Ahmedabad. Since we don’t live in the city, we had to depend completely on his suggestions and guidance...",
    },
    {
      name: "Mohit S",
      title: "",
      quote:
        "Param bhai, founder and director of Viraya Realty, is very professional and very responsive to each and every query the client have in mind while dealing in real estate markets. His skills in true sense are helpful to the Clients and at same time he is very much transparent with his clients.Can honestly say he is as an asset to the Industry to safeguard interests of clients.",
    },
    {
      name: "Sandeep Nair",
      title: "",
      quote:
        "I reached out to Param bhai from Viraya Realty to help me after struggling for a few weeks with non-serious buyers. He represented me in my home sale in Ahmedabad and did a great job in explaining the whole process, setting the terms and conditions with the opposite party, negotiating the sale, and also advising on the financial and legal aspects. He was also able to tap into his influential network to find mutual contacts with a new interested buyer, which brought in a lot of trust between us and the new buyer and helped in closing the deal. Thanks to Param bhai, I closed the deal with the new buyer in just 3 days. 10/10 would recommend Param bhai for his professionalism, honesty, friendliness and outstanding negotiation skills. I look forward to working with him for my next real estate deal in Ahmedabad.",
    },
    {
      name: "samkit shah",
      title: "",
      quote:
        "Luxury Living Made Easy: Param made our search for a luxury apartment in Ahmedabad effortless. His deep knowledge of the areas and Viraya Realty's commitment to excellence truly set them apart.",
    },
      {
      name: "Mitali Vakil",
      title: "",
      quote:
        "Param Doshi's Expertise Shines:Kudos to Param Doshi for his exceptional guidance in finding our dream luxury apartment in Shilaj. His expertise and Viraya Realty's commitment made our home search a breeze!",
    },
      {
      name: "Hero Dhanwani",
      title: "",
      quote:
        "Param bhai the owner of viraya reality, is very professional and quick responsive, besides that he is very flexible in nature and also has a very quickfollowup in each and every query. We had dealt with him and got the best value for the property. Also he is very much transparent with his clients.",
    },
      {
      name: "Pratik Parikh",
      title: "",
      quote:
        "Working with Param was awesome and flawless. Based on our budget, choice and need within a short period, he provided what we looking for in Ahmedabad and guided us every step of the way.",
    },
      {
      name: "INTRINSIC DESIGNS",
      title: "",
      quote:
        "A real estate broker, whoe works less like a broker and more like a wellwisher. Suggests what you want and understand your needs. Also acts as a super supports when it comes to dealing with the developer.",
    },  {
      name: "Chirag Thakkar",
      title: "",
      quote:
        "Param bhai is very dynamic and very supportive, we had a great experience while taking property on rent through him.Keep it up Param bhai",
    },
     {
      name: "Chris",
      title: "",
      quote:
        "Smart and Professional Consultant! Gives you al important information for your investments and make sure you invest in the right property!Gem to the industry!",
    },
  ];

  return (
    <section className="bg-[#F9F7F4] py-14 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C7A25A] uppercase tracking-[0.4em] text-xs font-bold mb-4">
            Client Testimonials
          </p>

          <h2 className="text-[#1F2A36] text-4xl md:text-5xl font-['Playfair_Display'] mb-6">
            The Voice of <span className="italic">Trust</span>
          </h2>

          <div className="h-1 bg-[#C7A25A] mx-auto mb-6 w-20" />
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-[#1F2A36] p-10 rounded-2xl relative flex flex-col justify-between group shadow-2xl overflow-hidden h-full"
                >
                  <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5" />

                  <div>
                    {/* Stars */}
                    <div className="mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#C7A25A] text-xs">
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p
                      className={`text-white/90 text-lg leading-relaxed font-['Lora'] italic transition-all duration-300 ${
                        isExpanded ? "" : "line-clamp-4"
                      }`}
                    >
                      “{item.quote}”
                    </p>

                    {/* Read More */}
                    {item.quote.length > 100 && (
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

                  {/* Footer */}
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;