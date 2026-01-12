
import React from "react";

type BurgerProps = {
    onToggle: () => void,
    className?: string,
    size?: number,
    stroke?: string,
    strokeWidth?: number,
    open: boolean,
};

export const Burger: React.FC<BurgerProps> = ({
                                                  open,
                                                  onToggle,
                                                  className = "",
                                                  size = 47,
                                                  stroke = "#151717",
                                                  strokeWidth = 2,

                                              }) => {
    const common = {
        style: {transformBox: "fill-box" as const, transformOrigin: "center" as const},
        className: "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
        stroke,
        strokeWidth,
        strokeLinecap: "square" as const,
    };

    return (
        <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={onToggle}
            className={`inline-flex items-center justify-center select-none ${className}`}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    className={`transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                                ${open ? "scale-65" : "scale-100"}`}
                    style={{ transformOrigin: "center",transformBox: "fill-box"}}
                >

                <line
                    x1="0"
                    y1="18"
                    x2="47"
                    y2="18"
                    {...common}
                    vectorEffect="non-scaling-stroke"

                    className={`${common.className} ${
                        open
                            ? "translate-y-[5.5px] rotate-45 scale-105 scale-x-75"
                            : "scale-100"
                    }`}

                />
                <line
                    x1="0"
                    y1="29"
                    x2="47"
                    y2="29"
                    {...common}
                    vectorEffect="non-scaling-stroke"

                    className={`${common.className} ${
                        open
                            ? "-translate-y-[5.5px] -rotate-45 scale-105 scale-x-75"
                            : "scale-100"
                    }`}
                />
                </g>
            </svg>
        </button>
    );
};
