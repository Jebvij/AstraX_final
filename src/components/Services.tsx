"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
    Shield, BookOpen, Code2, BugPlay, Eye,
    Bug, ClipboardCheck, Sword, Globe, Lock, ShoppingCart,
    LayoutDashboard, Server, ArrowRight,
} from "lucide-react";

const services = [
    {
        id: "cyber",
        category: "Cybersecurity Products",
        shortLabel: "Cybersecurity",
        tagline: "Defend. Detect. Respond.",
        Icon: Shield,
        color: "#ff6b00",
        items: [
            { Icon: Sword, title: "Penetration Testing", desc: "Simulated real-world cyberattacks to identify vulnerabilities." },
            { Icon: Eye, title: "Vulnerability Assessment", desc: "Comprehensive scanning of infrastructure security gaps." },
            { Icon: Bug, title: "Malware Analysis", desc: "Reverse-engineering malicious code to understand threats." },
            { Icon: ClipboardCheck, title: "Security Audits", desc: "Compliance audits aligned with ISO, NIST, and OWASP." },
        ],
    },
    {
        id: "web",
        category: "Website Development",
        shortLabel: "Development",
        tagline: "Build. Secure. Scale.",
        Icon: Code2,
        color: "#c94e00",
        items: [
            { Icon: Globe, title: "Business Websites", desc: "High-performance conversion-focused sites." },
            { Icon: Lock, title: "Secure Web Apps", desc: "Security-first full-stack applications." },
            { Icon: ShoppingCart, title: "E-commerce", desc: "PCI-DSS compliant scalable stores." },
            { Icon: LayoutDashboard, title: "Admin Dashboards", desc: "Role-based analytics systems." },
            { Icon: Server, title: "Android App Development", desc: "Native & cross-platform mobile applications." },
        ],
    },
];

function ServiceCard({
    Icon,
    title,
    desc,
    accentColor,
    index,
}: {
    Icon: LucideIcon;
    title: string;
    desc: string;
    accentColor: string;
    index: number;
}) {
    return (
        <div
            className="group glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
            style={{ transitionDelay: `${index * 60}ms` }}
        >
            <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                    background: `${accentColor}15`,
                    border: `1px solid ${accentColor}30`,
                }}
            >
                <Icon className="w-6 h-6" color={accentColor} aria-hidden="true" />
            </div>

            <h4 className="font-bold text-base mb-2">{title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>

            {/* Always visible on mobile (no hover), hover-reveal on desktop */}
            <div
                className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                style={{ color: accentColor }}
            >
                Learn more <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </div>
        </div>
    );
}

export default function Services() {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const tabListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("visible");
            });
        });

        const els = sectionRef.current?.querySelectorAll(".reveal");
        els?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Handle keyboard navigation for tabs
    const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
        let newIndex = index;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            newIndex = (index + 1) % services.length;
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            newIndex = (index - 1 + services.length) % services.length;
        } else if (e.key === "Home") {
            e.preventDefault();
            newIndex = 0;
        } else if (e.key === "End") {
            e.preventDefault();
            newIndex = services.length - 1;
        } else {
            return;
        }
        setActiveTab(newIndex);
        // Focus the new tab
        const tabs = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
        tabs?.[newIndex]?.focus();
    };

    const active = services[activeTab];

    return (
        <section
            id="services"
            ref={sectionRef}
            className="py-16 sm:py-20 bg-secondary/30"
            aria-label="Our services"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-10 sm:mb-12 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-950/20 text-[#ff6b00] text-sm font-semibold mb-4">
                        <Shield className="w-4 h-4" aria-hidden="true" />
                        What We Offer
                    </div>
                    <h2
                        className="font-extrabold text-foreground mb-4"
                        style={{
                            fontFamily: "var(--font-poppins)",
                            fontSize: "clamp(1.75rem, 4vw, 3rem)",
                        }}
                    >
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
                        Comprehensive cybersecurity, training, and development solutions tailored to your needs.
                    </p>
                </div>

                {/* Tabs — horizontally scrollable on mobile */}
                <div
                    ref={tabListRef}
                    role="tablist"
                    aria-label="Service categories"
                    className="flex gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto scrollbar-hide pb-2 sm:justify-center"
                >
                    {services.map((svc, i) => (
                        <button
                            key={svc.id}
                            role="tab"
                            id={`tab-${svc.id}`}
                            aria-selected={i === activeTab}
                            aria-controls={`panel-${svc.id}`}
                            tabIndex={i === activeTab ? 0 : -1}
                            onClick={() => setActiveTab(i)}
                            onKeyDown={(e) => handleTabKeyDown(e, i)}
                            className={`shrink-0 px-4 sm:px-6 py-3 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-200 min-h-[44px] ${i === activeTab
                                ? "text-white shadow-lg"
                                : "glass-card hover:scale-[1.02]"
                                }`}
                            style={
                                i === activeTab
                                    ? { background: `linear-gradient(135deg, ${svc.color}, #ff8c38)` }
                                    : {}
                            }
                        >
                            <span className="sm:hidden">{svc.shortLabel}</span>
                            <span className="hidden sm:inline">{svc.category}</span>
                        </button>
                    ))}
                </div>

                {/* Service cards */}
                <div
                    role="tabpanel"
                    id={`panel-${active.id}`}
                    aria-labelledby={`tab-${active.id}`}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {active.items.map((item, idx) => (
                        <ServiceCard
                            key={`${active.id}-${item.title}`}
                            Icon={item.Icon}
                            title={item.title}
                            desc={item.desc}
                            accentColor={active.color}
                            index={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}