"use client";
import { useReveal } from "@/components/useReveal";
import { CAREER } from "@/components/data";

export default function Career() {
  const headRef = useReveal<HTMLHeadingElement>();

  return (
    <section id="career" style={{ padding: "96px 52px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{
        fontFamily: "var(--font-syne-mono)", fontSize: 9,
        letterSpacing: ".35em", textTransform: "uppercase",
        color: "var(--butter)", marginBottom: 16,
      }}>03 — Career</div>

      <h2
        ref={headRef}
        className="rv"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(44px,6vw,80px)",
          fontWeight: 600, lineHeight: .9, letterSpacing: "-.03em",
          marginBottom: 72,
        }}
      >
        Work <em style={{ fontStyle: "italic", color: "var(--butter)" }}>Experience.</em>
      </h2>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {CAREER.map((c, i) => (
          <CareerItem key={i} {...c} />
        ))}
      </div>
    </section>
  );
}

function CareerItem({ idx, period, type, company, role, desc }: {
  idx: string; period: string; type: string;
  company: string; role: string; desc: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="rv car"
      style={{
        display: "grid", gridTemplateColumns: "36px 190px 1fr",
        gap: 44, alignItems: "start",
        padding: "52px 0", borderTop: "1px solid var(--rule)",
        position: "relative", transition: "padding-left .3s",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = "20px"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = "0"; }}
    >
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "var(--butter)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform .35s" }} />
      <div style={{ fontFamily: "var(--font-cormorant)", fontSize: 15, fontStyle: "italic", color: "var(--butter)", paddingTop: 5 }}>{idx}</div>
      <div style={{ fontFamily: "var(--font-syne-mono)", fontSize: 10, letterSpacing: ".1em", color: "rgba(245,240,228,.22)", lineHeight: 2, paddingTop: 5 }}>
        {period}<br />{type}
      </div>
      <div>
        <div style={{ fontFamily: "var(--font-cormorant)", fontSize: 36, fontWeight: 600, lineHeight: 1.05, marginBottom: 6 }}>{company}</div>
        <div style={{ fontFamily: "var(--font-syne-mono)", fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,208,96,.38)", marginBottom: 16 }}>{role}</div>
        <p style={{ fontSize: 13, color: "rgba(245,240,228,.32)", lineHeight: 1.9 }}>{desc}</p>
      </div>
    </div>
  );
}
