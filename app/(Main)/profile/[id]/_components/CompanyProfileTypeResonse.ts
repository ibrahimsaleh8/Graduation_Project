export interface CompanySocialLinks {
  facebook: string | null;
  linkedin: string | null;
  instagram: string | null;
  twitter: string | null;
}

export interface CompanyStats {
  totalJobs: number;
  activeJobs: number;
}

export interface OpenVacancy {
  jobId: string;
  title: string;
  description: string;
  minSalary: number;
  maxSalary: number;
  salaryCurrency: string;
  jobType: string | null;
  workApproach: string | null;
  postedAt: string;
}

export interface CompanyProfile {
  companyId: string;
  name: string;
  isVerified: boolean;
  logoUrl: string | null;
  websiteUrl: string | null;
  coverLogoUrl: string | null;
  tagline: string | null;
  about: string | null;
  address: string | null;
  country: string | null;
  industry: string | null;
  companySize: string | null;
  foundedYear: number | null;
  phone: string | null;
  socialLinks: CompanySocialLinks | null;
  stats: CompanyStats | null;
  openVacancies: OpenVacancy[] | null;
}
