import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        <span>Bootstrap CSS</span>
        <span>Redux</span>
        <span>React</span>
        <span>Rails</span>
      </div>
    </div>
  );
}

export default ProjectItem;
