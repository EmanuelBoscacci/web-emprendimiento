"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

interface WhatsAppFabProps {
  whatsappLink: string;
}

export default function WhatsAppFab({ whatsappLink }: WhatsAppFabProps) {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-2.5 px-4 py-3 sm:py-3.5 rounded-full bg-[#050b14]/90 border border-[#1c5c8a]/60 backdrop-blur-xl text-white shadow-[0_10px_35px_rgba(5,11,20,0.9),0_0_25px_rgba(28,92,138,0.4)] hover:border-[#3a8ec4] transition-all cursor-pointer"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulsing radar waves */}
        <span className="absolute -inset-1 rounded-full bg-[#1c5c8a]/30 animate-ping pointer-events-none -z-10 duration-1000" />
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#1c5c8a] to-[#3a8ec4] opacity-50 blur-[2px] group-hover:opacity-100 transition-opacity -z-10" />

        {/* WhatsApp Icon with glowing background */}
        <div className="w-8 h-8 rounded-full bg-[#1c5c8a]/40 border border-[#3a8ec4]/50 flex items-center justify-center text-[#3a8ec4] group-hover:text-white group-hover:bg-[#1c5c8a] transition-all shrink-0">
          <MessageSquare className="w-4 h-4 fill-current" />
        </div>

        {/* Text for desktop / tablet */}
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs font-semibold text-white leading-tight">
            ¿Dudas o Consultas?
          </span>
          <span className="text-[10px] font-mono text-[#3a8ec4] tracking-wide leading-tight">
            Hablá con nosotros
          </span>
        </div>
      </motion.a>
    </div>
  );
}
