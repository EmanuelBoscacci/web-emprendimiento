"use client";

import { useEffect, useRef } from "react";

interface Particle {
  strandIndex: number;
  y: number;
  baseSpeed: number;
  size: number;
  alpha: number;
  tailLength: number;
  color: string;
}

export default function DataRiverCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Time & scroll velocity trackers
    let time = 0;
    let targetScrollVelocity = 0;
    let currentScrollVelocity = 0;
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let lastTimestamp = performance.now();

    // Strands definition: 4 interwoven data channels with Punto Litoral palette
    const strands = [
      {
        amp: 55,
        freq: 0.0032,
        phaseOffset: 0.0,
        speed: 1.0,
        xOffset: -40,
        lineWidth: 1.8,
        color: "rgba(28, 92, 138, 0.35)", // Azul eléctrico sutil
        glowColor: "rgba(58, 142, 196, 0.2)",
      },
      {
        amp: 75,
        freq: 0.0026,
        phaseOffset: 1.4,
        speed: 0.8,
        xOffset: 25,
        lineWidth: 1.3,
        color: "rgba(58, 142, 196, 0.4)", // Acento cian
        glowColor: "rgba(100, 200, 255, 0.25)",
      },
      {
        amp: 90,
        freq: 0.0021,
        phaseOffset: 2.8,
        speed: 1.2,
        xOffset: -10,
        lineWidth: 2.2,
        color: "rgba(12, 31, 61, 0.6)", // Azul marino profundo
        glowColor: "rgba(28, 92, 138, 0.3)",
      },
      {
        amp: 45,
        freq: 0.0041,
        phaseOffset: 4.2,
        speed: 1.4,
        xOffset: 50,
        lineWidth: 1.0,
        color: "rgba(100, 200, 255, 0.25)", // Haz brillante
        glowColor: "rgba(255, 255, 255, 0.2)",
      },
    ];

    // Compute x coordinate on a strand for given y and time
    const getStrandX = (strandIdx: number, yPos: number, t: number) => {
      const strand = strands[strandIdx];
      // Gentle diagonal spine from upper right to lower left (Litoral river stream)
      const progress = yPos / (height || 1);
      const spineX = width * (0.65 - 0.32 * progress) + strand.xOffset;
      const oscillation1 =
        Math.sin(yPos * strand.freq + t * strand.speed + strand.phaseOffset) * strand.amp;
      const oscillation2 =
        Math.cos(yPos * strand.freq * 0.6 + t * 0.5 + strand.phaseOffset) * (strand.amp * 0.35);
      return spineX + oscillation1 + oscillation2;
    };

    // Particles (Data packets)
    let particles: Particle[] = [];
    const particleColors = [
      "rgba(58, 142, 196, 0.95)",
      "rgba(100, 200, 255, 0.95)",
      "rgba(248, 250, 252, 0.9)",
      "rgba(28, 92, 138, 0.85)",
    ];

    const initParticles = (isMobile: boolean) => {
      const count = isMobile ? 16 : 34;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          strandIndex: i % strands.length,
          y: Math.random() * (height + 200) - 100,
          baseSpeed: 1.2 + Math.random() * 2.2,
          size: 1.5 + Math.random() * 2.2,
          alpha: 0.5 + Math.random() * 0.5,
          tailLength: 20 + Math.random() * 35,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
        });
      }
    };

    // Resize handling with devicePixelRatio
    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles(width < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Scroll listener for interactive speed surge
    const handleScroll = () => {
      const nowY = window.scrollY;
      const delta = Math.abs(nowY - lastScrollY);
      targetScrollVelocity = Math.min(targetScrollVelocity + delta * 0.012, 5.0);
      lastScrollY = nowY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Main animation render loop
    const render = (now: number) => {
      const dt = Math.min((now - lastTimestamp) / 1000, 0.1);
      lastTimestamp = now;

      // Smooth scroll acceleration and exponential decay
      currentScrollVelocity += (targetScrollVelocity - currentScrollVelocity) * 0.1;
      targetScrollVelocity *= 0.93;

      // Advance time based on steady flow + scroll surge
      const flowRate = 0.012 + currentScrollVelocity * 0.035;
      time += flowRate * (dt * 60);

      // Clear previous frame
      ctx.clearRect(0, 0, width, height);

      // Use lighter composition for smooth bioluminescent blending
      ctx.globalCompositeOperation = "screen";

      // 1. Draw flowing river strands
      const stepY = 18;
      for (let s = 0; s < strands.length; s++) {
        const strand = strands[s];
        ctx.beginPath();
        let isFirst = true;

        for (let y = -20; y <= height + 20; y += stepY) {
          const x = getStrandX(s, y, time);
          if (isFirst) {
            ctx.moveTo(x, y);
            isFirst = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = strand.color;
        ctx.lineWidth = strand.lineWidth;
        ctx.stroke();

        // Subtle glow pass for the primary strands
        if (s === 0 || s === 1) {
          ctx.strokeStyle = strand.glowColor;
          ctx.lineWidth = strand.lineWidth * 2.8;
          ctx.stroke();
        }
      }

      // 2. Draw and advance traveling data packets
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Particle speed multiplies with scroll surge
        const speedBoost = 1 + currentScrollVelocity * 2.4;
        p.y += p.baseSpeed * speedBoost * (dt * 60);

        if (p.y > height + 60) {
          p.y = -40;
          p.strandIndex = Math.floor(Math.random() * strands.length);
          p.baseSpeed = 1.2 + Math.random() * 2.2;
        }

        const headX = getStrandX(p.strandIndex, p.y, time);
        const headY = p.y;

        // Draw particle trail (comet effect along the curve)
        const trailSteps = 5;
        ctx.beginPath();
        ctx.moveTo(headX, headY);
        for (let tStep = 1; tStep <= trailSteps; tStep++) {
          const trailY = headY - (p.tailLength * (tStep / trailSteps));
          const trailX = getStrandX(p.strandIndex, trailY, time);
          ctx.lineTo(trailX, trailY);
        }

        ctx.strokeStyle = p.color.replace("0.95", `${p.alpha * 0.35}`).replace("0.9", `${p.alpha * 0.3}`);
        ctx.lineWidth = p.size * 0.8;
        ctx.lineCap = "round";
        ctx.stroke();

        // Draw particle head with luminous core
        ctx.beginPath();
        ctx.arc(headX, headY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Outer glow corona for larger packets
        if (p.size > 2.2) {
          ctx.beginPath();
          ctx.arc(headX, headY, p.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(58, 142, 196, 0.25)";
          ctx.fill();
        }
      }

      // Restore composite operation
      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      aria-hidden="true"
    />
  );
}
