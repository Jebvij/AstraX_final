"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail, Phone, MapPin, Send, CheckCircle2,
  Twitter, Linkedin, Github, Instagram, Shield,
} from "lucide-react";

const contactInfo = [
  {
    Icon: Mail,
    label: "Email Us",
    value: "hello@astraxfusiontech.io",
    link: "mailto:hello@astraxfusiontech.io",
  },
  {
    Icon: Phone,
    label: "Call Us",
    value: "Coming Soon",
    link: "#",
  },
  {
    Icon: MapPin,
    label: "Based In",
    value: "India",
    link: "#",
  },
];

const socialLinks = [
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Instagram, href: "#", label: "Instagram" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl border text-sm font-medium text-foreground placeholder:text-muted-foreground bg-background transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/50 focus:border-[#ff6b00] min-h-[44px] ${errors[field] ? "border-red-400" : "border-border hover:border-[#ff6b00]/40"
    }`;

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-950/20 text-[#ff6b00] text-sm font-semibold mb-4">
            <Mail className="w-4 h-4" aria-hidden="true" />
            Get in Touch
          </div>
          <h2
            className="font-extrabold text-foreground mb-4"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
            }}
          >
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Have a project in mind? Need a security assessment? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Info & Social */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8 reveal-left">
            {contactInfo.map(({ Icon, label, value, link }) => (
              <a
                key={label}
                href={link}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff6b00] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#ff6b00] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-[#ff6b00] transition-colors duration-200">{value}</p>
                </div>
              </a>
            ))}

            {/* Social */}
            <div className="pt-2 sm:pt-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-[#ff6b00] hover:scale-110 active:scale-95 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mini trust badge */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground" style={{ fontFamily: "var(--font-poppins)" }}>Secure & Confidential</p>
                  <p className="text-xs text-muted-foreground">All communications are encrypted</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We respond to all inquiries within 24 hours. Your information is never shared with third parties.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal-right">
            <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-50 dark:bg-green-950/20 flex items-center justify-center mb-6 animate-fade-in-up">
                    <CheckCircle2 className="w-10 h-10 text-green-500" aria-hidden="true" />
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-extrabold text-foreground mb-3 animate-fade-in-up"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground animate-fade-in-up">
                    Thanks for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 px-6 py-3 rounded-xl text-sm font-semibold text-[#ff6b00] border-2 border-[#ff6b00]/30 hover:border-[#ff6b00] hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all duration-200 animate-fade-in-up"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass("name")}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && <p id="name-error" className="text-xs text-red-500 mt-1" role="alert">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass("email")}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && <p id="email-error" className="text-xs text-red-500 mt-1" role="alert">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="How can we help you?"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={inputClass("subject")}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us about your project or security concern..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass("message")} resize-none`}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <p id="message-error" className="text-xs text-red-500 mt-1" role="alert">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-brand-gradient hover:opacity-90 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-xl shadow-orange-200/40 dark:shadow-orange-900/30 min-h-[48px]"
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
