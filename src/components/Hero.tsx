import { useState } from "react";
import VideoCard from "./VideoCard";

const videos = [
    "1131395722",
    "1098230535",
    "1119041209",
    "1098230325",
    "1098230662",
    "1098230002",
];

const ServiceItems = [
    { text: "We find and license the perfect track", title: "Music Supervision" },
    { text: "We craft the perfect soundtrack", title: "Composition & Re-Records" },
    { text: "We turn scene data into choices", title: "Cultural Insights" },
    { text: "We work with music artists on our projects", title: "Artist Partnerships" },
];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const next = () => {
        setActiveVideo(null);
        setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    const prev = () => {
        setActiveVideo(null);
        setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    return (
        <div className="mb-20">
            <div className="flex flex-col gap-8 md:flex-row">
                <h1 className="title lg:basis-[70%]">Music that moves culture</h1>

                <div className="flex flex-col gap-2 md:self-end lg:basis-[30%]">
                    <h2 className="caption-bold uppercase mb-2">Female-founded music agency</h2>
                    <p className="caption text-[var(--color-green-700)]">
                        We help brands find, license and compose music that feels inevitable.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-11">
                {ServiceItems.map((item, i) => (
                    <div key={i} className="flex flex-col">
                        <p className="caption text-[var(--color-green-700)] whitespace-nowrap">{item.text}</p>
                        <div className="h-px w-full bg-[var(--color-dark-700)] my-2"></div>
                        <h3 className="caption-bold uppercase text-[var(--color-dark-700)]">{item.title}</h3>
                    </div>
                ))}
            </div>

            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
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
                    <button onClick={prev} className="w-14 h-14 bg-black text-white flex items-center justify-center">
                        <img src="/arrow.svg" alt="left arrow" className="h-3.5 w-3.5" />
                    </button>

                    <button onClick={next} className="w-14 h-14 bg-black text-white flex items-center justify-center">
                        <img src="/arrow.svg" alt="right arrow" className="h-3.5 w-3.5 rotate-180" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
