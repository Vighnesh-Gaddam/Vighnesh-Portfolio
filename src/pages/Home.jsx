import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";
import Header from "../components/header"; // Import Header here

const Home = () => {
  const settings = {
    dots: false, // Hide dots as you want smooth scrolling
    infinite: true, // Enable infinite scrolling
    slidesToShow: 1, // Show 1 slide at a time per carousel
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Continuous autoplay
    speed: 1000, // Transition speed (in ms)
    vertical: true, // Vertical scrolling
    verticalSwiping: true, // Enable swiping vertically
    arrows: false, // Disable arrows
    cssEase: "linear", // Smooth linear transition
    focusOnSelect: true, // Optional: focus on the selected slide
    pauseOnHover: false, // Disable pausing on hover
    innerHeight: "100%",
  };

  return (
    <div className="h-full flex flex-col gap-3">
      <Header />
      <div className="h-full flex gap-3">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-3 relative">
          {/* My Projects - Project content in the center */}
          <Link
            to="/my-project"
            className="flex justify-center items-center flex-1 h-[65%] rounded-[36px] relative z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80.28%)",
            }}
          >
            {/* Project Content - This content stays on top of the slider */}
            <h2 className="text-xl font-semibold mb-2 z-10 relative text-white">
              My Projects
            </h2>
            <ArrowButton />
          </Link>

          {/* Left-Bottom Section */}
          <div className="flex gap-3 h-[35%]">
            {/* Contact */}
            <div className="flex justify-center items-center w-[54%] bg-yellow-400 rounded-[36px] relative group z-10 overflow-hidden">
              <h3 className="text-lg font-medium text-black z-10">Contact</h3>
              <ArrowButton />
            </div>

            {/* Journey */}
            <div className="flex justify-center items-center flex-1 bg-zinc-800 rounded-[36px] relative group z-10">
              <h3 className="text-lg font-medium mb-1">Journey</h3>
              <ArrowButton />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Stack */}
          <div className="flex justify-start items-start h-2/5 rounded-[36px] relative group z-10 bg-[#214ADE]">
            <Link to="/stack" className="absolute inset-0">
              <div
                className="absolute inset-0 z-0 rounded-[36px] overflow-hidden"
                style={{
                  backgroundImage: `
                    radial-gradient(circle, rgba(255,255,255,0.2) 1px, rgba(0,0,0,0) 1px),
                    radial-gradient(circle, rgba(255,255,255,0.2) 1px, rgba(0,0,0,0) 1px)
                  `,
                  backgroundSize: "16px 16px", // Reduced spacing between dots
                  backgroundPosition: "0 0, 8px 8px",
                  maskImage: `
                    linear-gradient(to bottom right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
                  `,
                  WebkitMaskImage: `
                    linear-gradient(to bottom right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
                  `,
                }}
              ></div>

              <h3 className="z-10 text-white font-bold pt-6 pl-6">My Stack</h3>

              <ArrowButton />
            </Link>
          </div>

          {/* Certificates */}
          <div
            className="flex justify-center items-center h-3/5 rounded-[36px] relative group z-10"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80.28%), url('/background.jpg')`,
              backgroundSize: "cover", // Ensure the background covers the div
              backgroundPosition: "center",
              opacity: 1,
            }}
          >
            <h3 className="text-white z-10">Certificates</h3>
            <ArrowButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
