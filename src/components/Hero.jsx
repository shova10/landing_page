import img from "../assets/img.png";
export default function Hero() {
    return(
            <section className="bg-[#F5F7FA] pt-32 pb-20 px-20 md:px-20 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-3/5">
                <h1 className="text-4xl md:text-6xl font-semibold font-Inter text-[#4D4D4D] leading-tight">Lessons and insights <br />
                <span className="text-[#4CAF4F] font-Inter">from 8 years</span> 
                </h1>
                <p className="text-[#717171] font-Inter mt-4 text-lg">
                Where to grow your business as a photography site and social media?</p>
                <button className="mt-8 bg-[#4CAF4F] text-white px-8 py-3 rounded-md hover:bg-green-600 transition">
                Register</button>
                </div>
                <div className="md:w-2/5 mt-10 md:mt-0" >
                    <img src={img} alt="image" className="w-272.16px h-283.30px"/>
                </div>
            </section>
    );
}