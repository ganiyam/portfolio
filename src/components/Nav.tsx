"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#career", label: "Career" },
  { href: "#projects", label: "Projects" },
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
      <Link
        href="#"
        className="header_logo"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontWeight: 700,
          fontStyle: "italic",
          color: "var(--butter)",
          textDecoration: "none",
          letterSpacing: ".04em",
        }}
      >
        PRORTFOLIO
      </Link>

      <ul style={{ display: "flex", alignItems: "center", gap: 40, listStyle: "none" }}>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              style={{
                fontFamily: "var(--font-syne-mono)",
                fontSize: 10,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "rgba(245,240,228,.3)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
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
        </li>
      </ul>
    </nav>
  );
}
