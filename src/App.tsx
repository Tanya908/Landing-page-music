import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Representation from "./components/Representation.tsx";




const App = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-10">
            <Header/>
            <Hero/>
            <About/>
            <Representation/>
            <div className="h-28"></div>

        </div>
    )
}
export default App
