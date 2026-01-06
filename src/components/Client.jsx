import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
export default function Client() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6]
  return (
    <section className="py-20 px-25 text-center bg-white">                                          
      <h2 className="text-3xl font-semibold font-Inter text-[#4D4D4D]">Our Clients</h2>
      <p className="text-[#4D4D4D] font-Inter mt-2">         
        We have been working with some Fortune 500+ clients
      </p>
      <div className="mt-15 flex flex-wrap justify-center gap-9 md:justify-between items-center opacity-100 grayscale  mx-auto">
        {logos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="logo"
            className="w-12 h-12 bg-gray-400 rounded-full"
          />
        ))}
      </div>
    </section>
  )
}
