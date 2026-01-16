"use client";

import { Code, Layout, Server, Sparkles, Terminal, Languages as LangIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Skill {
    name: string;
    iconSlug?: string; // Slug for simpleicons.org
    image?: string; // Local image path
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React.js', iconSlug: 'react' },
            { name: 'Next.js', iconSlug: 'nextdotjs' },
            { name: 'Tailwind', iconSlug: 'tailwindcss' },
            { name: 'HTML5', iconSlug: 'html5' },
            { name: 'CSS3', image: '/css3.png' },
            { name: 'Framer', iconSlug: 'framer' },
            { name: 'Redux', iconSlug: 'redux' }
        ]
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', iconSlug: 'nodedotjs' },
            { name: 'Express', iconSlug: 'express' },
            { name: 'MongoDB', iconSlug: 'mongodb' },
            { name: 'PostgreSQL', iconSlug: 'postgresql' },
            { name: 'Firebase', iconSlug: 'firebase' },
            { name: 'Mongoose', iconSlug: 'mongoose' }
        ]
    },
    {
        title: 'Languages',
        skills: [
            { name: 'TypeScript', iconSlug: 'typescript' },
            { name: 'JavaScript', iconSlug: 'javascript' },
            { name: 'Java', image: '/java.svg' },
            { name: 'Python', iconSlug: 'python' },
            { name: 'C++', iconSlug: 'cplusplus' },
            { name: 'C', iconSlug: 'c' }
        ]
    },
    {
        title: 'Tools & Others',
        skills: [
            { name: 'Git', iconSlug: 'git' },
            { name: 'Docker', iconSlug: 'docker' },
            { name: 'VS Code', image: '/vscode.png' },
            { name: 'Postman', iconSlug: 'postman' },
            { name: 'Figma', iconSlug: 'figma' },
            { name: 'Vercel', iconSlug: 'vercel' }
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="pt-28 pb-12 md:pt-32 md:pb-24 bg-[#FAFAFA] relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white rounded-full mb-6">
                        <Code size={16} />
                        <span className="text-sm font-medium">My Skills</span>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                                Technical <span className="text-purple-600">Proficiency</span>
                            </h2>

                            {/* Purple thick underline */}
                            <div className="w-32 h-2 bg-purple-300 rounded-full mb-4"></div>

                            <p className="text-gray-600 max-w-xl text-lg">
                                My technical toolkit and areas of expertise.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Layout: Single Line/Column Stack for all screens */}
                <div className="grid grid-cols-1 gap-y-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            key={index}
                            className="flex flex-col"
                        >
                            {/* Column Header */}
                            <div className="mb-3 border-b border-gray-200 pb-2">
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors flex items-center gap-3">
                                    <span className="w-1 h-5 bg-purple-600 rounded-full inline-block"></span>
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills Container: Horizontal Wrap on Mobile and Desktop */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group flex items-center gap-2 p-1.5 rounded-lg transition-all duration-300 md:hover:bg-white md:hover:shadow-sm md:border md:border-transparent md:hover:border-gray-100 cursor-default"
                                    >
                                        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                                            {skill.image ? (
                                                <img
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    className="w-6 h-6 md:w-7 md:h-7 object-contain drop-shadow-sm"
                                                    loading="lazy"
                                                />
                                            ) : skill.iconSlug ? (
                                                <img
                                                    src={`https://cdn.simpleicons.org/${skill.iconSlug}/default`}
                                                    alt={skill.name}
                                                    className="w-6 h-6 md:w-7 md:h-7 object-contain drop-shadow-sm"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                            )}
                                        </div>
                                        {/* Hide text on mobile, show on desktop */}
                                        <span className="hidden md:block font-medium text-gray-600 group-hover:text-black transition-colors text-sm">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
