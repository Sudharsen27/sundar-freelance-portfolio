import { BRAND, getEmailBaseUrl, getLogoUrl } from "./constants";
import { escapeHtml } from "./escape";

type EmailShellOptions = {
  title: string;
  preheader?: string;
  body: string;
};

export function emailShell({ title, preheader, body }: EmailShellOptions): string {
  const safeTitle = escapeHtml(title);
  const preheaderHtml = preheader
    ? `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#f8fafc;opacity:0;">${escapeHtml(preheader)}</div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
  <title>${safeTitle}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    @media only screen and (max-width: 620px) {
      .email-container { width: 100% !important; }
      .stack { display: block !important; width: 100% !important; }
      .px-mobile { padding-left: 20px !important; padding-right: 20px !important; }
      .btn-full { display: block !important; width: 100% !important; box-sizing: border-box !important; text-align: center !important; }
      .btn-gap { padding-bottom: 12px !important; }
    }
    a:hover { opacity: 0.92 !important; }
    .btn-primary:hover { background-color: #4f46e5 !important; }
    .btn-secondary:hover { background-color: #0891b2 !important; }
  </style>
</head>
<body style="margin:0;padding:0;width:100%;background-color:#f1f5f9;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  ${preheaderHtml}
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1f5f9;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" class="email-container" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;margin:0 auto;">
          ${body}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function emailLogoHeader(): string {
  const logoUrl = escapeHtml(getLogoUrl());
  const brand = escapeHtml(BRAND.name);
  const tagline = escapeHtml(BRAND.tagline);

  return `<tr>
    <td class="px-mobile" style="padding:32px 32px 24px;background-color:#ffffff;border-radius:16px 16px 0 0;border:1px solid #e2e8f0;border-bottom:none;text-align:center;">
      <a href="${escapeHtml(getEmailBaseUrl())}" target="_blank" style="text-decoration:none;">
        <img src="${logoUrl}" alt="${brand}" width="168" style="display:block;margin:0 auto 12px;border:0;outline:none;text-decoration:none;max-width:168px;height:auto;" />
      </a>
      <p style="margin:0;font-size:20px;line-height:1.3;font-weight:700;color:#0f172a;letter-spacing:-0.02em;">${brand}</p>
      <p style="margin:8px 0 0;font-size:13px;line-height:1.5;color:#64748b;">${tagline}</p>
    </td>
  </tr>`;
}

export function emailAccentBar(): string {
  return `<tr>
    <td style="height:4px;font-size:0;line-height:0;padding:0;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td width="50%" style="height:4px;background-color:${BRAND.primary};font-size:0;line-height:0;">&nbsp;</td>
          <td width="50%" style="height:4px;background-color:${BRAND.secondary};font-size:0;line-height:0;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>`;
}

export function emailFooter(options?: { admin?: boolean }): string {
  const site = escapeHtml(BRAND.siteUrl.replace(/\/$/, ""));
  const email = escapeHtml(BRAND.email);
  const brand = escapeHtml(BRAND.name);
  const tagline = escapeHtml(BRAND.tagline);

  if (options?.admin) {
    return `<tr>
      <td class="px-mobile" style="padding:24px 32px 32px;background-color:#ffffff;border-radius:0 0 16px 16px;border:1px solid #e2e8f0;border-top:none;text-align:center;">
        <p style="margin:0;font-size:12px;line-height:1.6;color:#94a3b8;">
          Received automatically from<br />
          <a href="${site}" target="_blank" style="color:${BRAND.primary};text-decoration:none;font-weight:600;">${site}</a>
        </p>
      </td>
    </tr>`;
  }

  return `<tr>
    <td class="px-mobile" style="padding:28px 32px 32px;background-color:#ffffff;border-radius:0 0 16px 16px;border:1px solid #e2e8f0;border-top:none;text-align:center;">
      <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#0f172a;">${brand}</p>
      <p style="margin:0 0 16px;font-size:13px;line-height:1.5;color:#64748b;">${tagline}</p>
      <p style="margin:0 0 6px;font-size:13px;line-height:1.6;">
        <a href="${site}" target="_blank" style="color:${BRAND.primary};text-decoration:none;font-weight:500;">🌐 ${site}</a>
      </p>
      <p style="margin:0;font-size:13px;line-height:1.6;">
        <a href="mailto:${email}" style="color:${BRAND.primary};text-decoration:none;font-weight:500;">📧 ${email}</a>
      </p>
    </td>
  </tr>`;
}

export function summaryRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td style="width:36%;vertical-align:top;font-size:13px;line-height:1.5;color:#64748b;font-weight:600;">${escapeHtml(label)}</td>
          <td style="vertical-align:top;font-size:14px;line-height:1.5;color:#0f172a;font-weight:500;">${escapeHtml(value)}</td>
        </tr>
      </table>
    </td>
  </tr>`;
}

export function cardWrapper(title: string, innerRows: string): string {
  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 24px;background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
    <tr>
      <td style="padding:16px 20px;background-color:#ffffff;border-bottom:1px solid #e2e8f0;">
        <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.primary};">${escapeHtml(title)}</p>
      </td>
    </tr>
    <tr>
      <td style="padding:4px 20px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          ${innerRows}
        </table>
      </td>
    </tr>
  </table>`;
}

export function ctaButton(
  href: string,
  label: string,
  variant: "primary" | "secondary",
  className = ""
): string {
  const isPrimary = variant === "primary";
  const bg = isPrimary ? BRAND.primary : BRAND.secondary;
  const classAttr = `btn-${variant}${className ? ` ${className}` : ""}`;

  return `<a href="${escapeHtml(href)}" target="_blank" class="${classAttr}" style="display:inline-block;padding:14px 28px;background-color:${bg};color:#ffffff;font-size:14px;font-weight:600;line-height:1;text-decoration:none;border-radius:10px;mso-padding-alt:0;text-align:center;">
    <!--[if mso]><i style="letter-spacing:28px;mso-font-width:-100%;mso-text-raise:30pt">&nbsp;</i><![endif]-->
    <span style="mso-text-raise:15pt;">${escapeHtml(label)}</span>
    <!--[if mso]><i style="letter-spacing:28px;mso-font-width:-100%">&nbsp;</i><![endif]-->
  </a>`;
}
