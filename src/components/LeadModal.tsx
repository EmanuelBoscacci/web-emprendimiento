"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  CheckCircle2,
  Loader2,
  ArrowRight,
  MessageSquare,
  Building2,
  User,
  Phone,
  HelpCircle,
} from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    whatsapp: "",
    cuelloDeBotella: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Manejo de la tecla 'Escape' para cerrar el modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset del estado cuando se abre/cierra
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStatus("idle");
        setFormData({
          nombre: "",
          empresa: "",
          whatsapp: "",
          cuelloDeBotella: "",
        });
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.empresa || !formData.whatsapp) return;

    setStatus("submitting");

    // Simulación de envío con feedback visual de alta respuesta
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  const generateWhatsAppLink = () => {
    const text = `Hola Punto Litoral! Soy ${formData.nombre} de ${formData.empresa}. Acabo de solicitar el Diagnóstico Gratuito para optimizar tareas repetitivas.${
      formData.cuelloDeBotella ? ` Mi cuello de botella principal es: ${formData.cuelloDeBotella}` : ""
    }`;
    return `https://wa.me/5493493506346?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop con blur y fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050b14]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 25 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg rounded-3xl border border-[#1c5c8a]/40 bg-[#0c1f3d]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_25px_60px_rgba(5,11,20,0.9)] overflow-hidden z-10"
          >
            {/* Ambient backlight inside modal */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#1c5c8a]/20 to-transparent blur-3xl pointer-events-none -z-10" />

            {/* Botón Cerrar */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full border border-white/10 bg-white/5 text-[#f8fafc]/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            {status !== "success" ? (
              <div>
                {/* Modal Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c5c8a]/20 border border-[#1c5c8a]/40 text-xs font-mono text-[#3a8ec4] mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Sesión de 30 minutos • Sin costo</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    Agendar Diagnóstico Gratuito
                  </h3>
                  <p className="text-sm text-[#f8fafc]/70 mt-1.5 font-light leading-relaxed">
                    Completá tus datos para analizar juntos los 3 cuellos de botella críticos que están haciendo perder tiempo a tu empresa.
                  </p>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nombre completo */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#f8fafc]/80 mb-1.5">
                      Nombre completo <span className="text-[#3a8ec4]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) =>
                          setFormData({ ...formData, nombre: e.target.value })
                        }
                        placeholder="Ej: Marcos Rossi"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#050b14]/80 border border-[#1c5c8a]/30 text-sm text-[#f8fafc] placeholder-[#f8fafc]/30 focus:outline-none focus:border-[#1c5c8a] focus:ring-1 focus:ring-[#1c5c8a] transition-all"
                      />
                    </div>
                  </div>

                  {/* Empresa o Rubro */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#f8fafc]/80 mb-1.5">
                      Empresa o Rubro <span className="text-[#3a8ec4]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) =>
                          setFormData({ ...formData, empresa: e.target.value })
                        }
                        placeholder="Ej: Distribuidora / Estudio Contable"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#050b14]/80 border border-[#1c5c8a]/30 text-sm text-[#f8fafc] placeholder-[#f8fafc]/30 focus:outline-none focus:border-[#1c5c8a] focus:ring-1 focus:ring-[#1c5c8a] transition-all"
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#f8fafc]/80 mb-1.5">
                      WhatsApp de contacto <span className="text-[#3a8ec4]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, whatsapp: e.target.value })
                        }
                        placeholder="Ej: +54 9 3493 123456"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#050b14]/80 border border-[#1c5c8a]/30 text-sm text-[#f8fafc] placeholder-[#f8fafc]/30 focus:outline-none focus:border-[#1c5c8a] focus:ring-1 focus:ring-[#1c5c8a] transition-all"
                      />
                    </div>
                  </div>

                  {/* Cuello de botella principal */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#f8fafc]/80 mb-1.5 flex items-center justify-between">
                      <span>Cuello de botella principal</span>
                      <span className="text-[10px] text-neutral-400 lowercase font-sans">
                        (opcional)
                      </span>
                    </label>
                    <textarea
                      rows={2}
                      value={formData.cuelloDeBotella}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cuelloDeBotella: e.target.value,
                        })
                      }
                      placeholder="Ej: Cargar presupuestos a mano, mensajes que quedan sin contestar..."
                      className="w-full p-3 rounded-xl bg-[#050b14]/80 border border-[#1c5c8a]/30 text-sm text-[#f8fafc] placeholder-[#f8fafc]/30 focus:outline-none focus:border-[#1c5c8a] focus:ring-1 focus:ring-[#1c5c8a] transition-all resize-none"
                    />
                  </div>

                  {/* Botón de Enviar */}
                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-2 relative group overflow-hidden rounded-xl p-[1px] focus:outline-none cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#1c5c8a] via-[#3a8ec4] to-[#0c1f3d] rounded-xl opacity-90 group-hover:opacity-100 transition-opacity blur-[2px]" />
                    <span className="relative flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#050b14] font-medium text-sm text-white shadow-[0_0_25px_rgba(28,92,138,0.5)]">
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#3a8ec4]" />
                          <span>Procesando solicitud...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirmar Solicitud de Diagnóstico</span>
                          <ArrowRight className="w-4 h-4 text-[#3a8ec4] group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </div>
            ) : (
              /* Success confirmation state */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-5"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">
                    ¡Solicitud de Diagnóstico Recibida!
                  </h4>
                  <p className="text-sm text-[#f8fafc]/75 mt-2 font-light max-w-sm mx-auto leading-relaxed">
                    Gracias, <strong className="text-white">{formData.nombre}</strong>. Nos contactaremos a tu WhatsApp{" "}
                    <strong className="text-[#3a8ec4]">{formData.whatsapp}</strong> dentro de las próximas 2 horas hábiles para coordinar el día y horario.
                  </p>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1c5c8a] hover:bg-[#236ea3] text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(28,92,138,0.4)]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Abrir en WhatsApp ahora mismo</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer py-1"
                  >
                    Cerrar ventana
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
