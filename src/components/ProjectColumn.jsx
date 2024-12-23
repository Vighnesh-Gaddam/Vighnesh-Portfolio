import { Link } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";

const ProjectColumn = () => {
  return (
    <Link
      to="/my-project"
      className={`flex justify-center items-center h-full w-full rounded-[36px] relative z-20 overflow-hidden`}
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80.99%)",
      }}
    >
      <div className="h-full w-full absolute flex z-10">
        <div className="h-full w-1/3 flex flex-col downward justify-end">
          <img src="/background framer.png" alt="" className="h-1/3" />
          <img src="/background.jpg" alt="" className="h-1/3" />
          <img
            src="beautiful-shining-stars-night-sky.jpg"
            alt=""
            className="h-1/3"
          />
          <img src="/background framer.png" alt="" className="h-1/3" />
          <img src="/background.jpg" alt="" className="h-1/3" />
          <img
            src="beautiful-shining-stars-night-sky.jpg"
            alt=""
            className="h-1/3"
          />
        </div>

        <div className="h-full w-1/3 flex flex-col upward">
          <img src="/background framer.png" alt="" className="h-1/3" />
          <img src="/background.jpg" alt="" className="h-1/3" />
          <img
            src="beautiful-shining-stars-night-sky.jpg"
            alt=""
            className="h-1/3"
          />
          <img src="/background framer.png" alt="" className="h-1/3" />
          <img src="/background.jpg" alt="" className="h-1/3" />
          <img
            src="beautiful-shining-stars-night-sky.jpg"
            alt=""
            className="h-1/3"
          />
        </div>

        <div className="h-full w-1/3 flex flex-col downward justify-end">
          <img src="/background framer.png" alt="" className="h-1/3" />
          <img src="/background.jpg" alt="" className="h-1/3" />
          <img
            src="beautiful-shining-stars-night-sky.jpg"
            alt=""
            className="h-1/3"
          />
          <img src="/background framer.png" alt="" className="h-1/3" />
          <img src="/background.jpg" alt="" className="h-1/3" />
          <img
            src="beautiful-shining-stars-night-sky.jpg"
            alt=""
            className="h-1/3"
          />
        </div>
      </div>
      <h2 className="text-2xl font-medium tracking-widest z-10 absolute text-white">
        My Projects
      </h2>
      <ArrowButton />
    </Link>
  );
};

export default ProjectColumn;
