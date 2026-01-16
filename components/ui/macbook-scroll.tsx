"use client";
import React, { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    ChevronDown,
    Command,
    Search,
    SunDim,
    Sun,
    Volume,
    Volume1,
    Volume2,
    ArrowUp,
    ArrowLeft,
    ArrowDown,
    ArrowRight,
    Github,
    ExternalLink
} from "lucide-react";

export const MacbookScroll = ({
    src,
    mobileSrc,
    showGradient,
    title,
    badge,
    className,
    children,
    imageClassName,
    links,
}: {
    src?: string;
    mobileSrc?: string;
    showGradient?: boolean;
    title?: string | React.ReactNode;
    badge?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    imageClassName?: string;
    links?: { github: string; live: string };
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, 1.5]);
    const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, 1.5]);
    const translate = useTransform(scrollYProgress, [0, 0.60], [0, isMobile ? 700 : 1050]);
    const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
    const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // Animate details in from bottom
    const detailsOpacity = useTransform(scrollYProgress, [0.20, 0.60], [0, 1]);
    const detailsTranslate = useTransform(scrollYProgress, [0.20, 0.60], [50, 0]);

    // Mobile View with iPhone Frame
    if (isMobile && mobileSrc) {
        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center justify-center py-10 w-full bg-transparent"
            >
                <div className="mb-8 text-2xl md:text-3xl font-rounded font-bold text-neutral-800 text-center">
                    {title}
                </div>

                <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-black shadow-2xl ring-1 ring-gray-900/50">
                    {/* Side Buttons */}
                    <div className="absolute -left-[10px] top-24 w-[10px] h-8 bg-black rounded-l-md" /> {/* Silent Switch? */}
                    <div className="absolute -left-[10px] top-36 w-[10px] h-12 bg-black rounded-l-md" /> {/* Vol Up */}
                    <div className="absolute -left-[10px] top-52 w-[10px] h-12 bg-black rounded-l-md" /> {/* Vol Down */}
                    <div className="absolute -right-[10px] top-36 w-[10px] h-20 bg-black rounded-r-md" /> {/* Power */}

                    {/* Screen Content */}
                    <div className="relative w-full h-full bg-neutral-800 rounded-[32px] overflow-hidden pt-6">
                        <img src={mobileSrc} alt="Mobile View" className="w-full h-full object-cover" />

                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20 flex justify-center items-center gap-4">
                            <div className="w-10 h-1 bg-gray-800 rounded-full mb-0.5" /> {/* Speaker */}
                            <div className="w-1 h-1 bg-gray-900 rounded-full" /> {/* Camera */}
                        </div>
                    </div>
                </div>

                {/* Mobile Links */}
                {links && (
                    <div className="flex gap-4 mt-8 w-full max-w-[300px]">
                        <a href={links.github} target="_blank" rel="noopener noreferrer" title="View Source Code" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neutral-900 text-white rounded-xl font-bold shadow-lg">
                            <Github size={18} />
                            <span>GitHub</span>
                        </a>
                        <a href={links.live} target="_blank" rel="noopener noreferrer" title="View Live Site" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-neutral-200 text-neutral-900 rounded-xl font-bold shadow-sm">
                            <ExternalLink size={18} className="text-neutral-400" />
                            <span>Live</span>
                        </a>
                    </div>
                )}
            </motion.div>
        );
    }

    // Desktop View (Macbook)
    return (
        <div
            ref={ref}
            className={cn(
                "min-h-0 md:min-h-screen flex flex-col items-center pt-40 md:py-0 md:pt-60 md:pb-0 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.5] sm:scale-50 origin-top -mb-[48rem] md:mb-0",
                className
            )}
        >
            <motion.h2
                style={{
                    translateY: textTransform,
                    opacity: textOpacity,
                }}
                className="dark:text-white text-neutral-800 text-3xl font-bold mb-20 text-center"
            >
                {title || (
                    <span>
                        Project Showcase
                    </span>
                )}
            </motion.h2>

            {/* Lid */}
            <Lid
                src={src}
                scaleX={scaleX}
                scaleY={scaleY}
                rotate={rotate}
                translate={translate}
                imageClassName={imageClassName}
            />

            {/* Base */}
            <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
                <div className="h-10 w-full relative">
                    <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
                </div>
                <div className="flex relative">
                    <div className="mx-auto w-[10%] overflow-hidden  h-full">
                        <SpeakerGrid />
                    </div>
                    <div className="mx-auto w-[80%] h-full">
                        <Keypad />
                    </div>
                    <div className="mx-auto w-[10%] overflow-hidden  h-full">
                        <SpeakerGrid />
                    </div>
                </div>
                <Trackpad />
                <div className="h-2 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#272729] to-[#969696] opacity-50" />
            </div>

            {/* Description & Links Area */}
            {children && (
                <motion.div
                    style={{
                        opacity: detailsOpacity,
                        y: detailsTranslate,
                    }}
                    className="mt-[40rem] md:mt-[56rem]"
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};


export const Lid = ({
    scaleX,
    scaleY,
    rotate,
    translate,
    src,
    imageClassName,
}: {
    scaleX: MotionValue<number>;
    scaleY: MotionValue<number>;
    rotate: MotionValue<number>;
    translate: MotionValue<number>;
    src?: string;
    imageClassName?: string;
}) => {
    return (
        <div className="relative [perspective:800px]">
            <div
                style={{
                    transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
                    transformOrigin: "bottom",
                    transformStyle: "preserve-3d",
                }}
                className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
            >
                <div
                    style={{
                        boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
                    }}
                    className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
                >
                    <span className="text-white">
                        {/* Apple Logo Placeholder or similar */}
                    </span>
                </div>
            </div>
            <motion.div
                style={{
                    scaleX: scaleX,
                    scaleY: scaleY,
                    rotateX: rotate,
                    translateY: translate,
                    transformStyle: "preserve-3d",
                    transformOrigin: "top",
                }}
                className="h-[18rem] w-[32rem] absolute top-0 bg-[#010101] rounded-2xl p-2"
            >
                <div className="absolute inset-0 bg-[#272729] rounded-lg" />

                <div className="absolute inset-0 bg-[#000000] rounded-lg flex items-center justify-center overflow-hidden">
                    {src ? (
                        <img src={src} alt="screen" className={cn("w-full h-full object-cover object-top brightness-110 contrast-105", imageClassName)} />
                    ) : (
                        <div className="text-white">System Loading...</div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export const Trackpad = () => {
    return (
        <div className="w-[40%] mx-auto h-32  rounded-xl my-1 bg-[#161617] bg-opacity-20 flex items-center justify-center">
        </div>
    );
};

export const Keypad = () => {
    return (
        <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
            {/* Row 1 */}
            <div className="flex justify-between w-full gap-x-1 mb-1">
                <Kbd text="esc" />
                <Kbd><SunDim size={14} /></Kbd>
                <Kbd><Sun size={14} /></Kbd>
                <Kbd><Command size={14} /></Kbd>
                <Kbd><Search size={14} /></Kbd>
                <Kbd><ChevronDown size={14} /></Kbd>
                <Kbd><Volume size={14} /></Kbd>
                <Kbd><Volume1 size={14} /></Kbd>
                <Kbd><Volume2 size={14} /></Kbd>
                <Kbd><Volume2 size={14} /></Kbd>
                <Kbd><Volume2 size={14} /></Kbd>
                <Kbd><Volume2 size={14} /></Kbd>
            </div>
            {/* Row 2 */}
            <div className="flex justify-between w-full gap-x-1 mb-1">
                <Kbd className="w-[3rem]" text="tab" />
                <Kbd text="Q" />
                <Kbd text="W" />
                <Kbd text="E" />
                <Kbd text="R" />
                <Kbd text="T" />
                <Kbd text="Y" />
                <Kbd text="U" />
                <Kbd text="I" />
                <Kbd text="O" />
                <Kbd text="P" />
                <Kbd text="[" />
                <Kbd text="]" />
                <Kbd text="\" />
            </div>
            {/* Row 3 */}
            <div className="flex justify-between w-full gap-x-1 mb-1">
                <Kbd className="w-[3.5rem]" text="caps" />
                <Kbd text="A" />
                <Kbd text="S" />
                <Kbd text="D" />
                <Kbd text="F" />
                <Kbd text="G" />
                <Kbd text="H" />
                <Kbd text="J" />
                <Kbd text="K" />
                <Kbd text="L" />
                <Kbd text=";" />
                <Kbd text="'" />
                <Kbd className="w-[4rem]" text="return" />
            </div>
            {/* Row 4 */}
            <div className="flex justify-between w-full gap-x-1 mb-1">
                <Kbd className="w-[4.5rem]" text="shift" />
                <Kbd text="Z" />
                <Kbd text="X" />
                <Kbd text="C" />
                <Kbd text="V" />
                <Kbd text="B" />
                <Kbd text="N" />
                <Kbd text="M" />
                <Kbd text="," />
                <Kbd text="." />
                <Kbd text="/" />
                <Kbd className="w-[5.5rem]" text="shift" />
            </div>
            {/* Row 5 */}
            <div className="flex justify-between w-full gap-x-1 mb-1">
                <Kbd className="w-[3rem]" text="ctrl" />
                <Kbd className="w-[3rem]" text="opt" />
                <Kbd className="w-[3.5rem]" text="cmd" />
                <Kbd className="w-[14rem]" />
                <Kbd className="w-[3.5rem]" text="cmd" />
                <Kbd className="w-[3rem]" text="opt" />
                {/* Arrows */}
                <div className="w-[4rem] h-6 mt-2 flex flex-col items-center justify-end">
                    <ArrowUp size={10} className="text-neutral-700" />
                    <div className="flex gap-1 justify-between w-full">
                        <ArrowLeft size={10} className="text-neutral-700" />
                        <ArrowDown size={10} className="text-neutral-700" />
                        <ArrowRight size={10} className="text-neutral-700" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Kbd = ({
    className,
    children,
    text,
}: {
    className?: string;
    children?: React.ReactNode;
    text?: string;
}) => {
    return (
        <div
            className={cn(
                "h-6 w-8 bg-[#1a1a1a] rounded-[2px] flex items-center justify-center shadow-[0_0_3px_1px_rgba(255,255,255,0.2)]",
                className
            )}
        >
            <span className="text-[6px] text-white font-bold drop-shadow-[0_0_1px_rgba(255,255,255,0.6)]">{text || children}</span>
        </div>
    );
};

export const SpeakerGrid = () => {
    return (
        <div
            className="flex px-0.5 gap-0.5 mt-2 h-40 bg-[length:2px_2px]"
            style={{
                backgroundImage: "radial-gradient(circle, #404040 0.5px, transparent 0.5px)",
            }}
        >
        </div>
    );
};
