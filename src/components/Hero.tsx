"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient grid-pattern"
    >
      {/* Parallax background blobs */}
      <div ref={heroRef} className="absolute inset-0 pointer-events-none will-change-transform">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background: "radial-gradient(circle, #ff6b00 0%, transparent 70%)",
            top: "-10%",
            left: "-10%",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
          style={{
            background: "radial-gradient(circle, #ff8c38 0%, transparent 70%)",
            bottom: "10%",
            right: "-5%",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-950/20 text-[#ff6b00] text-sm font-semibold mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
          Launching in 2026 — Fresh. Bold. Secure.
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up"
          style={{ fontFamily: "var(--font-poppins)", animationDelay: "0.1s" }}
        >
          <span className="block text-foreground">Securing Digital</span>
          <span className="block gradient-text">Infrastructure.</span>
          <span className="block text-foreground">Empowering Future</span>
          <span className="block gradient-text">Tech Leaders.</span>
        </h1>

        {/* Subtext */}
        <p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          We offer <strong className="text-foreground">cybersecurity solutions</strong>,
          hands-on <strong className="text-foreground">security training programs</strong>, and modern{" "}
          <strong className="text-foreground">web development</strong> — all under one roof.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={scrollToServices}
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-brand-gradient hover:opacity-90 active:scale-95 transition-all duration-200 shadow-xl shadow-orange-300/40 dark:shadow-orange-900/40 pulse-glow"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={scrollToContact}
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-[#ff6b00] border-2 border-[#ff6b00]/30 hover:border-[#ff6b00] hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all duration-200"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
          </button>
        </div>

        {/* Tagline row */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-4 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            "Penetration Testing",
            "Security Training",
            "Web Development",
            "Threat Monitoring",
          ].map((item) => (
            <div
              key={item}
              className="glass-card rounded-2xl px-5 py-3 text-center"
            >
              <div className="text-sm font-semibold text-foreground">{item}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-[#ff6b00] transition-colors duration-200 group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
