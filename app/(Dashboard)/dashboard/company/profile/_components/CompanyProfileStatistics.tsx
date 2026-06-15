import CompanyHighlightCard from "./CompanyHighlightCard";
import {
  Location01Icon,
  Calendar03Icon,
  Briefcase01Icon,
  Rocket01Icon,
} from "@hugeicons/core-free-icons";
import { CompanyProfileHighlightsDataType } from "./ShowCompanyProfile";

type Props = {
  foundedYear: string | null;
  country: string | null;
  stats: CompanyProfileHighlightsDataType;
};
export default function CompanyProfileStatistics({
  country,
  foundedYear,
  stats,
}: Props) {
  const companyHighlightsData = [
    {
      title: "Country",
      value: country,
      icon: Location01Icon,
      iconColor: "#3B82F6",
      iconBackgroundColor: "rgba(59, 130, 246, 0.1)",
    },
    {
      title: "Founded",
      value: foundedYear,
      icon: Calendar03Icon,
      iconColor: "#8B5CF6",
      iconBackgroundColor: "rgba(139, 92, 246, 0.1)",
    },
    {
      title: "Opened Jobs",
      value: stats.activeJobs.toString() ?? "",
      icon: Rocket01Icon,
      iconColor: "#10B981",
      iconBackgroundColor: "rgba(16, 185, 129, 0.1)",
    },
    {
      title: "Total Jobs",
      value: stats.totalJobs.toString() ?? "",
      icon: Briefcase01Icon,
      iconColor: "#374151",
      iconBackgroundColor: "rgba(55, 65, 81, 0.1)",
    },
  ];
  return (
    <div className="w-full xl:max-w-lg bg-white border p-5 rounded-md space-y-4">
      <p className="font-medium pb-2 border-b">Highlights</p>

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
