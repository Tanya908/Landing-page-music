
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
        className: "transition-transform duration-300 ease-in-out",
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
                width={open ? 27 : size}
                height={open ? 27 : size}
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="0"
                    y1="18"
                    x2="47"
                    y2="18"
                    {...common}
                    vectorEffect="non-scaling-stroke"

                    className={`${common.className} ${open ? "translate-y-[5.5px] rotate-45" : ""}`}
                />
                <line
                    x1="0"
                    y1="29"
                    x2="47"
                    y2="29"
                    {...common}
                    vectorEffect="non-scaling-stroke"

                    className={`${common.className} ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`}
                />
            </svg>
        </button>
    );
};
