import blog1 from "../assets/Bg.png"
import blog2 from "../assets/Bg1.png"
import blog3 from "../assets/Bg2.png"

const BlogCard = ({ image, title }) => (
  <div className="relative flex flex-col items-center">
    <div className="w-full h-64 overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
      />
    </div>
    
   
    <div className="bg-[#F5F7FA] p-4 shadow-lg rounded-lg w-[85%] -mt-16 z-10 text-center flex flex-col items-center min-h-35 justify-between">
      <h4 className="text-[#717171] font-semibold text-sm md:text-base px-2">
        {title}
      </h4>
      <a 
        href="#" 
        className="text-green-500 font-bold flex items-center gap-2 hover:text-green-600 transition-colors mt-4"
      >
        Readmore <span className="text-xl">→</span>
      </a>
    </div>
  </div>
);

export default function Blog() {
  const blogs = [
    {
      id: 1,
      image: blog1, 
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      id: 2,
      image: blog2, 
      title: "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      id: 3,
      image: blog3,
      title: "Revamp the Membership Model with Triathlon Australia",
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-Inter`` font-semibold text-[#4D4D4D] mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-[#717171] max-w-2xl font-Inter mx-auto text-sm leading-relaxed">
          The Nextcent blog is the best place to read about the latest membership insights, 
          trends and more. See who's joining the community, read about how our community 
          is increasing their membership income and lot's more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}