import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export type ApplicantProfileResponse = {
  applicantID: string;
  fullName: string;
  jobTitle?: string;
  location: string;
  aboutMe?: string;
  profilePicUrl?: string;
  coverPhotoUrl?: string;
  email: string;
  phoneNumber?: string;
  linkedin?: string;
  github?: string;
  behance?: string;
  address?: string;
  dribbble?: string;
  facebook?: string;
  portfolio?: string;
  experiences?: ExperienceType[];
  skills?: SkillType[];
  projects?: ProjectType[];
  resumes: EmployeeResumeDataType[];
};

export type ExperienceType = {
  experienceID: string;
  companyName: string;
  location: string;
  jobTitle: string;
  description: string;
  jobType: number;
  startDate: Date;
  endDate: Date;
  applicantID: string;
};

export type SkillType = {
  applicantSkillID: string;
  skillID: string;
  skillName: string;
};

export type ProjectType = {
  projectID: string;
  title: string;
  description: string;
  projectUrl: string;
  imageUrl: string;
  createdAt: string;
};

export type EmployeeResumeDataType = {
  resumeId: string;
  name: string;
  url: string;
};
async function GetMyProfileEmployee(
  token: string,
): Promise<ApplicantProfileResponse> {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Profile/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export const useGetEmployeeProfile = (token: string) => {
  const { error, isLoading, data } = useQuery<
    ApplicantProfileResponse,
    AxiosError<{ message: string }>
  >({
    queryKey: ["get-my-profile-employee"],
    queryFn: () => GetMyProfileEmployee(token),
  });

  return { error, isLoading, data };
};
