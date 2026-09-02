# Sundar Digital

**Official company website** for [Sundar Digital](https://sundardigital.in) — a software development and digital solutions practice focused on modern websites, web applications, business software, and cloud-enabled digital experiences.

This repository powers the production site at [sundardigital.in](https://sundardigital.in). It is built with Next.js (App Router), TypeScript, and Tailwind CSS, with production analytics, SEO, and enquiry workflows integrated.

---

## 🌐 Live Website

**https://sundardigital.in**

Repository: [github.com/Sudharsen27/sundar-freelance-portfolio](https://github.com/Sudharsen27/sundar-freelance-portfolio)

---

## 🏢 About Sundar Digital

Sundar Digital is the brand behind this website. The site presents the company's services, selected work, and a direct path for clients to enquire about new projects.

Content and positioning in the product reflect full-stack web development for brands, startups, and creators — including professional websites, landing pages, custom web applications, and AWS Cloud & DevOps services.

The site is maintained as a production marketing and lead-generation property, not a demo or tutorial project.

---

## ✨ Website Features

Features below are implemented in the current codebase:

### Marketing & content
- Responsive company homepage
- Hero section with primary calls to action
- About section
- Services showcase (web development offerings)
- AWS Cloud & DevOps services section
- Projects / portfolio section
- Dedicated Restaurant ERP case study page (`/projects/restaurant-erp`)
- Skills section
- Testimonials
- FAQ (within the contact experience)
- Footer and navigation with hash-based section routing

### Engagement & lead capture
- Contact / enquiry form with validation
- Floating WhatsApp contact button
- Contact API route with honeypot protection
- Admin notification email on new enquiries
- Client confirmation email after successful submission
- Optional visit notification emails (feature-flagged)

### SEO & discoverability
- Site-wide SEO metadata (title, description, robots, Open Graph, Twitter)
- Structured data (JSON-LD)
- Dynamic sitemap (`app/sitemap.ts`)
- Robots configuration (`app/robots.ts`)
- Open Graph image generation
- Twitter image generation
- Web app manifest
- Custom favicon and app icons (generated via build script)
- Canonical production URL support

### Analytics
- Consent-controlled Google Analytics 4
- Consent-controlled Microsoft Clarity
- Consent-controlled Vercel Analytics

### Motion & UI
- Framer Motion section reveals and interactions
- Lucide React icons
- Accessible skip-to-content link

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| Next.js (App Router) | Web application framework |
| React | UI development |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling |
| PostCSS | CSS processing |
| Framer Motion | Animations |
| Lucide React | Icons |
| Nodemailer | Email delivery over SMTP |
| Gmail SMTP | Outbound mail transport (configured via environment) |
| Google Analytics 4 | Website analytics |
| Microsoft Clarity | Session / behavior analytics |
| Vercel Analytics | Web analytics |
| Sharp | Icon and image processing in build tooling |
| Vercel | Production deployment |

---

## 🧩 Architecture

High-level application flow:

```text
Next.js App Router
        ↓
React page & section components
        ↓
Reusable UI components
        ↓
Next.js API routes
        ↓
SMTP / email services (Nodemailer)
```

Analytics instrumentation is mounted after the visitor grants optional analytics consent:

```text
Website
 ├── Google Analytics 4
 ├── Microsoft Clarity
 └── Vercel Analytics
```

The site shows a cookie preferences prompt on the first visit. Essential functionality remains available, while Google Analytics, Microsoft Clarity, Vercel Analytics, and optional visit notifications stay disabled until the visitor accepts Analytics. Preferences can be reopened from the footer.

**Key backend routes**

| Route | Role |
|-------|------|
| `POST /api/contact` | Validates enquiry payloads and sends admin + client emails |
| `POST /api/notify-visit` | Optional visit notifications (enabled via environment flags) |

Email templates and SMTP helpers live under `lib/emails/` and `lib/smtp.ts`.

---

## 📁 Project Structure

```text
app/
├── api/
│   ├── contact/          # Enquiry form handler
│   └── notify-visit/     # Optional visit notifications
├── projects/
│   └── restaurant-erp/   # Case study page
├── layout.tsx            # Root layout, fonts, analytics
├── page.tsx              # Homepage composition
├── globals.css
├── manifest.ts
├── robots.ts
├── sitemap.ts
├── opengraph-image.tsx
└── twitter-image.tsx

components/
├── About.tsx
├── Contact.tsx
├── ContactFaq.tsx
├── Services.tsx
├── Projects.tsx
├── Skills.tsx
├── Testimonials.tsx
├── Hero.tsx
├── Navbar.tsx
├── Footer.tsx
├── FloatingWhatsApp.tsx
├── GoogleAnalytics.tsx
├── MicrosoftClarity.tsx
├── GaRouteTracker.tsx
├── VisitNotifier.tsx
├── home/
│   └── AwsServices.tsx
├── case-studies/
│   ├── RestaurantErpCaseStudy.tsx
│   └── AwsArchitectureDiagram.tsx
└── ui/
    ├── SectionHeader.tsx
    ├── SectionReveal.tsx
    ├── CustomSelect.tsx
    └── FloatingOrbs.tsx

lib/
├── analytics.js
├── brand.ts
├── site.ts
├── social.ts
├── smtp.ts
├── services-data.ts
├── aws-services-data.ts
├── faq.ts
├── structured-data.ts
├── whatsapp.js
├── emails/
│   ├── admin-notification.ts
│   ├── client-confirmation.ts
│   └── layout.ts
└── case-studies/
    └── restaurant-erp.ts

public/
├── projects/
├── services/
├── brand assets & imagery
└── generated icons

scripts/
└── generate-icons.mjs    # Favicon / app icon generation (Sharp)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Setup

```bash
git clone https://github.com/Sudharsen27/sundar-freelance-portfolio.git
cd sundar-freelance-portfolio
npm install
cp .env.example .env.local
```

Fill in `.env.local` using the variables documented below, then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` for local development. On Vercel, configure the same keys under **Project → Settings → Environment Variables**, then redeploy.

| Variable | Required | Purpose |
|----------|----------|---------|
| `SMTP_HOST` | Yes (for contact email) | SMTP host (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | Yes (for contact email) | SMTP port (e.g. `465`) |
| `SMTP_USER` | Yes (for contact email) | SMTP username |
| `SMTP_PASS` | Yes (for contact email) | SMTP password / Gmail App Password |
| `CONTACT_TO_EMAIL` | Yes (for contact email) | Inbox for new leads |
| `CONTACT_FROM_EMAIL` | Recommended | From address for outbound mail |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site origin |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Recommended | WhatsApp deep-link number |
| `NEXT_PUBLIC_LINKEDIN_URL` | Optional | LinkedIn profile URL |
| `NEXT_PUBLIC_FIVERR_URL` | Optional | Fiverr profile URL |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Recommended | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_GA_DEBUG` | Optional | Enable GA debug logging (`true`) |
| `ENABLE_VISIT_NOTIFICATIONS` | Optional | Server flag for visit emails |
| `NEXT_PUBLIC_ENABLE_VISIT_NOTIFICATIONS` | Optional | Client flag for visit emails |

Do not commit `.env.local` or real credentials. Use a Gmail [App Password](https://myaccount.google.com/apppasswords) when using Gmail SMTP (no spaces in `SMTP_PASS`).

Microsoft Clarity is configured in application code with the project's client-side Clarity ID and does not require an additional environment variable.

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Generate icons, then create a production build |
| `npm run start` | Serve the production build |
| `npm run icons` | Regenerate favicon and app icons from `public/icon.svg` |
| `npm run lint` | Run the project lint script |

---

## ☁️ Deployment

Production is intended for **Vercel**:

1. Connect this GitHub repository to a Vercel project.
2. Add environment variables for Production (and Preview if needed).
3. Deploy. The build runs `npm run icons` then `next build`.
4. Confirm the contact form on the live domain after SMTP variables are set.

Canonical production origin used in code when `NEXT_PUBLIC_SITE_URL` is unset: `https://www.sundardigital.in`.

If the contact form responds that email is not configured, one or more SMTP-related variables are missing on that deployment.

---

## 📞 Contact

| Channel | Details |
|---------|---------|
| Website | [https://sundardigital.in](https://sundardigital.in) |
| Email | hello.sundardigital@gmail.com |
| GitHub | [Sudharsen27/sundar-freelance-portfolio](https://github.com/Sudharsen27/sundar-freelance-portfolio) |

---

© Sundar Digital. All rights reserved.