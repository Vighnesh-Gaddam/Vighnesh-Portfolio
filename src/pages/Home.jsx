import Header from "../components/Header";
import ProjectColumn from "../components/ProjectColumn";
import ContactColumn from "../components/ContactColumn";
import JourneyColumn from "../components/JourneyColumn";
import StackColumn from "../components/StackColumn";
import CertificatesColumn from "../components/CertificatesColumn";

const Home = () => {
  return (
    <div className="h-full flex flex-col gap-3">
      <Header />
      <div className="h-full flex gap-3">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="h-[65%] w-full">
            <ProjectColumn />
          </div>
          <div className="flex gap-3 h-[35%]">
            <div className="h-full w-[54%]">
              <ContactColumn />
            </div>
            <div className="h-full w-[46%]">
              <JourneyColumn />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="h-[40%]">
            <StackColumn />
          </div>

          <div className="h-[60%]">
            <CertificatesColumn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
