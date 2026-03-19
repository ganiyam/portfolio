"use client";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
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
  // framer
  const name = "JANG GAEUN";
  const nameArr = name.split("");

  const firstExampleVariant: Variants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.18,
        staggerDirection: 1,
      },
    },
  };

  const firstExampleLetterVariant: Variants = {
    initial: { opacity: 0, y: "120%" },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        background: "#1b1b1d",
        zIndex: "-2",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="hero_sec"
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
      {/* <div
        ref={ghostRef}
        style={{
          position: "absolute",
          top: 160,
          left: 20,
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(200px,30vw,420px)",
          fontWeight: 700,
          fontStyle: "italic",
          color: "transparent",
          WebkitTextStroke: "1px rgba(249, 248, 241,.06)",
          lineHeight: 0.85,
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-.04em",
          whiteSpace: "nowrap",
        }}
      >
        Web Dev.
      </div> */}
      <div className="hero_sub_text">2026 · Portfolio</div>
      <div className="scroll_icon">
        <div className="scroll_back">
          <div className="scroll_bar" />
        </div>
        <span className="scroll_text">Scroll</span>
      </div>
      <div className="hero-content">
        <motion.h1 variants={firstExampleVariant} initial="initial" animate="animate" className="hero-name">
          {nameArr.map((letter, index) => (
            <motion.span key={index} variants={firstExampleLetterVariant} custom={1} style={{ display: "inline-block" }}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <h1 className="hero-name-sub fade-up">PORTFOLIO</h1>
      </div>
    </motion.section>
  );
}
