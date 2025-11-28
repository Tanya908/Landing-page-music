

import clsx from "clsx";

type ButtonProps ={
    className?: string;
    href?: string;
    rel?: string;
    target?: React.HTMLAttributeAnchorTarget;
    children: React.ReactNode;
}



const Button:React.FC<ButtonProps> = ({className, href, rel, target, children}) => {
    const base = "btn btn-primary w-full sm:w-auto";

    const classes = clsx(base, className);

    if (href) {
        const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;
        return (
            <a href={href} target={target} rel={safeRel} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes}>
            {children}
        </button>
    );
}
export default Button
