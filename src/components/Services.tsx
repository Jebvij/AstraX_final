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
        id: "training",
        category: "Training Programs",
        tagline: "Learn. Hack. Grow.",
        Icon: BookOpen,
        color: "#e05500",
        items: [
            { Icon: Sword, title: "Ethical Hacking", desc: "CEH-aligned hands-on training." },
            { Icon: Globe, title: "Web Security", desc: "OWASP Top 10 practical labs." },
            { Icon: BugPlay, title: "Malware Analysis", desc: "Static & dynamic reverse engineering." },
            { Icon: Server, title: "SOC Analyst Training", desc: "SIEM, threat hunting & IR." },
        ],
    },
    {
        id: "web",
        category: "Website Development",
        tagline: "Build. Secure. Scale.",
        Icon: Code2,
        color: "#c94e00",
        items: [
            { Icon: Globe, title: "Business Websites", desc: "High-performance conversion-focused sites." },
            { Icon: Lock, title: "Secure Web Apps", desc: "Security-first full-stack applications." },
            { Icon: ShoppingCart, title: "E-commerce", desc: "PCI-DSS compliant scalable stores." },
            { Icon: LayoutDashboard, title: "Admin Dashboards", desc: "Role-based analytics systems." },
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
            className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
            style={{ transitionDelay: `${index * 60}ms` }}
        >
            <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                    background: `${accentColor}15`,
                    border: `1px solid ${accentColor}30`,
                }}
            >
                <Icon className="w-6 h-6" color={accentColor} />
            </div>

            <h4 className="font-bold text-base mb-2">{title}</h4>
            <p className="text-sm text-muted-foreground">{desc}</p>

            <div
                className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: accentColor }}
            >
                Learn more <ArrowRight className="w-3 h-3" />
            </div>
        </div>
    );
}

export default function Services() {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

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

    const active = services[activeTab];

    return (
        <section ref={sectionRef} className="py-16 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-center gap-3 mb-10">
                    {services.map((svc, i) => (
                        <button
                            key={svc.id}
                            onClick={() => setActiveTab(i)}
                            className={`px-6 py-3 rounded-2xl font-semibold transition ${i === activeTab
                                ? "text-white"
                                : "glass-card hover:scale-[1.02]"
                                }`}
                            style={
                                i === activeTab
                                    ? { background: `linear-gradient(135deg, ${svc.color}, #ff8c38)` }
                                    : {}
                            }
                        >
                            {svc.category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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