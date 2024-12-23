import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";
import stackData from "../Data/stack"; // Ensure you're importing stackData properly
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const StackColumn = () => {
  const stackRefs = useRef([]); // Array to hold references to all images

  // Mouse enter animation
  const handleMouseEnter = () => {
    stackRefs.current.forEach((ref, index) => {
      if (!ref) return; // Skip if ref is null

      gsap.to(ref, {
        x:
          index === 2
            ? 0 // No movement for index 2
            : index === 0 || index === 4
            ? index < 2
              ? "-15px"
              : "15px" // Move -20px or 20px for indices 1 and 5
            : index < 3
            ? "-8px"
            : "8px", // Default: Move -20px or 20px for other indicest
        duration: 0.5,
        ease: "power1.out",
      });
    });
  };

  // Mouse leave animation
  const handleMouseLeave = () => {
    stackRefs.current.forEach((ref) => {
      if (!ref) return; // Skip if ref is null

      gsap.to(ref, {
        x: 0, // Reset to original position
        duration: 0.5,
        ease: "power1.inOut",
      });
    });
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center items-center h-full w-full rounded-[36px] relative group z-10 bg-[#214ADE]"
    >
      <Link
        to="/stack"
        className="absolute inset-0 flex justify-center items-center"
      >
        <div
          className="absolute inset-0 z-0 rounded-[36px] overflow-hidden"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, rgba(0,0,0,0) 1px), radial-gradient(circle, rgba(255,255,255,0.2) 1px, rgba(0,0,0,0) 1px)`,
            backgroundSize: "16px 16px",
            backgroundPosition: "0 0, 8px 8px",
            maskImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
            WebkitMaskImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
          }}
        ></div>
        <h3 className="absolute top-6 left-6 text-white text-lg font-medium mb-1">
          My Stack
        </h3>
        <ul className="flex flex-row justify-center items-center -space-x-2">
          {stackData.Stack.map((item, index) => {
            let zIndexClass = "";

            if (index === 2) {
              zIndexClass = "z-30"; // Middle div
            } else if (index === 1 || index === 3) {
              zIndexClass = "z-20"; // Second and fourth divs
            } else {
              zIndexClass = "z-10"; // First and fifth divs
            }
            return (
              <li key={index} className="text-white text-sm ">
                <img
                  ref={(el) => (stackRefs.current[index] = el)}
                  src={item.icon}
                  alt=""
                  className={`h-20 w-20 rounded-[30px] bg-white p-3 object-cover shadow-md inline-block  ${zIndexClass}`}
                />{" "}
                {/* Accessing title or any other property you need */}
              </li>
            );
          })}
        </ul>
        <ArrowButton />
      </Link>
    </div>
  );
};

export default StackColumn;
