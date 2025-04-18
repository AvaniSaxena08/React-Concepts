import { MdOutlineLocationOn, MdOutlineLocalPhone } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div className="bg-teal-900 mt-2 h-[350px] flex flex-col items-start px-10 py-10">
      <h1 className="text-gray-200 text-left text-5xl  font-semibold">Contact Us</h1>

      <div className="flex flex-col space-y-6 mt-24">
        {/* Phone */}
        <div className="flex items-center space-x-6">
          <div className="w-14 h-14  bg-teal-700 rounded-full flex items-center justify-center">
            <MdOutlineLocalPhone color="white" size={30} />
          </div>
          <div className="text-white text-xl font-medium">8435106498 , 7846984725</div>
        </div>

        {/* E-mail */}
        <div className="flex items-center space-x-6">
          <div className="w-14 h-14 bg-teal-700 rounded-full flex items-center justify-center">
            <RiMessage2Line color="white" size={30} />
          </div>
          <div className="text-white text-xl font-medium">healthpredictai@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
