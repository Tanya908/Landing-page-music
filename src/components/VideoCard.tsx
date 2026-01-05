"use client";

import { useEffect, useState } from "react";

type VideoCardProps = {
    videos: string[];
    index: number;
    activeVideo: string | null; // зберігаємо ID
    setActiveVideo: (id: string | null) => void;
};

const VideoCard = ({
                       videos,
                       index,
                       activeVideo,
                       setActiveVideo,
                   }: VideoCardProps) => {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const update = () => setWidth(window.innerWidth);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const getTranslateValue = () => {
        if (width >= 1280) return `-${index * 75}%`;
        if (width >= 1024) return `-${index * 80}%`;
        if (width >= 768) return `-${index * 94}%`;
        return `-${index * 100}%`;
    };

    return (
        <div className="w-full flex flex-col items-center mt-10">
            <div className="w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(${getTranslateValue()})` }}
                >
                    {videos.map((id) => {
                        const isActive = activeVideo === id;

                        return (
                            <div
                                key={id}
                                className="flex-shrink-0 w-full md:w-[94%] lg:w-[80%] xl:w-[75%] pr-4"
                            >
                                <div className="relative aspect-video w-full overflow-hidden bg-black">
                                    <iframe
                                        src={
                                            isActive
                                                ? `https://player.vimeo.com/video/${id}?autoplay=1&controls=1`
                                                : `https://player.vimeo.com/video/${id}?controls=0`
                                        }
                                        className="absolute inset-0 w-full h-full"
                                        allow="autoplay; fullscreen"
                                    />

                                    {!isActive && (
                                        <button
                                            onClick={() => setActiveVideo(id)}
                                            className="absolute inset-0 m-auto z-50 h-20 w-20 bg-white rounded-full flex items-center justify-center"
                                        >
                                            <img src="/play.svg" alt="Play video" className="h-6 w-6" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
