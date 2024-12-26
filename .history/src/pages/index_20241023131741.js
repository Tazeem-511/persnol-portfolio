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
          </ul>
        </div>
      </nav>
    </div>
  );
}
