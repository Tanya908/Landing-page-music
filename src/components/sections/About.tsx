"use client";

import Button from "../ui/Button.tsx";
import {useScroll} from "../../contexts/ScrollContext.tsx";


type AboutItem = {
    title: string;
    text: string;
};

const AboutItems: AboutItem[] = [
    { text: "Decisions grounded in real scenes and communities", title: "Culture-first" },
    { text: "From trend analysis to stems and cutdowns", title: "Detail-obsessed" },
    { text: "Representation in talent, sound and origin", title: "Inclusive by default" },
    { text: "Fast, nimble, collaborate.", title: "Experienced" },
];

const About = () => {
    const { sections, scrollTo } = useScroll();

    return (
        <section id="about" ref={sections.about} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20 items-stretch">
            <div className="flex flex-col">
                <div className="flex gap-4 items-center">
                    <img src="/arrowText.svg" className="h-3 w-4" alt="arrow" />
                    <p className="caption whitespace-nowrap">
                        We turn briefs into cultural statements
                    </p>
                </div>

                <h2 className="h1 mt-4">Music for Bold Brands</h2>

                <p className="body text-[var(--color-green-700)] mt-8 mb-9 md:mb-10">
                    Founded by music supervisor Chloé Heatlie, Free Rein is a female-owned,
                    female-run music agency reshaping how brands choose and create music.
                    We blend creativity, data, and research with hands-on production to deliver
                    music that's authentic, inclusive, and campaign-ready.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {AboutItems.map((item) => (
                        <div key={item.title} className="flex flex-col">
                            <div className="h-px w-full bg-[var(--color-green-500)] my-2"></div>
                            <h3 className="caption-bold uppercase pt-6">
                                {item.title}
                            </h3>
                            <p className="body text-[var(--color-green-700)] mt-2 mb-6">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center lg:justify-start mt-11">
                    <Button
                        variant="secondary"
                        className="body-medium"
                        onClick={() => scrollTo("representation")}
                    >
                        Our Approach
                    </Button>

                </div>
            </div>

            <div className="aspect-[1/1] md:aspect-[4/3] lg:h-full lg:w-full">
                <img
                    src="/about.png"
                    alt="about"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}
export default About
