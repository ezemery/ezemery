"use client";

import { motion } from "motion/react";
import { Building2, Calendar } from "lucide-react";
import { CV_DATA } from "@/data";
import Link from "next/link";

export function WorkPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-12 md:pt-20 px-4 md:px-6 pb-20 text-white">
            <nav className="max-w-6xl mx-auto mb-12 flex justify-between items-center text-sm">
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">← Home</Link>
                <div className="flex gap-6">
                    <Link href="/work" className="text-white font-medium underline underline-offset-8 decoration-indigo-500">Work</Link>
                    <Link href="/resume" className="text-slate-400 hover:text-white transition-colors">Resume</Link>
                </div>
            </nav>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Work Experience
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400">
                        Building scalable systems and leading technical initiatives
                    </p>
                </motion.div>

                <div className="space-y-12 md:space-y-16">
                    {CV_DATA.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="flex flex-col gap-6 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm group">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-indigo-500/20 border border-white/10 flex-shrink-0">
                                            <Building2 className="w-5 h-5 md:w-6 md:h-6 text-indigo-300" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-lg md:text-xl font-semibold text-white mb-1 break-words">
                                                {exp.company}
                                            </h3>
                                            <p className="text-base md:text-lg text-indigo-400 font-medium">{exp.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm md:text-base text-slate-400">
                                        <Calendar className="w-4 h-4 flex-shrink-0" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <div>
                                    <ul className="space-y-3">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <li
                                                key={achIndex}
                                                className="flex gap-3 text-sm md:text-base text-slate-300 leading-relaxed"
                                            >
                                                <span className="text-indigo-400 mt-1.5 flex-shrink-0">•</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {index < CV_DATA.experience.length - 1 && (
                                <div className="absolute left-1/2 -bottom-6 w-px h-12 bg-white/10 hidden md:block" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}