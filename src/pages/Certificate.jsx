import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import StackColumn from "../components/StackColumn";
import JourneyColumn from "../components/JourneyColumn";
import Header from "../components/Header";
import ContactColumn from "../components/ContactColumn";
import ProjectColumn from "../components/ProjectColumn";
import CertificateCard from "../components/CertificateCard"; // Assuming you have this component
import certificateData from "../Data/Certificate.json"; // Import the JSON file

const Certificate = () => {
  const pinContainerRef = useRef(null);
  
  useGSAP(() => {
    const pinContainer = pinContainerRef.current;
    if (pinContainer) {
      const pinContainerHeight = pinContainer.offsetHeight;
      const startOffset = pinContainerHeight * 0.1; // 10% of the pinContainer height
      console.log("startOffset", startOffset);
      const endOffset = pinContainerHeight * 1.1;
      console.log("endOffset", endOffset);

      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".pinContainer", {
        scrollTrigger: {
          trigger: ".pinContainer",
          endTrigger: ".box",
          start: `top +=${startOffset}px`,
          end: `bottom top+=${endOffset}px`,
          pin: true,
          pinSpacing: false,
          // markers: true, // Enable markers for debugging
        },
      });
    }
  });

  return (
    <div className="flex flex-col gap-12 pb-12">
      <Header />
      <h1 className="text-3xl font-light text-white tracking-wide">Certificates & Achievements</h1>

      <div className="flex gap-3 flex-col">
        <div className="flex gap-3">
          {/* Left Section - Projects */}
          <div className="flex flex-col gap-3 w-auto flex-1">
            {certificateData.map((certificate, index) => (
              <CertificateCard key={index} certificate={certificate} />
            ))}
          </div>

          {/* Right Section - Sidebar */}
          <div className="w-[30%] box">
            <div ref={pinContainerRef} className="pinContainer flex flex-col gap-3">
              <div className="relative flex gap-3 bg-neutral-800 rounded-[32px] h-72">
                <StackColumn />
              </div>
              <div className="relative flex gap-3 bg-neutral-800 rounded-[32px] h-72">
                <JourneyColumn />
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex gap-3">
          <div className="h-72 bg-neutral-800 rounded-[32px] flex justify-center items-center w-[70%]">
            <ContactColumn />
          </div>
          <div className="flex gap-3 bg-neutral-800 rounded-[32px] h-72 w-[30%] justify-center items-center">
            <ProjectColumn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
