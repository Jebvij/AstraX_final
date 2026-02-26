"use client";

import { Twitter, Linkedin, Github, Instagram, Heart } from "lucide-react";

const footerLinks: Record<string, string[]> = {
  Services: [
    "Penetration Testing",
    "Vulnerability Assessment",
    "Malware Analysis",
    "Security Audits",
  ],
  Training: [
    "Ethical Hacking",
    "Web Security",
    "SOC Analyst Training",
    "Malware Analysis Course",
  ],
  Development: [
    "Business Websites",
    "Secure Web Apps",
    "E-commerce Development",
    "Admin Dashboards",
  ],
  Company: ["About Us", "Blog", "Careers", "Privacy Policy", "Terms of Service"],
};

const social = [
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b00]/50 to-transparent" />
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff6b00 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff8c38 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <img src="/logo.png" alt="AstraX Fusion Tech" className="w-10 h-10 rounded-xl object-contain" />
              <span
                className="font-extrabold text-xl tracking-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                AstraX <span className="gradient-text">Fusion Tech</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              A cybersecurity startup on a mission to secure digital infrastructure and train the next
              generation of security professionals.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {social.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-[#ff6b00] hover:border-[#ff6b00]/40 hover:scale-110 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="text-white font-bold text-sm mb-4 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/50 hover:text-[#ff6b00] text-sm transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="border border-white/10 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4
              className="font-bold text-base text-white mb-1"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Subscribe to our Newsletter
            </h4>
            <p className="text-white/50 text-sm">Threat alerts, training tips & industry updates.</p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-56 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#ff6b00]/60 transition-colors duration-200"
            />
            <button className="px-5 py-3 rounded-xl bg-brand-gradient text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} AstraX Fusion Tech. All rights reserved. Made with{" "}
            <Heart className="w-3.5 h-3.5 text-[#ff6b00]" /> for a safer internet.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/40 hover:text-[#ff6b00] text-xs transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
