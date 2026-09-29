"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MessageSquare, Calendar, CheckCircle2, Sparkles, Clock, ShieldCheck } from "lucide-react";

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for fluid, natural physics
  const mouseX = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 22 });

  // Symmetrical rotation mapping (-6deg to +6deg)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  // Subtle shine highlight position across the glass
  const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-5xl mx-auto py-8 sm:py-12 px-2 sm:px-6 select-none"
      style={{ perspective: 1200 }}
    >
      {/* 3D Tilting Frame */}
      <motion.div
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl border border-[#1c5c8a]/50 bg-[#0c1f3d]/70 backdrop-blur-2xl shadow-[0_25px_70px_rgba(5,11,20,0.9),0_0_50px_rgba(28,92,138,0.25)] ring-1 ring-white/10"
      >
        {/* Soft Ambient Backlight */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#1c5c8a]/30 via-[#3a8ec4]/20 to-[#0c1f3d]/40 blur-2xl -z-10 pointer-events-none opacity-80" />

        {/* Window Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 border-b border-[#1c5c8a]/30 bg-[#050b14]/80 rounded-t-3xl">
          {/* OS Control Buttons */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.6)]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.5)]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.6)]" />
          </div>

          {/* Minimalist Badge Header */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1f3d]/80 border border-[#1c5c8a]/40 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#f8fafc]/90">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline text-[#3a8ec4]">SOFTWARE EN PRODUCCIÓN // </span>
            <span className="font-semibold text-white">MIPUNTO PROFESIONAL</span>
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-emerald-400">
            <span className="hidden md:inline text-white/60">ESTADO:</span>
            <span className="bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-md font-semibold">
              ACTIVO
            </span>
          </div>
        </div>

        {/* Dashboard Image Viewport */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.8] overflow-hidden rounded-b-3xl bg-[#050b14]">
          <Image
            src="/turnero-dashboard.png"
            alt="MiPunto Profesional - Dashboard de Gestión de Turnos y Automatizaciones"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
            className="object-cover object-top transition-transform duration-700 hover:scale-[1.01]"
          />

          {/* Subtle gradient vignette to blend edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating Hotspot 1: Recordatorios Automáticos (Desktop Floating with 3D Parallax) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(45px)" }}
          className="hidden sm:flex absolute -top-6 -right-6 z-20 p-3.5 sm:p-4 rounded-2xl border border-emerald-500/40 bg-[#050b14]/90 backdrop-blur-xl shadow-[0_10px_35px_rgba(5,11,20,0.9),0_0_20px_rgba(16,185,129,0.3)] items-center gap-3 max-w-xs"
        >
          <div className="relative w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <MessageSquare className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-white truncate">
              Recordatorios Automáticos
            </h4>
            <p className="text-[10px] sm:text-xs text-[#f8fafc]/75 font-light leading-snug">
              Avisos 24h antes por WhatsApp • Cero ausencias
            </p>
          </div>
        </motion.div>

        {/* Floating Hotspot 2: Sincronización en Tiempo Real (Desktop Floating with 3D Parallax) */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          style={{ transform: "translateZ(45px)" }}
          className="hidden sm:flex absolute -bottom-6 -left-6 z-20 p-3.5 sm:p-4 rounded-2xl border border-[#1c5c8a]/50 bg-[#050b14]/90 backdrop-blur-xl shadow-[0_10px_35px_rgba(5,11,20,0.9),0_0_25px_rgba(28,92,138,0.35)] items-center gap-3 max-w-xs"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1c5c8a]/20 border border-[#1c5c8a]/40 flex items-center justify-center text-[#3a8ec4] shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-white truncate">
              Sincronización en Vivo
            </h4>
            <p className="text-[10px] sm:text-xs text-[#f8fafc]/75 font-light leading-snug">
              Turnos online y agenda unificada al instante
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Feature Badges (Stacked neatly below mockup on small screens) */}
      <div className="grid grid-cols-1 gap-2.5 mt-4 sm:hidden">
        <div className="p-3 rounded-2xl border border-emerald-500/30 bg-[#0c1f3d]/60 backdrop-blur-xl flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <MessageSquare className="w-4 h-4 text-emerald-400 absolute" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">
              Recordatorios Automáticos
            </h4>
            <p className="text-[10px] text-[#f8fafc]/70 font-light">
              Avisos 24h antes por WhatsApp • Cero ausencias
            </p>
          </div>
        </div>

        <div className="p-3 rounded-2xl border border-[#1c5c8a]/40 bg-[#0c1f3d]/60 backdrop-blur-xl flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#1c5c8a]/20 border border-[#1c5c8a]/40 flex items-center justify-center text-[#3a8ec4] shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">
              Sincronización en Vivo
            </h4>
            <p className="text-[10px] text-[#f8fafc]/70 font-light">
              Turnos online y agenda unificada al instante
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
