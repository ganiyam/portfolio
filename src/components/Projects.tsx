"use client";
import { useState } from "react";
import { useReveal } from "@/components/useReveal";
import { PROJECTS } from "@/components/data";

export default function Projects() {
  const headRef = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="projects" style={{ borderBottom: "1px solid var(--rule)" }}>
      <div
        ref={headRef}
        className="rv"
        style={{ padding: "80px 52px 40px", borderBottom: "1px solid var(--rule)" }}
      >
        <div style={{ fontFamily: "var(--font-syne-mono)", fontSize: 9, letterSpacing: ".35em", textTransform: "uppercase", color: "var(--butter)", marginBottom: 16 }}>04 — Projects</div>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(44px,6vw,80px)", fontWeight: 600, lineHeight: .9, letterSpacing: "-.03em" }}>
          Selected <em style={{ fontStyle: "italic", color: "var(--butter)" }}>Work.</em>
        </h2>
      </div>

      {PROJECTS.map((proj, i) => (
        <ProjectItem
          key={i}
          {...proj}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </section>
  );
}

function ProjectItem({
  num, name, desc, stack, detail, isOpen, onToggle,
}: {
  num: string; name: string; desc: string;
  stack: string[]; detail: string[];
  isOpen: boolean; onToggle: () => void;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="rv pj" style={{ borderBottom: "1px solid var(--rule)", overflow: "hidden" }}>
      <div
        onClick={onToggle}
        style={{
          display: "grid", gridTemplateColumns: "96px 1fr auto",
          gap: 40, alignItems: "center",
          padding: isOpen ? "40px 52px 40px 68px" : "40px 52px",
          cursor: "pointer",
          transition: "padding-left .3s, background .25s",
          background: isOpen ? "var(--ash)" : "transparent",
        }}
      >
        <div style={{
          fontFamily: "var(--font-cormorant)", fontSize: 56,
          fontWeight: 700, fontStyle: "italic",
          color: isOpen ? "rgba(240,208,96,.18)" : "rgba(245,240,228,.06)",
          lineHeight: 1, transition: "color .25s",
        }}>{num}</div>

        <div>
          <div style={{
            fontFamily: "var(--font-cormorant)", fontSize: 32,
            fontWeight: 600, lineHeight: 1.1, marginBottom: 7,
            color: isOpen ? "var(--butter)" : "var(--paper)",
            transition: "color .25s",
          }}>{name}</div>
          <p style={{ fontSize: 13, color: "rgba(245,240,228,.28)", lineHeight: 1.75, maxWidth: 520 }}>{desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
            {stack.map(s => (
              <span key={s} style={{
                fontFamily: "var(--font-syne-mono)", fontSize: 8,
                letterSpacing: ".14em", textTransform: "uppercase",
                padding: "4px 10px", border: "1px solid var(--rule)",
                color: "rgba(245,240,228,.28)",
              }}>{s}</span>
            ))}
          </div>
        </div>

        <span style={{
          fontSize: 26, color: isOpen ? "var(--butter)" : "rgba(245,240,228,.1)",
          transform: isOpen ? "rotate(45deg)" : "none",
          transition: "transform .4s cubic-bezier(.34,1.56,.64,1), color .25s",
          flexShrink: 0,
        }}>↗</span>
      </div>

      {/* accordion detail */}
      <div style={{
        maxHeight: isOpen ? 280 : 0,
        overflow: "hidden",
        transition: "max-height .55s cubic-bezier(.77,0,.18,1), padding .45s",
        padding: isOpen ? "30px 52px 30px 188px" : "0 52px 0 188px",
        background: isOpen ? "rgba(240,208,96,.04)" : "transparent",
        borderTop: isOpen ? "1px solid var(--rule)" : "none",
      }}>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
          {detail.map((d, i) => (
            <li key={i} style={{ fontSize: 13, color: "rgba(245,240,228,.42)", lineHeight: 1.75, display: "flex", gap: 16 }}>
              <span style={{ color: "var(--butter)", flexShrink: 0 }}>—</span>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
