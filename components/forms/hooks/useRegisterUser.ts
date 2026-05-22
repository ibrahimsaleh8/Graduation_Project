import axios, { AxiosError } from "axios";
import { sileo } from "sileo";
import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/lib/UserStore";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  UserRegisterDataType,
  userRegisterValidatioSchema,
} from "@/validations/RegisterValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthResponseDataType } from "../RegisterUserForm";

async function RegisterUserFn(
  userData: UserRegisterDataType,
): Promise<AuthResponseDataType> {
  const res = await axios.post("/api/register/employee", userData);
  return res.data;
}

export const useRegisterUser = () => {
  const [showPass, setShowPass] = useState(false);
  const { setUserData } = useUserStore();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserRegisterDataType>({
    resolver: zodResolver(userRegisterValidatioSchema),
    mode: "onSubmit",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (userData: UserRegisterDataType) => RegisterUserFn(userData),
    onSuccess: (data) => {
      setUserData(data);
      sileo.success({
        title: "Register has been Successful",
      });
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

  const submitRegisterUser: SubmitHandler<UserRegisterDataType> = (data) => {
    mutate(data);
  };
  return {
    submitRegisterUser,
    UpdateCountry,
    isPending,
    errors,
    register,
    handleSubmit,
    showPass,
    setShowPass,
  };
};
