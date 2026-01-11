import {useEffect} from "react";

type PreloaderProps = {
    onFinish: () => void;
};

const Preloader = ({ onFinish }: PreloaderProps) => {

    useEffect(() => {
        const timeout = setTimeout(onFinish, 1200);
        return () => clearTimeout(timeout);
    }, [onFinish]);

    return (
        <div className="fixed inset-0 z-50 bg-[var(--color-light-200)] p-4 md:p-8">
            <div className="w-full h-full border border-[var(--color-green-500)] p-8 md:p-10
                           flex flex-col items-center justify-center">

                <div className="mb-10">
                    <img
                        src="/mainGreenLogo.svg"
                        className="w-40 h-40"
                        alt="Free Rein Music"
                    />
                </div>

                <div className="loader-track">
                    <div className="loader-line" />
                </div>
            </div>
        </div>
    );
};


export default Preloader;