import { NextResponse } from "next/server";

import { createSmtpTransporter, getSmtpConfig } from "@/lib/smtp";

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

    // Validate required fields. Phone remains optional for the existing contact form.
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
      name,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      referral,
      description,
      leadIntent,
    };

    // Send notification to Sundar Digital
    await transporter.sendMail({
      from: `${BRAND.name} <${smtp.from}>`,
      to: smtp.to,
      replyTo: email.trim(),
      subject: ADMIN_NOTIFICATION_SUBJECT,
      text: buildAdminNotificationText(emailData),
      html: buildAdminNotificationHtml(emailData),
    });

    // Send confirmation to client
    await transporter.sendMail({
      from: `${BRAND.name} <${smtp.from}>`,
      to: email.trim(),
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
    console.error(
      "[contact] Failed to send email:",
      err
    );

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