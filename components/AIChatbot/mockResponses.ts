const responses: Record<string, string> = {
  services:
    "Sundar Digital provides digital solutions including website development, software solutions, AI and automation, and cloud-related services. I can help you explore the services that may fit your business needs.",

  projects:
    "Sundar Digital has developed a range of digital solutions and projects. I can help you explore the projects and case studies available on the website.",

  website:
    "Yes. Sundar Digital can help with professional website development. Tell me a little about your business and what you want the website to achieve.",

  software:
    "Sundar Digital can help businesses with custom software solutions based on their requirements. Tell me what process or problem you want the software to solve.",

  crm:
    "Sundar Digital can discuss CRM solutions based on your business requirements. Tell me how you currently manage leads, customers, sales, or follow-ups.",

  restaurant:
    "Sundar Digital has a Restaurant ERP solution focused on restaurant business operations. I can help you explore the Restaurant ERP case study and its capabilities.",

  aws:
    "Sundar Digital provides AWS, cloud, and DevOps-related services. Tell me what you are looking to deploy, migrate, automate, or manage.",

  contact:
    "You can contact Sundar Digital through the contact options available on the website. I can also help you decide what information to include in your project enquiry.",

  pricing:
    "Project pricing depends on the requirements, features, integrations, complexity, and timeline. Tell me what you want to build and I can help you prepare the right project enquiry.",

  fallback:
    "Thanks for your question. I can currently help with Sundar Digital's services, projects, software solutions, cloud services, Restaurant ERP, and project enquiries.",
};

function normalizeMessage(message: string): string {
  return message.toLowerCase().trim();
}

export function getMockResponse(message: string): string {
  const text = normalizeMessage(message);

  // 1. AWS / Cloud / DevOps
  // Check this BEFORE "services" because questions such as
  // "Do you provide AWS and DevOps services?" contain "services".
  if (
    text.includes("aws") ||
    text.includes("devops") ||
    text.includes("cloud") ||
    text.includes("deployment") ||
    text.includes("migration") ||
    text.includes("infrastructure")
  ) {
    return responses.aws;
  }

  // 2. Restaurant ERP
  if (
    text.includes("restaurant erp") ||
    text.includes("restaurant") ||
    text.includes("erp")
  ) {
    return responses.restaurant;
  }

  // 3. CRM
  if (
    text.includes("crm") ||
    text.includes("customer relationship") ||
    text.includes("manage leads") ||
    text.includes("sales pipeline") ||
    text.includes("customer management")
  ) {
    return responses.crm;
  }

  // 4. Website development
  if (
    text.includes("website") ||
    text.includes("web site") ||
    text.includes("web development") ||
    text.includes("web design") ||
    text.includes("landing page")
  ) {
    return responses.website;
  }

  // 5. Custom software
  if (
    text.includes("custom software") ||
    text.includes("software development") ||
    text.includes("software") ||
    text.includes("application") ||
    text.includes("app development")
  ) {
    return responses.software;
  }

  // 6. Projects / Portfolio
  if (
    text.includes("project") ||
    text.includes("projects") ||
    text.includes("portfolio") ||
    text.includes("case study") ||
    text.includes("case studies")
  ) {
    return responses.projects;
  }

  // 7. Pricing
  if (
    text.includes("price") ||
    text.includes("pricing") ||
    text.includes("cost") ||
    text.includes("budget") ||
    text.includes("how much") ||
    text.includes("quote") ||
    text.includes("estimate")
  ) {
    return responses.pricing;
  }

  // 8. Contact
  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("reach you") ||
    text.includes("get in touch") ||
    text.includes("how can i contact")
  ) {
    return responses.contact;
  }

  // 9. General services
  // Keep this AFTER the more specific categories.
  if (
    text.includes("services") ||
    text.includes("service") ||
    text.includes("what do you offer") ||
    text.includes("what can you do")
  ) {
    return responses.services;
  }

  // 10. Fallback
  return responses.fallback;
}