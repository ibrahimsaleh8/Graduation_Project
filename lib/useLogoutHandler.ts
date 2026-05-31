import axios from "axios";
import { useUserStore } from "./UserStore";
import { useRouter } from "next/navigation";

export const useLogoutHandler = () => {
  const { clearUserData } = useUserStore();
  const route = useRouter();
  const logoutFn = async () => {
    await axios.get("/api/logout");
    clearUserData();
    route.replace("/");
  };

  return {
    logoutFn,
  };
};
