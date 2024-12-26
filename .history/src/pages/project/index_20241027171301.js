import React from "react";

const ProjectPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Project Title</h1>
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="md:w-1/2">
          <img
            src="/path/to/your/image.jpg" // Replace with your image path
            alt="Project Screenshot"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
          <p className="text-lg text-justify mb-4">
            This project is a web application built using modern technologies.
            It allows users to ...
          </p>
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <ul className="list-disc ml-5">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
          <div className="mt-6">
            <a
              href="https://link-to-your-project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              View Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
