import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <nav className="flex items-center justify-between p-4 text-white NAVBAR">
        <div className="logo">
          <Link href="/">
            <Image
              src="/tazeem.png"
              alt="Description of the image"
              width={80}
              height={90}
              className="nav-img"
            />
          </Link>
        </div>
        <div className="nav-links">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>

            <li>
              <Link href="/blog">Blog</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <Link href="/contact">
            <button className="px-4 py-2 nav-btn">Contact Me</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
