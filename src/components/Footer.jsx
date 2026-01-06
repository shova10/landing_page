import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
export default function footer() {
    return(
        <section>
            <div className="flex flex-col md:flex-row mb-6 items-center mt-10 gap-12">
                <div className="md:w-1/2 flex justify-center ">
                    <img src={img3} alt="image3"
                        className="max-w-sm  w-max h-max object-cover rounded-lg"/>
                </div>
                
                <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-Inter font-semibold text-[#4D4D4D] ">
                    How to design your site footer like <br /> we did
                </h2>
                <p className="text-[#717171] font-Inter mt-6 text-sm leading-relaxed">
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, 
                  massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                  In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod 
                  augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur 
                  quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <button className="mt-8 bg-[#4CAF4F] text-white font-Inter px-8 py-3 rounded-md hover:bg-green-600 transition">
                    Learn More
                </button>
                </div>
            </div>
                
            <div className="flex flex-col md:flex-row md:items-stretch bg-[#F5F7FA] items-center gap-12">
                <div className="md:w-1/2 flex justify-center  items-center ">
                    <img src={img4} alt="image4" 
                    className="w-70 h-60 object-cover rounded-lg"/>
                </div>
            
            <div className="md:w-1/2 flex flex-col justify-between ">
                <p className="text-[#717171] mt-6 font-Inter text-sm leading-relaxed">
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
                    Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. 
                    Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, 
                    vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <h6 className="text-xl md:text-2xl font-Inter font-semibold text-[#4CAF4F] ">
                    Tim Smith
                </h6>
                <p className="text-[#89939E] font-Inter text-sm leading-relaxed">
                    British Dragon Boat Racing Association
                </p>
                <div className="flex items-center gap-10 mt-4 ">
                <div className="flex flex-wrap  gap-2 items-center">
                    {logos.map((src, index) => (
                    <img key={index} src={src} alt="logo" className="h-10 w-14" />
                    ))}
                </div>
                <h2 className="text-xl font-Inter font-semibold text-[#4CAF4F]">Meet all customers<span>→</span></h2>
            </div>
            </div>
            </div>
        </section>
    );
}