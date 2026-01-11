"use client";

import { useState } from "react";
import { Burger } from "./Burger";
import RotatingLogo from "./RotatingLogo";
import Button from "./Button.tsx";
import {useScroll} from "../contexts/ScrollContext.tsx";

type NavLink = {
    id: number;
    title: string;
    target: "about" | "representation" | "whatWeDo" | "contact";
};

const navLinks: NavLink[] = [
    { id: 1, title: "About", target: "about" },
    { id: 2, title: "Services", target: "representation" },
    { id: 3, title: "What we do", target: "whatWeDo" },
    { id: 4, title: "Contact", target: "contact" },
];

const Header = () => {
    const { scrollTo } = useScroll();

    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleMenu = () => {
        setOpenNavigation((prev) => !prev);
    };

    const closeMenu = () => {
        setOpenNavigation(false);
    };

    const handleNavClick = (target: NavLink["target"]) => {
        closeMenu();
        scrollTo(target);
    };

    return (
        <header className="w-full z-50 bg-[var(--color-light-100)] relative">
            <div className="flex flex-col gap-6 py-6 lg:grid lg:grid-cols-3 lg:items-center lg:gap-10">
                <div className="flex items-center justify-between lg:hidden w-full">
                        <RotatingLogo />
                    <div className="flex items-center gap-4">
                        <Button onClick={() => handleNavClick("contact")} variant="primary" className="hidden md:flex text-caption">
                            brief us
                        </Button>

                        <Burger
                            open={openNavigation}
                            onToggle={toggleMenu}
                            className="w-12 h-12 lg:hidden"
                        />
                    </div>
                </div>

                <div className="hidden lg:flex lg:justify-center lg:order-2">
                        <RotatingLogo size={80} />
                </div>

                <nav
                    aria-label="Primary navigation"
                    className={`flex absolute top-full left-0 w-full z-50 bg-[var(--color-light-100)]
                                flex-col items-center gap-10 pb-10 transition-opacity duration-200        
                                ${openNavigation ? "opacity-100" : "opacity-0 hidden" }                    
                                lg:static lg:flex lg:opacity-100 lg:pointer-events-auto lg:w-auto
                                lg:bg-transparent lg:flex-row lg:gap-6 lg:py-0 lg:order-1                     
                            `}
                >
                    {openNavigation && (
                        <div className="lg:hidden w-screen h-px bg-[var(--color-green-500)]
                                         absolute left-1/2 -translate-x-1/2 top-0"
                        />
                    )}

                    <div className="mx-auto flex w-full flex-col items-center mt-6 gap-10 lg:flex-row lg:gap-6">
                        {navLinks.map((item) => (
                            <a
                                key={item.id}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.target);
                                }}
                                className="h5 lg:body w-full text-center capitalize hover:text-[var(--color-green-300)] active:text-[var(--color-green-300)] lg:w-auto whitespace-nowrap cursor-pointer"
                            >
                                {item.title}
                            </a>
                        ))}

                        <Button onClick={() => handleNavClick("contact")} variant="primary" className="flex md:hidden text-caption w-full">
                            brief us
                        </Button>
                    </div>
                </nav>

                <div className="hidden lg:flex lg:justify-end lg:order-3">
                    <Button onClick={() => handleNavClick("contact")} variant="primary" className="text-caption">
                        brief us
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
