import PlanFeatureBadge from "../../_components/PlanFeatureBadge";
import { AllowedFeaturesDataType } from "./hooks/useSubscriptionDetails";

type Props = {
  allowedFeatures: AllowedFeaturesDataType;
};

export default function AllowedFeatures({ allowedFeatures }: Props) {
  return (
    <div className="bg-white p-5 w-full lg:max-w-xl rounded-md border space-y-3">
      <p className="font-medium">Allowed Features</p>

      {/* Fearures */}
      <ul className="space-y-2">
        <li>
          <PlanFeatureBadge
            isActive={true}
            label={`${allowedFeatures.activeJobPostsLimit} Active Job Posts`}
          />
        </li>
        <li>
          <PlanFeatureBadge
            isActive={true}
            label={`${allowedFeatures.featuredJobsLimit} Featured Jobs`}
          />
        </li>
        <li>
          <PlanFeatureBadge
            isActive={allowedFeatures.hasAiToolsAccess}
            label="AI Tools Access"
          />
        </li>
        <li>
          <PlanFeatureBadge
            isActive={allowedFeatures.hasPrioritySupport}
            label="Priority Support"
          />
        </li>
        <li>
          <PlanFeatureBadge
            isActive={allowedFeatures.hasCandidateSearch}
            label="Candidate Search"
          />
        </li>
      </ul>
    </div>
  );
}
