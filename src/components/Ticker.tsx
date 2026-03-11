import { TICKER_ITEMS } from "@/components/data";

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{ overflow: "hidden", borderBottom: "1px solid var(--rule)", background: "var(--smoke)" }}>
      <div style={{
        display: "flex", width: "max-content",
        animation: "run 28s linear infinite", padding: "13px 0",
      }}>
        {doubled.map((item, i) => (
          <span key={i}>
            <span style={{
              fontFamily: "var(--font-syne-mono)", fontSize: 10,
              letterSpacing: ".18em", textTransform: "uppercase",
              color: i % 2 === 0 ? "var(--butter)" : "rgba(245,240,228,.22)",
              padding: "0 22px", whiteSpace: "nowrap",
            }}>{item}</span>
            <span style={{ color: "rgba(240,208,96,.18)", padding: "0 8px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
