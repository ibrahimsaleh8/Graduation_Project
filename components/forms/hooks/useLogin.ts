import axios, { AxiosError } from "axios";
import { sileo } from "sileo";
import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/lib/UserStore";
import { AuthResponseDataType } from "../RegisterUserForm";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  loginDataType,
  loginValidatioSchema,
} from "@/validations/loginValidatioSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRoleRedirect } from "@/lib/useRoleRedirect";

async function loginFn(
  logingBody: loginDataType,
): Promise<{ message: string; data: AuthResponseDataType }> {
  const res = await axios.post(`/api/login`, logingBody);
  return res.data;
}

export const useLogin = () => {
  const [showPass, setShowPass] = useState(false);
  const { setUserData } = useUserStore();
  const { redirectRole } = useRoleRedirect();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginDataType>({
    resolver: zodResolver(loginValidatioSchema),
    mode: "onSubmit",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (userData: loginDataType) => loginFn(userData),
    onSuccess: (data) => {
      console.log("Login", data);
      setUserData(data.data);
      sileo.success({
        title: "Login has been Successful",
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

  const submitLogin: SubmitHandler<loginDataType> = async (data) => {
    mutate(data);
  };
  return {
    submitLogin,
    isPending,
    register,
    handleSubmit,
    errors,
    showPass,
    setShowPass,
  };
};
