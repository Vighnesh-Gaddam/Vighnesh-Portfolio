import ArrowButton from "../components/ArrowButton";
import { Link } from "react-router-dom";

const CertificatesColumn = () => {
  return (
    <Link to="/certificates"
      className="flex justify-center items-center h-full w-full rounded-[36px] relative group z-10"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 99.99%), url('/Trophy_.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 1,
      }}
    >
      <h3 className="text-xl font-medium tracking-widest z-10 relative text-white text-center">Certificates & <br/> Achievements</h3>
      <ArrowButton />
    </Link>
  );
};

export default CertificatesColumn;
