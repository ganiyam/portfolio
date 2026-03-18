"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReveal } from "@/components/useReveal";
import { SKILLS } from "@/components/data";

export default function Skills() {
  const topRef = useReveal<HTMLDivElement>();
  const rowRef = useReveal<HTMLDivElement>(100);

  return (
    <section id="skills" className="skill_sec">
      <div className="inner">
        <div className="cont_title_wrap">
          <h1 className="content_tit">Skills</h1>
        </div>
        <div className="skill_badges">
          <span>Node.js</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Bootstrap</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Sass</span>
          <span>jQuery</span>
          <span>javaScript</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>GitHub</span>
        </div>
      </div>
      {/* <div ref={topRef} className="rv" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingRight: 52, marginBottom: 52 }}>
        <div>
          <div
            style={{
              fontFamily: "var(--font-syne-mono)",
              fontSize: 9,
              letterSpacing: ".35em",
              textTransform: "uppercase",
              color: "var(--butter)",
              marginBottom: 12,
            }}
          >
            02 — Skills
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(44px,6vw,80px)",
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: "-.03em",
            }}
          >
            Tech <em style={{ fontStyle: "italic", color: "var(--butter)" }}>Stack.</em>
          </h2>
        </div>
        <span
          style={{
            fontFamily: "var(--font-syne-mono)",
            fontSize: 9,
            letterSpacing: ".25em",
            textTransform: "uppercase",
            color: "rgba(245,240,228,.18)",
          }}
        >
          3 Areas · 22+ Tools
        </span>
      </div> */}

      {/* <div ref={rowRef} className="rv" style={{ display: "flex", gap: 2 }}>
        {SKILLS.map((skill) => (
          <SkillCard key={skill.n} {...skill} />
        ))}
      </div> */}
    </section>
  );
}
