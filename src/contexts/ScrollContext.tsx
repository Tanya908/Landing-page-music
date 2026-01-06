"use client";

import {
    createContext,
    useContext,
    useRef,
} from "react";
import type { ReactNode, RefObject } from "react";

type SectionKey = "about" | "representation" | "whatWeDo" | "contact";

type ScrollContextType = {
    sections: Record<SectionKey, RefObject<HTMLElement | null>>;
    scrollTo: (key: SectionKey) => void;
};

const ScrollContext = createContext<ScrollContextType | null>(null);


export const useScroll = () => {
    const ctx = useContext(ScrollContext);
    if (!ctx) {
        throw new Error("useScroll must be used inside ScrollProvider");
    }
    return ctx;
};

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const sections = {
        about: useRef<HTMLElement>(null),
        representation: useRef<HTMLElement>(null),
        whatWeDo: useRef<HTMLElement>(null),
        contact: useRef<HTMLElement>(null),
    };

    const scrollTo = (key: SectionKey) => {
        sections[key].current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <ScrollContext.Provider value={{ sections, scrollTo }}>
            {children}
        </ScrollContext.Provider>
    );
};
