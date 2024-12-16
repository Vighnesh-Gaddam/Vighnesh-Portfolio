import ArrowButton from "../components/ArrowButton"; // Import the reusable component
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion } from "framer-motion";

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
    <div className="h-full flex gap-3">
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-3 h-full relative">
        {/* My Projects - Project content in the center */}
        <div
          className="flex justify-center items-center flex-1 h-[65%] rounded-[36px] relative z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80.28%)",
          }}
        >

          {/* slider content */}
          <div className="absolute top-0 left-0 w-full h-full ">
            {/* Three vertical carousels running side by side */}
            <div className="flex w-full h-full border border-white">
              
              <div className="w-1/3 border border-white">
                <Slider {...settings}>
                  <div className="slide border border-white">
                    <img
                      src="/background.jpg"
                      alt="Image 1"
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="/beautiful-shining-stars-night-sky.jpg"
                      alt="Image 2"
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="/Enhance-framer.png"
                      alt="Image 3"
                      className="h-full object-cover"
                    />
                  </div>
                </Slider>
              </div>

              <div className="w-1/3 border border-white">
                <Slider
                  {...settings}
                  className="opposite-slider h-full"
                  rtl={true} // Reverse the direction
                  autoplaySpeed={0} // Adjust speed if needed
                >
                  <div className="slide">
                    <img
                      src="/background.jpg"
                      alt="Image 1"
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="/beautiful-shining-stars-night-sky.jpg"
                      alt="Image 2"
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="/Enhance-framer.png"
                      alt="Image 3"
                      className="h-full object-cover"
                    />
                  </div>
                </Slider>
              </div>

              <div className="w-1/3 border border-white">
                <Slider {...settings}>
                  <div className="slide">
                    <img
                      src="/background.jpg"
                      alt="Image 1"
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="/beautiful-shining-stars-night-sky.jpg"
                      alt="Image 2"
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="/Enhance-framer.png"
                      alt="Image 3"
                      className="h-full object-cover"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>


          {/* Project Content - This content stays on top of the slider */}
          <h2 className="text-xl font-semibold mb-2 z-10 relative text-white">
            My Projects
          </h2>
          <ArrowButton />
        </div>

        {/* Left-Bottom Section */}
        <div className="flex gap-3 h-[35%]">
          {/* Contact */}
          <div className="flex justify-center items-center w-[54%] bg-yellow-400 rounded-[36px] relative group z-10 overflow-hidden">

      {/* Button Text */}
      <h3 className="text-lg font-medium text-black z-10">Contact</h3>
    </div>

          {/* Journey */}
          <div className="flex justify-center items-center flex-1 bg-zinc-800 rounded-[36px] relative group z-10">
            <h3 className="text-lg font-medium mb-1">Journey</h3>
            <ArrowButton />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col flex-1 gap-3">
        {/* Stack */}
        <div className="flex justify-center items-center h-2/5 bg-zinc-800 rounded-[36px] relative group z-10">
          <h3>Stack</h3>
          <ArrowButton />
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
  );
};

export default Home;
