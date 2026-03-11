import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ padding: "96px 52px 52px", background: "var(--smoke)", position: "relative", overflow: "hidden" }}>
      {/* ghost initials */}
      <div
        style={{
          position: "absolute",
          bottom: -60,
          right: -20,
          fontFamily: "var(--font-cormorant)",
          fontSize: 340,
          fontWeight: 700,
          fontStyle: "italic",
          color: "rgba(240,208,96,.03)",
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        YN
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, marginBottom: 80, position: "relative", zIndex: 1 }}>
        {/* big name */}
        <div
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(52px,9vw,130px)",
            fontWeight: 700,
            fontStyle: "italic",
            color: "var(--paper)",
            lineHeight: 0.88,
            letterSpacing: "-.03em",
            opacity: 0.1,
          }}
        >
          Jang
          <br />
          gaeun
        </div>

        {/* contact */}
        <div style={{ paddingTop: 12 }}>
          <p style={{ fontSize: 14, color: "rgba(245,240,228,.32)", lineHeight: 1.9, marginBottom: 36 }}>
            새로운 기회나 협업에 열려 있습니다.
            <br />
            언제든지 연락해 주세요.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { href: "mailto:your@email.com", label: "your@email.com" },
              { href: "https://github.com/yourname", label: "github.com/yourname" },
              { href: "#", label: "Download Resume" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: "var(--font-syne-mono)",
                  fontSize: 11,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,228,.28)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ color: "var(--butter)" }}>→</span>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid var(--rule)",
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ fontFamily: "var(--font-syne-mono)", fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(245,240,228,.15)" }}>© 2024 YOUR NAME</span>
        <span style={{ fontFamily: "var(--font-syne-mono)", fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(245,240,228,.15)" }}>Designed &amp; Built with obsession</span>
      </div>
    </footer>
  );
}
