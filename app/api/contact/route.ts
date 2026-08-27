import { NextResponse } from "next/server";

import { createSmtpTransporter, getSmtpConfig } from "@/lib/smtp";
import { contactRateLimit } from "@/lib/rate-limit";

import {
  ADMIN_NOTIFICATION_SUBJECT,
  BRAND,
  CLIENT_CONFIRMATION_SUBJECT,
  buildAdminNotificationHtml,
  buildAdminNotificationText,
  buildClientConfirmationHtml,
  buildClientConfirmationText,
} from "@/lib/emails";

export const runtime = "nodejs";

export const maxDuration = 30;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  referral?: string;
  description?: string;
  message?: string;
  website?: string;
  leadIntent?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const SMTP_NOT_CONFIGURED_MESSAGE =
  "Email is not configured yet. Please use WhatsApp or email hello.sundardigital@gmail.com directly.";

export async function POST(request: Request) {
  try {
    // Get visitor IP address
    const forwardedFor = request.headers.get("x-forwarded-for");

    const visitorIp =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Apply contact rate limiting
    if (contactRateLimit) {
      const { success, limit, remaining, reset } =
        await contactRateLimit.limit(visitorIp);

      if (!success) {
        const retryAfterSeconds = Math.max(
          1,
          Math.ceil((reset - Date.now()) / 1000)
        );

        return NextResponse.json(
          {
            success: false,
            message:
              "You've submitted too many enquiries. Please try again later.",
          },
          {
            status: 429,
            headers: {
              "X-RateLimit-Limit": String(limit),
              "X-RateLimit-Remaining": String(remaining),
              "X-RateLimit-Reset": String(reset),
              "Retry-After": String(retryAfterSeconds),
            },
          }
        );
      }
    }

    const body = (await request.json()) as ContactPayload;

    const {
      name = "",
      email = "",
      phone = "",
      company = "",
      service = "",
      budget = "",
      timeline = "",
      referral = "",
      description = body.message ?? "",
      website = "",
      leadIntent = "",
    } = body;

    // Honeypot protection
    if (website) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    }

    // Validate required fields.
    // Phone remains optional for the existing contact form.
    if (
      !name.trim() ||
      !email.trim() ||
      !service.trim() ||
      !budget.trim() ||
      !timeline.trim() ||
      !referral.trim() ||
      !description.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Validate email
    if (!isValidEmail(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email.",
        },
        { status: 400 }
      );
    }

    // Get SMTP configuration
    const smtp = getSmtpConfig();

    if (!smtp) {
      console.error(
        "[contact] SMTP environment variables are not configured."
      );

      return NextResponse.json(
        {
          success: false,
          message: SMTP_NOT_CONFIGURED_MESSAGE,
        },
        { status: 503 }
      );
    }

    const transporter = createSmtpTransporter(smtp);

    const emailData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company.trim(),
      service: service.trim(),
      budget: budget.trim(),
      timeline: timeline.trim(),
      referral: referral.trim(),
      description: description.trim(),
      leadIntent: leadIntent.trim(),
    };

    // Send notification to Sundar Digital
    await transporter.sendMail({
      from: `${BRAND.name} <${smtp.from}>`,
      to: smtp.to,
      replyTo: emailData.email,
      subject: ADMIN_NOTIFICATION_SUBJECT,
      text: buildAdminNotificationText(emailData),
      html: buildAdminNotificationHtml(emailData),
    });

    // Send confirmation to client
    await transporter.sendMail({
      from: `${BRAND.name} <${smtp.from}>`,
      to: emailData.email,
      subject: CLIENT_CONFIRMATION_SUBJECT,
      text: buildClientConfirmationText(emailData),
      html: buildClientConfirmationHtml(emailData),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[contact] Failed to send email:", err);

    const message =
      err instanceof Error &&
      err.message.includes("Missing env")
        ? SMTP_NOT_CONFIGURED_MESSAGE
        : "Could not send email right now. Please try WhatsApp or email directly.";

    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 }
    );
  }
}