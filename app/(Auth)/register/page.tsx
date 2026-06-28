import ShowRegisterPage from "./_components/ShowRegisterPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Register",
};
export default function RegisterPage() {
  return <ShowRegisterPage />;
}
