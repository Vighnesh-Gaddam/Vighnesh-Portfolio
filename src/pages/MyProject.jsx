import ProjectData from "../Data/Project.json"; // Use a different name to avoid confusion with the component name
import ProjectCard from "../components/ProjectCard"; // Import the new ProjectCard component
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import StackColumn from "../components/StackColumn";
import JourneyColumn from "../components/JourneyColumn";
import Header from "../components/Header";
import ContactColumn from "../components/ContactColumn";
import Certificates from "../components/CertificatesColumn";

const MyProject = () => {
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
          trigger: ".pinContainer", // The element to pin
          endTrigger: ".box",
          start: `top +=${startOffset}px`, // When the top of the box reaches the center of the viewport
          end: `bottom top+=${endOffset}px`, // Pin the box for 500px of scrolling
          pin: true, // Enable pinning
          pinSpacing: false, // Disable spacing added by pinning
          // markers: true, // Enable markers for debugging
        },
      });
    }
  });
  return (
    <div className="flex flex-col gap-12 pb-12">
      <Header />
      <h1 className="text-3xl font-light text-white tracking-wide">My Projects</h1>

      <div className="flex gap-3 flex-col">
        <div className="flex gap-3">
          {/* Left Section - Projects */}
          <div className="flex flex-col gap-3 w-auto flex-1">
            {ProjectData.projects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Right Section - Sidebar */}
          <div className="w-[30%] box">
            <div
              ref={pinContainerRef}
              className="pinContainer flex flex-col gap-3 "
            >
              <div className="relative flex gap-3 bg-neutral-800 rounded-[32px] h-72">
                <StackColumn/>
              </div>
              <div className="relative flex gap-3 bg-neutral-800 rounded-[32px] h-72">
                <JourneyColumn/>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex gap-3">
          <div className="h-72 bg-neutral-800 rounded-[32px] flex justify-center items-center w-[70%]">
            <ContactColumn/>
          </div>
          <div className="flex gap-3 bg-neutral-800 rounded-[32px] h-72 w-[30%] justify-center items-center">
            <Certificates/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
