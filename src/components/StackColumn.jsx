import React from "react";
import { Link } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";
import stackData from "../Data/stack";  // Ensure you're importing stackData properly

const StackColumn = () => {
  return (
    <div className="flex justify-center items-center h-full w-full rounded-[36px] relative group z-10 bg-[#214ADE]">
      <Link to="/stack" className="absolute inset-0 flex justify-center items-center">
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
        <h3 className="absolute top-6 left-6 text-white text-lg font-medium mb-1">My Stack</h3>
        <ul className="flex flex-row justify-center items-center">
          {stackData.Stack.map((item, index) => (
            <li key={index} className="text-white text-sm">
              <img src={item.icon} alt="" className="h-16 w-16 rounded-3xl bg-white p-3 object-cover"/> {/* Accessing title or any other property you need */}
            </li>
          ))}
        </ul>
        <ArrowButton />
      </Link>
    </div>
  );
};

export default StackColumn;
