export type ServiceItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    icon: "🌐",
    title: "Website Development",
    description:
      "Custom websites built from scratch with modern tech stacks, optimized performance, and scalable architecture for long-term growth.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    id: "responsive",
    icon: "📱",
    title: "Responsive Websites",
    description:
      "Pixel-perfect layouts that look stunning on every screen — mobile, tablet, and desktop — with smooth interactions throughout.",
    tags: ["Mobile-first", "Tailwind CSS", "Accessibility"],
  },
  {
    id: "portfolio",
    icon: "✨",
    title: "Portfolio Websites",
    description:
      "Stand-out personal and creative portfolios designed to showcase your work beautifully and attract the right opportunities.",
    tags: ["Personal Brand", "Animations", "SEO"],
  },
  {
    id: "landing",
    icon: "🚀",
    title: "Landing Pages",
    description:
      "High-converting landing pages crafted to capture attention, communicate value fast, and turn visitors into leads or customers.",
    tags: ["Conversion", "A/B Ready", "Fast Load"],
  },
  {
    id: "uiux",
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces with thoughtful user flows — blending aesthetics with usability for memorable digital experiences.",
    tags: ["Figma", "Wireframes", "Prototypes"],
  },
  {
    id: "business",
    icon: "💼",
    title: "Business Websites",
    description:
      "Professional business websites that establish credibility, communicate your services clearly, and generate real inquiries.",
    tags: ["Corporate", "CMS Ready", "Analytics"],
  },
];
