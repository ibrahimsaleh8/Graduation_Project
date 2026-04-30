import AIChatBot from "@/app/(Dashboard)/_components/AIChatBot";
const suggestedPrompit = [
  "How can I improve my profile?",
  "What skills should I add?",
  "Analyze my CV",
  "Suggest improvements for my resume",
  "Find jobs that match my skills",
  "Show me remote jobs",
];

export default function AiChatForEmployee() {
  return <AIChatBot suggestedPrompit={suggestedPrompit} />;
}
