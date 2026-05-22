"use client";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import Link from "next/link";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { useState } from "react";
import { AtSign, Eye, EyeOff } from "lucide-react";
import {
  Checkbox,
  CheckboxIndicator,
} from "@/components/animate-ui/primitives/radix/checkbox";

import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  loginDataType,
  loginValidatioSchema,
} from "@/validations/loginValidatioSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorValidationMessage from "./ErrorValidationMessage";
import axios, { AxiosError } from "axios";
import { sileo } from "sileo";
import { AuthResponseDataType } from "./RegisterUserForm";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "../ui/spinner";
async function loginFn(
  logingBody: loginDataType,
): Promise<AuthResponseDataType> {
  const res = await axios.post(`/api/login`, logingBody);
  return res.data;
}

export default function LoginUserForm() {
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
      console.log(data);
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

  const [showPass, setShowPass] = useState(false);

  return (
    <motion.form
      onSubmit={handleSubmit(submitLogin)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.5,
      }}
      className="flex flex-col gap-5 md:w-3/4 w-full mx-auto">
      {/* Email */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="font-medium">
          Email
        </Label>
        <InputGroup>
          <InputGroupInput
            {...register("email")}
            placeholder="Email"
            type="email"
            id="email"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton aria-label="Email" title="Email" size="sm">
              <AtSign />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      {errors.email && (
        <ErrorValidationMessage message={errors.email.message as string} />
      )}

      {/* Password */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <InputGroup>
          <InputGroupInput
            {...register("password")}
            placeholder="Password"
            type={showPass ? "text" : "password"}
            id="password"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Show Password"
              title="Show Password"
              className="cursor-pointer"
              size="sm"
              onClick={() => {
                setShowPass((pre) => !pre);
              }}>
              {showPass ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      {errors.password && (
        <ErrorValidationMessage message={errors.password.message as string} />
      )}
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <Checkbox
            id="remember-me"
            className="w-4.5 h-4.5 flex items-center justify-center border [&[data-state=checked],&[data-state=indeterminate]]:bg-main-color [&[data-state=checked],&[data-state=indeterminate]]:text-white rounded-[3px]">
            <CheckboxIndicator className="w-3.5 h-3.5" />
          </Checkbox>
          <Label htmlFor="remember-me">Remeber Me</Label>
        </div>
        <Link className="text-sm w-fit" href={"/forgot-password"}>
          Forgot Password ?
        </Link>
      </div>

      <Button disabled={isPending} className="font-medium">
        {isPending ? (
          <>
            Loading... <Spinner />
          </>
        ) : (
          "Login"
        )}
      </Button>

      <p className="flex items-center gap-1 text-sm">
        {"Don't have an account yet ?"}
        <Link className="text-main-color font-medium" href={"/register"}>
          Sign up
        </Link>
      </p>
    </motion.form>
  );
}
