import { cookies } from "next/headers";
import HandleJobPostCreation from "./_components/HandleJobPostCreation";

export default async function CreateJobPost() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return (
    <div className="space-y-6">
      <div>
        <p className="font-medium text-xl">Create Job Post</p>
        <p className="text-sm">
          Fill in the details to publish a new job opportunity
        </p>
      </div>

      <HandleJobPostCreation token={token?.value || ""} />
    </div>
  );
}
