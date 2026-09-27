import { ImageResponse } from "next/og";

export const alt = "Mohamed Eddahby, full-stack developer. Explore projects at eddahby.tech.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#FAF7F2",
          color: "#111111",
          padding: "70px 76px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ position: "absolute", right: -110, top: -140, width: 520, height: 520, borderRadius: 999, background: "rgba(180,83,9,0.12)" }} />
        <div style={{ position: "absolute", right: 105, bottom: 65, width: 260, height: 260, display: "flex", transform: "rotate(12deg)", background: "#11151A", boxShadow: "28px 34px 0 rgba(180,83,9,0.18)" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 30, border: "1px solid rgba(255,255,255,0.18)", color: "white" }}>
            <span style={{ fontSize: 15, letterSpacing: 4, color: "#D59B05" }}>BUILD · DESIGN · SHIP</span>
            <span style={{ fontSize: 42, lineHeight: 1.05 }}>Products<br />with intent.</span>
            <span style={{ fontSize: 15, color: "rgba(255,255,255,0.6)" }}>eddahby.tech</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 88, height: 54, borderRadius: 18, background: "#111111", color: "white", fontSize: 27 }}>MED</div>
            <span style={{ fontFamily: "Arial, sans-serif", fontSize: 17, letterSpacing: 5, color: "#475569" }}>FULL-STACK DEVELOPER</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 78, lineHeight: 0.98, letterSpacing: -4 }}>Mohamed<br />Eddahby</span>
            <span style={{ marginTop: 26, fontFamily: "Arial, sans-serif", fontSize: 24, lineHeight: 1.45, color: "#475569" }}>Full-stack products, thoughtful interfaces,<br />and practical software engineering.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 34, fontFamily: "Arial, sans-serif", fontSize: 16, letterSpacing: 2, color: "#B45309" }}>
            <span>NEXT.JS</span><span>REACT</span><span>TYPESCRIPT</span>
            <span style={{ padding: "11px 14px", borderRadius: 6, background: "#D59B05", color: "#111111", fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>EXPLORE PROJECTS</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
