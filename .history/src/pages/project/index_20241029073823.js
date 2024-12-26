import Link from "next/link";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="main-project-container">
      <div className="project-head">
        <h2 class >Projects</h2>
      </div>
      <div className="projects-container">
        <div className="projects">
          <Link href="/" >
            <div className="first-project">
              
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
