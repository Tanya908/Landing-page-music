"use client";

import React, { useEffect, useState } from "react";

interface Props {
    videos: string[];
    index: number;
    activeVideo: string | null;
    setActiveVideo: (url: string | null) => void;
}

const VideoCard: React.FC<Props> = ({ videos, index, activeVideo, setActiveVideo }) => {
    const [width, setWidth] = useState(0);

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

    const startVideo = (id: string) => {
        setActiveVideo(`https://player.vimeo.com/video/${id}?autoplay=1&controls=1`);
    };

    return (
        <div className="w-full flex flex-col items-center mt-10">
            <div className="w-full overflow-hidden ml-4 md:ml-10 lg:ml-14">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(${getTranslateValue()})` }}
                >
                    {videos.map((id, i) => {
                        const isActive = activeVideo?.includes(id);

                        return (
                            <div
                                key={i}
                                className="flex-shrink-0 w-full md:w-[94%] lg:w-[80%] xl:w-[75%] pr-4"
                            >
                                <div className="relative aspect-video w-full overflow-hidden bg-black">

                                    <iframe
                                        src={
                                            isActive
                                                ? activeVideo!
                                                : `https://player.vimeo.com/video/${id}?controls=0`
                                        }
                                        className="absolute inset-0 w-full h-full"
                                        allow="autoplay; fullscreen"
                                    />

                                    {!isActive && index === i && (
                                        <button
                                            onClick={() => startVideo(id)}
                                            className="absolute inset-0 m-auto z-50 h-20 w-20 bg-white rounded-full flex items-center justify-center"
                                        >
                                            <img src="/play.svg" className="h-6 w-6" />
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
