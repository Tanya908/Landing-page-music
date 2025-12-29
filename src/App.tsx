import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Representation from "./components/Representation.tsx";
import WhatWeDo from "./components/WhatWeDo.tsx";
import PastCollabs from "./components/PastCollabs.tsx";




const App = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-10">
            <Header/>
            <Hero/>
            <About/>
            <Representation/>
            <WhatWeDo/>
            <PastCollabs/>
            <div className="h-80"></div>
            <div className="h-80"></div>
            <div className="h-80"></div>
            <div className="h-80"></div>

        </div>
    )
}
export default App
