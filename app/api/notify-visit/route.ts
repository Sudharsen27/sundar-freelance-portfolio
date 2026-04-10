import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

type VisitBody = {
  referrer?: string;
  language?: string;
  userAgent?: string;
  page?: string;
  pathname?: string;
  screen?: string;
  visitorId?: string;
  trafficCategory?: string;
  deviceCategory?: string;
  timezone?: string;
  /** Honeypot — must be empty */
  company?: string;
};

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

async function resolveLocation(
  ip: string,
  vercelCity: string,
  vercelRegion: string,
  vercelCountry: string
): Promise<string> {
  const fromVercel = [vercelCity, vercelRegion, vercelCountry]
    .filter(Boolean)
    .join(", ");
  if (fromVercel) return fromVercel;

  if (
    ip &&
    ip !== "unknown" &&
    process.env.ENABLE_IP_API_GEO === "true" &&
    !ip.startsWith("127.") &&
    !ip.startsWith("192.168.")
  ) {
    try {
      const res = await fetch(
        `http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,city,regionName,country`,
        { cache: "no-store" }
      );
      const data = (await res.json()) as {
        status?: string;
        city?: string;
        regionName?: string;
        country?: string;
      };
      if (data.status === "success") {
        return [data.city, data.regionName, data.country]
          .filter(Boolean)
          .join(", ");
      }
    } catch {
      /* ignore */
    }
  }

  return "Unknown (deploy on Vercel or set ENABLE_IP_API_GEO=true for IP lookup)";
}

function parseBrowser(userAgent: string): string {
  if (!userAgent) return "Unknown";
  const ua = userAgent;
  let browser = "Unknown browser";
  if (ua.includes("Chrome") && !ua.includes("Edg")) browser = "Chrome";
  else if (ua.includes("Firefox")) browser = "Firefox";
  else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari";
  else if (ua.includes("Edg")) browser = "Edge";
  let os = "";
  if (ua.includes("Windows")) os = "Windows";
  else if (ua.includes("Mac OS")) os = "macOS";
  else if (ua.includes("Linux")) os = "Linux";
  else if (ua.includes("Android")) os = "Android";
  else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";
  return os ? `${browser} on ${os}` : browser;
}

function shortVisitorLabel(id: string | undefined): string {
  if (!id || id === "unknown") return "—";
  const clean = id.replace(/[^a-zA-Z0-9-]/g, "");
  return clean.length > 12 ? `${clean.slice(0, 8)}…` : clean;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  if (process.env.ENABLE_VISIT_NOTIFICATIONS !== "true") {
    return new NextResponse(null, { status: 204 });
  }

  let body: VisitBody = {};
  try {
    body = (await request.json()) as VisitBody;
  } catch {
    body = {};
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";

  const vercelCity = h.get("x-vercel-ip-city") || "";
  const vercelRegion = h.get("x-vercel-ip-country-region") || "";
  const vercelCountry = h.get("x-vercel-ip-country") || "";

  const location = await resolveLocation(
    ip,
    vercelCity,
    vercelRegion,
    vercelCountry
  );

  const userAgent = body.userAgent || h.get("user-agent") || "";
  const referrer = body.referrer || h.get("referer") || "(direct / none)";
  const language =
    body.language || h.get("accept-language")?.split(",")[0]?.trim() || "";
  const page = body.page || "";
  const pathname = body.pathname || "";
  const screen = body.screen || "";
  const visitorId = body.visitorId || "";
  const trafficCategory = body.trafficCategory || "—";
  const deviceCategory = body.deviceCategory || "—";
  const timezone = body.timezone || "";
  const timeUtc = new Date().toISOString();

  const host = requiredEnv("SMTP_HOST");
  const port = Number(requiredEnv("SMTP_PORT"));
  const user = requiredEnv("SMTP_USER");
  const pass = requiredEnv("SMTP_PASS");
  const to = requiredEnv("CONTACT_TO_EMAIL");
  const from = process.env.CONTACT_FROM_EMAIL || user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const visitorShort = shortVisitorLabel(visitorId);
  const e = escapeHtml;

  const text =
    `Portfolio visit\n\n` +
    `You cannot see a real name here—only an anonymous browser ID (same ID = same browser/device over time).\n\n` +
    `Time (UTC): ${timeUtc}\n` +
    `Anonymous visitor ID: ${visitorId || "—"}\n` +
    `Traffic type: ${trafficCategory}\n` +
    `Device type: ${deviceCategory}\n` +
    `Location (approx.): ${location}\n` +
    `Page: ${page || pathname || "—"}\n` +
    `Referrer (raw): ${referrer}\n` +
    `Browser / OS: ${parseBrowser(userAgent)}\n` +
    `Language: ${language || "—"}\n` +
    (timezone ? `Timezone (client): ${timezone}\n` : "") +
    (screen ? `Screen: ${screen}\n` : "") +
    `\nFull User-Agent:\n${userAgent}\n`;

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
      <h2 style="margin:0 0 16px">🔔 Portfolio visit</h2>
      <p style="margin:0 0 16px;font-size:13px;color:#444">
        <b>Not a named person.</b> Browsers do not send someone&apos;s name. You get
        <b>category</b> (how they arrived, device type), <b>rough location</b>, and a
        <b>stable anonymous ID</b> for that browser so you can spot repeat interest.
      </p>
      <h3 style="margin:16px 0 8px;font-size:14px;color:#444">Visitor (anonymous)</h3>
      <p style="margin:4px 0"><b>Browser visitor ID:</b> ${e(visitorId || "—")}</p>
      <p style="margin:4px 0;font-size:12px;color:#666">Short label: ${e(visitorShort)}</p>
      <h3 style="margin:16px 0 8px;font-size:14px;color:#444">Categories</h3>
      <p style="margin:4px 0"><b>Traffic type:</b> ${e(trafficCategory)}</p>
      <p style="margin:4px 0"><b>Device type:</b> ${e(deviceCategory)}</p>
      <h3 style="margin:16px 0 8px;font-size:14px;color:#444">When &amp; where</h3>
      <p style="margin:4px 0"><b>Time (UTC):</b> ${e(timeUtc)}</p>
      <p style="margin:4px 0"><b>Location (approx.):</b> ${e(location)}</p>
      ${timezone ? `<p style="margin:4px 0"><b>Timezone (their device):</b> ${e(timezone)}</p>` : ""}
      <h3 style="margin:16px 0 8px;font-size:14px;color:#444">Page</h3>
      <p style="margin:4px 0"><b>URL:</b> ${e(page || pathname || "—")}</p>
      <p style="margin:4px 0"><b>Referrer (raw):</b> ${e(referrer)}</p>
      <h3 style="margin:16px 0 8px;font-size:14px;color:#444">Device &amp; language</h3>
      <p style="margin:4px 0"><b>Browser / OS:</b> ${e(parseBrowser(userAgent))}</p>
      <p style="margin:4px 0"><b>Language:</b> ${e(language || "—")}</p>
      ${screen ? `<p style="margin:4px 0"><b>Screen:</b> ${e(screen)}</p>` : ""}
    </div>
  `;

  const subjectTraffic = trafficCategory.split("(")[0]?.trim() || trafficCategory;
  const subject = `🔔 Visit · ${deviceCategory} · ${subjectTraffic}`;

  try {
    await transporter.sendMail({
      from: `Portfolio visits <${from}>`,
      to,
      subject: subject.slice(0, 200),
      text,
      html,
    });
  } catch (err) {
    console.error("notify-visit mail error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
