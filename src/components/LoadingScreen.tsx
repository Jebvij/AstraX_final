"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 1600);
    const timer2 = setTimeout(() => setVisible(false), 2100);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0f1e] transition-all duration-500 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 107, 0, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 0, 0.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated logo */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-2xl animate-ping opacity-30"
            style={{ background: "linear-gradient(135deg, #ff6b00, #ff8c38)" }}
          />
          <div
            className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #ff6b00, #ff8c38)" }}
          >
            <img src="/logo.png" alt="AstraX Fusion Tech" className="w-10 h-10 object-contain" />
          </div>
        </div>

        {/* Brand name */}
        <div
          className="text-3xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          AstraX <span style={{ background: "linear-gradient(135deg, #ff6b00, #ffb347)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Fusion Tech</span>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full origin-left"
            style={{
              background: "linear-gradient(135deg, #ff6b00, #ff8c38)",
              animation: "loadingBar 1.4s ease forwards",
            }}
          />
        </div>

        <p className="text-white/40 text-sm tracking-widest uppercase">
          Initializing...
        </p>
      </div>
    </div>
  );
}
