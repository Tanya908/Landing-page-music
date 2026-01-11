import { ScrollProvider } from "./contexts/ScrollContext.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Representation from "./components/Representation.tsx";
import WhatWeDo from "./components/WhatWeDo.tsx";
import PastCollabs from "./components/PastCollabs.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import Preloader from "./components/Preloader.tsx";
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