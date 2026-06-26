import { BRAND, getEmailBaseUrl, getWhatsAppUrl } from "./constants";
import { escapeHtml } from "./escape";
import {
  cardWrapper,
  ctaButton,
  emailAccentBar,
  emailFooter,
  emailLogoHeader,
  emailShell,
  summaryRow,
} from "./layout";

export type ClientConfirmationData = {
  name: string;
  service: string;
  budget: string;
  timeline: string;
  company?: string;
};

export const CLIENT_CONFIRMATION_SUBJECT =
  "✅ We've received your project inquiry | Sundar Digital";

export function buildClientConfirmationHtml(data: ClientConfirmationData): string {
  const firstName = escapeHtml(data.name.trim().split(/\s+/)[0] || data.name);
  const summaryRows =
    summaryRow("Service", data.service) +
    summaryRow("Budget", data.budget) +
    summaryRow("Timeline", data.timeline) +
    (data.company?.trim() ? summaryRow("Company", data.company.trim()) : "");

  const whatsappHref = getWhatsAppUrl(
    `Hi Sundar, I just submitted a project inquiry and wanted to follow up.`
  );

  const body = `
    ${emailLogoHeader()}
    ${emailAccentBar()}
    <tr>
      <td class="px-mobile" style="padding:32px 32px 8px;background-color:#ffffff;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <h1 style="margin:0 0 16px;font-size:28px;line-height:1.25;font-weight:700;color:#0f172a;letter-spacing:-0.03em;">Thank You!</h1>
        <p style="margin:0 0 16px;font-size:16px;line-height:1.65;color:#334155;">Hi ${firstName},</p>
        <p style="margin:0;font-size:15px;line-height:1.7;color:#475569;">
          We've received your project inquiry and truly appreciate you reaching out to
          <strong style="color:#0f172a;">${escapeHtml(BRAND.name)}</strong>.
          Your message is in good hands — I'll review every detail personally and get back to you soon.
        </p>
      </td>
    </tr>
    <tr>
      <td class="px-mobile" style="padding:24px 32px;background-color:#ffffff;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        ${cardWrapper("Project Summary", summaryRows)}
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 8px;background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
          <tr>
            <td style="padding:16px 20px;background-color:#ffffff;border-bottom:1px solid #e2e8f0;border-radius:12px 12px 0 0;">
              <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.primary};">Next Steps</p>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 20px 20px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                ${nextStepRow(1, "I'll review your project.")}
                ${nextStepRow(2, "I'll contact you within 24 hours.")}
                ${nextStepRow(3, "We'll schedule a discussion.")}
                ${nextStepRow(4, "You'll receive a detailed proposal.", true)}
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td class="px-mobile" style="padding:8px 32px 32px;background-color:#ffffff;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;text-align:center;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:0 auto;">
          <tr>
            <td class="stack btn-gap" style="padding:0 8px 12px 0;">
              ${ctaButton(getEmailBaseUrl(), "Visit Website", "primary", "btn-full")}
            </td>
            <td class="stack" style="padding:0 0 12px 8px;">
              ${ctaButton(whatsappHref, "Chat on WhatsApp", "secondary", "btn-full")}
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0;font-size:12px;line-height:1.6;color:#94a3b8;">
          Have an urgent project? Reply to this email or message us on WhatsApp anytime.
        </p>
      </td>
    </tr>
    ${emailFooter()}
  `;

  return emailShell({
    title: CLIENT_CONFIRMATION_SUBJECT,
    preheader: `Thanks ${data.name.split(/\s+/)[0] || data.name}! Your inquiry was received. I'll respond within 24 hours.`,
    body,
  });
}

function nextStepRow(step: number, text: string, isLast = false): string {
  const border = isLast ? "" : "border-bottom:1px solid #e2e8f0;";
  return `<tr>
    <td style="padding:10px 0;${border}">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td width="32" valign="top" style="padding-top:1px;">
            <span style="display:inline-block;width:24px;height:24px;background-color:${BRAND.primary};color:#ffffff;font-size:12px;font-weight:700;line-height:24px;text-align:center;border-radius:999px;">${step}</span>
          </td>
          <td valign="top" style="font-size:14px;line-height:1.6;color:#334155;padding-left:4px;">${escapeHtml(text)}</td>
        </tr>
      </table>
    </td>
  </tr>`;
}

export function buildClientConfirmationText(data: ClientConfirmationData): string {
  const companyLine = data.company?.trim() ? `- Company: ${data.company.trim()}\n` : "";

  return `Thank You!

Hi ${data.name},

We've received your project inquiry and truly appreciate you reaching out to ${BRAND.name}.

PROJECT SUMMARY
- Service: ${data.service}
- Budget: ${data.budget}
- Timeline: ${data.timeline}
${companyLine}
NEXT STEPS
1. I'll review your project.
2. I'll contact you within 24 hours.
3. We'll schedule a discussion.
4. You'll receive a detailed proposal.

Visit Website: ${getEmailBaseUrl()}
Chat on WhatsApp: ${getWhatsAppUrl()}

—
${BRAND.name}
${BRAND.tagline}
${BRAND.siteUrl}
${BRAND.email}
`;
}
