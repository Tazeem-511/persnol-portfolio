// navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="flex items-center justify-between p-4 text-white NAVBAR">
        <div className="logo">
          <h1 className="text-xl font-bold logo-name">T</h1>
        </div>
        <div className="nav-links ">
          <ul className="flex space-x-4">
            <li>
              <Link href="/about"  >
                About
              </Link>
            </li>
            <li>
              <Link href="/" >
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" >
                Blog
              </Link>
            </li>
            <li>
              <Link href="/project" >
                Project
              </Link>
            </li>
            <li>
              <Link href="/resume" >
                Resume
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <Link href="/contact">
            <button className="bg-slate-950 text-white px-4 py-2 ">
              Contact Me
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
