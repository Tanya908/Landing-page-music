import * as React from "react";
import { useState } from "react";
import { Burger } from "./Burger.tsx";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import RotatingLogo from "./RotatingLogo.tsx";

type NavLink = { id: number; title: string; url: `#${string}`; onlyMobile?: boolean };

const navLinks: NavLink[] = [
    { id: 1, title: "About",      url: "#about" },
    { id: 2, title: "Services",   url: "#services" },
    { id: 3, title: "What we do", url: "#what-we-do" },
    { id: 4, title: "Contact",    url: "#contact" },
];

const Header: React.FC = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full bg-light-100">
            <div
                className="
                    flex flex-col gap-6 py-6 px-4
                    lg:grid lg:grid-cols-3 lg:items-center lg:gap-10
                "
            >

                <div className="flex items-center justify-between lg:hidden w-full">

                    <a href="/" aria-label="Free Rien home">
                       <RotatingLogo/>
                    </a>

                    <div className="flex items-center gap-4">
                        <a
                            href="#briefus"
                            className=" hidden md:flex btn-primary text-caption uppercase whitespace-nowrap  "
                            onClick={() => {
                                setOpenNavigation(false);
                                enablePageScroll();
                            }}
                        > brief us </a>

                        <Burger
                            open={openNavigation}
                            onToggle={() => {
                                setOpenNavigation(v => {
                                    const newState = !v;
                                    newState ? disablePageScroll() : enablePageScroll();
                                    return newState;
                                });
                            }}
                            className="w-12 h-12 lg:hidden"
                        />
                    </div>
                </div>

                {openNavigation && (
                    <div className="lg:hidden h-px w-screen bg-[var(--color-green-500)]
                                    relative left-1/2 -translate-x-1/2 my-2" />
                )}

                <div className="hidden lg:flex lg:justify-center lg:order-2">
                    <a href="/" aria-label="Free Rien home">
                        <RotatingLogo />
                    </a>
                </div>


                <nav
                    aria-label="Primary"
                    className={`w-full lg:w-auto ${openNavigation ? "flex" : "hidden"} lg:flex lg:order-1`}
                >
                    <div className="mx-auto flex w-full flex-col items-center gap-10
                                    lg:max-w-none lg:flex-row lg:gap-6 lg:whitespace-nowrap">
                        {navLinks.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                className="h5 w-full body text-center capitalize text-[var(--color-dark-700)]
                                           hover:text-[var(--color-green-300)] lg:w-auto"
                                onClick={() => {
                                    setOpenNavigation(false);
                                    enablePageScroll();
                                }}
                            > {item.title} </a>
                        ))}

                        <a
                            href="#briefus"
                            className="
                                flex md:hidden btn-primary text-caption uppercase
                                w-full  text-center
                            "
                        > brief us </a>
                    </div>
                </nav>

                <div className="hidden lg:flex lg:justify-end lg:order-3">
                    <a
                        href="#briefus"
                        className="btn-primary text-caption uppercase text-center w-48"
                        onClick={() => {
                            setOpenNavigation(false);
                            enablePageScroll();
                        }}
                    >
                        brief us
                    </a>
                </div>

            </div>
        </header>
    );
};

export default Header;
