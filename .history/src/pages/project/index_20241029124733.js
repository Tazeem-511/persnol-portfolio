import Link from "next/link";
import React, { useState } from "react";

const ProjectPage = () => {
  const [view, setView] = useState("all");

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="main-project-container flex flex-col space-y-12 p-4 bg-black px-4">
      <div className="project-head">
        <h2 className="text-black text-2xl text-center">Projects</h2>
        <div className="project-btn flex gap-4 mt-4 justify-center">
          <button
            className={`bg-black text-white p-2 px-4 rounded-lg ${
              view === "major" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => handleViewChange("major")}
          >
            Major
          </button>
          <button
            className={`bg-black text-white p-2 px-4 rounded-lg ${
              view === "mini" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => handleViewChange("mini")}
          >
            Mini
          </button>
          <button
            className={`bg-black text-white p-2 px-4 rounded-lg ${
              view === "all" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => handleViewChange("all")}
          >
            All
          </button>
        </div>
      </div>
      <div className="projects-container flex justify-center ">
        <div
          className={`projects major flex flex-wrap gap-4 ${
            view === "major" || view === "all" ? "block" : "hidden"
          }`}
        >
          {/* Major Projects */}
          {[...Array(7)].map((_, index) => (
            <Link key={index} href="/">
              <div className="first-project">
                <div className="m-2 group p-40 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
                  <p className="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
                    Calathea Orbifolia
                  </p>
                  <p className="blueberry font-semibold text-gray-600 text-xs">
                    One of a Kind & Unique Plants Collection Here at SMKY.
                  </p>
                  <div className="ordernow flex flex-row justify-between items-center w-full">
                    <p className="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
                      $21.00
                    </p>
                    <p className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
                      Order Now
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          className={`projects mini flex flex-wrap gap-4 ${
            view === "mini" || view === "all" ? "block" : "hidden"
          }`}
        >
          {/* Mini Projects */}
          {[...Array(8)].map((_, index) => (
            <Link key={index} href="/">
              <div className="first-project">
                <div className="m-2 group p-40 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
                  <p className="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
                    Calathea Orbifolia
                  </p>
                  <p className="blueberry font-semibold text-gray-600 text-xs">
                    One of a Kind & Unique Plants Collection Here at SMKY.
                  </p>
                  <div className="ordernow flex flex-row justify-between items-center w-full">
                    <p className="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
                      $21.00
                    </p>
                    <p className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
                      Order Now
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
