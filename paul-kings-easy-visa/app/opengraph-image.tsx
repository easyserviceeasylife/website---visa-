import { ImageResponse } from "next/og";

export const alt = "Paul Kings Easy Visa — visa and legal services in Pattaya";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fffaf5 0%, #fff1e7 100%)",
          color: "#17130f",
          fontFamily: "Arial, sans-serif",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div style={{ color: "#d94800", fontSize: 30, fontWeight: 800, letterSpacing: 5 }}>
            ESTABLISHED 1992 · CENTRAL PATTAYA
          </div>
          <div style={{ marginTop: 35, fontSize: 88, fontWeight: 900, lineHeight: 1.02 }}>
            Paul Kings
          </div>
          <div
            style={{
              alignSelf: "flex-start",
              marginTop: 14,
              padding: "12px 26px 18px",
              color: "white",
              background: "#f75700",
              borderRadius: 18,
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            Easy Visa
          </div>
          <div style={{ marginTop: 38, color: "#665e57", fontSize: 34 }}>
            Personal visa support for the UK, Europe and Australia
          </div>
        </div>
      </div>
    ),
    size,
  );
}
