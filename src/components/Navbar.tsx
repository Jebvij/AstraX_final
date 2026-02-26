"use client";

import { useEffect, useState, useCallback } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = useCallback(() => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "services", "about", "why-us", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">

        {/* LEFT: Logo Container */}
        <div className="flex items-center min-w-[220px]">
          <a
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="flex items-center"
          >
            <img
              src="/logo.png"
              alt="AstraX Fusion Tech"
              className="h-[220px] w-auto object-contain" />
          </a>
        </div>

        {/* CENTER: Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === link.href.replace("#", "")
                  ? "text-[#ff6b00] bg-orange-50 dark:bg-orange-950/30"
                  : "text-foreground/70 hover:text-[#ff6b00] hover:bg-orange-50 dark:hover:bg-orange-950/20"
                  }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2 min-w-[220px] justify-end">

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-foreground/70 hover:text-[#ff6b00] hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* CTA */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-gradient hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-orange-200 dark:shadow-orange-900/30"
          >
            Get Started
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-foreground/70 hover:text-[#ff6b00] hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="glass-card mx-4 mt-2 rounded-2xl p-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection === link.href.replace("#", "")
                    ? "text-[#ff6b00] bg-orange-50 dark:bg-orange-950/30"
                    : "text-foreground/70 hover:text-[#ff6b00] hover:bg-orange-50 dark:hover:bg-orange-950/20"
                    }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full px-5 py-3 rounded-xl text-sm font-semibold text-white bg-brand-gradient hover:opacity-90 transition-all duration-200"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}