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
import ErrorValidationMessage from "./ErrorValidationMessage";
import CountrySelect from "./CountrySelect";
import { Spinner } from "../ui/spinner";
import { useRegisterUser } from "./hooks/useRegisterUser";
import IndustrySearch from "./IndustrySearch";

export type AuthResponseDataType = {
  userId: string;
  email: string;
  role: string;
  photoUrl: string;
};

export default function RegisterUserForm() {
  const {
    submitRegisterUser,
    UpdateCountry,
    isPending,
    errors,
    register,
    handleSubmit,
    showPass,
    setShowPass,
    setValue,
  } = useRegisterUser();
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
            aria-invalid={errors.firstName ? "true" : "false"}
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
            aria-invalid={errors.lastName ? "true" : "false"}
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
          aria-invalid={errors.email ? "true" : "false"}
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
            aria-invalid={errors.password ? "true" : "false"}
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
      <div className="flex items-center gap-3 md:flex-row flex-col">
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="industry" className="text-sm">
            Main Industry
          </Label>
          <IndustrySearch
            withIcon={false}
            UpdateIndustry={(value: string) => {
              setValue("industry", value);
            }}
            deafultIndustry=""
            classes="w-full bg-input-bg rounded-md hover:bg-input-bg/80 border"
            isInvalid={errors.industry ? true : false}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Label className="text-sm">Country</Label>
          <CountrySelect
            isInvalid={errors.location ? true : false}
            deafultCountry=""
            UpdateCountry={UpdateCountry}
          />
        </div>
      </div>

      {(errors.industry || errors.location) && (
        <div className="flex items-center gap-4">
          {errors.industry && (
            <ErrorValidationMessage
              message={errors.industry.message as string}
            />
          )}{" "}
          {errors.location && (
            <ErrorValidationMessage
              message={errors.location.message as string}
            />
          )}
        </div>
      )}

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
