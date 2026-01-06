import logo from '../assets/logo.png'
export default function Navbar() {
    return(
      <nav className="w-full bg-white py-4 px-6 md:px-20 flex justify-between items-center fixed top-0 z-50 shadow-sm">
        <div className="flex justify-between items-center  gap-2">
            <div className="w-auto h-auto py-1 rounded-sm">
              <img src={logo} alt="logo" className='w-8 h-6' />
            </div>
          <span className="text-2xl font-Inter font-bold text-[#4D4D4D]">Nexcent</span>
        </div>
        <div className="hidden font-Inter items-center md:flex gap-8 text-black">
          <a href="#" className="hover:text-green-500">Home</a>
          <a href="#" className="hover:text-green-500">Feature</a>
          <a href="#" className="hover:text-green-500">Community</a>
          <a href="#" className="hover:text-green-500">Blog</a>
          <a href="#" className="hover:text-green-500">Pricing</a>
        <button className="bg-[#4CAF4F] text-[#FFFFFF] px-6 py-3 rounded-sm hover:bg-green-600 flex item-center gap-2">Register Now
        <span>→</span> </button>
      </div>
      </nav>
    
    );
} 