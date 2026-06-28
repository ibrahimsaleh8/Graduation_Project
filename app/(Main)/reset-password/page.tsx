import { Metadata } from "next";
import ResetPassword from "./_components/ResetPassword";
export const metadata: Metadata = {
  title: "Reset Password",
};
export default function ResetPassworPage() {
  return <ResetPassword />;
}
