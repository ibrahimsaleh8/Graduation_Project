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
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckListIcon } from "@hugeicons/core-free-icons";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import { SubscriptionPlanDataType } from "./DisplaySubscriptionPage";
import { Dispatch, SetStateAction } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useSubscriptionPlanForm } from "./hooks/useSubscriptionPlanForm";

type Props = {
  operation: "edit" | "create";
  deafultValues?: SubscriptionPlanDataType;
  token: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export default function SubscriptionPlanForm({
  operation,
  deafultValues,
  token,
  setOpen,
}: Props) {
  const {
    onSubmit,
    isPending,
    getValues,
    errors,
    register,
    handleSubmit,
    setValue,
  } = useSubscriptionPlanForm({
    operation,
    deafultValues,
    token,
    setOpen,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="flex md:items-end gap-3 flex-wrap w-full flex-col-reverse md:flex-row">
        {/*Plan Name */}
        <div className="space-y-1 flex-1">
          <Label htmlFor="plan-name">Plan Name</Label>
          <Input
            aria-invalid={errors.planName ? "true" : "false"}
            {...register("planName")}
            id="plan-name"
            type="text"
            placeholder="e.g. Professional"
          />
        </div>
        {operation == "edit" && (
          <div className="flex items-center justify-end">
            <p className="text-xs px-4 w-full md:w-fit h-10.5 flex items-center justify-center font-medium bg-black rounded-md text-white">
              {deafultValues?.numberOfUser} Active
            </p>
          </div>
        )}
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
          aria-invalid={errors.shortDescription ? "true" : "false"}
          className="h-32 bg-input-bg"
          placeholder="Describe what makes this plan unique..."
        />
      </div>
      {errors.shortDescription && (
        <ErrorValidationMessage
          message={errors.shortDescription.message as string}
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
              aria-invalid={errors.monthlyPrice ? "true" : "false"}
              id="monthly-price"
              placeholder="0.00"
              type="number"
              defaultValue={getValues("monthlyPrice")}
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
              aria-invalid={errors.yearlyPrice ? "true" : "false"}
              id="yearly-price"
              placeholder="0.00"
              defaultValue={getValues("yearlyPrice")}
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
              aria-invalid={errors.maxJobPosts ? "true" : "false"}
              min={0}
              defaultValue={getValues("maxJobPosts")}
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
              aria-invalid={errors.featuredJobPosts ? "true" : "false"}
              defaultValue={getValues("featuredJobPosts")}
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
          defaultChecked={getValues("candidateSearch")}
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
          defaultChecked={getValues("prioritySupport")}
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
        disabled={isPending}
        type="submit"
        className="text-sm bg-main-color hover:bg-main-color/70 h-10 w-32">
        {isPending ? (
          <Spinner />
        ) : operation == "create" ? (
          "Publish Plan"
        ) : (
          "Save Changes"
        )}
      </Button>
    </form>
  );
}
