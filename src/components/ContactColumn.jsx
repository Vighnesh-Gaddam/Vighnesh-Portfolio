import { Link } from "react-router-dom";
import ArrowButton from "./ArrowButton";

const ContactColumn = () => {
  return (
    <Link to="/Contact" className="flex items-start w-full bg-yellow-400 rounded-[36px] relative group z-10 overflow-hidden pt-6 pl-6 h-full bg-contactSVG bg-no-repeat bg-center bg-[length:100%]">
      <h3 className="text-lg font-medium text-black z-10">Contact</h3>
      {/* <img src="/contact.svg" alt="" className="scale-150 z-0"/> */}
      <ArrowButton />
    </Link>
  );
};

export default ContactColumn;
