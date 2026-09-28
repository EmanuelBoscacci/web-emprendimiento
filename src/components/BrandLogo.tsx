"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "glow" | "badge";
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  className,
  variant = "glow",
  size = "md",
}: BrandLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const imageSizes = {
    sm: 28,
    md: 36,
    lg: 44,
  };

  if (variant === "badge") {
    return (
      <div
        className={cn(
          "relative rounded-xl overflow-hidden bg-white p-1.5 flex items-center justify-center shadow-[0_0_20px_rgba(28,92,138,0.4)] border border-white/80 transition-all duration-300 hover:scale-105",
          sizeClasses[size],
          className
        )}
      >
        <Image
          src="/logo-badge.png"
          alt="Vanguard Logo"
          width={imageSizes[size]}
          height={imageSizes[size]}
          className="object-contain"
          priority
        />
      </div>
    );
  }

  // Default "glow" variant: White body with electric blue accent on cold navy gradient
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden bg-gradient-to-b from-[#0c1f3d] to-[#050B14] p-2 flex items-center justify-center border border-[#1c5c8a]/60 shadow-[0_0_25px_rgba(28,92,138,0.45)] hover:border-[#1c5c8a] hover:shadow-[0_0_35px_rgba(28,92,138,0.7)] transition-all duration-300 group",
        sizeClasses[size],
        className
      )}
    >
      {/* Backlight halo */}
      <div className="absolute inset-0 bg-radial from-[#1c5c8a]/40 to-transparent pointer-events-none" />

      {/* High-contrast Luminous Logo */}
      <Image
        src="/logo-dark.png"
        alt="Vanguard Logo"
        width={imageSizes[size]}
        height={imageSizes[size]}
        className="relative z-10 object-contain drop-shadow-[0_0_8px_rgba(28,92,138,0.6)]"
        priority
      />
    </div>
  );
}
