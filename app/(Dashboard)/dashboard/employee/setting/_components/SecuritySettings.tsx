import UpdatePasswordForm from "./Update_Components/UpdatePasswordForm";
import UpdateUserEmail from "./Update_Components/UpdateUserEmail";
type Props = {
  token: string;
};
export default function SecuritySettings({ token }: Props) {
  return (
    <div className="w-full px-4 py-4 md:py-0 space-y-3">
      <UpdatePasswordForm token={token} />
      <UpdateUserEmail />
    </div>
  );
}
