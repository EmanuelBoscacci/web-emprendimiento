"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MessageSquare, Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

interface NavbarProps {
  onOpenModal: () => void;
  whatsappLink: string;
}

const NAV_ITEMS = [
  { label: "Soluciones", href: "#soluciones", id: "soluciones" },
  { label: "Pilares", href: "#por-que-nosotros", id: "por-que-nosotros" },
  { label: "Metodología", href: "#metodologia", id: "metodologia" },
  { label: "Comparativa", href: "#comparativa", id: "comparativa" },
  { label: "Preguntas", href: "#faq", id: "faq" },
];

export default function Navbar({ onOpenModal, whatsappLink }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for compact navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to detect the active section
  useEffect(() => {
    const sectionIds = ["soluciones", "por-que-nosotros", "metodologia", "comparativa", "faq", "contacto"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Close mobile menu on hash click or resize
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 border backdrop-blur-2xl ${
          isMobileMenuOpen ? "rounded-2xl sm:rounded-3xl" : "rounded-full"
        } ${
          isScrolled
            ? "bg-[#050b14]/90 border-[#1c5c8a]/60 shadow-[0_12px_40px_rgba(5,11,20,0.9),0_0_25px_rgba(28,92,138,0.25)] py-2 px-4 sm:px-6"
            : "bg-[#050b14]/75 border-[#1c5c8a]/35 shadow-[0_8px_30px_rgba(5,11,20,0.8),0_0_15px_rgba(28,92,138,0.15)] py-2.5 sm:py-3 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Name */}
          <div
            onClick={scrollToTop}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          >
            <BrandLogo size="sm" variant="glow" />

            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-wider uppercase text-white group-hover:text-[#f8fafc] transition-colors leading-none">
                Punto Litoral
              </span>
              <span className="hidden sm:inline-block text-[9px] font-mono text-[#3a8ec4] tracking-widest leading-tight mt-0.5 uppercase font-semibold">
                Productividad & Automatización
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links with animated active pill */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-[#f8fafc]/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-[#1c5c8a]/30 border border-[#1c5c8a]/60 rounded-full -z-10 shadow-[0_0_15px_rgba(28,92,138,0.3)]"
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 shrink-0">
            {/* WhatsApp direct icon link */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Escribinos por WhatsApp"
              className="p-2 sm:px-3 sm:py-1.5 rounded-full border border-[#1c5c8a]/40 bg-[#0c1f3d]/60 hover:bg-[#1c5c8a]/30 hover:border-[#1c5c8a] text-[#3a8ec4] hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(28,92,138,0.2)]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Agendar Diagnóstico Button */}
            <button
              onClick={onOpenModal}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#1c5c8a] cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#1c5c8a] via-[#3a8ec4] to-[#0c1f3d] rounded-full opacity-80 group-hover:opacity-100 transition-opacity blur-[1px]" />
              <span className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#050b14] text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white shadow-[0_0_15px_rgba(28,92,138,0.35)]">
                <Calendar className="w-3.5 h-3.5 text-[#3a8ec4]" />
                <span className="hidden sm:inline">Agendar </span>
                <span>Diagnóstico</span>
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-[#3a8ec4]" />
              ) : (
                <Menu className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden border-t border-white/10 mt-3 pt-3 pb-2"
            >
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-[#1c5c8a]/30 text-white border border-[#1c5c8a]/40"
                          : "text-[#f8fafc]/75 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#3a8ec4]/70" />
                    </a>
                  );
                })}

                <div className="pt-2 mt-1 border-t border-white/5 flex items-center justify-between text-xs text-[#f8fafc]/50 font-mono px-2">
                  <span>Sunchales y Santa Fe</span>
                  <span className="text-[#3a8ec4]">Presencial & Remoto</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
