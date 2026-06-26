import { BRAND } from "./constants";
import { escapeHtml } from "./escape";
import {
  cardWrapper,
  emailAccentBar,
  emailFooter,
  emailLogoHeader,
  emailShell,
  summaryRow,
} from "./layout";

export type AdminNotificationData = {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  timeline: string;
  referral: string;
  description: string;
};

export const ADMIN_NOTIFICATION_SUBJECT = "🔥 New Portfolio Lead Received";

export function buildAdminNotificationHtml(data: AdminNotificationData): string {
  const clientRows =
    summaryRow("Name", data.name) +
    summaryRow("Email", data.email) +
    (data.company?.trim() ? summaryRow("Company", data.company.trim()) : "");

  const projectRows =
    summaryRow("Service", data.service) +
    summaryRow("Budget", data.budget) +
    summaryRow("Timeline", data.timeline) +
    summaryRow("Lead Source", data.referral);

  const safeDescription = escapeHtml(data.description).replace(/\n/g, "<br />");

  const body = `
    ${emailLogoHeader()}
    ${emailAccentBar()}
    <tr>
      <td class="px-mobile" style="padding:28px 32px 8px;background-color:#ffffff;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND.secondary};">New Lead</p>
        <h1 style="margin:0;font-size:26px;line-height:1.25;font-weight:700;color:#0f172a;letter-spacing:-0.03em;">New Project Lead</h1>
        <p style="margin:12px 0 0;font-size:14px;line-height:1.6;color:#64748b;">
          A new inquiry just arrived from your portfolio contact form.
        </p>
      </td>
    </tr>
    <tr>
      <td class="px-mobile" style="padding:24px 32px;background-color:#ffffff;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        ${cardWrapper("Client Information", clientRows)}
        ${cardWrapper("Project Information", projectRows)}
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0;background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="padding:16px 20px;background-color:#ffffff;border-bottom:1px solid #e2e8f0;">
              <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.primary};">Project Description</p>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 20px;">
              <div style="padding:16px 18px;background-color:#ffffff;border-left:4px solid ${BRAND.secondary};border-radius:8px;font-size:14px;line-height:1.75;color:#334155;">
                ${safeDescription}
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td class="px-mobile" style="padding:8px 32px 24px;background-color:#ffffff;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;text-align:center;">
        <a href="mailto:${escapeHtml(data.email)}?subject=${encodeURIComponent(`Re: Your project inquiry — ${BRAND.name}`)}" style="display:inline-block;padding:12px 24px;background-color:${BRAND.primary};color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:10px;">
          Reply to ${escapeHtml(data.name.split(/\s+/)[0] || data.name)}
        </a>
      </td>
    </tr>
    ${emailFooter({ admin: true })}
  `;

  return emailShell({
    title: ADMIN_NOTIFICATION_SUBJECT,
    preheader: `New lead from ${data.name} — ${data.service}`,
    body,
  });
}

export function buildAdminNotificationText(data: AdminNotificationData): string {
  const companyLine = data.company?.trim() ? `Company: ${data.company.trim()}\n` : "";

  return `NEW PROJECT LEAD

CLIENT INFORMATION
Name: ${data.name}
Email: ${data.email}
${companyLine}
PROJECT INFORMATION
Service: ${data.service}
Budget: ${data.budget}
Timeline: ${data.timeline}
Lead Source: ${data.referral}

PROJECT DESCRIPTION
${data.description}

—
Received automatically from ${BRAND.siteUrl.replace(/\/$/, "")}
`;
}
