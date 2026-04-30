import UpdateCompanyEmailSettings from "./UpdateCompanyEmailSettings";
import UpdateCompanyPassword from "./UpdateCompanyPassword";

export default function CompanySecuritySettings() {
  return (
    <div className="w-full md:px-4 py-4 md:py-0 space-y-5">
      <UpdateCompanyPassword />
      <UpdateCompanyEmailSettings />
    </div>
  );
}
