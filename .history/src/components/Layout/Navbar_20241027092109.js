// navbar.js
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="flex items-center justify-between p-4 text-white NAVBAR">
        <div className="logo">
          <Link href="/">
            <Image
              src="/tazeem.png"
              alt="pizza"
              width={30} // Set the appropriate width
              height={40} // Set the appropriate height
              className="card-img"
              style={{ objectFit: "cover" }} // Ensure the image maintains its aspect ratio
            />
          </Link>
        </div>
        <div className="nav-links ">
          <ul className="flex space-x-4">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <Link href="/contact">
            <button className="  px-4 py-2  nav-btn">Contact Me</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
