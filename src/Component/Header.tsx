"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
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
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Insights", id: "insights" },
    { name: "Founder", id: "founder" },
    { name: "Contact", id: "contact" },
  ];

  return (
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
        <nav className="hidden md:flex items-center gap-8 font-['Playfair_Display']">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              className="text-white hover:text-[#c7a25a] font-medium transition duration-300 relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#c7a25a] transition-all duration-300 group-hover:w-full"></span>
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

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1F2A36] shadow-lg px-6 py-6 space-y-5">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              className="block text-white hover:text-[#c7a25a] transition text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;