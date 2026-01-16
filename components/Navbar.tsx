"use client";

import { motion } from 'framer-motion';
import { Home, User, Lightbulb, Phone, Code } from 'lucide-react';

export default function Navbar() {
    const links = [
        { name: 'Home', icon: Home, to: 'home' },
        { name: 'About', icon: User, to: 'about' },
        { name: 'Skills', icon: Code, to: 'skills' },
        { name: 'Projects', icon: Lightbulb, to: 'projects' },
        { name: 'Contact', icon: Phone, to: 'contact' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 right-0 z-50 pt-6 px-6 pointer-events-none flex justify-center"
        >
            <div className="pointer-events-auto border border-black rounded-full px-8 py-3 flex gap-10 items-center bg-white/80 backdrop-blur-md shadow-sm hover:scale-105 transition-transform duration-300">
                {links.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => scrollToSection(link.to)}
                        className="text-black transition-transform duration-300 hover:scale-110 relative group"
                    >
                        <div className="relative flex flex-col items-center">
                            <link.icon
                                size={24}
                                strokeWidth={2}
                            />
                            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                                {link.name}
                                {/* Tiny triangle arrow */}
                                <span className="absolute -top-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-black"></span>
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </motion.nav>
    );
}
