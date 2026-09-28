"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Tengo que cambiar los programas o software que ya usa mi empresa?",
    answer:
      "No. Nuestro enfoque pragmático es adaptar la tecnología a tu negocio, no al revés. No te obligamos a migrar de sistema ni a pagar licencias costosas. Automatizamos e integramos sobre las herramientas que tu equipo ya utiliza a diario (WhatsApp, Excel, Google Sheets, tu software de facturación o ERP actual).",
  },
  {
    question: "¿Cuánto tiempo tarda en estar funcionando la primera solución?",
    answer:
      "Menos de 10 días hábiles. No creemos en proyectos eternos de meses sin retorno tangible. Diagnosticamos el cuello de botella más urgente y ponemos en marcha la primera automatización en producción para que empieces a recuperar horas de inmediato.",
  },
  {
    question: "¿Qué nivel de conocimiento técnico necesita mi equipo?",
    answer:
      "Cero conocimientos técnicos. Las automatizaciones se construyen para que la experiencia del usuario sea transparente: una planilla de Excel que se actualiza sola, un mensaje de WhatsApp que se clasifica automáticamente o un remito que se genera en 1 click. No requiere curva de aprendizaje.",
  },
  {
    question: "¿Trabajan de forma presencial o remota?",
    answer:
      "Brindamos ambas modalidades. Tenemos presencia física en Sunchales y Santa Fe de la Vera Cruz para relevamientos y reuniones presenciales en planta u oficina, y trabajamos de forma 100% remota para empresas y pymes de toda la región y el país.",
  },
  {
    question: "¿Qué costo tiene el Diagnóstico Inicial?",
    answer:
      "El Diagnóstico Inicial es 100% gratuito y sin compromiso de contratación. Es una sesión estratégica de 30 minutos donde analizamos tus flujos de trabajo y te devolvemos un mapa concreto con los 3 mayores cuellos de botella que podés resolver de inmediato.",
  },
  {
    question: "¿Cómo se garantiza la seguridad y privacidad de nuestros datos?",
    answer:
      "Toda la arquitectura y las conexiones API se configuran directamente sobre las cuentas y entornos seguros de tu empresa. No retenemos bases de datos ni compartimos información confidencial de clientes bajo ninguna circunstancia.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-[#1c5c8a]/60 bg-[#0c1f3d]/60 shadow-[0_10px_30px_rgba(28,92,138,0.2)]"
                : "border-[#1c5c8a]/20 bg-[#0c1f3d]/30 hover:border-[#1c5c8a]/40 hover:bg-[#0c1f3d]/45"
            } backdrop-blur-xl`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-semibold text-white flex items-center gap-3">
                <span className="text-xs font-mono text-[#3a8ec4] shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.question}</span>
              </span>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className={`p-1.5 rounded-full shrink-0 ${
                  isOpen
                    ? "bg-[#1c5c8a]/30 text-white"
                    : "bg-white/5 text-neutral-400"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#f8fafc]/75 font-light leading-relaxed border-t border-white/5">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
