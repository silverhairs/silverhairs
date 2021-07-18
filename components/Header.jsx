import Link from "next/link";

export default function Header() {
  return (
    <div className="container">
      <h3 className="subtitle">
        <Link href="/"> Boris Kayi</Link>
      </h3>
      <ul className="navs">
        <li>
          <a
            href="https://github.com/silverhairs"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
