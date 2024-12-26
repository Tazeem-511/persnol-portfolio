// navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-white NAVBAR">
      <div className="logo">
        <h1 className="text-xl font-bold logo-name">T</h1>
      </div>
      <div className="nav-links">
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-400">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/project" className="hover:text-gray-400">
              Project
            </Link>
          </li>
          <li>
            <Link href="/resume" className="hover:text-gray-400">
              Resume
            </Link>
          </li>
        </ul>
      </div>
      <div className="contact">
        <Link href="/contact">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Contact Me
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
