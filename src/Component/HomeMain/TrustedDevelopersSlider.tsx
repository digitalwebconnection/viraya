import { motion } from "framer-motion";

const logos = [
  { name: "Sankalp Property", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljsbnYkwcO6oBIKYn_tRCXo-INbOdJfjLZQ&s" },
  { name: "Taj Skyline", src: "https://sankalpproperty.com/wp-content/uploads/2023/05/Taj-Skyline-Ahmebad.png" },
  { name: "Venus", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XIU9__TpNwXc31mdsF77EEl5WZOnwXgGFA&s" },
  { name: "GAP", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmq2MCISiMs7qSJmNc0IDmJcstuGC1xwH_A&s" },
  { name: "Kaavyaratna", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQnzJghVvBG406t3eGEshHS3_paldnVVYGA&s" },
  { name: "Sobha", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cLtXM_akENgsViPYZ_YSl8xCsNf85VeI5w&s" },
  { name: "Shilp", src: "https://media.licdn.com/dms/image/v2/C560BAQHAWP0nZGN1TQ/company-logo_200_200/company-logo_200_200/0/1630617946999?e=2147483647&v=beta&t=KpEZ6tU0NxI6g_x1_FwH7mr2Jjkr9zaOpy9ME72Q-hE" },
  { name: "binori", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gy4qYMKKmnKkyE6DlY-dJyr77EsFkAVtnA&s" },
  { name: "reshmi", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKhKORjuntV08icBvsoWAEeP0Ib3RimbfzQ&s" },
  { name: "vanus", src: "https://media.licdn.com/dms/image/v2/D4D0BAQFbicdcKcgi5A/company-logo_200_200/B4DZagNvxVHQAI-/0/1746444686035/venusinfrastructure_logo?e=2147483647&v=beta&t=W4Vv8PXouM0zmh2SKs9cN4l3Qb_WqsXO83PvwFN_Pso" },
  { name: "gap", src: "https://pbs.twimg.com/profile_images/1838093848477839360/IpC_PbqQ_400x400.jpg" },
];

export default function TrustedDevelopersSlider() {
  return (
    <section className="py-20 bg-white overflow-hidden">
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
            duration: 25,
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
                alt={logo.name}
                className="h-12 md:h-25 object-contain transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}