"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

export const usePastCollabs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isDesktop, setIsDesktop] = useState(false);

    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const update = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        update();
        window.addEventListener("resize", update);

        return () => window.removeEventListener("resize", update);
    }, []);

    const handleMouseEnter = (index: number) => {
        if (!isDesktop) return;
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        if (!isDesktop) return;
        setActiveIndex(null);
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDesktop) return;

        const rect = e.currentTarget.getBoundingClientRect();

        setMousePos({
            x: e.clientX - rect.left - rect.width / 2,
            y: e.clientY - rect.top - rect.height * 0.8,
        });
    };

    useEffect(() => {
        if (isDesktop) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const index = Number(entry.target.getAttribute("data-index"));
                    setActiveIndex(index);
                });
            },
            {
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0,
            }
        );

        itemRefs.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, [isDesktop]);

    return {
        activeIndex,
        mousePos,
        itemRefs,
        isDesktop,
        handleMouseEnter,
        handleMouseLeave,
        handleMouseMove,
    };
};
