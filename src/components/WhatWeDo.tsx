import Button from "./Button.tsx";

type WhatWeDoItem = {
    id: number;
    img: string;
    title: string;
    description: string;
}

const WhatWeDoItems:WhatWeDoItem[] =[
    {id:1,img:"/servicesOne.png", title: "Music Trend Reports", description:"We blend data with on-the-ground cultural research to show what's breaking, what's fading and why it matters. Deliverables include: Trend Reports, Cultural Compass Report by scene/market and Artist Searches for real, campaign-ready talent." },
    {id:2,img:"/servicesTwo.png" ,title: "Music Searches & Licensing", description:"We use a blend of music data and cultural insights to suggest the perfect tracks for your campaign. We handle all music rights negotiations, clearances and licensing paperwork. Note: we don't do Library Music. " },
    {id:3,img:"/servicesThird.png", title: "Bespoke Composition", description:"Authenticity matters. Too often, advertising relies on imitations rather than true artistry. We work directly with emerging composers and established talent to create original tracks tailored to your campaign. Need K-Pop? We’ll collaborate with real K-Pop songwriters and producers. Looking for Funk? We’ll bring in a genuine funk band. Always authentic, never pastiche." },
    {id:4,img:"/servicesFourth.png", title: "Re-Records", description:"Re-records are our happy place. We take a familiar track and make it even better. From rights negotiations and clearances to working with handpicked artists and composers, we handle it all. We love involving agency teams in the process and showcasing our full production range with orchestras, iconic talent and real musicians" },
    {id:5,img:"/servicesFifth.png", title: "artist partnerships", description:"We connect brands with artists whose sounds reflect real culture, co-creating music that feels authentic, builds credibility, and creates meaningful connections with audiences." },
]

const WhatWeDo = () => {
    return (
        <section id="what-we-do" className="mt-28">
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-14">
                <h2 className="h1 lg:w-2/3">Five ways we help brands <span className="text-[var(--color-green-300)]">be heard</span> </h2>
                <div className="flex items-end ">
                    <a
                        href="#contact"
                        className=""
                    >

                    </a>


                    <Button href="#contact" variant="primary" className="w-full md:w-auto text-caption">
                        Contact Us
                    </Button>

                </div>
            </div>

            <div className="flex flex-col gap-14">
                {WhatWeDoItems.map((item) => (
                    <article
                        key={item.id}
                        className=" border-t border-[var(--color-dark-700)] pt-8 items-start
                                    grid grid-cols-1 gap-6 md:grid-cols-[7fr_3fr] md:gap-8 lg:gap-10"
                    >

                        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[160px_160px_minmax(0,480px)] lg:gap-x-6" >
                            <div
                                className="w-8 h-8 rounded-full bg-[var(--color-green-300)]
                                           flex items-center justify-center text-[var(--color-light-100)] "
                            >
                                {item.id}
                            </div>
                            <h3 className="body-bold">{item.title}</h3>
                            <p className="body text-[var(--color-green-700)]">{item.description}</p>
                        </div>

                        <div className="aspect-square shrink-0 overflow-hidden place-self-center">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover"/>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
export default WhatWeDo
