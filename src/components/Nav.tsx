"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#edu", label: "EDU" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="header_nav">
      <Link href="#" className="header_logo">
        PRORTFOLIO
      </Link>

      <ul className="header_nav_list">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
        {/* <li>
          <Link
            href="mailto:your@email.com"
            style={{
              fontFamily: "var(--font-syne-mono)",
              fontSize: 10,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--ink)",
              background: "var(--butter)",
              padding: "10px 22px",
              textDecoration: "none",
            }}
          >
            Hire Me
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
