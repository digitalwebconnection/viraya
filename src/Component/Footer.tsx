"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Code2,
  Phone,
  Mail,
 Pin,
} from "lucide-react";
import logo from "../assets/Virayalogo.png";
import { useRef, useState } from "react";
import PersonalServiceForm from "../Component/HomeMain/PersonalServiceForm";

const Footer = () => {
  const COMPANY_URL = "https://digitalwebconnection.com";
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const [open, setOpen] = useState(false);

  function handleLinkClick(e: React.MouseEvent) {
    e.preventDefault();
    setTimeout(() => {
      window.open(COMPANY_URL, "_blank", "noopener,noreferrer");
    }, 0);
  }

  return (
    <>
      <footer className="bg-[#121a23] text-gray-400 pt-10 pb-6 relative">

        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#c7a25a] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <a href="#home">
              <img
                src={logo}
                alt="Viraya Realty Logo"
                className="h-20 object-contain mb-6"
              />
            </a>

            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/virayarealty" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F2A36] hover:bg-[#c7a25a] hover:text-black transition">
                <Facebook size={18} />
              </a>

              <a href="https://www.instagram.com/virayarealty" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F2A36] hover:bg-[#c7a25a] hover:text-black transition">
                <Instagram size={18} />
              </a>

              <a href="https://www.linkedin.com/company/virayarealty/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F2A36] hover:bg-[#c7a25a] hover:text-black transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold font-['Playfair_Display'] mb-6 text-lg">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm">
              {[
                { name: "Home", id: "home" },
                { name: "About Us", id: "about" },
                { name: "Insights", id: "insights" },
                { name: "Founder", id: "founder" },
                { name: "Partners", id: "partners" },
                { name: "Protocol", id: "protocol" },
                { name: "Why Viraya", id: "whyviraya" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-[#c7a25a] transition flex items-center gap-2 group"
                  >
                   
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold font-['Playfair_Display'] mb-6 text-lg">
              Services
            </h3>

            <ul className="space-y-4 text-sm">
              {[
                { name: "Residential", id: "residential" },
                { name: "Commercial", id: "commercial" },
                { name: "Pre-Leased", id: "preleased" },
                { name: "Plot Advisory", id: "plotadvisory" },
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href={`#${service.id}`}
                    className="hover:text-[#c7a25a] transition flex items-center gap-2 group"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="text-white font-semibold font-['Playfair_Display'] mb-6 text-lg">
              Let's Build Your Future
            </h3>
<div className="space-y-4 pb-5">
  
  {/* Phone */}
  <a 
    href="tel:+919821377645" 
    className="flex gap-4 items-center hover:text-[#c7a25a] transition"
  >
    <Phone size={25} className="text-[#c7a25a]" />
    +91 9821377645
  </a>

  {/* Email */}
  <a 
    href="mailto:param@viraya.in" 
    className="flex gap-5 items-center hover:text-[#c7a25a] transition"
  >
    <Mail size={25} className="text-[#c7a25a]" />
    param@viraya.in
  </a>

  {/* Address */}
  <a 
    href="https://www.google.com/maps/search/?api=1&query=730+Shyamal+Cross+Rd,+Rajmani+Society,+Shyamal,+Ahmedabad,+Gujarat+380015"
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-6 items-start hover:text-[#c7a25a] transition"
  >
    <Pin size={45} className="text-[#c7a25a] mt-1" />
    730, Shyamal Cross Rd, Rajmani Society, Shyamal, Ahmedabad, Gujarat 380015
  </a>

</div>
            <button
              onClick={() => setOpen(true)}
              className="bg-[#c7a25a] hover:bg-white hover:text-black text-black px-12 py-4 font-semibold tracking-wide transition-all duration-300 shadow-xl rounded-2xl active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t max-w-7xl mx-auto border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">

          <div>
            © {new Date().getFullYear()} Viraya Realty. All rights reserved.
          </div>

          <a
            ref={linkRef}
            href={COMPANY_URL}
            onClick={handleLinkClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white mt-4 md:mt-0"
          >
            <Code2 className="w-5 h-5 text-[#c7a25a]" />
            Developed by
            <span className="font-semibold text-[#c7a25a] hover:underline">
              Digital Web Connection
            </span>
          </a>
        </div>
      </footer>

      {/* ✅ Popup Outside Footer */}
      <PersonalServiceForm
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Footer;