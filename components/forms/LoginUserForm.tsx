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
import { AtSign, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import ErrorValidationMessage from "./ErrorValidationMessage";
import { Spinner } from "../ui/spinner";
import { useLogin } from "./hooks/useLogin";

export default function LoginUserForm() {
  const {
    submitLogin,
    isPending,
    register,
    handleSubmit,
    errors,
    showPass,
    setShowPass,
  } = useLogin();

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
            aria-invalid={errors.email ? "true" : "false"}
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
              aria-invalid={errors.password ? "true" : "false"}
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
