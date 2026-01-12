import React from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
    children: React.ReactNode;
    variant?: ButtonVariant;
    disabled?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
};

const Button = ({
                    children,
                    variant = "primary",
                    disabled = false,
                    className = "",
                    onClick,
                    type = "button",
                }: ButtonProps) => {
    const variantClass = variant === "primary" ? "btn-primary" : "btn-secondary";

    const disabledClass = disabled
        ? variant === "primary"
            ? "btn-primary-disabled"
            : "btn-secondary-disabled"
        : "";

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={[
                variantClass,
                disabledClass,
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
