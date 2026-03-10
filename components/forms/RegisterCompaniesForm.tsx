import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  CreateCompanyInput,
  createCompanySchema,
} from "@/validations/RegisterValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorValidationMessage from "./ErrorValidationMessage";
import { SubmitHandler, useForm } from "react-hook-form";

export default function RegisterCompaniesForm() {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCompanyInput>({
    resolver: zodResolver(createCompanySchema),
    mode: "onSubmit",
  });
  const submitRegisterUser: SubmitHandler<CreateCompanyInput> = (data) =>
    console.log(data);
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

      <div className="flex flex-col gap-2">
        <Label htmlFor="website-url" className="text-sm">
          Website URL
        </Label>
        <Input
          {...register("websiteURL")}
          type="text"
          id="website-url"
          placeholder="Website URL"
        />
        {errors.websiteURL && (
          <ErrorValidationMessage
            message={errors.websiteURL.message as string}
          />
        )}
      </div>

      <div className="flex items-center gap-5 flex-col sm:flex-row">
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="industry" className="text-sm">
            Industry
          </Label>
          <Input
            type="text"
            id="industry"
            {...register("industry")}
            placeholder="Industry"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="address" className="text-sm">
            Address
          </Label>
          <Input
            type="text"
            id="address"
            {...register("headquarterAddress")}
            placeholder="Address"
          />
        </div>
      </div>

      {(errors.industry || errors.headquarterAddress) && (
        <div className="flex items-center gap-4">
          {errors.industry && (
            <ErrorValidationMessage
              message={errors.industry.message as string}
            />
          )}{" "}
          {errors.headquarterAddress && (
            <ErrorValidationMessage
              message={errors.headquarterAddress.message as string}
            />
          )}
        </div>
      )}

      <Button className="text-sm my-2">Create Company Account</Button>
    </form>
  );
}
