import Link from "next/link";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="main-project-container">
      <div className="project-head">
        <h2 className="text-black">Projects</h2>
      </div>
      <div className="projects-container">
        <div className="projects">
          <Link href="/">
            <div className="first-project">
              <div class="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  class="w-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <defs></defs>
                  <g
                    style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 37.712 41.541 c -2.437 -10.14 2.919 -19.609 8.772 -25.137 c -6.221 11.54 -7.41 20.104 -3.461 33.177 l 2.29 -0.854 c -0.882 -2.464 -1.413 -4.873 -1.685 -7.241 c 8.23 -2.355 13.883 -7.209 15.231 -15.926 C 59.796 13.651 52.042 6.72 43.718 0.117 c 3.04 9.758 -11.581 17.964 -10.296 30.949 c 0.271 2.741 0.697 5.33 1.326 7.825"
                      style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(127,178,65); fill-rule: nonzero; opacity: 1;"
                      transform="matrix(1 0 0 1 0 0)"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M 34.069 30.999 c 0.917 -12.923 13.599 -21.098 9.649 -30.883 c 1.394 8.216 -9.771 12.38 -12.663 22.195 c -1.575 5.836 -1.151 11.452 3.693 16.579 C 34.119 36.396 33.937 33.751 34.069 30.999 z"
                      style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(113,156,64); fill-rule: nonzero; opacity: 1;"
                      transform="matrix(1 0 0 1 0 0)"
                      stroke-linecap="round"
                    ></path>
                    <polygon
                      points="68.77,61.09 70.46,47.61 43.69,47.61 19.54,47.61 21.23,61.09"
                      style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(160,126,99); fill-rule: nonzero; opacity: 1;"
                      transform="matrix(1 0 0 1 0 0)"
                    ></polygon>
                    <polyline
                      points="63.11,61.09 59.5,90 44.01,90 30.5,90 26.89,61.09"
                      style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(160,126,99); fill-rule: nonzero; opacity: 1;"
                      transform="matrix(1 0 0 1 0 0)"
                    ></polyline>
                    <polygon
                      points="62.61,65.09 63.11,61.09 26.89,61.09 27.39,65.09"
                      style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(145,107,77); fill-rule: nonzero; opacity: 1;"
                      transform="matrix(1 0 0 1 0 0)"
                    ></polygon>
                  </g>
                </svg>

                <p class="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
                  Calathea Orbifolia
                </p>
                <p class="blueberry font-semibold text-gray-600 text-xs">
                  One of Kind &amp; Unique Plants Collection Here at SMKY.
                </p>
                <div class="ordernow flex flex-row justify-between items-center w-full">
                  <p class="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
                    $21.00
                  </p>
                  <p class="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
                    Order Now
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
