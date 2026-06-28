import ShowLoginPage from "./_components/ShowLoginPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
};
export default function LoginPage() {
  return <ShowLoginPage />;
}
