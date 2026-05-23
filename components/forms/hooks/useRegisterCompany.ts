import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { sileo } from "sileo";
import { useUserStore } from "@/lib/UserStore";
import { AuthResponseDataType } from "../RegisterUserForm";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  CreateCompanyInput,
  createCompanySchema,
} from "@/validations/RegisterValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRoleRedirect } from "@/lib/useRoleRedirect";

async function RegisterCompanyFn(
  userData: CreateCompanyInput,
): Promise<{ message: string; data: AuthResponseDataType }> {
  const res = await axios.post("/api/register/company", userData);
  return res.data;
}

export const useRegisterCompany = () => {
  const [showPass, setShowPass] = useState(false);
  const { setUserData } = useUserStore();
  const { redirectRole } = useRoleRedirect();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateCompanyInput>({
    resolver: zodResolver(createCompanySchema),
    mode: "onSubmit",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (userData: CreateCompanyInput) => RegisterCompanyFn(userData),
    onSuccess: (data) => {
      setUserData(data.data);
      sileo.success({
        title: "Register has been Successful",
      });

      redirectRole(data.data.role);
    },

    onError: (err: AxiosError<{ message: string }>) => {
      sileo.error({
        title: "Error",
        description: err.response?.data.message,
      });
    },
  });

  const UpdateCountry = (country: string) => {
    setValue("location", country);
  };

  const submitRegisterUser: SubmitHandler<CreateCompanyInput> = (data) => {
    console.log(data);
    mutate(data);
  };

  return {
    submitRegisterUser,
    UpdateCountry,
    isPending,
    register,
    handleSubmit,
    errors,
    showPass,
    setShowPass,
    setValue,
  };
};
