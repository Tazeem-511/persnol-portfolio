import Link from "next/link";


export default function Home() {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        
        <div className="nav-links">
          <ul>
            <li>
              <Link href="/about">About</Link>
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
          <Button></Button>
        </div>
      </nav>
    </div>
  );
}
