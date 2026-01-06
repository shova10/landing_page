import img1 from "../assets/img1.png"
export default function About() {
    return(
        <section className="px-6 md:px-20 py-16 space-y-24 max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-12">
                <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 flex justify-center">
                    <img src={img1} alt="image"
                    className="w-max max-w-sm h-max"/>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-Inter font-semibold text-[#4D4D4D] ">
                    The unseen of spending three <br /> years at Pixelgrade
                    </h2>
                    <p className="text-[#717171] mt-6 text-sm leading-relaxed">
                        When joining the Pixelgrade team, you're not just a designer or developer. You're part of a community 
                        dedicated to crafting beautiful digital experiences. Our journey has been one of continuous learning, 
                        iterating on our design systems to ensure that every pixel serves a purpose.
                    </p>
                    <button className="mt-8 bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition">
                        Learn More 
                    </button>
                </div>
                </div>
            </div>
        </section>
    );
}