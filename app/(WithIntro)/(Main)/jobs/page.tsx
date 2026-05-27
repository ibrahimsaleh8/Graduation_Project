import JobCard from "@/components/Cards/JobCard";
import JobsSearchAndFilter from "./_components/JobsSearchAndFilter";
import JobFilteration from "./_components/JobFilteration";
export const jobsData = [
  {
    jobId: "job-001",
    companyLogoUrl: "https://logo.clearbit.com/google.com",
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
    timeAgo: new Date("2026-05-20T10:00:00Z"),
    isApplied: false,
  },
  {
    jobId: "job-002",
    companyLogoUrl: "https://logo.clearbit.com/meta.com",
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
    timeAgo: new Date("2026-05-18T14:30:00Z"),
    isApplied: true,
  },
  {
    jobId: "job-003",
    companyLogoUrl: "https://logo.clearbit.com/spotify.com",
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
    timeAgo: new Date("2026-05-15T08:15:00Z"),
    isApplied: false,
  },
  {
    jobId: "job-004",
    companyLogoUrl: "https://logo.clearbit.com/netflix.com",
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
    timeAgo: new Date("2026-05-10T12:00:00Z"),
    isApplied: false,
  },
  {
    jobId: "job-005",
    companyLogoUrl: "https://logo.clearbit.com/airbnb.com",
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
    timeAgo: new Date("2026-05-08T09:45:00Z"),
    isApplied: true,
  },
];
export default function JobsPage() {
  return (
    <div className="space-y-6 px-1 pb-8">
      {/* Top */}
      <JobsSearchAndFilter />
      <div className="md:px-10 px-3">
        <p className="font-medium ml-auto w-fit my-4">6 jobs Found</p>
        <div className="flex gap-3 flex-col md:flex-row">
          <JobFilteration />
          <div className="flex-1">
            <div className="grid md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4">
              {/* {Array.from({ length: 6 }, (_, i) => (
                <JobCard 
                
                
                key={i} isApplied={false} />
              ))} */}

              {jobsData.map((job) => (
                <JobCard {...job} withSimilarJobs={false} key={job.jobId} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
