import stackData from "../Data/stack.json";
import IndieStack from "../components/IndieStack";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import JourneyColumn from "../components/JourneyColumn";
import Header from "../components/Header";
import ContactColumn from "../components/ContactColumn";
import Certificates from "../components/CertificatesColumn";
import ProjectColumn from "../components/ProjectColumn";

const Stack = () => {
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
      <h1 className="text-3xl font-light text-white tracking-wide">My Tech Stack</h1>

      <div className="flex gap-3 flex-col">
        <div className="flex gap-3">
          {/* Left Section - Projects */}
          <div className="flex-1 flex gap-6 bg-neutral-800 rounded-[36px] p-6 flex-col">
            {stackData.Stack.map((data) => (
              <div key={data.id} className="flex flex-col gap-3">
                <IndieStack stack={data} />
              </div>
            ))}
          </div>

          {/* Right Section - Sidebar */}
          <div className="w-[30%] box">
            <div ref={pinContainerRef} className="pinContainer flex flex-col gap-3 ">
              <div className="relative flex gap-3 bg-neutral-800 rounded-[32px] h-72">
                <ProjectColumn />
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
            <Certificates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
