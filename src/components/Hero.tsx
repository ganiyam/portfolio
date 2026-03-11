"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const ghostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (ghostRef.current) ghostRef.current.style.transform = `translateY(${window.scrollY * 0.09}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* ghost text */}
      <div
        ref={ghostRef}
        style={{
          position: "absolute",
          top: -40,
          right: -30,
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(200px,30vw,420px)",
          fontWeight: 700,
          fontStyle: "italic",
          color: "transparent",
          WebkitTextStroke: "1px rgba(240,208,96,.06)",
          lineHeight: 0.85,
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-.04em",
          whiteSpace: "nowrap",
        }}
      >
        Dev.
      </div>

      {/* diagonal right panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "42%",
          background: "var(--ash)",
          clipPath: "polygon(12% 0,100% 0,100% 100%,0 100%)",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -2,
            top: 0,
            bottom: 0,
            width: 2,
            background: "var(--butter)",
          }}
        />
      </div>

      {/* vertical year label */}
      <div
        style={{
          position: "absolute",
          right: 48,
          bottom: 88,
          fontFamily: "var(--font-syne-mono)",
          fontSize: 9,
          letterSpacing: ".4em",
          textTransform: "uppercase",
          color: "rgba(245,240,228,.18)",
          writingMode: "vertical-rl",
          zIndex: 3,
        }}
      >
        2024 · Portfolio
      </div>

      {/* scroll cue */}
      <div
        className="s-cue"
        style={{
          position: "absolute",
          left: 52,
          bottom: 88,
          display: "flex",
          alignItems: "center",
          gap: 14,
          zIndex: 3,
        }}
      >
        <div
          style={{
            width: 50,
            height: 1,
            background: "rgba(240,208,96,.25)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-100%",
              top: 0,
              width: "100%",
              height: "100%",
              background: "var(--butter)",
              animation: "slide 1.6s ease-in-out infinite",
            }}
          />
        </div>
        <span
          style={{
            fontFamily: "var(--font-syne-mono)",
            fontSize: 9,
            letterSpacing: ".28em",
            textTransform: "uppercase",
            color: "rgba(245,240,228,.3)",
          }}
        >
          Scroll
        </span>
      </div>

      {/* main content */}
      <div className="hero-content" style={{ position: "relative", zIndex: 3, padding: "0 52px 88px" }}>
        {/* eyebrow */}
        <div className="hero-eyebrow" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <span
            style={{
              fontFamily: "var(--font-syne-mono)",
              fontSize: 10,
              letterSpacing: ".25em",
              textTransform: "uppercase",
              color: "rgba(245,240,228,.3)",
            }}
          >
            Fullstack Developer · Seoul
          </span>
          <span
            style={{
              background: "var(--butter)",
              color: "var(--ink)",
              fontFamily: "var(--font-syne-mono)",
              fontSize: 9,
              letterSpacing: ".2em",
              fontWeight: 700,
              padding: "5px 14px",
              display: "flex",
              alignItems: "center",
              gap: 7,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--ink)",
                display: "inline-block",
                animation: "bdot 2s ease-in-out infinite",
              }}
            />
            Open to work
          </span>
        </div>

        {/* name */}
        <h1
          className="hero-name"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(72px,13vw,200px)",
            fontWeight: 700,
            lineHeight: 0.88,
            letterSpacing: "-.03em",
          }}
        >
          <span style={{ display: "block", color: "var(--paper)" }}>Jang</span>
          <span
            style={{
              display: "block",
              fontStyle: "italic",
              color: "var(--butter)",
              paddingLeft: "clamp(40px,5vw,90px)",
            }}
          >
            gaeun.
          </span>
        </h1>

        {/* sub */}
        <div className="hero-bottom" style={{ display: "flex", alignItems: "flex-end", gap: 56, marginTop: 48 }}>
          <p style={{ fontSize: 14, lineHeight: 1.9, color: "rgba(245,240,228,.38)", maxWidth: 320 }}>
            Frontend부터 Backend까지.
            <br />
            사용자 경험과 견고한 시스템을
            <br />
            동시에 설계하는 풀스택 개발자.
          </p>
          <HeroCta href="#projects" />
        </div>
      </div>
    </section>
  );
}

function HeroCta({ href }: { href: string }) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        fontFamily: "var(--font-syne-mono)",
        fontSize: 10,
        letterSpacing: ".22em",
        textTransform: "uppercase",
        color: "var(--butter)",
        textDecoration: "none",
        border: "1px solid rgba(240,208,96,.28)",
        padding: "14px 28px",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span style={{ position: "relative", zIndex: 1 }}>View Work</span>
      <span style={{ fontSize: 18, position: "relative", zIndex: 1 }}>↗</span>
    </Link>
  );
}
