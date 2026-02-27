"use client";

import { useEffect, useRef } from "react";
import { Award, Shield, Headphones, Rocket } from "lucide-react";

const reasons = [
  {
    Icon: Award,
    title: "Certified Team",
    desc: "Our team members hold CEH, OSCP, and AWS certifications to back up their skills.",
    color: "#ff6b00",
  },
  {
    Icon: Rocket,
    title: "Client First",
    desc: "Your success is our priority — we tailor every engagement to your unique needs and goals.",
    color: "#ff8c38",
  },
  {
    Icon: Headphones,
    title: "24/7 Support",
    desc: "Our team is always on-call — threats don't keep business hours.",
    color: "#e05500",
  },
  {
    Icon: Shield,
    title: "End-to-End Security",
    desc: "From assessment to remediation, we handle the complete security lifecycle in-house.",
    color: "#ff6b00",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-16 sm:py-20 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-950/20 text-[#ff6b00] text-sm font-semibold mb-4">
            <Award className="w-4 h-4" aria-hidden="true" />
            Why AstraX Fusion Tech
          </div>
          <h2
            className="font-extrabold text-foreground mb-4"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
            }}
          >
            Why Choose <span className="gradient-text">Us?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            A young team with the right skills, modern tools, and a client-first mindset
            to get the job done right.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 reveal-stagger">
          {reasons.map(({ Icon, title, desc, color }) => (
            <div
              key={title}
              className="reveal glass-card rounded-3xl p-6 sm:p-8 text-center group hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${color}15`, border: `1px solid ${color}25` }}
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color }} aria-hidden="true" />
              </div>
              <h4
                className="text-base sm:text-lg font-bold mb-2 text-foreground"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA band */}
        <div className="mt-12 sm:mt-16 reveal">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-gradient p-6 sm:p-10 text-center shadow-2xl shadow-orange-300/30 dark:shadow-orange-900/30">
            <div className="absolute -top-16 -right-16 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-16 -left-16 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
            <div className="relative z-10">
              <h3
                className="font-extrabold text-white mb-3 sm:mb-4"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(1.25rem, 3vw, 2.25rem)",
                }}
              >
                Ready to Secure Your Digital Assets?
              </h3>
              <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
                Get a free security consultation and discover exactly what&apos;s putting your business at risk.
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#ff6b00] font-bold text-base hover:bg-orange-50 active:scale-95 transition-all duration-200 shadow-lg"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
