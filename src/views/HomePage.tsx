"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail, ArrowUpRight, MapPin } from "lucide-react";
import { CV_DATA } from "@/data";
import Link from "next/link";
import Image from "next/image";

// Design tokens from DESIGN.md
const D = {
    canvas: "#090909",
    surface1: "#141414",
    surface2: "#1c1c1c",
    hairline: "#262626",
    hairlineSoft: "#1a1a1a",
    blue: "#0099ff",
    ink: "#ffffff",
    inkMuted: "#999999",
    magenta: "#d44df0",
    violet: "#6a4cf5",
    orange: "#ff7a3d",
    coral: "#ff5577",
    success: "#22c55e",
};

export function HomePage() {
    return (
        <div style={{ backgroundColor: D.canvas, color: D.ink, minHeight: "100vh" }}>

            {/* ── NAV ────────────────────────────────────────── */}
            <nav style={{ borderBottom: `1px solid ${D.hairlineSoft}`, height: "56px" }}
                className="sticky top-0 z-30 backdrop-blur-md"
                aria-label="Main navigation">
                <div className="max-w-6xl mx-auto h-full px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div style={{ width: 32, height: 32, borderRadius: "50%", overflow: "hidden", border: `1px solid ${D.hairline}`, backgroundColor: D.surface1 }}>
                            <Image src="/ezemery.svg" alt="EE" width={32} height={32} priority />
                        </div>
                        <span style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "-0.14px", color: D.ink }}>ezemery</span>
                    </Link>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                        <Link href="/work" style={{ color: D.inkMuted, fontSize: "14px", fontWeight: 500, padding: "6px 12px", borderRadius: "100px" }}
                            className="hover:text-white transition-colors">Work</Link>
                        <Link href="/resume" style={{ color: D.inkMuted, fontSize: "14px", fontWeight: 500, padding: "6px 12px", borderRadius: "100px" }}
                            className="hover:text-white transition-colors">Resume</Link>
                        <a href={`mailto:${CV_DATA.email}`}
                            style={{ backgroundColor: D.ink, color: "#000", borderRadius: "100px", padding: "8px 16px", fontSize: "14px", fontWeight: 500, letterSpacing: "-0.14px" }}
                            className="hover:bg-gray-200 transition-colors ml-2">
                            Hire me
                        </a>
                    </div>
                </div>
            </nav>

            {/* ── JUMBOTRON HERO ─────────────────────────────── */}
            <section className="relative flex flex-col items-center justify-center overflow-hidden px-6"
                style={{ minHeight: "calc(100vh - 56px)", paddingTop: "80px", paddingBottom: "80px" }}>

                {/* Atmosphere glows */}
                <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div style={{ position: "absolute", top: "5%", left: "5%", width: "500px", height: "500px", background: `radial-gradient(circle, ${D.violet}18 0%, transparent 70%)`, borderRadius: "50%" }} />
                    <div style={{ position: "absolute", top: "15%", right: "0%", width: "420px", height: "420px", background: `radial-gradient(circle, ${D.magenta}12 0%, transparent 70%)`, borderRadius: "50%" }} />
                    <div style={{ position: "absolute", bottom: "5%", left: "25%", width: "600px", height: "300px", background: `radial-gradient(circle, ${D.blue}0a 0%, transparent 70%)`, borderRadius: "50%" }} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 flex flex-col items-center text-center"
                    style={{ maxWidth: "720px" }}
                >
                    {/* Availability badge */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        backgroundColor: D.surface1, border: `1px solid ${D.hairline}`,
                        borderRadius: "100px", padding: "6px 14px",
                        fontSize: "13px", fontWeight: 500, color: D.inkMuted,
                        marginBottom: "48px", letterSpacing: "-0.13px"
                    }}>
                        {"● Available for new opportunities"}
                    </div>

                    {/* ── BIG SVG JUMBOTRON ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.88 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            width: "clamp(180px, 28vw, 260px)",
                            height: "clamp(180px, 28vw, 260px)",
                            borderRadius: "50%",
                            overflow: "hidden",
                            border: `1px solid ${D.hairline}`,
                            backgroundColor: D.surface1,
                            marginBottom: "44px",
                            boxShadow: `0 0 0 1px ${D.hairlineSoft}, 0 0 100px ${D.violet}35, 0 0 200px ${D.magenta}15, 0 30px 60px rgba(0,0,0,0.5)`,
                            flexShrink: 0,
                        }}
                    >
                        <Image
                            src="/ezemery.svg"
                            alt="Ezechukwu Emereuwaonu"
                            width={260}
                            height={260}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            priority
                        />
                    </motion.div>

                    {/* Location */}
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", color: D.inkMuted, fontSize: "13px", fontWeight: 500, letterSpacing: "-0.13px", marginBottom: "16px" }}>
                        <MapPin size={12} />
                        {CV_DATA.location}
                    </div>

                    {/* Name */}
                    <h1 style={{
                        fontSize: "clamp(52px, 9vw, 85px)",
                        fontWeight: 500,
                        lineHeight: 0.95,
                        letterSpacing: "clamp(-2.5px, -0.05em, -4.25px)",
                        marginBottom: "20px",
                        color: D.ink,
                    }}>
                        {CV_DATA.name}
                    </h1>

                    {/* Title */}
                    <p style={{ color: D.blue, fontSize: "14px", fontWeight: 500, letterSpacing: "-0.14px", marginBottom: "24px" }}>
                        {CV_DATA.title}
                    </p>

                    {/* Summary (first sentence only) */}
                    <p style={{ color: D.inkMuted, fontSize: "18px", lineHeight: 1.4, letterSpacing: "-0.18px", marginBottom: "44px", maxWidth: "520px" }}>
                        {CV_DATA.summary.split(". ")[0]}.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/work"
                            style={{ backgroundColor: D.ink, color: "#000", borderRadius: "100px", padding: "10px 20px", fontSize: "14px", fontWeight: 500, letterSpacing: "-0.14px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                            className="hover:bg-gray-200 transition-colors">
                            View My Work <ArrowRight size={15} />
                        </Link>
                        <a href={`mailto:${CV_DATA.email}`}
                            style={{ backgroundColor: D.surface1, color: D.ink, border: `1px solid ${D.hairline}`, borderRadius: "100px", padding: "10px 20px", fontSize: "14px", fontWeight: 500, letterSpacing: "-0.14px" }}
                            className="hover:bg-[#1c1c1c] transition-colors">
                            Get in Touch
                        </a>
                        <a href={CV_DATA.resumeUrl} target="_blank" rel="noopener noreferrer"
                            style={{ backgroundColor: D.surface1, color: D.ink, border: `1px solid ${D.hairline}`, borderRadius: "100px", padding: "10px 20px", fontSize: "14px", fontWeight: 500, letterSpacing: "-0.14px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                            className="hover:bg-[#1c1c1c] transition-colors">
                            Resume <ArrowUpRight size={14} />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* ── SKILLS STRIP ───────────────────────────────── */}
            <div style={{ borderTop: `1px solid ${D.hairlineSoft}`, borderBottom: `1px solid ${D.hairlineSoft}`, padding: "20px 0" }}>
                <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-2 justify-center">
                    {[...CV_DATA.skills.frontend, ...CV_DATA.skills.backend.slice(0, 3), ...CV_DATA.skills.devops.slice(0, 4)].map((skill) => (
                        <span key={`skill-${skill}`} style={{
                            backgroundColor: D.surface1, border: `1px solid ${D.hairline}`,
                            borderRadius: "6px", padding: "5px 11px",
                            fontSize: "13px", color: D.inkMuted, fontWeight: 500, letterSpacing: "-0.13px"
                        }}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── EXPERIENCE ─────────────────────────────────── */}
            <section style={{ padding: "96px 24px" }}>
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-end" style={{ marginBottom: "48px" }}>
                        <div>
                            <h2 style={{ fontSize: "32px", fontWeight: 500, letterSpacing: "-1px", lineHeight: 1.13, marginBottom: "8px", color: D.ink }}>
                                Latest Experience
                            </h2>
                            <p style={{ color: D.inkMuted, fontSize: "15px", letterSpacing: "-0.15px" }}>Where I've been building recently</p>
                        </div>
                        <Link href="/work"
                            style={{ color: D.blue, fontSize: "14px", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "4px", letterSpacing: "-0.14px" }}
                            className="hover:opacity-75 transition-opacity group">
                            See all work <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {CV_DATA.experience.slice(0, 4).map((exp) => {
                            const cardIndex = CV_DATA.experience.indexOf(exp);
                            const cardStyles = [
                                {
                                    background: `linear-gradient(135deg, ${D.violet} 0%, #3a1cb5 100%)`,
                                    border: undefined as string | undefined,
                                    textColor: "#fff",
                                    mutedColor: "rgba(255,255,255,0.72)",
                                    markerColor: "rgba(255,255,255,0.4)",
                                },
                                {
                                    background: `linear-gradient(135deg, ${D.magenta} 0%, #9010c0 100%)`,
                                    border: undefined as string | undefined,
                                    textColor: "#fff",
                                    mutedColor: "rgba(255,255,255,0.72)",
                                    markerColor: "rgba(255,255,255,0.4)",
                                },
                                {
                                    background: D.surface1,
                                    border: `1px solid ${D.hairline}`,
                                    textColor: D.ink,
                                    mutedColor: D.inkMuted,
                                    markerColor: D.hairline,
                                },
                                {
                                    background: `linear-gradient(135deg, ${D.orange} 0%, #c04010 100%)`,
                                    border: undefined as string | undefined,
                                    textColor: "#fff",
                                    mutedColor: "rgba(255,255,255,0.72)",
                                    markerColor: "rgba(255,255,255,0.4)",
                                },
                            ];
                            const s = cardStyles[cardIndex];
                            return (
                                <motion.div
                                    key={exp.company}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: cardIndex * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    style={{
                                        background: s.background,
                                        border: s.border,
                                        borderRadius: "20px",
                                        padding: "32px",
                                    }}
                                >
                                    <div style={{ fontSize: "13px", color: s.mutedColor, marginBottom: "16px", fontWeight: 500, letterSpacing: "-0.13px" }}>
                                        {exp.period}
                                    </div>
                                    <h3 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.8px", lineHeight: 1.2, marginBottom: "6px", color: s.textColor }}>
                                        {exp.role}
                                    </h3>
                                    <p style={{ color: s.mutedColor, fontSize: "15px", letterSpacing: "-0.15px", marginBottom: "20px" }}>
                                        {exp.company}
                                    </p>
                                    <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                        {exp.achievements.slice(0, 2).map((ach) => (
                                            <li key={ach.slice(0, 40)} style={{ fontSize: "14px", color: s.mutedColor, display: "flex", gap: "10px", lineHeight: 1.4, letterSpacing: "-0.14px" }}>
                                                <span style={{ color: s.markerColor, flexShrink: 0, marginTop: "1px" }}>—</span>
                                                {ach}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CONNECT ────────────────────────────────────── */}
            <section style={{ borderTop: `1px solid ${D.hairlineSoft}`, padding: "96px 24px" }}>
                <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{
                        fontSize: "clamp(44px, 7vw, 62px)",
                        fontWeight: 500,
                        letterSpacing: "clamp(-2px, -0.05em, -3.1px)",
                        lineHeight: 1,
                        marginBottom: "24px",
                        color: D.ink,
                    }}>
                        Let's build<br />something.
                    </h2>
                    <p style={{ color: D.inkMuted, fontSize: "18px", lineHeight: 1.4, letterSpacing: "-0.18px", marginBottom: "40px" }}>
                        Open to full-time roles, freelance projects, and interesting collaborations.
                    </p>
                    <div className="flex justify-center flex-wrap gap-3">
                        <a href={`mailto:${CV_DATA.email}`}
                            style={{ backgroundColor: D.ink, color: "#000", borderRadius: "100px", padding: "10px 20px", fontSize: "14px", fontWeight: 500, letterSpacing: "-0.14px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                            className="hover:bg-gray-200 transition-colors">
                            <Mail size={15} /> Email me
                        </a>
                        <a href={`https://${CV_DATA.github}`} target="_blank" rel="noopener noreferrer"
                            style={{ backgroundColor: D.surface1, color: D.ink, border: `1px solid ${D.hairline}`, borderRadius: "100px", padding: "10px 20px", fontSize: "14px", fontWeight: 500, letterSpacing: "-0.14px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                            className="hover:bg-[#1c1c1c] transition-colors">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                            GitHub
                        </a>
                        <a href={`https://${CV_DATA.linkedin}`} target="_blank" rel="noopener noreferrer"
                            style={{ backgroundColor: D.surface1, color: D.ink, border: `1px solid ${D.hairline}`, borderRadius: "100px", padding: "10px 20px", fontSize: "14px", fontWeight: 500, letterSpacing: "-0.14px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                            className="hover:bg-[#1c1c1c] transition-colors">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}