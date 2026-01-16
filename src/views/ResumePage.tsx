"use client";

import { motion } from "motion/react";
import { ExternalLink, Mail, Linkedin, Github, MapPin } from "lucide-react";
import { CV_DATA } from "@/data";
import Link from "next/link";

export function ResumePage() {

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-12 md:pt-20 px-4 md:px-6 pb-20 text-white">
            <nav className="max-w-4xl mx-auto mb-12 flex justify-between items-center text-sm">
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">← Home</Link>
                <div className="flex gap-6">
                    <Link href="/work" className="text-slate-400 hover:text-white transition-colors">Work</Link>
                    <Link href="/resume" className="text-white font-medium underline underline-offset-8 decoration-indigo-500">Resume</Link>
                </div>
            </nav>
            <div className="max-w-4xl mx-auto">
                {/* Header with Download Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 md:mb-12 flex flex-col md:flex-row gap-4 justify-between items-start"
                >
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Resume
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400">
                            {CV_DATA.title} • 8 Years Experience
                        </p>
                    </div>
                    <a
                        href={CV_DATA.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white transition-all text-sm md:text-base whitespace-nowrap active:scale-95 shadow-lg shadow-indigo-500/10"
                    >
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                        <span>View on Google Docs</span>
                    </a>
                </motion.div>

                {/* Resume Content */}
                <div
                    className="bg-white/5 rounded-2xl border border-white/10 p-6 md:p-12 space-y-6 md:space-y-8 backdrop-blur-sm"
                >
                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{CV_DATA.name}</h2>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4 text-sm md:text-base text-slate-300">
                            <a href={`mailto:${CV_DATA.email}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors break-all">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <span className="break-all">{CV_DATA.email}</span>
                            </a>
                            <a href={`https://${CV_DATA.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                                <Linkedin className="w-4 h-4 flex-shrink-0" />
                                <span>{CV_DATA.linkedin}</span>
                            </a>
                            <a href={`https://${CV_DATA.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                                <Github className="w-4 h-4 flex-shrink-0" />
                                <span>{CV_DATA.github}</span>
                            </a>
                            <div className="flex items-center gap-2 text-slate-400">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span>{CV_DATA.location}</span>
                            </div>
                        </div>
                    </section>

                    <div className="border-t border-white/10"></div>

                    {/* Summary */}
                    <section>
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Professional Summary</h3>
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                            {CV_DATA.summary}
                        </p>
                    </section>

                    <div className="border-t border-white/10"></div>

                    {/* Experience */}
                    <section>
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Work Experience</h3>
                        <div className="space-y-6 md:space-y-8">
                            {CV_DATA.experience.map((exp, index) => (
                                <div key={index}>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                                        <div>
                                            <h4 className="text-lg md:text-xl font-semibold text-white">{exp.role}</h4>
                                            <p className="text-base md:text-lg text-indigo-400 font-medium">{exp.company}</p>
                                        </div>
                                        <span className="text-sm md:text-base text-slate-400">{exp.period}</span>
                                    </div>
                                    <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-slate-300 ml-2 md:ml-4">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="border-t border-white/10"></div>

                    {/* Education */}
                    <section>
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Education</h3>
                        <div className="space-y-4">
                            {CV_DATA.education.map((edu, index) => (
                                <div key={index}>
                                    <h4 className="text-lg md:text-xl font-semibold text-white">{edu.degree}</h4>
                                    <p className="text-base md:text-lg text-indigo-400 font-medium">{edu.institution}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="border-t border-white/10"></div>

                    {/* Skills */}
                    <section>
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Technical Skills</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <h4 className="text-base md:text-lg font-semibold text-indigo-400 mb-2">Frontend</h4>
                                <p className="text-sm md:text-base text-slate-300">{CV_DATA.skills.frontend.join(", ")}</p>
                            </div>
                            <div>
                                <h4 className="text-base md:text-lg font-semibold text-indigo-400 mb-2">Backend</h4>
                                <p className="text-sm md:text-base text-slate-300">{CV_DATA.skills.backend.join(", ")}</p>
                            </div>
                            <div>
                                <h4 className="text-base md:text-lg font-semibold text-indigo-400 mb-2">Database & Tools</h4>
                                <p className="text-sm md:text-base text-slate-300">{CV_DATA.skills.database.join(", ")}</p>
                            </div>
                            <div>
                                <h4 className="text-base md:text-lg font-semibold text-indigo-400 mb-2">DevOps & Cloud</h4>
                                <p className="text-sm md:text-base text-slate-300">{CV_DATA.skills.devops.join(", ")}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}