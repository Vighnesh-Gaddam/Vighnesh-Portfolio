import React from "react";
import { Outlet } from "react-router-dom";
import Info from "../components/Info";
import Header from "../components/header";

const Layout = () => {
  return (
    <div className="h-screen relative text-white mx-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url('/Enhance-framer.png')`, // Replace with the correct image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content Layer */}
      <div className="container relative z-10 h-full p-12 flex">
        {/* Left Section */}
        <div className="w-1/4">
          <div className="">
            <Info />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-3/4 flex flex-col gap-3 m-0 p-0">
          {/* Header */}
          <div className="">
            <Header />
          </div>
          {/* Main Content */}
          <div className="flex-grow p-0 m-0">
            <div className="text-base h-full p-0 m-0">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
