import { Metadata } from "next";
import ShowForgetPassword from "./_components/ShowForgetPassword";
export const metadata: Metadata = {
  title: "Forget Password",
};
export default function ForgetPassword() {
  return <ShowForgetPassword />;
}
