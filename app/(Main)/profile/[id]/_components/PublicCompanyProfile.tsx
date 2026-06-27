/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  Building06Icon,
  CallIcon,
  LinkSquare02Icon,
  Location01Icon,
  UserGroup02Icon,
  Calendar03Icon,
  Briefcase01Icon,
  Rocket01Icon,
  CheckmarkBadge02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import {
  CompanyProfile,
  CompanySocialLinks,
  OpenVacancy,
} from "./CompanyProfileTypeResonse";

// ─── Vacancy Card ─────────────────────────────────────────────────────────────
function truncateHtml(html: string, maxLength = 120): string {
  const plainText = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (plainText.length <= maxLength) return plainText;
  return plainText.slice(0, maxLength).trimEnd() + "…";
}

function VacancyCard({ vacancy }: { vacancy: OpenVacancy }) {
  const {
    title,
    description,
    minSalary,
    maxSalary,
    jobType,
    workApproach,
    jobId,
  } = vacancy;
  return (
    <div className="bg-[#f1f1f1]/50 w-full p-4 rounded-md space-y-2 border">
      <Link
        href={`/jobs/${jobId}`}
        className="text-xl font-medium hover:underline hover:text-[#2563eb] transition-colors">
        {title}
      </Link>
      <p className="text-sm text-black/60 leading-snug">
        {truncateHtml(description)}
      </p>
      <p className="text-sm pl-1">
        <span className="font-bold">
          ${minSalary} – ${maxSalary}
        </span>
        /Month
      </p>
      <div className="flex items-center flex-wrap gap-3 mt-3">
        {jobType && (
          <p className="text-xs font-medium p-2 bg-white text-black rounded-md">
            {jobType}
          </p>
        )}
        {workApproach && (
          <p className="text-xs font-medium p-2 bg-white text-black rounded-md">
            {workApproach}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Social Links ─────────────────────────────────────────────────────────────
function SocialLinks({
  socialLinks,
}: {
  socialLinks: CompanySocialLinks | null;
}) {
  const hasSocialLinks =
    socialLinks &&
    (socialLinks.facebook ||
      socialLinks.instagram ||
      socialLinks.linkedin ||
      socialLinks.twitter);

  return (
    <div className="w-full xl:max-w-100 bg-white p-5 rounded-2xl border border-[#e5e7eb]">
      <p className="font-medium pb-2 border-b">Social Links</p>
      {!hasSocialLinks && (
        <p className="text-sm text-black/50 mt-4">No social links added yet.</p>
      )}
      {socialLinks && (
        <ul className="space-y-6 mt-4">
          {socialLinks.facebook && (
            <li className="flex items-center gap-2 text-sm font-medium">
              <FaFacebook className="size-5 text-black/70" />
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                Facebook
              </a>
            </li>
          )}
          {socialLinks.linkedin && (
            <li className="flex items-center gap-2 text-sm font-medium">
              <FaLinkedin className="size-5 text-black/70" />
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                LinkedIn
              </a>
            </li>
          )}
          {socialLinks.instagram && (
            <li className="flex items-center gap-2 text-sm font-medium">
              <FaInstagram className="size-5 text-black/70" />
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                Instagram
              </a>
            </li>
          )}
          {socialLinks.twitter && (
            <li className="flex items-center gap-2 text-sm font-medium">
              <BsTwitterX className="size-5 text-black/70" />
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                Twitter (X)
              </a>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

// ─── Statistics Panel ─────────────────────────────────────────────────────────
function StatisticsPanel({
  country,
  foundedYear,
  stats,
}: {
  country: string | null;
  foundedYear: number | null;
  stats: { totalJobs: number; activeJobs: number } | null;
}) {
  return (
    <div className="w-full xl:max-w-lg bg-white border p-5 rounded-md space-y-4">
      <p className="font-medium pb-2 border-b">Highlights</p>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        {country && (
          <div className="flex gap-3 items-center">
            <div
              style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              className="size-10 rounded-full flex items-center justify-center shrink-0">
              <HugeiconsIcon
                icon={Location01Icon}
                className="size-5"
                style={{ color: "#3B82F6" }}
              />
            </div>
            <div className="space-y-px">
              <p className="font-medium">Country</p>
              <p className="text-sm">{country}</p>
            </div>
          </div>
        )}
        {foundedYear && (
          <div className="flex gap-3 items-center">
            <div
              style={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}
              className="size-10 rounded-full flex items-center justify-center shrink-0">
              <HugeiconsIcon
                icon={Calendar03Icon}
                className="size-5"
                style={{ color: "#8B5CF6" }}
              />
            </div>
            <div className="space-y-px">
              <p className="font-medium">Founded</p>
              <p className="text-sm">{foundedYear}</p>
            </div>
          </div>
        )}
        {stats && (
          <>
            <div className="flex gap-3 items-center">
              <div
                style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                className="size-10 rounded-full flex items-center justify-center shrink-0">
                <HugeiconsIcon
                  icon={Rocket01Icon}
                  className="size-5"
                  style={{ color: "#10B981" }}
                />
              </div>
              <div className="space-y-px">
                <p className="font-medium">Opened Jobs</p>
                <p className="text-sm">{stats.activeJobs}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div
                style={{ backgroundColor: "rgba(55, 65, 81, 0.1)" }}
                className="size-10 rounded-full flex items-center justify-center shrink-0">
                <HugeiconsIcon
                  icon={Briefcase01Icon}
                  className="size-5"
                  style={{ color: "#374151" }}
                />
              </div>
              <div className="space-y-px">
                <p className="font-medium">Total Jobs</p>
                <p className="text-sm">{stats.totalJobs}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PublicCompanyProfile({
  data,
}: {
  data: CompanyProfile;
}) {
  return (
    <div className="space-y-6">
      {/* Top Section */}
      <div className="flex items-start gap-5 flex-col xl:flex-row md:pl-7">
        <div className="flex flex-col w-full">
          {/* Cover Image */}
          <div className="w-full h-60 rounded-2xl bg-white overflow-hidden border">
            {data.coverLogoUrl && (
              <img
                src={data.coverLogoUrl}
                alt={`${data.name} Cover Image`}
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>

          {/* Logo + Info Row */}
          <div className="flex items-start justify-between flex-wrap">
            {/* Logo & Name */}
            <div className="flex items-center flex-col lg:flex-row text-center lg:text-left w-full lg:w-fit">
              <div className="size-38 bg-[#1b1b1b] rounded-full ml-3 -mt-20 overflow-hidden">
                {data.logoUrl && (
                  <img
                    src={data.logoUrl}
                    alt={`${data.name} logo`}
                    className="w-full h-full object-cover object-center"
                  />
                )}
              </div>
              <div className="space-y-1 pl-7 mt-4">
                <p className="lg:text-4xl md:text-2xl text-lg font-medium flex md:items-center items-end justify-center gap-1">
                  {data.name}
                  {data.isVerified && (
                    <HugeiconsIcon
                      icon={CheckmarkBadge02Icon}
                      className="size-10 fill-main-color text-input-bg"
                      strokeWidth={2}
                    />
                  )}
                </p>
                {data.tagline && (
                  <p className="font-medium text-black/70">{data.tagline}</p>
                )}
                <div className="flex items-center gap-5 flex-wrap mt-3 justify-start">
                  {data.address && (
                    <p className="flex items-center gap-1 text-sm">
                      <HugeiconsIcon
                        icon={Location01Icon}
                        className="size-5 text-black/70"
                      />
                      {data.address}
                    </p>
                  )}
                  {data.phone && (
                    <p className="flex items-center gap-1 text-sm">
                      <HugeiconsIcon
                        icon={CallIcon}
                        className="size-5 text-black/70"
                      />
                      {data.phone}
                    </p>
                  )}
                  {data.industry && (
                    <p className="flex items-center gap-1 text-sm">
                      <HugeiconsIcon
                        icon={Building06Icon}
                        className="size-5 text-black/70"
                      />
                      {data.industry}
                    </p>
                  )}
                  {data.companySize && (
                    <p className="flex items-center gap-1 text-sm">
                      <HugeiconsIcon
                        icon={UserGroup02Icon}
                        className="size-5 text-black/70"
                      />
                      {data.companySize}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Website Button */}
            {data.websiteUrl && (
              <div className="flex items-center gap-4 ml-auto mt-4 pr-4 pl-7 w-full lg:w-fit">
                <a
                  className="px-8 py-2 bg-[#2563eb] hover:bg-[#2563eb]/80 text-white rounded-md text-sm flex items-center justify-center gap-3 transition ml-auto md:w-fit w-full"
                  href={data.websiteUrl}
                  target="_blank">
                  <HugeiconsIcon
                    icon={LinkSquare02Icon}
                    className="size-5"
                    strokeWidth={2}
                  />
                  Visit Website
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Social Links Sidebar */}
        <SocialLinks socialLinks={data.socialLinks} />
      </div>

      {/* Bottom Section */}
      <div className="space-y-3 md:pl-7">
        <div className="flex items-start flex-col xl:flex-row gap-5">
          <div className="flex gap-5 items-start flex-col w-full">
            {/* About */}
            <div className="w-full p-5 rounded-md border border-[#e5e7eb] bg-white space-y-4">
              <p className="font-medium pb-2 border-b">About</p>
              {data.about ? (
                <div
                  className="text-sm ProseMirror"
                  dangerouslySetInnerHTML={{ __html: data.about }}
                />
              ) : (
                <p className="text-sm text-black/50">
                  No company description provided.
                </p>
              )}
            </div>

            {/* Open Vacancies */}
            <div className="w-full bg-white border p-5 rounded-md space-y-4">
              <p className="font-medium pb-2 border-b">Open vacancies</p>
              {data.openVacancies && data.openVacancies.length > 0 ? (
                <div className="space-y-4">
                  {data.openVacancies.map((vacancy) => (
                    <VacancyCard key={vacancy.jobId} vacancy={vacancy} />
                  ))}
                </div>
              ) : (
                <p className="p-4 text-center font-medium text-black/70">
                  No Open Jobs Found
                </p>
              )}
            </div>
          </div>

          {/* Highlights */}
          <StatisticsPanel
            country={data.country}
            foundedYear={data.foundedYear}
            stats={data.stats}
          />
        </div>
      </div>
    </div>
  );
}
