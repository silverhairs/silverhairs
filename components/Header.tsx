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
          <Link href="/silverbook">The Silverbook</Link>
        </li>
        <li>
          <Link href="/experiments">Experiments</Link>
        </li>
      </ul>
    </div>
  );
}
