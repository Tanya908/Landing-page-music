import RotatingLogo from "./RotatingLogo";
import SocialIcons from "./SocialIcons.tsx";

type FooterLink = {
    link: string;
    title: string;
};

const FooterLinks: FooterLink[] = [
    { link: "#about", title: "About" },
    { link: "#representation", title: "Services" },
    { link: "#what-we-do", title: "What we do" },
    { link: "#contact", title: "Contact" },
];

const Footer = () => {
    return (
        <section className="w-full bg-[var(--color-dark-700)] px-4 py-16 mt-28">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start">
                    <div className="flex flex-col order-1">
                        <h5 className="h5-bold uppercase text-[var(--color-light-100)] ">
                            The new music agency
                        </h5>

                        <h2 className="h2 text-[var(--color-green-100)] mt-8 lg:max-w-2xl">
                            Female-founded music agency reshaping how brands choose and create music.
                        </h2>
                    </div>

                    <div className="flex justify-center md:justify-end order-2">
                        <RotatingLogo color="#ffffff" size={128} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 mt-16 items-center">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                        <a
                            href="mailto:hello@freereinmusic.com"
                            className="body text-[var(--color-green-100)]"
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

                <ul className="flex flex-col md:flex-row gap-4 mt-16">
                    {FooterLinks.map(({ link, title }) => (
                        <li
                            key={link}
                            className="flex-1 py-2.5 border-t border-[var(--color-light-100)]"
                        >
                            <a
                                href={link}
                                className="caption-bold uppercase text-[var(--color-light-100)] hover:text-[var(--color-green-300)]"
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className="flex flex-col md:flex-row gap-8 caption  uppercase text-[var(--color-green-100)] mt-16">
                    <li>© Free Rein Music Ltd</li>
                    <li>Privacy Policy / Terms.</li>
                    <li>All rights reserved 2025 FREE REIN MUSIC LTD</li>
                </ul>
        </section>
    );
};

export default Footer;
