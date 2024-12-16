import Header from "../components/header";
import ProjectData from "../Data/Project.json"; // Use a different name to avoid confusion with the component name
import ProjectCard from "../components/ProjectCard"; // Import the new ProjectCard component

// const MyProject = () => {
//   return (
//     <div className="h-full flex gap-12 flex-col ">
//       <Header />
//       <h1 className="text-4xl font-semibold text-white">Projects</h1>

//        {/* left and right sections */}
//       <div className="h-full flex gap-3">
//         {/* Left section */}
//         <div className="flex flex-col gap-3 w-[70%]">
//           {ProjectData.projects.map((project) => (
//             <div key={project.id}>
//               <ProjectCard project={project} /> {/* Render each project using the ProjectCard component */}
//             </div>
//           ))}
//           <div className='h-72 bg-neutral-800 rounded-[32px] flex justify-center items-center'> contact </div>
//         </div>

//         {/* Right section */}
//         <div className="flex flex-col gap-3 w-4/12">
//           <div className= "relative flex gap-3 bg-neutral-800 rounded-[32px] p-3 h-72">hi</div>
//           <div className= "relative flex gap-3 bg-neutral-800 rounded-[32px] p-3 h-72">hello</div>
//           <div className= "relative flex gap-3 bg-neutral-800 rounded-[32px] p-3 h-72">namaste</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProject;

const MyProject = () => {
  return (
    <div className="min-h-screen flex flex-col gap-12">
      <Header />
      <h1 className="text-4xl font-semibold text-white">Projects</h1>

      <div className="flex gap-3 flex-col">

        <div className="flex gap-3 flex-1">
          {/* Left Section - Projects */}
          <div className="flex flex-col gap-3 w-auto flex-1 overflow-y-auto">
            {ProjectData.projects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Right Section - Sidebar */}
          <div className="flex flex-col gap-3 w-[30%]">
            <div className="relative flex gap-3 bg-neutral-800 rounded-[32px] p-3 h-72">
              hi
            </div>
            <div className="relative flex gap-3 bg-neutral-800 rounded-[32px] p-3 h-72">
              hello
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex gap-3">
          <div className="h-72 bg-neutral-800 rounded-[32px] flex justify-center items-center w-[70%]">
            contact
          </div>
          <div className="flex gap-3 bg-neutral-800 rounded-[32px] p-3 h-72 w-[30%]">
            namaste
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;