"use client";

import React, { useState } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
    children: React.ReactNode;
    variant?: ButtonVariant;
    disabled?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
                    children,
                    variant = "primary",
                    disabled = false,
                    className = "",
                    onClick,
                }: ButtonProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 120);

        onClick?.(e);
    };

    const baseClass = "btn-base";
    const variantClass = variant === "primary" ? "btn-primary" : "btn-secondary";

    const disabledClass = disabled
        ? variant === "primary"
            ? "btn-primary-disabled"
            : "btn-secondary-disabled"
        : "";

    const clickedClass =
        isClicked && variant === "primary" ? "btn-primary-clicked" : "";

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={disabled}
            className={[
                baseClass,
                variantClass,
                disabledClass,
                clickedClass,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {children}
        </button>
    );
};

export default Button;
