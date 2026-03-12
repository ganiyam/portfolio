"use client";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll();

  // 처음엔 0, 두번째 섹션이 올라오기 시작하는 초반 구간에서 어두워짐
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.7]);

  return (
    <motion.section
      // id="hero"
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        background: "#111",
        zIndex: "-2",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "#000",
          opacity: overlayOpacity,
          pointerEvents: "none",
          zIndex: 4,
        }}
      />
      <div
        ref={ghostRef}
        style={{
          position: "absolute",
          top: 50,
          left: 20,
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
        Web Dev.
      </div>
      {/* diagonal right panel */}
      {/* <div
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
      </div> */}
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
        2026 · Portfolio
      </div>
      {/* 스크롤 아이콘 */}
      <div className="scroll_icon">
        <div
          style={{
            width: 1,
            height: 50,
            background: "rgba(240,208,96,.25)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-100%",
              left: 0,
              width: "100%",
              height: "100%",
              background: "var(--butter)",
              animation: "slideDown 1.6s ease-in-out infinite",
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
      <div className="hero-content">
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
            Fullstack Developer
            {/* · Seoul */}
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
            Open to work23
          </span>
        </div>

        {/* name */}
        <h1 className="hero-name">
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
      </div>
    </motion.section>
  );
}
