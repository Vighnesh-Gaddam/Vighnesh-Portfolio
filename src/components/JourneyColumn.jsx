import { Link } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";

const JourneyColumn = () => {
  return (
    <Link to="/journey" className="flex justify-center items-center flex-1 bg-[#001620] rounded-[36px] relative group z-10 h-full w-full overflow-hidden">
      <img src="https://cdn.svgator.com/images/2024/01/svgator-bird-alligator-cta.gif" alt="" className="scale-125"/>
      <h3 className="absolute top-6 left-6 text-white text-lg font-medium mb-1">Journey</h3>
      <ArrowButton />
    </Link>
  );
};

export default JourneyColumn;
