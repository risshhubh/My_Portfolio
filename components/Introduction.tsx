"use client";

import { User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Introduction() {
    return (
        <section id="about" className="relative pt-28 pb-32 md:pt-32 md:pb-64 bg-[#FAFAFA] overflow-hidden">
            {/* Extended Background Grid from Hero */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* About Me Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white rounded-full mb-12"
                >
                    <User size={16} />
                    <span className="text-sm font-medium">About me</span>
                </motion.div>

                <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Column - Main Info */}
                    <div className="md:col-span-7 lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-black mb-2 leading-tight">
                                Full Stack <span className="text-purple-600">Developer</span>
                            </h1>
                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                                Building Modern Web Solutions.
                            </h2>

                            {/* Purple thick underline */}
                            <div className="w-32 h-2 bg-purple-300 mb-10 rounded-full"></div>

                            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-6">
                                I am a B.Tech CSE student proficient in MERN Full Stack, Java, Python and JavaScript. I have engineered full-stack applications including Feasto, a food delivery platform with real-time location APIs, and PathWise, an AI-driven job portal with Google OAuth integration.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                                Skilled in scalable architecture, REST API integration, and clean code standards, I am dedicated to building efficient, user-centric software solutions within high-growth engineering teams.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mt-6 font-semibold">
                                Open to opportunities.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="md:col-span-5 lg:col-span-4 space-y-10">
                        {/* Languages */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-bold text-black mb-2">Languages</h3>
                            <div className="w-full h-0.5 bg-purple-200 mb-4 rounded-full"></div>
                            <ul className="space-y-3 font-medium text-gray-700">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full border border-gray-600"></span>
                                    English
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full border border-gray-600"></span>
                                    Hindi
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full border border-gray-600"></span>
                                    Python
                                </li>
                            </ul>
                        </motion.div>

                        {/* Nationality */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold text-black mb-2">Nationality</h3>
                            <div className="w-full h-0.5 bg-purple-200 mb-4 rounded-full"></div>
                            <ul className="space-y-3 font-medium text-gray-700">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full border border-gray-600"></span>
                                    Indian
                                </li>
                            </ul>
                        </motion.div>

                        {/* Hobbies */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-black mb-2">Hobbies</h3>
                            <div className="w-full h-0.5 bg-purple-200 mb-4 rounded-full"></div>
                            <ul className="space-y-3 font-medium text-gray-700">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full border border-gray-600"></span>
                                    Vibe Coding
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full border border-gray-600"></span>
                                    Cooking
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
