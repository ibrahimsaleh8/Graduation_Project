import JobCard from "@/components/Cards/JobCard";
import JobsSearchAndFilter from "./_components/JobsSearchAndFilter";
import JobFilteration from "./_components/JobFilteration";
export const jobsData = [
  {
    jobId: "job-001",
    companyLogoUrl: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    companyLocation: "Mountain View, CA",
    jobTitle: "Frontend Developer",
    jobDescription:
      "We are looking for a skilled Frontend Developer to build modern and responsive web applications using React and TypeScript.",
    jobRequirement:
      "2+ years experience with React, TypeScript, Tailwind CSS, and REST APIs.",
    minSalary: 3500,
    maxSalary: 5000,
    jobType: ["Full Time", "Remote"],
    experienceLevel: "Mid Level",
    skills: ["React", "TypeScript", "Tailwind", "REST API"],
    applicants: 78,
    category: "Frontend",
    postedBy: "HR Team",
    timeAgo: new Date("2026-05-20T10:00:00Z"),
    isApplied: false,
  },
  {
    jobId: "job-002",
    companyLogoUrl: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    companyLocation: "Menlo Park, CA",
    jobTitle: "React Engineer",
    jobDescription:
      "Join our product engineering team to develop scalable user interfaces and improve user experience across our platforms.",
    jobRequirement:
      "Strong knowledge of React, Next.js, performance optimization, and state management.",
    minSalary: 4200,
    maxSalary: 6200,
    jobType: ["Full Time", "Hybrid"],
    experienceLevel: "Senior",
    skills: ["React", "Next.js", "Performance", "Redux"],
    applicants: 132,
    category: "Frontend",
    postedBy: "Recruitment Team",
    timeAgo: new Date("2026-05-18T14:30:00Z"),
    isApplied: true,
  },
  {
    jobId: "job-003",
    companyLogoUrl: "https://cdn.simpleicons.org/spotify",
    companyName: "Spotify",
    companyLocation: "Stockholm, Sweden",
    jobTitle: "UI Engineer",
    jobDescription:
      "Design and develop beautiful and accessible interfaces for millions of Spotify users worldwide.",
    jobRequirement:
      "Experience with modern UI systems, animations, and accessibility best practices.",
    minSalary: 3000,
    maxSalary: 4800,
    jobType: ["Remote", "Contract"],
    experienceLevel: "Mid Level",
    skills: ["UI Design", "Animations", "Accessibility"],
    applicants: 54,
    category: "UI/UX",
    postedBy: "Talent Team",
    timeAgo: new Date("2026-05-15T08:15:00Z"),
    isApplied: false,
  },
  {
    jobId: "job-004",
    companyLogoUrl: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    companyLocation: "Los Angeles, CA",
    jobTitle: "Next.js Developer",
    jobDescription:
      "Build high-performance streaming platform interfaces with Next.js and modern frontend technologies.",
    jobRequirement:
      "Solid experience in Next.js, SSR, React Query, and responsive web design.",
    minSalary: 5000,
    maxSalary: 7500,
    jobType: ["Full Time"],
    experienceLevel: "Senior",
    skills: ["Next.js", "SSR", "React Query"],
    applicants: 91,
    category: "Frontend",
    postedBy: "Engineering Lead",
    timeAgo: new Date("2026-05-10T12:00:00Z"),
    isApplied: false,
  },
  {
    jobId: "job-005",
    companyLogoUrl: "https://cdn.simpleicons.org/airbnb",
    companyName: "Airbnb",
    companyLocation: "San Francisco, CA",
    jobTitle: "Frontend Software Engineer",
    jobDescription:
      "Help us craft seamless booking experiences and scalable frontend architecture for travelers worldwide.",
    jobRequirement:
      "Experience with React ecosystem, testing libraries, and scalable frontend architecture.",
    minSalary: 4500,
    maxSalary: 6800,
    jobType: ["Hybrid", "Full Time"],
    experienceLevel: "Senior",
    skills: ["React", "Testing", "Architecture"],
    applicants: 110,
    category: "Frontend",
    postedBy: "Hiring Manager",
    timeAgo: new Date("2026-05-08T09:45:00Z"),
    isApplied: true,
  },
  {
    jobId: "job-006",
    companyLogoUrl: "https://cdn.simpleicons.org/microsoft",
    companyName: "Microsoft",
    companyLocation: "Redmond, WA",
    jobTitle: "Frontend Engineer",
    jobDescription:
      "Build scalable enterprise applications with modern frontend technologies.",
    jobRequirement:
      "Strong experience with React, TypeScript, and component architecture.",
    minSalary: 4300,
    maxSalary: 6500,
    jobType: ["Full Time", "Remote"],
    experienceLevel: "Mid Level",
    skills: ["React", "TypeScript", "Architecture"],
    applicants: 87,
    category: "Frontend",
    postedBy: "Tech Recruiter",
    timeAgo: new Date("2026-05-06T11:20:00Z"),
    isApplied: false,
  },
  {
    jobId: "job-007",
    companyLogoUrl: "https://cdn.simpleicons.org/amazon",
    companyName: "Amazon",
    companyLocation: "Seattle, WA",
    jobTitle: "UI Developer",
    jobDescription:
      "Create scalable and user-friendly shopping experiences for millions of users.",
    jobRequirement:
      "Experience with JavaScript, React, and performance optimization.",
    minSalary: 4000,
    maxSalary: 6300,
    jobType: ["Full Time"],
    experienceLevel: "Mid Level",
    skills: ["JavaScript", "React", "Performance"],
    applicants: 145,
    category: "Frontend",
    postedBy: "Amazon HR",
    timeAgo: new Date("2026-05-04T15:00:00Z"),
    isApplied: false,
  },
];
export default function JobsPage() {
  return (
    <div className="space-y-6 px-1 pt-20 pb-30">
      {/* Top */}
      <JobsSearchAndFilter />
      <div className="md:px-10 px-3 ">
        <p className="font-medium ml-auto w-fit my-4">6 jobs Found</p>
        <div className="flex gap-3 flex-col md:flex-row">
          <JobFilteration />
          <div className="flex-1">
            <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4">
              {jobsData.map((job) => (
                <JobCard {...job} withSimilarJobs={true} key={job.jobId} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
