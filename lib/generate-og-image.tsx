import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BRAND_NAME, JOB_TITLE, OG_ALT, PERSON_NAME } from "@/lib/brand";

export const OG_SIZE = { width: 1200, height: 630 };

export const OG_ALT_TEXT = OG_ALT;

async function loadGoogleFont(family: string, weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`,
    {
      headers: {
        // Older UA so Google serves TTF (Satori does not support WOFF2).
        "User-Agent":
          "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+",
      },
    }
  ).then((res) => res.text());

  const match = css.match(
    /src:\s*url\(([^)]+)\)\s*format\(['"](?:opentype|truetype)['"]\)/
  );
  if (!match?.[1]) {
    throw new Error(`Failed to load font: ${family} ${weight}`);
  }

  return fetch(match[1].replace(/['"]/g, "")).then((res) => res.arrayBuffer());
}

export async function generateOgImage() {
  const [poppinsBold, interMedium, photoBuffer] = await Promise.all([
    loadGoogleFont("Poppins", 700),
    loadGoogleFont("Inter", 500),
    readFile(join(process.cwd(), "public/sundar-hero.png")),
  ]);

  const photoSrc = `data:image/png;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#050816",
          overflow: "hidden",
        }}
      >
        {/* Purple glow — top left */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.45) 0%, transparent 70%)",
          }}
        />
        {/* Cyan glow — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -60,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.35) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(139,92,246,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,182,212,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #8B5CF6, #06B6D4, #8B5CF6)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "56px 64px",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Left — copy */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: 640,
              gap: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#06B6D4",
                }}
              />
              <span
                style={{
                  fontFamily: "Inter",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#06B6D4",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Available for new projects
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  fontFamily: "Poppins",
                  fontSize: 64,
                  fontWeight: 700,
                  color: "#F8FAFC",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                {PERSON_NAME}
              </span>
            </div>

            <div
              style={{
                width: 80,
                height: 4,
                borderRadius: 4,
                background: "linear-gradient(90deg, #8B5CF6, #06B6D4)",
                marginBottom: 20,
              }}
            />

            <span
              style={{
                fontFamily: "Inter",
                fontSize: 34,
                fontWeight: 500,
                color: "#94A3B8",
                lineHeight: 1.3,
                marginBottom: 16,
              }}
            >
              {JOB_TITLE}
            </span>

            <span
              style={{
                fontFamily: "Inter",
                fontSize: 22,
                fontWeight: 500,
                color: "#8B5CF6",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 32,
              }}
            >
              {BRAND_NAME}
            </span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  border: "1px solid rgba(6,182,212,0.35)",
                  background: "rgba(6,182,212,0.12)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "Inter",
                  fontSize: 26,
                  fontWeight: 500,
                  color: "#F8FAFC",
                  letterSpacing: "-0.01em",
                }}
              >
                www.sundardigital.in
              </span>
            </div>
          </div>

          {/* Right — profile */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              marginRight: 16,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 300,
                height: 300,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)",
              }}
            />
            <div
              style={{
                display: "flex",
                padding: 5,
                borderRadius: 28,
                background: "linear-gradient(135deg, #8B5CF6, #06B6D4)",
                boxShadow: "0 0 60px rgba(139,92,246,0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "#111827",
                  border: "2px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photoSrc}
                  alt=""
                  width={260}
                  height={320}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom brand strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 48,
            display: "flex",
            alignItems: "center",
            paddingLeft: 64,
            paddingRight: 64,
            background: "rgba(17,24,39,0.85)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span
            style={{
              fontFamily: "Inter",
              fontSize: 16,
              color: "#64748B",
              letterSpacing: "0.04em",
            }}
          >
            Modern Websites · Landing Pages · Web Apps
          </span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        {
          name: "Poppins",
          data: poppinsBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "Inter",
          data: interMedium,
          weight: 500,
          style: "normal",
        },
      ],
    }
  );
}
