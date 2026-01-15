"use client";

import RotatingLogo from "../ui/RotatingLogo.tsx";
import SocialIcons from "../ui/SocialIcons.tsx";
import {useScroll} from "../../contexts/ScrollContext.tsx";

type FooterLink = {
    target: "about" | "representation" | "whatWeDo" | "contact";
    title: string;
};

const FooterLinks: FooterLink[] = [
    { target: "about", title: "About" },
    { target: "representation", title: "Services" },
    { target: "whatWeDo", title: "What we do" },
    { target: "contact", title: "Contact" },
];

const Footer = () => {
    const { scrollTo } = useScroll();

    return (
        <section className="w-full bg-[var(--color-dark-700)] px-4 py-16 mt-28">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start">
                    <div className="flex flex-col order-1">
                        <h5 className="h5-bold uppercase text-[var(--color-light-100)]">
                            The new music agency
                        </h5>

                        <h2 className="h2 text-[var(--color-green-100)] mt-14 lg:max-w-3xl">
                            Female-founded music agency reshaping how brands choose and create music.
                        </h2>
                    </div>

                    <div className="flex justify-center md:justify-end order-2">
                        <RotatingLogo color="#ffffff" className="w-32 h-32" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 mt-14 items-center">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                        <a
                            href="mailto:hello@freereinmusic.com"
                            className="body text-[var(--color-green-100)] hover:text-[var(--color-green-300)]"
                        >
                            hello@freereinmusic.com
                        </a>

                        <p className="body text-[var(--color-green-100)]">
                            London, UK
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <p className="body text-[var(--color-light-100)]">
                            Socials
                        </p>

                        <SocialIcons
                            type="instagram"
                            href="https://www.instagram.com/freereinmusic/"
                            label="Instagram"
                        />

                        <SocialIcons
                            type="linkedin"
                            href="https://www.linkedin.com/company/free-rein-music/"
                            label="LinkedIn"
                        />
                    </div>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-28">
                    {FooterLinks.map(({ target, title }) => (
                        <li
                            key={target}
                            className="flex-1 py-2.5 border-t border-[var(--color-light-100)]"
                        >
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(target);
                                }}
                                className="caption-bold uppercase text-[var(--color-light-100)] hover:text-[var(--color-green-300)] active:text-[var(--color-green-300)] cursor-pointer"
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className="grid grid-cols-1 md:grid-cols-4 md:justify-between gap-4 md:gap-8 caption text-[var(--color-green-100)] mt-16 whitespace-nowrap">
                    <li className="md:col-start-1">© Free Rein Music Ltd</li>
                    <li className="md:col-start-3">Privacy Policy / Terms.</li>
                    <li className="md:col-start-4">All rights reserved 2025</li>
                </ul>
        </section>
    );
};

export default Footer;
