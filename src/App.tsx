import { ScrollProvider } from "./contexts/ScrollContext.tsx";
import Header from "./components/layout/Header.tsx";
import Hero from "./components/sections/Hero.tsx";
import About from "./components/sections/About.tsx";
import Representation from "./components/sections/Representation.tsx";
import WhatWeDo from "./components/sections/WhatWeDo.tsx";
import PastCollabs from "./components/sections/PastCollabs.tsx";
import Contact from "./components/sections/Contact.tsx";
import Footer from "./components/layout/Footer.tsx";
import Preloader from "./components/ui/Preloader.tsx";
import {useState} from "react";


const App = () => {
    const [isLoading, setIsLoading] = useState(true);


    if (isLoading) {
        return <Preloader onFinish={() => setIsLoading(false)} />;
    }


    return (
        <ScrollProvider>
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-10">
                <Header />
                <Hero />
                <About />
                <Representation />
                <WhatWeDo />
                <PastCollabs />
            </div>
            <Contact />
            <Footer />
        </ScrollProvider>
    );
};


export default App;