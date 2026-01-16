"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, FileText, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(100);


    const toRotate = ["Full Stack Developer.", "Software Developer."];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(50);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    };



    return (
        <section id="home" className="relative h-auto md:min-h-screen flex items-start md:items-center bg-[#FAFAFA] overflow-hidden pt-32 pb-12 md:pt-20 md:pb-24">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            {/* Background decoration */}
            {/* <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[100px] translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-[80px] -translate-x-1/3"></div>
            </div> */}

            {/* GitHub Button - Absolute on all screens so it stays in Home section */}
            <a
                href="https://github.com/risshhubh"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 md:bottom-28 -left-5 md:-left-9 z-50 inline-flex items-center gap-3 px-6 py-2.5 bg-white border-2 border-black rounded-full text-black text-lg font-bold hover:bg-black hover:text-white transition-all shadow-xl pl-10 md:pl-12"
            >
                <Github size={24} />
                Github
            </a>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center h-full">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-left flex flex-col justify-center"
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight mb-2 text-purple-600">
                            Rishabh <br />
                            <span className="text-black">Srivastava</span>
                        </h1>

                        {/* Purple Accent Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 100 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-2 bg-purple-400 mb-6 md:mb-8 rounded-full"
                        ></motion.div>

                        <h2 className="text-2xl md:text-4xl text-gray-800 font-medium mb-6 md:mb-8 h-8 md:h-auto overflow-visible whitespace-nowrap">
                            I am a Passionate <span className="font-bold">{text}</span>
                            <span className="text-purple-600 animate-pulse">|</span>
                        </h2>

                        {/* Social Icons */}
                        <div className="flex gap-4 mb-6 md:mb-8">
                            {[
                                { Icon: Twitter, href: '#' },
                                { Icon: Linkedin, href: 'https://www.linkedin.com/in/rishabh-srivastava-5a509232a/' },
                                { Icon: Instagram, href: 'https://www.instagram.com/risshhabh_' },
                                { Icon: Github, href: 'https://github.com/risshhubh' }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
                                >
                                    <item.Icon size={20} />
                                </a>
                            ))}
                        </div>

                        {/* Resume Button */}
                        <div>
                            <a
                                href="https://drive.google.com/file/d/10PHGmWrm5CLg3Al7a-4XLXU170A12s2M/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-black font-semibold hover:border-black transition-all hover:shadow-md bg-white group cursor-pointer"
                            >
                                <FileText size={20} className="text-gray-600 group-hover:text-black transition-colors" />
                                View Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }} // Mobile can just fade in/slide? Keeping simple
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="flex justify-center lg:justify-end items-center lg:h-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 pointer-events-none mt-4 lg:mt-0"
                    >
                        <img
                            src="/herosection.png"
                            alt="Programmer Coding"
                            className="h-[300px] sm:h-[400px] lg:h-[85%] w-auto object-contain lg:mr-[-50px] drop-shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
