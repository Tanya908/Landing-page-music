"use client";

import {useScroll} from "../contexts/ScrollContext.tsx";

type CardItem = {
    title: string;
    img: string;
    description: string;
};

const CardItems:CardItem[] = [
    { title: "Relevance", img:"/relevanceIcon.svg" ,description: "Create or license culturally relevant music." },
    { title: "Representation", img:"/representationIcon.svg" ,description: "Increase representation in advertising through music." },
    { title: "Impact", img:"/impactIcon.svg" ,description: "Make work that affects culture." },
    { title: "Leadership", img:"/leadershipIcon.svg" ,description: "Lead for women-owned businesses in advertising." },
];

const Representation = () => {
    const { sections } = useScroll();
    return (
        <section id="representation" ref={sections.representation} className="mt-28">
            <p className="caption text-[var(--color-green-700)] text-center mb-4 ">
                Representation isn’t a trend. It’s our standard
            </p>

            <h3 className="h1 text-center">
                Culture, <span className="text-[var(--color-green-300)]">Not Noise</span>
            </h3>

            <div className=" mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1fr_1fr]
                             border border-[var(--color-green-100)] md:gap-y-6"
            >
                {CardItems.map((item, index) => {
                    const isLast = index === CardItems.length - 1;
                    const isLeftMd = index % 2 === 0;

                    return (
                        <div
                            key={item.title}
                            className="flex flex-col items-center text-center p-4 md:p-8 gap-10 lg:gap-16 relative"
                        >
                            <h4 className="h4">{item.title}</h4>
                            <img src={item.img} alt={`${item.title} icon`} />
                            <p className="h5 text-[var(--color-green-700)]">{item.description}</p>
                            {/* mobile */}
                            {!isLast && (
                                <div className="block md:hidden w-full h-px bg-[var(--color-green-100)]" />
                            )}
                            {/* md */}
                            {isLeftMd && (
                                <div
                                    className="hidden md:block lg:hidden bg-[var(--color-green-100)]
                                               w-px absolute right-0 top-[32px] bottom-[32px]"
                                />
                            )}
                            {/* lg */}
                            {!isLast && (
                                <div
                                    className="hidden lg:block bg-[var(--color-green-100)]
                                               w-px absolute right-0 top-[32px] bottom-[32px]"
                                />
                            )}
                        </div>
                    );
                })}

            </div>
        </section>
    )
}
export default Representation
