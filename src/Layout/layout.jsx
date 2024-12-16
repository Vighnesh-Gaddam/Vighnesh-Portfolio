import React from "react";
import { Outlet } from "react-router-dom";
import Info from "../components/Info";

const Layout = () => {
  return (
    <div className="h-screen relative text-white mx-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url('/Enhance-framer.png')`, // Replace with the correct image path
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content Layer */}
      <div className="z-10 h-full flex p-12">
        {/* Left Section - Info (Fixed Position) */}
        <div className="h-full fixed">
          <Info />
        </div>

        {/* Right Section - Projects (Scrollable) */}
        <div className="w-3/4 ml-auto h-full overflow-y-auto z-20">
          {/* Main Content */}
          <div className="h-full text-white">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
