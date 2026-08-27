export type Role = "user" | "assistant";

export type LeadIntent =
  | "none"
  | "website_enquiry"
  | "software_enquiry"
  | "saas_enquiry"
  | "ai_enquiry"
  | "aws_enquiry"
  | "restaurant_erp_enquiry"
  | "general_enquiry";

export type Message = {
  id: string;
  role: Role;
  content: string;
  isLead?: boolean;
  leadIntent?: LeadIntent;
};  