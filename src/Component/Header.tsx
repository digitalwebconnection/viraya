"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/Virayalogo.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Insights", id: "insights" },
    { name: "Founder", id: "founder" },
    { name: "Partners", id: "partners" },
    { name: "Protocol", id: "protocol" },
    { name: "Why Viraya", id: "whyviraya" },
    { name: "Contact", id: "contact" }
  ];

  const serviceLinks = [
    { name: "Residential", id: "residential" },
    { name: "Commercial", id: "commercial" },
    { name: "Pre-Leased", id: "preleased" },
    { name: "Plot Advisory", id: "plotadvisory" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          showHeader ? "translate-y-0" : "-translate-y-2"
        } bg-[#1F2A36] shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">
          
          {/* Logo */}
          <a href="#home">
            <img
              src={logo}
              alt="Viraya Realty Logo"
              className="h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-['Playfair_Display'] text-white">

            {navLinks.slice(0, 6).map((link, index) => (
              <a
                key={index}
                href={`#${link.id}`}
                className="hover:text-[#c7a25a] transition duration-300"
              >
                {link.name}
              </a>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#c7a25a] transition">
                Services <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 mt-4 w-38 bg-white text-black rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {serviceLinks.map((service, index) => (
                  <a
                    key={index}
                    href={`#${service.id}`}
                    className="block px-6 py-3 hover:bg-[#1F2A36] hover:text-[#c7a25a] "
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            {navLinks.slice(6).map((link, index) => (
              <a
                key={index}
                href={`#${link.id}`}
                className="hover:text-[#c7a25a] transition duration-300"
              >
                {link.name}
              </a>
            ))}


          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#1F2A36] px-6 py-6 space-y-5 text-white">
            {navLinks.slice(0, 6).map((link, index) => (
              <a
                key={index}
                href={`#${link.id}`}
                className="block"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div>
              <p className="font-semibold mb-2">Services</p>
              {serviceLinks.map((service, index) => (
                <a
                  key={index}
                  href={`#${service.id}`}
                  className="block ml-4 mb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </a>
              ))}
            </div>

            {navLinks.slice(6).map((link, index) => (
              <a
                key={index}
                href={`#${link.id}`}
                className="block"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

      
          </div>
        )}
      </header>

    
    </>
  );
};

export default Header;