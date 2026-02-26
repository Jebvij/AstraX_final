"use client";

import { useEffect, useRef } from "react";
import { Shield, CheckCircle2, Heart, Handshake, Eye, Flame } from "lucide-react";

const values = [
  {
    Icon: Eye,
    title: "Transparency",
    desc: "We keep you informed at every step — no jargon, no hidden costs, just honest communication.",
  },
  {
    Icon: Shield,
    title: "Integrity",
    desc: "We handle your data and systems with the highest ethical standards and confidentiality.",
  },
  {
    Icon: Flame,
    title: "Passion",
    desc: "We're driven by a genuine love for cybersecurity and a hunger to make the digital world safer.",
  },
  {
    Icon: Handshake,
    title: "Collaboration",
    desc: "We work alongside your team as partners, not just vendors — your goals become ours.",
  },
];

const achievements = [
  "CEH & OSCP Certified Team Members",
  "Modern Threat Intelligence Approach",
  "Affordable Security for Startups & SMBs",
  "Transparent Pricing — No Hidden Costs",
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-950/20 text-[#ff6b00] text-sm font-semibold mb-4">
            <Shield className="w-4 h-4" />
            Who We Are
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            About <span className="gradient-text">AstraX Fusion Tech</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text */}
          <div className="reveal-left space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Launched in 2026, <strong className="text-foreground">AstraX Fusion Tech</strong> is a
              cybersecurity and technology education startup built by a team of
              passionate security enthusiasts. We&apos;re here to help businesses stay
              protected in an increasingly digital world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer penetration testing, vulnerability assessments, and security
              audits alongside practical training programs in ethical hacking,
              malware analysis, and SOC operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We also build secure, modern websites and web applications — from
              business sites to custom dashboards — with security baked in from
              day one.
            </p>

            {/* Achievements */}
            <ul className="space-y-3 pt-2">
              {achievements.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ff6b00] flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white bg-brand-gradient hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-orange-200/40 dark:shadow-orange-900/30"
            >
              Work With Us
            </button>
          </div>

          {/* Right: Visual */}
          <div className="reveal-right">
            <div className="relative">
              {/* Central shield graphic */}
              <div className="relative z-10 mx-auto w-64 h-64 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full opacity-20 animate-pulse"
                  style={{ background: "radial-gradient(circle, #ff6b00 0%, transparent 70%)" }}
                />
                <div
                  className="absolute inset-8 rounded-full opacity-30 animate-pulse"
                  style={{ background: "radial-gradient(circle, #ff8c38 0%, transparent 70%)", animationDelay: "0.5s" }}
                />
                <div className="relative z-10 w-32 h-32 rounded-3xl bg-brand-gradient flex items-center justify-center shadow-2xl shadow-orange-300/40 dark:shadow-orange-900/40 pulse-glow">
                  <Shield className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Floating info cards */}
              <div className="glass-card absolute -top-4 -left-4 rounded-2xl px-4 py-3 float shadow-lg">
                <p className="text-xs text-muted-foreground">Our Promise</p>
                <p className="text-lg font-extrabold gradient-text" style={{ fontFamily: "var(--font-poppins)" }}>Security First</p>
              </div>
              <div className="glass-card absolute -bottom-4 -right-4 rounded-2xl px-4 py-3 float-delay shadow-lg">
                <p className="text-xs text-muted-foreground">Our Focus</p>
                <p className="text-lg font-extrabold gradient-text" style={{ fontFamily: "var(--font-poppins)" }}>SMBs & Startups</p>
              </div>
              <div className="glass-card absolute top-1/2 -right-8 -translate-y-1/2 rounded-2xl px-4 py-3 float-slow shadow-lg">
                <p className="text-xs text-muted-foreground">Founded</p>
                <p className="text-xl font-extrabold gradient-text" style={{ fontFamily: "var(--font-poppins)" }}>2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
          {values.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="reveal glass-card rounded-2xl p-6 text-center hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-[#ff6b00]" />
              </div>
              <h4
                className="font-bold text-base mb-2 text-foreground"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
