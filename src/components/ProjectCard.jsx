/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import ArrowButton from "./ArrowButton";

const ProjectCard = ({ project }) => {

  return (
    <Link
      to={`/my-project/${encodeURIComponent(project.title)}`}
      className="relative flex gap-3 bg-neutral-800 rounded-[32px] p-3 cursor-pointer"
    >
      <div className="relative rounded-3xl overflow-hidden flex">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover rounded-xl h-28 w-28"
        />
      </div>
      <div className="mt-4 text-white gap-2 flex flex-col">
        <h3 className="text-xl">{project.title}</h3>
        <p className="text-gray-400 text-xs">
          {project.startDate} - {project.endDate ? project.endDate : "Ongoing"}
        </p>
        <p className="text-gray-500 text-xs">
          {project.description.substring(0, 50)}...
        </p>
      </div>
      <ArrowButton />
    </Link>
  );
};

export default ProjectCard;
