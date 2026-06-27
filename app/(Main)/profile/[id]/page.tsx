import { ApplicantProfile } from "./_components/ApplicantProfileTypeResonse";
import { CompanyProfile } from "./_components/CompanyProfileTypeResonse";
import PublicCompanyProfile from "./_components/PublicCompanyProfile";
import PublicApplicantProfile from "./_components/PublicApplicantProfile";

export type ProfileResponse = CompanyProfile | ApplicantProfile;

const isCompanyProfile = (
  profile: ProfileResponse,
): profile is CompanyProfile => {
  return "companyId" in profile;
};

const isApplicantProfile = (
  profile: ProfileResponse,
): profile is ApplicantProfile => {
  return "applicantID" in profile;
};

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Profile/public-profile/${id}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    const error = await res.json();
    console.log(error);
    throw new Error("Failed to fetch profile");
  }

  const profileData: ProfileResponse = await res.json();
  console.log("profileData", profileData);
  return (
    <div className="min-h-screen bg-[#f1f1f1] py-8 px-4 md:px-8 lg:px-12 pt-25">
      {isCompanyProfile(profileData) && (
        <PublicCompanyProfile data={profileData} />
      )}
      {isApplicantProfile(profileData) && (
        <PublicApplicantProfile data={profileData} />
      )}
    </div>
  );
}
