import { useState } from "react";
import VideoCard from "../ui/VideoCard.tsx";
import SliderArrowButton from "../ui/SliderButton.tsx";

const videos: string[] = [
    "1131395722",
    "1098230535",
    "1119041209",
    "1098230325",
    "1098230662",
    "1098230002",
];

type ServiceItem = {
    title: string;
    text: string;
};

const ServiceItems:ServiceItem[] = [
    { text: "We find and license the perfect track", title: "Music Supervision" },
    { text: "We craft the perfect soundtrack", title: "Composition & Re-Records" },
    { text: "We turn scene data into choices", title: "Cultural Insights" },
    { text: "We work with music artists on our projects", title: "Artist Partnerships" },
];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const isPrevDisabled = index === 0;
    const isNextDisabled = index === videos.length - 1;

    const prev = () => {
        setActiveVideo(null);
        setIndex((prev) => Math.max(prev - 1, 0));
    };

    const next = () => {
        setActiveVideo(null);
        setIndex((prev) => Math.min(prev + 1, videos.length - 1));
    };

    return (
        <section className="mb-28 mt-11 md:mt-16">
            <div className="flex flex-col md:flex-row md:justify-between gap-8">
                <h1 className="title lg:basis-[60%]">Music that moves culture</h1>

                <div className="flex flex-col gap-2 md:self-end lg:basis-[30%]">
                    <h2 className="caption-bold uppercase mb-2">Female-founded music agency</h2>
                    <p className="caption text-[var(--color-green-700)]">
                        We help brands find, license and compose music that feels inevitable.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-18">
                {ServiceItems.map((item) => (
                    <div key={item.title} className="flex flex-col">
                        <p className="caption text-[var(--color-green-700)] max-w-full">{item.text}</p>
                        <div className="h-px w-full bg-[var(--color-dark-700)] my-2"></div>
                        <h3 className="caption-bold uppercase">{item.title}</h3>
                    </div>
                ))}
            </div>

            <div className="relative -mr-4 md:-mr-8 lg:-mr-10 mt-10">
                <VideoCard
                    videos={videos}
                    index={index}
                    activeVideo={activeVideo}
                    setActiveVideo={setActiveVideo}
                />
            </div>

            <div className="flex flex-col items-center md:flex-row md:justify-between w-full mt-3.5 md:mt-6">

                <p className="text-caption md:body text-center md:text-left text-[var(--color-green-700)] w-full md:w-md lg:w-lg">
                    Projects music supervised by our founder, Chloe Heatlie during her time at Adelphoi Music.
                </p>

                <div className="flex gap-6 md:self-end mt-8 md:mt-0">
                    <SliderArrowButton
                        direction="left"
                        disabled={isPrevDisabled}
                        onClick={prev}
                    />

                    <SliderArrowButton
                        direction="right"
                        disabled={isNextDisabled}
                        onClick={next}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
