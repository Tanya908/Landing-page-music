"use client";

import {usePastCollabs} from "../hooks/usePastCollabs.ts";

type CollabsLogo = {
    id: number;
    img: string;
    hoverImg: string;
    alt: string;
    tooltip: string;
};

const CollabsLogos: CollabsLogo[] = [
    {
        id: 1,
        img: "/cocaColaLogo.svg",
        alt: "Coca cola logo",
        hoverImg: "/cocaColaLogoHover.svg",
        tooltip:
            "Original composition and searches for brand campaigns; demos, cutdowns, usage guidance.",
    },
    {
        id: 2,
        img: "/googleLogo.svg",
        alt: "Google logo",
        hoverImg: "/googleLogoHover.svg",
        tooltip:
            "Music supervision & licensing for product stories; shortlists, laybacks, and full rights clearance.",
    },
    {
        id: 3,
        img: "/WomensAidLogo.svg",
        alt: "Woman's aid logo",
        hoverImg: "/WomensAidLogoHover.svg",
        tooltip:
            "Care-led supervision for sensitive appeals; inclusive casting, minimal score, rights cleared.",
    },
    {
        id: 4,
        img: "/ageUkLogo.svg",
        alt: "ageUk logo",
        hoverImg: "/ageUkLogoHover.svg",
        tooltip:
            "Sensitive, age-inclusive storytelling; authentic voices, restrained music, fully cleared rights.",
    },
];

const PastCollabs = () => {
    const {
        activeIndex,
        mousePos,
        itemRefs,
        isDesktop,
        handleMouseMove,
        handleMouseLeave,
        handleMouseEnter,
    } = usePastCollabs();

    return (
        <section className="relative mt-28 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="flex flex-col items-center md:items-start justify-center gap-6 md:w-1/2 lg:w-96">
                <h4 className="h4 text-center md:text-left max-w-full">
                    Past Collaborations
                </h4>
                <p className="caption text-center md:text-left text-[var(--color-green-700)] mb-14">
                    We compose and license music with cultural relevance and human
                    connection at the core, built on our founder's experience working
                    with global and local brands.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 justify-items-center lg:grid-cols-3 lg:content-start lg:gap-6
                            lg:overflow-visible lg:justify-items-start xl:grid-cols-4">
                {CollabsLogos.map((item, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={item.id}
                            ref={(el) => {itemRefs.current[index] = el;}}
                            data-index={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            className={`relative w-52 h-52 flex items-center justify-center border border-[var(--color-green-100)]
                                        transition-colors duration-300  ${isActive ? "bg-[var(--color-light-200)]" : ""}`}
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                    className={`transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"}`}
                                />

                                <img
                                    src={item.hoverImg}
                                    alt={item.alt}
                                    className={`absolute transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                                />
                            </div>

                            <div
                                className={`absolute top-[80%] left-1/2 -translate-x-[80%] z-50 pointer-events-none
                                            transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                                style={
                                    isDesktop ?
                                        {transform: `translate(calc(-25% + ${mousePos.x}px),calc(${mousePos.y}px + 40px))`,}
                                        : undefined
                                }
                            >
                                <div className="w-44 p-2 relative bg-[var(--color-light-100)] border border-[var(--color-green-300)]">
                                    <div className="flex items-center mb-2">
                                        <span className="absolute -right-[28px] -top-[30px] w-2 h-2 bg-[var(--color-green-300)] rounded-[1px]" />
                                        <span className="-rotate-45 absolute -right-[24px] -top-[11px] w-7 h-px bg-[var(--color-green-300)]" />
                                    </div>

                                    <p className="caption text-[var(--color-green-500)]">
                                        {item.tooltip}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default PastCollabs;
