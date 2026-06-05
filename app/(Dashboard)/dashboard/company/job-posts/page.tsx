import { cookies } from "next/headers";
import ShowCompanyAllJobPosts from "./_components/ShowCompanyAllJobPosts";

export default async function JobPosts() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowCompanyAllJobPosts token={token?.value || ""} />;
}
