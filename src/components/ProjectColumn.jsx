// import React from "react";
// import ArrowButton from "./ArrowButton";
// import { Link } from "react-router-dom";

// const ProjectColumn = () => {
//   return (
//     <Link
//       to="/my-project"
//       className="flex justify-center items-center flex-1 h-[65%] rounded-[36px] relative z-10"
//       style={{
//         background:
//           "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80.28%)",
//       }}
//     >
//       {/* Project Content - This content stays on top of the slider */}
//       <h2 className="text-xl font-semibold mb-2 z-10 relative text-white">
//         My Projects
//       </h2>
//       <ArrowButton />
//     </Link>
//   );
// };

// export default ProjectColumn;


import { Link } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";

const ProjectColumn = () => {
  return (
    <Link
      to="/my-project"
      className={`flex justify-center items-center h-full w-full rounded-[36px] relative z-10 `}
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 80.28%)",
      }}
    >
      <h2 className="text-2xl font-medium tracking-widest z-10 relative text-white">
        My Projects
      </h2>
      <ArrowButton />
    </Link>
  );
};

export default ProjectColumn;