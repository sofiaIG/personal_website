import React from "react";
import ExperienceItems from "./ExperienceItems";

const Projects = ({ repositories }) => {
  const repositoriesItems = repositories.map((repository, index) => {
    return <ExperienceItems repository={repository} key={index} />;
  });

  return (
    <div id="projects">
      <h1>Projects</h1>
      <ul className="links">
        {repositoriesItems}
      </ul>
    </div>
  );
};

export default Projects;
