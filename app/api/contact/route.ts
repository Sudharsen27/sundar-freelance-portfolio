import { NextResponse } from "next/server";
import { createSmtpTransporter, getSmtpConfig } from "@/lib/smtp";

export const runtime = "nodejs";
export const maxDuration = 30;

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  website?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const SMTP_NOT_CONFIGURED_MESSAGE =
  "Email is not configured yet. Please use WhatsApp or email sundarlingam272000@gmail.com directly.";

export async function POST(request: Request) {
  try {
    const {
      name = "",
      email = "",
      service = "",
      budget = "",
      timeline = "",
      message = "",
      website = "",
    } = (await request.json()) as ContactPayload;

    if (website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !service || !budget || !timeline || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email." },
        { status: 400 }
      );
    }

    const smtp = getSmtpConfig();
    if (!smtp) {
      console.error("[contact] SMTP environment variables are not configured.");
      return NextResponse.json(
        { success: false, message: SMTP_NOT_CONFIGURED_MESSAGE },
        { status: 503 }
      );
    }

    const transporter = createSmtpTransporter(smtp);

    await transporter.sendMail({
      from: `Sundar Portfolio <${smtp.from}>`,
      to: smtp.to,
      replyTo: email,
      subject: `New Portfolio Lead: ${name}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Service needed: ${service}\n` +
        `Budget range: ${budget}\n` +
        `Timeline: ${timeline}\n\n` +
        `Message:\n${message}\n`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5">
          <h2 style="margin:0 0 12px">New Portfolio Lead</h2>
          <p style="margin:0 0 6px"><b>Name:</b> ${String(name)}</p>
          <p style="margin:0 0 6px"><b>Email:</b> ${String(email)}</p>
          <p style="margin:0 0 6px"><b>Service needed:</b> ${String(service)}</p>
          <p style="margin:0 0 6px"><b>Budget range:</b> ${String(budget)}</p>
          <p style="margin:0 0 12px"><b>Timeline:</b> ${String(timeline)}</p>
          <p style="margin:0"><b>Message:</b></p>
          <pre style="white-space:pre-wrap;margin:8px 0 0;padding:12px;background:#f6f7f9;border-radius:8px">${String(
            message
          )}</pre>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `Sundar Lingam <${smtp.from}>`,
      to: email,
      subject: "Thank you — your inquiry has been received",
      text:
        `Hi ${name},\n\n` +
        `Thank you for reaching out. Your message has been received, and I will respond with a detailed reply within 24 hours.\n\n` +
        `Inquiry summary:\n` +
        `- Service needed: ${service}\n` +
        `- Budget range: ${budget}\n` +
        `- Timeline: ${timeline}\n\n` +
        `— Sundar\n`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <p style="margin:0 0 12px">Hi ${String(name)},</p>
          <p style="margin:0 0 12px">
            Thank you for reaching out. Your message has been received, and I will respond with a
            detailed reply within <b>24 hours</b>.
          </p>
          <p style="margin:0 0 12px">
            Inquiry summary:
            <br />- <b>Service needed:</b> ${String(service)}
            <br />- <b>Budget range:</b> ${String(budget)}
            <br />- <b>Timeline:</b> ${String(timeline)}
          </p>
          <p style="margin:0">— Sundar</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    console.error("[contact] Failed to send email:", err);
    const message =
      err instanceof Error && err.message.includes("Missing env")
        ? SMTP_NOT_CONFIGURED_MESSAGE
        : "Could not send email right now. Please try WhatsApp or email directly.";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
