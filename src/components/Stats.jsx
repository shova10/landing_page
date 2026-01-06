import { FaUserGroup } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { IoThumbsUpOutline } from "react-icons/io5";

export default function Stats() {
    return(
        <section className="bg-[#F5F7FA] py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-3xl font-semibold font-Inter text-[#4D4D4D]">
                    Helping a local <br />
                    <span className="text-[#4CAF4F] font-Inter">business invest itself</span>
                    </h2>
                    <p className="text-[#18191F] font-Inter mt-2 text-sm">We reached here with our hard work and dedication</p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-8">
                    <StatItem
                    // icon={FaUserGroup}
                    number="2,245,341" 
                    label="Members"/>
                    <StatItem 
                    // icon={FaRegHandshake}
                    number="46,328" 
                    label="Clubs"/>
                    <StatItem 
                    // icon={IoThumbsUpOutline}
                    number="828,867" 
                    label="Event Bookings"/>
                    <StatItem 
                    // icon={MdOutlinePayment}
                    number="1,926,436" 
                    label="Payments"/>
                </div>
            </div>
        </section>
    );
}
const StatItem =({ number, label }) => (
    <div className="flex item-center gap-4">
        <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center">
      {/* <Icon className="text-[#4CAF4F] text-2xl" /> */}
    </div>
        <div>
            <h4 className="text-2xl font-bold font-Inter text-[#4D4D4D]">{number}</h4>
            <p className="text-[#717171] font-Inter text-sm">{label}</p>
        </div>
    </div>
);