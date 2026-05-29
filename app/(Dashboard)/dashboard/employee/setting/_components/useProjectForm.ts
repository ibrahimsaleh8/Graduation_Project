import { sileo } from "sileo";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProjectFormData,
  projectSchema,
} from "@/validations/EmployeeProjectSchema";
type Props = {
  token: string;
  opearation: "add" | "edit";
  deafaultValues?: ProjectFormData & {
    projectCard?: string;
    projectId: string;
  };
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

async function CreateProjectApi(
  data: ProjectFormData,
  token: string,
  projectCard: File,
) {
  const formData = new FormData();
  formData.append("title", data.projectTitle);
  formData.append("description", data.description);
  formData.append("projectUrl", data.projectUrl || "");
  formData.append("Image", projectCard);
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Project`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

async function UpdateProjectApi(
  data: {
    projectTitle: string;
    description: string;
    projectUrl?: string;
    projectId: string;
  },
  token: string,
  projectCard?: File,
) {
  const formData = new FormData();
  formData.append("title", data.projectTitle);
  formData.append("description", data.description);
  if (data.projectUrl) {
    formData.append("projectUrl", data.projectUrl);
  }
  if (projectCard) {
    formData.append("Image", projectCard);
  }

  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Project/${data.projectId}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}

export const useProjectForm = ({
  token,
  opearation,
  deafaultValues,
  setOpen,
}: Props) => {
  const queryClient = useQueryClient();

  const { mutate: CreateProject, isPending: isCreatingProject } = useMutation({
    mutationFn: ({
      data,
      token,
      projectCard,
    }: {
      data: ProjectFormData;
      token: string;
      projectCard: File;
    }) => CreateProjectApi(data, token, projectCard),

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      sileo.success({
        title: `Project added successfully!`,
      });
      setOpen?.(false);
    },
    onError: (error: AxiosError<{ errors: string[] }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to add project`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const { mutate: UpdateProject, isPending: isUpdatingProject } = useMutation({
    mutationFn: ({
      data,
      token,
      projectCard,
    }: {
      data: {
        projectTitle: string;
        description: string;
        projectUrl?: string;
        projectId: string;
      };
      token: string;
      projectCard?: File;
    }) => UpdateProjectApi(data, token, projectCard),

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      sileo.success({
        title: `Project Updated successfully!`,
      });
      setOpen?.(false);
    },
    onError: (error: AxiosError<{ errors: string[] }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to update project`,
        description:
          error.response?.data?.errors?.[0] ||
          "An error occurred. Please try again.",
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectTitle: deafaultValues?.projectTitle || "",
      description: deafaultValues?.description || "",
      projectUrl: deafaultValues?.projectUrl || "",
      projectRepo: deafaultValues?.projectRepo || "",
    },
  });
  const [projectCard, setProjectCard] = useState<File | null>(null);
  const [errorCard, setErrorCard] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(
    deafaultValues?.projectCard ?? null,
  );

  const onFileChange = (file?: File) => {
    if (!file) return;

    setProjectCard(file);
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const onSubmit = async (data: ProjectFormData) => {
    if (!deafaultValues?.projectCard) {
      if (!projectCard) {
        setErrorCard("Project card is required");
        return;
      }
      if (projectCard && errorCard) {
        setErrorCard(null);
      }
    }

    if (opearation == "add") {
      CreateProject({ data, token, projectCard: projectCard as File });
    } else if (opearation == "edit" && deafaultValues?.projectId) {
      if (
        data.description === deafaultValues.description &&
        data.projectTitle === deafaultValues.projectTitle &&
        data.projectUrl === deafaultValues.projectUrl
      ) {
        sileo.warning({
          title: "No changes made",
          description: "Please make changes before submitting.",
        });
        return;
      }

      UpdateProject({
        data: {
          projectTitle: data.projectTitle,
          description: data.description,
          projectUrl: data.projectUrl,
          projectId: deafaultValues?.projectId,
        },
        token,
        projectCard: projectCard as File,
      });
    }
  };

  return {
    isCreatingProject,
    isUpdatingProject,
    register,
    handleSubmit,
    errors,
    onSubmit,
    onFileChange,
    preview,
    errorCard,
    projectCard,
  };
};
