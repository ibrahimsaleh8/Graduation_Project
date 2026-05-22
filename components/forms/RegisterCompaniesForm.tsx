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
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { sileo } from "sileo";
import { Spinner } from "../ui/spinner";
import { AuthResponseDataType } from "./RegisterUserForm";
async function RegisterCompanyFn(
  userData: CreateCompanyInput,
): Promise<AuthResponseDataType> {
  const res = await axios.post("/api/register/company", userData);
  return res.data;
}
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

  const { mutate, isPending } = useMutation({
    mutationFn: (userData: CreateCompanyInput) => RegisterCompanyFn(userData),
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

  const submitRegisterUser: SubmitHandler<CreateCompanyInput> = (data) => {
    console.log(data);
    mutate(data);
  };
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
