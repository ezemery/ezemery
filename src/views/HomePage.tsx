"use client";

import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { CV_DATA } from "@/data";
import Link from "next/link";

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30">
            <nav className="max-w-6xl mx-auto pt-8 px-4 md:px-6 flex justify-between items-center text-sm relative z-20">
                <div className="font-bold tracking-tight text-xl">EE<span className="text-indigo-500">.</span></div>
                <div className="flex gap-8">
                    <Link href="/work" className="text-slate-400 hover:text-white transition-colors">Work</Link>
                    <Link href="/resume" className="text-slate-400 hover:text-white transition-colors">Resume</Link>
                </div>
            </nav>
            {/* Hero Section */}
            <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden px-4 md:px-6">
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Available for new opportunities
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                            {CV_DATA.name}
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12">
                            {CV_DATA.summary}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/work"
                                className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-all flex items-center gap-2"
                            >
                                View My Work <ArrowRight size={18} />
                            </Link>
                            <a
                                href={`mailto:${CV_DATA.email}`}
                                className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all font-semibold text-white"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
            </section>

            {/* Featured Experience Preview */}
            <section className="py-20 border-t border-white/5 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Latest Experience</h2>
                            <p className="text-slate-400">Where I've been building recently</p>
                        </div>
                        <Link href="/work" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium group transition-all">
                            See all work <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {CV_DATA.experience.slice(0, 2).map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                            >
                                <div className="text-sm text-indigo-400 font-medium mb-4">{exp.period}</div>
                                <h3 className="text-xl font-bold mb-2 text-white">{exp.role}</h3>
                                <p className="text-slate-400 mb-6">{exp.company}</p>
                                <ul className="space-y-3 opacity-60">
                                    {exp.achievements.slice(0, 2).map((ach, i) => (
                                        <li key={i} className="text-sm flex gap-3">
                                            <span className="text-indigo-500">•</span>
                                            {ach}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Socials / Footer Shortcut */}
            <section className="py-20 bg-gradient-to-b from-transparent to-white/[0.02] px-4 md:px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 italic text-gray-500">Connect with me</h2>
                    <div className="flex justify-center gap-8">
                        <a href={`https://${CV_DATA.github}`} target="_blank" className="text-slate-400 hover:text-indigo-400 transition-colors"><Github size={32} /></a>
                        <a href={`https://${CV_DATA.linkedin}`} target="_blank" className="text-slate-400 hover:text-indigo-400 transition-colors"><Linkedin size={32} /></a>
                        <a href={`mailto:${CV_DATA.email}`} className="text-slate-400 hover:text-indigo-400 transition-colors"><Mail size={32} /></a>
                    </div>
                </div>
            </section>
        </div>
    );
}