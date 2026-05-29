"use client";
import ErrorValidationMessage from "@/components/forms/ErrorValidationMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { SkillType } from "@/hooks/useGetEmployeeProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { sileo } from "sileo";
type Props = {
  token: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  skills?: SkillType[];
};

async function addSkillApi(token: string, skillName: string) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Skill`,
    { skillName },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
}
export default function AddSkillForm({ token, setOpen, skills }: Props) {
  const queryClient = useQueryClient();
  const [skillName, setSkillName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutate, isPending } = useMutation({
    mutationFn: (skillName: string) => addSkillApi(token, skillName),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["get-my-profile-employee"] });
      sileo.success({
        title: `Skill added successfully!`,
      });
      if (setOpen) {
        setOpen(false);
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log("error ", error.response);
      sileo.error({
        title: `Failed to add skill`,
        description:
          error.response?.data?.message ||
          "An error occurred. Please try again.",
      });
    },
  });

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!skillName.trim()) {
      setErrorMessage("Skill name cannot be empty.");
      return;
    }
    if (skillName.length > 50 || skillName.trim().length < 3) {
      setErrorMessage("Skill name must be between 3 and 50 characters.");
      return;
    }

    if (skills?.some((skill) => skill.skillName === skillName)) {
      setErrorMessage("Skill already exists.");
      return;
    }
    setErrorMessage(null);
    mutate(skillName);
  };
  return (
    <div className="space-y-5">
      <form className="space-y-5" onSubmit={HandleSubmit}>
        <div className="space-y-1.5">
          <Label htmlFor="skill-title">Skill Title</Label>
          <Input
            onChange={(e) => setSkillName(e.target.value)}
            id="skill-title"
            type="text"
            placeholder="Skill Title"
            className={`${errorMessage ? "border-red-500" : "border-border-color"}`}
          />
        </div>
        {errorMessage && <ErrorValidationMessage message={errorMessage} />}
        <Button
          disabled={isPending}
          className="w-full bg-main-color hover:bg-main-color/90 text-white h-10 text-sm">
          {isPending ? <Spinner /> : "Add Skill"}
        </Button>
      </form>
    </div>
  );
}
