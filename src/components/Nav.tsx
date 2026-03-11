"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about",    label: "About" },
  { href: "#skills",   label: "Skills" },
  { href: "#career",   label: "Career" },
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
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "22px 52px",
        transition: "background .5s",
        background: solid ? "rgba(14,13,11,.95)" : "transparent",
        backdropFilter: solid ? "blur(16px)" : undefined,
        borderBottom: solid ? "1px solid var(--rule)" : "none",
      }}
    >
      <Link
        href="#"
        style={{
          fontFamily: "var(--font-cormorant)", fontSize: 22,
          fontWeight: 700, fontStyle: "italic",
          color: "var(--butter)", textDecoration: "none", letterSpacing: ".04em",
        }}
      >
        Y.N
      </Link>

      <ul style={{ display: "flex", alignItems: "center", gap: 40, listStyle: "none" }}>
        {links.map(l => (
          <li key={l.href}>
            <Link
              href={l.href}
              style={{
                fontFamily: "var(--font-syne-mono)", fontSize: 10,
                letterSpacing: ".2em", textTransform: "uppercase",
                color: "rgba(245,240,228,.3)", textDecoration: "none",
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
              fontFamily: "var(--font-syne-mono)", fontSize: 10,
              letterSpacing: ".2em", textTransform: "uppercase",
              color: "var(--ink)", background: "var(--butter)",
              padding: "10px 22px", textDecoration: "none",
            }}
          >
            Hire Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
