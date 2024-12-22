import { useParams } from "react-router-dom";

const IndieProject = () => {
  const { title } = useParams();

  return (
    <div>
      <h1>Project Details</h1>
      <p>Title: {decodeURIComponent(title)}</p>
      {/* Render additional project details here */}
    </div>
  );
};

export default IndieProject;
