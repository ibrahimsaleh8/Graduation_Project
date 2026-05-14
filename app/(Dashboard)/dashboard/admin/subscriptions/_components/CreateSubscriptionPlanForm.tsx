"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckListIcon } from "@hugeicons/core-free-icons";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  createSubscriptionPlanSchema,
  CreateSubscriptionPlanSchemaType,
} from "@/validations/CreateSubscriptionPlanSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";

export default function CreateSubscriptionPlanForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateSubscriptionPlanSchemaType>({
    resolver: zodResolver(createSubscriptionPlanSchema),
    defaultValues: {
      planName: "",
      shortDescription: "",
      billingCycle: "monthly-yearly",
      monthlyPrice: 0,
      yearlyPrice: 0,
      maxJobPosts: 0,
      featuredJobPosts: 0,
      aiToolsAccess: false,
      candidateSearch: false,
      prioritySupport: false,
    },
  });
  const onSubmit: SubmitHandler<CreateSubscriptionPlanSchemaType> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/*Plan Name */}
      <div className="space-y-1">
        <Label htmlFor="plan-name">Plan Name</Label>
        <Input
          {...register("planName")}
          id="plan-name"
          type="text"
          placeholder="e.g. Professional"
        />
      </div>
      {errors.planName && (
        <ErrorValidationMessage message={errors.planName.message as string} />
      )}

      {/*Plan Description  */}
      <div className="space-y-1">
        <Label htmlFor="plan-desc">Short Description</Label>
        <Textarea
          {...register("shortDescription")}
          id="plan-desc"
          className="h-32 bg-input-bg"
          placeholder="Describe what makes this plan unique..."
        />
      </div>
      {errors.shortDescription && (
        <ErrorValidationMessage
          message={errors.shortDescription.message as string}
        />
      )}

      {/* Billing Cycle */}
      <div className="space-y-1">
        <Label htmlFor="billing-cycle">Billing Cycle</Label>
        <Select
          onValueChange={(e: "monthly-yearly" | "monthly" | "yearly") =>
            setValue("billingCycle", e)
          }
          defaultValue="monthly-yearly">
          <SelectTrigger
            id="billing-cycle"
            className="w-full bg-input-bg h-11! border-0">
            <SelectValue placeholder="Location Type" />
          </SelectTrigger>
          <SelectContent className="bg-white text-black">
            <SelectGroup>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="monthly-yearly">
                Monthly & Yearly
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="monthly">
                Monthly only
              </SelectItem>
              <SelectItem
                className="hover:bg-input-bg! hover:text-black!"
                value="yearly">
                Yearly only
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {errors.billingCycle && (
        <ErrorValidationMessage
          message={errors.billingCycle.message as string}
        />
      )}

      {/* Monthly & Yearly Price */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        {/* Monthly Price */}
        <div className="space-y-1">
          <Label htmlFor="monthly-price">Monthly Price</Label>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              id="monthly-price"
              placeholder="0.00"
              type="number"
              defaultValue={0}
              min={0}
              onChange={(e) => setValue("monthlyPrice", +e.target.value)}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText>USD</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Yearly Price */}
        <div className="space-y-1">
          <Label htmlFor="yearly-price">Yearly Price</Label>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              id="yearly-price"
              placeholder="0.00"
              defaultValue={0}
              min={0}
              type="number"
              onChange={(e) => setValue("yearlyPrice", +e.target.value)}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText>USD</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      {(errors.monthlyPrice || errors.yearlyPrice) && (
        <div className="flex items-center gap-6 flex-wrap">
          {errors.monthlyPrice && (
            <ErrorValidationMessage
              message={errors.monthlyPrice.message as string}
            />
          )}
          {errors.yearlyPrice && (
            <ErrorValidationMessage
              message={errors.yearlyPrice.message as string}
            />
          )}
        </div>
      )}

      <div className="flex items-center gap-2">
        <div className="size-8 flex items-center justify-center bg-input-bg rounded-md">
          <HugeiconsIcon
            icon={CheckListIcon}
            strokeWidth={2}
            className="size-4.5 text-sky-700"
          />
        </div>
        <p className="font-medium">Features & Limits</p>
      </div>

      {/* Max & Featured Job Posts */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-7">
        {/*Max Job Posts */}
        <div className="space-y-1">
          <Label htmlFor="max-jobs">Max Job Posts</Label>
          <InputGroup>
            <InputGroupInput
              id="max-jobs"
              min={0}
              defaultValue={0}
              placeholder="0"
              type="number"
              onChange={(e) => setValue("maxJobPosts", +e.target.value)}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText>/ Month</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/*Featured Job Posts */}
        <div className="space-y-1">
          <Label htmlFor="featured-jobs">Featured Job Posts</Label>
          <InputGroup>
            <InputGroupInput
              min={0}
              defaultValue={0}
              id="featured-jobs"
              placeholder="0"
              type="number"
              onChange={(e) => setValue("featuredJobPosts", +e.target.value)}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText>/ Month</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      {(errors.maxJobPosts || errors.featuredJobPosts) && (
        <div className="flex items-center gap-6 flex-wrap">
          {errors.maxJobPosts && (
            <ErrorValidationMessage
              message={errors.maxJobPosts.message as string}
            />
          )}
          {errors.featuredJobPosts && (
            <ErrorValidationMessage
              message={errors.featuredJobPosts.message as string}
            />
          )}
        </div>
      )}

      {/* AI Tools Access */}
      <div className="flex items-center justify-between gap-3 flex-wrap pb-2 border-b">
        <Label htmlFor="ai-tools" className="flex flex-col gap-1 items-start">
          <span className="font-medium">AI Tools Access</span>
          <span className="sm:text-sm text-xs text-black/70">
            Smart matching and auto-shortlisting
          </span>
        </Label>

        <Switch
          onCheckedChange={(e) => setValue("aiToolsAccess", e)}
          id="ai-tools"
          className="bg-border-color! border border-border-color data-[state=checked]:bg-main-color! cursor-pointer"
        />
      </div>

      {/* Candidate Search */}
      <div className="flex items-center justify-between gap-3 flex-wrap pb-2 border-b">
        <Label
          htmlFor="candidate-search"
          className="flex flex-col gap-1 items-start">
          <span className="font-medium">Candidate Search</span>
          <span className="sm:text-sm text-xs text-black/70">
            Full access to the global talent database
          </span>
        </Label>

        <Switch
          onCheckedChange={(e) => setValue("candidateSearch", e)}
          id="candidate-search"
          className="bg-border-color! border border-border-color data-[state=checked]:bg-main-color! cursor-pointer"
        />
      </div>

      {/* Candidate Search */}
      <div className="flex items-center justify-between gap-3 flex-wrap pb-2 border-b">
        <Label
          htmlFor="priority-support"
          className="flex flex-col gap-1 items-start">
          <span className="font-medium">Priority Support</span>
          <span className="sm:text-sm text-xs text-black/70">
            24/7 direct access to dedicated account managers
          </span>
        </Label>

        <Switch
          onCheckedChange={(e) => setValue("prioritySupport", e)}
          id="priority-support"
          className="bg-border-color! border border-border-color data-[state=checked]:bg-main-color! cursor-pointer"
        />
      </div>

      {(errors.aiToolsAccess || errors.candidateSearch) && (
        <div className="flex items-center gap-6 flex-wrap">
          {errors.aiToolsAccess && (
            <ErrorValidationMessage
              message={errors.aiToolsAccess.message as string}
            />
          )}
          {errors.candidateSearch && (
            <ErrorValidationMessage
              message={errors.candidateSearch.message as string}
            />
          )}
        </div>
      )}

      <Button
        type="submit"
        className="text-sm bg-main-color hover:bg-main-color/70 h-10 w-32">
        Publish Plan
      </Button>
    </form>
  );
}
