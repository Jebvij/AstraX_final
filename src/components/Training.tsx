"use client";

import { useEffect, useRef, useState } from "react";
import {
    Shield, Brain, Code2, Cloud, Database,
    Sword, Target, Bot, Users, Eye,
    Sparkles, Cpu, BarChart3,
    Layers, GitBranch, Container,
    Table2, Leaf, ArrowRight, GraduationCap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── Course data ── */
interface Course {
    Icon: LucideIcon;
    title: string;
    desc: string;
}

interface Category {
    id: string;
    label: string;
    Icon: LucideIcon;
    courses: Course[];
}

const categories: Category[] = [
    {
        id: "cybersecurity",
        label: "Cybersecurity",
        Icon: Shield,
        courses: [
            { Icon: Sword, title: "CEH (Certified Ethical Hacker)", desc: "Industry-standard ethical hacking certification prep." },
            { Icon: Target, title: "OSCP Preparation", desc: "Hands-on offensive security lab training." },
            { Icon: Bot, title: "AI-Based Cybersecurity", desc: "Leverage machine learning for threat detection." },
            { Icon: Users, title: "Red Team Operations", desc: "Advanced adversary simulation techniques." },
            { Icon: Eye, title: "Blue Team & SOC Analyst", desc: "Defensive security, SIEM & incident response." },
        ],
    },
    {
        id: "ai-data",
        label: "AI & Data",
        Icon: Brain,
        courses: [
            { Icon: Sparkles, title: "Generative AI (GenAI)", desc: "Build with LLMs, prompt engineering & RAG." },
            { Icon: Cpu, title: "AI & Machine Learning", desc: "Neural networks, NLP & computer vision." },
            { Icon: BarChart3, title: "Data Science", desc: "Analytics, visualization & statistical modeling." },
        ],
    },
    {
        id: "development",
        label: "Development",
        Icon: Code2,
        courses: [
            { Icon: Layers, title: "Full Stack Development", desc: "MERN/MEAN stack with real-world projects." },
        ],
    },
    {
        id: "devops-cloud",
        label: "DevOps & Cloud",
        Icon: Cloud,
        courses: [
            { Icon: GitBranch, title: "DevOps Engineering", desc: "CI/CD pipelines, Docker & Kubernetes." },
        ],
    },
    {
        id: "databases",
        label: "Databases",
        Icon: Database,
        courses: [
            { Icon: Table2, title: "MySQL Database Training", desc: "Relational DB design, queries & optimization." },
            { Icon: Leaf, title: "MongoDB Training", desc: "NoSQL, aggregation & schema design patterns." },
        ],
    },
];

/* ── Course Card ── */
function CourseCard({ Icon, title, desc, index }: Course & { index: number }) {
    return (
        <div
            className="group glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-200/20 dark:hover:shadow-orange-900/20"
            style={{ transitionDelay: `${index * 60}ms` }}
        >
            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center mb-4 group-hover:bg-[#ff6b00] transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#ff6b00] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
            </div>
            <h4 className="font-bold text-base mb-1.5 text-foreground" style={{ fontFamily: "var(--font-poppins)" }}>
                {title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#ff6b00] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                Learn more <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </div>
        </div>
    );
}

/* ── Main Component ── */
export default function Training() {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const tabListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
            },
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Keyboard navigation for tabs
    const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
        let newIndex = index;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            newIndex = (index + 1) % categories.length;
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            newIndex = (index - 1 + categories.length) % categories.length;
        } else if (e.key === "Home") {
            e.preventDefault();
            newIndex = 0;
        } else if (e.key === "End") {
            e.preventDefault();
            newIndex = categories.length - 1;
        } else {
            return;
        }
        setActiveTab(newIndex);
        const tabs = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
        tabs?.[newIndex]?.focus();
    };

    const active = categories[activeTab];

    return (
        <section
            id="training"
            ref={sectionRef}
            className="py-16 sm:py-24 bg-background relative overflow-hidden"
            aria-label="Training Programs"
        >
            {/* Subtle background decoration */}
            <div
                className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] opacity-[0.07] pointer-events-none"
                style={{ background: "radial-gradient(circle, #ff6b00, transparent 70%)" }}
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-950/20 text-[#ff6b00] text-sm font-semibold mb-4">
                        <GraduationCap className="w-4 h-4" aria-hidden="true" />
                        Training Programs
                    </div>
                    <h2
                        className="font-extrabold text-foreground mb-4"
                        style={{
                            fontFamily: "var(--font-poppins)",
                            fontSize: "clamp(1.75rem, 4vw, 3rem)",
                        }}
                    >
                        Level Up Your <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                        Industry-ready courses designed by security professionals. From ethical hacking to
                        full-stack development — hands-on training that gets you hired.
                    </p>
                </div>

                {/* Category Tabs */}
                <div
                    ref={tabListRef}
                    role="tablist"
                    aria-label="Training categories"
                    className="flex gap-2 mb-8 sm:mb-12 overflow-x-auto scrollbar-hide pb-2 sm:justify-center reveal"
                >
                    {categories.map((cat, i) => {
                        const isActive = i === activeTab;
                        return (
                            <button
                                key={cat.id}
                                role="tab"
                                id={`training-tab-${cat.id}`}
                                aria-selected={isActive}
                                aria-controls={`training-panel-${cat.id}`}
                                tabIndex={isActive ? 0 : -1}
                                onClick={() => setActiveTab(i)}
                                onKeyDown={(e) => handleTabKeyDown(e, i)}
                                className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm font-semibold transition-all duration-200 min-h-[44px] ${isActive
                                        ? "bg-[#ff6b00] text-white shadow-lg shadow-orange-300/30 dark:shadow-orange-900/40"
                                        : "glass-card text-foreground/70 hover:text-[#ff6b00] hover:scale-[1.02]"
                                    }`}
                            >
                                <cat.Icon className="w-4 h-4" aria-hidden="true" />
                                <span>{cat.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Course Cards Grid */}
                <div
                    role="tabpanel"
                    id={`training-panel-${active.id}`}
                    aria-labelledby={`training-tab-${active.id}`}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                >
                    {active.courses.map((course, idx) => (
                        <CourseCard key={`${active.id}-${course.title}`} {...course} index={idx} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-10 sm:mt-14 reveal">
                    <p className="text-muted-foreground text-sm sm:text-base mb-5">
                        Can&apos;t find what you&apos;re looking for? We offer custom training for teams.
                    </p>
                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-brand-gradient hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-orange-200/40 dark:shadow-orange-900/30"
                    >
                        Request Custom Training
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </section>
    );
}
