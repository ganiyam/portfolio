"use client";
import { useReveal } from "@/components/useReveal";
import Link from "next/link";

export default function About() {
  const leftRef  = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>(120);

  return (
    <section
      id="about"
      style={{
        display: "grid", gridTemplateColumns: "1fr 500px",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      {/* LEFT */}
      <div
        ref={leftRef}
        className="rv"
        style={{
          padding: "96px 60px", borderRight: "1px solid var(--rule)",
          background: "var(--smoke)", position: "relative",
          overflow: "hidden", display: "flex",
          flexDirection: "column", justifyContent: "space-between",
        }}
      >
        {/* ghost number */}
        <div style={{
          position: "absolute", bottom: -24, left: -14,
          fontFamily: "var(--font-cormorant)", fontSize: 260,
          fontWeight: 700, fontStyle: "italic",
          color: "rgba(240,208,96,.03)", lineHeight: 1, pointerEvents: "none",
        }}>01</div>

        <div>
          <SectionLabel label="01 — About" />
          <h2 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(52px,7vw,96px)",
            fontWeight: 600, lineHeight: .9, letterSpacing: "-.03em",
          }}>
            Who<br />
            I <em style={{ fontStyle: "italic", color: "var(--butter)" }}>Am.</em>
          </h2>
        </div>

        <div style={{ borderLeft: "2px solid var(--butter)", paddingLeft: 22 }}>
          <p style={{
            fontFamily: "var(--font-cormorant)", fontSize: 19,
            fontStyle: "italic", fontWeight: 300, lineHeight: 1.75,
            color: "rgba(245,240,228,.45)",
          }}>
            &ldquo;코드는 단순히 동작하는 것이 아니라, 읽히는 것이어야 한다.&rdquo;
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div
        ref={rightRef}
        className="rv2"
        style={{ padding: "96px 52px", display: "flex", flexDirection: "column", gap: 36 }}
      >
        <div>
          <p style={{ fontSize: 14, lineHeight: 2, color: "rgba(245,240,228,.4)", marginBottom: 18 }}>
            Frontend의 세밀한 사용자 경험부터 Backend의 안정적인 아키텍처까지, 제품의 처음과 끝을 모두 만드는 풀스택 개발자입니다.
          </p>
          <p style={{ fontSize: 14, lineHeight: 2, color: "rgba(245,240,228,.4)" }}>
            빠르게 변하는 기술 환경에서 새로운 것을 배우고, 팀과 함께 더 나은 제품을 만들어 나가는 것을 즐깁니다.
          </p>
        </div>

        <div>
          {[
            ["Name",     "홍길동 · Gil-dong Hong"],
            ["Role",     "Fullstack Developer"],
            ["Location", "Seoul, South Korea"],
            ["Email",    "your@email.com"],
            ["GitHub",   "github.com/yourname"],
            ["Status",   "● Open to Work", true],
          ].map(([k, v, acc]) => (
            <div key={k as string} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "14px 0", borderBottom: "1px solid var(--rule)",
            }}>
              <span style={{ fontFamily: "var(--font-syne-mono)", fontSize: 9, letterSpacing: ".25em", textTransform: "uppercase", color: "rgba(245,240,228,.22)" }}>{k}</span>
              <span style={{ fontSize: 13, color: acc ? "var(--butter)" : "rgba(245,240,228,.7)" }}>{v}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Btn href="mailto:your@email.com" solid>Contact Me</Btn>
          <Btn href="#">Download CV</Btn>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{
      fontFamily: "var(--font-syne-mono)", fontSize: 9,
      letterSpacing: ".35em", textTransform: "uppercase",
      color: "var(--butter)", display: "flex", alignItems: "center", gap: 12,
      marginBottom: 52,
    }}>
      {label}
      <div style={{ flex: 1, height: 1, background: "var(--rule)" }} />
    </div>
  );
}

function Btn({ href, children, solid }: { href: string; children: React.ReactNode; solid?: boolean }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--font-syne-mono)", fontSize: 10,
        letterSpacing: ".18em", textTransform: "uppercase",
        padding: "12px 24px", textDecoration: "none", display: "inline-block",
        background: solid ? "var(--butter)" : "transparent",
        color: solid ? "var(--ink)" : "rgba(245,240,228,.45)",
        border: solid ? "none" : "1px solid var(--rule)",
      }}
    >
      {children}
    </Link>
  );
}
