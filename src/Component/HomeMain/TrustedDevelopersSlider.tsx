import { motion } from "framer-motion";

const logos = [
  { name: "Shilp", src: "https://media.licdn.com/dms/image/v2/C560BAQHAWP0nZGN1TQ/company-logo_200_200/company-logo_200_200/0/1630617946999?e=2147483647&v=beta&t=KpEZ6tU0NxI6g_x1_FwH7mr2Jjkr9zaOpy9ME72Q-hE" },
  { name: "Shivalik", src: "https://cdn.griinstitute.org/uploads/crm_company/003Dm00000CNhvO_Marketing_Edited_Logo_2024-10-10_15-06-17.jpg" },
  { name: "Aaron", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBL7m6KvRFtWNAbij5l7wQNN-z3VI9NM7HQ&s" },
  { name: "Samsara", src: "https://samsarabuildtech.com/img/logo/samsara-logo.svg" },
  { name: "Ansh", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVX5fHKgKIZuCmwgQ9Wz6kwJTs68kmBz-0ew&s" },
  { name: "Kavisha", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQnzJghVvBG406t3eGEshHS3_paldnVVYGA&s" },
  { name: "Ratna", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tiauOOBAD357E0iV2_a0eIq3EaJRykuv8g&s" },
  { name: "Swati", src: "https://is1-2.housingcdn.com/0b8ad14c/bfd756f54d1293d4b33563f3cfab344f/v0/medium.jpeg" },
  { name: "Sun", src: "https://sunbuilders.in/images/sun-builders-logo.png" },
  { name: "Ratnaakar", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7V34RzlzUf7V03Pm0VQLRKisS2cQBI8Mqg&s" },
  { name: "Palak", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJHCX3JXLXizDC9E9GHU5OY5IHudn1QFNMg&s" },
  { name: "Suryam", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSJPrFoIzRYktd8I--QN0Kb3DwFJgsILNlQ&s" },
  { name: "Madhav", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3cT108w1wfl2BTG8D3xGJDdIsmTf63FZvzg&s" },
  { name: "K P Sanghavi", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuB6rvQv6oIWkUId47GMVBxUv5GiV1ULhag&s" },
  { name: "A Shridhar", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSe_vkbl-JXWJSlNzyekpkEzKQB87675NVw&s" },
  { name: "HRG", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PiXzJdvcoxMjd1eK3q1vpmv1kd7un3mAbQ&s" },
  { name: "Deep", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIOItj6dIVWV5RzJ1PEBTc7QVfivMDJJT7A&s" },
  { name: "Times", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIYggk_-Or4u7SKPT7piA2sQoJ_M4Uo-wRw&s" },
  { name: "D&C", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwN8h-I8qoJ5k_KNeQh6UorrqOKeUfCWcIIA&s" },
  { name: "Zion", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9TRwcSMKyMJ10eaWlWHuus_9lktCQBM9ow&s" },
  { name: "Rajyash", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hgunbX3AmaEzPm-8o7uxwY6iftF9s4wMYw&s" },
  { name: "Maruti", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mRdba7xOJl2pgwvC_Xw_5xgj10jfdHw5iQ&s" },
  { name: "Aryavrat", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6t1Xq76PBdfwlSCcZJEKBAB1xzG1YjqzGA&s" },
  { name: "NB Group", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSupzaiRoXqTy7cigH57pPc95rzmpFIrFjg&s" },
  { name: "Venus", src: "https://media.licdn.com/dms/image/v2/D4D0BAQFbicdcKcgi5A/company-logo_200_200/B4DZagNvxVHQAI-/0/1746444686035/venusinfrastructure_logo?e=2147483647&v=beta&t=W4Vv8PXouM0zmh2SKs9cN4l3Qb_WqsXO83PvwFN_Pso" },
  { name: "Sankalp", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljsbnYkwcO6oBIKYn_tRCXo-INbOdJfjLZQ&s" },
  { name: "Synthesis", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6Eka-c7VauIK107mNZNHYncLtvx9mjDgKg&s" },
  { name: "Rashmi", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKhKORjuntV08icBvsoWAEeP0Ib3RimbfzQ&s" },
  { name: "Aaryan", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLncF77SRdfgrtk6i5kURzD5RzMuItuChq7w&s" },
  { name: "Goodvalue", src: "https://imgcdn.houssed.com/assets/Files/Developer/FirmLogos/5bb25d8ef88aa89de603038ae8af255a.webp" },
  // { name: "Saiyaam", src: "/builders/saiyaam.png" },
  { name: "Binori", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKf7yAuX7Bwq_tetCTgObgOTTbcFae91E8w&s" },
  { name: "Triveni", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uRe_GJluussaLqRDvaYGeE-4Gsa_8P-8PA&s" },
];

export default function TrustedDevelopersSlider() {
  return (
    <section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold text-gray-900 mb-4">
          Trusted Developers We Work With
        </h2>
        <p className="text-gray-500 font-serif max-w-5xl mx-auto mb-12">
          We collaborate with reputed developers who share our commitment to quality, transparency and timely delivery.
        </p>
      </div>

      {/* Continuous Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max gap-6 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 55,
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-45"
            >
              <img
                src={logo.src}
                className="h-12 md:h-25 object-contain transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}