"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  FileSpreadsheet,
  LineChart,
  FileCheck2,
  LayoutDashboard,
  Clock,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Bot,
  RefreshCw,
  TrendingUp,
  SlidersHorizontal,
  MapPin,
  Calendar,
} from "lucide-react";
import SplineViewer from "@/components/SplineViewer";
import BrandLogo from "@/components/BrandLogo";
import LeadModal from "@/components/LeadModal";

// Enlaces de contacto configurables (WhatsApp y Diagnóstico)
const WHATSAPP_NUMBER = "5493493400000"; // Reemplazar con el número oficial de Punto Litoral
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Punto Litoral! Me gustaría consultar por automatizaciones y optimización de tareas repetitivas en mi negocio."
)}`;

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050b14] text-[#f8fafc] selection:bg-[#1c5c8a]/40 selection:text-white">
      {/* Background ambient light & grid patterns */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle dot matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-80" />

        {/* Ambient radial glows with Punto Litoral palette */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[520px] bg-gradient-to-b from-[#1c5c8a]/25 via-[#0c1f3d]/30 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[35%] -left-[15%] w-[550px] h-[550px] bg-[#0c1f3d]/45 blur-[150px] rounded-full" />
        <div className="absolute top-[60%] -right-[15%] w-[550px] h-[550px] bg-[#1c5c8a]/20 blur-[150px] rounded-full" />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[#0c1f3d]/80 bg-[#050b14]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            {/* High-contrast Brand Logo */}
            <BrandLogo size="md" variant="glow" />

            <div className="flex flex-col">
              <span className="text-base font-bold tracking-wider uppercase text-white group-hover:text-[#f8fafc] transition-colors leading-none">
                Punto Litoral
              </span>
              <span className="text-[10px] font-mono text-[#1c5c8a] tracking-widest leading-tight mt-1 uppercase font-semibold">
                Productividad & Automatización
              </span>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#f8fafc]/70 font-medium">
            <a href="#soluciones" className="hover:text-white transition-colors">
              Soluciones
            </a>
            <a href="#por-que-nosotros" className="hover:text-white transition-colors">
              ¿Por qué Punto Litoral?
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </a>
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs uppercase tracking-wider font-mono px-4 py-2 rounded-full border border-[#1c5c8a]/50 bg-[#0c1f3d]/70 hover:bg-[#1c5c8a]/30 hover:border-[#1c5c8a] transition-all text-[#f8fafc] shadow-[0_0_15px_rgba(28,92,138,0.25)] flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#3a8ec4]" />
              <span>Agendar Diagnóstico</span>
            </button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Subtle glowing badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group relative inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#1c5c8a]/35 bg-[#0c1f3d]/60 backdrop-blur-xl shadow-[0_0_25px_rgba(28,92,138,0.2)] hover:border-[#1c5c8a] transition-all duration-300 cursor-pointer mb-8"
        >
          {/* Subtle perimeter glow effect on hover */}
          <span className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#1c5c8a]/40 via-[#3a8ec4]/40 to-[#0c1f3d]/40 opacity-0 group-hover:opacity-100 blur-[3px] transition-opacity duration-300 -z-10" />

          {/* Animated pulsing dot in electric blue */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1c5c8a] opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3a8ec4]" />
          </span>

          <span className="text-xs font-mono tracking-wider uppercase text-[#f8fafc]/90 group-hover:text-white transition-colors flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#3a8ec4]" />
            Sunchales & Santa Fe • Presencial y Remoto
          </span>

          <Sparkles className="w-3.5 h-3.5 text-[#3a8ec4] group-hover:text-white transition-colors" />
        </motion.div>

        {/* Main Hero Headline with Opacity & Vertical Translation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Recuperá el tiempo que tu negocio{" "}
            <span className="block mt-1 bg-gradient-to-r from-[#f8fafc] via-[#b9d3ea] to-[#1c5c8a] bg-clip-text text-transparent">
              pierde en tareas repetitivas.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#f8fafc]/80 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed pt-2"
          >
            <span className="font-semibold text-white">
              No vendemos tecnología.
            </span>{" "}
            Vendemos tiempo, eficiencia y mejores decisiones para que tu equipo se enfoque en hacer crecer el negocio.
          </motion.p>
        </motion.div>

        {/* Action Buttons with Electric Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          {/* Main button opening LeadModal */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#1c5c8a] cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#1c5c8a] via-[#3a8ec4] to-[#0c1f3d] rounded-full opacity-85 group-hover:opacity-100 transition-opacity blur-[2px] group-hover:blur-[3px]" />
            <span className="relative flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#050b14] font-medium text-sm text-[#f8fafc] group-hover:text-white transition-colors duration-200 shadow-[0_0_35px_rgba(28,92,138,0.4)]">
              <span>Agendar Diagnóstico Gratuito</span>
              <ArrowRight className="w-4 h-4 text-[#3a8ec4] group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
            </span>
          </motion.button>

          {/* Secondary Ghost Button to WhatsApp */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(12, 31, 61, 0.85)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-[#1c5c8a]/35 bg-[#0c1f3d]/50 backdrop-blur-md text-sm font-medium text-[#f8fafc] hover:text-white hover:border-[#1c5c8a]/70 transition-all cursor-pointer shadow-[0_4px_20px_rgba(5,11,20,0.5)]"
          >
            <MessageSquare className="w-4 h-4 text-[#3a8ec4]" />
            <span>Consultar por WhatsApp</span>
          </motion.a>
        </motion.div>

        {/* Interactive 3D Spatial Canvas Prepared for Spline */}
        <motion.div
          id="spline-viewport"
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl mt-16 sm:mt-20"
        >
          {/* Ambient backlight behind the 3D frame */}
          <div className="absolute -inset-3 bg-gradient-to-r from-[#1c5c8a]/35 via-[#3a8ec4]/20 to-[#0c1f3d]/45 rounded-3xl blur-2xl opacity-75 pointer-events-none -z-10" />

          {/* Spline 3D Viewport Component */}
          <SplineViewer sceneUrl="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
        </motion.div>
      </main>

      {/* SECTION 2: Bento Grid of Solutions */}
      <section
        id="soluciones"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0c1f3d]/80"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-[#3a8ec4] bg-[#0c1f3d]/60 border border-[#1c5c8a]/30 px-3.5 py-1.5 rounded-full inline-block mb-3"
          >
            Soluciones y Servicios Concretos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Automatización inteligente aplicada a tus operaciones
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#f8fafc]/70 text-base sm:text-lg mt-4 font-light"
          >
            No implementamos sistemas genéricos. Conectamos tus canales, liberamos a tu personal y blindamos la calidad de tus datos.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1 (Large - Spans 7 cols): Clasificación y Ruteo Inteligente */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 relative p-6 sm:p-8 rounded-3xl border border-[#1c5c8a]/30 bg-[#0c1f3d]/40 backdrop-blur-xl hover:border-[#1c5c8a]/60 hover:bg-[#0c1f3d]/60 transition-all duration-300 group shadow-[0_15px_40px_rgba(5,11,20,0.7)] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#1c5c8a]/20 to-transparent blur-3xl pointer-events-none -z-10" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1c5c8a]/20 border border-[#1c5c8a]/40 flex items-center justify-center mb-6 text-[#3a8ec4] group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase text-[#3a8ec4] tracking-wider font-semibold">
                Comunicación Inmediata
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                Clasificación y Ruteo Inteligente (WhatsApp / Email)
              </h3>
              <p className="text-sm sm:text-base text-[#f8fafc]/75 leading-relaxed font-light max-w-xl">
                Lectura contextual de consultas entrantes, categorización automática por urgencia o área comercial, y respuestas inmediatas a preguntas frecuentes sin intervención humana.
              </p>
            </div>

            {/* Interactive Simulated UI */}
            <div className="mt-8 p-3 sm:p-4 rounded-2xl bg-[#050b14]/70 border border-[#1c5c8a]/25 space-y-2.5 w-full overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#f8fafc]/60 border-b border-white/5 pb-2 gap-2">
                <span className="flex items-center gap-1.5 min-w-0 truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="truncate">Ruteador Activo • Tiempo prom: 1.8s</span>
                </span>
                <span className="text-[#3a8ec4] shrink-0 text-[10px] sm:text-[11px]">0 mensajes perdidos</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-[#0c1f3d]/50 text-xs sm:text-sm gap-2 min-w-0">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <Bot className="w-4 h-4 text-[#3a8ec4] shrink-0" />
                  <span className="text-white text-xs sm:text-sm truncate">
                    "Hola, necesito presupuesto de 50 unidades urgente"
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-mono text-[10px] sm:text-xs shrink-0 whitespace-nowrap">
                  Urgente → Ventas
                </span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-[#0c1f3d]/50 text-xs sm:text-sm gap-2 min-w-0">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <Bot className="w-4 h-4 text-[#3a8ec4] shrink-0" />
                  <span className="text-white text-xs sm:text-sm truncate">
                    "¿Cuáles son los horarios de entrega en Santa Fe?"
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-[#1c5c8a]/30 text-[#f8fafc] font-mono text-[10px] sm:text-xs shrink-0 whitespace-nowrap">
                  Respuesta Auto
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 (Spans 5 cols): Integración Directa entre Planillas y Software */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 relative p-6 sm:p-8 rounded-3xl border border-[#1c5c8a]/30 bg-[#0c1f3d]/40 backdrop-blur-xl hover:border-[#1c5c8a]/60 hover:bg-[#0c1f3d]/60 transition-all duration-300 group shadow-[0_15px_40px_rgba(5,11,20,0.7)] flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1c5c8a]/20 border border-[#1c5c8a]/40 flex items-center justify-center mb-6 text-[#3a8ec4] group-hover:scale-110 transition-transform">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase text-[#3a8ec4] tracking-wider font-semibold">
                Sincronización Total
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                Integración de Sistemas
              </h3>
              <p className="text-sm text-[#f8fafc]/75 leading-relaxed font-light">
                Conexión bidireccional entre WhatsApp, Excel / Google Sheets, CRMs y tus sistemas de gestión de stock o facturación. Sin duplicar cargas.
              </p>
            </div>

            {/* Sync Flow Indicator */}
            <div className="mt-8 p-3 sm:p-4 rounded-2xl bg-[#050b14]/70 border border-[#1c5c8a]/25 w-full overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#f8fafc]/60 border-b border-white/5 pb-2 mb-3">
                <span className="flex items-center gap-1.5 truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="truncate">Sincronización Activa</span>
                </span>
                <span className="text-[#3a8ec4] shrink-0 flex items-center gap-1 text-[10px]">
                  <RefreshCw className="w-3 h-3 animate-spin text-[#1c5c8a]" />
                  <span>Bidireccional</span>
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 text-center font-mono">
                <div className="flex flex-col items-center justify-center p-1.5 sm:p-2.5 rounded-xl bg-[#0c1f3d] border border-[#1c5c8a]/30 min-w-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-[#3a8ec4] truncate w-full">WhatsApp</span>
                  <span className="text-[9px] sm:text-[10px] text-neutral-400 mt-0.5 truncate w-full">Entrada</span>
                </div>
                <div className="flex flex-col items-center justify-center p-1.5 sm:p-2.5 rounded-xl bg-[#0c1f3d] border border-emerald-500/30 min-w-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-emerald-400 truncate w-full">G. Sheets</span>
                  <span className="text-[9px] sm:text-[10px] text-neutral-400 mt-0.5 truncate w-full">Actualización</span>
                </div>
                <div className="flex flex-col items-center justify-center p-1.5 sm:p-2.5 rounded-xl bg-[#0c1f3d] border border-cyan-500/30 min-w-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-cyan-300 truncate w-full">CRM / ERP</span>
                  <span className="text-[9px] sm:text-[10px] text-neutral-400 mt-0.5 truncate w-full">Facturación</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 (Spans 4 cols): Monitoreo Web y Alertas Automáticas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-4 relative p-6 sm:p-8 rounded-3xl border border-[#1c5c8a]/30 bg-[#0c1f3d]/40 backdrop-blur-xl hover:border-[#1c5c8a]/60 hover:bg-[#0c1f3d]/60 transition-all duration-300 group shadow-[0_15px_40px_rgba(5,11,20,0.7)] flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1c5c8a]/20 border border-[#1c5c8a]/40 flex items-center justify-center mb-6 text-[#3a8ec4] group-hover:scale-110 transition-transform">
                <LineChart className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase text-[#3a8ec4] tracking-wider font-semibold">
                Control en Tiempo Real
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                Monitoreo y Alertas
              </h3>
              <p className="text-sm text-[#f8fafc]/75 leading-relaxed font-light">
                Seguimiento automático de cotizaciones (dólar, insumos clave), control de precios de competencia y alertas inmediatas ante desvíos o quiebres.
              </p>
            </div>

            {/* Live alert tag */}
            <div className="mt-6 p-3 rounded-xl bg-[#050b14]/70 border border-[#1c5c8a]/20 flex items-center justify-between text-xs w-full overflow-hidden gap-2">
              <span className="flex items-center gap-2 text-white min-w-0 truncate">
                <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">Insumo Crítico</span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                Alerta Telegram / WA
              </span>
            </div>
          </motion.div>

          {/* Card 4 (Spans 4 cols): Cálculos, Reportes y Documentos Automáticos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 relative p-6 sm:p-8 rounded-3xl border border-[#1c5c8a]/30 bg-[#0c1f3d]/40 backdrop-blur-xl hover:border-[#1c5c8a]/60 hover:bg-[#0c1f3d]/60 transition-all duration-300 group shadow-[0_15px_40px_rgba(5,11,20,0.7)] flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1c5c8a]/20 border border-[#1c5c8a]/40 flex items-center justify-center mb-6 text-[#3a8ec4] group-hover:scale-110 transition-transform">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase text-[#3a8ec4] tracking-wider font-semibold">
                Documentación Inmediata
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                Presupuestos y Remitos
              </h3>
              <p className="text-sm text-[#f8fafc]/75 leading-relaxed font-light">
                Armado inmediato de presupuestos y remitos a partir de plantillas estandarizadas. Generación de reportes de rentabilidad automáticos.
              </p>
            </div>

            {/* Document preview pill */}
            <div className="mt-6 p-3 rounded-xl bg-[#050b14]/70 border border-[#1c5c8a]/20 flex items-center justify-between text-xs w-full overflow-hidden gap-2">
              <span className="flex items-center gap-2 text-white min-w-0 truncate">
                <CheckCircle2 className="w-4 h-4 text-[#3a8ec4] shrink-0" />
                <span className="truncate">Presupuesto PDF</span>
              </span>
              <span className="text-[10px] font-mono text-[#3a8ec4] bg-[#1c5c8a]/20 px-2 py-0.5 rounded shrink-0">
                Generado en 3 seg
              </span>
            </div>
          </motion.div>

          {/* Card 5 (Spans 4 cols): Paneles y Dashboards a Medida */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-4 relative p-6 sm:p-8 rounded-3xl border border-[#1c5c8a]/30 bg-[#0c1f3d]/40 backdrop-blur-xl hover:border-[#1c5c8a]/60 hover:bg-[#0c1f3d]/60 transition-all duration-300 group shadow-[0_15px_40px_rgba(5,11,20,0.7)] flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1c5c8a]/20 border border-[#1c5c8a]/40 flex items-center justify-center mb-6 text-[#3a8ec4] group-hover:scale-110 transition-transform">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase text-[#3a8ec4] tracking-wider font-semibold">
                Control Estratégico
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                Dashboards a Medida
              </h3>
              <p className="text-sm text-[#f8fafc]/75 leading-relaxed font-light">
                Sistemas internos y paneles web adaptados a la operatoria específica de tu empresa para tomar decisiones basadas en datos reales.
              </p>
            </div>

            {/* KPI pill */}
            <div className="mt-6 p-3 rounded-xl bg-[#050b14]/70 border border-[#1c5c8a]/20 flex items-center justify-between text-xs w-full overflow-hidden gap-2">
              <span className="flex items-center gap-2 text-white min-w-0 truncate">
                <SlidersHorizontal className="w-4 h-4 text-[#3a8ec4] shrink-0" />
                <span className="truncate">Métricas Clave</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded shrink-0">
                100% Personalizado
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: ¿Por qué Punto Litoral? (3 Pilares Visuales) */}
      <section
        id="por-que-nosotros"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0c1f3d]/80"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-[#3a8ec4] bg-[#0c1f3d]/60 border border-[#1c5c8a]/30 px-3.5 py-1.5 rounded-full inline-block mb-3"
          >
            Nuestra Diferencia
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            ¿Por qué Punto Litoral?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#f8fafc]/75 text-base sm:text-lg mt-4 font-light"
          >
            Abordamos cada desafío desde los cuellos de botella reales de tu equipo, no desde la complejidad teórica.
          </motion.p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pilar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-3xl border border-[#1c5c8a]/30 bg-[#0c1f3d]/40 backdrop-blur-xl hover:border-[#1c5c8a]/60 hover:bg-[#0c1f3d]/60 transition-all duration-300 group shadow-[0_15px_40px_rgba(5,11,20,0.7)] flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#1c5c8a]/20 border border-[#1c5c8a]/40 flex items-center justify-center mb-6 text-[#3a8ec4] group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#3a8ec4] font-semibold">
                Velocidad Operativa
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                Implementación en días
              </h3>
              <p className="text-sm sm:text-base text-[#f8fafc]/75 leading-relaxed font-light">
                No creemos en proyectos eternos de meses sin retorno tangible. Diagnosticamos el cuello de botella y ponemos en marcha la primera solución operativa en cuestión de días.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#f8fafc]/70">
              <span>Entrega ágil</span>
              <span className="text-[#3a8ec4] font-semibold">&lt; 10 días a producción</span>
            </div>
          </motion.div>

          {/* Pilar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative p-8 rounded-3xl border border-[#1c5c8a]/30 bg-[#0c1f3d]/40 backdrop-blur-xl hover:border-[#1c5c8a]/60 hover:bg-[#0c1f3d]/60 transition-all duration-300 group shadow-[0_15px_40px_rgba(5,11,20,0.7)] flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#1c5c8a]/20 border border-[#1c5c8a]/40 flex items-center justify-center mb-6 text-[#3a8ec4] group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#3a8ec4] font-semibold">
                Retorno Medible
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                Recuperación real de horas
              </h3>
              <p className="text-sm sm:text-base text-[#f8fafc]/75 leading-relaxed font-light">
                Medimos nuestro impacto en horas netas devueltas a tu equipo. Eliminamos entre 15 y 30 horas semanales de carga manual repetitiva por persona para enfocarlas en ventas y estrategia.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#f8fafc]/70">
              <span>Impacto directo</span>
              <span className="text-emerald-400 font-semibold">15h a 30h semanales</span>
            </div>
          </motion.div>

          {/* Pilar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-8 rounded-3xl border border-[#1c5c8a]/30 bg-[#0c1f3d]/40 backdrop-blur-xl hover:border-[#1c5c8a]/60 hover:bg-[#0c1f3d]/60 transition-all duration-300 group shadow-[0_15px_40px_rgba(5,11,20,0.7)] flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#1c5c8a]/20 border border-[#1c5c8a]/40 flex items-center justify-center mb-6 text-[#3a8ec4] group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#3a8ec4] font-semibold">
                Enfoque Pragmático
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                Tecnología adaptada a tu realidad
              </h3>
              <p className="text-sm sm:text-base text-[#f8fafc]/75 leading-relaxed font-light">
                No obligamos a tu empresa a cambiar de programas ni a pasar por meses de capacitación. Conectamos y automatizamos sobre las herramientas que tu gente ya utiliza (WhatsApp, Excel, tu ERP).
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#f8fafc]/70">
              <span>Curva de adopción</span>
              <span className="text-[#3a8ec4] font-semibold">Cero fricción de cambio</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Final High-Impact CTA */}
      <section
        id="contacto"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0c1f3d]/80"
      >
        <div className="relative rounded-3xl border border-[#1c5c8a]/40 bg-gradient-to-b from-[#0c1f3d]/80 via-[#0c1f3d]/40 to-[#050b14] p-10 sm:p-16 overflow-hidden text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(5,11,20,0.8)]">
          {/* Backlight halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#1c5c8a]/25 blur-[120px] rounded-full pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#3a8ec4] bg-[#050b14]/80 border border-[#1c5c8a]/40 px-4 py-1.5 rounded-full inline-block">
              Diagnóstico Gratuito • Sin Compromiso
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              ¿Cuánto tiempo pierde tu equipo esta semana en tareas que una máquina puede hacer mejor?
            </h2>

            <p className="text-[#f8fafc]/75 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Analizamos tus procesos actuales en una sesión de 30 minutos y te entregamos un plan concreto con los 3 cuellos de botella que podés resolver de inmediato.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#1c5c8a] cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#1c5c8a] via-[#3a8ec4] to-[#0c1f3d] rounded-full opacity-90 group-hover:opacity-100 transition-opacity blur-[2px]" />
                <span className="relative flex items-center gap-3 px-8 py-4 rounded-full bg-[#050b14] font-medium text-sm text-white shadow-[0_0_35px_rgba(28,92,138,0.5)]">
                  <Calendar className="w-4 h-4 text-[#3a8ec4]" />
                  <span>Agendar Diagnóstico Gratuito</span>
                  <ArrowRight className="w-4 h-4 text-[#3a8ec4] group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#f8fafc]/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Atención directa en Sunchales y Santa Fe</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="w-full border-t border-[#0c1f3d]/80 bg-[#050b14]/95 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <BrandLogo size="md" variant="glow" />
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-wider uppercase text-white leading-none">
                Punto Litoral
              </span>
              <span className="text-[10px] font-mono text-[#1c5c8a] tracking-widest mt-1">
                CONSULTORÍA DE PRODUCTIVIDAD Y AUTOMATIZACIÓN
              </span>
            </div>
          </div>

          <p className="text-xs text-[#f8fafc]/50 font-mono max-w-md">
            "No vendemos tecnología. Vendemos tiempo, eficiencia y mejores decisiones."
          </p>

          <div className="text-xs text-[#f8fafc]/50 font-mono">
            <p>Sunchales y Santa Fe de la Vera Cruz</p>
            <p className="mt-1">Punto Litoral © {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>

      {/* Lead Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
