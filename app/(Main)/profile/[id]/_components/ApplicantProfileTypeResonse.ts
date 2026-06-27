export interface Resume {
  resumeId: string;
  name: string;
  url: string;
}

export interface Experience {
  experienceID: string;
  companyName: string;
  location: string | null;
  jobTitle: string;
  description: string | null;
  jobType: string | null;
  startDate: string;
  endDate: string;
  applicantID: string;
}

export interface Skill {
  applicantSkillID: string;
  skillID: string;
  skillName: string;
}

export interface Project {
  projectID: string;
  title: string;
  description: string | null;
  projectUrl: string | null;
  githubRepoUrl: string | null;
  imageUrl: string | null;
  createdAt: string;
}

export interface ApplicantProfile {
  applicantID: string;
  fullName: string;
  jobTitle: string | null;
  location: string | null;
  aboutMe: string | null;
  profilePicUrl: string | null;
  coverPhotoUrl: string | null;
  email: string;
  phoneNumber: string | null;
  address: string | null;
  linkedin: string | null;
  github: string | null;
  facebook: string | null;
  portfolio: string | null;
  resumes: Resume[] | null;
  behance: string | null;
  dribbble: string | null;
  experiences: Experience[] | null;
  skills: Skill[] | null;
  projects: Project[] | null;
}
