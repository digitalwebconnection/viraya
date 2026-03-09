import { useEffect, useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // To manually close the popup

  const phone = "919821377645";
  const message = "Hello Viraya Realty, I would like to know more about your properties.";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
      
      {/* Animated Popup Message */}
      <AnimatePresence>
        {showPopup && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="relative bg-white shadow-2xl rounded-2xl p-5 w-72 border border-gray-100 mb-2"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <FaTimes size={14} />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-green-500" size={20} />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 tracking-tight">Viraya Realty</p>
                <p className="text-[10px] text-green-500 font-semibold uppercase tracking-wider">Online Now</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              👋 Hi! Looking for your dream property? Chat with our experts now.
            </p>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl text-sm font-bold shadow-md shadow-green-200 transition-all active:scale-95"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing WhatsApp Icon */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-xl z-10"
      >
        {/* The "Pulse" Rings */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-40"></span>
        
        <FaWhatsapp size={28} className="relative z-10" />
      </motion.a>
    </div>
  );
}