import AIChatBot from "@/app/(Dashboard)/_components/AIChatBot";
const suggestedPrompit = [
  "Analyze our company profile",
  "How can we attract better candidates?",
  "Review our job postings",
  "Suggest improvements for this job description",
  "Find candidates that match this role",
  "Show hiring insights and trends",
];
export default function AiChatForCompany() {
  return <AIChatBot suggestedPrompit={suggestedPrompit} />;
}
