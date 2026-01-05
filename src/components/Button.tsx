"use client";

import React, { useState } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
    href: string;
    children: React.ReactNode;
    variant?: ButtonVariant;
    disabled?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Button = ({
                    href,
                    children,
                    variant = "primary",
                    disabled = false,
                    className = "",
                }: ButtonProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 120);
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
        <a
            href={href}
            onClick={handleClick}
            aria-disabled={disabled}
            className={[
                baseClass,
                variantClass,
                disabledClass,
                clickedClass,
                disabled ? "pointer-events-none opacity-50" : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {children}
        </a>
    );
};

export default Button;
