"use client";

import { ExternalLink, Github, Lightbulb, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { MacbookScroll } from '@/components/ui/macbook-scroll';

interface Project {
    title: string | React.ReactNode;
    tagline: string | React.ReactNode;
    description: string;
    features: string[];
    stack: string[];
    src: string;
    mobileSrc?: string;
    bg: string;
    links: {
        github: string;
        live: string;
    };
    imageClassName?: string;
}

const projects: Project[] = [
    {
        title: (
            <>
                PathWise <span className="text-2xl font-normal text-neutral-600">(Group Project)</span>
            </>
        ),
        tagline: <>An AI <span className="text-purple-600">Job Portal</span></>,
        description:
            "AI-powered career guidance platform providing personalized roadmaps and interview preparation tools.",
        features: [
            "AI-Powered Resume Analysis",
            "Interactive Mock Interviews",
            "Personalized Learning Paths",
            "Real-time Progress Tracking",
        ],
        stack: ["React", "Python", "Gemini API", "OAuth"],
        src: "/pathwise.png",
        mobileSrc: "/mobile_pathwise.png",
        bg: "bg-[#0A0A0A]",
        links: {
            github: "https://github.com/shubh-kr007/Pathwise-AI-Interview",
            live: "https://pathwise-ai-interview-frontend.onrender.com/",
        },
    },
    {
        title: "Feasto",
        tagline: <>A Food <span className="text-purple-600">Delivery Site</span></>,
        description:
            "A comprehensive food delivery platform connecting foodies with their favorite local restaurants.",
        features: [
            "Live Order Tracking",
            "Advanced Search & Filtering",
            "Secure Payment Integration",
            "Restaurant Dashboard",
        ],
        stack: ["React", "Node.js", "MongoDB", "Redux"],
        src: "/feasto.png",
        mobileSrc: "/mobile_feasto.png",
        bg: "bg-[#FFFFFF]",
        links: {
            github: "https://github.com/risshhubh/Feasto_App",
            live: "https://feasto-app.vercel.app/",
        },
        imageClassName: "object-left-top",
    },
    {
        title: "AutoVerse",
        tagline: <>Premium Automotive <span className="text-purple-600">Showroom</span></>,
        description:
            "An interactive 3D showroom experience allowing users to customize and explore car models in real-time.",
        features: [
            "Immersive 3D Customization",
            "Real-time Configuration",
            "360° Vehicle Exploration",
            "High-Fidelity Rendering",
        ],
        stack: ["React", "Three.js", "Tailwind", "Framer Motion"],
        src: "/autoverse.png",
        mobileSrc: "/mobile_autoverse.png",
        bg: "bg-[#F5F5F0]",
        links: {
            github: "https://github.com/risshhubh/AutoVerse",
            live: "https://auto-verseworld.vercel.app/",
        },
    },
];

export default function Projects() {
    return (
        <section id="projects" className="pt-28 pb-0 md:pt-32 md:pb-0 bg-[#FAFAFA] relative">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="relative z-10">
                {/* My Work Tag & Header */}
                <div className="container px-4 mx-auto mb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white rounded-full mb-12">
                            <Lightbulb size={16} />
                            <span className="text-sm font-medium">My work</span>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <div className="origin-left hover:scale-[1.02] transition-transform duration-300 ease-out">
                                <div className="flex items-end gap-4 mb-4">
                                    <h2 className="text-3xl md:text-5xl font-bold text-black leading-none">
                                        Featured <span className="text-purple-600">Projects</span>
                                    </h2>
                                    <a
                                        href="https://github.com/risshhubh?tab=repositories"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-neutral-200 rounded-full text-xs font-semibold text-neutral-600 hover:border-purple-500 hover:text-purple-600 transition-all shadow-sm hover:shadow-md group transform translate-x-[10%] scale-[1.05] hover:scale-[1.15] mb-1.5 duration-300"
                                    >
                                        <span>All Projects</span>
                                        <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>

                                {/* Purple thick underline */}
                                <div className="w-32 h-2 bg-purple-300 rounded-full mb-6"></div>

                                <p className="text-gray-600 max-w-xl text-lg">
                                    Highlights of my development journey. Keep scrolling to explore.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-0 w-full overflow-hidden">
                    {projects.map((project, index) => (
                        <div key={index} className="w-full lg:w-1/3 flex justify-center">
                            <MacbookScroll
                                src={project.src}
                                mobileSrc={project.mobileSrc}
                                showGradient={false}
                                className="lg:scale-[0.6] xl:scale-[0.7] lg:-mb-[35rem] xl:-mb-[30rem]"
                                links={project.links}
                                imageClassName={project.imageClassName}
                                title={
                                    <div className="flex flex-col items-center gap-4 mt-10 md:mt-0 lg:scale-150 transform origin-bottom">
                                        <span className="text-4xl md:text-5xl font-rounded font-bold text-black text-center leading-tight">{project.title}</span>
                                        <span className="text-xl font-rounded font-bold text-neutral-800 -mt-1">{project.tagline}</span>
                                    </div>
                                }
                            >
                                <div className="mt-16 w-full max-w-lg mx-auto text-left transform md:scale-110 lg:scale-125 origin-top px-4 md:px-0 flex flex-col gap-6">

                                    {/* Description (With Min Height for Alignment) */}
                                    <p className="text-xl font-semibold text-neutral-900 leading-relaxed min-h-[7rem]">
                                        {project.description}
                                    </p>

                                    <div className="w-12 h-0.5 bg-neutral-200 rounded-full" />

                                    {/* Features List (With Min Height for Alignment) */}
                                    <div className="flex flex-col gap-3 min-h-[11rem]">
                                        <h4 className="flex items-center gap-2 text-xs font-extrabold text-black uppercase tracking-widest">
                                            <Zap size={14} className="text-purple-600" /> Features
                                        </h4>
                                        <ul className="flex flex-col gap-2.5">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-base font-medium text-neutral-800">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                                                    <span className="leading-snug">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack (With Min Height for Alignment) */}
                                    <div className="flex flex-col gap-3 pt-2 min-h-[4rem]">
                                        <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Stack</span>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map(tech => (
                                                <span key={tech} className="px-2.5 py-1 bg-white border border-neutral-200 rounded-md text-xs font-bold text-neutral-800 shadow-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions (Consistently placed at bottom) */}
                                    <div className="flex gap-4 pt-4 border-t border-neutral-100 mt-2">
                                        <a href={project.links.github} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl font-bold hover:bg-neutral-800 transition-all shadow-lg hover:translate-y-[-2px] hover:scale-105 duration-300">
                                            <Github size={18} />
                                            <span>GitHub</span>
                                        </a>
                                        <a href={project.links.live} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white border border-neutral-200 text-neutral-900 rounded-xl font-bold hover:bg-neutral-50 transition-all shadow-sm hover:shadow-md hover:translate-y-[-2px] hover:scale-105 duration-300 group">
                                            <ExternalLink size={18} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </MacbookScroll>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
