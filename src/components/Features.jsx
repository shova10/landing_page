import { GrGroup } from "react-icons/gr";
import { BsBuildings } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa6";


const Card = ({ title, description,  }) => (
  <div className="px-8 py-10 text-center shadow-sm border border-gray-100 hover:border-green-500 transition-all cursor-pointer rounded-lg flex flex-col justify-between hover:scale-105 duration-300">
    
    
    <div className="flex justify-center mb-6">
      <div className="w-12 h-12 bg-[#E8F5E9] rounded-tl-[50px] rounded-tr-[3px] rounded-br-[35px] rounded-bl-[3px] flex items-center justify-center">
        {/* Render the icon component */}
        {/* <Icon className="text-green-500 text-2xl opacity-80" /> */}
      </div>
    </div>

    <h3 className="text-2xl font-bold font-Inter text-[#4D4D4D] max-w-50 mx-auto mb-4 leading-snug">
      {title}
    </h3>


    <p className="font-Inter text-sm leading-6 text-[#717171]">
      {description}
    </p>
  </div>
);

export default function Features() {
  const cards = [
    {
      // icon: GrGroup,
      title: <>Membership <br /> Organizations</>,
      description:
        "Our membership management software provides full automation of membership renewals and payments."
    },
    {
      // icon: BsBuildings,
      title: <>National <br /> Associations</>,
      description:
        "Our membership management software provides full automation of membership renewals and payments."
    },
    {
      // icon: FaRegHandshake,
      title: <>Clubs and <br /> Groups</>,
      description:
        "Our membership management software provides full automation of membership renewals and payments."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      
 
      <div className="text-center mb-14">
        <h2 className="text-3xl font-semibold font-Inter text-[#4D4D4D] max-w-lg mx-auto">
          Manage your entire community in a single system
        </h2>
        <p className="text-[#717171] font-Inter mt-6">
          Who is Nexcent suitable for?
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-20">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
