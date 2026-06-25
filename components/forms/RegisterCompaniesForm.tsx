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
import { useRegisterCompany } from "./hooks/useRegisterCompany";
import IndustrySearch from "./IndustrySearch";

export default function RegisterCompaniesForm() {
  const {
    submitRegisterUser,
    UpdateCountry,
    isPending,
    register,
    handleSubmit,
    errors,
    showPass,
    setShowPass,
    setValue,
  } = useRegisterCompany();
  return (
    <form
      onSubmit={handleSubmit(submitRegisterUser)}
      className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="company-name" className="text-sm">
          Company name
        </Label>
        <Input
          {...register("name")}
          type="text"
          id="company-name"
          aria-invalid={errors.name ? "true" : "false"}
          placeholder="Company name"
        />
        {errors.name && (
          <ErrorValidationMessage message={errors.name.message as string} />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-sm">
          Business email
        </Label>
        <Input
          {...register("email")}
          type="email"
          id="email"
          aria-invalid={errors.email ? "true" : "false"}
          placeholder="Business email"
        />
        {errors.email && (
          <ErrorValidationMessage message={errors.email.message as string} />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password" className="text-sm">
          Password
        </Label>
        <InputGroup>
          <InputGroupInput
            placeholder="Password"
            type={showPass ? "text" : "password"}
            {...register("password")}
            aria-invalid={errors.password ? "true" : "false"}
            id="password"
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

      <div className="flex items-center gap-5 flex-col sm:flex-row">
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
            deafultCountry=""
            UpdateCountry={UpdateCountry}
            isInvalid={errors.location ? true : false}
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
          "Create Company Account"
        )}
      </Button>
    </form>
  );
}
