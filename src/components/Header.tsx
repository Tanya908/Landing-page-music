"use client";

import * as React from "react";
import { useState } from "react";
import { Burger } from "./Burger";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import RotatingLogo from "./RotatingLogo";

type NavLink = { id: number; title: string; url: `#${string}` };

const navLinks: NavLink[] = [
    { id: 1, title: "About", url: "#about" },
    { id: 2, title: "Services", url: "#services" },
    { id: 3, title: "What we do", url: "#what-we-do" },
    { id: 4, title: "Contact", url: "#contact" },
];

const Header: React.FC = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleMenu = () => {
        setOpenNavigation((prev) => {
            const nextState = !prev;
            nextState ? disablePageScroll() : enablePageScroll();
            return nextState;
        });
    };

    const closeMenu = () => {
        setOpenNavigation(false);
        enablePageScroll();
    };

    return (
        <header className="w-full z-50 bg-light-100 relative">
            <div className="flex flex-col gap-6 py-6 lg:grid lg:grid-cols-3 lg:items-center lg:gap-10">

                <div className="flex items-center justify-between lg:hidden w-full">
                    <a href="/" aria-label="Free Rien home">
                        <RotatingLogo />
                    </a>

                    <div className="flex items-center gap-4">
                        <a
                            href="#briefus"
                            className="hidden md:flex btn-primary text-caption uppercase whitespace-nowrap"
                            onClick={closeMenu}
                        >
                            brief us
                        </a>

                        <Burger
                            open={openNavigation}
                            onToggle={toggleMenu}
                            className="w-12 h-12 lg:hidden"
                        />
                    </div>
                </div>

                <div className="hidden lg:flex lg:justify-center lg:order-2">
                    <a href="/" aria-label="Free Rien home">
                        <RotatingLogo />
                    </a>
                </div>


                <nav
                    aria-label="Primary navigation"
                    className={`
                        ${openNavigation ? "flex" : "hidden"}
                        absolute top-full left-0 w-full z-50
                        bg-light-100 flex-col items-center gap-10 pb-10

                        lg:static lg:flex lg:w-auto lg:bg-transparent
                        lg:flex-row lg:gap-6 lg:py-0 lg:order-1
                    `}
                >
                    {openNavigation && (
                        <div className=" lg:hidden w-screen h-px bg-[var(--color-green-500)]
                                         absolute left-1/2 -translate-x-1/2 top-0"
                        />
                    )}


                    <div className="mx-auto flex w-full flex-col items-center mt-6 gap-10 lg:flex-row lg:gap-6">
                        {navLinks.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                className=" h5 lg:body w-full text-center capitalize text-[var(--color-dark-700)] hover:text-[var(--color-green-300)] lg:w-auto whitespace-nowrap "
                                onClick={closeMenu}
                            >
                                {item.title}
                            </a>
                        ))}

                        <a
                            href="#briefus"
                            className="flex md:hidden btn-primary text-caption uppercase w-full text-center"
                            onClick={closeMenu}
                        >
                            brief us
                        </a>

                    </div>


                </nav>


                <div className="hidden lg:flex lg:justify-end lg:order-3">
                    <a
                        href="#briefus"
                        className="btn-primary text-caption uppercase text-center w-48"
                        onClick={closeMenu}
                    >
                        brief us
                    </a>
                </div>

            </div>
        </header>
    );
};

export default Header;
