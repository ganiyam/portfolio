"use client";
import { useReveal } from "@/components/useReveal";
import { SKILLS } from "@/components/data";

export default function Skills() {
  const topRef  = useReveal<HTMLDivElement>();
  const rowRef  = useReveal<HTMLDivElement>(100);

  return (
    <section
      id="skills"
      style={{
        padding: "96px 0 96px 52px",
        borderBottom: "1px solid var(--rule)",
        overflow: "hidden", background: "var(--ash)",
      }}
    >
      <div
        ref={topRef}
        className="rv"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingRight: 52, marginBottom: 52 }}
      >
        <div>
          <div style={{
            fontFamily: "var(--font-syne-mono)", fontSize: 9,
            letterSpacing: ".35em", textTransform: "uppercase",
            color: "var(--butter)", marginBottom: 12,
          }}>02 — Skills</div>
          <h2 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(44px,6vw,80px)",
            fontWeight: 600, lineHeight: .9, letterSpacing: "-.03em",
          }}>
            Tech <em style={{ fontStyle: "italic", color: "var(--butter)" }}>Stack.</em>
          </h2>
        </div>
        <span style={{
          fontFamily: "var(--font-syne-mono)", fontSize: 9,
          letterSpacing: ".25em", textTransform: "uppercase",
          color: "rgba(245,240,228,.18)",
        }}>3 Areas · 22+ Tools</span>
      </div>

      <div ref={rowRef} className="rv" style={{ display: "flex", gap: 2 }}>
        {SKILLS.map(skill => (
          <SkillCard key={skill.n} {...skill} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ n, title, tags }: { n: string; title: string; tags: string[] }) {
  return (
    <div
      className="sk-card"
      style={{
        flexShrink: 0, width: 310,
        background: "rgba(245,240,228,.03)",
        border: "1px solid var(--rule)",
        padding: "40px 34px",
        position: "relative", overflow: "hidden",
        cursor: "default",
        transition: "background .3s, border-color .3s, transform .4s cubic-bezier(.34,1.56,.64,1)",
      }}
      onMouseMove={e => {
        const c = e.currentTarget;
        const r = c.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width  - .5) * 14;
        const y = ((e.clientY - r.top)  / r.height - .5) * -14;
        c.style.transform = `translateY(-8px) rotateY(${x}deg) rotateX(${y}deg)`;
        c.style.transition = "transform .08s";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.transition = "transform .55s cubic-bezier(.34,1.56,.64,1)";
      }}
    >
      <div style={{
        fontFamily: "var(--font-cormorant)", fontSize: 80,
        fontWeight: 700, fontStyle: "italic",
        color: "rgba(240,208,96,.05)", lineHeight: 1, marginBottom: 2,
      }}>{n}</div>
      <div style={{
        fontFamily: "var(--font-syne-mono)", fontSize: 10,
        letterSpacing: ".25em", textTransform: "uppercase",
        color: "var(--butter)", marginBottom: 28,
      }}>{title}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {tags.map(tag => (
          <span key={tag} style={{
            fontFamily: "var(--font-syne-mono)", fontSize: 9,
            letterSpacing: ".1em", padding: "5px 11px",
            border: "1px solid var(--rule)",
            color: "rgba(245,240,228,.3)",
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
