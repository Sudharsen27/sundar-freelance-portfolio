import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

export async function POST(request) {
  try {
    const {
      name = "",
      email = "",
      message = "",
      website = "", // honeypot (should be empty)
    } = await request.json();

    if (website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message) {
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

    await transporter.sendMail({
      from: `Sundar Portfolio <${from}>`,
      to,
      replyTo: email,
      subject: `New Portfolio Lead: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5">
          <h2 style="margin:0 0 12px">New Portfolio Lead</h2>
          <p style="margin:0 0 6px"><b>Name:</b> ${String(name)}</p>
          <p style="margin:0 0 12px"><b>Email:</b> ${String(email)}</p>
          <p style="margin:0"><b>Message:</b></p>
          <pre style="white-space:pre-wrap;margin:8px 0 0;padding:12px;background:#f6f7f9;border-radius:8px">${String(
            message
          )}</pre>
        </div>
      `,
    });

    // Auto-reply to the client (acknowledgement)
    await transporter.sendMail({
      from: `Sundar Lingam <${from}>`,
      to: email,
      subject: "Thanks — I received your message",
      text:
        `Hi ${name},\n\n` +
        `Thanks for reaching out. I’ve received your message and I’ll reply within 24 hours.\n\n` +
        `— Sundar\n`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <p style="margin:0 0 12px">Hi ${String(name)},</p>
          <p style="margin:0 0 12px">
            Thanks for reaching out. I’ve received your message and I’ll reply within
            <b>24 hours</b>.
          </p>
          <p style="margin:0">— Sundar</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err?.message || "Failed to send message." },
      { status: 500 }
    );
  }
}

