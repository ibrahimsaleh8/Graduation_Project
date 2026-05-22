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
import CountrySelect from "./CountrySelect";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobCategories } from "@/lib/JobCategories";

export default function RegisterCompaniesForm() {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateCompanyInput>({
    resolver: zodResolver(createCompanySchema),
    mode: "onSubmit",
  });

  const UpdateCountry = (country: string) => {
    setValue("country", country);
  };

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

      <div className="flex items-center gap-5 flex-col sm:flex-row">
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="industry" className="text-sm">
            Main Industry
          </Label>
          <Select onValueChange={(e) => setValue("industry", e)}>
            <SelectTrigger
              id="industry"
              className="w-full bg-input-bg h-11! border-0">
              <SelectValue placeholder="Indusrty" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black border border-border-color">
              <SelectGroup>
                {jobCategories.map((cat) => (
                  <SelectItem
                    className="hover:bg-input-bg! hover:text-black!"
                    key={cat}
                    value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Label className="text-sm">Country</Label>
          <CountrySelect UpdateCountry={UpdateCountry} />
        </div>
      </div>

      {(errors.industry || errors.country) && (
        <div className="flex items-center gap-4">
          {errors.industry && (
            <ErrorValidationMessage
              message={errors.industry.message as string}
            />
          )}{" "}
          {errors.country && (
            <ErrorValidationMessage
              message={errors.country.message as string}
            />
          )}
        </div>
      )}

      <Button className="text-sm my-2">Create Company Account</Button>
    </form>
  );
}
