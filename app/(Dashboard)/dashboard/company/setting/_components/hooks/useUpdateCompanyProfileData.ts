import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sileo } from "sileo";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CompanySettingsProfileDataType,
  CompanySettingsResponseDataType,
} from "../ShowCompanySettings";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  CompanyProfileDataType,
  CompanyProfileSettingsSchema,
} from "@/validations/CompanyProfileSettings";
import { CompanyProfileDetailsResponseDataType } from "../../../profile/_components/ShowCompanyProfile";

type Props = {
  profileData: CompanySettingsProfileDataType;
  token: string;
};

type updateProfileDataType = {
  name: string;
  industry: string;
  country: string;
  companySize: string | null;
  foundedYear: number | null;
  profileBio: string | null;
  description: string | null;
};

async function UpdateCompanyProfileApi(
  token: string,
  profileData: updateProfileDataType,
) {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/CompanySettings/profile`,
    profileData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export const useUpdateCompanyProfileData = ({ profileData, token }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<CompanyProfileDataType>({
    resolver: zodResolver(CompanyProfileSettingsSchema),
    mode: "onSubmit",
    defaultValues: {
      bio: profileData.profileBio,
      companyDescription: profileData.description,
      companyName: profileData.name,
      companySize: profileData.companySize,
      country: profileData.country,
      founded_year: profileData.foundedYear,
      industry: profileData.industry,
    },
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: updateProfileDataType) =>
      UpdateCompanyProfileApi(token, data),
    onSuccess: () => {
      queryClient.setQueryData(
        ["company-profile-settings"],
        (oldData?: CompanySettingsResponseDataType) => {
          const updatedData = {
            name: getValues("companyName"),
            industry: getValues("industry"),
            country: getValues("country"),
            companySize: getValues("companySize"),
            foundedYear: getValues("founded_year"),
            profileBio: getValues("bio"),
            description: getValues("companyDescription"),
          };
          if (!oldData) {
            return {
              profile: updatedData,
            } as CompanySettingsResponseDataType;
          }
          return {
            ...oldData,
            profile: {
              ...oldData.profile,
              ...updatedData,
            },
          };
        },
      );

      queryClient.setQueryData(
        ["company-profile"],
        (oldData?: CompanyProfileDetailsResponseDataType) => {
          if (!oldData) return;
          const updatedData = {
            name: getValues("companyName"),
            industry: getValues("industry"),
            country: getValues("country"),
            companySize: getValues("companySize"),
            foundedYear: getValues("founded_year"),
            tagline: getValues("bio"),
            about: getValues("companyDescription"),
          };
          return {
            ...oldData,
            ...updatedData,
          };
        },
      );

      sileo.success({
        title: "Profile data updated successfully",
      });
    },

    onError: (error: AxiosError<{ errors: string[]; status: number }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: "Failed to create job post",
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const onSubmit: SubmitHandler<CompanyProfileDataType> = (data) => {
    const validation = CompanyProfileSettingsSchema.safeParse(data);
    if (!validation.success) {
      console.log(validation.error.issues);
      sileo.warning({
        title: "Input Validation Error",
        description: validation.error.issues[0].message,
      });
      return;
    }

    mutate({
      companySize: data.companySize,
      country: data.country,
      description: data.companyDescription,
      foundedYear: data.founded_year,
      industry: data.industry,
      name: data.companyName,
      profileBio: data.bio,
    });
  };
  return {
    register,
    handleSubmit,
    setValue,
    onSubmit,
    isPending,
    errors,
    getValues,
  };
};
