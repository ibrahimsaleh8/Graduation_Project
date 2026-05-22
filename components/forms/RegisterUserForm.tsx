import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  UserRegisterDataType,
  userRegisterValidatioSchema,
} from "@/validations/RegisterValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorValidationMessage from "./ErrorValidationMessage";
import CountrySelect from "./CountrySelect";
import axios, { AxiosError } from "axios";
import { sileo } from "sileo";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "../ui/spinner";
export type AuthResponseDataType = {
  userId: string;
  email: string;
  role: string;
};

async function RegisterUserFn(
  userData: UserRegisterDataType,
): Promise<AuthResponseDataType> {
  const res = await axios.post("/api/register/employee", userData);
  return res.data;
}
export default function RegisterUserForm() {
  const [showPass, setShowPass] = useState(false);
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
      console.log(data);
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

  return (
    <form
      onSubmit={handleSubmit(submitRegisterUser)}
      className="flex flex-col gap-5 w-full">
      {/* Name */}
      <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="first-name" className="text-sm">
            First name
          </Label>
          <Input
            {...register("firstName")}
            type="text"
            id="first-name"
            placeholder="First name"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="last-name" className="text-sm">
            Last name
          </Label>
          <Input
            {...register("lastName")}
            type="text"
            id="last-name"
            placeholder="Last name"
          />
        </div>
      </div>
      {(errors.firstName || errors.lastName) && (
        <div className="flex items-center gap-6 flex-wrap">
          {errors.firstName && (
            <ErrorValidationMessage
              message={errors.firstName.message as string}
            />
          )}
          {errors.lastName && (
            <ErrorValidationMessage
              message={errors.lastName.message as string}
            />
          )}
        </div>
      )}

      {/* Email */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-sm">
          Email
        </Label>
        <Input
          {...register("email")}
          type="email"
          id="email"
          placeholder="Email"
        />
        {errors.email && (
          <ErrorValidationMessage message={errors.email.message as string} />
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="password" className="text-sm">
          Password
        </Label>
        <InputGroup>
          <InputGroupInput
            placeholder="Password"
            type={showPass ? "text" : "password"}
            id="password"
            {...register("password")}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Show Password"
              title="Show Password"
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
        {errors.password && (
          <ErrorValidationMessage message={errors.password.message as string} />
        )}
      </div>

      {/* Country */}
      <div className="flex flex-col gap-1">
        <Label className="text-sm">Country</Label>
        <CountrySelect UpdateCountry={UpdateCountry} />
        {errors.location && (
          <ErrorValidationMessage message={errors.location.message as string} />
        )}
      </div>

      <Button disabled={isPending} className="text-sm my-2">
        {isPending ? (
          <>
            Loading... <Spinner />
          </>
        ) : (
          "Create Employee Account"
        )}
      </Button>
    </form>
  );
}
