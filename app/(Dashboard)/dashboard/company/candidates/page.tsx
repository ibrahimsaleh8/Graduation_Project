import { cookies } from "next/headers";
import ShowAllCandidatesForCompany from "./_components/ShowAllCandidatesForCompany";

export default async function CandidatesPageForCompany() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return <ShowAllCandidatesForCompany token={token?.value ?? ""} />;
}
