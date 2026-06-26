import { FAQ_ITEMS } from "@/lib/faq";

/** FAQPage schema — single source: `lib/faq.ts` (rendered in ContactFaq). */
export function buildFaqPageSchema(siteUrl: string) {
  return {
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    url: `${siteUrl}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
