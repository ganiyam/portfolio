"use client";
import { motion, useScroll, useTransform } from "framer-motion";

import { useReveal } from "@/components/useReveal";
import { STATS } from "@/components/data";

export default function Stats() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <motion.section
      style={{
        position: "absolute",
        left: 0,
        top: "100vh",
        width: "100%",
        height: "100vh",
        background: "black",
        // y: secondY,
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        ref={ref}
        className="rv"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "32px 44px",
              borderRight: i < STATS.length - 1 ? "1px solid var(--rule)" : "none",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 52,
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--butter)",
                lineHeight: 1,
              }}
            >
              {s.n}
            </span>
            <span
              style={{
                fontFamily: "var(--font-syne-mono)",
                fontSize: 9,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "rgba(245,240,228,.22)",
              }}
            >
              {s.l}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
