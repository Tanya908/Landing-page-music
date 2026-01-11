"use client";

type SliderArrowButtonProps = {
    direction: "left" | "right";
    disabled: boolean;
    onClick: () => void;
};

const SliderArrowButton = ({
                               direction,
                               disabled,
                               onClick,
                           }: SliderArrowButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-disabled={disabled}
            className={`
                w-14 h-14 flex items-center justify-center
                bg-[var(--color-dark-900)]
                transition-colors duration-200
                ${disabled
                ? "cursor-not-allowed"
                : "hover:bg-[var(--color-green-700)] active:bg-[var(--color-green-700)] "
            
            }
            `}
        >
            <img
                src="/arrow.svg"
                alt={direction === "left" ? "Previous video" : "Next video"}
                className={`
                    h-3.5 w-3.5
                    ${direction === "right" ? "rotate-180" : ""}
                    ${disabled ? "opacity-40" : ""}
                `}
            />
        </button>
    );
};

export default SliderArrowButton;
