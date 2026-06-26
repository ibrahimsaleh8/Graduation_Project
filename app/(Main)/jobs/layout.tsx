import { NuqsAdapter } from "nuqs/adapters/next/app";
import Footer from "@/components/Home/Footer";
import { cookies } from "next/headers";
import { JobsProvider } from "./_context/JobsContext";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value ?? "";

  return (
    <>
      <NuqsAdapter>
        <JobsProvider token={token}>{children}</JobsProvider>
      </NuqsAdapter>
      <Footer />
    </>
  );
}

