import UpdatePasswordForm from "./Update_Components/UpdatePasswordForm";
import UpdateUserEmail from "./Update_Components/UpdateUserEmail";

export default function SecuritySettings() {
  return (
    <div className="w-full px-4 py-4 md:py-0 space-y-3">
      <UpdatePasswordForm />
      <UpdateUserEmail />
    </div>
  );
}
