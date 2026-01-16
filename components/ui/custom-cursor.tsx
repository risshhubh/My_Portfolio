"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => document.body.classList.add("cursor-clicked");
        const handleMouseUp = () => document.body.classList.remove("cursor-clicked");

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [cursorX, cursorY, isVisible]);

    // Don't render on mobile/touch devices
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
        return null;
    }

    return (
        <>
            <style jsx global>{`
                @media (hover: hover) and (pointer: fine) {
                    body, a, button, [role="button"], input {
                        cursor: none !important;
                    }
                }
            `}</style>
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] drop-shadow-md"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-purple-600 fill-current"
                >
                    <path
                        d="M5.5 3.5L12 19L14.5 13.5L20 11L4.5 3.5H5.5Z"
                        stroke="white"
                        strokeWidth="1"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
        </>
    );
};
