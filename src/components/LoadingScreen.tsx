"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Skip animation for reduced-motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Show briefly then hide
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }

    const timer1 = setTimeout(() => setFadeOut(true), 1600);
    const timer2 = setTimeout(() => setVisible(false), 2100);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0f1e] transition-all duration-500 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      role="progressbar"
      aria-label="Loading application"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 107, 0, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 0, 0.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6 px-4">
        {/* Animated logo */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ background: "radial-gradient(circle, #ff6b00 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <img
            src="/astra-triangle.png"
            alt=""
            className="relative w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_0_25px_rgba(255,107,0,0.5)]"
          />
        </div>

        {/* Brand name */}
        <div
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-center"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          AstraX <span style={{ background: "linear-gradient(135deg, #ff6b00, #ffb347)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Fusion Tech</span>
        </div>

        {/* Loading bar */}
        <div className="w-40 sm:w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full origin-left"
            style={{
              background: "linear-gradient(135deg, #ff6b00, #ff8c38)",
              animation: "loadingBar 1.4s ease forwards",
            }}
          />
        </div>

        <p className="text-white/40 text-xs sm:text-sm tracking-widest uppercase">
          Initializing...
        </p>
      </div>
    </div>
  );
}
