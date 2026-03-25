"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReveal } from "@/components/useReveal";
import { SKILLS } from "@/components/data";
import Image from "next/image";
import { useState } from "react";

const categories = ["frontend", "library", "env"];
export default function Skills() {
  const topRef = useReveal<HTMLDivElement>();
  const rowRef = useReveal<HTMLDivElement>(100);
  const headRef = useReveal<HTMLDivElement>();
  const [active, setActive] = useState("frontend");

  return (
    <section id="skills" style={{ padding: "96px 52px" }}>
      <div className="inner">
        <div className="title_wrap_b">
          <h2 ref={headRef}>SKILLS.</h2>
          <p>아래의 기술을 사용할 수 있습니다.</p>
        </div>
        <div className="skill_area">
          <ul className="skill_ul">
            <li>
              <button className={active === "frontend" ? "on" : ""} onClick={() => setActive("frontend")}>
                프론트엔드
              </button>
            </li>
            <li>
              <button className={active === "library" ? "on" : ""} onClick={() => setActive("library")}>
                라이브러리
              </button>
            </li>
            <li>
              <button className={active === "env" ? "on" : ""} onClick={() => setActive("env")}>
                환경 및 배포
              </button>
            </li>
          </ul>
          <div className="skill_badges">
            <div className={`skills ${active === "frontend" ? "active" : "blur"}`}>
              <Image src="/logo/html5.svg" alt="html5" fill />
            </div>
            <div className={`skills ${active === "frontend" ? "active" : "blur"}`}>
              <Image src="/logo/css3.svg" alt="css3" fill />
            </div>
            <div className={`skills ${active === "frontend" ? "active" : "blur"}`}>
              <Image src="/logo/js.svg" alt="js" fill />
            </div>
            <div className={`skills ${active === "frontend" ? "active" : "blur"}`}>
              <Image src="/logo/ts.svg" alt="ts" fill />
            </div>
            <div className={`skills ${active === "library" ? "active" : "blur"}`}>
              <Image src="/logo/sass.svg" alt="sass" fill />
            </div>
            <div className={`skills ${active === "library" ? "active" : "blur"}`}>
              <Image src="/logo/bootstrap.svg" alt="bootstrap" fill />
            </div>
            <div className={`skills ${active === "library" ? "active" : "blur"}`}>
              <Image src="/logo/tailwind.svg" alt="tailwind" fill />
            </div>
            <div className={`skills ${active === "library" ? "active" : "blur"}`}>
              <Image src="/logo/styled.svg" alt="styled" fill />
            </div>
            <div className={`skills ${active === "frontend" ? "active" : "blur"}`}>
              <Image src="/logo/react.svg" alt="react" fill />
            </div>
            <div className={`skills ${active === "frontend" ? "active" : "blur"}`}>
              <Image src="/logo/next.svg" alt="next" fill />
            </div>
            <div className={`skills ${active === "env" ? "active" : "blur"}`}>
              <Image src="/logo/github.svg" alt="github" fill />
            </div>
            <div className={`skills ${active === "env" ? "active" : "blur"}`}>
              <Image src="/logo/lab.svg" alt="lab" fill />
            </div>
          </div>
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
