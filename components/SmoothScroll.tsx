"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScroll({ children }: { children: any }) {
    return (
        <ReactLenis root options={{ duration: 1.2 }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScroll;
