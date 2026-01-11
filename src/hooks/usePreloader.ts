import { useEffect, useRef, useState } from "react";

type UsePreloaderOptions = {
    duration?: number;
    onFinish: () => void;
};

export const usePreloader = ({
                                 duration = 1000,
                                 onFinish,
                             }: UsePreloaderOptions) => {
    const [progress, setProgress] = useState(20);

    const startTime = useRef<number | null>(null);
    const rafId = useRef<number | null>(null);
    const finished = useRef(false);

    useEffect(() => {
        const animate = (time: number) => {
            if (!startTime.current) startTime.current = time;


            const elapsed = time - startTime.current;
            const t = Math.min(elapsed / duration, 1);


            const eased = 1 - Math.pow(1 - t, 3);


            const value = 20 + eased * 72;
            setProgress(value);


            if (t < 1) {
                rafId.current = requestAnimationFrame(animate);
            } else if (!finished.current) {
                finished.current = true;


                setTimeout(() => {
                    setProgress(100);
                    onFinish();
                }, 300);
            }
        };

        rafId.current = requestAnimationFrame(animate);

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [duration, onFinish]);
    return Math.min(progress, 100);
};
