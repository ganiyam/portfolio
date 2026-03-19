"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReveal } from "@/components/useReveal";
import { SKILLS } from "@/components/data";
import Image from "next/image";

export default function Skills() {
  const topRef = useReveal<HTMLDivElement>();
  const rowRef = useReveal<HTMLDivElement>(100);

  return (
    <section id="skills" className="skill_sec">
      <div className="inner">
        <div className="cont_title_wrap">
          <h1 className="content_tit">Skills</h1>
        </div>
        <div className="skill_area">
          <p className="skill_tit">아래의 기술을 사용할 수 있습니다.</p>
          <ul className="skill_ul">
            <li>
              <button className="on">프론트엔드</button>
            </li>
            <li>
              <button>라이브러리</button>
            </li>
            <li>
              <button>환경 및 배포</button>
            </li>
          </ul>
          <div className="skill_badges">
            <div className="skills">
              <Image src="/logo/html5.svg" alt="html5" fill />
            </div>
            <div className="skills">
              <Image src="/logo/css3.svg" alt="css3" fill />
            </div>
            <div className="skills">
              <Image src="/logo/js.svg" alt="js" fill />
            </div>
            <div className="skills">
              <Image src="/logo/ts.svg" alt="ts" fill />
            </div>
            <div className="skills">
              <Image src="/logo/sass.svg" alt="sass" fill />
            </div>
            <div className="skills">
              <Image src="/logo/bootstrap.svg" alt="bootstrap" fill />
            </div>
            <div className="skills">
              <Image src="/logo/tailwind.svg" alt="tailwind" fill />
            </div>
            <div className="skills">
              <Image src="/logo/styled.svg" alt="styled" fill />
            </div>
            <div className="skills">
              <Image src="/logo/react.svg" alt="react" fill />
            </div>
            <div className="skills">
              <Image src="/logo/next.svg" alt="next" fill />
            </div>
            <div className="skills">
              <Image src="/logo/github.svg" alt="github" fill />
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
