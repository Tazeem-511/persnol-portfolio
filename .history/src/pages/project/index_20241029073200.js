import Link from "next/link";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="container">
      <div className="project-head"></div>
      <div className="projects-container">
        <div className="projects">
          <Link href="/" >
            <div className="first-project"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
