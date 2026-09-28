"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Loader2, Box, Eye, Layers } from "lucide-react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#050B14]/90 backdrop-blur-md">
      <Loader2 className="w-8 h-8 text-[#1c5c8a] animate-spin" />
      <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
        Iniciando Render 3D...
      </span>
    </div>
  ),
});

interface SplineViewerProps {
  sceneUrl?: string;
}

export default function SplineViewer({
  sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
}: SplineViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[420px] sm:min-h-[520px] lg:min-h-[580px] rounded-2xl overflow-hidden bg-[#0c1f3d]/40 border border-[#1c5c8a]/30 backdrop-blur-xl shadow-[0_20px_50px_rgba(5,11,20,0.8)]">
      {/* Top HUD bar */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 py-3 border-b border-white/[0.08] bg-[#050B14]/70 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#1c5c8a]" />
          <span className="ml-3 font-mono text-[11px] tracking-wider text-[#F0F4F8]/80 flex items-center gap-1.5">
            <Box className="w-3.5 h-3.5 text-[#1c5c8a]" />
            SPLINE // 3D_VIEWPORT_ENGINE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1c5c8a]/15 border border-[#1c5c8a]/40 text-[10px] font-mono tracking-wider text-[#F0F4F8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1c5c8a] animate-pulse" />
            ONLINE
          </span>
        </div>
      </div>

      {/* Loading overlay */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#050B14]/90 backdrop-blur-md">
          <Loader2 className="w-8 h-8 text-[#1c5c8a] animate-spin" />
          <p className="font-mono text-xs uppercase tracking-widest text-[#F0F4F8]/70">
            Cargando Escena Tridimensional...
          </p>
        </div>
      )}

      {/* Spline Canvas */}
      {!hasError ? (
        <div className="w-full h-full pt-10">
          <Spline
            scene={sceneUrl}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />
        </div>
      ) : (
        /* Fallback if scene cannot be loaded */
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#0c1f3d]/60 to-[#050B14]">
          <div className="w-16 h-16 rounded-2xl border border-[#1c5c8a]/30 bg-[#0c1f3d]/40 flex items-center justify-center mb-4 text-[#1c5c8a]">
            <Layers className="w-8 h-8" />
          </div>
          <h4 className="font-medium text-[#F0F4F8] mb-1">
            Contenedor 3D Listo para Spline
          </h4>
          <p className="text-xs text-neutral-400 max-w-sm mb-4">
            Inserta tu URL de escena Spline en la prop <code className="text-[#1c5c8a]">sceneUrl</code> o verifica tu conexión de red.
          </p>
        </div>
      )}

      {/* Bottom hint badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050B14]/90 border border-[#1c5c8a]/30 backdrop-blur-md shadow-lg"
        >
          <Eye className="w-3.5 h-3.5 text-[#1c5c8a]" />
          <span className="text-[11px] font-mono tracking-wide text-[#F0F4F8]/80">
            Interactúa: Arrastra para orbitar • Scroll para zoom
          </span>
        </motion.div>
      </div>
    </div>
  );
}
