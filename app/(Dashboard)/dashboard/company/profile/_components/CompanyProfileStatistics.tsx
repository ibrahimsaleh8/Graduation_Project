import CompanyHighlightCard from "./CompanyHighlightCard";
import {
  Location01Icon,
  Calendar03Icon,
  Briefcase01Icon,
  Rocket01Icon,
} from "@hugeicons/core-free-icons";

const companyHighlightsData = [
  {
    title: "Country",
    value: "Egypt",
    icon: Location01Icon,
    iconColor: "#3B82F6",
    iconBackgroundColor: "rgba(59, 130, 246, 0.1)",
  },
  {
    title: "Founded",
    value: "1998",
    icon: Calendar03Icon,
    iconColor: "#8B5CF6",
    iconBackgroundColor: "rgba(139, 92, 246, 0.1)",
  },
  {
    title: "Opened Jobs",
    value: "15",
    icon: Rocket01Icon,
    iconColor: "#10B981",
    iconBackgroundColor: "rgba(16, 185, 129, 0.1)",
  },
  {
    title: "Total Jobs",
    value: "150",
    icon: Briefcase01Icon,
    iconColor: "#374151",
    iconBackgroundColor: "rgba(55, 65, 81, 0.1)",
  },
];
export default function CompanyProfileStatistics() {
  return (
    <div className="w-full lg:max-w-lg bg-white border p-4 rounded-md space-y-4">
      <p className="text-xl font-medium">Highlights</p>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        {companyHighlightsData.map((highlight) => (
          <CompanyHighlightCard
            key={highlight.title}
            title={highlight.title}
            value={highlight.value}
            icon={highlight.icon}
            iconColor={highlight.iconColor}
            iconBackgroundColor={highlight.iconBackgroundColor}
          />
        ))}
      </div>
    </div>
  );
}
