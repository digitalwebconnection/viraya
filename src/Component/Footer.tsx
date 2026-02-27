import {
  Facebook,
  Instagram,
  Linkedin,
  // Youtube,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Code2,
} from "lucide-react";
import logo from "../assets/Virayalogo.png";
import { useRef, useState } from "react";
import PersonalServiceForm from "../Component/HomeMain/PersonalServiceForm";

const Footer = () => {
  const COMPANY_URL = "https://digitalwebconnection.com";
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const [open, setOpen] = useState(false);


  function handleLinkClick(e: React.MouseEvent) {
    // Prevent default and do a JS fallback open — this will open even if click events are intercepted
    // Note: we still keep href native behavior for normal users; fallback is for tricky overlay cases.
    e.preventDefault();
    // use setTimeout to avoid double navigation in some browsers
    setTimeout(() => {
      window.open(COMPANY_URL, "_blank", "noopener,noreferrer");
    }, 0);
  }

  return (
    <footer className="bg-[#121a23] text-gray-400 pt-10  pb-6 relative">

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#c7a25a] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <img
            src={logo}
            alt="Viraya Realty Logo"
            className="h-20 object-contain mb-6"
          />



          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a
              href="https://www.facebook.com/virayarealty"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F2A36] hover:bg-[#c7a25a] hover:text-black transition-all duration-300"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/virayarealty?igsh=MTBncnVvZGNwankweg=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F2A36] hover:bg-[#c7a25a] hover:text-black transition-all duration-300"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.linkedin.com/company/virayarealty/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F2A36] hover:bg-[#c7a25a] hover:text-black transition-all duration-300"
            >
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
              "Home",
              "About Scheme",
              "Why Choose Us",
              "Locations",
              "Gallery",
              "Contact",
            ].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-[#c7a25a] transition flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition"
                  />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold font-['Playfair_Display'] mb-6 text-lg">
            Contact Info
          </h3>

          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3 hover:text-[#c7a25a] transition">
              <MapPin size={35} className="mt-1" />
              <span>
                730, Shyamal Cross Rd, Rajmani Society,
                Shyamal, Ahmedabad, Gujarat 380015
              </span>
            </li>

            <li className="flex items-center gap-3 hover:text-[#c7a25a] transition">
              <Phone size={18} />
              <a href="tel:+919821377645">+91 98213 77645</a>
            </li>

            <li className="flex items-center gap-3 hover:text-[#c7a25a] transition">
              <Mail size={18} />
              <a href="mailto:info@VirayRealty.com">
                info@VirayRealty.com
              </a>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div>
          <h3 className="text-white font-semibold font-['Playfair_Display'] mb-6 text-lg">
            Let's Build Your Future
          </h3>

          <p className="text-sm text-gray-500 mb-6">
            Looking for premium plots in prime locations? Connect with us
            today and secure your dream investment.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-[#c7a25a]  hover:bg-white hover:text-black text-black px-12 py-4 font-semibold tracking-wide transition-all duration-300 shadow-xl rounded-2xl active:scale-95 font-['Inter']"
          >
            Book a Site Visit
          </button>
          <PersonalServiceForm
            isOpen={open}
            onClose={() => setOpen(false)}
          />

        </div>
      </div>
      <div className="border-t max-w-7xl mx-auto font-serif border-gray-800 mt-7 flex justify-between">{/* Divider */}
        <div className=" pt-6 text-center text-lg text-gray-600">
          © {new Date().getFullYear()} Viraya Realty. All rights reserved.
        </div>
        <div>
            <a
              ref={linkRef}
              href={COMPANY_URL}
              onClick={handleLinkClick}
              target="_blank"
              rel="noopener noreferrer"
              className="flex pt-6 md:items-center md:justify-center gap-2 text-white text-[13px] md:text-lg cursor-pointer"
              style={{ zIndex: 9999, pointerEvents: "auto" }}
              aria-label="Digital Web Connection (opens in new tab)"
            >
              <Code2 className="w-5 h-5 text-[#c7a25a]" />
              Developed by
              <span className="font-semibold text-[#c7a25a] hover:underline">Digital Web Connection</span>
            </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
