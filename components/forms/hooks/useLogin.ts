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

async function loginFn(
  logingBody: loginDataType,
): Promise<AuthResponseDataType> {
  const res = await axios.post(`/api/login`, logingBody);
  return res.data;
}
export const useLogin = () => {
  const [showPass, setShowPass] = useState(false);
  const { setUserData } = useUserStore();

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
      setUserData(data);
      sileo.success({
        title: "Login has been Successful",
      });
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
