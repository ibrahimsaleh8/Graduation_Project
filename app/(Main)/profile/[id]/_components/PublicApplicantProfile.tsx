/* eslint-disable @next/next/no-img-element */
import {
  File02Icon,
  Call02Icon,
  Location01Icon,
  Mail01Icon,
  Saturn02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import {
  ApplicantProfile,
  Experience,
  Project,
  Skill,
} from "./ApplicantProfileTypeResonse";

// ─── Social Links ─────────────────────────────────────────────────────────────
function ApplicantSocialLinks({
  linkedin,
  facebook,
  github,
  portfolio,
}: {
  linkedin?: string | null;
  facebook?: string | null;
  github?: string | null;
  portfolio?: string | null;
}) {
  const hasLinks = linkedin || facebook || github || portfolio;

  return (
    <div className="w-full xl:max-w-100 bg-white p-5 rounded-2xl border border-[#e5e7eb]">
      <p className="font-medium pb-2 border-b">Social Links</p>
      {!hasLinks && (
        <p className="text-sm text-black/50 mt-4">No social links added yet.</p>
      )}
      <ul className="space-y-6 mt-4">
        {linkedin && (
          <li className="flex items-center gap-2 text-sm font-medium">
            <FaLinkedin className="size-5 text-black/70" />
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
        )}
        {facebook && (
          <li className="flex items-center gap-2 text-sm font-medium">
            <FaFacebook className="size-5 text-black/70" />
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
          </li>
        )}
        {github && (
          <li className="flex items-center gap-2 text-sm font-medium">
            <FaGithub className="size-5 text-black/70" />
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              GitHub
            </a>
          </li>
        )}
        {portfolio && (
          <li className="flex items-center gap-2 text-sm font-medium">
            <AiOutlineGlobal className="size-5 text-black/70" />
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              Portfolio
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

// ─── Experience Card ─────────────────────────────────────────────────────────
function ExperienceCard({
  companyName,
  description,
  endDate,
  jobTitle,
  jobType,
  location,
  startDate,
}: Experience) {
  return (
    <div className="space-y-3 p-4">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-start gap-2">
          <div className="size-2 bg-black rounded-full mt-2.5 shrink-0" />
          <div>
            <p className="md:text-lg font-medium">{jobTitle}</p>
            <p className="font-medium text-sm">
              {companyName}
              {jobType ? ` , ${jobType}` : ""}
            </p>
            {location && (
              <p className="flex items-center gap-1 text-sm">
                <HugeiconsIcon icon={Location01Icon} className="size-4" />
                {location}
              </p>
            )}
          </div>
        </div>
        <p className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-md shrink-0">
          {new Date(startDate).getFullYear()} –{" "}
          {new Date(endDate).getFullYear()}
        </p>
      </div>
      {description && (
        <div className="pl-4 text-sm md:text-base">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ title, projectUrl, imageUrl, description }: Project) {
  return (
    <div className="w-full space-y-2.5">
      {imageUrl && (
        <div className="w-full bg-white h-50 rounded-md overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div>
        <p className="font-medium text-xl line-clamp-1" title={title}>
          {title}
        </p>
        {description && (
          <p className="text-sm line-clamp-3" title={description}>
            {description}
          </p>
        )}
        {projectUrl && (
          <div className="flex items-center gap-4 flex-wrap mt-4">
            <a
              href={projectUrl}
              target="_blank"
              className="flex items-center gap-1 text-sm bg-sky-600 text-white px-4 py-1.5 rounded-md hover:opacity-80 duration-300"
            >
              <HugeiconsIcon icon={Saturn02Icon} className="size-4" />
              Live Preview
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Skills Panel ─────────────────────────────────────────────────────────────
function SkillsPanel({ skills }: { skills?: Skill[] | null }) {
  return (
    <div className="w-full xl:max-w-120 p-5 rounded-md border border-[#e5e7eb] bg-white space-y-4">
      <p className="font-medium pb-2 border-b">Skills</p>
      {skills && skills.length > 0 ? (
        <div className="flex items-center gap-4 flex-wrap">
          {skills.map((skill) => (
            <p
              key={skill.applicantSkillID}
              className="py-2 px-4 bg-[#f1f1f1] text-black text-xs rounded-sm"
            >
              {skill.skillName}
            </p>
          ))}
        </div>
      ) : (
        <div className="p-3 text-xl font-medium text-black/70">
          No Skills Added...
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PublicApplicantProfile({
  data,
}: {
  data: ApplicantProfile;
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-5 flex-col xl:flex-row">
        {/* Top */}
        <div className="flex flex-col w-full lg:pl-9">
          {/* Cover Photo */}
          <div className="w-full h-60 rounded-2xl bg-white overflow-hidden">
            {data.coverPhotoUrl && (
              <img
                src={data.coverPhotoUrl}
                alt={`${data.fullName} Cover Image`}
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>

          {/* Avatar + Info Row */}
          <div className="flex items-start xl:justify-between flex-wrap w-full">
            {/* Avatar & Name */}
            <div className="flex items-center flex-col lg:flex-row text-center lg:text-left w-full lg:w-fit">
              <div className="size-38 flex shrink-0 items-center justify-center overflow-hidden bg-white rounded-full ml-3 -mt-20">
                {data.profilePicUrl && (
                  <img
                    src={data.profilePicUrl}
                    alt={`${data.fullName} profile image`}
                    className="w-full h-full object-cover object-center"
                  />
                )}
              </div>
              <div className="space-y-1 pl-7 mt-4">
                <p className="text-4xl font-medium">{data.fullName}</p>
                {data.jobTitle && (
                  <p className="font-medium text-black/70">{data.jobTitle}</p>
                )}
                <div className="flex items-center gap-5 flex-wrap mt-3 justify-start">
                  <p className="flex items-center gap-2 text-sm">
                    <HugeiconsIcon
                      icon={Mail01Icon}
                      className="size-5 text-black/70"
                    />
                    {data.email}
                  </p>
                  {data.location && (
                    <p className="flex items-center gap-2 text-sm capitalize">
                      <HugeiconsIcon
                        icon={Location01Icon}
                        className="size-5 text-black/70"
                      />
                      {data.location}
                      {data.address ? `, ${data.address}` : ""}
                    </p>
                  )}
                  {data.phoneNumber && (
                    <p className="flex items-center gap-2 text-sm">
                      <HugeiconsIcon
                        icon={Call02Icon}
                        className="size-5 text-black/70"
                      />
                      {data.phoneNumber}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* CV Button */}
            {data.resumes && data.resumes.length > 0 && (
              <div className="flex items-center justify-center xl:justify-start gap-4 xl:ml-auto ml-0 xl:mx-0 mx-auto mt-4 pr-4 pl-7 w-full lg:w-fit">
                <a
                  className="px-8 py-2 bg-black hover:bg-black/80 text-white rounded-md text-sm flex items-center justify-center gap-3 transition md:w-fit w-full"
                  href={data.resumes[0].url}
                  target="_blank"
                >
                  <HugeiconsIcon
                    icon={File02Icon}
                    className="size-5"
                    strokeWidth={2}
                  />
                  Show CV
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Social Links */}
        <ApplicantSocialLinks
          linkedin={data.linkedin}
          facebook={data.facebook}
          github={data.github}
          portfolio={data.portfolio}
        />
      </div>

      {/* Bottom */}
      <div className="space-y-3 xl:pl-7">
        <div className="flex items-start flex-col xl:flex-row gap-5">
          {/* About & Experience */}
          <div className="flex gap-5 items-start flex-col w-full">
            {/* About */}
            <div className="w-full p-5 rounded-md border border-[#e5e7eb] bg-white space-y-4">
              <p className="font-medium pb-2 border-b">About</p>
              {data.aboutMe ? (
                <div
                  className="text-sm ProseMirror"
                  dangerouslySetInnerHTML={{ __html: data.aboutMe }}
                />
              ) : (
                <p className="text-sm text-black/50">No bio provided.</p>
              )}
            </div>

            {/* Experience */}
            <div className="w-full p-5 rounded-md border border-[#e5e7eb] bg-white space-y-4">
              <p className="font-medium pb-2 border-b">Experience</p>
              {data.experiences && data.experiences.length > 0 ? (
                <div className="space-y-2">
                  {data.experiences.map((exp) => (
                    <ExperienceCard key={exp.experienceID} {...exp} />
                  ))}
                </div>
              ) : (
                <div className="p-3 text-2xl font-medium text-black/70">
                  No Experience Added...
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          <SkillsPanel skills={data.skills} />
        </div>

        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <div className="w-full p-4 rounded-md space-y-4">
            <p className="text-xl font-medium">My Projects</p>
            <div className="grid md:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] gap-10">
              {data.projects.map((project) => (
                <ProjectCard key={project.projectID} {...project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
